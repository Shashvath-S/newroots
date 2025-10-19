"use client";

import { useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

const genders = ["Male", "Female", "Non-binary", "Other"];

const ethnicities = [
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Hispanic or Latino",
  "Native Hawaiian or Other Pacific Islander",
  "White",
  "Two or More Races",
  "Other",
];

const interests = [
  "Cultural Exchange",
  "Language Learning",
  "Career Networking",
  "Social Activities",
  "Education",
  "Sports & Recreation",
  "Arts & Culture",
  "Food & Cuisine",
  "Technology",
  "Business",
  "Community Service",
  "Other",
];

const languages = [
  "English",
  "Spanish",
  "Mandarin",
  "French",
  "German",
  "Other",
];

const immigrationStatuses = [
  "Citizen",
  "Permanent Resident",
  "Visa Holder",
  "Other",
];

export default function Register() {
  const searchParams = useSearchParams();
  const editParam = searchParams.get("edit");
  const isEditMode = editParam == "1";

  const [error, setError] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedEthnicity, setSelectedEthnicity] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedImmigrationStatus, setSelectedImmigrationStatus] =
    useState("");
  const [age, setAge] = useState<string>("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (isEditMode) {
      async function getUserDemographics() {
        const res = await fetch("/api/user");
        const { data } = await res.json();
        setSelectedGender(data.gender || "");
        setSelectedEthnicity(data.ethnicity || "");
        setSelectedInterests(data.interests || []);
        setSelectedLanguages(data.language || []);
        setSelectedImmigrationStatus(data.immigrationStatus || "");
        setAge(data.age ? String(data.age) : "");
        setLocation(data.location || "");
      }
      getUserDemographics();
    }
  }, [isEditMode]);

  const DropdownSelect = ({ value, onChange, options }: any) => (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
          <span className="block truncate">{value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option: string, idx: number) => (
              <ListboxOption
                key={idx}
                className={({ active }: { active: boolean }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-emerald-100 text-emerald-900" : "text-gray-900"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );

  const MultiSelect = ({ value, onChange, options }: any) => (
    <Listbox value={value} onChange={onChange} multiple>
      <div className="relative mt-1">
        <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
          <span className="block truncate">{value.join(", ")}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option: string, idx: number) => (
              <ListboxOption
                key={idx}
                className={({ active }: { active: boolean }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-emerald-100 text-emerald-900" : "text-gray-900"
                  }`
                }
                value={option}
              >
                {({ selected }: { selected: boolean }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const age = formData.get("age") as string;

    if (
      !age ||
      !location ||
      !selectedGender ||
      !selectedEthnicity ||
      selectedInterests.length === 0
    ) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/register/demographics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: parseInt(age),
          gender: selectedGender,
          location: location,
          ethnicity: selectedEthnicity,
          interests: selectedInterests,
          languages: selectedLanguages,
          immigrationStatus: selectedImmigrationStatus,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Registration failed.");
      } else {
        // Registration successful, redirect or show success
        window.location.href = "/profile";
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white w-full mt-8"></div>
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Tell Us About Yourself
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Help us understand our community better
              </p>
            </div>

            {error && (
              <div className="mb-4 text-center text-red-600 text-sm font-semibold">
                {error}
              </div>
            )}
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <div>
                  <label
                    htmlFor="ethnicity"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Ethnicity
                  </label>
                  <DropdownSelect
                    value={selectedEthnicity}
                    onChange={setSelectedEthnicity}
                    options={ethnicities}
                  />
                </div>
                <label
                  htmlFor="age"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="120"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Gender
                </label>
                <DropdownSelect
                  value={selectedGender}
                  onChange={setSelectedGender}
                  options={genders}
                />
              </div>
              <div>
                <label
                  htmlFor="interests"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Interests
                </label>
                <MultiSelect
                  value={selectedInterests}
                  onChange={setSelectedInterests}
                  options={interests}
                />
              </div>
              <div>
                <label
                  htmlFor="languages"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Languages
                </label>
                <MultiSelect
                  value={selectedLanguages}
                  onChange={setSelectedLanguages}
                  options={languages}
                />
              </div>
              <div>
                <label
                  htmlFor="immigration-status"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Immigration Status
                </label>
                <DropdownSelect
                  value={selectedImmigrationStatus}
                  onChange={setSelectedImmigrationStatus}
                  options={immigrationStatuses}
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Location
                </label>
                <div>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your location"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition shadow-sm"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
