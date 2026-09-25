"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleLogin(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      console.error("LOGIN ERROR:", error);

      setErrorMessage(
        error.message ||
          "Unable to log in. Please check your email and password."
      );

      setLoading(false);
      return;
    }

    setSuccessMessage(
      "Login successful! Redirecting..."
    );

    setTimeout(() => {
      router.push("/booking");
      router.refresh();
    }, 500);
  }

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="border-b-2 border-slate-900 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-black text-[#0B1F3A]"
          >
            MAIDS<span className="text-[#1683FF]">'4US</span>
          </Link>

          <Link
            href="/"
            className="font-semibold text-slate-700 hover:text-[#1683FF]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Login Section */}
      <section className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border-2 border-slate-900 bg-white p-8 shadow-xl md:p-10">
            {/* Title */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1683FF] text-3xl">
                🧹
              </div>

              <h1 className="mt-6 text-3xl font-black text-[#0B1F3A]">
                Customer Login
              </h1>

              <p className="mt-3 text-slate-600">
                Log in to book and manage your MAIDS&apos;4US
                cleaning services.
              </p>
            </div>

            {/* Error */}
            {errorMessage && (
              <div className="mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-4">
                <p className="text-sm font-semibold text-red-700">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Success */}
            {successMessage && (
              <div className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Login Form */}
            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-6"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-bold text-slate-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#1683FF]"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block font-bold text-slate-800"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#1683FF]"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#1683FF] px-5 py-4 font-black text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading
                  ? "Logging In..."
                  : "Log In"}
              </button>
            </form>

            {/* Signup */}
            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="text-sm text-slate-600">
                Don&apos;t have an account?
              </p>

              <Link
                href="/signup"
                className="mt-2 inline-block font-bold text-[#1683FF] hover:underline"
              >
                Create a Customer Account
              </Link>
            </div>

            {/* Back to Booking */}
            <div className="mt-6 text-center">
              <Link
                href="/booking"
                className="text-sm font-semibold text-slate-500 hover:text-[#1683FF]"
              >
                ← Back to Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}