// components/Navbar.js

import { FiMenu } from "react-icons/fi"; // For the hamburger menu icon
import { FiInstagram, FiLinkedin } from "react-icons/fi"; // For the social media icons

export default function Navbar({ setIsOpen }: any) {
  return (
    <div className="w-[1455px] h-[106px]  pr-11 pb-11 pl-[70px] absolute inset-y-0">
      <div className="w-[1300px] h-[44px] pt-4 flex justify-between">
        <button
          className="text-white text-2xl bg-zinc-800 min-w-[64px] h-[50px] pt-3 pr-6 pb-4 pl-6 "
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Center: Logo */}
        <div className="text-red-500 font-bold text-2xl pt-2">
          Wibus<span className="text-xs align-super">®️</span>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4 text-black pt-2">
          <a href="#" aria-label="LinkedIn" className="text-2xl">
            <FiLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className="text-2xl">
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
