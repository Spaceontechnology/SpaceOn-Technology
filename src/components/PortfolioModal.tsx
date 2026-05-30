import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink, Code2, Database, Shield, Zap } from 'lucide-react';
import { ProjectItem } from '../types';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (service: string) => void;
  defaultProjectId?: string;
}

export default function PortfolioModal({ isOpen, onClose, onBookConsultation, defaultProjectId }: PortfolioModalProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedProject(defaultProjectId || null);
    }
  }, [isOpen, defaultProjectId]);

  const projects: (ProjectItem & { details: string; stack: string[]; icon: any })[] = [
    {
      id: 'aether-core',
      title: 'Aether Global Financial Ledger',
      category: 'Fintech & Transaction Networks',
      description: 'High-throughput secure transaction routing system and double-entry ledger platform scaling multi-currency settlement processes globally.',
      metrics: '55,000+ Transactions Per Second',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
      details: 'We built a custom transactional state engine engineered to handle high-frequency payment entries without synchronization locks. Includes robust auditing, cryptographically signed ledger hashes, and seamless integration with institutional bank APIs.',
      stack: ['Rust', 'gRPC', 'RocksDB', 'PostgreSQL', 'ECDSA'],
      icon: Shield
    },
    {
      id: 'luminary-ai',
      title: 'Luminary Enterprise Health Platform',
      category: 'Healthcare SaaS & Data Systems',
      description: 'Intelligent clinical workflow automation and medical records query engine built to accelerate data lookups across distributed healthcare networks safely.',
      metrics: '45% Medical Record Retrieval Boost',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop',
      details: 'Developed a scalable clinical research and patient intake workflow manager. Leverages contextual vector caches and highly structured search indexes to resolve health documentation lookup times, fully compliant under HIPAA guidelines.',
      stack: ['Python', 'FastAPI', 'React', 'Neo4j', 'Elasticsearch'],
      icon: Code2
    },
    {
      id: 'vortex-mid',
      title: 'Nova Cloud Infrastructure Orchestrator',
      category: 'Cloud SaaS & Systems DevOps',
      description: 'High-density container scheduler and autoscaling engine allocating active cluster resources and database nodes across complex AWS VPC groups.',
      metrics: '35% Infrastructure Operational Savings',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2794&auto=format&fit=crop',
      details: 'Built a lightweight, highly automated cloud infrastructure scaler utilizing custom triggers to dispatch containers dynamically. Wraps native AWS Auto-Scaling and container schedulers, scaling up resources safely during high-traffic surges.',
      stack: ['Go', 'Docker', 'Kubernetes', 'AWS Hosting', 'Prometheus'],
      icon: Database
    },
    {
      id: 'chronos-systems',
      title: 'Aegis Real-Time Financial Settlement Suite',
      category: 'Corporate Finance & Ledger Security',
      description: 'Sub-millisecond latency payment messaging buffer processing high-frequency ledger events and streaming secure financial transactions.',
      metrics: 'Real-Time Audit Reconciliation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
      details: 'Engineered a highly resilient high-volume event processor operating on non-blocking ring-buffer memory files. Bypasses database connection limits by queuing incoming billing settlements before committing them, ensuring zero transaction drop rates.',
      stack: ['C++', 'Aeron', 'WebSockets', 'AWS Hosting'],
      icon: Zap
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl bg-[#060606] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[85vh] max-h-[800px]"
          >
            {/* Top glass highlights string */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[0.5px] z-20" />

            {/* Left Column - List of Engineering projects */}
            <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between p-6 bg-black/40 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block mb-1">
                    Exquisite Archives
                  </span>
                  <h2 className="text-xl font-semibold text-white tracking-tight">
                    Engineering Portfolios
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {projects.map((proj: any) => {
                    const IconComponent = proj.icon;
                    const isSelected = selectedProject === proj.id || (!selectedProject && proj.id === 'aether-core');
                    return (
                      <div
                        key={proj.id}
                        onClick={() => setSelectedProject(proj.id)}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-white/[0.02] border-white/5 text-white/70 hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <IconComponent className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-white/60'}`} />
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-black/60' : 'text-white/40'}`}>
                            {proj.category.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-medium leading-snug tracking-tight mb-2">
                          {proj.title}
                        </h3>
                        <div className={`text-[12px] font-mono font-medium ${isSelected ? 'text-black/80' : 'text-white/50'}`}>
                          {proj.metrics}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[11px] text-white/40 font-mono">
                <span>SECURED PLATFORM DATA</span>
                <span>SYSTEM V.01</span>
              </div>
            </div>

            {/* Right Column - Engineering Spec Details */}
            <div className="w-full md:w-7/12 p-6 overflow-y-auto flex flex-col justify-between bg-black">
              {/* Target Project display */}
              {(() => {
                const activeId = selectedProject || 'aether-core';
                const activeProj = projects.find((p: any) => p.id === activeId) as any;
                if (!activeProj) return null;

                return (
                  <motion.div
                    key={activeProj.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-5">
                      {/* Image Thumbnail with fine overlay */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10">
                        <img
                          src={activeProj.image}
                          alt={activeProj.title}
                          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-[10px] font-mono bg-black/60 px-2.5 py-1 rounded border border-white/10 text-white/80">
                          SYSTEM IMAGE / SPEC SHEET
                        </span>
                      </div>

                      {/* Headings */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono tracking-wider text-white/50">
                          {activeProj.category}
                        </span>
                        <h3 className="text-2xl font-semibold text-white tracking-tight">
                          {activeProj.title}
                        </h3>
                      </div>

                      {/* Project Scope Description */}
                      <p className="text-white/70 text-[14px] leading-relaxed">
                        {activeProj.details}
                      </p>

                      {/* Technical specifications blocks */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-widest text-white/30 block uppercase">
                          System Architecture Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProj.stack.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono bg-white/5 border border-white/5 text-white/80 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-white/30 font-mono block">BENCHMARK OUTPUT</span>
                        <p className="text-white font-medium text-[15px] font-mono accent-white">
                          {activeProj.metrics}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            onBookConsultation(activeProj.category);
                            onClose();
                          }}
                          className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-100 transition-colors rounded-lg flex items-center gap-1.5 focus:outline-none"
                        >
                          <span>Architect Similar System</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={onClose}
                          className="p-2 border border-white/10 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all focus:outline-none"
                          title="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
