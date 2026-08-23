import React, { useEffect, useMemo, useState } from "react";
import {
  RefreshCcw,
  AlertTriangle,
  Info,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Target,
  Calendar,
  Activity,
  ShoppingCart,
  Bell,
  Sparkles,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import type { Transaction, Invoice, Estimate, MileageTrip, TaxPayment, UserSettings } from "./types";
import {
  generateInsights,
  getDismissedInsightIds,
  dismissInsightId,
  clearDismissedInsights,
  type Insight,
  type InsightCategory,
} from "./services/insightsEngine";

type Props = {
  transactions: Transaction[];
  invoices: Invoice[];
  estimates: Estimate[];
  mileageTrips: MileageTrip[];
  taxPayments: TaxPayment[];
  settings: UserSettings;
};

function getCategoryIcon(category: InsightCategory) {
  switch (category) {
    case "cashflow": return <Activity className="w-5 h-5" />;
    case "spending": return <ShoppingCart className="w-5 h-5" />;
    case "income": return <TrendingUp className="w-5 h-5" />;
    case "budget": return <Target className="w-5 h-5" />;
    case "patterns": return <Calendar className="w-5 h-5" />;
    case "subscriptions": return <Bell className="w-5 h-5" />;
    case "forecast": return <Sparkles className="w-5 h-5" />;
    case "savings": return <DollarSign className="w-5 h-5" />;
    default: return <Info className="w-5 h-5" />;
  }
}

function severityColors(severity: Insight["severity"]) {
  switch (severity) {
    case "high":
      return {
        icon: "text-red-500",
        bg: "bg-red-50 dark:bg-red-950/20",
      };
    case "medium":
      return {
        icon: "text-amber-500",
        bg: "bg-amber-50 dark:bg-amber-950/20",
      };
    default:
      return {
        icon: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/20",
      };
  }
}

export default function InsightsDashboard({
  transactions,
  invoices,
  estimates,
  mileageTrips,
  taxPayments,
  settings,
}: Props) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedInsights, setExpandedInsights] = useState<Set<string>>(new Set());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setDismissed(new Set(getDismissedInsightIds()));
  }, []);

  const allInsights: Insight[] = useMemo(() => {
    return generateInsights({ transactions, invoices, estimates, mileageTrips, taxPayments, settings });
  }, [transactions, invoices, estimates, mileageTrips, taxPayments, settings]);

  const insightsBySeverity = useMemo(() => {
    const active = allInsights.filter((i) => !dismissed.has(i.id));
    active.sort((a, b) => b.priority - a.priority);

    return {
      high: active.filter((i) => i.severity === "high"),
      medium: active.filter((i) => i.severity === "medium"),
      low: active.filter((i) => i.severity === "low"),
    };
  }, [allInsights, dismissed]);

  const stats = useMemo(() => {
    const active = allInsights.filter((i) => !dismissed.has(i.id));
    return {
      active: active.length,
      high: insightsBySeverity.high.length,
      medium: insightsBySeverity.medium.length,
      actionable: active.filter((i) => i.actionable).length,
      dismissed: allInsights.filter((i) => dismissed.has(i.id)).length,
    };
  }, [allInsights, dismissed, insightsBySeverity]);

  const dismiss = (id: string) => {
    dismissInsightId(id);
    setDismissed(new Set(getDismissedInsightIds()));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const resetDismissed = () => {
    clearDismissedInsights();
    setDismissed(new Set());
  };

  const toggleCategory = (severity: string) => {
    const next = new Set(expandedCategories);
    if (next.has(severity)) next.delete(severity);
    else next.add(severity);
    setExpandedCategories(next);
  };

  const toggleInsightDetail = (id: string) => {
    const next = new Set(expandedInsights);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedInsights(next);
  };

  const renderInsightSection = (severity: "high" | "medium" | "low", insights: Insight[]) => {
    if (insights.length === 0) return null;

    const isExpanded = expandedCategories.has(severity);
    const colors = severityColors(severity);
    const labels = {
      high: { title: "High Priority", icon: AlertTriangle },
      medium: { title: "Medium Priority", icon: Info },
      low: { title: "Good News", icon: CheckCircle2 },
    };
    const label = labels[severity];
    const Icon = label.icon;

    return (
      <section key={severity} className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => toggleCategory(severity)}
          className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60 sm:px-5"
        >
          <div className="flex min-w-0 items-center gap-3.5">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.bg}`}>
              <Icon className={`w-5 h-5 ${colors.icon}`} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[18px] font-bold leading-tight text-slate-900 dark:text-white">
                {label.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                {insights.length} {insights.length === 1 ? "insight" : "insights"}
              </p>
            </div>
          </div>
          <ChevronDown
            className={`h-6 w-6 shrink-0 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        {isExpanded && (
          <div className="border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950/25">
            {insights.map((insight, index) => {
              const isDetailExpanded = expandedInsights.has(insight.id);

              return (
                <article
                  key={insight.id}
                  className={`${index !== 0 ? "border-t border-slate-200 dark:border-slate-800" : ""} px-4 py-5 sm:px-5 sm:py-6`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.icon}`}>
                      {getCategoryIcon(insight.category)}
                    </div>
                    <h4 className="min-w-0 flex-1 text-[17px] font-bold leading-snug text-slate-900 dark:text-white">
                      {insight.title}
                    </h4>
                  </div>

                  <p className="mt-4 text-[15px] font-medium leading-6 text-slate-600 dark:text-slate-300">
                    {insight.message}
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1.5 text-xs font-semibold capitalize text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {insight.category}
                    </span>
                    {insight.actionable && (
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                          <Target className="h-3.5 w-3.5" /> Action
                        </span>
                      </div>
                    )}
                  </div>

                  {insight.detail && (
                    <div className="mt-5">
                      {isDetailExpanded && (
                        <div className="mb-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                          <p className="text-[15px] font-medium leading-6 text-slate-700 dark:text-slate-300">
                            {insight.detail}
                          </p>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleInsightDetail(insight.id)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
                      >
                        {isDetailExpanded ? (
                          <><ChevronUp className="h-4 w-4" /> Hide Details</>
                        ) : (
                          <><ChevronRight className="h-4 w-4" /> View Recommendation</>
                        )}
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => dismiss(insight.id)}
                    className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Dismiss
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 pb-24">
      {/* v39.4.7 — Business Insights is a normal routed MONIEZI page. There is
          no modal shell, close button, sticky internal header, or nested scroll. */}
      <div className="v392-page-header flex items-center gap-3">
        <div className="v392-page-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
          <BrainCircuit size={23} strokeWidth={1.8} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-brand">
          Business Insights
        </h2>
      </div>

      <button
        type="button"
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-[15px] font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <RefreshCcw className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`} />
        Refresh Insights
      </button>

      {(stats.high > 0 || stats.medium > 0 || stats.actionable > 0 || stats.dismissed > 0) && (
        <div className="space-y-3.5">
          {stats.high > 0 && (
            <div className="w-full rounded-xl border border-red-200 bg-red-100 px-4 py-4 text-[15px] font-bold text-red-700 dark:border-red-800/50 dark:bg-red-900/30 dark:text-red-300">
              {stats.high} High
            </div>
          )}
          {stats.medium > 0 && (
            <div className="w-full rounded-xl border border-amber-200 bg-amber-100 px-4 py-4 text-[15px] font-bold text-amber-700 dark:border-amber-800/50 dark:bg-amber-900/30 dark:text-amber-300">
              {stats.medium} Medium
            </div>
          )}
          {stats.actionable > 0 && (
            <div className="w-full rounded-xl border border-purple-200 bg-purple-100 px-4 py-4 text-[15px] font-bold text-purple-700 dark:border-purple-800/50 dark:bg-purple-900/30 dark:text-purple-300">
              {stats.actionable} Need Action
            </div>
          )}
          {stats.dismissed > 0 && (
            <button
              type="button"
              onClick={resetDismissed}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-left text-[15px] font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Reset Dismissed
            </button>
          )}
        </div>
      )}

      {stats.active === 0 ? (
        <section className="rounded-xl border border-slate-300 bg-white px-5 py-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg">
            <BrainCircuit className="h-8 w-8 text-white" strokeWidth={1.2} />
          </div>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">All Clear!</h3>
          <p className="mx-auto mt-3 max-w-sm text-[15px] font-medium leading-6 text-slate-600 dark:text-slate-300">
            No active insights. Add more transactions or reset dismissed insights.
          </p>
        </section>
      ) : (
        <div className="space-y-4">
          {renderInsightSection("high", insightsBySeverity.high)}
          {renderInsightSection("medium", insightsBySeverity.medium)}
          {renderInsightSection("low", insightsBySeverity.low)}
        </div>
      )}
    </div>
  );
}
