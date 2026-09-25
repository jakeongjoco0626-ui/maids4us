import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-[#1683FF]"
          >
            MAIDS'4US
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link href="/" className="text-slate-700 hover:text-[#1683FF]">
              HOME
            </Link>
            <Link
              href="/about"
              className="font-semibold text-[#1683FF]"
            >
              ABOUT US
            </Link>
            <Link
              href="/#services"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              SERVICES
            </Link>
            <Link
              href="/#pricing"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              PRICING
            </Link>
            <Link
              href="/#contact"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-[#1683FF]">ABOUT MAIDS'4US</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            A Cleaner Home.
            <br />
            A Happier You. 🏡✨
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MAIDS'4US provides reliable, friendly, and professional
            house cleaning services designed to make your home feel
            fresh, comfortable, and cared for.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose MAIDS'4US?
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="text-4xl">✨</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Professional & Thorough
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We pay attention to the details that make your home
                feel truly clean and comfortable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="text-4xl">🏡</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Home-Focused Service
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                From kitchens and bathrooms to bedrooms and living
                spaces, we help keep your entire home looking its best.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="text-4xl">❤️</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Friendly & Reliable
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We believe great cleaning service should come with
                friendly communication and dependable service.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="text-4xl">🧹</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Cleaning That Fits You
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Whether you need regular cleaning, a deep clean, or
                same-day service, we offer options for different needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Here For Your Home
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're looking for regular maintenance cleaning,
            deep cleaning, special occasion preparation, or a
            last-minute cleaning, MAIDS'4US is here to help.
          </p>

          <Link
            href="/#pricing"
            className="mt-8 inline-block rounded-xl bg-[#1683FF] px-7 py-4 font-semibold text-white transition hover:bg-[#0f6fd6]"
          >
            View Our Pricing
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready for a Cleaner Home?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Let MAIDS'4US take care of the cleaning while you enjoy
          more time doing what matters most.
        </p>

        <Link
          href="/#pricing"
          className="mt-8 inline-block rounded-xl bg-[#1683FF] px-8 py-4 font-semibold text-white hover:bg-[#0f6fd6]"
        >
          Book Your Cleaning
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-8 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} MAIDS'4US. All rights reserved.
        </p>
      </footer>
    </main>
  );
}