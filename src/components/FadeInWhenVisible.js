import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInWhenVisible({ children, y = '3vh', transition = {}, className = '', ...other }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: .5, ...transition }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y },
      }}
      {...other}
      className={className}
    >
      {children}
    </motion.div>
  );
}
