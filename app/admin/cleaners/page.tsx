"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  years_experience: string;
  services: string[];
  availability: string;
  zip_code: string;
  about: string;
  status: string;
  user_id: string | null;
  created_at: string;
};

export default function AdminCleanersPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadApplications() {
    setLoading(true);

    const { data, error } = await supabase
      .from("cleaner_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("ERROR: " + error.message);
    } else {
      setApplications(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadApplications();
  }, []);

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("cleaner_applications")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert("ERROR: " + error.message);
      return;
    }

    await loadApplications();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-900">
          MAIDS'4US Admin
        </h1>

        <p className="mt-2 text-slate-600">
          Cleaner Applications
        </p>

        {loading ? (
          <p className="mt-8">Loading applications...</p>
        ) : applications.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8 shadow">
            <p className="text-slate-600">
              No cleaner applications yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {applications.map((application) => (
              <div
                key={application.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {application.first_name} {application.last_name}
                    </h2>

                    <p className="text-slate-600">
                      {application.email}
                    </p>

                    <p className="text-slate-600">
                      {application.phone}
                    </p>
                  </div>

                  <div>
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
                      {application.status}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <strong>Experience:</strong>{" "}
                    {application.years_experience}
                  </div>

                  <div>
                    <strong>ZIP Code:</strong>{" "}
                    {application.zip_code}
                  </div>

                  <div>
                    <strong>Availability:</strong>{" "}
                    {application.availability}
                  </div>

                  <div>
                    <strong>Services:</strong>{" "}
                    {application.services?.join(", ")}
                  </div>
                </div>

                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <strong>About:</strong>
                  <p className="mt-2 text-slate-700">
                    {application.about}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      updateStatus(application.id, "approved")
                    }
                    className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(application.id, "rejected")
                    }
                    className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(application.id, "pending")
                    }
                    className="rounded-lg bg-slate-200 px-5 py-2 font-semibold text-slate-800 hover:bg-slate-300"
                  >
                    Set Pending
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}