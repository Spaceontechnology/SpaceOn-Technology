import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Target, Smile, Globe2, Shapes } from 'lucide-react';

export default function StatsSection() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [val4, setVal4] = useState(0);

  // High-fidelity active client interaction counters simulated on scroll or mount
  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setVal1(Math.round((120 / steps) * currentStep));
      setVal2(Math.round((50 / steps) * currentStep));
      setVal3(Math.round((99 / steps) * currentStep));
      setVal4(Math.round((8 / steps) * currentStep));

      if (currentStep >= steps) {
        clearInterval(interval);
        setVal1(120);
        setVal2(50);
        setVal3(99);
        setVal4(8);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      id: 'stat-projects',
      value: `${val1}+`,
      label: 'Digital Software Deployments',
      description: 'Production systems designed, tested, and shipped across global servers with microsecond SLAs.',
      icon: Target
    },
    {
      id: 'stat-clients',
      value: `${val2}+`,
      label: 'Global Enterprises & Startups',
      description: 'Securing multi-year technology frameworks and core pipeline systems for forward-thinking partners.',
      icon: Globe2
    },
    {
      id: 'stat-satisfaction',
      value: `${val3}%`,
      label: 'SLA Client Retention & NPS Score',
      description: 'Determined purely by zero-downtime maintenance and outstanding engineering standards.',
      icon: Smile
    },
    {
      id: 'stat-experience',
      value: `${val4}+`,
      label: 'Core Framework Experience Years',
      description: 'Orchestrating complex distributed web stacks, high-performance SaaS codes, and custom AI tools.',
      icon: Shapes
    }
  ];

  return (
    <section className="relative w-full py-28 bg-[#000000] overflow-hidden border-y border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="stats">
      {/* Decorative center orb spotlight (soft green radiant glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-emerald-500/3 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Core metrics panel - Sleek Dark with subtle borders */}
        <div className="bg-[#080808] rounded-[32px] p-8 md:p-12 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/[0.05] relative">
          
          {/* Subtle elegant grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Top aesthetic border line reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]" />

          {/* Header elements inside panel */}
          <div className="max-w-md mb-12 relative z-10">
            <span className="text-[10.5px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2 font-bold">
              QUANTITATIVE TELEMETRY METRICS / 05
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Production Scalability Status
            </h3>
            <p className="text-neutral-400 text-[13.5px] mt-2 leading-relaxed font-medium">
              Real-time audit records demonstrating outstanding code volume and elite reliability achievements globally.
            </p>
          </div>

          {/* Quantifiable interactive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div 
                  key={stat.id} 
                  initial={{ 
                    opacity: 0, 
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    filter: 'blur(10px)',
                    scale: 0.96,
                    y: 35 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    backdropFilter: 'blur(0px)',
                    WebkitBackdropFilter: 'blur(0px)',
                    filter: 'blur(0px)',
                    scale: 1,
                    y: 0 
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ 
                    duration: 0.7,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`space-y-4 ${
                    idx < 3 ? 'lg:border-r lg:border-white/5 lg:pr-6' : ''
                  }`}
                  id={stat.id}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                      Metric Unit / A-{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {/* Big Numbers typography */}
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono flex items-baseline select-none">
                      <span className="text-emerald-500">{stat.value}</span>
                    </div>
                    <h4 className="text-[15px] font-bold text-neutral-100 tracking-tight">
                      {stat.label}
                    </h4>
                  </div>

                  <p className="text-[12.5px] text-neutral-400 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Footnotes label representing server diagnostics */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 font-mono font-bold gap-4 relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              REAL-TIME MULTI-ZONE INTEGRITY STATUS: 100% ONLINE
            </span>
            <span>SPACEON ANALYTICS CORE LOAD OK</span>
          </div>

        </div>
      </div>
    </section>
  );
}
