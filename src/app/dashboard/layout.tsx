"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/dashboard/users" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-black text-white">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 bg-[#111217] border-r border-[#1f2230] p-6 flex flex-col justify-between">

          <div>
            <h2 className="text-xl font-semibold mb-10">
              Admin Panel
            </h2>

            <nav className="space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:bg-[#1f2230] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium"
          >
            Logout
          </button>

        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 p-10">
          {children}
        </main>

      </div>
    </ProtectedRoute>
  );
}