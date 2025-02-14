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
    <div className="max-w-[700px] mx-auto mt-10 p-12 border bg-[#041E23] border-[#0E464F] rounded-[40px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl leading-6 font-[400] text-[32px] font-JejuMyeongjo">Ticket Selection</h1>
        <p className="text-gray-300 text-[16px] leading-6">Step 1/3</p>
      </div>

      <div className="bg-[#08252B] rounded-[32px] p-6 border border-[#0E464F]">
        <div className="text-center mb-6 p-6 border border-[#0E464F] ">
          <h2 className="text-[#FAFAFA] font-road font-[400] leading-[62px] mb-2 text-[62px]">
            Techember Fest &apos;25
          </h2>
          <p className="text-[#FAFAFA] mb-2 text-[16px] font-[400]">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="text-[#FAFAFA] text-[16px] font-[400]">
            [Event Location] | March 15, 2025 | 7:00 PM
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-[#fafafa] mb-2 font-[400] text-[16px]">
            Select Ticket Type:
          </label>
          <div className="grid grid-cols-3 gap-4 border p-4 bg-[#052228] border-[#07373F] rounded-[24px]">
            <div
              onClick={() => setTicketType("free")}
              className={`cursor-pointer border rounded-[12px] p-3 text-center transition
                ${
                  ticketType === "free"
                    ? "border-teal-400 bg-[#12464E]"
                    : "border-[#197686] hover:border-teal-400"
                }`}
            >
              <p className="text-[24px] font-[600]">Free</p>
              <p className="text-base text-[#fafafa] font-[400]">REGULAR ACCESS</p>
            </div>

            <div
              onClick={() => setTicketType("regular")}
              className={`cursor-pointer border rounded-[12px] p-3 text-center transition
                ${
                  ticketType === "regular"
                    ? "border-teal-400 bg-[#12464E]"
                    : "border-[#197686] hover:border-teal-400"
                }`}
            >
              <p className="text-[24px] font-[600]">$150</p>
              <p className="text-base text-[#fafafa] font-[400]">
                REGULAR ACCESS
                <br />
                20/25
              </p>
            </div>

            <div
              onClick={() => setTicketType("vip")}
              className={`cursor-pointer border rounded-[12px] p-3 text-center transition
                ${
                  ticketType === "vip"
                    ? "border-teal-400 bg-[#12464E]"
                    : "border-[#197686] hover:border-teal-400"
                }`}
            >
              <p className="text-[24px] font-[600]">$150</p>
              <p className="text-base text-[#fafafa] font-[400]">
                VIP ACCESS
                <br />
                20/25
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#fafafa] mb-2 font-[400] text-[16px]">
            Number of Tickets
          </label>
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

        <div className="flex justify-between">
          <button
            type="button"
            className="border border-[#24A0B5] text-[#24A0B5] px-6 py-3 text-[16px] rounded-[8px]
                    hover:bg-gray-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-teal-400 text-black px-6 py-3 rounded-[8px] text-[16px] hover:bg-teal-300
                    transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}