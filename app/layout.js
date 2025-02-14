
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Conference Ticket Generator",
  description: "Generate your conference ticket with form validation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D212F] text-white min-h-screen font-JejuMyeongjo">
        
        <header className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold">tix</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-teal-400">
                Events
              </a>
              <a href="#" className="hover:text-teal-400">
                My Tickets
              </a>
              <a href="#" className="hover:text-teal-400">
                About Project
              </a>
            </nav>
            <Link
              href="/my-tickets"
              className="hidden md:block border border-teal-400 text-teal-400
             px-4 py-2 rounded hover:bg-teal-400 hover:text-black"
            >
              MY TICKETS
            </Link>
          </div>
        </header>

        <main>{children}</main>

        
      </body>
    </html>
  );
}
