"use client";

import { Sprout, Users, Globe, Heart } from "lucide-react";

export default function HomeHeader({ session }: { session: any }) {
  return (
    <section
      className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 overflow-hidden"
      aria-label="Hero"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 animate-float">
          <Sprout className="w-12 h-12 text-white/20" />
        </div>
        <div className="absolute top-40 right-1/4 animate-float-delayed">
          <Users className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float">
          <Globe className="w-14 h-14 text-white/20" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-delayed">
          <Heart className="w-10 h-10 text-white/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-32 text-center relative z-10">
        {/* Main title with gradient text and shadow */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-50 to-white animate-gradient">
            NewRoots
          </span>
        </h1>

        {/* Subtitle with better styling */}
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
            Grow your future. Build your roots.
          </p>
          <p className="text-xl md:text-2xl text-emerald-50/95 font-medium leading-relaxed">
            Connect with your community, discover resources, and thrive in your
            new home
          </p>
        </div>

        {/* Login/Signup Buttons */}
        {!session && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
            <a
              href="/register#inputRegion"
              className="group px-10 py-4 rounded-xl text-lg font-bold text-emerald-600 bg-white shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
            >
              Get Started Free
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/signin#inputRegion"
              className="px-10 py-4 rounded-xl text-lg font-bold text-white bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              Sign In
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
