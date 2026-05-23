import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, Shield, Terminal, ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onScheduleCall: () => void;
}

export default function CTABanner({ onScheduleCall }: CTABannerProps) {
  return (
    <section className="relative w-full py-28 bg-[#f4f5f7] overflow-hidden border-y border-neutral-200/50 px-5 md:px-[60px] lg:px-[120px]" id="cta-banner">
      {/* Absolute soft radiant glows suitable for light section backdrops */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[150px] bg-neutral-200/60 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[200px] bg-neutral-200/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="relative bg-gradient-to-b from-[#141414] to-[#040404] border border-neutral-900/80 rounded-[36px] p-8 md:p-16 text-center shadow-[0_30px_70px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col items-center">
          
          {/* Top light flare on banner card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[0.5px]" />
          <div className="absolute inset-0 grid-overlay opacity-[0.22] radial-mask pointer-events-none" />

          {/* Decorative Spark */}
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6 relative">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>

          <div className="max-w-2xl space-y-5">
            <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block font-bold">
              ENGAGEMENT ENGINE DIRECTIVE
            </span>
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Ready to Build Something Exceptional?
            </h2>
            
            {/* Subtitle */}
            <p className="text-white/70 text-[15px] sm:text-lg max-w-lg mx-auto leading-relaxed">
              Partner with SPACEON to create highly scalable digital products, high-frequency backends, and beautiful user layouts for the next generation.
            </p>
          </div>

          {/* Master Trigger button */}
          <div className="mt-10">
            <button
              onClick={onScheduleCall}
              className="relative scale-100 hover:scale-[1.03] active:scale-95 transition-all duration-300 group focus:outline-none cursor-pointer"
              id="cta-schedule-call-btn"
            >
              {/* Layered White Pill */}
              <div className="rounded-full bg-white text-black p-[1px] overflow-hidden">
                {/* Glow reflections on button */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/30 to-transparent pointer-events-none" />
                
                <div className="rounded-full bg-white hover:bg-neutral-100 transition-colors px-[36px] py-[13px] flex items-center gap-2.5">
                  <Calendar className="w-4.5 h-4.5 text-black" />
                  <span className="text-black text-[14px] font-bold tracking-wide">
                    Schedule a Consultation Call
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-black transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </button>
          </div>

          {/* SLA Badging Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-12 mt-16 pt-8 border-t border-white/5 w-full text-center max-w-xl">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold uppercase font-mono tracking-widest block">SECURE API</span>
              <p className="text-white/30 text-[9px] font-mono uppercase">CIPHER SHIELD V.3</p>
            </div>
            <div className="space-y-1 border-x border-white/5">
              <span className="text-white text-[11px] font-bold uppercase font-mono tracking-widest block">ZERO LOSS</span>
              <p className="text-white/30 text-[9px] font-mono uppercase font-bold">100% RELIABILITY</p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold uppercase font-mono tracking-widest block">GLOBAL SLA</span>
              <p className="text-white/30 text-[9px] font-mono uppercase">99.99% RUNTIME</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
