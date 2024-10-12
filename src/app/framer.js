export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const introHeaderVariants = (direction) => {
  return {
    hide: {
      opacity: 0,
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ...transition,
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
};

export const projectVariants = {
  hide: {
    filter: "blur(10px)",
    y: 200,
    opacity: 0,
    transition: {
      ...transition,
      duration: 1,
    },
  },
  show: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
