import Link from 'next/link';
import Image from 'next/image';
import tiz from "./images/ticz.svg";
import huge from "./images/hugeicons.svg"

const HeaderT = () => {
  return (
    <header className="border mt-6 border-[#197686] bg-[#05252C66] max-w-[1200px]  mx-auto rounded-[24px] font-JejuMyeongjo">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          
          <Image src={huge} alt="Logo" width={40} height={36} />
          <Image src={tiz} alt="Logo" width={43} height={22} />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/events" className="text-[#B3B3B3] hover:text-teal-400 transition-colors text-[18px] font-[400]">
            Events
          </Link>
          <Link href="/my-tickets" className="text-[#B3B3B3] hover:text-teal-400 transition-colors text-[18px] font-[400]">
            My Tickets
          </Link>
          <Link href="/about" className="text-[#B3B3B3] hover:text-teal-400 transition-colors text-[18px] font-[400]">
            About Project
          </Link>
        </nav>

        <Link
          href="/my-tickets"
          className="hidden md:block bg-white text-[16px] leading-5 text-[#0A0C11] font-[400]
                     px-6 py-4 rounded-md hover:bg-gray-100 transition-colors"
        >
          MY TICKETS →
        </Link>
      </div>
    </header>
  );
};

export default HeaderT;
