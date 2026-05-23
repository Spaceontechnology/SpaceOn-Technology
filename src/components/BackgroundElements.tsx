import { motion } from 'motion/react';

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-black">
      {/* Grid structure overlay */}
      <div className="absolute inset-0 grid-overlay z-15 radial-mask opacity-20 sm:opacity-30" />

      {/* Faint ambient light source top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] h-[30%] bg-white/[0.03] blur-[80px] md:blur-[120px] rounded-full z-15 pointer-events-none" />

      {/* Floating Gradient Orbs in Corners - Hidden on mobile to avoid GPU lag */}
      {/* Top Left Orb */}
      <motion.div
        initial={{ opacity: 0.1, x: -10, y: -10 }}
        animate={{
          opacity: [0.1, 0.22, 0.1],
          x: [-10, 20, -10],
          y: [-10, 15, -10]
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-white/[0.04] rounded-full blur-[110px] z-12 pointer-events-none hidden md:block"
      />

      {/* Top Right Orb */}
      <motion.div
        initial={{ opacity: 0.08, x: 20, y: -20 }}
        animate={{
          opacity: [0.08, 0.18, 0.08],
          x: [20, -20, 20],
          y: [-20, 10, -20]
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-neutral-100/[0.03] rounded-full blur-[130px] z-12 pointer-events-none hidden md:block"
      />

      {/* Bottom Left Orb */}
      <motion.div
        initial={{ opacity: 0.05, x: -30, y: 30 }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: [-30, 10, -30],
          y: [30, -10, 30]
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[140px] z-12 pointer-events-none hidden md:block"
      />

      {/* Bottom Right Orb */}
      <motion.div
        initial={{ opacity: 0.08, x: 10, y: 40 }}
        animate={{
          opacity: [0.08, 0.2, 0.08],
          x: [10, -30, 10],
          y: [40, -15, 40]
        }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute bottom-[5%] right-[-5%] w-[450px] h-[450px] bg-neutral-300/[0.03] rounded-full blur-[110px] z-12 pointer-events-none hidden md:block"
      />
    </div>
  );
}
