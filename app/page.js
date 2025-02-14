"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [ticketType, setTicketType] = useState("free");
  const [quantity, setQuantity] = useState(1);

  const handleNext = () => {
    localStorage.setItem(
      "ticketSelection",
      JSON.stringify({ ticketType, quantity })
    );
    router.push("/form");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 font-JejuMyeongjo">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ticket Selection</h1>
        <p className="text-gray-300">Step 1/3</p>
      </div>

      <div className="bg-[#132937] rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-teal-400 text-xl font-bold mb-2">
            Techember Fest &apos;25
          </h2>
          <p className="text-gray-300 mb-2">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="text-gray-400 text-sm">
            [Event Location] | March 15, 2025 | 7:00 PM
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 mb-2 font-medium">
            Select Ticket Type
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div
              onClick={() => setTicketType("free")}
              className={`cursor-pointer border rounded p-4 text-center transition
                ${
                  ticketType === "free"
                    ? "border-teal-400 bg-[#0D212F]"
                    : "border-gray-600 hover:border-teal-400"
                }`}
            >
              <p className="text-xl font-bold">Free</p>
              <p className="text-sm text-gray-400">REGULAR ACCESS</p>
            </div>

            <div
              onClick={() => setTicketType("regular")}
              className={`cursor-pointer border rounded p-4 text-center transition
                ${
                  ticketType === "regular"
                    ? "border-teal-400 bg-[#0D212F]"
                    : "border-gray-600 hover:border-teal-400"
                }`}
            >
              <p className="text-xl font-bold">$150</p>
              <p className="text-sm text-gray-400">
                REGULAR ACCESS
                <br />
                20/25
              </p>
            </div>

            <div
              onClick={() => setTicketType("vip")}
              className={`cursor-pointer border rounded p-4 text-center transition
                ${
                  ticketType === "vip"
                    ? "border-teal-400 bg-[#0D212F]"
                    : "border-gray-600 hover:border-teal-400"
                }`}
            >
              <p className="text-xl font-bold">$150</p>
              <p className="text-sm text-gray-400">
                VIP ACCESS
                <br />
                20/25
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 mb-2 font-medium">
            Number of Tickets
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-[#0D212F] border border-gray-600 rounded p-2 text-gray-200"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="border border-gray-500 text-gray-500 px-6 py-2 rounded
                    hover:bg-gray-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-300
                    transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}