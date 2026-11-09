"use client";

import { useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import {
  ActivityIcon,
  AlertTriangleIcon,
  BoxIcon,
  BriefcaseIcon,
  CalendarCheckIcon,
  ChartIcon,
  ChevronDownIcon,
  ClockIcon,
  FolderIcon,
  GlobeIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  RefreshIcon,
  TrendingUpIcon,
  WrenchIcon,
} from "./icons";
import { useSite } from "./site-provider";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type PageId = "dashboard" | "devices" | "schedules" | "reports";

const navItems: { id: PageId; icon: IconComponent }[] = [
  { id: "dashboard", icon: HomeIcon },
  { id: "devices", icon: BriefcaseIcon },
  { id: "schedules", icon: WrenchIcon },
  { id: "reports", icon: ChartIcon },
];

const thClass =
  "px-6 py-4 text-start text-xs font-semibold uppercase tracking-wider text-slate-600";
const tdClass = "whitespace-nowrap px-6 py-4 text-start text-sm text-slate-900";

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-800 border-green-200",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  overdue: "bg-red-100 text-red-800 border-red-200",
  active: "bg-green-100 text-green-800 border-green-200",
  inactive: "bg-slate-100 text-slate-800 border-slate-200",
  maintenance: "bg-amber-100 text-amber-800 border-amber-200",
};

function StatusBadge({ status }: { status: string }) {
  const { t } = useSite();
  const labels = t.product.panel.status as Record<string, string>;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        statusStyles[status] ?? "border-slate-200 bg-slate-100 text-slate-800"
      }`}
    >
      {labels[status] ?? status}
    </span>
  );
}

function PanelCard({
  title,
  icon,
  badge,
  children,
  className = "",
  headerClassName = "bg-slate-50/50",
  bodyClassName = "p-6",
}: {
  title: string;
  icon?: ReactNode;
  badge?: ReactNode;
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b border-slate-100 px-6 py-4 ${headerClassName}`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-base font-semibold tracking-tight text-slate-900">{title}</h3>
        </div>
        {badge}
      </div>
      {children ? <div className={bodyClassName}>{children}</div> : null}
    </div>
  );
}

