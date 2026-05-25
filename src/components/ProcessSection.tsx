import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Lightbulb, PenTool, Braces, ClipboardCheck, Rocket, ChevronRight, Check } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      icon: Compass,
      desc: 'We analyze your current application state, infrastructure load margins, security gaps, and detailed user requirements.',
      details: 'Our systems consultants run deep automated telemetry scans and audit legacy processes. We create a complete benchmark schema documenting targeted database speeds, microservice maps, and structural pain points.',
      objective: 'Define benchmark criteria & map ecosystem context'
    },
    {
      number: '02',
      title: 'Structural Strategy',
      icon: Lightbulb,
      desc: 'Formulating high-precision systems roadmap specifying target backend setups, cloud regions, and microservice clusters.',
      details: 'We build the initial prototype architecture schematic, choosing technologies suited for your unique loads. Developers map API schemas, routing patterns, memory caching limits, and deployment budgets directly.',
      objective: 'Secure early consensus on systems configuration'
    },
    {
      number: '03',
      title: 'Fidelity UI Design',
      icon: PenTool,
      desc: 'Creating custom visual solutions with consistent design tokens, layout physics, and interactive high-contrast guides.',
      details: 'Our design group translates strategy concepts into immersive, accessible user interfaces. We define strict typography rules, custom component tokens in Figma, responsive fluid grids, and beautiful motion frames.',
      objective: 'Deliver pristine component assets and pixel accuracy'
    },
    {
      number: '04',
      title: 'Elite Software Dev',
      icon: Braces,
      desc: 'Writing optimized modular codebases with strict type safety, fast build configurations, and robust endpoints.',
      details: 'Experienced software engineers spin up parallel development environments. We construct server-side APIs, database schemas, edge-middleware, caching layers, and frontends matching verified layouts.',
      objective: 'Construct performant, bulletproof production models'
    },
    {
      number: '05',
      title: 'Telemetry Testing',
      icon: ClipboardCheck,
      desc: 'Executing rigorous unit tests, performance stress profiles, and security audits before the deployment phase.',
      details: 'We run deep penetration audits and end-to-end user sequence simulation scripts. Load tests simulate spikes up to 10x target flow to confirm elasticity in database layers and load balancers.',
      objective: 'Validate absolute safety, performance, and stability'
    },
    {
      number: '06',
      title: 'Sovereign Launch',
      icon: Rocket,
      desc: 'Seamless zero-downtime deployment pipelines routing live global traffic to optimized microsecond container sets.',
      details: 'We trigger automated CI/CD deployments pushing build assets to edge-networks and cloud regions. Systems transition smoothly using advanced traffic splitting (canary releases) with live diagnostic telemetry.',
      objective: 'Orchestrate flawless launch and post-launch monitoring'
    }
  ];

  return (
    <section className="relative w-full py-28 bg-[#000000] overflow-hidden border-y border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="process">
      {/* Visual background lights (soft radiant glow for dark theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#22C55E]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3 font-bold">
            Operational Engineering Flowchart / Section 03
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-[15px] text-neutral-400 leading-relaxed font-medium">
            A highly systemic, predictable engineering pipeline built to yield premium software. Click any milestone step to reveal structural details.
          </p>
        </div>

        {/* Process layout: Grid columns mapping milestones and live active stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Milestones Navigation (Steps 1 to 6) */}
          <div className="col-span-1 lg:col-span-6 space-y-3" id="process-steps-list">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  initial={{ 
                    opacity: 0, 
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    filter: 'blur(10px)',
                    scale: 0.96,
                    y: 25 
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
                    duration: 0.65,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`relative p-5 rounded-2xl text-left cursor-pointer transition-all duration-300 flex items-center gap-5 ${
                    isActive
                      ? 'bg-neutral-900 border border-white/10 text-white shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
                      : 'bg-neutral-900/40 text-neutral-400 hover:bg-neutral-900/85 hover:text-white border border-white/[0.02]'
                  }`}
                >
                  {/* Left indicator active node bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl transition-all duration-300 ${
                    isActive ? 'bg-emerald-500' : 'bg-transparent'
                  }`} />

                  {/* Big Number */}
                  <div className={`font-mono text-2xl font-extrabold tracking-tighter ${
                    isActive ? 'text-emerald-500/30' : 'text-neutral-700'
                  }`}>
                    {step.number}
                  </div>

                  {/* Small icon outline */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isActive ? 'bg-emerald-500 text-black' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Summary */}
                  <div className="flex-1">
                    <h3 className={`text-[16px] font-bold tracking-tight ${
                      isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-[13px] line-clamp-1 mt-0.5 ${
                      isActive ? 'text-white/70' : 'text-neutral-500'
                    }`}>
                      {step.desc}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? 'text-emerald-400 translate-x-1' : 'text-neutral-600'
                  }`} />
                </motion.div>
              );
            })}
          </div>

          {/* High-Fidelity Details Screen Panel */}
          <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-32" id="process-details-viewer">
            <div className="relative bg-[#0b0b0b] rounded-[32px] p-8 md:p-10 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/[0.05] min-h-[460px] flex flex-col justify-between">
              
              {/* Border glass glow ref */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]" />

              {/* Minimal subgrid overlay for high density rendering quality */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 font-bold uppercase">
                      TELEMETRY NODE PROFILE / {steps[activeStep].number}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] bg-emerald-950/20 border border-emerald-800/30 text-emerald-400 font-mono font-bold rounded-full uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE SYSTEM PHASE
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight font-sans">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-[15px] text-neutral-300 leading-relaxed italic border-l-2 border-neutral-800 pl-4 font-medium">
                      "{steps[activeStep].desc}"
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold block uppercase">
                      Operational Mechanism Details
                    </span>
                    <p className="text-[14px] text-neutral-300 leading-relaxed font-sans font-medium">
                      {steps[activeStep].details}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 font-bold block uppercase">
                      PRIMARY STAGE OBJECTIVE
                    </span>
                    <div className="flex items-center gap-3 bg-neutral-950/50 border border-white/5 rounded-xl p-3.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-xs select-none">
                        ✓
                      </div>
                      <span className="text-[13px] text-white font-bold">
                        {steps[activeStep].objective}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative progress tracker along bottom */}
              <div className="relative pt-6 z-10">
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 font-bold mb-2">
                  <span>PIPELINE PROGRESS</span>
                  <span>{Math.round(((activeStep + 1) / steps.length) * 100)}% COMPLETE</span>
                </div>
                <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
