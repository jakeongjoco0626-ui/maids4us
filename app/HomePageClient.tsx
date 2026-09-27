"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   SETTINGS
========================================================= */

const CRM_LOGIN_URL = "https://crm.maids4us.net/login";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "HOME",
    section: "home",
    active: "HOME",
  },
  {
    label: "ABOUT US",
    section: "about",
    active: "ABOUT US",
  },
  {
    label: "SERVICES",
    section: "services",
    active: "SERVICES",
  },
  {
    label: "CONTACT US",
    section: "contact",
    active: "CONTACT US",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: "🏠",
    title: "Regular Cleaning",
    description:
      "Reliable routine cleaning that keeps your home fresh, comfortable, and looking its best.",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom cleaning for homes that need extra care and attention.",
  },
  {
    icon: "⚡",
    title: "Same-Day Cleaning",
    description:
      "Need help quickly? Our same-day service is designed for urgent cleaning needs.",
  },
  {
    icon: "🎉",
    title: "Special Occasion",
    description:
      "Prepare your home for parties, guests, celebrations, and important occasions.",
  },
  {
    icon: "☣️",
    title: "Biohazard Cleaning",
    description:
      "Specialized cleaning services for situations that require additional care and attention.",
  },
];

/* =========================================================
   PRICING
========================================================= */

