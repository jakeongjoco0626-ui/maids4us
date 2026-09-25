"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type CleanerProfile = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  services: string[];
  availability: string;
  zip_code: string;
  status: string;
};

type CleanerJob = {
  id: string;
  customer_name: string;
  customer_phone: string | null;
  customer_email: string | null;
  service: string;
  job_date: string;
  job_time: string;
  address: string;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  notes: string | null;
  status: string;
};

export default function CleanerPortalPage() {
  const [profile, setProfile] =
    useState<CleanerProfile | null>(null);

  const [jobs, setJobs] = useState<CleanerJob[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPortal();
  }, []);

  async function loadPortal() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/cleaner-login";
      return;
    }

    console.log("AUTH USER ID:", user.id);
    console.log("AUTH USER EMAIL:", user.email);

    const { data: profileData, error: profileError } =
      await supabase
        .from("cleaner_applications")
        .select(
          "first_name, last_name, email, phone, services, availability, zip_code, status"
        )
        .eq("user_id", user.id)
        .maybeSingle();

    console.log("CLEANER PROFILE DATA:", profileData);
    console.log("PROFILE ERROR:", profileError);

    if (profileError) {
      console.error(
        "PROFILE DATABASE ERROR:",
        profileError
      );

      alert(
        "PROFILE DATABASE ERROR:\n\n" +
          profileError.message
      );

      setLoading(false);
      return;
    }

    if (!profileData) {
      console.error(
        "NO CLEANER PROFILE FOUND"
      );

      console.log(
        "AUTH USER ID:",
        user.id
      );

      console.log(
        "AUTH USER EMAIL:",
        user.email
      );

      alert(
        "Cleaner profile not found.\n\n" +
          "Logged-in User ID:\n" +
          user.id +
          "\n\n" +
          "Logged-in Email:\n" +
          (user.email || "No email found")
      );

      setLoading(false);
      return;
    }

    setProfile(profileData);

    const { data: jobsData, error: jobsError } =
      await supabase
        .from("cleaner_jobs")
        .select(
          "id, customer_name, customer_phone, customer_email, service, job_date, job_time, address, city, state, zip_code, notes, status"
        )
        .eq("cleaner_id", user.id)
        .order("job_date", {
          ascending: true,
        });

    if (jobsError) {
      console.error(
        "JOBS ERROR:",
        jobsError
      );
    } else {
      setJobs(jobsData || []);
    }

    setLoading(false);
  }

  async function updateJobStatus(
    jobId: string,
    newStatus: string
  ) {
    const { error } = await supabase
      .from("cleaner_jobs")
      .update({
        status: newStatus,
      })
      .eq("id", jobId);

    if (error) {
      alert(
        "ERROR UPDATING JOB STATUS:\n\n" +
          error.message
      );
      return;
    }

    setJobs((currentJobs) =>
      currentJobs.map((job) =>
        job.id === jobId
          ? {
              ...job,
              status: newStatus,
            }
          : job
      )
    );
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href =
      "/cleaner-login";
  }

  function getStatusStyle(
    status: string
  ) {
    switch (status) {
      case "accepted":
        return "bg-blue-100 text-blue-700";

      case "in_progress":
        return "bg-yellow-100 text-yellow-700";

      case "completed":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  }

  function formatStatus(
    status: string
  ) {
    return status
      .replace("_", " ")
      .replace(
        /\b\w/g,
        (letter) =>
          letter.toUpperCase()
      );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">
          Loading cleaner portal...
        </p>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
          <h1 className="text-xl font-bold text-slate-900">
            Cleaner Profile Not Found
          </h1>

          <p className="text-slate-600 mt-3">
            Your login was successful, but your
            cleaner application is not connected
            to this account.
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-slate-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-slate-800"
          >
            Back to Cleaner Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}

      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              MAIDS'4US
            </h1>

            <p className="text-sm text-slate-300">
              Cleaner Portal
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100"
          >
            Logout
          </button>

        </div>
      </header>


      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* PROFILE SUMMARY */}

        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">

          <h2 className="text-2xl font-bold text-slate-900">
            Welcome, {profile.first_name}!
          </h2>

          <div className="mt-5 grid md:grid-cols-3 gap-4">

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Application Status
              </p>

              <p className="font-bold text-green-600 capitalize">
                {profile.status}
              </p>
            </div>


            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Availability
              </p>

              <p className="font-semibold text-slate-900">
                {profile.availability}
              </p>
            </div>


            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Service Area
              </p>

              <p className="font-semibold text-slate-900">
                {profile.zip_code}
              </p>
            </div>

          </div>

        </section>


        {/* JOBS */}

        <section className="mb-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Upcoming Jobs
              </h2>

              <p className="text-slate-600 mt-1">
                {jobs.length} assigned{" "}
                {jobs.length === 1
                  ? "job"
                  : "jobs"}
              </p>

            </div>

          </div>


          {jobs.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">

              <p className="text-slate-500">
                You currently have no assigned jobs.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >

                  {/* JOB HEADER */}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    <div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {job.service}
                      </h3>

                      <p className="text-slate-600 mt-1">
                        {job.job_date} at{" "}
                        {job.job_time}
                      </p>

                    </div>


                    {/* STATUS */}

                    <div className="flex flex-col items-start md:items-end gap-2">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                          job.status
                        )}`}
                      >
                        {formatStatus(
                          job.status
                        )}
                      </span>


                      <select
                        value={job.status}
                        onChange={(e) =>
                          updateJobStatus(
                            job.id,
                            e.target.value
                          )
                        }
                        className="border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900"
                      >

                        <option value="assigned">
                          Assigned
                        </option>

                        <option value="accepted">
                          Accepted
                        </option>

                        <option value="in_progress">
                          In Progress
                        </option>

                        <option value="completed">
                          Completed
                        </option>

                        <option value="cancelled">
                          Cancelled
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* CUSTOMER + ADDRESS */}

                  <div className="grid md:grid-cols-2 gap-5 mt-6">

                    <div>

                      <p className="text-sm text-slate-500">
                        Customer
                      </p>

                      <p className="font-semibold text-slate-900">
                        {job.customer_name}
                      </p>


                      {job.customer_phone && (
                        <a
                          href={`tel:${job.customer_phone}`}
                          className="block text-blue-600 hover:underline mt-1"
                        >
                          {job.customer_phone}
                        </a>
                      )}


                      {job.customer_email && (
                        <a
                          href={`mailto:${job.customer_email}`}
                          className="block text-blue-600 hover:underline"
                        >
                          {job.customer_email}
                        </a>
                      )}

                    </div>


                    <div>

                      <p className="text-sm text-slate-500">
                        Address
                      </p>

                      <p className="font-semibold text-slate-900">
                        {job.address}
                      </p>

                      <p className="text-slate-600">
                        {job.city},{" "}
                        {job.state}{" "}
                        {job.zip_code}
                      </p>

                    </div>

                  </div>


                  {/* NOTES */}

                  {job.notes && (

                    <div className="mt-5 bg-slate-50 rounded-xl p-4">

                      <p className="text-sm text-slate-500">
                        Job Notes
                      </p>

                      <p className="text-slate-700 mt-1">
                        {job.notes}
                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          )}

        </section>


        {/* PROFILE */}

        <section className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold text-slate-900">
            My Profile
          </h2>

          <div className="mt-4 grid md:grid-cols-2 gap-4 text-slate-700">

            <p>
              <strong>Name:</strong>{" "}
              {profile.first_name}{" "}
              {profile.last_name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {profile.email}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {profile.phone}
            </p>

            <p>
              <strong>ZIP Code:</strong>{" "}
              {profile.zip_code}
            </p>

            <p className="md:col-span-2">
              <strong>Services:</strong>{" "}
              {profile.services?.join(", ")}
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}