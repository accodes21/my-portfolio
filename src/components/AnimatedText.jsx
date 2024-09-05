import React from "react";
import { motion, useInView } from "framer-motion";

//Hi, I'm a Software Developer who brings ideas to life.

export default function AnimatedText({ text, className, delay }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const conatinerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delay: delay,
      },
    },
  };

  const spanVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <p className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      <motion.span
        variants={conatinerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        aria-hidden
        className="iniline-block"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={spanVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
}
