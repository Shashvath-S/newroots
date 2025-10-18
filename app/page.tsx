import { Calendar, MapPin, Users } from "lucide-react";

export default function Home() {
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
      <div className="max-w-auto mx-auto bg-white shadow-xl border border-gray-200 mt-8 mb-12">
        <section className="bg-emerald-100" aria-label="Hero">
          <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              NewRoots
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Grow your future. Build your roots.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
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
            </div>
          </div>
        </section>

        <div className="w-full h-full overflow-x-hidden">
          <img src="New_Roots_Page.jpg" alt="Forest trees" />
        </div>

        {/* Attended Events Section - NEW */}
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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

        <footer className="bg-white">
          <div className="container mx-auto px-6 lg:px-12 py-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              <div className="md:col-span-1 flex flex-col items-start gap-6">
                <div className="text-3xl font-bold text-gray-800">ꟷꟷ</div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-700"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4 .97-6.14 1.55A4.48 4.48 0 0 0 12 5.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0 0 23 3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-700"
                    >
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-700"
                    >
                      <path d="M22 8s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C16.8 4.4 12 4.4 12 4.4s-4.8 0-7.3.3c-.4 0-1.2.1-1.9.9C2.2 6.3 2 8 2 8s-.2 1.6-.2 3.2V13c0 1.6.2 3.2.2 3.2s.2 1.7.8 2.4c.7.8 1.6.8 2 1 1.5.3 6.9.3 6.9.3s4.8 0 7.3-.3c.4-.1 1.2-.2 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.6.2-3.2V11c0-1.6-.2-3.2-.2-3.2zM10 14.5V9.5l5 2.5-5 2.5z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-700"
                    >
                      <path d="M4.98 3.5C4.98 5 3.86 6.06 2.5 6.06 1.14 6.06 0 5 0 3.5 0 2 1.12.94 2.48.94c1.36 0 2.5 1.06 2.5 2.56zM0 8.94h5v14.06H0V8.94zM9 8.94h4.8v1.92h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H19.2v-6.48c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.45V23H9V8.94z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-gray-800">
                    Lorem Ipsum
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm text-gray-800">
                    Lorem Ipsum
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm text-gray-800">
                    Lorem Ipsum
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                    <li> Lorem Ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="max-w-6xl mx-auto mt-6 text-gray-300 text-xs px-6 lg:px-12">
        <p className="text-right">© NewRoots</p>
      </div>
    </>
  );
}
