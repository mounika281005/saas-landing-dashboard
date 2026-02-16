"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useUsers } from "@/hooks/useUsers";
import { useMemo, useState } from "react";

const ITEMS_PER_PAGE = 4;

export default function UsersPage() {
  const { users, loading, error } = useUsers();

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  /* ================= FILTER + SORT ================= */
  const filteredUsers = useMemo(() => {
    let filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    filtered.sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return filtered;
  }, [users, search, sortAsc]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-10">

        {/* ================= HEADER ================= */}
        <header>
          <h1 className="text-3xl font-semibold">Users</h1>
          <p className="text-gray-400 mt-2">
            Manage and explore user data
          </p>
        </header>

        {/* ================= CONTROLS ================= */}
        <section className="mt-10 flex flex-col md:flex-row gap-4 md:items-center justify-between">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="px-4 py-3 rounded-xl bg-[#111217] border border-[#1f2230] w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Sort */}
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="px-5 py-3 rounded-xl bg-[#111217] border border-[#1f2230] hover:border-purple-500 transition"
          >
            Sort: {sortAsc ? "A–Z" : "Z–A"}
          </button>

        </section>

        {/* ================= STATES ================= */}
        {loading && (
          <div className="mt-12 animate-pulse space-y-4">
            <div className="h-5 w-1/3 bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-800 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-800 rounded"></div>
          </div>
        )}

        {error && (
          <div className="mt-12 text-red-500">
            {error}
          </div>
        )}

        {/* ================= TABLE ================= */}
        {!loading && !error && (
          <section className="mt-12 overflow-x-auto">

            {paginatedUsers.length === 0 ? (
              <div className="text-center text-gray-400">
                No users found matching your search.
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1f2230] text-left text-gray-400 text-sm">
                    <th className="py-4">Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>City</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className="border-b border-[#1f2230] hover:bg-[#111217] cursor-pointer transition"
                    >
                      <td className="py-4">{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.company.name}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

          </section>
        )}

        {/* ================= PAGINATION ================= */}
        {!loading && !error && totalPages > 1 && (
          <div className="mt-8 flex gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg border transition ${
                  page === i + 1
                    ? "bg-purple-600 border-purple-600"
                    : "border-[#1f2230] hover:border-purple-500"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* ================= MODAL ================= */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#111217] p-8 rounded-2xl w-full max-w-md border border-[#1f2230]">

              <h2 className="text-2xl font-semibold">
                {selectedUser.name}
              </h2>

              <div className="mt-6 space-y-3 text-gray-400">
                <p>Email: {selectedUser.email}</p>
                <p>Company: {selectedUser.company.name}</p>
                <p>City: {selectedUser.address.city}</p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-6 px-5 py-2 bg-purple-600 rounded-lg hover:opacity-90 transition"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </main>
    </ProtectedRoute>
  );
}
