import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Transition = ({ children }: TransitionProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2 }}
        className="background"
        id="main__container"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
