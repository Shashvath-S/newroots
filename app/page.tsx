import { auth } from "@/auth";
import {
  Calendar,
  MapPin,
  Users,
  MessageCircle,
  Globe,
  Heart,
} from "lucide-react";

export default async function Home() {
  const session = await auth();
  const attendedEvents = [
    {
      id: 1,
      title: "English Conversation Practice",
      type: "Language Class",
      date: "Oct 15, 2025",
      location: "Seattle Public Library",
      attendees: 12,
      category: "education",
    },
    {
      id: 2,
      title: "Community Potluck Dinner",
      type: "Social Gathering",
      date: "Oct 12, 2025",
      location: "Green Lake Community Center",
      attendees: 45,
      category: "social",
    },
    {
      id: 3,
      title: "Immigration Legal Workshop",
      type: "Legal Services",
      date: "Oct 8, 2025",
      location: "Downtown Legal Aid Office",
      attendees: 28,
      category: "legal",
    },
    {
      id: 4,
      title: "Job Fair for New Residents",
      type: "Employment",
      date: "Oct 5, 2025",
      location: "Seattle Convention Center",
      attendees: 150,
      category: "employment",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      education: "bg-blue-100 text-blue-700",
      social: "bg-emerald-100 text-emerald-700",
      legal: "bg-purple-100 text-purple-700",
      employment: "bg-orange-100 text-orange-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <>
      <div className="max-w-auto mx-auto bg-white mt-8 mb-12">
        <section className="bg-emerald-100" aria-label="Hero">
          <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              NewRoots
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Grow your future. Build your roots.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              {!session && (
                <>
                  <a
                    href="/signin"
                    className="px-5 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white shadow-sm hover:shadow"
                  >
                    Sign In
                  </a>
                  <a
                    href="/register"
                    className="px-5 py-2.5 rounded-md text-sm text-white bg-gray-800 shadow hover:bg-gray-900"
                  >
                    Register
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        <div className="w-full h-100 overflow-hidden relative">
          <img
            src="New_Roots_Page.jpg"
            alt="Forest trees"
            className="w-full h-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Attended Events Section - NEW */}
        {session && (
          <div className="container mx-auto px-6 lg:px-12 py-12">
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Attended Events
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Programs and gatherings you've participated in
                </p>
              </div>

              <div className="space-y-4">
                {attendedEvents.map((event) => (
                  <article
                    key={event.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    {/* Event Icon/Category Badge */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-lg ${getCategoryColor(
                          event.category
                        )} flex items-center justify-center`}
                      >
                        <Calendar className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {event.title}
                          </h3>
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attended</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center">
                      <button className="px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 rounded-lg transition whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-6 text-center">
                <a
                  href="/events/history"
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  View All Attended Events
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
