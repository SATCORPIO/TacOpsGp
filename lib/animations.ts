export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export const pulse = {
  animate: { opacity: [0.6, 1, 0.6] },
  transition: { repeat: Infinity, duration: 2 },
};
