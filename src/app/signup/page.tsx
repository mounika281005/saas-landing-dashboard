"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import AuthRedirect from "@/components/AuthRedirect";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Fake token
    localStorage.setItem("token", "fake_token");

    router.push("/dashboard");
  };

  return (
    <AuthRedirect>
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-[#18181C] p-8 rounded-2xl border border-[#242734]">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734] focus:outline-none focus:border-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734] focus:outline-none focus:border-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734] focus:outline-none focus:border-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-12 px-4 rounded-lg bg-[#111217] border border-[#242734] focus:outline-none focus:border-purple-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button className="w-full mt-4" onClick={handleSignup}>
            Sign Up
          </Button>

        </div>

        <p className="mt-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
    </AuthRedirect>
  );
}