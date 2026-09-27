"use client";

import Link from "next/link";

const pricingPlans = [
  {
    title: "You Provide Cleaning Materials",
    price: "$55",
    description:
      "A budget-friendly option where the customer provides the cleaning materials and equipment.",
    features: [
      "Professional cleaner",
      "Customer provides cleaning materials",
      "Customer provides vacuum, mop, and equipment",
      "Regular cleaning services",
      "Kitchen, bathrooms, bedrooms & living areas",
      "Vacuuming and mopping",
      "Dusting and surface cleaning",
      "Trash and recycling removal",
    ],
    badge: "STANDARD",
  },
  {
    title: "We Provide Cleaning Materials",
    price: "$65",
    description:
      "Let MAIDS'4US bring the cleaning materials and professional equipment needed for your service.",
    features: [
      "Professional cleaner",
      "MAIDS'4US provides cleaning materials",
      "Professional vacuum and mop",
      "Professional cleaning products",
      "Regular cleaning services",
      "Kitchen, bathrooms, bedrooms & living areas",
      "Vacuuming and mopping",
      "Trash and recycling removal",
    ],
    badge: "MOST POPULAR",
  },
  {
    title: "Same-Day Booking",
    price: "$85",
    description:
      "Need your home cleaned quickly? Request a same-day cleaning service when available.",
    features: [
      "Same-day booking request",
      "Priority scheduling",
      "Professional cleaner",
      "Cleaning materials included",
      "Professional equipment included",
      "Kitchen and bathroom cleaning",
      "Bedroom and living area cleaning",
      "Vacuuming and mopping",
    ],
    badge: "SAME DAY",
  },
  {
    title: "Biohazard Cleaning",
    price: "$95",
    description:
      "Specialized cleaning service for situations requiring additional care and attention.",
    features: [
      "Professional cleaning service",
      "Biohazard-focused cleaning",
      "Cleaning materials included",
      "Professional equipment included",
      "Detailed cleaning process",
      "Careful handling of affected areas",
      "Disinfection-focused cleaning",
      "Service scheduled based on availability",
    ],
    badge: "SPECIALTY",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F1F5F9] text-slate-900">
      {/* NAVIGATION */}
      <header className="border-b-2 border-slate-900 bg-[#071A33] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            MAIDS<span className="text-[#38BDF8]">'4</span>US
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className="rounded-lg border-2 border-transparent px-4 py-2 text-sm font-bold transition hover:border-white hover:bg-white hover:text-[#071A33]"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="rounded-lg border-2 border-transparent px-4 py-2 text-sm font-bold transition hover:border-white hover:bg-white hover:text-[#071A33]"
            >
              ABOUT US
            </Link>

            <Link
              href="/services"
              className="rounded-lg border-2 border-transparent px-4 py-2 text-sm font-bold transition hover:border-white hover:bg-white hover:text-[#071A33]"
            >
              SERVICES
            </Link>

            <Link
              href="/pricing"
              className="rounded-lg border-2 border-[#38BDF8] bg-[#38BDF8] px-4 py-2 text-sm font-black text-[#071A33]"
            >
              PRICING
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border-2 border-transparent px-4 py-2 text-sm font-bold transition hover:border-white hover:bg-white hover:text-[#071A33]"
            >
              CONTACT US
            </Link>
          </nav>

          <Link
            href="/booking"
            className="rounded-lg border-2 border-white bg-white px-5 py-2.5 text-sm font-black text-[#071A33] transition hover:bg-[#38BDF8] hover:border-[#38BDF8]"
          >
            BOOK NOW
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-2 border-slate-900 bg-[#071A33] px-6 py-16 text-white lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex rounded-full border-2 border-[#38BDF8] bg-[#0B274D] px-5 py-2 text-sm font-black tracking-wide text-[#38BDF8]">
            SIMPLE • TRANSPARENT • UPFRONT
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            House Cleaning Prices in New York City
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-200 sm:text-xl">
            Compare MAIDS'4US hourly house cleaning rates for homes and apartments
            across Manhattan, Brooklyn, Queens, and the Bronx. Choose the option
            that fits your cleaning needs, supplies, and schedule.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="rounded-xl border-2 border-[#38BDF8] bg-[#38BDF8] px-7 py-4 text-base font-black text-[#071A33] transition hover:bg-white hover:border-white"
            >
              BOOK A CLEANING
            </Link>

            <Link
              href="/services"
              className="rounded-xl border-2 border-white bg-transparent px-7 py-4 text-base font-black text-white transition hover:bg-white hover:text-[#071A33]"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0369A1]">
              NYC CLEANING RATES
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071A33] sm:text-4xl">
              Choose Your Cleaning Option
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">
              All prices are hourly rates. Your final service cost depends
              on the number of hours required to complete your cleaning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article
                key={plan.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-slate-900 bg-white shadow-[0_8px_0_0_#071A33]"
              >
                {/* BADGE */}
                <div className="border-b-2 border-slate-900 bg-[#071A33] px-5 py-3 text-center text-xs font-black tracking-widest text-white">
                  {plan.badge}
                </div>

                {/* PRICE */}
                <div className="border-b-2 border-slate-900 bg-slate-50 px-6 py-7">
                  <p className="text-sm font-black uppercase tracking-wide text-[#0369A1]">
                    {plan.title}
                  </p>

                  <div className="mt-3 flex items-end">
                    <span className="text-5xl font-black tracking-tight text-[#071A33]">
                      {plan.price}
                    </span>

                    <span className="mb-2 ml-2 text-base font-bold text-slate-600">
                      /hour
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
                    {plan.description}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="mb-5 text-sm font-black uppercase tracking-wide text-[#071A33]">
                    What's Included
                  </h3>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm font-semibold leading-5 text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38BDF8] text-xs font-black text-[#071A33]">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/booking"
                      className="block w-full rounded-xl border-2 border-[#071A33] bg-[#071A33] px-5 py-3.5 text-center text-sm font-black text-white transition hover:border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#071A33]"
                    >
                      BOOK THIS SERVICE
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-y-2 border-slate-900 bg-[#E0F2FE] px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0369A1]">
            NEW YORK CITY SERVICE AREA
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#071A33] sm:text-4xl">
            Cleaning Services Across NYC
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-medium leading-7 text-slate-700">
            MAIDS&apos;4US provides house and apartment cleaning services in
            Manhattan, Brooklyn, Queens, and the Bronx. Availability may vary by
            date, time, service type, and cleaner availability.
          </p>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="border-b-2 border-slate-900 bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0369A1]">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#071A33] sm:text-4xl">
              Simple Hourly Pricing
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-slate-900 bg-[#F1F5F9] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#38BDF8] text-xl font-black text-[#071A33]">
                1
              </div>

              <h3 className="text-xl font-black text-[#071A33]">
                Choose Your Service
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-600">
                Select the cleaning service and pricing option that best
                matches your needs.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-900 bg-[#F1F5F9] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#38BDF8] text-xl font-black text-[#071A33]">
                2
              </div>

              <h3 className="text-xl font-black text-[#071A33]">
                Select Your Time
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-600">
                Tell us your preferred date and time and provide the
                details needed for your cleaning.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-900 bg-[#F1F5F9] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#38BDF8] text-xl font-black text-[#071A33]">
                3
              </div>

              <h3 className="text-xl font-black text-[#071A33]">
                Enjoy a Cleaner Home
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-600">
                A professional MAIDS'4US cleaner arrives and takes care
                of your cleaning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT PRICING NOTE */}
      <section className="px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-2xl border-2 border-slate-900 bg-[#071A33] p-8 text-white shadow-[0_8px_0_0_#38BDF8] sm:p-10">
          <h2 className="text-2xl font-black sm:text-3xl">
            A Few Things to Know
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border-2 border-slate-600 bg-[#0B274D] p-5">
              <h3 className="font-black text-[#38BDF8]">
                Hourly Rates
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                Our listed prices are hourly rates. The total price
                depends on the amount of time required to complete the
                service.
              </p>
            </div>

            <div className="rounded-xl border-2 border-slate-600 bg-[#0B274D] p-5">
              <h3 className="font-black text-[#38BDF8]">
                Service Availability
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                Same-day and specialty cleaning requests are subject to
                cleaner availability and scheduling.
              </p>
            </div>

            <div className="rounded-xl border-2 border-slate-600 bg-[#0B274D] p-5">
              <h3 className="font-black text-[#38BDF8]">
                Cleaning Materials
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                The $55 option requires the customer to provide cleaning
                materials. The $65 and $85 options include cleaning
                materials and professional equipment.
              </p>
            </div>

            <div className="rounded-xl border-2 border-slate-600 bg-[#0B274D] p-5">
              <h3 className="font-black text-[#38BDF8]">
                Special Cleaning
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                Biohazard cleaning is priced separately at $95/hour and
                may require additional service information before
                scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-slate-900 bg-[#38BDF8] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-[#071A33] sm:text-4xl">
            Ready to Book House Cleaning in NYC?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-[#071A33]">
            Choose your cleaning option and schedule your MAIDS'4US service
            in Manhattan, Brooklyn, Queens, or the Bronx.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="rounded-xl border-2 border-[#071A33] bg-[#071A33] px-8 py-4 text-base font-black text-white transition hover:bg-white hover:text-[#071A33]"
            >
              BOOK NOW
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-[#071A33] bg-white px-8 py-4 text-base font-black text-[#071A33] transition hover:bg-[#071A33] hover:text-white"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-900 bg-[#071A33] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xl font-black">
              MAIDS<span className="text-[#38BDF8]">'4</span>US
            </p>

            <p className="mt-1 text-sm font-medium text-slate-300">
              A Cleaner Home. A Happier You. 🏡✨
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-300">
            <Link href="/" className="hover:text-[#38BDF8]">
              Home
            </Link>

            <Link href="/services" className="hover:text-[#38BDF8]">
              Services
            </Link>

            <Link href="/pricing" className="text-[#38BDF8]">
              Pricing
            </Link>

            <Link href="/contact" className="hover:text-[#38BDF8]">
              Contact
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-700 pt-6 text-center text-xs font-medium text-slate-400">
          © {new Date().getFullYear()} MAIDS'4US. All rights reserved.
        </div>
      </footer>
    </main>
  );
}