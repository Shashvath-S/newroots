"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const retypePassword = formData.get("retypePassword") as string;
    if (password !== retypePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, username, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Registration failed.");
      } else {
        // Registration successful, redirect or show success
        window.location.href = "/profile";
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white w-full mt-8"></div>
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Register
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Create your account to continue
              </p>
            </div>

            {error && (
              <div className="mb-4 text-center text-red-600 text-sm font-semibold">
                {error}
              </div>
            )}
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                  required
                />
              </div>
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
                  required
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
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="retypePassword"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Retype Password
                </label>
                <input
                  id="retypePassword"
                  name="retypePassword"
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition shadow-sm"
              >
                Register
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            © 2024 Brand. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
