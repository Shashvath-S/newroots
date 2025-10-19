"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = (formData.get("username") || "").toString();
    const password = (formData.get("password") || "").toString();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const res: any = await signIn("credentials", {
        redirect: false,
        username,
        password,
      } as any);

      if (res?.error) {
        setError(res.error || "Invalid credentials");
        return;
      }

      window.location.href = "/profile";
    } catch (err) {
      setError("An error occurred during sign in.");
    }
  };

  return (
    <>
      <div className="bg-white w-full mt-8"></div>
      <div
        className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12"
        id="inputRegion"
      >
        <div className="max-w-md w-full">
          <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to your account to continue
              </p>
            </div>

            {error && (
              <div className="mb-4 text-center text-red-600 text-sm font-semibold">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="johndoe"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition shadow-sm"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
