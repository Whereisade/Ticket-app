"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketPage() {
  const router = useRouter();
  const [ticket, setTicket] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTicket = JSON.parse(localStorage.getItem("ticketSelection"));
    const savedUser = JSON.parse(localStorage.getItem("userDetails"));

    if (!savedTicket || !savedUser) {
      router.push("/");
    } else {
      setTicket(savedTicket);
      setUser(savedUser);

      const newTicket = {
        id: Date.now(),
        ticketType: savedTicket.ticketType,
        quantity: savedTicket.quantity,
        name: savedUser.name,
        email: savedUser.email,
        avatar: savedUser.avatar,
      };

      let purchasedTickets =
        JSON.parse(localStorage.getItem("purchasedTickets")) || [];

      purchasedTickets.push(newTicket);

      localStorage.setItem(
        "purchasedTickets",
        JSON.stringify(purchasedTickets)
      );
    }
  }, [router]);

  if (!ticket || !user) {
    return (
      <div className="p-4 text-center font-JejuMyeongjo">Loading ticket...</div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 px-4 text-center font-JejuMyeongjo">
      <h1 className="text-2xl font-bold mb-6">Your Ticket</h1>
      <div className="bg-[#132937] p-6 rounded-lg">
        {user.avatar && (
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
        )}
        <h2 className="text-xl font-bold text-teal-400">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>
        <p className="mt-4 text-lg">{ticket.ticketType.toUpperCase()} Ticket</p>
        <p className="text-gray-300">Quantity: {ticket.quantity}</p>
      </div>
    </div>
  );
}
