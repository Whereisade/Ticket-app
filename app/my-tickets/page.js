"use client";
import { useEffect, useState } from "react";

export default function MyTicketsPage() {
  const [purchasedTickets, setPurchasedTickets] = useState([]);

  useEffect(() => {
    
    const storedTickets = JSON.parse(localStorage.getItem("purchasedTickets"));
    if (storedTickets) {
      setPurchasedTickets(storedTickets);
    }
  }, []);

  if (purchasedTickets.length === 0) {
    return (
      <div className="max-w-lg mx-auto mt-10 px-4 text-center">
        <h1 className="text-2xl font-bold mb-6">My Tickets</h1>
        <p className="text-gray-300">You have no purchased tickets yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 px-4 font-JejuMyeongjo">
      <h1 className="text-2xl font-bold mb-6">My Tickets</h1>

      {purchasedTickets.map((ticket) => (
        <div key={ticket.id} className="bg-[#132937] p-4 mb-4 rounded text-white">
          <div className="flex items-center mb-2">
            {ticket.avatar && (
              <img
                src={ticket.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
            )}
            <div>
              <p className="font-semibold">{ticket.name}</p>
              <p className="text-sm text-gray-400">{ticket.email}</p>
            </div>
          </div>
          <p className="text-teal-400">
            {ticket.ticketType.toUpperCase()} TICKET &times; {ticket.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}
