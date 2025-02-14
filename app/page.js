"use client";
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
    <div className="max-w-[700px] mx-auto mt-6 p-6 sm:p-8 md:p-10 lg:p-12 border bg-[#041E23] border-[#0E464F] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]">
      <div className="flex flex-wrap justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-[32px] font-JejuMyeongjo">Ticket Selection</h1>
        <p className="text-gray-300 text-sm sm:text-[16px]">Step 1/3</p>
      </div>

      <div className="bg-[#08252B] rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 border border-[#0E464F]">
        <div className="text-center mb-4 sm:mb-6 p-4 sm:p-6 border border-[#0E464F]">
          <h2 className="text-[#FAFAFA] font-road font-[400] leading-[42px] sm:leading-[62px] text-[32px] sm:text-[62px] mb-2">
            Techember Fest &apos;25
          </h2>
          <p className="text-[#FAFAFA] mb-2 text-sm sm:text-[16px] font-[400]">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="text-[#FAFAFA] text-sm sm:text-[16px] font-[400]">
            [Event Location] | March 15, 2025 | 7:00 PM
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-[#fafafa] mb-2 text-sm sm:text-[16px]">Select Ticket Type:</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border p-4 bg-[#052228] border-[#07373F] rounded-[16px] sm:rounded-[24px]">
            {[
              { type: "free", label: "Free", access: "REGULAR ACCESS" },
              { type: "regular", label: "$150", access: "REGULAR ACCESS 20/25" },
              { type: "vip", label: "$150", access: "VIP ACCESS 20/25" },
            ].map(({ type, label, access }) => (
              <div
                key={type}
                onClick={() => setTicketType(type)}
                className={`cursor-pointer border rounded-[12px] p-3 text-center transition text-sm sm:text-[24px]
                  ${ticketType === type ? "border-teal-400 bg-[#12464E]" : "border-[#197686] hover:border-teal-400"}
                `}
              >
                <p className="font-[600]">{label}</p>
                <p className="text-xs sm:text-base text-[#fafafa] font-[400]">{access}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#fafafa] mb-2 text-sm sm:text-[16px]">Number of Tickets</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-[#08252B] border border-[#07373F] rounded p-2 text-[#fafafa]"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button
            type="button"
            className="border border-[#24A0B5] text-[#24A0B5] px-6 py-3 text-sm sm:text-[16px] rounded-[8px] hover:bg-gray-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-teal-400 text-black px-6 py-3 rounded-[8px] text-sm sm:text-[16px] hover:bg-teal-300 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}