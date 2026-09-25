"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function CleanerSignupPage() {
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setLoading(true);

  const form = event.currentTarget;
  const formData = new FormData(form);

  const email = (formData.get("email") as string).trim().toLowerCase();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    setLoading(false);
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    setLoading(false);
    return;
  }

  // Check whether this cleaner has been approved
  const { data: application, error: applicationError } = await supabase
    .from("cleaner_applications")
    .select("id, status, email")
    .eq("email", email)
    .eq("status", "approved")
    .maybeSingle();

  if (applicationError) {
    setLoading(false);
    alert("ERROR CHECKING APPLICATION: " + applicationError.message);
    return;
  }

  if (!application) {
    setLoading(false);
    alert(
      "Your cleaner application has not been approved yet. Please wait for MAIDS'4US to review your application."
    );
    return;
  }

  // Create the cleaner account
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    setLoading(false);
    alert("SIGNUP ERROR: " + error.message);
    return;
  }

  // Connect the application to the new account
  if (data.user) {
    const { error: linkError } = await supabase
      .from("cleaner_applications")
      .update({
        user_id: data.user.id,
      })
      .eq("id", application.id);

    if (linkError) {
      console.error("Link error:", linkError);
      alert(
        "Account created, but we could not connect it to your application."
      );
      setLoading(false);
      return;
    }
  }

  setLoading(false);

  alert(
    "Account created successfully! Please check your email to confirm your account."
  );

  window.location.href = "/cleaner-login";
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
            href="/cleaner-login"
            className="rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Cleaner Login
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
              Cleaner Sign Up
            </h1>

            <p className="mt-3 text-slate-600">
              Create your cleaner account.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
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
                placeholder="Create a password"
                minLength={6}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirm your password"
                minLength={6}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-sm text-slate-600">
              Your cleaner account will be connected to your application and
              reviewed by the MAIDS'4US team.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Cleaner Account"}
            </button>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?
            </p>

            <Link
              href="/cleaner-login"
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}