"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wider text-blue-400">
            Contact MAIDS'4US
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            We&apos;re Here to Help
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Have a question about our cleaning services or need help with a
            booking? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Contact Us
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you need a regular cleaning, deep cleaning, same-day
              service, or have a question about your appointment, we&apos;re
              happy to help.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <p className="mt-1 text-slate-600">
                  (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="mt-1 text-slate-600">
                  hello@maids4us.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Service Area
                </h3>
                <p className="mt-1 text-slate-600">
                  Serving customers across our local service areas.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Preferred Contact Method
                </label>

                <select
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  defaultValue="Email"
                >
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Text Message</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}