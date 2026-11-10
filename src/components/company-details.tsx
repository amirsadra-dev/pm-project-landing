"use client";

import { BoxIcon, BriefcaseIcon, HomeIcon } from "./icons";
import { useSite } from "./site-provider";

export function CompanyDetails() {
  const { t } = useSite();
  const company = t.company;

  const identity: { label: string; value: string; sub?: string; ltr?: boolean }[] = [
    { label: company.legalNameLabel, value: company.legalName, sub: company.legalNameEn },
    { label: company.typeLabel, value: company.typeValue },
    { label: company.ceoLabel, value: company.ceoValue },
    { label: company.registrationLabel, value: company.registrationValue, ltr: true },
    { label: company.postalLabel, value: company.postalValue, ltr: true },
    { label: company.telLabel, value: company.telValue, ltr: true },
    { label: company.shippingContactLabel, value: company.shippingContactValue, ltr: true },
  ];

  return (
    <section className="border-t border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
            {company.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white">
            {company.title}
          </h2>
          <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
            {company.description}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <BriefcaseIcon className="size-3.5" />
            {company.activity}
          </p>
        </div>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {identity.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-extrabold leading-6 text-slate-900 tabular-nums dark:text-white">
                {item.ltr ? <span dir="ltr">{item.value}</span> : item.value}
              </dd>
              {item.sub ? (
                <dd className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400" dir="ltr">
                  {item.sub}
                </dd>
              ) : null}
            </div>
          ))}
        </dl>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
              <HomeIcon className="size-4.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {company.invoiceAddressLabel}
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {company.invoiceAddressValue}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <BoxIcon className="size-4.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {company.shippingAddressLabel}
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {company.shippingAddressValue}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/70 px-4 py-3 text-xs leading-6 text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          {company.shippingNote}{" "}
          <a
            href={`tel:${company.telValue}`}
            className="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            dir="ltr"
          >
            {company.telValue}
          </a>
        </p>
      </div>
    </section>
  );
}
