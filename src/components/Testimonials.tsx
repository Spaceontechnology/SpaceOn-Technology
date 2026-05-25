import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, UserCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      name: 'Sarah Jenkins',
      role: 'VP Ecosystem Engineering',
      company: 'Aether Core Platform',
      text: 'SPACEON transformed our core protocol code into a scalable enterprise platform with sub-second finality. The developer experience felt world-class from start to finish. Highly recommended for robust systems architecture.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      rating: 5
    },
    {
      id: 'test-2',
      name: 'Marcus Vance',
      role: 'Chief Informatics Officer',
      company: 'Luminary Bio-Oncology',
      text: 'Our AI reasoning systems demanded ultra-fast indexing and vector support. SPACEON delivered molecular graph schemas that increased indexing speed by 10x while maintaining pristine API interfaces.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
      rating: 5
    },
    {
      id: 'test-3',
      name: 'Elena Rostova',
      role: 'Director of Security infrastructure',
      company: 'Quantum Securities Cloud',
      text: 'The security audit phase before launch simulated millions of requests. The Kubernetes hypervisor clusters configured by SPACEON automatically absorbed traffic spikes, offering absolute stability.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-28 bg-[#000000] overflow-hidden border-y border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="testimonials">
      {/* Absolute ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3 font-bold">
            External Security Assurances / Section 07
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-[15px] text-neutral-400 leading-relaxed font-medium">
            Direct qualitative records from corporate project stakeholders leveraging SPACEON systems components worldwide.
          </p>
        </div>

        {/* Carousel Testimonial view */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#080808] rounded-[32px] p-8 md:p-14 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/[0.05] min-h-[340px] flex flex-col justify-between">
            {/* Edge line reflective gloss */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-8 relative z-10"
              >
                {/* Quotation mark decoration */}
                <div className="flex justify-between items-center">
                  <Quote className="w-10 h-10 text-neutral-800" />
                  
                  {/* Star rating icons */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial message */}
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-200 tracking-tight leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Client Bio row */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-12 h-12 rounded-full border border-white/5 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-[15px] font-bold text-white tracking-tight flex items-center gap-1.5 font-sans">
                        {testimonials[activeIndex].name}
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verifiably Authenticated Client Profile" />
                      </h4>
                      <p className="text-[12px] text-neutral-400 font-medium">
                        {testimonials[activeIndex].role} &middot; <span className="text-neutral-200 font-bold">{testimonials[activeIndex].company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
                    SECURED TESTIMONIAL FILE
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left and Right navigation buttons */}
            <div className="flex items-center justify-between mt-10 relative z-10 pt-4 border-t border-white/5">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'w-6 bg-white' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#111111] hover:border-neutral-700 transition-all focus:outline-none cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#111111] hover:border-neutral-700 transition-all focus:outline-none cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
