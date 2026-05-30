import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Shield, Sparkles, Database, Smartphone, BarChart3, Milestone } from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export default function FeaturedProjects({ onOpenCaseStudy }: FeaturedProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 'luminary-ai',
      title: 'Luminary Enterprise Health Platform',
      category: 'ENTERPRISE SAAS / HEALTHCARE',
      description: 'Intelligent clinical workflow automation and medical records query engine built to accelerate data lookups across distributed healthcare networks safely.',
      metrics: '45% Medical Record Retrieval Boost',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop',
      badge: 'HIPAA & GDPR Compliant',
      stack: ['Python', 'FastAPI', 'React', 'Neo4j'],
      icon: Sparkles,
      accent: 'rgba(255,255,255,0.06)'
    },
    {
      id: 'aether-core',
      title: 'Aether Global Financial Ledger',
      category: 'FINTEC / DECENTRALIZED INFRASTRUCTURE',
      description: 'High-throughput secure transaction routing system and double-entry ledger platform scaling multi-currency settlement processes globally.',
      metrics: '55,000+ Transactions Per Second',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
      badge: 'Sub-second Ledger Finality',
      stack: ['Rust', 'gRPC', 'RocksDB', 'PostgreSQL'],
      icon: Shield,
      accent: 'rgba(255,255,255,0.08)'
    },
    {
      id: 'vortex-mid',
      title: 'Nova Cloud Infrastructure Orchestrator',
      category: 'CLOUD SAAS / SYSTEMS DEVOPS',
      description: 'High-density container scheduler and autoscaling engine allocating active cluster resources and database nodes across complex AWS VPC groups.',
      metrics: '35% Infrastructure Resource Savings',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2794&auto=format&fit=crop',
      badge: 'Zero Server Overhead',
      stack: ['Go', 'Docker', 'Kubernetes', 'AWS Hosting'],
      icon: Database,
      accent: 'rgba(255,255,255,0.04)'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden border-b border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="projects">
      {/* Background radial soft light blobs represent space */}
      <div className="absolute top-[30%] left-[-10%] w-[550px] h-[550px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-white/[0.012] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-3">
              Production Implementations / Section 04
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Selected Projects Showcase
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed">
              Below are premium digital systems engineered and deployed globally by SPACEON. Explore detailed specification sheets.
            </p>
          </div>

          <button
            onClick={() => onOpenCaseStudy('aether-core')}
            className="group flex items-center gap-2.5 text-[13px] font-medium text-white hover:text-white/80 transition-all font-mono border border-white/10 hover:border-white/20 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-md self-start"
          >
            <span>DISCOVER ALL SPEC SHEETS</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white/60 group-hover:text-white" />
          </button>
        </div>

        {/* Portfolio Cards Loop grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const IconComponent = proj.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={proj.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ 
                  opacity: 0, 
                  backdropFilter: 'blur(25px)',
                  WebkitBackdropFilter: 'blur(25px)',
                  filter: 'blur(15px)',
                  scale: 0.96,
                  y: 40 
                }}
                whileInView={{ 
                  opacity: 1, 
                  backdropFilter: 'blur(0px)',
                  WebkitBackdropFilter: 'blur(0px)',
                  filter: 'blur(0px)',
                  scale: 1,
                  y: 0 
                }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  duration: 0.82,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative bg-gradient-to-b from-[#111111]/95 to-[#060606]/95 backdrop-blur-md rounded-[28px] overflow-hidden transition-all duration-300 group flex flex-col justify-between p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.04] hover:border-white/[0.15]"
                id={`project-card-${proj.id}`}
                whileHover={{ y: -6 }}
              >
                {/* Micro Light reflections top edge on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Card Top: Fine Image container */}
                <div className="space-y-6">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/5">
                    
                    {/* Image overlay filter */}
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.6] contrast-[1.1] grayscale-[20%]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Shadow overlay block */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Float metadata badge */}
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono tracking-wider bg-black/70 border border-white/10 text-white rounded px-2.5 py-1">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-white/60" />
                      <span className="text-[10px] font-mono tracking-wider text-white/40 block">
                        {proj.category}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-semibold text-white tracking-tight group-hover:text-white/95 transition-colors leading-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-[13px] text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Card Bottom: Technology Stack lists & specs action */}
                <div className="relative pt-6 border-t border-white/5 mt-8 space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono tracking-wider text-white/30 block">BENCHMARK KPI</span>
                    <p className="text-[14px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {proj.metrics}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {proj.stack.map((st) => (
                      <span 
                        key={st} 
                        className="text-[10px] font-mono text-white/50 px-2 py-0.5 border border-white/5 bg-white/[0.02] rounded"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(proj.id)}
                    className="w-full group/btn flex items-center justify-between px-4 py-2 bg-white/5 hover:bg-white border border-white/10 hover:border-white rounded-xl transition-all duration-300 text-left cursor-pointer"
                  >
                    <span className="text-[12px] font-semibold text-white group-hover/btn:text-black font-sans">
                      Inspect System Specifications
                    </span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-black transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
