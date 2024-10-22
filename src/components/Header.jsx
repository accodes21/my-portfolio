import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { introHeaderVariants, slideAnimation } from "@/app/framer";

const Header = () => {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ];

  return (
    <AnimatePresence>
      <motion.header {...slideAnimation("down")} className="w-full">
        <nav className='font-lora fixed z-50 cursor-pointer flex-row items-center  overflow-hidden rounded-full border px-1 py-4 shadow-lg shadow-[#f1cf29]/10 backdrop-blur-sm backdrop-filter border-[#f1cf29]/60 bg-black bg-opacity-60 lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:transform mt-4 top-8"'>
          <motion.ul
            {...introHeaderVariants("left")}
            className="flex justify-end pr-4 text-lg"
          >
            {links?.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="ml-4 text-white hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.ul>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
