import { auth } from "@/auth";
import { User, MapPin, Globe, Languages, Calendar } from "lucide-react";
import db from "../lib/db";

export default async function Profile() {
  // User data storage interface
  interface userData {
    name: string;
    username: string;
    email: string;
    demographics: {
      age: number;
      gender: string;
      location: string;
      ethnicity: string;
      immigrationStatus: string;
      language: string;
    };
    date: string;
    // bio: "Recently moved to Seattle from Mexico City. Looking to connect with other Spanish speakers and learn about local community resources.",
  }

  const session = await auth();

  // Build for user data
  const result = await db`
    SELECT json_build_object(
      'name', name,
      'email', email,
      'username', username,
      'date', date
    ) AS user_data
    FROM users WHERE id = ${session?.user?.id}`;

  // Constructs user data as interface
  const user_data = result[0]?.user_data as userData;

  // Fills data for demographics/languages
  const demographics_results =
    await db`SELECT demographics FROM users WHERE id = ${session?.user?.id}`;

  const demographics = demographics_results[0]?.demographics;

  return (
    <>
      <div className="min-h-screen bg-emerald-50 mt-8">
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-12">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden mb-6">
            {/* Cover Banner */}
            <div className="h-40 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

            {/* Profile Info */}
            <div className="px-8 pb-8 pt-6 -mt-20">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl border-4 border-white">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Name and Info */}
                <div className="flex-1 pt-16">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {user_data.name}
                  </h1>
                  <p className="text-gray-600 mt-1">@{user_data.username}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {user_data.date}</span>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="pt-16">
                  <a href="/register/demographics?edit=1">
                    <button
                      className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg 
                    transition-all duration-300 ease-in-out
                    hover:bg-emerald-700 hover:shadow-lg hover:scale-105
                    active:scale-95 active:bg-emerald-800
                    focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      Edit Profile
                    </button>
                  </a>
                </div>
              </div>

              {/* Bio */}
              {/* {userData.bio && (
                <div className="mt-6">
                  <p className="text-gray-700">{userData.bio}</p>
                </div>
              )} */}
            </div>
          </div>

          <div className="space-y-6">
            {/* Personal Information */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" />
                Personal Information
              </h2>

              {/* Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-gray-900">
                    {user_data.email}
                  </p>
                </div>

                {/* Age */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Age</p>
                  <p className="font-semibold text-gray-900">
                    {demographics.age} years old
                  </p>
                </div>

                {/* Gender */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Gender</p>
                  <p className="font-semibold text-gray-900">
                    {demographics.gender}
                  </p>
                </div>

                {/* Location */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                    {demographics.location}
                  </p>
                </div>
              </div>
            </section>

            {/* Demographics & Background */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                Demographics & Background
              </h2>

              {/* Ethnicity */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Ethnicity</p>
                  <p className="font-semibold text-gray-900">
                    {demographics.ethnicity}
                  </p>
                </div>

                {/* Immigration Status */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">
                    Immigration Status
                  </p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                    {demographics.immigrationStatus}
                  </p>
                </div>

                {/* Languages Spoken */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2">Languages Spoken</p>
                  <div className="flex flex-wrap gap-2">
                    {demographics.language.map(
                      (language: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          <Languages className="w-3 h-3" />
                          {language}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Interests</p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                    {demographics.interests.map(
                      (interest: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          {/* <Languages className="w-3 h-3" /> */}
                          {interest}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
