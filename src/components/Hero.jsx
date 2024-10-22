import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "@/app/framer";
import { ScrambleText, SkillBadge, AnimatedText } from "@/data/exports";

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
      <motion.section className="bg-[#111] h-fit md:h-screen w-full">
        <div className="content1 flex items-center justify-center h-[35em]">
          <div className="hero flex items-center justify-center relative gap-40">
            <motion.div
              {...slideAnimation("left")}
              className="hero-text flex flex-col"
            >
              <h1 className="heading text-[5em] leading-4 mb-[2rem] font-scotch font-extrabold">
                {" "}
                <ScrambleText className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-300 to-orange-600 bg-[length:200%_auto] animate-gradient">
                  AARYA
                </ScrambleText>
                <br /> <br /> <br /> <br /> <br />
                <ScrambleText className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 bg-[length:200%_auto] animate-gradient">
                  CHOPKAR
                </ScrambleText>
              </h1>
              <AnimatedText
                text="Hi, I'm a Software Developer who brings ideas to life."
                className="text-[1.3rem] leading-[1.1em] text-center mt-2 font-lora"
                delay={0.2}
              />
              <div className="flex flex-col">
                <SocialLinks />
                <Link
                  href={
                    "https://drive.google.com/file/d/1igVgYldO3KHRqYPjukZB9Od8EUduv6be/view?usp=sharing"
                  }
                  target="_blank"
                  className=" w-fit lg:mx-0 mx-auto mb-4 font-medium lg:text-lg text-sm text-[#222] p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:scale-95 transition-all"
                >
                  <span className="font-lora font-semibold flex flex-col justify-between bg-[#111] text-white rounded-full p-4 hover:bg-transparent hover:text-[#222] transition-all">
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
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
