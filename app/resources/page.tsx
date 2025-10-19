"use client";
import React from "react";

export default function Resources() {
  // List of all sample places
  const places = [
    {
      id: 1,
      name: "Cascade Community Center",
      address: "321 NE 45th St, Seattle, WA 98105",
      type: "Community Center",
      timing: "Mon–Fri 9:00 AM–5:00 PM",
    },
    {
      id: 2,
      name: "Ravenna Park Fieldhouse",
      address: "6306 26th Ave NE, Seattle, WA 98115",
      type: "Park / Meeting Space",
      timing: "Daily 6:00 AM–9:00 PM",
    },
    {
      id: 3,
      name: "University Branch Library",
      address: "5009 Roosevelt Way NE, Seattle, WA 98105",
      type: "Workshop Room",
      timing: "Tue–Sat 9:00 AM–6:00 PM",
    },
    {
      id: 4,
      name: "Northend Coffee & Events",
      address: "1427 NE 45th St, Seattle, WA 98105",
      type: "Cafe / Event Space",
      timing: "Mon–Sun 7:00 AM–7:00 PM",
    },
  ];

  return (
    <>
      <div className="max-w-auto mx-auto bg-white border border-gray-200 mt-8">
        <div className="max-w-auto mx-auto">
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-0 h-screen">
            {/* Aside features all places listed with Name/Address/Type/Timings */}
            <aside className="flex-shrink-0 w-full md:w-80 lg:w-96 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 p-4 overflow-y-auto">
              <h3 className="text-lg font-bold text-white mb-3">
                Nearby Places
              </h3>

              <div
                className="space-y-4 overflow-y-auto"
                style={{ maxHeight: "100vh" }}
              >
                {/* Uses map to iterate through sample places to populate place list */}
                {places.map((place) => (
                  <div
                    key={place.id}
                    className="p-3 rounded-md bg-white border border-gray-200 shadow-sm"
                  >
                    {/* Place Name */}
                    <div className="text-sm font-bold tracking-tight text-gray-800">
                      {place.name}
                    </div>

                    {/* Place Address */}
                    <div className="text-xs text-gray-500 mt-1">
                      {place.address}
                    </div>

                    {/* Remaning section for smaller information */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        {/* Vertical line design */}
                        <div className="text-purple-600">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 7v10M17 7v10M12 6v12"
                            />
                          </svg>
                        </div>

                        {/* Place Type */}
                        <div className="text-xs text-gray-700">
                          {place.type}
                        </div>
                      </div>

                      {/* Place Timing and Arrow */}
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-green-600 font-medium">
                          {place.timing}
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 18l6-6-6-6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Map implementation through flex iframe of Google Map embed */}
            <main className="flex-1 flex overflow-hidden">
              <div className="relative w-full h-full">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5154.668036978319!2d-122.30917666760712!3d47.65607004118952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490148d64534c71%3A0xc91793fd02335246!2sHusky%20Union%20Building!5e0!3m2!1sen!2sus!4v1760823377612!5m2!1sen!2sus"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
