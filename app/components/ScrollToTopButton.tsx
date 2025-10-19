"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white bg-emerald-600 shadow-lg hover:bg-emerald-700 transition"
    >
      <ArrowUp className="w-5 h-5" />
      Set Up Your Account
    </button>
  );
}