function PanelTable({ head, children }: { head: ReactNode; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50/80">{head}</thead>
          <tbody className="divide-y divide-slate-100 bg-white">{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function PanelSelect({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700">
        {value}
        <ChevronDownIcon className="size-4 text-slate-400" />
      </div>
    </div>
  );
}

function DashboardPage() {
  const { t, lang } = useSite();
  const d = t.product.panel.dashboard;

  const statIcons: IconComponent[] = [BoxIcon, CalendarCheckIcon, WrenchIcon, AlertTriangleIcon];
  const statGradients = [
    "from-blue-50 to-blue-100/60 border-blue-200",
    "from-emerald-50 to-emerald-100/60 border-emerald-200",
    "from-violet-50 to-violet-100/60 border-violet-200",
    "from-red-50 to-red-100/60 border-red-200",
  ];
  const statIconBg = ["bg-blue-600", "bg-emerald-600", "bg-violet-600", "bg-red-600"];

  const bars = [
    { name: t.product.panel.status.completed, value: 184, color: "#10b981" },
    { name: t.product.panel.status.upcoming, value: 24, color: "#3b82f6" },
    { name: t.product.panel.status.overdue, value: 6, color: "#ef4444" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{d.title}</h1>
        <p className="mt-2 text-base text-slate-600">{d.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {d.stats.map((stat, index) => {
          const Icon = statIcons[index];
          return (
            <div
              key={stat.title}
              className={`overflow-hidden rounded-xl border bg-linear-to-br shadow-sm transition-all duration-200 hover:shadow-md ${statGradients[index]}`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-3xl font-bold tracking-tight text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`rounded-xl p-3 text-white shadow-lg ${statIconBg[index]}`}>
                    <Icon className="size-6" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <PanelCard
            title={d.chart.schedules}
            icon={<TrendingUpIcon className="size-4 text-slate-500" />}
          >
            <div className="relative flex h-[300px] items-end justify-around gap-6 px-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex flex-col justify-between"
              >
                {[0, 1, 2, 3].map((line) => (
                  <span key={line} className="border-t border-dashed border-slate-200" />
                ))}
              </div>
              {bars.map((bar) => (
                <div
                  key={bar.name}
                  className="relative z-10 flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-xs font-medium tabular-nums text-slate-500">
                    {bar.value.toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
                  </span>
                  <div
                    className="w-full max-w-14 rounded-t-md"
                    style={{
                      height: `${Math.max((bar.value / 184) * 100, 3)}%`,
                      backgroundColor: bar.color,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-around gap-6 border-t border-slate-200 px-4 pt-3">
              {bars.map((bar) => (
                <span key={bar.name} className="flex-1 text-center text-xs text-slate-500">
                  {bar.name}
                </span>
              ))}
            </div>
          </PanelCard>
        </div>

        <div className="lg:col-span-2">
          <PanelCard
            title={d.chart.distribution}
            icon={<ActivityIcon className="size-4 text-slate-500" />}
          >
            <div className="flex h-[300px] flex-col items-center justify-center">
              <div
                className="relative size-52 rounded-full"
                style={{
                  background:
                    "conic-gradient(#10b981 0 86%, #3b82f6 86% 97.2%, #ef4444 97.2% 100%)",
                }}
              >
                <div className="absolute inset-[21%] grid place-items-center rounded-full bg-white">
                  <span className="text-center">
                    <span className="block text-2xl font-bold text-slate-900">
                      {(214).toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
                    </span>
                    <span className="mt-1 block text-[11px] text-slate-500">{d.donutTotal}</span>
                  </span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
                {bars.map((bar) => (
                  <span key={bar.name} className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: bar.color }}
                    />
                    {bar.name}
                  </span>
                ))}
              </div>
            </div>
          </PanelCard>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard
          title={d.overdueTitle}
          icon={<AlertTriangleIcon className="size-4 text-red-500" />}
          headerClassName="bg-red-50/50"
          badge={
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
              {d.overdueCount}
            </span>
          }
          bodyClassName=""
        >
          {d.overdueItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between border-b border-slate-100 px-6 py-4 transition-colors duration-150 last:border-b-0 hover:bg-red-50/30"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{item.device}</p>
                <p className="mt-0.5 truncate text-xs text-slate-500">{item.title}</p>
              </div>
              <div className="ms-4 flex shrink-0 items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700">
                  <AlertTriangleIcon className="size-3" />
                  {item.days}
                </span>
                <span className="text-xs tabular-nums text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </PanelCard>

        <PanelCard
          title={d.upcomingTitle}
          icon={<ClockIcon className="size-4 text-blue-500" />}
          headerClassName="bg-blue-50/50"
          badge={
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {d.upcomingCount}
            </span>
          }
          bodyClassName=""
        >
          {d.upcomingItems.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-b border-slate-100 px-6 py-4 transition-colors duration-150 last:border-b-0 hover:bg-blue-50/30"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    index === 0
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "border border-slate-200 bg-slate-100 text-slate-600"
                  }`}
                >
                  {(index + 1).toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
                </div>
                {index < d.upcomingItems.length - 1 ? (
                  <div className="absolute top-8 h-full w-px bg-slate-200" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{item.device}</p>
                <p className="mt-0.5 truncate text-xs text-slate-500">{item.title}</p>
              </div>
              <div className="ms-2 shrink-0 text-end">
                <p className="text-sm font-medium tabular-nums text-slate-900">{item.date}</p>
                <span className="mt-0.5 flex items-center justify-end gap-1">
                  <ClockIcon className="size-3 text-blue-500" />
                  <span className="text-xs font-medium text-blue-600">{item.remaining}</span>
                </span>
              </div>
            </div>
          ))}
        </PanelCard>
      </div>
    </div>
  );
}

function DevicesPage() {
  const { t } = useSite();
  const d = t.product.panel.devices;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{d.title}</h1>
          <p className="mt-2 text-base text-slate-600">{d.subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden h-11 items-center rounded-lg border-2 border-slate-300 bg-white px-5 text-base font-medium text-slate-700 shadow-sm sm:inline-flex">
            {d.typesButton}
          </span>
          <span className="inline-flex h-11 items-center rounded-lg bg-blue-600 px-5 text-base font-medium text-white shadow-sm">
            {d.addButton}
          </span>
        </div>
      </div>

      <PanelCard title={d.cardTitle}>
        <div className="flex flex-col gap-3 pb-5 md:flex-row md:items-center">
          <input
            readOnly
            aria-label={d.search}
            placeholder={d.search}
            className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 md:w-44">
            {d.allStatuses}
            <ChevronDownIcon className="size-4 text-slate-400" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 md:w-48">
            {d.allTypes}
            <ChevronDownIcon className="size-4 text-slate-400" />
          </div>
        </div>

        <PanelTable
          head={
            <tr>
              {d.columns.map((column) => (
                <th key={column} className={thClass}>
                  {column}
                </th>
              ))}
            </tr>
          }
        >
          {d.rows.map((row) => (
            <tr
              key={row.name}
              className="cursor-pointer transition-colors duration-150 hover:bg-blue-50/50"
            >
              <td className={tdClass}>{row.name}</td>
              <td className={`${tdClass} text-slate-600`}>{row.type}</td>
              <td className={`${tdClass} text-slate-600`}>{row.project}</td>
              <td className={tdClass}>
                <StatusBadge status={row.status} />
              </td>
              <td className={`${tdClass} text-slate-600`}>{row.location}</td>
              <td className={`${tdClass} tabular-nums text-slate-600`}>{row.next}</td>
            </tr>
          ))}
        </PanelTable>
      </PanelCard>
    </div>
  );
}

function SchedulesPage() {
  const { t } = useSite();
  const d = t.product.panel.schedules;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{d.title}</h1>
          <p className="mt-2 text-base text-slate-600">{d.subtitle}</p>
        </div>
        <span className="inline-flex h-11 shrink-0 items-center rounded-lg bg-blue-600 px-5 text-base font-medium text-white shadow-sm">
          {d.createButton}
        </span>
      </div>

      <PanelCard title={d.cardTitle}>
        <div className="space-y-4">
          <div className="flex gap-4">
            <PanelSelect label={d.filterLabel} value={d.filterAll} className="w-48" />
          </div>

          <PanelTable
            head={
              <tr>
                {d.columns.map((column) => (
                  <th key={column} className={thClass}>
                    {column}
                  </th>
                ))}
              </tr>
            }
          >
            {d.rows.map((row) => (
              <tr
                key={row.title}
                className="cursor-pointer transition-colors duration-150 hover:bg-blue-50/50"
              >
                <td className={`${tdClass} font-medium`}>{row.title}</td>
                <td className={`${tdClass} text-slate-600`}>{row.device}</td>
                <td className={`${tdClass} text-slate-600`}>{row.type}</td>
                <td className={`${tdClass} tabular-nums text-slate-600`}>{row.next}</td>
                <td className={`${tdClass} text-slate-600`}>{row.assigned}</td>
                <td className={tdClass}>
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </PanelTable>
        </div>
      </PanelCard>
    </div>
  );
}

function ReportsPage() {
  const { t } = useSite();
  const d = t.product.panel.reports;

  const gradients = [
    "from-blue-50 to-blue-100/60 border-blue-200",
    "from-indigo-50 to-indigo-100/60 border-indigo-200",
    "from-green-50 to-green-100/60 border-green-200",
    "from-yellow-50 to-yellow-100/60 border-yellow-200",
    "from-red-50 to-red-100/60 border-red-200",
    "from-emerald-50 to-emerald-100/60 border-emerald-200",
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{d.title}</h1>
          <p className="mt-2 text-base text-slate-600">{d.subtitle}</p>
        </div>
        <span className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm">
          <RefreshIcon className="size-4" />
          {d.refresh}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {d.summary.map((card, index) => (
          <PanelCard
            key={card.title}
            title={card.title}
            className={`bg-linear-to-br ${gradients[index]}`}
          >
            <p className="text-3xl font-bold text-slate-900">{card.value}</p>
          </PanelCard>
        ))}
      </div>

      <PanelCard title={d.partsTitle}>
        <PanelTable
          head={
            <tr>
              {d.partsColumns.map((column) => (
                <th key={column} className={thClass}>
                  {column}
                </th>
              ))}
            </tr>
          }
        >
          {d.partsRows.map((part) => (
            <tr key={part.part} className="transition-colors duration-150 hover:bg-blue-50/50">
              <td className={tdClass}>{part.part}</td>
              <td className={`${tdClass} text-slate-600`}>{part.device}</td>
              <td className={`${tdClass} tabular-nums text-slate-600`}>{part.expiry}</td>
              <td className={`${tdClass} text-amber-700`}>{part.days}</td>
            </tr>
          ))}
        </PanelTable>
      </PanelCard>

      <PanelCard title={d.filters.title}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PanelSelect label={d.filters.project} value={d.filters.allProjects} />
          <PanelSelect label={d.filters.device} value={d.filters.allDevices} />
          <PanelSelect label={d.filters.type} value={d.filters.allTypes} />
          <PanelSelect label={d.filters.status} value={d.filters.allStatuses} />
          <div>
            <span className="mb-2 block text-sm font-medium text-slate-700">
              {d.filters.start}
            </span>
            <span className="flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-400">
              {d.filters.startValue}
            </span>
          </div>
          <div>
            <span className="mb-2 block text-sm font-medium text-slate-700">{d.filters.end}</span>
            <span className="flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-400">
              {d.filters.endValue}
            </span>
          </div>
          <div className="flex items-end">
            <span className="inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100">
              {d.filters.reset}
            </span>
          </div>
        </div>
      </PanelCard>

      <PanelCard title={d.itemsTitle}>
        <PanelTable
          head={
            <tr>
              {d.itemsColumns.map((column) => (
                <th key={column} className={thClass}>
                  {column}
                </th>
              ))}
            </tr>
          }
        >
          {d.itemsRows.map((item) => (
            <tr
              key={`${item.device}-${item.type}`}
              className="transition-colors duration-150 hover:bg-blue-50/50"
            >
              <td className={tdClass}>{item.device}</td>
              <td className={`${tdClass} text-slate-600`}>{item.project}</td>
              <td className={`${tdClass} text-slate-600`}>{item.type}</td>
              <td className={tdClass}>
                <StatusBadge status={item.status} />
              </td>
              <td className={`${tdClass} tabular-nums text-slate-600`}>{item.date}</td>
              <td className={`${tdClass} tabular-nums text-slate-600`}>{item.cost}</td>
            </tr>
          ))}
        </PanelTable>
      </PanelCard>
    </div>
  );
}

export function ProductTabs() {
  const { t } = useSite();
  const [active, setActive] = useState<PageId>("dashboard");

  return (
    <section
      id="product"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-100 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
            {t.product.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {t.product.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {t.product.description}
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:shadow-black/50"
          style={{ colorScheme: "light" }}
        >
          <div className="flex h-[640px] sm:h-[720px]">
            <aside className="hidden w-64 shrink-0 flex-col justify-between border-e border-slate-200 bg-white lg:flex">
              <div>
                <div className="flex h-16 items-center justify-center border-b border-slate-200 bg-slate-50">
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    {t.brand.name}
                  </span>
                </div>

                <nav aria-label={t.product.eyebrow} className="mt-6 space-y-1 px-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setActive(item.id)}
                        className={`group flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <Icon
                          className={`me-3 size-5 shrink-0 transition-transform duration-200 ${
                            isActive ? "text-white" : "text-slate-500 group-hover:text-slate-700"
                          }`}
                        />
                        {t.product.panel.nav[item.id]}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="w-full border-t border-slate-200 bg-slate-50/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-700 font-semibold text-white shadow-md">
                      {t.product.panel.profile.name.charAt(0)}
                    </div>
                    <div className="ms-3 min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {t.product.panel.profile.name}
                      </p>
                      <p className="truncate text-xs text-slate-500">{t.product.panel.profile.email}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                        {t.product.panel.profile.role}
                      </p>
                    </div>
                  </div>
                  <span className="ms-2 rounded-lg p-2 text-slate-500" title={t.product.panel.profile.logout}>
                    <LogOutIcon className="size-5" />
                  </span>
                </div>
              </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">
              <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm lg:px-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg p-2 text-slate-600 lg:hidden">
                    <MenuIcon className="size-6" />
                  </span>
                  <span className="flex max-w-[220px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                    <FolderIcon className="size-4 shrink-0 text-slate-500" />
                    <span className="truncate">{t.product.panel.header.allProjects}</span>
                    <ChevronDownIcon className="size-4 shrink-0 text-slate-400" />
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden text-lg font-semibold capitalize tracking-tight text-slate-900 sm:block">
                    {t.product.panel.pageTitles[active]}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-600">
                    <GlobeIcon className="size-4 text-slate-500" />
                    {t.product.panel.header.languageLabel}
                  </span>
                </div>
              </header>

              <div className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2 lg:hidden">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(item.id)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="size-4" />
                      {t.product.panel.nav[item.id]}
                    </button>
                  );
                })}
              </div>

              <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
                {active === "dashboard" ? <DashboardPage /> : null}
                {active === "devices" ? <DevicesPage /> : null}
                {active === "schedules" ? <SchedulesPage /> : null}
                {active === "reports" ? <ReportsPage /> : null}
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
