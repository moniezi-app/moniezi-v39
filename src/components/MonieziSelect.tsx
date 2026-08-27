import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, X } from 'lucide-react';

export type MonieziSelectOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  group?: string;
};

type MonieziSelectProps = {
  value: string;
  options: MonieziSelectOption[];
  onChange: (value: string) => void;
  className?: string;
  menuClassName?: string;
  ariaLabel?: string;
  disabled?: boolean;
  placeholder?: React.ReactNode;
  menuMinWidth?: number;
  menuVariant?: 'default' | 'screen';
  menuTitle?: string;
  menuSubtitle?: string;
  autoOpen?: boolean;
  hideTrigger?: boolean;
  onDismiss?: () => void;
};

type MenuPosition = {
  left: number;
  top: number;
  width: number;
  maxHeight: number;
};

const VIEWPORT_MARGIN = 12;
const DEFAULT_MENU_MIN_WIDTH = 180;
const MAX_MENU_HEIGHT = 320;
const publicBase = import.meta.env.BASE_URL;

export function MonieziSelect({
  value,
  options,
  onChange,
  className = '',
  menuClassName = '',
  ariaLabel,
  disabled = false,
  placeholder = 'Select',
  menuMinWidth = DEFAULT_MENU_MIN_WIDTH,
  menuVariant = 'default',
  menuTitle = 'Choose an item',
  menuSubtitle = '',
  autoOpen = false,
  hideTrigger = false,
  onDismiss,
}: MonieziSelectProps) {
  const [open, setOpen] = useState(autoOpen);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find(option => option.value === value),
    [options, value],
  );

  const updatePosition = useCallback(() => {
    if (typeof window === 'undefined') return;

    const viewportWidth = window.visualViewport?.width || window.innerWidth;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const viewportTop = window.visualViewport?.offsetTop || 0;
    const viewportLeft = window.visualViewport?.offsetLeft || 0;

    // Screen-style menus are viewport panels and do not need a visible trigger.
    // This lets the same component launch directly from Home/Activity as well
    // as from an already-selected Add form.
    if (menuVariant === 'screen') {
      setMenuPosition({
        left: viewportLeft + VIEWPORT_MARGIN,
        top: viewportTop + VIEWPORT_MARGIN,
        width: Math.max(280, viewportWidth - VIEWPORT_MARGIN * 2),
        maxHeight: Math.max(280, viewportHeight - VIEWPORT_MARGIN * 2),
      });
      return;
    }

    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();

    const width = Math.min(
      Math.max(rect.width, menuMinWidth),
      Math.max(160, viewportWidth - VIEWPORT_MARGIN * 2),
    );

    const preferredMaxHeight = Math.min(MAX_MENU_HEIGHT, Math.max(160, viewportHeight - VIEWPORT_MARGIN * 2));
    const roomBelow = viewportTop + viewportHeight - rect.bottom - VIEWPORT_MARGIN;
    const roomAbove = rect.top - viewportTop - VIEWPORT_MARGIN;
    const openAbove = roomBelow < Math.min(220, preferredMaxHeight) && roomAbove > roomBelow;
    const maxHeight = Math.max(140, Math.min(preferredMaxHeight, openAbove ? roomAbove : roomBelow));

    const unclampedLeft = rect.left;
    const minLeft = viewportLeft + VIEWPORT_MARGIN;
    const maxLeft = viewportLeft + viewportWidth - width - VIEWPORT_MARGIN;
    const left = Math.min(Math.max(unclampedLeft, minLeft), Math.max(minLeft, maxLeft));
    const top = openAbove
      ? Math.max(viewportTop + VIEWPORT_MARGIN, rect.top - maxHeight - 6)
      : Math.min(viewportTop + viewportHeight - VIEWPORT_MARGIN - 40, rect.bottom + 6);

    setMenuPosition({ left, top, width, maxHeight });
  }, [menuMinWidth, menuVariant]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition, options.length]);

  const dismissMenu = useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [onDismiss]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      dismissMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismissMenu();
        triggerRef.current?.focus();
      }
    };

    const handleViewportChange = () => updatePosition();

    document.addEventListener('pointerdown', handlePointerDown, true);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);
    window.visualViewport?.addEventListener('resize', handleViewportChange);
    window.visualViewport?.addEventListener('scroll', handleViewportChange);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
      window.visualViewport?.removeEventListener('resize', handleViewportChange);
      window.visualViewport?.removeEventListener('scroll', handleViewportChange);
    };
  }, [dismissMenu, open, updatePosition]);

  const choose = (nextValue: string, optionDisabled?: boolean) => {
    if (optionDisabled) return;
    onChange(nextValue);
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const popup = open && menuPosition && typeof document !== 'undefined'
    ? createPortal(
        <>
          {menuVariant === 'screen' ? (
            <button
              type="button"
              aria-label="Close choices"
              onClick={dismissMenu}
              className="fixed inset-0 cursor-default bg-slate-950/70 backdrop-blur-[2px]"
              style={{ zIndex: 199999 }}
            />
          ) : null}
          <div
            ref={menuRef}
            role="listbox"
            aria-label={ariaLabel}
            className={`v392-select-menu ${menuVariant === 'screen'
              ? 'v39433-add-choice-screen fixed flex flex-col overflow-hidden border border-blue-300 bg-white p-3 font-sans shadow-2xl dark:border-blue-400/30 dark:bg-slate-950'
              : 'fixed overflow-y-auto overscroll-contain border border-slate-300 bg-white p-1.5 shadow-2xl dark:border-slate-700 dark:bg-slate-900'} ${menuClassName}`.trim()}
            style={{
              left: menuPosition.left,
              top: menuPosition.top,
              width: menuPosition.width,
              maxHeight: menuPosition.maxHeight,
              borderRadius: menuVariant === 'screen' ? '18px' : '10px',
              zIndex: 200000,
            }}
          >
            {menuVariant === 'screen' ? (
              <div className={`v39435-add-choice-header mb-2 flex items-center ${menuTitle ? 'justify-between border-b border-slate-200 px-2 pb-3 pt-1 dark:border-slate-700/80' : 'justify-end px-1 pb-1 pt-1'}`}>
                {menuTitle ? (
                  <div className="min-w-0 pr-4">
                    <div className="text-[22px] font-extrabold leading-tight tracking-[-0.025em] text-slate-950 dark:text-white">{menuTitle}</div>
                    {menuSubtitle ? <div className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{menuSubtitle}</div> : null}
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={dismissMenu}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  aria-label="Close choices"
                >
                  <X size={24} strokeWidth={2.2} />
                </button>
              </div>
            ) : null}
            <div className={menuVariant === 'screen' ? 'v39434-add-choice-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-1 pb-1' : ''}>
              {menuVariant === 'screen' ? (
                <div className="v39454-add-choice-layout">
                  <div className="v39454-add-choice-hero" aria-hidden="true">
                    <img
                      src={`${publicBase}quick-add-hero-v39-4-54-shared.webp`}
                      alt=""
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="v39454-add-choice-grid">
                    {options.map(option => {
                      const selected = option.value === value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          disabled={option.disabled}
                          onClick={() => choose(option.value, option.disabled)}
                          className={`v39433-add-choice-card ${selected ? 'is-selected' : ''} ${option.disabled ? 'is-disabled' : ''}`}
                        >
                          <span className="v39433-add-choice-card__label">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                options.map((option, index) => {
                  const selected = option.value === value;
                  const previousGroup = index > 0 ? options[index - 1].group : undefined;
                  const showGroup = Boolean(option.group && option.group !== previousGroup);
                  return (
                    <React.Fragment key={option.value}>
                      {showGroup ? (
                        <div className="px-3 pb-1 pt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                          {option.group}
                        </div>
                      ) : null}
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected}
                        disabled={option.disabled}
                        onClick={() => choose(option.value, option.disabled)}
                        className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors ${selected ? 'bg-blue-50 text-blue-800 dark:bg-blue-500/15 dark:text-blue-200' : 'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'} ${option.disabled ? 'cursor-not-allowed opacity-45' : ''}`}
                      >
                        <span className="min-w-0 flex-1 break-words">{option.label}</span>
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                          {selected ? <Check size={16} strokeWidth={2.4} /> : null}
                        </span>
                      </button>
                    </React.Fragment>
                  );
                })
              )}
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <>
      {!hideTrigger ? (
        <button
          ref={triggerRef}
          type="button"
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={open}
          disabled={disabled}
          onClick={() => {
            if (disabled) return;
            setOpen(current => !current);
          }}
          className={`v392-select-trigger inline-flex items-center justify-between gap-2 text-left disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
        >
          <span className="min-w-0 flex-1 truncate">{selectedOption?.label ?? placeholder}</span>
          <ChevronDown size={15} strokeWidth={2} className={`flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      ) : null}
      {popup}
    </>
  );
}
