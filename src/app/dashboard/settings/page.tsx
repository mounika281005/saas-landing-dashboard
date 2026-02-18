"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [message, setMessage] = useState("");

  /* ================= LOAD SAVED PROFILE ================= */
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setName(parsed.name || "");
      setEmail(parsed.email || "");
      setNotifications(parsed.notifications ?? true);
    }
  }, []);

  /* ================= SAVE PROFILE ================= */
  const handleSave = () => {
    if (!name || !email) {
      setMessage("Please fill all fields.");
      return;
    }

    const updatedProfile = {
      name,
      email,
      notifications,
    };

    localStorage.setItem("profile", JSON.stringify(updatedProfile));

    setMessage("Profile updated successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <div className="max-w-6xl">

      {/* ================= HEADER ================= */}
      <header>
        <h1 className="text-3xl font-semibold">
          Settings
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your preferences and profile
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-2 gap-10">

        {/* ================= PROFILE CARD ================= */}
        <div className="rounded-2xl p-8 border border-[#1f2230] bg-[#111217]">

          <h2 className="text-xl font-semibold mb-6">
            Profile Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#18181C] border border-[#1f2230] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#18181C] border border-[#1f2230] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <button
              onClick={handleSave}
              className="mt-4 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition"
            >
              Save Changes
            </button>

            {message && (
              <p className="text-sm text-green-400 mt-2">
                {message}
              </p>
            )}

          </div>

        </div>

        {/* ================= APPEARANCE CARD ================= */}
        <div className="rounded-2xl p-8 border border-[#1f2230] bg-[#111217]">

          <h2 className="text-xl font-semibold mb-6">
            Appearance & Preferences
          </h2>

          {/* THEME TOGGLE */}
          <div className="flex items-center justify-between mb-8">

            <div>
              <p className="font-medium">
                Theme Mode
              </p>
              <p className="text-sm text-gray-400">
                Switch between dark and light themes
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#FF9898] to-[#8054FF]"
                  : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                  theme === "dark" ? "translate-x-6" : ""
                }`}
              />
            </button>

          </div>

          {/* NOTIFICATION TOGGLE */}
          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Email Notifications
              </p>
              <p className="text-sm text-gray-400">
                Receive updates about your account activity
              </p>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition ${
                notifications
                  ? "bg-gradient-to-r from-[#FF9898] to-[#8054FF]"
                  : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                  notifications ? "translate-x-6" : ""
                }`}
              />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
