import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Layers, 
  Sparkles, 
  Cloud, 
  ArrowUpRight, 
  ArrowRight,
  Code2,
  Lock,
  Workflow
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onViewServiceDetail: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService, onViewServiceDetail }: ServicesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);

  const handleCardClick = (serviceId: string) => {
    if (serviceId === 'web-dev') {
      setClickedCardId(serviceId);
      setTimeout(() => {
        setClickedCardId(null);
        onViewServiceDetail(serviceId);
      }, 150);
    } else {
      onViewServiceDetail(serviceId);
    }
  };

  const servicesData: (ServiceItem & { subtitle: string; icon: any; accentColor: string })[] = [
    {
      id: 'web-dev',
      title: 'Web Software Engineering',
      subtitle: 'HIGH PERFORMANCE PORTALS',
      description: 'Engineered high-speed web solutions utilizing optimized server-side rendering and incremental hydration protocols.',
      icon: Globe,
      features: ['Next.js & React Architectures', 'Edge Runtime Deployment', 'Automated SEO Hydration', 'Headless Content Hubs'],
      accentColor: 'from-emerald-500/8 to-transparent'
    },
    {
      id: 'saas-dev',
      title: 'Enterprise SaaS Engines',
      subtitle: 'MULTI-TENANT ARCHITECTURES',
      description: 'Distributed multitenant software frameworks incorporating complex data partition and secure microsecond billing integrations.',
      icon: Layers,
      features: ['Stripe Billing Engines', 'RBAC & Identity Guard', 'Real-time WebSocket Push', 'SLA Optimization Support'],
      accentColor: 'from-emerald-500/10 to-transparent'
    },
    {
      id: 'mobile-app',
      title: 'Sovereign Mobile Apps',
      subtitle: 'CROSS-PLATFORM PERFORMANCE',
      description: 'Lightweight React Native and Flutter engines designed for ultra-smooth UI threads and full hardware-sensor integration.',
      icon: Smartphone,
      features: ['React Native & Expo Cores', 'Native Haptic Feedback', 'Offline Local Database Sync', 'App Store Delivery pipeline'],
      accentColor: 'from-emerald-500/8 to-transparent'
    },
    {
      id: 'ui-ux',
      title: 'Premium UX Design Systems',
      subtitle: 'CRAFTED INTERACTIVE PARADIGMS',
      description: 'Bespoke design tokens paired with immersive layout physics creating emotional, highly distinctive brand interfaces.',
      icon: Code2,
      features: ['Figma Custom Tokenization', 'Interactive Micro-motion', 'Fluid Bento Grid Wireframes', 'W3C Accessible Contrast Standards'],
      accentColor: 'from-emerald-500/12 to-transparent'
    },
    {
      id: 'ai-automation',
      title: 'AI & LLM Orchestration',
      subtitle: 'COGNITIVE COMPUTER WORKFLOWS',
      description: 'Advanced Retrieval-Augmented Generation architectures embedded with localized vector databases for reasoning systems.',
      icon: Sparkles,
      features: ['Generative LLM Pipelines', 'RAG Embeddings Databases', 'Autonomous System Agents', 'Custom NLP Prompting Tuning'],
      accentColor: 'from-emerald-500/15 to-transparent'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & Kubernetes DevOps',
      subtitle: 'AUTO-SCALE HIGH CAPACITY CORES',
      description: 'Highly available Kubernetes frameworks orchestrating microservices with declarative traffic policies and health checks.',
      icon: Cloud,
      features: ['Terraform IaC Configurations', 'GitHub Actions Actions CI/CD', 'Docker Orchestrated Swarms', 'Prometheus & eBPF Telemetry'],
      accentColor: 'from-emerald-500/10 to-transparent'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden border-b border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="services">
      {/* Absolute Background Ambient Light Gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[#ffffff]/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading with subtle animations */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-3">
            Digital Engineering Catalogue / List 02
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Services Built for Modern Businesses
          </h2>
          <p className="text-[15px] text-white/60 leading-relaxed">
            From architecture schema definition to multi-region global deployment, we help ambitious companies scale dynamically through powerful custom software interfaces.
          </p>
        </div>

        {/* Services interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(service.id)}
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
                  duration: 0.8,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                animate={clickedCardId === service.id ? { scale: 0.95 } : undefined}
                className={`relative bg-gradient-to-b from-white/[0.04] to-white/[0.012] backdrop-blur-md rounded-[32px] p-8 overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:shadow-emerald-500/20 border border-white/[0.06] hover:border-white/[0.18] ${
                  service.id === 'web-dev' ? 'transition-transform duration-150 ease-out' : ''
                }`}
                id={`service-card-${service.id}`}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={service.id === 'web-dev' ? { scale: 0.95 } : undefined}
              >
                {/* Custom inner gradient blob that activates on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Subtle top grid accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-[0.5px]" />

                {/* Card Top section */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Glassmorphism Icon shield */}
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[9px] font-mono tracking-widest text-white/30 group-hover:text-white/60 transition-colors uppercase">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-semibold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[13.5px] text-white/60 group-hover:text-white/80 transition-all duration-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom specs list + arrow */}
                <div className="relative pt-6 border-t border-white/5 z-10">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="text-[12px] text-white/40 group-hover:text-white/70 transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                      SOLUTIONS DESK ENGAGED
                    </span>
                    
                    {/* Sleek bottom right arrow */}
                    <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/40 bg-white/5 group-hover:bg-white flex items-center justify-center text-white group-hover:text-black transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
