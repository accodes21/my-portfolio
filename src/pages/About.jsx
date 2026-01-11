import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { introHeaderVariants } from "@/app/framer";
import { AnimatedText } from "@/data/exports";

const About = () => {
  return (
    <AnimatePresence>
      <motion.hr
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants("left")}
        className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-transparent via-[#f1cf29] to-transparent opacity-100"
      />

      <motion.section id="about" className="about bg-black p-36">
        <div className="container about-container pl-16 pr-16">
          <div className="content1 about-content grid items-center justify-center grid-cols-2">
            {/* Image Side */}
            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introHeaderVariants("left")}
              className="img-side relative pr-4"
            >
              <Image
                className="rounded-3xl mt-2 rotate-12 z-0 absolute opacity-60 scale-95"
                width={560}
                height={480}
                src="/aarya.jpg"
                alt="Developer"
              />
              <Image
                className="rounded-3xl z-10 relative shadow-md shadow-black"
                width={560}
                height={480}
                src="/aarya.jpg"
                alt="My profile photo"
              />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introHeaderVariants("right")}
              className="text-side lg:pl-10"
            >
              <h2 className="about-head text-[#f1cf29] font-scotch font-bold text-3xl">
                ABOUT ME
              </h2>
              <h3 className="font-lora about-sub text-2xl mb-6">
                Full-Stack Developer who argues with JavaScript daily
              </h3>

              <article className="text-[1.2rem] text-gray-300">
                Hi, I’m Aarya 👋 I spend most of my time working on{" "}
                <AnimatedText
                  text="JavaScript"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.1}
                />{" "}
                and{" "}
                <AnimatedText
                  text="React"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.2}
                />{" "}
                to stop re-rendering unnecessarily.
                <br />I work with{" "}
                <AnimatedText
                  text="React, NextJS, and Tailwind"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.3}
                />{" "}
                to build websites and apps that (hopefully) make sense to humans
                <span className="text-gray-400"> and machines</span>.
                <br />
                I’ve been part of{" "}
                <Link
                  href={
                    "https://www.linkedin.com/posts/aarya-chopkar-581aa2228_community-microsoft-mlsa-activity-7166418950392627200-qTth?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkdMrEBTJkg71gDiuL6grkZJC3O8xEVvmg"
                  }
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="Microsoft Learn Student Ambassadors"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.6}
                  />
                </Link>{" "}
                and{" "}
                <Link
                  href={
                    "https://gdsc.community.dev/shri-mata-vaishno-devi-university-katra/"
                  }
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="GDSC SMVDU"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.7}
                  />
                </Link>
                , which basically means I hosted events, and answered too many
                GitHub questions.
                <br />
                When I’m not coding, you’ll probably find me on a{" "}
                <AnimatedText
                  text="badminton court"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.8}
                />
                ,{" "}
                <AnimatedText
                  text="swimming laps"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.9}
                />
                , or behind a{" "}
                <AnimatedText
                  text="camera"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={1.0}
                />{" "}
                capturing sunsets.
              </article>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.hr
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants("left")}
        className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-black via-[#f1cf29] to-black opacity-100"
      />
    </AnimatePresence>
  );
};

export default About;
