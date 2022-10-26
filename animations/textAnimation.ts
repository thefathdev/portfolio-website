export const slideUp = (delay: number) => {
  const variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
        delay: delay * 0.1,
      },
    },
  };

  return variants;
};