const pricing = [
  {
    icon: "🧴",
    title: "Client Supplies",
    price: "$55",
    unit: "/hr",
    description:
      "You provide the cleaning materials, equipment, vacuum, and mop.",
    popular: false,
  },
  {
    icon: "🧹",
    title: "We Bring Everything",
    price: "$65",
    unit: "/hr",
    description:
      "Our cleaner provides professional cleaning materials and equipment.",
    popular: true,
  },
  {
    icon: "⚡",
    title: "Same-Day / Emergency",
    price: "$85",
    unit: "/hr",
    description:
      "Fast cleaning service for urgent and last-minute situations.",
    popular: false,
  },
  {
    icon: "☣️",
    title: "Biohazard Cleaning",
    price: "$95",
    unit: "/hr",
    description:
      "Specialized cleaning for biohazard and specialty situations.",
    popular: false,
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("HOME");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* =======================================================
     MOVING UNDERLINE
  ======================================================= */

  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const navButtonRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  /* =======================================================
     LOAD THEME
  ======================================================= */

  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem("maids4us-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  /* =======================================================
     SAVE THEME
  ======================================================= */

  useEffect(() => {
    window.localStorage.setItem(
      "maids4us-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* =======================================================
     UPDATE UNDERLINE
  ======================================================= */

  useEffect(() => {
    function updateUnderline() {
      const activeButton =
        navButtonRefs.current[activeSection];

      const container = navContainerRef.current;

      if (!activeButton || !container) {
        return;
      }

      const buttonRect =
        activeButton.getBoundingClientRect();

      const containerRect =
        container.getBoundingClientRect();

      setUnderline({
        left:
          buttonRect.left -
          containerRect.left,
        width: buttonRect.width,
        opacity: 1,
      });
    }

    const timer = window.setTimeout(
      updateUnderline,
      50
    );

    window.addEventListener(
      "resize",
      updateUnderline
    );

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener(
        "resize",
        updateUnderline
      );
    };
  }, [activeSection]);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    function handleScroll() {
      const sections = [
        {
          name: "HOME",
          element: document.getElementById("home"),
        },
        {
          name: "ABOUT US",
          element: document.getElementById("about"),
        },
        {
          name: "SERVICES",
          element: document.getElementById("services"),
        },
        {
          name: "CONTACT US",
          element: document.getElementById("contact"),
        },
      ];

      let currentSection = "HOME";

      sections.forEach((section) => {
        if (!section.element) return;

        const rect =
          section.element.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = section.name;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     NAVIGATION FUNCTION
  ======================================================= */

  function navigateTo(
    sectionId: string,
    activeName?: string
  ) {
    setMobileMenu(false);

    if (activeName) {
      setActiveSection(activeName);
    }

    const element =
      document.getElementById(sectionId);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  /* =======================================================
     THEME CLASSES
  ======================================================= */

  const sectionBackground = darkMode
    ? "bg-slate-950"
    : "bg-white";

  const secondaryBackground = darkMode
    ? "bg-slate-900"
    : "bg-blue-50";

  const headingColor = darkMode
    ? "text-white"
    : "text-[#073778]";

  const paragraphColor = darkMode
    ? "text-slate-300"
    : "text-slate-600";

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${sectionBackground}`}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          darkMode
            ? "border-blue-500/20 bg-slate-950/95"
            : "border-blue-100 bg-white/95"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

          {/* =================================================
              LOGO
          ================================================= */}

          <button
            onClick={() =>
              navigateTo("home", "HOME")
            }
            className="group flex items-center gap-3"
          >
            <img
              src="/maids4us-logo%20(1).png"
              alt="MAIDS'4US New York"
              className="h-16 w-auto object-contain transition duration-300 group-hover:scale-105 sm:h-20"
            />

            <div className="hidden text-left sm:block">
              <div
                className={`text-lg font-black ${
                  darkMode
                    ? "text-white"
                    : "text-[#073778]"
                }`}
              >
                MAIDS&apos;4US
              </div>

              <div className="text-xs font-black tracking-[0.3em] text-blue-600">
                NEW YORK
              </div>
            </div>
          </button>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div
            ref={navContainerRef}
            className="relative hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                ref={(element) => {
                  navButtonRefs.current[
                    item.active
                  ] = element;
                }}
                onClick={() =>
                  navigateTo(
                    item.section,
                    item.active
                  )
                }
                className={`relative py-4 text-sm font-black transition-colors duration-200 ${
                  activeSection === item.active
                    ? "text-blue-600"
                    : darkMode
                    ? "text-white hover:text-blue-400"
                    : "text-[#073778] hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* MOVING UNDERLINE */}

            <span
              className="pointer-events-none absolute bottom-0 h-[3px] rounded-full bg-blue-600 transition-all duration-300 ease-out"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.opacity,
              }}
            />
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg transition ${
                darkMode
                  ? "border-blue-400/40 bg-slate-900 text-yellow-300 hover:bg-slate-800"
                  : "border-blue-200 bg-white text-[#073778] hover:bg-blue-50"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <a
              href={CRM_LOGIN_URL}
              className="rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-black text-blue-600 transition duration-200 hover:bg-blue-600 hover:text-white"
            >
              LOGIN
            </a>

            <Link
              href="/booking"
              className="rounded-full bg-blue-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              BOOK NOW
            </Link>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className={`rounded-xl border px-4 py-3 text-xl lg:hidden ${
              darkMode
                ? "border-blue-500/40 text-white"
                : "border-blue-200 text-[#073778]"
            }`}
            aria-label="Open menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileMenu && (
          <div
            className={`border-t px-5 py-5 shadow-xl lg:hidden ${
              darkMode
                ? "border-blue-500/20 bg-slate-950"
                : "border-blue-100 bg-white"
            }`}
          >
            <div className="flex flex-col gap-2">

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    navigateTo(
                      item.section,
                      item.active
                    )
                  }
                  className={`rounded-xl px-4 py-4 text-left font-black transition ${
                    activeSection === item.active
                      ? "bg-blue-50 text-blue-600"
                      : darkMode
                      ? "text-white hover:bg-slate-900"
                      : "text-[#073778] hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className={`rounded-xl px-4 py-4 text-left font-black ${
                  darkMode
                    ? "text-yellow-300"
                    : "text-[#073778]"
                }`}
              >
                {darkMode
                  ? "☀️ LIGHT MODE"
                  : "🌙 DARK MODE"}
              </button>

              <Link
                href="/booking"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="rounded-xl bg-blue-600 px-5 py-4 text-center font-black text-white"
              >
                BOOK NOW
              </Link>

              <a
                href={CRM_LOGIN_URL}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="rounded-xl border-2 border-blue-600 px-5 py-4 text-center font-black text-blue-600"
              >
                LOGIN
              </a>

            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="home"
        className={`scroll-mt-24 ${
          darkMode
            ? "bg-slate-950"
            : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">

          {/* HERO CONTENT */}

          <div className="px-6 py-16 sm:px-10 lg:px-8 lg:py-24">

            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black tracking-widest text-blue-700">
              NEW YORK CITY HOUSE CLEANING SERVICES
            </div>

            <h1
              className={`mt-6 text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl ${headingColor}`}
            >
              House Cleaning Services

              <span className="block text-blue-600">
                in New York City
              </span>
            </h1>

            <p
              className={`mt-7 max-w-xl text-lg leading-8 ${paragraphColor}`}
            >
              Reliable, friendly, and professional
              house cleaning services across Manhattan,
              Brooklyn, Queens, and the Bronx—designed
              to give you more time to enjoy the things
              that matter most.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/booking"
                className="rounded-full bg-blue-600 px-8 py-4 text-center font-black text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-1 hover:bg-blue-700"
              >
                BOOK A CLEANING
              </Link>

              <button
                onClick={() =>
                  navigateTo(
                    "services",
                    "SERVICES"
                  )
                }
                className={`rounded-full border-2 border-blue-600 px-8 py-4 font-black text-blue-600 transition duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white`}
              >
                VIEW SERVICES
              </button>

            </div>

            {/* HERO TRUST POINTS */}

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div>
                <div className="text-2xl font-black text-blue-600">
                  ✓
                </div>

                <p
                  className={`mt-1 text-sm font-bold ${paragraphColor}`}
                >
                  Professional
                </p>
              </div>

              <div>
                <div className="text-2xl font-black text-blue-600">
                  ✓
                </div>

                <p
                  className={`mt-1 text-sm font-bold ${paragraphColor}`}
                >
                  Reliable
                </p>
              </div>

              <div>
                <div className="text-2xl font-black text-blue-600">
                  ✓
                </div>

                <p
                  className={`mt-1 text-sm font-bold ${paragraphColor}`}
                >
                  Detail Focused
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[650px]">

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=90"
              alt="Professional cleaner"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent lg:from-blue-50/40" />

            {/* FLOATING CARD */}

            <div className="absolute bottom-8 left-6 rounded-2xl bg-white p-5 shadow-2xl sm:left-10">
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl">
                  ✨
                </div>

                <div>
                  <p className="text-sm font-black text-[#073778]">
                    Professional Cleaning
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    A cleaner home starts here.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section
        id="about"
        className={`scroll-mt-24 py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-900"
            : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

          {/* IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90"
                alt="Beautiful clean home"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
              />

            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-blue-600 px-6 py-5 text-white shadow-xl sm:right-6">

              <div className="text-3xl font-black">
                100%
              </div>

              <div className="text-sm font-bold">
                Care & Attention
              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-sm font-black tracking-[0.25em] text-blue-600">
              ABOUT MAIDS&apos;4US
            </p>

            <h2
              className={`mt-3 text-4xl font-black leading-tight sm:text-5xl ${headingColor}`}
            >
              Why Choose
              <span className="block text-blue-600">
                MAIDS&apos;4US?
              </span>
            </h2>

            <p
              className={`mt-6 text-lg leading-8 ${paragraphColor}`}
            >
              At MAIDS&apos;4US, we believe that a clean
              home creates a happier, healthier, and
              more comfortable environment.
            </p>

            <p
              className={`mt-4 leading-7 ${paragraphColor}`}
            >
              Our professional cleaning team takes
              pride in providing dependable service
              with attention to the small details that
              make a big difference.
            </p>

            {/* FEATURES */}

            <div className="mt-9 grid gap-6 sm:grid-cols-2">

              {[
                {
                  icon: "⭐",
                  title: "Professional & Thorough",
                  text: "We take pride in doing the job properly.",
                },
                {
                  icon: "🛡️",
                  title: "Reliable Service",
                  text: "You can depend on us for consistent service.",
                },
                {
                  icon: "✨",
                  title: "Attention to Detail",
                  text: "We focus on the details others may overlook.",
                },
                {
                  icon: "📅",
                  title: "Flexible Options",
                  text: "Cleaning options designed around your needs.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    darkMode
                      ? "border-blue-500/20 bg-slate-950"
                      : "border-blue-100 bg-blue-50/50"
                  }`}
                >

                  <div className="text-3xl">
                    {feature.icon}
                  </div>

                  <h3
                    className={`mt-3 font-black ${headingColor}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${paragraphColor}`}
                  >
                    {feature.text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        id="services"
        className={`scroll-mt-24 py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-950"
            : "bg-gradient-to-b from-blue-50 to-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-black tracking-[0.25em] text-blue-600">
              OUR SERVICES
            </p>

            <h2
              className={`mt-3 text-4xl font-black sm:text-5xl ${headingColor}`}
            >
              Cleaning Services
              <span className="block text-blue-600">
                For Every Need
              </span>
            </h2>

            <p
              className={`mt-5 text-lg leading-8 ${paragraphColor}`}
            >
              Whether you need regular maintenance,
              a deep clean, or urgent assistance,
              MAIDS&apos;4US has an option for you.
            </p>

          </div>

          {/* SERVICE CARDS */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (
              <div
                key={service.title}
                className={`group rounded-3xl border p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "border-blue-500/20 bg-slate-900"
                    : "border-blue-100 bg-white"
                }`}
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  {service.icon}
                </div>

                <h3
                  className={`mt-6 text-lg font-black ${headingColor}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${paragraphColor}`}
                >
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PRICING SECTION
      ===================================================== */}

      <section
        className={`py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-900"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-black tracking-[0.25em] text-blue-600">
              SIMPLE PRICING
            </p>

            <h2
              className={`mt-3 text-4xl font-black sm:text-5xl ${headingColor}`}
            >
              Choose What Works
              <span className="block text-blue-600">
                For You
              </span>
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl leading-7 ${paragraphColor}`}
            >
              Flexible cleaning options designed to
              match your home, schedule, and cleaning
              needs.
            </p>

          </div>

          {/* PRICING CARDS */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {pricing.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-3xl border-2 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  item.popular
                    ? "border-blue-600 shadow-xl shadow-blue-600/10"
                    : darkMode
                    ? "border-blue-500/20 bg-slate-950"
                    : "border-blue-100 bg-white"
                }`}
              >

                {/* POPULAR */}

                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-5 py-2 text-xs font-black tracking-wider text-white shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {item.icon}
                </div>

                <h3
                  className={`mt-6 text-xl font-black ${headingColor}`}
                >
                  {item.title}
                </h3>

                <div className="mt-5 flex items-baseline">
                  <span className="text-4xl font-black text-blue-600">
                    {item.price}
                  </span>

                  <span
                    className={`ml-1 font-bold ${paragraphColor}`}
                  >
                    {item.unit}
                  </span>
                </div>

                <p
                  className={`mt-4 text-sm leading-7 ${paragraphColor}`}
                >
                  {item.description}
                </p>

                <Link
                  href="/booking"
                  className="mt-7 block rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700"
                >
                  SELECT THIS SERVICE
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        className={`py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-950"
            : "bg-blue-50"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-black tracking-[0.25em] text-blue-600">
              HOW IT WORKS
            </p>

            <h2
              className={`mt-3 text-4xl font-black sm:text-5xl ${headingColor}`}
            >
              Cleaning Made
              <span className="block text-blue-600">
                Simple
              </span>
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Choose Your Service",
                text: "Select the cleaning service that fits your needs.",
              },
              {
                number: "02",
                title: "Submit Your Application",
                text: "Tell us about your home and choose your preferred date and time.",
              },
              {
                number: "03",
                title: "We Do The Cleaning",
                text: "Our professional cleaner arrives and takes care of your home.",
              },
              {
                number: "04",
                title: "Enjoy Your Clean Home",
                text: "Relax and enjoy a cleaner, fresher, happier home.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? "border-blue-500/20 bg-slate-900"
                    : "border-blue-100 bg-white"
                }`}
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                  {step.number}
                </div>

                <h3
                  className={`mt-6 text-xl font-black ${headingColor}`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-3 leading-7 ${paragraphColor}`}
                >
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION SECTION
      ===================================================== */}

      <section
        className={`py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-900"
            : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-7 px-6 md:grid-cols-2 lg:px-8">

          {/* =================================================
              CUSTOMER APPLICATION
          ================================================= */}

          <div
            className="group min-h-[440px] overflow-hidden rounded-[2rem] bg-cover bg-center p-8 shadow-xl sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(3,35,82,.82), rgba(3,35,82,.92)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=90')",
            }}
          >

            <div className="flex h-full flex-col justify-end">

              <div className="mb-auto">

                <div className="inline-flex rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-2 text-xs font-black tracking-widest text-blue-200">
                  FOR CUSTOMERS
                </div>

              </div>

              <div>

                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  Ready For A Cleaner Home?
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-blue-100">
                  Tell us what you need and choose
                  a convenient date and time for
                  your cleaning service.
                </p>

                <Link
                  href="/booking"
                  className="mt-7 inline-block rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-500"
                >
                  CUSTOMER APPLICATION
                </Link>

              </div>

            </div>

          </div>

          {/* =================================================
              CLEANER APPLICATION
          ================================================= */}

          <div
            className="group min-h-[440px] overflow-hidden rounded-[2rem] bg-cover bg-center p-8 shadow-xl sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(3,35,82,.82), rgba(3,35,82,.92)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=90')",
            }}
          >

            <div className="flex h-full flex-col justify-end">

              <div className="mb-auto">

                <div className="inline-flex rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-2 text-xs font-black tracking-widest text-blue-200">
                  JOIN OUR TEAM
                </div>

              </div>

              <div>

                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  Become A MAIDS&apos;4US Cleaner
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-blue-100">
                  Apply to join our cleaning team
                  and manage your cleaning jobs
                  through our cleaner portal.
                </p>

                {/* ONLY CLEANER APPLICATION */}

                <Link
                  href="/cleaner-application"
                  className="mt-7 inline-block rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-500"
                >
                  APPLY AS A CLEANER
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section
        id="contact"
        className={`scroll-mt-24 py-20 lg:py-24 ${
          darkMode
            ? "bg-slate-950"
            : "bg-gradient-to-br from-blue-50 to-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

          {/* CONTACT TEXT */}

          <div>

            <p className="text-sm font-black tracking-[0.25em] text-blue-600">
              CONTACT US
            </p>

            <h2
              className={`mt-3 text-4xl font-black sm:text-5xl ${headingColor}`}
            >
              Let&apos;s Make Your
              <span className="block text-blue-600">
                Home Shine
              </span>
            </h2>

            <p
              className={`mt-6 max-w-xl text-lg leading-8 ${paragraphColor}`}
            >
              Have questions about our cleaning
              services or your booking? Our team
              is here to help.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  📍
                </div>

                <div>
                  <p className={`font-black ${headingColor}`}>
                    Service Area
                  </p>

                  <p className={`mt-1 ${paragraphColor}`}>
                    Manhattan, Brooklyn, Queens & the Bronx
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  🧹
                </div>

                <div>
                  <p className={`font-black ${headingColor}`}>
                    House Cleaning
                  </p>

                  <p className={`mt-1 ${paragraphColor}`}>
                    Professional cleaning services
                    for your home.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  ⏰
                </div>

                <div>
                  <p className={`font-black ${headingColor}`}>
                    Flexible Scheduling
                  </p>

                  <p className={`mt-1 ${paragraphColor}`}>
                    Choose a date and time that works
                    for you.
                  </p>
                </div>

              </div>

            </div>

            <Link
              href="/booking"
              className="mt-9 inline-block rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              BOOK A CLEANING
            </Link>

          </div>

          {/* CONTACT IMAGE */}

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=90"
              alt="Cleaning supplies"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#032c68] text-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          {/* BRAND */}

          <div>

            <img
              src="/maids4us-logo%20(1).png"
              alt="MAIDS'4US"
              className="h-24 w-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100">
              A Cleaner Home. A Happier You.
              Professional and reliable house cleaning
              services across New York City.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-sm font-black tracking-widest">
              QUICK LINKS
            </h3>

            <div className="mt-5 space-y-3">

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    navigateTo(
                      item.section,
                      item.active
                    )
                  }
                  className="block text-sm text-blue-100 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}

            </div>

          </div>

          {/* CUSTOMERS */}

          <div>

            <h3 className="text-sm font-black tracking-widest">
              CUSTOMERS
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/booking"
                className="block text-sm text-blue-100 transition hover:text-white"
              >
                CUSTOMER APPLICATION
              </Link>

              <Link
                href="/booking"
                className="block text-sm text-blue-100 transition hover:text-white"
              >
                BOOK A CLEANING
              </Link>

              <a
                href={CRM_LOGIN_URL}
                className="block text-sm text-blue-100 transition hover:text-white"
              >
                LOGIN
              </a>

            </div>

          </div>

          {/* CLEANERS */}

          <div>

            <h3 className="text-sm font-black tracking-widest">
              CLEANERS
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/cleaner-application"
                className="block text-sm text-blue-100 transition hover:text-white"
              >
                APPLY AS A CLEANER
              </Link>

              <a
                href={CRM_LOGIN_URL}
                className="block text-sm text-blue-100 transition hover:text-white"
              >
                CLEANER LOGIN
              </a>

            </div>

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="border-t border-blue-400/20">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-blue-100 sm:flex-row lg:px-8">

            <p>
              © 2026 MAIDS&apos;4US. All rights reserved.
            </p>

            <p className="font-bold">
              NEW YORK CITY, NY
            </p>

          </div>

        </div>

      </footer>
    </main>
  );
}