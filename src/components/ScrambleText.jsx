import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrambleText = ({ children, className }) => {
  const CYCLES_PER_CHAR = 2;
  const SHUFFLE_TIME = 100;
  const CHARS = "!@#$%^&*():{};|,.<>/?";

  const intervalRef = useRef(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_CHAR > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);

      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_CHAR) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  useEffect(() => {
    const timeout = setTimeout(scramble, 200);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default ScrambleText;
