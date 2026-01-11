import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { introHeaderVariants } from "@/app/framer";
import { P5Project } from "@/data/exports";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <HiMail className="w-8 h-8 text-[#f1cf29]" />,
      href: "mailto:aaryachopkar@gmail.com",
      label: "aaryachopkar@gmail.com",
      color: "hover:bg-[#f1cf29]",
    },
    {
      name: "Twitter",
      icon: "𝕏",
      href: "https://twitter.com/ChopkarAarya",
      label: "@ChopkarAarya",
      color: "hover:bg-[#f1cf29]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-8 h-8 text-[#f1cf29]" />,
      href: "https://www.linkedin.com/in/aarya-chopkar-581aa2228",
      label: "Aarya Chopkar",
      color: "hover:bg-[#f1cf29]",
    },
  ];

  const containerVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hide: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.section id="contact" className="contact bg-[#000] p-32">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants("left")}
        >
          <h1 className="text-[#f1cf29] font-scotch font-bold text-3xl mb-2">
            CONTACT ME
          </h1>
          <h1 className="font-lora text-xl mb-6">
            Let's collaborate and make creative products.
          </h1>
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-4">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introHeaderVariants("left")}
          >
            <P5Project />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative bg-[#111] border border-[#f1cf29]/60 rounded-xl p-8 transition-all duration-300 hover:border-[#f1cf29] hover:shadow-lg hover:shadow-[#f1cf29]/20`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-black text-[#f1cf29] text-2xl flex items-center justify-center group-hover:bg-[#222] transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="text-zinc-100 font-semibold text-lg mb-2">
                        {social.name}
                      </h3>
                      <p className="text-zinc-400 transition-colors">
                        {social.label}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <IoSend className="w-5 h-5 text-[#f1cf29]" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants("up")}
          className="text-center mt-6"
        >
          <p className="font-lora text-zinc-500 text-sm">
            Open to new opportunities • Available for collaborations • Let's
            build something great together
          </p>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Contact;
