import { auth } from "@/auth";
import {
  Calendar,
  MapPin,
  Users,
  MessageCircle,
  Globe,
  Heart,
} from "lucide-react";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import HomeHeader from "@/app/components/HomeHeader";

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
        <HomeHeader session={session} />

        <div className="w-full h-100 overflow-hidden relative">
          <img
            src="New_Roots_Page.jpg"
            alt="Forest trees"
            className="w-full h-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }}
          />
        </div>

        {!session && (
          <>
            {/* Features Section */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need to Thrive
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  NewRoots brings together resources, community, and support in
                  one place—designed specifically for immigrants building their
                  new life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Find Your Community
                  </h3>
                  <p className="text-gray-600">
                    Connect with people who share your language, culture, and
                    experiences. Build lasting friendships and support networks.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Discover Resources
                  </h3>
                  <p className="text-gray-600">
                    Interactive map showing ESL classes, legal aid, healthcare
                    services, food banks, and cultural centers—all with pricing
                    information.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Get Mentorship
                  </h3>
                  <p className="text-gray-600">
                    Match with mentors who've walked in your shoes. Get guidance
                    on jobs, housing, education, and navigating your new home.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Join Events
                  </h3>
                  <p className="text-gray-600">
                    Attend community gatherings, workshops, and cultural
                    celebrations designed specifically for newcomers like you.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-emerald-50 py-16">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Stories from Our Community
                  </h2>
                  <p className="text-lg text-gray-600">
                    Hear from immigrants who found their place with NewRoots
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-emerald-700">
                          M
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Aiden Dharmawan
                        </h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          From Indonsia
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "NewRoots helped me find English classes and connect with
                      other Indonesian speakers in my neighborhood. I finally
                      feel like I belong here."
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-emerald-700">
                          A
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Shashvath Senthilkumar
                        </h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          From India
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "I found a mentor who helped me navigate the job market
                      and understand American workplace culture. This platform
                      changed my life."
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-emerald-700">
                          L
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Willliam Xu</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          From China
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "The resource map showed me free legal services I didn't
                      know existed. Within weeks, I had help with my immigration
                      paperwork."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-12 text-white">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Growing Together</h2>
                  <p className="text-lg text-emerald-50">
                    Join thousands of immigrants building their future
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">4</div>
                    <div className="text-emerald-50">Active Members</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">6</div>
                    <div className="text-emerald-50">Community Events</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">7</div>
                    <div className="text-emerald-50">Languages Spoken</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">4</div>
                    <div className="text-emerald-50">Resources Mapped</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-50 py-16">
              <div className="container mx-auto px-6 lg:px-12 text-center">
                <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready to Find Your Community?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join NewRoots today and start connecting with people who
                  understand your journey. Build your support network, discover
                  resources, and create the life you've dreamed of.
                </p>
                <ScrollToTopButton />
              </div>
            </div>
          </>
        )}

        {/* Attended Events Section - NEW */}
        {/* Attended Events Section - NEW */}
        {session && (
          <div className="container mx-auto px-6 lg:px-12 py-12">
            {/* News Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-8 mb-8 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      Latest News
                    </span>
                    <span className="text-emerald-100 text-sm">
                      Oct 18, 2025
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">
                    New Community Center Opens in South Seattle
                  </h2>
                  <p className="text-emerald-50 text-lg mb-4">
                    The Seattle Immigrant Resource Center announced free ESL
                    classes, legal consultations, and job placement services
                    starting November 1st. Classes available in Spanish,
                    Mandarin, Vietnamese, and Arabic.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition"
                  >
                    Read Full Story
                    <svg
                      className="w-4 h-4 ml-2"
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
                <div className="hidden lg:block w-32 h-32 bg-white/10 rounded-lg flex-shrink-0 ml-8"></div>
              </div>
            </div>

            {/* Your Attended Events */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-emerald-50 px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Attended Events
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Programs and gatherings you have participated in
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {attendedEvents.map((event) => (
                  <article
                    key={event.id}
                    className="flex flex-col sm:flex-row gap-6 p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    {/* Event Icon/Category Badge */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-xl ${getCategoryColor(
                          event.category
                        )} flex items-center justify-center group-hover:scale-105 transition-transform`}
                      >
                        <Calendar className="w-10 h-10" />
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-emerald-600 transition-colors">
                            {event.title}
                          </h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <button className="hidden sm:flex px-5 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition whitespace-nowrap">
                          View Details →
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-5 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{event.attendees} attended</span>
                        </div>
                      </div>

                      {/* Mobile View Details Button */}
                      <button className="sm:hidden mt-4 w-full px-5 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition">
                        View Details →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
