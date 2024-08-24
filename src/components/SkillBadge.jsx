import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "@/app/framer";
import skills from "@/data/skills";

const SkillBadge = () => {
  return (
    <AnimatePresence>
      <motion.div
        {...slideAnimation("up")}
        className="skill-container flex pl-16 pr-16 pb-16 justify-center"
      >
        <h2 className="heading2 text-[#f1cf29] font-bold text-3xl">
          Tech Stack |
        </h2>
        <ul className="skill-list flex items-center">
          {skills?.map((skill, index) => (
            <li
              key={index}
              className={`ml-4 transition-colors`}
              style={{ "--tw-text-hover": skill.hoverColor }}
            >
              <span className="hover:text-[var(--tw-text-hover)]">
                {skill.icon}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillBadge;
