import CommunityHeader from "@/app/components/CommunityHeader";

export default function Community() {
  // List of events to pre-populate
  const events = [
    {
      id: 1,
      title: "Saturday Park Cleanup",
      description:
        "Join neighbors to pick up litter and learn about local recycling resources.",
      date: "Sat, Nov 8",
      time: "9:00 AM",
      location: "Riverside Park",
    },
    {
      id: 2,
      title: "Community Garden Workshop",
      description:
        "Hands-on session: winter prep, composting, and seed swapping.",
      date: "Sun, Nov 16",
      time: "11:00 AM",
      location: "Maple Community Garden",
    },
    {
      id: 3,
      title: "Beginner's Running Group",
      description:
        "Friendly, paced 30-minute run + post-run coffee and stretching.",
      date: "Wed (weekly)",
      time: "6:30 PM",
      location: "Eastside Track",
    },
    {
      id: 4,
      title: "Local Makers Market",
      description:
        "Support local makers and artists — live music, food trucks, family-friendly.",
      date: "Sat, Nov 22",
      time: "10:00 AM",
      location: "Main Street Plaza",
    },
    {
      id: 5,
      title: "Neighborhood Book Circle",
      description:
        "Monthly book discussion — this month: short stories and community picks.",
      date: "Thu, Nov 13",
      time: "7:00 PM",
      location: "Public Library - Meeting Room B",
    },
    {
      id: 6,
      title: "Tech Help Drop-in",
      description:
        "Volunteers help with phone/computer questions and basic troubleshooting.",
      date: "Tue (weekly)",
      time: "5:00 PM",
      location: "Community Center",
    },
  ];

  // List of communities to pre-populate
  const communities = [
    {
      id: 1,
      name: "Green Thumbs Collective",
      description:
        "Neighbors sharing gardening tips, plots, and seed exchanges.",
      members: 172,
    },
    {
      id: 2,
      name: "Runners & Walkers",
      description:
        "All-ability running group focused on fitness and social connection.",
      members: 94,
    },
    {
      id: 3,
      name: "Creative Makers Guild",
      description:
        "Local artisans and hobbyists who meet for workshops and markets.",
      members: 58,
    },
    {
      id: 4,
      name: "Family Play Network",
      description:
        "Parents and caregivers organizing kid-friendly outings and swap meets.",
      members: 210,
    },
    {
      id: 5,
      name: "Neighborhood Watch",
      description:
        "Community safety group coordinating with local services and events.",
      members: 36,
    },
    {
      id: 6,
      name: "Digital Help Hub",
      description:
        "Volunteers providing tech help, classes, and device clinics.",
      members: 47,
    },
  ];

  return (
    <>
      {/* Top of page */}
      <div className="max-w-auto mx-auto bg-white border border-gray-200 mt-8 mb-12">
        {/* Page Header section */}
        <CommunityHeader />

        {/* Image section */}
        {/* Show only the bottom 90px of the image */}
        <div className="w-full overflow-hidden relative h-[500px]">
          <img
            src="Community_Picture.jpg"
            alt="park crowd"
            className="absolute left-0 bottom-0 w-full h-auto"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <main className="w-full max-w-auto mx-auto">
        <div className="max-w-auto mx-auto">
          {/* Section for Community Events descriptions (pre-populated) */}
          <section className="rounded-lg p-8 pt-0">
            <h2 className="text-3xl text-center font-bold text-gray-800">
              Community Events
            </h2>

            <p className="text-base text-center text-gray-500 mt-1 mb-12">
              Based on your interests
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Uses map iteration to pre-populate without requiring repeated lines */}
              {/* By using const map, it will change the data every time for multiple unique events */}
              {events.map((event) => (
                <article
                  key={event.id}
                  className="bg-white rounded-lg p-5 card-border shadow-sm flex flex-col"
                >
                  {/* Style for boxes */}
                  <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center mb-4 w-full">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V8H3v11a2 2 0 0 0 2 2z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {event.description}
                  </p>

                  <div className="text-sm text-gray-600 mb-4">
                    <div>
                      {event.date} • {event.time}
                    </div>

                    <div className="text-gray-500 text-xs">
                      {event.location}
                    </div>
                  </div>

                  {/* Buttons for functionality */}
                  <div className="mt-auto flex justify-center gap-x-5">
                    <button className="px-4 py-2 cursor-pointer text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                      Details
                    </button>

                    <button className="px-4 py-2 cursor-pointer text-sm font-medium text-white bg-black border border-gray-200 rounded-md hover:bg-gray-50 hover:text-black">
                      Add to Events
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full bg-gray-100">
          {/* Section for Communities' descriptions */}
          <section className="max-w-auto rounded-lg p-8">
            <h2 className="text-3xl text-center font-bold text-gray-800">
              Communities
            </h2>

            <p className="text-base text-center text-gray-500 mt-1 mb-10">
              Based on your past
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Uses map iteration to pre-populate without requiring repeated lines */}
              {/* By using const map, it will change the data every time for multiple unique communities */}
              {communities.map((c) => (
                <article
                  key={c.id}
                  className="bg-white rounded-lg p-5 card-border shadow-sm flex flex-col"
                >
                  <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center mb-4 w-full">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"
                      />
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1">{c.name}</h3>

                  <p className="text-sm text-gray-500 mb-4">{c.description}</p>

                  <div className="text-sm text-gray-600 mb-4">
                    {c.members} members
                  </div>

                  <div className="mt-auto flex justify-center">
                    {/* Button for details */}
                    <button className="px-4 py-2 cursor-pointer text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                      Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
