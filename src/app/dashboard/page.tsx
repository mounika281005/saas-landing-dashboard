"use client";

import { useMemo } from "react";
import { useUsers } from "@/hooks/useUsers";

export default function DashboardPage() {
  const { users, localUsers, loading, error } = useUsers();

  const allUsers = [...users, ...localUsers];

  /* ================= DERIVED STATS ================= */
  const stats = useMemo(() => {
    const totalUsers = allUsers.length;

    const totalCompanies = new Set(
      allUsers.map((u) => u.company?.name || "Self Employed")
    ).size;

    const totalCities = new Set(
      allUsers.map((u) => u.address?.city || "Internet")
    ).size;

    return {
      totalUsers,
      totalCompanies,
      totalCities,
    };
  }, [allUsers]);

  return (
    <div className="max-w-6xl">

      {/* ================= HEADER ================= */}
      <header>
        <h1 className="text-3xl font-semibold">
          Dashboard Overview
        </h1>
        <p className="text-gray-400 mt-2">
          Welcome to your control center
        </p>
      </header>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
          <div className="h-32 bg-[#111217] rounded-2xl"></div>
          <div className="h-32 bg-[#111217] rounded-2xl"></div>
          <div className="h-32 bg-[#111217] rounded-2xl"></div>
          <div className="h-32 bg-[#111217] rounded-2xl"></div>
        </div>
      )}

      {/* ================= ERROR ================= */}
      {error && (
        <div className="mt-10 text-red-500">
          {error}
        </div>
      )}

      {/* ================= STATS ================= */}
      {!loading && !error && (
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* TOTAL USERS */}
          <div className="rounded-2xl p-8 border border-[#1f2230] bg-[#111217]">
            <p className="text-sm text-gray-400">
              Total Registered Users
            </p>
            <h2 className="text-4xl font-semibold mt-4">
              {stats.totalUsers}
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              {users.length} from API + {localUsers.length} Local
            </p>
          </div>

          {/* COMPANIES */}
          <div className="rounded-2xl p-8 border border-[#1f2230] bg-[#111217]">
            <p className="text-sm text-gray-400">
              Active Companies
            </p>
            <h2 className="text-4xl font-semibold mt-4">
              {stats.totalCompanies}
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Unique organizations
            </p>
          </div>

          {/* CITIES */}
          <div className="rounded-2xl p-8 border border-[#1f2230] bg-[#111217]">
            <p className="text-sm text-gray-400">
              Cities Covered
            </p>
            <h2 className="text-4xl font-semibold mt-4">
              {stats.totalCities}
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Global reach
            </p>
          </div>

          {/* SYSTEM STATUS */}
          <div className="rounded-2xl p-8 bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white">
            <p className="text-sm opacity-90">
              System Status
            </p>
            <h2 className="text-2xl font-semibold mt-4">
              Operational
            </h2>
            <p className="text-xs opacity-80 mt-2">
              Local Storage Database Active
            </p>
          </div>

        </section>
      )}

    </div>
  );
}
