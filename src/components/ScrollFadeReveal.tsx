import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollFadeRevealProps {
  children: ReactNode;
}

export default function ScrollFadeReveal({ children }: ScrollFadeRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
