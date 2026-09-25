"use client";

import Link from "next/link";

const services = [
  {
    title: "Regular Cleaning",
    description:
      "Reliable routine cleaning to keep your home fresh, comfortable, and consistently clean.",
    features: [
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Dusting and surface cleaning",
      "Vacuuming and mopping",
      "Trash and recycling removal",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "A more detailed cleaning service for homes that need extra attention and a deeper refresh.",
    features: [
      "Detailed kitchen cleaning",
      "Detailed bathroom cleaning",
      "Baseboards and hard-to-reach areas",
      "Detailed dusting",
      "Thorough vacuuming and mopping",
    ],
  },
  {
    title: "Same-Day / Emergency Cleaning",
    description:
      "Fast cleaning support for urgent situations, last-minute needs, parties, and special occasions.",
    features: [
      "Priority scheduling",
      "Fast dispatch",
      "Professional cleaning service",
      "Cleaning supplies available",
      "Ideal for urgent situations",
    ],
  },
  {
    title: "Biohazard & Specialty Cleaning Service",
    description:
      "Professional cleanup and sanitation for blood, urine, feces, bodily fluids, and other biological contaminants, as well as cleanup after fires and pest extermination.",
    features: [
      "Blood and bodily fluid cleanup",
      "Urine and feces cleanup",
      "Biological contaminant sanitation",
      "Fire cleanup",
      "Pest extermination cleanup",
    ],
  },
];

const pricing = [
  {
    title: "Client Supplies",
    price: "$55",
    description:
      "You provide the cleaning equipment, vacuum, mop, and cleaning products.",
    features: [
      "Vacuum, mop & supplies provided by client",
      "Professional cleaning service",
      "Flexible hourly booking",
    ],
  },
  {
    title: "We Bring Everything",
    price: "$65",
    description:
      "Your cleaner brings professional equipment and cleaning products.",
    features: [
      "Professional equipment included",
      "Cleaning products included",
      "Vacuum & mop included",
    ],
    featured: true,
  },
  {
    title: "Same-Day / Emergency",
    price: "$85",
    description:
      "Fast service for urgent, same-day, and last-minute cleaning needs.",
    features: [
      "Priority dispatch",
      "Professional supplies included",
      "Great for urgent situations",
    ],
  },
  {
    title: "Biohazard Cleaning",
    price: "$95",
    description:
      "Specialty cleaning and sanitation for biological contaminants and other specialty situations.",
    features: [
      "Professional sanitation",
      "Biohazard cleanup",
      "Specialty cleaning service",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b-2 border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-slate-950">MAIDS</span>
            <span className="text-blue-600">'4US</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ABOUT US
            </Link>

            <Link
              href="/services"
              className="font-semibold text-blue-600"
            >
              SERVICES
            </Link>

            <Link
              href="/pricing"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              PRICING
            </Link>

            <Link
              href="/booking"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              BOOKING
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              CONTACT US
            </Link>
          </nav>

          <Link
            href="/booking"
            className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-700"
          >
            BOOK NOW
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Professional House Cleaning
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Cleaning Services You Can Count On
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            From regular home cleaning to deep cleaning, emergency services,
            and specialty cleaning, MAIDS'4US is here to help keep your space
            clean, fresh, and comfortable.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              BOOK A CLEANING
            </Link>

            <a
              href="#services"
              className="rounded-xl border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Our Services
            </p>

            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              Cleaning Services for Every Situation
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Choose the cleaning service that fits your home, schedule, and
              cleaning needs.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-2xl border-2 border-slate-200 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl font-black text-blue-700">
                  ✓
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-1 font-black text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Link
                    href="/booking"
                    className="block w-full rounded-xl border-2 border-blue-600 px-5 py-3 text-center font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    Choose This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Why Choose MAIDS'4US?
            </p>

            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              A Cleaner Home. A Happier You. 🏡✨
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">
                Professional & Thorough
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Our cleaning services are designed with attention to detail
                from kitchens and bathrooms to bedrooms and living spaces.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">
                Friendly & Reliable
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We focus on dependable service and a friendly experience every
                time we clean your home.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">
                Flexible Options
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose regular, deep, same-day, emergency, or specialty
                cleaning based on what your home needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PRICING */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Simple Pricing
            </p>

            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              Choose the Service That Fits Your Needs
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Straightforward hourly pricing with options for regular,
              same-day, emergency, and specialty cleaning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`relative flex h-full flex-col rounded-2xl border-2 bg-white p-7 shadow-md ${
                  plan.featured
                    ? "border-blue-600 shadow-xl"
                    : "border-slate-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                    Popular
                  </div>
                )}

                <h3 className="text-xl font-black text-slate-950">
                  {plan.title}
                </h3>

                <div className="mt-5">
                  <span className="text-5xl font-black text-slate-950">
                    {plan.price}
                  </span>
                  <span className="ml-2 font-semibold text-slate-500">
                    /hr
                  </span>
                </div>

                <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="font-black text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  {/* FIXED: This now goes to the real booking page */}
                  <Link
                    href="/booking"
                    className={`block w-full rounded-xl px-5 py-3 text-center font-bold transition ${
                      plan.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    Choose This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING DETAILS */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-400">
              Pricing Details
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Transparent Hourly Rates
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Select the service option that works best for your cleaning
              needs.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-slate-700">
            <div className="grid grid-cols-1 divide-y-2 divide-slate-700 md:grid-cols-2 md:divide-x-2 md:divide-y-0">
              <div className="p-6">
                <p className="font-bold text-slate-300">
                  You Provide Cleaning Materials
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  $55/hour
                </p>
              </div>

              <div className="p-6">
                <p className="font-bold text-slate-300">
                  We Provide Cleaning Materials
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  $65/hour
                </p>
              </div>

              <div className="border-t-2 border-slate-700 p-6">
                <p className="font-bold text-slate-300">
                  Same-Day / Emergency
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  $85/hour
                </p>
              </div>

              <div className="border-t-2 border-slate-700 p-6 md:border-l-0">
                <p className="font-bold text-slate-300">
                  Biohazard Cleaning
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  $95/hour
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/booking"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-lg transition hover:bg-blue-700"
            >
              BOOK YOUR CLEANING
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              How It Works
            </p>

            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              Getting Your Home Clean Is Easy
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Choose Your Service
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Select the cleaning service that matches your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Pick Your Schedule
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Choose your preferred date and time when booking.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Enjoy a Cleaner Home
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Our cleaner arrives and takes care of the cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLEANER CTA */}
      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Interested in Becoming a Cleaner?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            Join MAIDS'4US and become part of our growing professional
            cleaning team.
          </p>

          <Link
            href="/cleaner-application"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-black text-blue-700 shadow-lg transition hover:bg-slate-100"
          >
            APPLY TO BECOME A CLEANER
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="text-2xl font-black">
              <span>MAIDS</span>
              <span className="text-blue-500">'4US</span>
            </div>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Professional, friendly, and reliable house cleaning services.
            </p>
          </div>

          <div>
            <h3 className="font-black">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-slate-400 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-slate-400 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/booking"
                className="text-slate-400 transition hover:text-white"
              >
                Booking
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-black">Get Started</h3>

            <p className="mt-4 leading-7 text-slate-400">
              Ready for a cleaner home?
            </p>

            <Link
              href="/booking"
              className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MAIDS'4US. All rights reserved.
        </div>
      </footer>
    </main>
  );
}