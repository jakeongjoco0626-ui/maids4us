"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function getPhotoExtension(file: File) {
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";
  return "jpg";
}

export default function CleanerApplicationPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [selectedPhotoNames, setSelectedPhotoNames] = useState<string[]>([]);
  const [selectedPhotoPreviews, setSelectedPhotoPreviews] = useState<string[]>([]);

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);

    setFormMessage("");

    if (files.length === 0) {
      setSelectedPhotoNames([]);
      setSelectedPhotoPreviews([]);
      return;
    }

    if (files.length > 10) {
      event.target.value = "";
      setSelectedPhotoNames([]);
      setSelectedPhotoPreviews([]);
      setFormMessage("You can upload up to 10 cleaning materials photos.");
      return;
    }

    const invalidType = files.find(
      (file) => !ALLOWED_PHOTO_TYPES.has(file.type)
    );

    if (invalidType) {
      event.target.value = "";
      setSelectedPhotoNames([]);
      setSelectedPhotoPreviews([]);
      setFormMessage(
        "All cleaning materials photos must be JPG, PNG, or WebP images."
      );
      return;
    }

    const oversizedPhoto = files.find(
      (file) => file.size > MAX_PHOTO_BYTES
    );

    if (oversizedPhoto) {
      event.target.value = "";
      setSelectedPhotoNames([]);
      setSelectedPhotoPreviews([]);
      setFormMessage(
        "Each cleaning materials photo must be 5 MB or smaller."
      );
      return;
    }

    setSelectedPhotoNames(files.map((file) => file.name));

    Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();

            reader.onload = () => {
              resolve(
                typeof reader.result === "string" ? reader.result : ""
              );
            };

            reader.readAsDataURL(file);
          })
      )
    ).then((previews) => {
      setSelectedPhotoPreviews(previews.filter(Boolean));
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const zones = formData.getAll("zones") as string[];
    const photos = formData
      .getAll("photos")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    setFormMessage("");

    if (zones.length === 0) {
      setFormMessage("Please select at least one service zone.");
      return;
    }

    if (photos.length > 10) {
      setFormMessage("You can upload up to 10 cleaning materials photos.");
      return;
    }

    const invalidPhoto = photos.find(
      (photo) => !ALLOWED_PHOTO_TYPES.has(photo.type)
    );

    if (invalidPhoto) {
      setFormMessage(
        "All cleaning materials photos must be JPG, PNG, or WebP images."
      );
      return;
    }

    const oversizedPhoto = photos.find(
      (photo) => photo.size > MAX_PHOTO_BYTES
    );

    if (oversizedPhoto) {
      setFormMessage(
        "Each cleaning materials photo must be 5 MB or smaller."
      );
      return;
    }

    setSubmitting(true);

    try {
      const photoPaths: string[] = [];

      for (const photo of photos) {
        const extension = getPhotoExtension(photo);
        const photoPath = `applications/${crypto.randomUUID()}.${extension}`;

        const { error: uploadError } = await supabase.storage
          .from("cleaner-application-photos")
          .upload(photoPath, photo, {
            cacheControl: "3600",
            contentType: photo.type,
            upsert: false,
          });

        if (uploadError) {
          throw new Error(
            `Cleaning materials photo upload failed: ${uploadError.message}`
          );
        }

        photoPaths.push(photoPath);
      }

      const { error: applicationError } = await supabase
        .from("cleaner_applications")
        .insert({
          first_name: String(formData.get("firstName") || "").trim(),
          last_name: String(formData.get("lastName") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          years_experience: String(formData.get("experience") || ""),
          services: [],
          availability: String(formData.get("availability") || ""),
          zones,
          zip_code: String(formData.get("zip") || "").trim(),
          about: String(formData.get("about") || "").trim(),
          photo_path: photoPaths[0] ?? null,
          photo_paths: photoPaths,
        });

      if (applicationError) {
        throw new Error(
          `Application could not be saved: ${applicationError.message}`
        );
      }

      form.reset();
      setSelectedPhotoNames([]);
      setSelectedPhotoPreviews([]);
      router.push("/cleaner-application/thank-you");
    } catch (error) {
      console.error("Cleaner application error:", error);

      setFormMessage(
        error instanceof Error
          ? error.message
          : "There was a problem submitting your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
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

          <div className="hidden gap-8 md:flex">
            <Link href="/" className="text-slate-700 hover:text-[#1683FF]">
              HOME
            </Link>

            <Link
              href="/about"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              ABOUT US
            </Link>

            <Link
              href="/services"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              SERVICES
            </Link>

            <Link
              href="/pricing"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              PRICING
            </Link>

            <Link
              href="/booking"
              className="text-slate-700 hover:text-[#1683FF]"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wider text-blue-400">
            Join MAIDS'4US
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Become a MAIDS'4US Cleaner
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We're looking for dependable, professional cleaners who take
            pride in providing excellent service to our customers.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Cleaner Application
            </h2>

            <p className="mt-3 text-slate-600">
              Complete the application below. Our team will review your
              information and contact you about the next steps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-slate-900">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  First Name
                </label>

                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Last Name
                </label>

                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Last name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Cleaning Materials / Equipment Photos
              </label>

              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                <input
                  name="photos"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  onChange={handlePhotoChange}
                  className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2.5 file:font-semibold file:text-white hover:file:bg-blue-700"
                />

                {selectedPhotoNames.length > 0 && (
                  <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      Selected Photos ({selectedPhotoNames.length})
                    </p>

                    <div className="mt-2 space-y-1">
                      {selectedPhotoNames.map((name, index) => (
                        <p
                          key={`${name}-${index}`}
                          className="break-all text-sm font-medium text-slate-800"
                        >
                          {index + 1}. {name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {selectedPhotoPreviews.length > 0 && (
                  <div className="mt-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Photo Previews
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selectedPhotoPreviews.map((preview, index) => (
                        <div
                          key={`${index}-${selectedPhotoNames[index] ?? "photo"}`}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                        >
                          <img
                            src={preview}
                            alt={`Selected cleaning materials or equipment preview ${index + 1}`}
                            className="h-40 w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-2 text-xs text-slate-600">
                  Optional. If you have your own cleaning materials or
                  equipment, you can upload multiple photos showing what you
                  have. Up to 10 photos. JPG, PNG, or WebP, up to 5 MB each.
                </p>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Years of Cleaning Experience
              </label>

              <select
                name="experience"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select experience
                </option>
                <option value="less-than-1">Less than 1 year</option>
                <option value="1-2">1–2 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5-plus">5+ years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Availability
              </label>

              <select
                name="availability"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select availability
                </option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="weekends">Weekends Only</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Service Zones / Boroughs
              </label>

              <p className="mb-3 text-sm text-slate-600">
                Select every area where you are available to work.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Manhattan",
                  "Brooklyn",
                  "Queens",
                  "Bronx",
                  "Staten Island",
                  "Other / Nearby Areas",
                ].map((zone) => (
                  <label
                    key={zone}
                    className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white p-4 text-slate-900"
                  >
                    <input
                      type="checkbox"
                      name="zones"
                      className="h-4 w-4 accent-blue-600"
                      value={zone}
                    />
                    <span className="font-medium text-slate-800">{zone}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Home / Service Area ZIP Code
              </label>

              <input
                name="zip"
                type="text"
                required
                placeholder="Enter ZIP code"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Tell Us About Yourself
              </label>

              <textarea
                name="about"
                required
                rows={5}
                placeholder="Tell us about your cleaning experience..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 caret-blue-600 outline-none placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            {formMessage ? (
              <div
                className={`rounded-xl border p-4 text-sm font-medium ${
                  formMessage.startsWith("Thank you")
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {formMessage}
              </div>
            ) : null}

            <div className="rounded-xl bg-blue-50 p-4 text-sm text-slate-600">
              By submitting this application, you are expressing your interest
              in working with MAIDS'4US. Submission does not guarantee
              employment.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting Application..." : "Submit Cleaner Application"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
