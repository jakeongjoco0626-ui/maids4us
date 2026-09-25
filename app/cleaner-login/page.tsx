"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function CleanerLoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert("LOGIN ERROR: " + error.message);
      return;
    }

    alert("Login successful!");

    window.location.href = "/cleaner-portal";
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-[#1683FF]"
          >
            MAIDS'4US
          </Link>

          <Link
            href="/cleaner-application"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Apply as Cleaner
          </Link>
        </div>
      </nav>

      <section className="flex min-h-[calc(100vh-85px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="mb-8 text-center">
            <p className="mb-3 font-semibold uppercase tracking-wider text-blue-600">
              MAIDS'4US
            </p>

            <h1 className="text-3xl font-bold text-slate-900">
              Cleaner Login
            </h1>

            <p className="mt-3 text-slate-600">
              Sign in to access your cleaner portal.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-600">
              Don't have a cleaner account yet?
            </p>

            <Link
              href="/cleaner-application"
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Submit a Cleaner Application
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-blue-600"
            >
              ← Back to MAIDS'4US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}