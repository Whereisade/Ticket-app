
import HeaderT from "./components/Header";
import Header from "./components/Header";
import "./globals.css";
import Link from "next/link";
import { Road_Rage } from 'next/font/google'

const rage = Road_Rage({
  weight: '400',
  subsets: ['latin'],
  variable:"--font-road"
})

export const metadata = {
  title: "Conference Ticket Generator",
  description: "Generate your conference ticket with form validation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rage.variable}>
      <body className="bg-[#02191D] text-white min-h-screen ">
        
        <HeaderT/>

        <main>{children}</main>

        
      </body>
    </html>
  );
}
