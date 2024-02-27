export const ScreensAnimation = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   exit: { opacity: 0, transition: { duration: 0.2 } },
   transition: { duration: 0.4 },
}

export const SimpleAnimation = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
   transition: { duration: 0.2 },

}

export const AnimateList = {
   visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
         delay: i * 0.2,
         duration: 0.3
      },
   }),
   hidden: { opacity: 0, x: 40 },
}
