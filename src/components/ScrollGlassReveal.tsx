import React from 'react';
import { motion } from 'motion/react';

interface ScrollGlassRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
  threshold?: number;
}

export default function ScrollGlassReveal({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  id,
  threshold = -60
}: ScrollGlassRevealProps) {
  return (
    <div className="relative w-full overflow-visible" id={id}>
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.98,
          y: 15 
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          y: 0 
        }}
        viewport={{ once: true, margin: `${threshold}px` }}
        transition={{ 
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={`relative w-full ${className}`}
      >
        {/* Dynamic glassy reflective light sweep to create an attractive look */}
        <motion.div 
          className="absolute inset-x-0 top-0 bottom-0 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10 hidden sm:block"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true, margin: `${threshold}px` }}
          transition={{ delay: delay + 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {children}
      </motion.div>
    </div>
  );
}
