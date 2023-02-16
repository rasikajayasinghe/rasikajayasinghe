"use client";
import { createElement, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/Content";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Header = () => {
  const { nav } = content;
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className=" fixed top-10 left-4 lg:left-[50px] z-[999] flex items-center gap-3"
      >
        <div className=" rounded-lg bg-white/40 p-2 sm:cursor-pointer">
          <HiMenuAlt2 size={34} />
        </div>
        {pathname === "/" && (
          <div className="flex gap-3 items-center">
            <Link
              title="Facebook"
              className="cursor-pointer text-dark_primary hover:text-blue-400 duration-300"
              href="https://www.facebook.com/rasikajayasingha"
              target="_blank"
            >
              <AiFillFacebook size={28} />
            </Link>
            <Link
              title="Instagram"
              className="cursor-pointer text-dark_primary hover:text-blue-400 duration-300"
              href="https://www.instagram.com/rasikajayasinghe87/"
              target="_blank"
            >
              <AiFillInstagram size={28} />
            </Link>
            <Link
              title="Linkedin"
              className="cursor-pointer text-dark_primary hover:text-blue-400 duration-300"
              href="https://www.linkedin.com/in/rasika-jayasinghe/"
              target="_blank"
            >
              <AiFillLinkedin size={28} />
            </Link>
            <Link
              title="Youtube"
              className="cursor-pointer text-dark_primary hover:text-blue-400 duration-300"
              href="https://www.youtube.com/@codehublk"
              target="_blank"
            >
              <AiFillYoutube size={28} />
            </Link>
          </div>
        )}
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-3 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              pathname === item.link && " bg-dark_primary text-white"
            }`}
          >
            {createElement(item.icon)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
