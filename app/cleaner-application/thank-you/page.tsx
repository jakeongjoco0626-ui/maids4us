"use client";

import Link from "next/link";

export default function CleanerApplicationThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-600">
          ✓
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Application Received
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Thank you for applying to MAIDS&apos;4US!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          Your cleaner application has been submitted successfully. Our team
          will review your information and contact you if we need anything else
          or when there is an update on your application.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left">
          <p className="font-semibold text-slate-900">What happens next?</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Please keep an eye on the phone number and email address you
            provided in your application. A member of the MAIDS&apos;4US team
            may contact you during the review process.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-[#1683FF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

          <Link
            href="/cleaner-application"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Submit Another Application
          </Link>
        </div>
      </div>
    </main>
  );
}
