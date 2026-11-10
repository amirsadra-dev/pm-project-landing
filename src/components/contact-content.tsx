"use client";

import { useState, type FormEvent } from "react";
import { ClockIcon, MailIcon, PhoneIcon } from "./icons";
import { CompanyDetails } from "./company-details";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500";

const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300";

export function ContactContent() {
  const { t } = useSite();
  const contact = t.contact;
  const formText = contact.form;


  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState<"required" | "email" | null>(null);
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("required");
      setSent(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("email");
      setSent(false);
      return;
    }

    const subject = form.subject.trim() || formText.title;
    const body = `${form.name.trim()}\n${form.email.trim()}\n\n${form.message.trim()}`;

    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setError(null);
    setSent(true);
  };

  const errorMessage =
    error === "required" ? formText.required : error === "email" ? formText.invalidEmail : null;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 end-[-8rem] size-80 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-500/10" />
          <div className="absolute top-10 start-[-10rem] size-72 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10" />
          <div className="bg-grid absolute inset-0 opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <span className="size-1.5 rounded-full bg-brand-500" />
              {contact.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-4xl font-black leading-[1.3] tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {contact.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {contact.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div className="space-y-3">
            <a
              href={`mailto:${site.contactEmail}`}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                <MailIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold text-slate-900 dark:text-white">
                  {contact.emailLabel}
                </span>
                <span className="mt-1 block truncate text-sm text-slate-500 dark:text-slate-400" dir="ltr">
                  {site.contactEmail}
                </span>
              </span>
            </a>

            <a
              href={`tel:${site.contactPhone.replace(/\s/g, "")}`}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                <PhoneIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold text-slate-900 dark:text-white">
                  {contact.phoneLabel}
                </span>
                <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400" dir="ltr">
                  {site.contactPhone}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ClockIcon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-slate-900 dark:text-white">
                  {contact.hoursLabel}
                </span>
                <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                  {contact.hoursValue}
                </span>
              </span>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-slate-900/50">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                {contact.directTitle}
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">
                {contact.directText}
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-2 inline-block text-sm font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                dir="ltr"
              >
                {site.contactEmail}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30 sm:p-8">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {formText.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {formText.description}
            </p>

            <form className="mt-6 space-y-4" noValidate onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    {formText.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder={formText.namePlaceholder}
                    value={form.name}
                    onChange={(event) => update("name")(event.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    {formText.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder={formText.emailPlaceholder}
                    value={form.email}
                    onChange={(event) => update("email")(event.target.value)}
                    className={inputClass}
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClass}>
                  {formText.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder={formText.subjectPlaceholder}
                  value={form.subject}
                  onChange={(event) => update("subject")(event.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  {formText.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder={formText.messagePlaceholder}
                  value={form.message}
                  onChange={(event) => update("message")(event.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {errorMessage ? (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300"
                >
                  {errorMessage}
                </p>
              ) : null}

              {sent ? (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  {formText.success}
                </p>
              ) : null}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  {formText.submit}
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400">{formText.note}</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CompanyDetails />
    </>
  );
}
