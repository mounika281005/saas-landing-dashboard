"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthRedirect from "@/components/AuthRedirect";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("token", "fake_token");
    router.push("/dashboard");
  };

  return (
    <AuthRedirect>
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md bg-[#18181C] p-8 rounded-2xl border border-[#242734]">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Login
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="w-full mt-4 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </AuthRedirect>
  );
}