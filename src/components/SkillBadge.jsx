import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import skills from "@/data/skills";

const SkillBadge = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delay: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="skill-container flex pl-16 pr-16 pb-16 justify-center"
      >
        <h2 className="heading2 text-[#f1cf29] font-scotch font-bold text-3xl">
          Tech Stack |
        </h2>
        <ul className="skill-list flex items-center">
          {skills?.map((skill, index) => (
            <motion.li
              variants={skillVariants}
              key={index}
              className={`ml-4 transition-colors cursor-pointer`}
              style={{ "--tw-text-hover": skill.hoverColor }}
            >
              <span ref={ref} className="hover:text-[var(--tw-text-hover)]">
                {skill.icon}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillBadge;
