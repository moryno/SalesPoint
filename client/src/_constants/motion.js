export const MOTION_VARIANTS = {
  initial: ({ direction }) => ({
    x: direction === "backward" ? "-100%" : "100%",
    transition: {
      ease: "linear",
      type: "spring",
      duration: 1,
      delay: 0,
    },
  }),
  in: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0,
    },
  },
  out: ({ direction }) => ({
    ease: "linear",
    x: direction === "backward" ? "100%" : "-100%",
    transition: {
      type: "spring",
      duration: 1,
      delay: 0,
    },
  }),
};
