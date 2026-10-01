import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MAIDS'4US",
  description:
    "Read the MAIDS'4US Privacy Policy, including how we collect, use, and protect customer information and SMS messaging consent.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            This Privacy Policy explains how
            MAIDS&apos;4US collects, uses, and
            protects information provided through
            our website, booking forms, and
            communications.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: October 1, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* INTRO */}
          <div className="rounded-3xl border-2 border-[#0B1F3A] bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              1. Information We Collect
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              When you use the MAIDS&apos;4US
              website or request cleaning services,
              we may collect information that you
              voluntarily provide to us.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Cleaning service information</li>
              <li>Preferred appointment date and time</li>
              <li>
                Cleaning address and service location
              </li>
              <li>
                Additional information you include
                with a booking or inquiry
              </li>
              <li>
                SMS messaging consent information
              </li>
            </ul>
          </div>

          {/* USE */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              We may use the information you
              provide to operate and provide
              MAIDS&apos;4US services, including:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
              <li>
                Processing and reviewing cleaning
                service requests
              </li>

              <li>
                Scheduling and confirming cleaning
                appointments
              </li>

              <li>
                Communicating with you about your
                booking or service
              </li>

              <li>
                Providing customer service and
                responding to questions
              </li>

              <li>
                Sending appointment reminders and
                service notifications
              </li>

              <li>
                Sending promotional or marketing
                messages when you have provided
                consent
              </li>

              <li>
                Maintaining business and customer
                service records
              </li>

              <li>
                Improving our website, services,
                and customer experience
              </li>
            </ul>
          </div>

          {/* SMS */}
          <div className="rounded-3xl border-2 border-[#1683FF] bg-blue-50 p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              3. SMS Messaging and Consent
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may offer customers
              the option to receive SMS text
              messages related to our cleaning
              services.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If you choose to opt in, messages may
              include booking updates, appointment
              reminders, customer care messages,
              service notifications, and occasional
              promotional or marketing offers.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Message frequency may vary. Message
              and data rates may apply.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              You may reply{" "}
              <strong>STOP</strong> at any time to
              opt out of receiving SMS messages.
              You may reply{" "}
              <strong>HELP</strong> for help.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              SMS consent is optional and is not a
              condition of purchasing or receiving
              MAIDS&apos;4US cleaning services.
            </p>

            <p className="mt-4 font-bold leading-7 text-slate-800">
              Mobile information, SMS opt-in data,
              and SMS consent will not be shared,
              sold, rented, or disclosed to third
              parties or affiliates for their
              marketing or promotional purposes.
            </p>
          </div>

          {/* SHARING */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              4. How We Share Information
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US does not sell your
              personal information.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              We may use service providers that help
              us operate our website, communications,
              scheduling systems, databases, and
              other business services. Information
              may be processed by these providers
              only as needed to provide those
              services to MAIDS&apos;4US.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              We may also disclose information when
              required by applicable law, legal
              process, or a valid government request.
            </p>

            <p className="mt-4 font-bold leading-7 text-slate-800">
              SMS opt-in data and consent are not
              shared with third parties for
              marketing purposes.
            </p>
          </div>

          {/* SECURITY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              5. Data Security
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              We take reasonable administrative
              and technical measures designed to
              protect personal information from
              unauthorized access, loss, misuse,
              alteration, or disclosure.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              However, no method of transmitting or
              storing information electronically is
              completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* RETENTION */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              6. Information Retention
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              We may retain information for as long
              as reasonably necessary to provide
              services, maintain business records,
              resolve disputes, enforce agreements,
              and comply with applicable legal
              obligations.
            </p>
          </div>

          {/* CHOICES */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              7. Your Choices
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              You may contact MAIDS&apos;4US if you
              have questions about personal
              information you previously provided.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              For SMS messages, you can opt out at
              any time by replying{" "}
              <strong>STOP</strong>.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              8. Third-Party Services
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Our website and business systems may
              use third-party service providers for
              hosting, database services,
              communications, analytics, or other
              business functions.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Those providers may process
              information according to their own
              privacy practices and contractual
              obligations.
            </p>
          </div>

          {/* CHANGES */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              9. Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              MAIDS&apos;4US may update this
              Privacy Policy from time to time.
              When changes are made, the
              &quot;Last updated&quot; date on this
              page may be revised.
            </p>
          </div>

          {/* CONTACT */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              10. Contact Us
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If you have questions about this
              Privacy Policy or MAIDS&apos;4US
              privacy practices, please contact us
              through our website.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-[#1683FF] px-6 py-3 font-black text-white transition hover:bg-blue-600"
            >
              Contact MAIDS&apos;4US
            </Link>
          </div>

          {/* TERMS LINK */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Please also review our{" "}
              <Link
                href="/terms"
                className="font-bold text-[#1683FF] underline"
              >
                Terms &amp; Conditions
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
            className="text-[#1683FF]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-slate-300 hover:text-[#1683FF]"
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