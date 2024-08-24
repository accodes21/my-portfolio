import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SkillBadge from "./SkillBadge";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, introHeaderVariants } from "@/app/framer";

const socials = [
  {
    link: "https://github.com/accodes21",
    icon: <BsGithub />,
    title: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/aarya-chopkar-581aa2228",
    icon: <BsLinkedin />,
    title: "LinkedIn",
  },
  {
    link: "https://twitter.com/ChopkarAarya",
    icon: "𝕏",
    title: "Twitter/X",
  },
];

const SocialLinks = () => {
  return (
    <>
      <ul className="social flex items-center mt-6 mb-4 gap-4">
        {socials.map((social) => (
          <li
            key={social.title}
            className="hover:text-[#f1cf29] hover:rotate-12 transition-all"
          >
            <Link
              href={social.link}
              target="_blank"
              title={social.title}
              className="text-3xl"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.section className="bg-[#111] h-fit w-full">
        <div className="content1 flex items-center justify-center h-[35em]">
          <div className="hero flex items-center justify-center relative gap-40">
            <motion.div
              {...slideAnimation("left")}
              className="hero-text flex flex-col"
            >
              <h1 className=" heading text-[4.8rem] leading-4 mb-[2rem] font-serif font-extrabold">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
                  AARYA
                </span>
                <br /> <br /> <br /> <br /> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                  CHOPKAR
                </span>
              </h1>
              <p className="text-[1.2rem] leading-4 text-center mt-4">
                Hi, I'm a Software Developer who brings ideas to life.
              </p>
              <div className="flex flex-col">
                <SocialLinks />
                <Link
                  href={
                    "https://drive.google.com/file/d/1igVgYldO3KHRqYPjukZB9Od8EUduv6be/view?usp=sharing"
                  }
                  target="_blank"
                  className=" w-fit lg:mx-0 mx-auto mb-4 font-medium lg:text-lg text-sm text-[#222] p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-95 rounded-full transition-all"
                >
                  <span className="flex flex-col justify-between bg-[#111] text-white hover:bg-transparent hover:text-[#222] rounded-full p-4 transition-all">
                    My Resume
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div {...slideAnimation("right")} className="image">
              <Image
                className="imag rounded-full"
                priority={true}
                src="/pf.png"
                width={300}
                height={300}
                alt="profile"
              />
            </motion.div>
          </div>
        </div>
        <div className="h-full">
          <SkillBadge />
        </div>
        <motion.hr
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants("left")}
          className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-transparent via-[#f1cf29] to-transparent opacity-100"
        />
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
