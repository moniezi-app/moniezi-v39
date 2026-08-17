/**
 * MONIEZI v39 visual-system foundation.
 *
 * This module deliberately contains no screen-specific copy or business logic.
 * It defines the shared visual language that v39 screens can opt into one by one.
 */

export const V39_VISUAL_SYSTEM_VERSION = '39.0.6';

export const monieziVisual = {
  typography: {
    family: 'Plus Jakarta Sans Variable',
    bodyWeight: 400,
    labelWeight: 500,
    headingWeight: 600,
  },
  illustration: {
    /** Thin enough to feel refined, strong enough to survive mobile scaling. */
    strokeWidth: 1.5,
    cornerRadius: 18,
    preferredWidth: 220,
    compactWidth: 164,
  },
  emptyState: {
    maxWidth: 560,
    visualMinHeight: 176,
    titleMaxWidth: 420,
    bodyMaxWidth: 500,
  },
} as const;

export type MonieziVisualScene =
  | 'welcome'
  | 'privacy'
  | 'demo'
  | 'income'
  | 'expense'
  | 'invoice'
  | 'estimate'
  | 'receipts'
  | 'mileage'
  | 'clients'
  | 'jobs'
  | 'reports'
  | 'tax';

/**
 * Scene colors are semantic accents, not complete illustration assets.
 * Each future illustration should use one dominant accent plus at most two helpers.
 */
export const monieziSceneAccent: Record<MonieziVisualScene, string> = {
  welcome: 'var(--v39-visual-blue)',
  privacy: 'var(--v39-visual-cyan)',
  demo: 'var(--v39-visual-violet)',
  income: 'var(--v39-visual-green)',
  expense: 'var(--v39-visual-rose)',
  invoice: 'var(--v39-visual-blue)',
  estimate: 'var(--v39-visual-violet)',
  receipts: 'var(--v39-visual-amber)',
  mileage: 'var(--v39-visual-cyan)',
  clients: 'var(--v39-visual-amber)',
  jobs: 'var(--v39-visual-teal)',
  reports: 'var(--v39-visual-blue)',
  tax: 'var(--v39-visual-green)',
};
