"use client";

import { useMemo, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUsers } from "@/hooks/useUsers";
import Spinner from "@/components/ui/Spinner";
import ErrorState from "@/components/ui/ErrorState";

const ITEMS_PER_PAGE = 4;

export default function UsersPage() {
  const { users, loading, error } = useUsers();

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // ================= FILTER + SORT =================
  const filteredUsers = useMemo(() => {
    const filtered = users.filter(
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

  // ================= PAGINATION =================
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <ProtectedRoute>
      <main className="min-h-screen">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Users
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage and explore all registered users
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-8">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="px-4 py-3 rounded-xl border 
                       bg-grey-500 dark:bg-[#111217] 
                       border-gray-300 dark:border-[#1f2230] 
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       w-full md:w-80"
          />

          {/* Sort */}
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="px-4 py-3 rounded-xl border 
                       bg-gray-500 dark:bg-[#111217] 
                       border-gray-300 dark:border-[#1f2230] 
                       hover:border-purple-500 transition"
          >
            Sort: {sortAsc ? "A–Z" : "Z–A"}
          </button>
        </div>

        {/* STATES */}
        {loading && (
          <div className="flex justify-center mt-16">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="mt-12">
            <ErrorState message={error} />
          </div>
        )}

        {/* TABLE */}
        {!loading && !error && (
          <>
            <div className="overflow-x-auto rounded-xl border border-gray-300 dark:border-[#1f2230]">

              {paginatedUsers.length === 0 ? (
                <div className="p-10 text-center text-gray-500">
                  No users found.
                </div>
              ) : (
                <table className="w-full text-left">

                  <thead className="bg-gray-500 dark:bg-[#1a1c24]">
                    <tr>
                      <th className="p-4">Name</th>
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
                        className="cursor-pointer hover:bg-gray-500 dark:hover:bg-[#1f2230] transition"
                      >
                        <td className="p-4">{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company?.name || "Self Employed"}</td>
                        <td>{user.address?.city || "Internet"}</td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              )}

            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex gap-3 mt-8 flex-wrap">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded-lg border ${
                      page === i + 1
                        ? "bg-purple-600 text-white border-purple-600"
                        : "border-gray-300 dark:border-[#1f2230]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* MODAL */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white dark:bg-[#111217] 
                            text-black dark:text-white
                            p-8 rounded-2xl w-full max-w-md border border-gray-300 dark:border-[#1f2230]">

              <h2 className="text-2xl font-semibold">
                {selectedUser.name}
              </h2>

              <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Company: {selectedUser.company.name}</p>
                <p>City: {selectedUser.address.city}</p>
                <p>Website: {selectedUser.website}</p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg"
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