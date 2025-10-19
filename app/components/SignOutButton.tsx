"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={async () => await signOut({ redirectTo: "/" })}
      className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer flex items-center justify-center text-white transition-colors shadow-sm"
      title="Sign Out"
    >
      <LogOut className="w-5 h-5" />
    </button>
  );
}
