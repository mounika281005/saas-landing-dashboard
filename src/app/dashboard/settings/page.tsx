"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useTheme } from "@/hooks/useTheme";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Load saved profile
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setName(parsed.name);
      setEmail(parsed.email);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify({ name, email })
    );
    alert("Profile saved successfully");
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your preferences and profile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= PROFILE CARD ================= */}
          <div className="rounded-2xl p-8 border 
                          border-gray-300 dark:border-[#1f2230]
                          bg-gray-600 dark:bg-[#111217]">

            <h2 className="text-xl font-semibold mb-6">
              Profile Information
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border 
                             border-gray-300 dark:border-[#1f2230]
                             bg-gray-500 dark:bg-[#18181C]
                             focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border 
                             border-gray-300 dark:border-[#1f2230]
                             bg-gray-500 dark:bg-[#18181C]
                             focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                onClick={handleSave}
                className="mt-4 px-6 py-3 bg-purple-600 
                           text-white rounded-lg hover:bg-purple-700 transition"
              >
                Save Changes
              </button>

            </div>
          </div>

          {/* ================= THEME CARD ================= */}
          <div className="rounded-2xl p-8 border 
                          border-gray-300 dark:border-[#1f2230]
                          bg-gray-600 dark:bg-[#111217]">

            <h2 className="text-xl font-semibold mb-6">
              Appearance
            </h2>

            <div className="flex items-center justify-between">

              <div>
                <p className="font-medium">
                  Dark Mode
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Toggle between light and dark theme
                </p>
              </div>

              <button
                onClick={toggleTheme}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition ${
                  theme === "dark"
                    ? "bg-purple-600"
                    : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    theme === "dark"
                      ? "translate-x-6"
                      : ""
                  }`}
                />
              </button>

            </div>

          </div>

        </div>

      </main>
    </ProtectedRoute>
  );
}
