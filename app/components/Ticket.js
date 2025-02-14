
"use client";

export default function Ticket({ fullName, email, avatarUrl }) {
  return (
    <div className="max-w-md mx-auto bg-[#132937] rounded p-6 mt-6 text-white">
      <h2 className="text-xl font-bold mb-4 text-teal-400">Your Conference Ticket</h2>
      <div className="flex items-center mb-4">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-lg font-semibold">{fullName}</p>
          <p className="text-gray-300">{email}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">
        Thanks for registering! Show this ticket at the entrance.
      </p>
    </div>
  );
}
