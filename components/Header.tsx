import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

function Header() {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Sliding Project</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        Huzzii
      </div>
      
      {/* Desktop Menu */}
      <ul className=" hidden flex-wrap items-center gap-3 text-[11px] md:flex md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </motion.li>
          );
        })}
        <div className=" flex items-center gap-8">
          <IoMdSearch className=" text-lg" />
          <a 
            href="https://www.linkedin.com/in/huzaifa-zafar-146322389/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin className=" text-lg" />
          </a>
        </div>
      </ul>

      {/* Mobile LinkedIn Only */}
      <div className="flex md:hidden">
        <a 
          href="https://www.linkedin.com/in/huzaifa-zafar-146322389/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-400"
        >
          <FaLinkedin className=" text-lg" />
        </a>
      </div>
    </div>
  );
}

export default Header;

const menus = [
  "Home",
  "Holdidays",
  "Destinations",
  "Flights",
  "Offers",
  "Contacts",
];
