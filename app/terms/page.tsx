import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | MAIDS'4US",
  description:
    "Read the MAIDS'4US Terms & Conditions for cleaning services, bookings, communications, and SMS messaging.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* HEADER */}
      <header className="border-b-2 border-[#0B1F3A] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-[#0B1F3A]"
          >
            MAIDS
            <span className="text-[#1683FF]">
              &apos;4US
            </span>
          </Link>

          <Link
            href="/"
            className="font-bold text-slate-700 hover:text-[#1683FF]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#0B1F3A] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-widest text-[#1683FF]">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            These Terms &amp; Conditions explain the
            rules that apply when using the
            MAIDS&apos;4US website, submitting a
            cleaning request, or receiving
            communications from us.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: October 1, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* ACCEPTANCE */}
          <div className="rounded-3xl border-2 border-[#0B1F3A] bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              1. Acceptance of These Terms
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              By accessing the MAIDS&apos;4US
              website, submitting a booking request,
              or using our services, you agree to
              these Terms &amp; Conditions.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If you do not agree with these terms,
              please do not use the website or submit
              a service request.
            </p>
          </div>

          {/* SERVICE */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              2. Cleaning Services
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US provides residential
              cleaning services, which may include
              regular cleaning, deep cleaning,
              same-day cleaning, and specialty
              cleaning services.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Service availability may depend on
              location, scheduling, cleaner
              availability, and the specific needs of
              the property.
            </p>
          </div>

          {/* BOOKINGS */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              3. Booking Requests
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Submitting a booking form through the
              MAIDS&apos;4US website is a request for
              service and does not automatically
              guarantee or confirm an appointment.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A requested date and time are not
              considered confirmed until
              MAIDS&apos;4US reviews the request and
              communicates confirmation to the
              customer.
            </p>
          </div>

          {/* PRICING */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              4. Pricing
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US currently offers
              cleaning options that may include the
              following hourly rates:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
              <li>
                $55/hour when the customer provides
                cleaning materials
              </li>

              <li>
                $65/hour when MAIDS&apos;4US provides
                cleaning materials
              </li>

              <li>
                $85/hour for same-day cleaning
              </li>

              <li>
                $95/hour for biohazard cleaning
              </li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              Final charges may depend on the amount
              of time required, the selected service,
              service availability, and other agreed
              service details.
            </p>
          </div>

          {/* CUSTOMER RESPONSIBILITY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              5. Customer Responsibilities
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Customers are responsible for
              providing accurate booking,
              communication, and service-location
              information.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Customers should provide reasonable
              access to the property at the scheduled
              time and inform MAIDS&apos;4US about
              important conditions, pets, hazards,
              access instructions, or other
              information that may affect the
              cleaning service.
            </p>
          </div>

          {/* SMS TERMS */}
          <div className="rounded-3xl border-2 border-[#1683FF] bg-blue-50 p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              6. SMS Messaging Terms
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US offers an optional SMS
              messaging program for customers who
              choose to provide consent.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              SMS messages may include booking
              updates, appointment reminders,
              customer care communications, service
              notifications, and occasional
              promotional or marketing offers.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Message frequency may vary depending
              on your bookings, communications, and
              interactions with MAIDS&apos;4US.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Message and data rates may apply
              according to your mobile carrier and
              service plan.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              You may opt out of SMS messages at any
              time by replying{" "}
              <strong>STOP</strong>.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              For assistance with SMS messages,
              reply{" "}
              <strong>HELP</strong> or contact
              MAIDS&apos;4US through our website.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Consent to receive SMS messages is
              optional and is not a condition of
              purchasing or receiving
              MAIDS&apos;4US services.
            </p>

            <p className="mt-4 font-bold leading-7 text-slate-800">
              Mobile information, SMS opt-in data,
              and SMS consent will not be shared,
              sold, rented, or disclosed to third
              parties or affiliates for their
              marketing or promotional purposes.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Mobile carriers are not responsible
              for delayed or undelivered messages.
            </p>
          </div>

          {/* COMMUNICATIONS */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              7. Electronic Communications
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              When you submit a booking or contact
              MAIDS&apos;4US, we may communicate
              with you using information you provide,
              including by phone or email.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              SMS marketing or promotional
              communications will only be sent when
              the customer has provided the required
              consent.
            </p>
          </div>

          {/* CANCELLATION */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              8. Changes and Cancellations
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If you need to change or cancel a
              cleaning request, please contact
              MAIDS&apos;4US as soon as reasonably
              possible.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may also need to
              reschedule a service because of cleaner
              availability, weather, safety issues,
              access problems, or other operational
              circumstances.
            </p>
          </div>

          {/* SAFETY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              9. Safety and Service Conditions
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may decline, stop, or
              reschedule a service if conditions at
              the property are unsafe or materially
              different from the information
              provided during booking.
            </p>
          </div>

          {/* WEBSITE */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              10. Website Use
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              You agree not to misuse the
              MAIDS&apos;4US website or attempt to
              interfere with its normal operation,
              security, availability, or systems.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              11. Third-Party Services
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may use third-party
              providers for website hosting,
              databases, communications, payments,
              scheduling, or other business
              functions.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Those services may be governed by
              separate terms and privacy practices.
            </p>
          </div>

          {/* WARRANTY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              12. Service Disclaimer
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US works to provide
              professional cleaning services, but
              specific results may vary depending on
              the condition of the property,
              materials, surfaces, available time,
              access, and the service requested.
            </p>
          </div>

          {/* CHANGES */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              13. Changes to These Terms
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may update these Terms
              &amp; Conditions from time to time.
              Updates may be reflected by changing
              the &quot;Last updated&quot; date on
              this page.
            </p>
          </div>

          {/* CONTACT */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              14. Contact Us
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If you have questions about these
              Terms &amp; Conditions, your booking,
              or the MAIDS&apos;4US SMS program,
              please contact us through our website.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-[#1683FF] px-6 py-3 font-black text-white transition hover:bg-blue-600"
            >
              Contact MAIDS&apos;4US
            </Link>
          </div>

          {/* PRIVACY LINK */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Please also review our{" "}
              <Link
                href="/privacy-policy"
                className="font-bold text-[#1683FF] underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F3A] px-6 py-10 text-center text-white">
        <Link
          href="/"
          className="text-2xl font-black"
        >
          MAIDS
          <span className="text-[#1683FF]">
            &apos;4US
          </span>
        </Link>

        <p className="mt-3 text-slate-300">
          A Cleaner Home. A Happier You. 🏡✨
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm font-semibold">
          <Link
            href="/privacy-policy"
            className="text-slate-300 hover:text-[#1683FF]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-[#1683FF]"
          >
            Terms &amp; Conditions
          </Link>

          <Link
            href="/contact"
            className="text-slate-300 hover:text-[#1683FF]"
          >
            Contact
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          © {new Date().getFullYear()}{" "}
          MAIDS&apos;4US. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
