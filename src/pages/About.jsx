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
                Software Developer based in India
              </h3>
              <article className="text-[1.2rem] text-gray-300">
                As a{" "}
                <AnimatedText
                  text="Full-Stack Developer"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.3}
                />
                , I have worked extensively on JavaScript, ReactJS, Tailwind,
                and NextJS, focusing on creating dynamic websites with seamless
                UI/UX through modern development tools.
                <br />
                Currently, I work as{" "}
                <AnimatedText
                  text="Frontend Developer Intern"
                  className="font-semibold font-lora underline decoration-[#f1cf29] decoration-2 inline-block"
                  delay={0.1}
                />{" "}
                at{" "}
                <Link
                  href={"https://supista.com"}
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="Supista"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>{" "}
                where, I recently redeveloped the{" "}
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=in.savantsolutions.phonevue"
                  }
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="PhoneVue"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>{" "}
                app and upgraded the Supista website.
                <br />
                As a{" "}
                <Link
                  href={
                    "https://mvp.microsoft.com/en-US/studentambassadors/profile/d3da8b9c-5bf5-4532-a54f-65ef45536e13"
                  }
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="Microsoft Learn Student Ambassador"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>
                , I guide students in their web development journeys, and as
                Associate Tech Lead at{" "}
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
                    delay={0.1}
                  />
                </Link>
                , I host tech events in my university.
                <br /> I actively contribute to various Open Source projects and
                engage with tech communities, including{" "}
                <Link
                  href={"https://github.com/EddieHubCommunity"}
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="EddieHub,"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>{" "}
                <Link
                  href={"https://github.com/AskDevs"}
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="AskDevs,"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>{" "}
                <Link
                  href={"https://gdg.community.dev/gdg-jammu/"}
                  target="_blank"
                  className="font-semibold font-lora hover:text-[#f1cf29]"
                >
                  <AnimatedText
                    text="GDG Jammu"
                    className="inline-block underline decoration-[#f1cf29] decoration-2"
                    delay={0.1}
                  />
                </Link>{" "}
                etc.
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
