"use client";

import { Users, Heart, MessageCircle, Calendar, Sparkles } from "lucide-react";

export default function CommunityHeader() {
  return (
    <section
      className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 overflow-hidden"
      aria-label="Hero"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-1/4 animate-float">
          <Users className="w-14 h-14 text-white/20" />
        </div>
        <div className="absolute top-40 right-1/4 animate-float-delayed">
          <Heart className="w-12 h-12 text-white/20" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float">
          <MessageCircle className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-delayed">
          <Calendar className="w-10 h-10 text-white/20" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float">
          <Sparkles className="w-12 h-12 text-white/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-28 text-center relative z-10">
        {/* Main title with gradient text and shadow */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-50 to-white animate-gradient">
            Community
          </span>
        </h1>

        {/* Subtitle with better styling */}
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
            Find a place to belong
          </p>
          <p className="text-lg md:text-xl text-emerald-50/95 font-medium leading-relaxed mt-3">
            Connect with people who share your interests and build lasting
            relationships
          </p>
        </div>
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
