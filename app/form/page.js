"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const router = useRouter();

  // Store user data in state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  // If no ticket selection is in localStorage, redirect back to Step 1
  useEffect(() => {
    const savedTicket = JSON.parse(localStorage.getItem("ticketSelection"));
    if (!savedTicket) {
      router.push("/");
    }
  }, [router]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the user details in localStorage
    localStorage.setItem("userDetails", JSON.stringify(userData));
    // Proceed to Step 3 (Ticket page)
    router.push("/ticket");
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      {/* Optional: Step indicator */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Personal Details</h1>
        <p className="text-gray-300">Step 2/3</p>
      </div>

      {/* Card Container */}
      <div className="bg-[#132937] rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full p-3 rounded border border-gray-600 bg-[#0D212F]
                         text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded border border-gray-600 bg-[#0D212F]
                         text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          {/* Avatar URL (Optional) */}
          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Avatar URL (Optional)
            </label>
            <input
              id="avatar"
              type="url"
              placeholder="Paste image link here"
              className="w-full p-3 rounded border border-gray-600 bg-[#0D212F]
                         text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onChange={(e) =>
                setUserData({ ...userData, avatar: e.target.value })
              }
            />
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="bg-teal-400 text-black w-full py-3 rounded
                       hover:bg-teal-300 transition font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
