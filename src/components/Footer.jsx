import { slideAnimation, introHeaderVariants } from "@/app/framer";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.hr
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants("left")}
        className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-black via-[#f1cf29] to-black opacity-100"
      />
      <motion.footer
        {...slideAnimation("up")}
        className="w-full text-center bg-[#111]"
      >
        <p className="py-3">
          &copy; {new Date().getFullYear()} Aarya Chopkar. All rights reserved.
        </p>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
