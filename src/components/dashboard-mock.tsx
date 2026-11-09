"use client";

import { BellIcon, CheckIcon, ClockIcon, DeviceIcon } from "./icons";
import { useSite } from "./site-provider";

const tones = ["text-slate-900", "text-brand-600", "text-rose-600", "text-amber-600"];
const bars = ["bg-emerald-500", "bg-brand-500", "bg-rose-500"];
const widths = [64, 28, 8];

export function DashboardMock() {
  const { t } = useSite();
  const mock = t.hero.mock;

  const stats = mock.stats.map((label, index) => ({
    label,
    value: mock.statValues[index],
    tone: tones[index],
  }));

  const statusRows = [
    t.product.panel.status.completed,
    t.product.panel.status.upcoming,
    t.product.panel.status.overdue,
  ].map((label, index) => ({
    label,
    count: mock.statusCounts[index],
    width: widths[index],
    bar: bars[index],
  }));

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:shadow-black/50">
      <div className="overflow-hidden rounded-[1.25rem] bg-slate-50 ring-1 ring-slate-900/5">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white/70 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-md bg-white px-2 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
            {mock.preview}
          </span>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-[58px_1fr]">
          <div className="hidden flex-col items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-slate-200 sm:flex">
            <span className="grid size-7 place-items-center rounded-lg bg-brand-600 text-white">
              <DeviceIcon className="size-3.5" />
            </span>
            <span className="grid size-7 place-items-center rounded-lg text-slate-300">
              <ClockIcon className="size-4" />
            </span>
            <span className="grid size-7 place-items-center rounded-lg text-slate-300">
              <BellIcon className="size-4" />
            </span>
            <span className="mt-1 size-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-400" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] text-slate-500">{mock.welcome}</p>
                <p className="text-xs font-extrabold text-slate-900">{mock.title}</p>
              </div>
              <span className="rounded-full bg-white px-2 py-1 text-[9px] font-medium text-slate-500 ring-1 ring-slate-200">
                {mock.date}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white p-2.5 ring-1 ring-slate-200">
                  <p className="text-[9px] text-slate-500">{stat.label}</p>
                  <p className={`mt-1 text-base font-extrabold ${stat.tone}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-200">
                <p className="text-[9px] font-bold text-slate-700">{mock.statusTitle}</p>
                <div className="mt-2.5 space-y-2">
                  {statusRows.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-[8px] text-slate-500">
                        <span>{row.label}</span>
                        <span className="font-bold text-slate-700">{row.count}</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${row.bar}`}
                          style={{ width: `${row.width}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-200">
                <p className="text-[9px] font-bold text-slate-700">{mock.overdueTitle}</p>
                <ul className="mt-2 space-y-2">
                  {mock.overdue.map((item, index) => (
                    <li key={item.title} className="flex items-start gap-1.5">
                      <span
                        className={`mt-1 size-1.5 shrink-0 rounded-full ${
                          index === 2 ? "bg-amber-400" : "bg-rose-400"
                        }`}
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-[8px] font-medium text-slate-700">
                          {item.title}
                        </span>
                        <span
                          className={`block text-[8px] ${
                            index === 2 ? "text-amber-600" : "text-rose-500"
                          }`}
                        >
                          {item.meta}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 start-1 z-10 hidden w-56 items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:flex">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
          <CheckIcon className="size-4" />
        </span>
        <span>
          <span className="block text-[11px] font-extrabold text-slate-900">
            {mock.toastTitle}
          </span>
          <span className="block text-[10px] text-slate-500">{mock.toastMeta}</span>
        </span>
      </div>
    </div>
  );
}
