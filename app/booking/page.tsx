"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function BookingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [service, setService] = useState("");
  const [supplies, setSupplies] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setErrorMessage("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(
      formData.get("firstName") || ""
    ).trim();

    const lastName = String(
      formData.get("lastName") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const selectedService = String(
      formData.get("service") || ""
    ).trim();

    const selectedSupplies = String(
      formData.get("supplies") || ""
    ).trim();

    const preferredDate = String(
      formData.get("date") || ""
    ).trim();

    const preferredTime = String(
      formData.get("time") || ""
    ).trim();

    const streetAddress = String(
      formData.get("address") || ""
    ).trim();

    const city = String(
      formData.get("city") || ""
    ).trim();

    const state = String(
      formData.get("state") || ""
    ).trim();

    const zipCode = String(
      formData.get("zip") || ""
    ).trim();

    const additionalDetails = String(
      formData.get("message") || ""
    ).trim();

    const smsConsent =
      formData.get("smsConsent") === "on";

    /*
     * Regular and Deep cleaning require the
     * customer to choose a supplies option.
     *
     * Same-Day and Biohazard already include
     * MAIDS'4US supplies.
     */
    const requiresSupplies =
      selectedService === "Regular Cleaning" ||
      selectedService === "Deep Cleaning";

    const suppliesForBooking =
      requiresSupplies
        ? selectedSupplies
        : selectedService === "Same-Day Booking" ||
            selectedService === "Biohazard Cleaning"
          ? "We Provide Cleaning Materials"
          : selectedSupplies;

    /* ========================================
       VALIDATION
    ======================================== */

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !selectedService ||
      (requiresSupplies && !selectedSupplies) ||
      !preferredDate ||
      !preferredTime ||
      !streetAddress ||
      !city ||
      !state ||
      !zipCode
    ) {
      setErrorMessage(
        "Please complete all required fields before submitting your booking."
      );

      setSubmitting(false);
      return;
    }

    /* ========================================
       PRICE
    ======================================== */

    let invoiceAmount = 0;

    if (selectedService === "Same-Day Booking") {
      invoiceAmount = 85;
    } else if (
      selectedService === "Biohazard Cleaning"
    ) {
      invoiceAmount = 95;
    } else if (
      selectedService === "Regular Cleaning" &&
      selectedSupplies ===
        "You Provide Cleaning Materials"
    ) {
      invoiceAmount = 55;
    } else if (
      selectedService === "Regular Cleaning" &&
      selectedSupplies ===
        "We Provide Cleaning Materials"
    ) {
      invoiceAmount = 65;
    } else if (
      selectedService === "Deep Cleaning" &&
      selectedSupplies ===
        "You Provide Cleaning Materials"
    ) {
      invoiceAmount = 55;
    } else if (
      selectedService === "Deep Cleaning" &&
      selectedSupplies ===
        "We Provide Cleaning Materials"
    ) {
      invoiceAmount = 65;
    }

    if (invoiceAmount === 0) {
      setErrorMessage(
        "Unable to determine the price for this service. Please select your service and supplies option again."
      );

      setSubmitting(false);
      return;
    }

    /* ========================================
       CREATE BOOKING
    ======================================== */

    const booking = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,

      cleaning_service: selectedService,
      supplies_option: suppliesForBooking,

      preferred_date: preferredDate,
      preferred_time: preferredTime,

      street_address: streetAddress,
      city,
      state,
      zip_code: zipCode,

      additional_details:
        additionalDetails || null,

      status: "pending",

      invoice_amount: invoiceAmount,
      payment_status: "unpaid",
      payment_method: null,
      paid_at: null,

      customer_id: null,

      /*
       * 10DLC SMS consent
       */
      sms_consent: smsConsent,

      sms_consent_at: smsConsent
        ? new Date().toISOString()
        : null,

      sms_consent_source: smsConsent
        ? "/booking"
        : null,
    };

    const { error } = await supabase
      .from("bookings")
      .insert(booking);

    if (error) {
      console.error("BOOKING ERROR:", error);

      setErrorMessage(
        `Unable to submit your booking.\n\n${error.message}`
      );

      setSubmitting(false);
      return;
    }

    /* ========================================
       SUCCESS
    ======================================== */

    setSuccess(true);
    setSubmitting(false);

    form.reset();

    setService("");
    setSupplies("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* ========================================
          HEADER
      ======================================== */}

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

      {/* ========================================
          PAGE INTRO
      ======================================== */}

      <section className="bg-[#0B1F3A] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-widest text-[#1683FF]">
            Booking Application
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Book Your Cleaning
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Tell us about your cleaning needs,
            preferred date, and location. Our team
            will review your request and contact you
            to confirm your booking.
          </p>
        </div>
      </section>

      {/* ========================================
          FORM
      ======================================== */}

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* SUCCESS */}

          {success && (
            <div className="mb-8 rounded-2xl border-2 border-green-600 bg-green-50 p-6">
              <div className="flex gap-4">
                <div className="text-3xl">
                  ✅
                </div>

                <div>
                  <h2 className="text-2xl font-black text-green-800">
                    Booking Application Submitted!
                  </h2>

                  <p className="mt-2 leading-7 text-green-700">
                    Thank you for choosing
                    MAIDS&apos;4US. Your booking
                    request has been received
                    successfully. Our team will
                    review your request and contact
                    you to confirm the appointment.
                  </p>

                  <Link
                    href="/"
                    className="mt-5 inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 font-black text-white hover:bg-[#1683FF]"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ERROR */}

          {errorMessage && (
            <div className="mb-8 rounded-2xl border-2 border-red-500 bg-red-50 p-6">
              <h2 className="text-xl font-black text-red-800">
                Booking Could Not Be Submitted
              </h2>

              <p className="mt-2 whitespace-pre-line text-red-700">
                {errorMessage}
              </p>
            </div>
          )}

          {/* FORM CARD */}

          {!success && (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border-2 border-[#0B1F3A] bg-white p-6 shadow-xl md:p-10"
            >
              {/* ========================================
                  CUSTOMER INFORMATION
              ======================================== */}

              <div>
                <h2 className="text-2xl font-black text-[#0B1F3A]">
                  Customer Information
                </h2>

                <p className="mt-2 text-slate-600">
                  Please provide your contact
                  information.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block font-bold text-slate-800"
                  >
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block font-bold text-slate-800"
                  >
                    Last Name *
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last name"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-bold text-slate-800"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-bold text-slate-800"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                  />

                  <p className="mt-2 text-sm text-slate-500">
                    Please include your US area code.
                  </p>
                </div>
              </div>

              {/* ========================================
                  CLEANING SERVICE
              ======================================== */}

              <div className="mt-12 border-t-2 border-slate-200 pt-10">
                <h2 className="text-2xl font-black text-[#0B1F3A]">
                  Cleaning Service
                </h2>

                <p className="mt-2 text-slate-600">
                  Select the type of cleaning you
                  need.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="mb-2 block font-bold text-slate-800"
                  >
                    Cleaning Service *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(event) => {
                      const nextService =
                        event.target.value;

                      setService(nextService);

                      if (
                        nextService ===
                          "Same-Day Booking" ||
                        nextService ===
                          "Biohazard Cleaning"
                      ) {
                        setSupplies("");
                      }
                    }}
                    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                  >
                    <option value="">
                      Select a cleaning service
                    </option>

                    <option value="Regular Cleaning">
                      Regular Cleaning
                    </option>

                    <option value="Deep Cleaning">
                      Deep Cleaning
                    </option>

                    <option value="Same-Day Booking">
                      Same-Day Booking — $85/hour
                    </option>

                    <option value="Biohazard Cleaning">
                      Biohazard Cleaning — $95/hour
                    </option>
                  </select>
                </div>

                {/* SUPPLIES */}

                {(service ===
                  "Regular Cleaning" ||
                  service === "Deep Cleaning") && (
                  <div className="mt-6">
                    <label
                      htmlFor="supplies"
                      className="mb-2 block font-bold text-slate-800"
                    >
                      Cleaning Materials *
                    </label>

                    <select
                      id="supplies"
                      name="supplies"
                      required
                      value={supplies}
                      onChange={(event) =>
                        setSupplies(
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                    >
                      <option value="">
                        Select an option
                      </option>

                      <option value="You Provide Cleaning Materials">
                        You Provide Cleaning
                        Materials — $55/hour
                      </option>

                      <option value="We Provide Cleaning Materials">
                        We Provide Cleaning
                        Materials — $65/hour
                      </option>
                    </select>
                  </div>
                )}

                {/* PRICE PREVIEW */}

                {service && (
                  <div className="mt-6 rounded-2xl border-2 border-[#1683FF] bg-blue-50 p-5">
                    <p className="font-black text-[#0B1F3A]">
                      Selected Service
                    </p>

                    <p className="mt-2 text-slate-700">
                      {service}
                    </p>

                    {service ===
                      "Regular Cleaning" &&
                      supplies ===
                        "You Provide Cleaning Materials" && (
                        <p className="mt-2 text-lg font-black text-[#1683FF]">
                          $55/hour
                        </p>
                      )}

                    {service ===
                      "Regular Cleaning" &&
                      supplies ===
                        "We Provide Cleaning Materials" && (
                        <p className="mt-2 text-lg font-black text-[#1683FF]">
                          $65/hour
                        </p>
                      )}

                    {service ===
                      "Deep Cleaning" &&
                      supplies ===
                        "You Provide Cleaning Materials" && (
                        <p className="mt-2 text-lg font-black text-[#1683FF]">
                          $55/hour
                        </p>
                      )}

                    {service ===
                      "Deep Cleaning" &&
                      supplies ===
                        "We Provide Cleaning Materials" && (
                        <p className="mt-2 text-lg font-black text-[#1683FF]">
                          $65/hour
                        </p>
                      )}

                    {service ===
                      "Same-Day Booking" && (
                      <p className="mt-2 text-lg font-black text-[#1683FF]">
                        $85/hour
                      </p>
                    )}

                    {service ===
                      "Biohazard Cleaning" && (
                      <p className="mt-2 text-lg font-black text-[#1683FF]">
                        $95/hour
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ========================================
                  DATE & TIME
              ======================================== */}

              <div className="mt-12 border-t-2 border-slate-200 pt-10">
                <h2 className="text-2xl font-black text-[#0B1F3A]">
                  Preferred Schedule
                </h2>

                <p className="mt-2 text-slate-600">
                  Tell us when you would like your
                  cleaning service.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block font-bold text-slate-800"
                    >
                      Preferred Date *
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block font-bold text-slate-800"
                    >
                      Preferred Time *
                    </label>

                    <select
                      id="time"
                      name="time"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                    >
                      <option value="">
                        Select a preferred time
                      </option>

                      <option value="8:00 AM">
                        8:00 AM
                      </option>

                      <option value="9:00 AM">
                        9:00 AM
                      </option>

                      <option value="10:00 AM">
                        10:00 AM
                      </option>

                      <option value="11:00 AM">
                        11:00 AM
                      </option>

                      <option value="12:00 PM">
                        12:00 PM
                      </option>

                      <option value="1:00 PM">
                        1:00 PM
                      </option>

                      <option value="2:00 PM">
                        2:00 PM
                      </option>

                      <option value="3:00 PM">
                        3:00 PM
                      </option>

                      <option value="4:00 PM">
                        4:00 PM
                      </option>

                      <option value="5:00 PM">
                        5:00 PM
                      </option>

                      <option value="6:00 PM">
                        6:00 PM
                      </option>

                      <option value="7:00 PM">
                        7:00 PM
                      </option>

                      <option value="8:00 PM">
                        8:00 PM
                      </option>

                      <option value="9:00 PM">
                        9:00 PM
                      </option>

                      <option value="10:00 PM">
                        10:00 PM
                      </option>

                      <option value="11:00 PM">
                        11:00 PM
                      </option>

                      <option value="12:00 AM">
                        12:00 AM
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ========================================
                  CLEANING LOCATION
              ======================================== */}

              <div className="mt-12 border-t-2 border-slate-200 pt-10">
                <h2 className="text-2xl font-black text-[#0B1F3A]">
                  Cleaning Location
                </h2>

                <p className="mt-2 text-slate-600">
                  Where should our cleaning team
                  provide the service?
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block font-bold text-slate-800"
                    >
                      Street Address *
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="123 Main Street"
                      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block font-bold text-slate-800"
                      >
                        City *
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="New York"
                        className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="mb-2 block font-bold text-slate-800"
                      >
                        State *
                      </label>

                      <select
                        id="state"
                        name="state"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                      >
                        <option value="">
                          Select State
                        </option>

                        <option value="AL">
                          Alabama
                        </option>
                        <option value="AK">
                          Alaska
                        </option>
                        <option value="AZ">
                          Arizona
                        </option>
                        <option value="AR">
                          Arkansas
                        </option>
                        <option value="CA">
                          California
                        </option>
                        <option value="CO">
                          Colorado
                        </option>
                        <option value="CT">
                          Connecticut
                        </option>
                        <option value="DE">
                          Delaware
                        </option>
                        <option value="FL">
                          Florida
                        </option>
                        <option value="GA">
                          Georgia
                        </option>
                        <option value="HI">
                          Hawaii
                        </option>
                        <option value="ID">
                          Idaho
                        </option>
                        <option value="IL">
                          Illinois
                        </option>
                        <option value="IN">
                          Indiana
                        </option>
                        <option value="IA">
                          Iowa
                        </option>
                        <option value="KS">
                          Kansas
                        </option>
                        <option value="KY">
                          Kentucky
                        </option>
                        <option value="LA">
                          Louisiana
                        </option>
                        <option value="ME">
                          Maine
                        </option>
                        <option value="MD">
                          Maryland
                        </option>
                        <option value="MA">
                          Massachusetts
                        </option>
                        <option value="MI">
                          Michigan
                        </option>
                        <option value="MN">
                          Minnesota
                        </option>
                        <option value="MS">
                          Mississippi
                        </option>
                        <option value="MO">
                          Missouri
                        </option>
                        <option value="MT">
                          Montana
                        </option>
                        <option value="NE">
                          Nebraska
                        </option>
                        <option value="NV">
                          Nevada
                        </option>
                        <option value="NH">
                          New Hampshire
                        </option>
                        <option value="NJ">
                          New Jersey
                        </option>
                        <option value="NM">
                          New Mexico
                        </option>
                        <option value="NY">
                          New York
                        </option>
                        <option value="NC">
                          North Carolina
                        </option>
                        <option value="ND">
                          North Dakota
                        </option>
                        <option value="OH">
                          Ohio
                        </option>
                        <option value="OK">
                          Oklahoma
                        </option>
                        <option value="OR">
                          Oregon
                        </option>
                        <option value="PA">
                          Pennsylvania
                        </option>
                        <option value="RI">
                          Rhode Island
                        </option>
                        <option value="SC">
                          South Carolina
                        </option>
                        <option value="SD">
                          South Dakota
                        </option>
                        <option value="TN">
                          Tennessee
                        </option>
                        <option value="TX">
                          Texas
                        </option>
                        <option value="UT">
                          Utah
                        </option>
                        <option value="VT">
                          Vermont
                        </option>
                        <option value="VA">
                          Virginia
                        </option>
                        <option value="WA">
                          Washington
                        </option>
                        <option value="WV">
                          West Virginia
                        </option>
                        <option value="WI">
                          Wisconsin
                        </option>
                        <option value="WY">
                          Wyoming
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="zip"
                        className="mb-2 block font-bold text-slate-800"
                      >
                        ZIP Code *
                      </label>

                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        inputMode="numeric"
                        placeholder="10001"
                        className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================
                  ADDITIONAL DETAILS
              ======================================== */}

              <div className="mt-12 border-t-2 border-slate-200 pt-10">
                <h2 className="text-2xl font-black text-[#0B1F3A]">
                  Additional Details
                </h2>

                <p className="mt-2 text-slate-600">
                  Tell us anything else we should
                  know about your cleaning request.
                </p>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your home, special requests, pets, areas that need extra attention, parking information, etc."
                  className="mt-6 w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#1683FF]"
                />
              </div>

              {/* ========================================
                  SMS CONSENT
              ======================================== */}

              <div className="mt-10 rounded-2xl border-2 border-[#1683FF] bg-blue-50 p-5">
                <div className="flex items-start gap-3">
                  <input
                    id="smsConsent"
                    name="smsConsent"
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-slate-400 text-[#1683FF] focus:ring-[#1683FF]"
                  />

                  <div>
                    <label
                      htmlFor="smsConsent"
                      className="font-bold text-[#0B1F3A]"
                    >
                      SMS Messaging Consent
                      (Optional)
                    </label>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      By checking this box, I agree
                      to receive SMS messages from
                      MAIDS&apos;4US, including
                      booking updates, appointment
                      reminders, customer care
                      messages, service notifications,
                      and occasional promotional or
                      marketing offers. Message
                      frequency may vary. Message and
                      data rates may apply. Reply{" "}
                      <strong>STOP</strong> to opt
                      out or{" "}
                      <strong>HELP</strong> for
                      help. Consent is not a
                      condition of purchase.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Please review our{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#1683FF] underline hover:text-blue-700"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#1683FF] underline hover:text-blue-700"
                      >
                        Terms &amp; Conditions
                      </Link>
                      .
                    </p>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      This checkbox is optional and
                      is not selected by default.
                      You may submit your booking
                      request without agreeing to
                      receive SMS messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* ========================================
                  BOOKING NOTICE
              ======================================== */}

              <div className="mt-10 rounded-2xl border-2 border-slate-300 bg-slate-50 p-5">
                <h3 className="font-black text-[#0B1F3A]">
                  Booking Request
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Submitting this form sends a
                  booking request to
                  MAIDS&apos;4US. Your requested
                  date and time are not considered
                  confirmed until our team reviews
                  the request and confirms your
                  appointment.
                </p>
              </div>

              {/* ========================================
                  SUBMIT
              ======================================== */}

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full rounded-xl bg-[#1683FF] px-6 py-4 text-lg font-black text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {submitting
                  ? "Submitting Booking..."
                  : "Submit Booking Application"}
              </button>

              <p className="mt-4 text-center text-sm text-slate-500">
                By submitting this form, you are
                requesting a cleaning appointment
                with MAIDS&apos;4US.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ========================================
          FOOTER
      ======================================== */}

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

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/privacy-policy"
            className="font-semibold text-slate-300 hover:text-[#1683FF]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="font-semibold text-slate-300 hover:text-[#1683FF]"
          >
            Terms &amp; Conditions
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