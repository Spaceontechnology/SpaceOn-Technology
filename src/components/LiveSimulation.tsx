import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Activity, Cpu, Layers, HardDrive, Sparkles, RefreshCw } from 'lucide-react';

interface LiveSimulationProps {
  onScheduleCall: () => void;
}

export default function LiveSimulation({ onScheduleCall }: LiveSimulationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [systemSpeed, setSystemSpeed] = useState<'1.0x' | '1.5x' | '2.0x'>('1.0x');
  const [activeTab, setActiveTab] = useState<'orchestration' | 'metrics' | 'nodes'>('orchestration');

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log('Playback interrupted:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changePlaybackRate = (rate: number, label: '1.0x' | '1.5x' | '2.0x') => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setSystemSpeed(label);
    }
  };

  return (
    <section className="relative w-full py-28 bg-[#0a0a0a] overflow-hidden border-y border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="engine-simulation">
      {/* Absolute soft light gradients to convey deep drop shadows */}
      <div className="absolute top-[10%] left-[15%] w-[600px] h-[300px] bg-emerald-500/3 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[300px] bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading with Contrast Highlights */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3 font-bold">
            Interactive Video Showcase / Section 05
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans leading-tight">
            Our Interactive Product Design <span className="text-neutral-400 font-medium font-sans">In Action</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-neutral-400 leading-relaxed font-medium">
            Observe the production layout patterns and smooth rendering speed we build for global enterprises. Interact with the video playback rates below to view transition fluidity.
          </p>
        </div>

        {/* Shadow-Based Split Contrast Canvas (White vs Black) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Dark Terminal Node Control Panel (The Black Part) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between bg-[#0a0a0a] rounded-[32px] p-8 text-white relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
            {/* Gloss light accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]" />
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#00df89] font-bold uppercase">
                    SHOWCASE OPTIONS
                  </span>
                </div>
                <span className="text-[9px] font-mono text-white/30 border border-white/10 rounded px-2 py-0.5">
                  DEMO_S4
                </span>
              </div>

              {/* Functional Tab selection */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 rounded-xl">
                {(['orchestration', 'metrics', 'nodes'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 text-[11px] font-mono font-bold capitalize transition-all rounded-lg cursor-pointer ${
                      activeTab === tab
                        ? 'bg-white text-black font-extrabold shadow-sm'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {tab === 'orchestration' ? 'Design' : tab === 'metrics' ? 'Speed' : 'Structure'}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Content with beautiful typography */}
              <div className="space-y-4 min-h-[170px] flex flex-col justify-center">
                {activeTab === 'orchestration' && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      Dynamic Vector Layouts
                    </h4>
                    <p className="text-[13px] text-white/60 leading-relaxed font-sans">
                      Our modern layout grids distribute modules cleanly based on device viewport sizes, dynamic pixel densities, and custom fluid responsive dimensions.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-[#00df89]">Auto-Scaling Grids</span>
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-white/70">Fluid Columns</span>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      Performance Indicators
                    </h4>
                    <p className="text-[13px] text-white/60 leading-relaxed font-sans">
                      Maintains maximum paint cycles, instant navigation responses, and minimal bundle overhead to exceed competitive Lighthouse speed scores.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-[#00df89]">Stable 60 FPS</span>
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-white/75">Low Memory Load</span>
                    </div>
                  </div>
                )}

                {activeTab === 'nodes' && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      Modular Architecture
                    </h4>
                    <p className="text-[13px] text-white/60 leading-relaxed font-sans">
                      Highly decoupled client-side modules are built in independent chunks, guaranteeing seamless interaction feedback and no blockages on continuous scroll.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-[#00df89]">Decoupled Components</span>
                      <span className="text-[9.5px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-white/75">Clean Code-Splitting</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Panel Actions */}
            <div className="pt-6 border-t border-white/5 relative z-10 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>INTERACTIVE CONTROLS</span>
                <span className="flex items-center gap-1">
                  <HardDrive className="w-3 h-3 text-emerald-400" />
                  ONLINE DEMO ACTIVE
                </span>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={togglePlayback}
                  className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-xl text-black font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                  <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
                </button>

                <div className="flex border border-white/10 rounded-xl overflow-hidden bg-white/5 p-0.5">
                  {(['1.0x', '1.5x', '2.0x'] as const).map((spd) => (
                    <button
                      key={spd}
                      onClick={() => {
                        const val = spd === '1.0x' ? 1.0 : spd === '1.5x' ? 1.5 : 2.0;
                        changePlaybackRate(val, spd);
                      }}
                      className={`px-3 py-1 text-[10px] font-mono font-bold rounded-lg cursor-pointer transition-all ${
                        systemSpeed === spd
                          ? 'bg-white/10 text-white'
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {spd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Simulator Video Screen (The White with Exquisite Shadows Part) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between" id="engine-live-canvas">
            {/* The main video container featuring pristine drop shadow styling instead of bounding lines */}
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.16)] group">
              
              {/* Loop video render */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover pointer-events-auto filter brightness-[0.85] contrast-[1.05]"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_011532_86f9b93a-2ffc-42fd-8735-12a4c55ab536.mp4"
              />

              {/* Floating video control overlay visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Status Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none select-none">
                <span className="text-[9px] font-mono bg-black/60 border border-white/10 text-white rounded px-2.5 py-1 flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  HQ_MEDIA://ACTIVE_DEMO
                </span>
                
                <span className="text-[9px] font-mono bg-black/60 border border-white/10 text-white rounded px-2.5 py-1 backdrop-blur-md uppercase tracking-wider">
                  SPEED: {systemSpeed}
                </span>
              </div>

              {/* Float Play overlay */}
              <button 
                onClick={togglePlayback}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 text-white cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white translate-x-0.5" />}
              </button>

              {/* Bottom Label banner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none select-none">
                <div className="flex gap-2">
                  <span className="text-[8px] font-mono bg-black/50 text-white/50 rounded px-2 py-0.5 backdrop-blur-xs">
                    RENDER-ACCELERATED
                  </span>
                  <span className="text-[8px] font-mono bg-black/50 text-white/50 rounded px-2 py-0.5 backdrop-blur-xs">
                    HIGH CONFIGURATION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/60 tracking-tight font-semibold">
                  HIGH-FIDELITY DESIGN SYSTEM
                </span>
              </div>
            </div>

            {/* Quick architectural feature summary description below the simulation screen */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-neutral-100 dark:border-white/[0.04]">
              <div className="space-y-1">
                <h5 className="text-[13px] font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-[#00df89]" />
                  Fluid UI Rehydration Layout
                </h5>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
                  Optimized browser render cycles keep animation loops and component entry motions visually flawless.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="text-[13px] font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 font-sans">
                  <RefreshCw className="w-3.5 h-3.5 text-[#00df89]" />
                  Smooth State Updates
                </h5>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
                  Changes manifest instantly across responsive templates without causing layout shifts, performance bottlenecks, or micro-stutters.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
