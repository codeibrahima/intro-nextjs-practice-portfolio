const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverEffect = {
  scale: 1.2,
  transition: {
    duration: 0.3,
  },
};

export {cardVariants, hoverEffect};
