import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, ChevronRight, Globe, Layers, Smartphone, Palette, 
  Server, Cpu, Bot, Code, HelpCircle, Calendar, Plus, Minus, Check, 
  Send, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Activity, 
  Database, Terminal, Sparkles, AlertCircle, RefreshCw, BarChart2, Star
} from 'lucide-react';

interface InternalPageProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

/* ==========================================
   1. SERVICES CATALOG PAGE
   ========================================== */
export function ServicesPage({ onBack, onBookConsultation }: InternalPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      id: 'web-dev',
      icon: Globe,
      title: 'Web Software Engineering',
      desc: 'Edge-runtime rendered next-generation SPA/SSR applications optimized for instant interaction paint and high conversion.',
      specs: ['Next.js & React 19', 'Tailwind CSS v4', 'Edge API Serverless', 'SEO and Lighthouse 100/100'],
      color: 'from-emerald-500/10 to-teal-500/10',
      badge: 'SSR EDGE'
    },
    {
      id: 'saas-dev',
      icon: Layers,
      title: 'Enterprise SaaS Engines',
      desc: 'Multi-tenant database architectures, automated stripe billing loops, deep telemetry event pipelines, and compliant user role scopes.',
      specs: ['Multi-tenant Tenants', 'Stripe Billing API', 'SOC2 / GDPR Prep', 'Event Ledger Tracking'],
      color: 'from-blue-500/10 to-indigo-500/10',
      badge: 'PCI COMPLIANT'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI & LLM Orchestration',
      desc: 'Local vector search indexing, context-aware prompt chaining workflows, custom cognitive agent system design, and deep model tuning.',
      specs: ['RAG Vector DBs', 'Gemini & OpenAI SDKs', 'Prompt Chaining Systems', 'Cognitive Agents'],
      color: 'from-purple-500/10 to-pink-500/10',
      badge: 'AGENT CORECT'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Sovereign Mobile Solutions',
      desc: 'Cross-platform native experiences utilizing hardware-accelerated layouts, offline-first ledger cache, and precise haptics.',
      specs: ['React Native / Expo', 'Flutter Core Runtime', 'Haptic Touch Pipelines', 'Secure Key Vaults'],
      color: 'from-orange-500/10 to-red-500/10',
      badge: '60 FPS NATIVE'
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'Premium UX Design Systems',
      desc: 'Motion-guided, minimalist, emotionally resonant SaaS UI design schemas crafted using Apple & Linear visual philosophies.',
      specs: ['Figma Custom Specs', 'Fluid Scale Spacing', 'Framer Motion Presets', 'High-Contrast Accessibility'],
      color: 'from-amber-500/10 to-yellow-500/10',
      badge: 'CRAFT STYLE'
    },
    {
      id: 'cloud-devops',
      icon: Server,
      title: 'Cloud & Kubernetes DevOps',
      desc: 'Zero-downtime Blue/Green pipelines, Prometheus resource monitors, and compliant isolated staging network clusters.',
      specs: ['Kubernetes Orch', 'Terraform CI/CD', 'Prometheus Alerts', 'Cloud Run / AWS ECS'],
      color: 'from-cyan-500/10 to-blue-500/10',
      badge: 'ZERO DOWNTIME'
    }
  ];

  const benefits = [
    { title: 'Sovereign Core Architecture', desc: 'Secure local containment ensuring zero dependency leak or unlicensed library issues.' },
    { title: 'Deterministic Build Iterations', desc: 'Continuous deployment pipelines guarantee no manual server downtime during delivery.' },
    { title: 'Obsessive Quality Focus', desc: 'Automated linter checks, type verification, and end-to-end integration tests run on every branch change.' }
  ];

  const steps = [
    { num: '01', title: 'System Discovery', desc: 'Technical audits of current databases to mapping correct target structures.' },
    { num: '02', title: 'Architecture Blueprinting', desc: 'Full API scheme specification design documents and entity relationship models.' },
    { num: '03', title: 'Sprint Development', desc: 'Parallel development sprints leveraging sandboxed integration testing.' },
    { num: '04', title: 'Rigorous Validation', desc: 'Multi-device responsive testing combined with load stress testing.' },
    { num: '05', title: 'Seamless Release', desc: 'Zero-friction launch backed by active fallback monitors.' }
  ];

  const faqs = [
    { q: 'How does SpaceOn approach project deadlines?', a: 'Every sprint is calculated on deterministic story points. We supply active telemetry dashboards to clients to review actual progress keys in real time.' },
    { q: 'What is the security containment process like?', a: 'We construct isolated container environments and enforce secure secrets management across Cloud providers. No secrets ever leak to frontends.' },
    { q: 'Do you offer post-launch optimization support?', a: 'Yes. We map continuous integration health checks and retain engineers for high-availability telemetry monitoring agreements.' }
  ];

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="services-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3 py-1 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              SERVICES CATALOGUE
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Scalable <span className="text-[#00df89]">Software Solutions</span> <br />
              for global enterprises
            </h1>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
              We design, develop, and orchestrate elite digital engineering modules, high-performance web frameworks, generative AI pipelines, and premium UI design systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onBookConsultation('Full Catalog Solutions')} 
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5 text-black" />
                <span>Schedule a Tech Audit</span>
              </button>
              <button 
                onClick={onBack}
                className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
              >
                Return to Core Panel
              </button>
            </div>
          </div>

          {/* Right Floating Dashboard Card Mock */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#080808]/90 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 blur-[50px] rounded-full" />
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-450" />
                  <span className="text-xs font-mono text-white/50">SYSTEM_METRICS // STATUS</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase">
                  ACTIVE
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">LATENCY SPEED (AVG)</span>
                    <span className="text-lg font-mono font-bold text-white">41.8 ms</span>
                  </div>
                  <BarChart2 className="w-6 h-6 text-emerald-400 opacity-60" />
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">PIPELINE CONTINUITY</span>
                    <span className="text-lg font-mono font-bold text-white">100.00%</span>
                  </div>
                  <Shield className="w-6 h-6 text-emerald-400 opacity-60" />
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <span className="text-[10px] font-mono text-white/40 block mb-2">RUNNING AGENTS</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {['LTS_RAG', 'EXPO_HAPTIC', 'VORTEX_CORE'].map(a => (
                      <span key={a} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white/70">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gradient-to-b from-transparent to-[#050505]/40 py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center md:text-left mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              REVOLUTIONARY SUITE
            </span>
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-extrabold tracking-tight text-white mt-3">
              Explore Our <span className="text-emerald-400">Client Delivery Sprints</span>
            </h2>
            <p className="text-white/50 text-[14px] md:text-[15px] mt-2 max-w-xl">
              Engineered with extreme precision using low-latency tools and thread-safe development paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="bg-neutral-950/40 border border-white/5 hover:border-white/15 px-6 py-8 rounded-[24px] transition-all duration-300 shadow-2xl flex flex-col justify-between hover:translate-y-[-4px] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-[#22C55E]/70 font-bold bg-[#22C55E]/5 px-2.5 py-1 border border-[#22C55E]/15 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[13px] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-5">
                    <span className="text-[10px] font-mono text-white/30 uppercase block mb-3 font-semibold">CORE SPECIFICATIONS</span>
                    <ul className="grid grid-cols-2 gap-2">
                      {item.specs.map(s => (
                        <li key={s} className="flex items-center gap-1.5 text-white/70 text-[11px]">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Blocks */}
      <section className="py-24 border-t border-b border-white/5 bg-black">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono tracking-[0.2em] text-emerald-400 font-extrabold uppercase">
              BENEFITS & VALUES
            </span>
            <h2 className="text-[30px] md:text-[40px] font-bold text-white mt-3 leading-tight">
              Sovereign engineering <span className="text-emerald-400">built around premium security</span> containment.
            </h2>
            <p className="text-white/60 text-[14px] leading-relaxed mt-4 max-w-sm">
              We focus purely on deterministic code reliability. No mock data, no unvalidated external scripts. Just high-velocity execution.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#080808] border border-white/5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white tracking-wide">{b.title}</h4>
                  <p className="text-white/50 text-[12.5px] leading-relaxed mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-[#020202] to-black">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[11px] font-mono tracking-[0.2em] text-emerald-400 font-extrabold uppercase">
              DELIVERY WORKFLOW
            </span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-white mt-2">
              Our Deterministic Delivery Path
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((st, i) => (
              <div key={i} className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between shadow-2xl min-h-[220px]">
                <div>
                  <span className="text-[32px] font-bold font-mono text-emerald-500/20 block">{st.num}</span>
                  <h4 className="text-[14.5px] font-extrabold tracking-wide mt-2 text-white">{st.title}</h4>
                </div>
                <p className="text-white/50 text-[12px] leading-relaxed mt-4">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion layout */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[11.5px] font-mono text-emerald-400 tracking-[0.25em] font-extrabold uppercase block mb-3">FAQ</span>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white">Frequently Asked Inquiries</h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-white/5 bg-black rounded-xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-white font-bold text-[14px] md:text-[15px] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-emerald-400 shrink-0" /> : <Plus className="w-4 h-4 text-emerald-450 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[13px] text-white/50 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Large Cinematic CTA */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] py-16">
        <div className="relative bg-gradient-to-b from-[#111111]/90 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">INITIATE SYSTEM WORKFLOW</span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight">
            Ready to integrate a secure software platform module?
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Consult directly with SpaceOn Senior Engineering Leads. Request custom code sandbox configurations tailored specifically to your load metrics.
          </p>
          <button 
            onClick={() => onBookConsultation('Consultation Call via Services Page')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all"
          >
            Request Secure Briefing
          </button>
        </div>
      </section>
    </div>
  );
}


/* ==========================================
   2. ABOUT SOLUTIONS PAGE
   ========================================== */
export function AboutPage({ onBack, onBookConsultation }: InternalPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '48+', label: 'PROD DEPLOYMENTS' },
    { value: '99.98%', label: 'PIPELINE UPTIME' },
    { value: '18+', label: 'REGULATORY COMPLIANT DEVS' },
    { value: '100%', label: 'LINT CONFORMANCE' }
  ];

  const milestones = [
    { year: '2023', title: 'System Bootstrap', desc: 'Secure software integration desk bootstrap with 4 critical sandbox micro-ledgers.' },
    { year: '2024', title: 'SaaS Suite Expansion', desc: 'Released cross-platform automated checkout vaults supporting Stripe webhook state handling.' },
    { year: '2025', title: 'Generative AI Integration', desc: 'Custom local RAG retrieval orchestrations deployed across enterprise health portals.' },
    { year: '2026', title: 'Global Multi-Zone Deployments', desc: 'Architected globally low-latency edge caching clusters with active active state sync.' }
  ];

  const coreValues = [
    { title: 'Architectural Honesty (No Tech-Larping)', desc: 'We deliver real microservices, secure cryptographic routines, and actual database schemas. Zero simulated outputs or low-quality telemetry logging lines.' },
    { title: 'Extreme Conformance Quality', desc: 'Our developers apply rigid ESLint rules, absolute TypeScript type coverage, and continuous validation. We make code elegant to ensure seamless long-term maintenance.' },
    { title: 'Transparency & Alignment', desc: 'Every sprint allocation is open for customer audits. Direct telemetry logs let clients review and test our pipeline speeds with complete transparency.' }
  ];

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="about-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3 py-1 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 lg:lg:col-span-7 flex flex-col items-start text-left relative z-10">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              ABOUT SPACEON
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Vetted Engineering <br />
              <span className="text-[#00df89]">determined for excellence</span>
            </h1>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
              SpaceOn Technology is a sovereign digital engineering collective crafting compliant payment backends, modular modern web applications, and RAG databases for tech enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onBookConsultation('Strategic Company Dialogue')} 
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5 text-black" />
                <span>Schedule Corporate Briefing</span>
              </button>
              <button 
                onClick={onBack}
                className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
              >
                Browse Core Portfolio
              </button>
            </div>
          </div>

          {/* Core Story Block */}
          <div className="lg:col-span-5">
            <div className="border border-white/5 bg-[#080808]/90 p-8 rounded-3xl relative backdrop-blur-3xl shadow-2xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#22C55E]">
                <Activity className="w-4 h-4" />
                <span>ISO 9001:2015 REGISTERED DEVS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Core Philosophy</h3>
              <p className="text-white/50 text-[13.5px] leading-relaxed">
                We believe that software engineering should be a deterministic process. Generative AI utilities and modern frameworks perform beautifully when coupled with clean static typing and structured architectural design rules. We never deploy unvalidated mock code blocks or fragile simulated interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Values Storytelling Grid */}
      <section className="py-24 border-t border-b border-white/5 bg-black/60">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">FOUNDATION</span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-2">What Defines SpaceOn Engineering?</h2>
          </div>

          <div className="space-y-16">
            {coreValues.map((v, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[24px]">
                  <div className="bg-[#080808] border border-white/5 rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                    <span className="text-[54px] font-sans font-bold text-emerald-500/10 block mb-2 leading-none">0{i+1}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{v.title}</h3>
                    <p className="text-white/60 text-[13.5px] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#22C55E] uppercase block">ARCHITECTURE CHECKPOINT 2026</span>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    By strictly enforcing modular, layered source code rules we eliminate legacy runtime overhead. All interfaces are optimized under standard Web Content Accessibility Guidelines and checked with static build verifiers before going live.
                  </p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-white/70 font-mono">100% compliant and type safe.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gradient-to-r from-transparent to-[#050505]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.2em] text-emerald-400 font-extrabold uppercase">CHRONOLOGY</span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-white mt-2">Corporate Milestone Log</h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
            {milestones.map((mil, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Node icon on the left border */}
                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-black border-[3px] border-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                <span className="text-xs font-mono text-emerald-400 font-extrabold block">{mil.year}</span>
                <h4 className="text-md md:text-lg font-bold text-white mt-1">{mil.title}</h4>
                <p className="text-white/50 text-[13px] leading-relaxed mt-2 max-w-2xl">{mil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Board */}
      <section className="py-16 bg-[#030303] border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="p-4 border border-white/5 bg-black/40 rounded-2xl shadow-xl">
              <span className="text-[28px] md:text-[38px] lg:text-[44px] font-bold font-mono text-white block">{s.value}</span>
              <span className="text-[10px] font-mono tracking-[0.15em] text-white/40 block mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Large Cinematic Call To Action */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-24">
        <div className="relative bg-gradient-to-b from-[#111111]/95 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[10%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">INITIATE SECURE CONSULTATION</span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight">
            Schedule a technical blueprint discussion today.
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Experience deterministic software engineering. Let us assemble compliant teams and custom sandbox parameters for your product stack.
          </p>
          <button 
            onClick={() => onBookConsultation('Strategic Dialogue via Corporate About')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all"
          >
            Review Custom Specs
          </button>
        </div>
      </section>
    </div>
  );
}


/* ==========================================
   3. PROJECTS SHOWCASE PAGE
   ========================================== */
export function ProjectsPage({ onBack, onBookConsultation }: InternalPageProps) {
  const [selectedTag, setSelectedTag] = useState('ALL');

  const categories = ['ALL', 'WEB', 'SAAS', 'MOBILE', 'AI'];

  const projects = [
    {
      id: 'apex-ledger',
      title: 'Apex Financial Ledger',
      industry: 'FINANCIAL WEBSITES',
      challenge: 'Client required PCI-DSS compliant routes with less than 50ms sync intervals for multi-currency settlement ledgers.',
      solution: 'Constructed edge-rendered serverless microservices paired with automated unit tests for key ledger entries.',
      tech: ['Next.js 14', 'TypeScript', 'Serverless Redis', 'Stripe'],
      results: 'Settlement speeds down to 32ms average with zero data anomalies detected over 12 million transactions.',
      tag: 'SAAS',
      accent: 'border-emerald-500/10 hover:border-emerald-500/30'
    },
    {
      id: 'vortex-healthcare',
      title: 'Vortex Audit Portal',
      industry: 'HEALTHCARE CONFORMS',
      challenge: 'Automating HIPAA data compliance document indexing and anonymization checks for multi-state medical networks.',
      solution: 'Configured local vector embedding pools with Gemini LLM prompt-chaining algorithms acting server side.',
      tech: ['Python FastAPI', 'Pinecone Vector DB', 'Google Gemini LLM', 'Docker'],
      results: 'Achieved complete parsing conformance matching 99.8% precision with SOC2 type 2 certificate alignment.',
      tag: 'AI',
      accent: 'border-blue-500/10 hover:border-blue-500/30'
    },
    {
      id: 'pulse-haptic',
      title: 'Pulse Haptic Mobile App',
      industry: 'DYNAMIC LOGISTICS',
      challenge: 'Managing active fleet item routes under extreme offline field node states with real-time GPS fallback constraints.',
      solution: 'Engineered an offline-first SQLite synchronization engine inside React Native utilizing local device haptics.',
      tech: ['React Native', 'Expo', 'SQLite', 'NodeJS'],
      results: 'Fleet coordinators maintained 100% data uptime regardless of localized mobile carrier cell coverage blackouts.',
      tag: 'MOBILE',
      accent: 'border-purple-500/10 hover:border-purple-500/30'
    },
    {
      id: 'global-catalog',
      title: 'Sovereign E-Commerce Web',
      industry: 'E-COMMERCE ENGINES',
      challenge: 'Scaling catalog lookups for 40,000 active inventory elements during flash market campaigns.',
      solution: 'Implemented Edge SSR render layers with stale-while-revalidate caches driven from local CDN headers.',
      tech: ['Next.js 15', 'Tailwind CSS', 'PostgreSQL', 'Redis Elasticache'],
      results: '100% score on Lighthouse mobile specs with site loading fully realized in 0.8 seconds worldwide.',
      tag: 'WEB',
      accent: 'border-orange-500/10 hover:border-orange-500/30'
    }
  ];

  const filteredProjects = selectedTag === 'ALL' 
    ? projects 
    : projects.filter(p => p.tag === selectedTag);

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="projects-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3 py-1 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 lg:lg:col-span-8 flex flex-col items-start text-left relative z-10">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              PRODUCTION BLUEPRINTS
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Verified <span className="text-[#00df89]">Project Showcases</span> <br />
              & continuous audits
            </h1>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
              We focus on deterministic engineering delivery. Review our audited case studies detailing technical challenges, solutions, and actual benchmarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onBookConsultation('Showcase Inquiry')} 
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5 text-black" />
                <span>Inquire About Project Sandbox</span>
              </button>
              <button 
                onClick={onBack}
                className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
              >
                Return to Core Panel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase list section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10">
        {/* Category Filters */}
        <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-12 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider font-bold transition-all ${
                selectedTag === cat 
                  ? 'bg-white text-black border border-white' 
                  : 'bg-white/[0.02] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Multi Project Lists */}
        <div className="space-y-12">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className={`bg-neutral-950/40 border ${proj.accent} rounded-[32px] p-8 md:p-12 transition-all duration-300 shadow-3xl hover:translate-y-[-4px] relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 border-b border-white/5 pb-8">
                <div>
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#22C55E] block font-extrabold uppercase">
                    {proj.industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] font-mono bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[12px] font-mono tracking-wider text-white/30 uppercase font-extrabold mb-2">// CHALLENGE SCHEMA</h4>
                  <p className="text-white/75 text-[13px] leading-relaxed">{proj.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[12px] font-mono tracking-wider text-white/30 uppercase font-extrabold mb-2">// TECHNICAL SOLUTION</h4>
                  <p className="text-white/75 text-[13px] leading-relaxed">{proj.solution}</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase font-extrabold mb-1">// DELIVERED BENCHMARK</h4>
                    <p className="text-white font-bold text-lg md:text-xl mt-2 leading-tight tracking-tight">{proj.results}</p>
                  </div>
                  <button 
                    onClick={() => onBookConsultation(`Blueprint Case: ${proj.title}`)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors text-left mt-6 self-start group"
                  >
                    <span>Request sandbox source specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Cinematic CTA */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] py-16">
        <div className="relative bg-gradient-to-b from-[#111111]/90 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">INITIATE ARCHITECTURE ASSESSMENT</span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight">
            Curious how these stack up against your goals?
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Speak directly with engineering leadership to review implementation guidelines for secure multi-tenant payment or cognitive AI pipelines.
          </p>
          <button 
            onClick={() => onBookConsultation('Case Sandbox Specs via Project Showcase')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all"
          >
            Review Audit Specs
          </button>
        </div>
      </section>
    </div>
  );
}


/* ==========================================
   4. BLOG / INSIGHTS CHRONICLES PAGE
   ========================================== */
export function BlogPage({ onBack, onBookConsultation }: InternalPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const posts = [
    {
      title: 'Deterministic State Tuning across Generative AI Systems',
      excerpt: 'How client developers tune multi-token retrieval caches for standard RAG pipelines without database concurrency blocks.',
      category: 'ARTIFICIAL INTELLIGENCE',
      date: 'MAY 19, 2026',
      readTime: '6 MIN READ',
      author: 'A. Patel, Core Platform Lead',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Eliminating Latency Bottlenecks on Modern Serverless Runtimes',
      excerpt: 'Static pre-rendering hooks, edge routes, and caching designs analyzed for instant web paint on global networks.',
      category: 'EDGE ARCHITECTURE',
      date: 'MAY 14, 2026',
      readTime: '8 MIN READ',
      author: 'M. Chen, CDN DevOps Specialist',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Security Audits: Preparing payment backends for PCI-DSS Compliance',
      excerpt: 'Layering robust webhook checkers, key isolation vaults, and role-based client token validation logs without database slow-downs.',
      category: 'FINANCIAL PLATFORMS',
      date: 'MAY 08, 2026',
      readTime: '11 MIN READ',
      author: 'S. Ivanov, Security Architecture',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="blog-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3 py-1 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 lg:lg:col-span-8 flex flex-col items-start text-left relative z-10">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              ENGINEERING CHRONICLES
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Bespoke <span className="text-[#00df89]">Tech Research</span> <br />
              & in-depth chronicling
            </h1>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
              Explore complex architectural theses, linter automation guidelines, type containment audits, and latency micro-benchmarks published by the SpaceOn Dev team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onBookConsultation('Technical Thesis Discussion Request')} 
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5 text-black" />
                <span>Inquire Technical Audit</span>
              </button>
              <button 
                onClick={onBack}
                className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
              >
                Return to Core Panel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              onClick={() => onBookConsultation(`Thesis Review: ${post.title}`)}
              className="bg-neutral-950/40 border border-white/5 hover:border-white/15 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 group hover:translate-y-[-4px] cursor-pointer flex flex-col justify-between"
            >
              {/* Image with zoom hover */}
              <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-zinc-900">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#22C55E] px-3 py-1 rounded-full border border-[#22C55E]/20">
                  {post.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 mb-3">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-md md:text-lg font-bold text-white group-hover:text-[#22C55E] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-[12.5px] leading-relaxed mt-2.5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-[11px] font-mono text-white/45">
                  <span>BY {post.author.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-450 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[11.5px] font-mono text-emerald-400 tracking-[0.25em] font-extrabold uppercase block mb-3">RESOURCES FAQ</span>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white">How We Maintain Open Knowledge</h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {[
              { q: 'Who authors the SpaceOn Chronicles?', a: 'Every technical thesis is curated by our Senior Platform Engineers who manage active multi-zone network clusters. We share actual build structures instead of mock guidelines.' },
              { q: 'Can we apply these guidelines inside our projects?', a: 'Completely. All listed code specifications align with standard MIT license agreements. We encourage client engineers to clone compliant sandbox models.' }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-white/5 bg-black rounded-xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-white font-bold text-[14px] md:text-[15px] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-emerald-400 shrink-0" /> : <Plus className="w-4 h-4 text-emerald-450 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[13px] text-white/50 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Large Cinematic CTA */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] py-16">
        <div className="relative bg-gradient-to-b from-[#111111]/90 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">SUBSCRIBE TO SECURITY TELEMETRY</span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight">
            Stay aligned with state-of-the-art tech developments.
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Request to receive our private continuous integration reports, telemetry benchmark data sheets, and local prompt chaining insights securely.
          </p>
          <button 
            onClick={() => onBookConsultation('Security newsletter request')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all"
          >
            Review Technical Feed
          </button>
        </div>
      </section>
    </div>
  );
}


/* ==========================================
   5. CONTACT SOLUTIONS INQUIRY PAGE
   ========================================== */
export function ContactPage({ onBack, onBookConsultation }: InternalPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', topic: 'Custom Platform Dev' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '', topic: 'Custom Platform Dev' });
    }, 1200);
  };

  const contactOptions = [
    { label: 'Active Support', desc: 'SLA backed responses within 20min of token ingestion metrics.', value: 'contact@spaceon.in', icon: Mail },
    { label: 'Lead Desk Phone', desc: 'Secure voice node linked to chief architect desk lines.', value: '+91 70691 82990', icon: Phone },
    { label: 'Sovereign Head Office', desc: "Patel's House, 868, near Aksa Mosque, Kesharpura, Gujarat 383230", value: 'Physical Zone IN-GJ-KES', icon: MapPin }
  ];

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="contact-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3 py-1 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left key facts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
                CONTACT INTERACTION DESK
              </span>
              <h1 className="text-[40px] sm:text-[56px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
                Let’s Assemble <br />
                <span className="text-[#00df89]">compliant systems</span>
              </h1>
              <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                Connect with SpaceOn technical architects directly for customized framework sandbox setup calculations, compliant microservices design, or multi-tenant system integration pricing.
              </p>
            </div>

            <div className="space-y-4">
              {contactOptions.map((opt, i) => {
                const Icon = opt.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 border border-white/5 bg-[#080808]/80 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest block uppercase font-bold">{opt.label}</span>
                      <span className="text-[13.5px] font-bold text-white select-all block mt-1">{opt.value}</span>
                      <p className="text-white/50 text-[11px] leading-normal mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability stats */}
            <div className="p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-white">SYSTEM CONTINUITY MONITOR LIVE</span>
              </div>
              <p className="text-[11.5px] text-white/50 leading-relaxed">
                Our operations team accepts and checks custom server setup specifications 24/7. Average response time on verified cryptographic BRIEF logs: <strong>16 minutes</strong>.
              </p>
            </div>
          </div>

          {/* Right Glass form */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-[#080808]/95 p-8 md:p-10 rounded-3xl relative backdrop-blur-3xl shadow-2xl">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 blur-[60px] rounded-full" />
              
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white">Ingest Secure Brief Log</h3>
                <p className="text-xs font-mono text-white/40 uppercase mt-0.5">ESTABLISH CHRONICLE STREAM KEY</p>
              </div>

              {success ? (
                <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-[16px] font-extrabold text-white">Brief Tunnel Established</h4>
                  <p className="text-xs text-white/50 leading-relaxed max-w-sm mx-auto">
                    Your platform details have been securely encapsulated and routed to the engineering team. Our chief technology officer will initialize custom layout parameters immediately.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 border border-white/15 hover:border-emerald-500/20 hover:bg-emerald-500/10 text-white font-mono text-xs font-bold uppercase transition-all rounded"
                  >
                    Ingest Another Stream
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase font-bold block">Your Human Label</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#22C55E]/40 focus:outline-none p-3.5 rounded-xl text-[13.5px] font-medium text-white transition-all text-left" 
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase font-bold block">Tunnel Mail Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#22C55E]/40 focus:outline-none p-3.5 rounded-xl text-[13.5px] font-medium text-white transition-all text-left" 
                        placeholder="e.g. j.doe@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase font-bold block">Company / Namespace</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#22C55E]/40 focus:outline-none p-3.5 rounded-xl text-[13.5px] font-medium text-white transition-all text-left" 
                        placeholder="e.g. Apex Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase font-bold block">Primary Solution Focus</label>
                      <select 
                        value={formData.topic}
                        onChange={e => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 p-3.5 rounded-xl text-[13.5px] font-medium text-white focus:border-[#22C55E]/40 focus:outline-none cursor-pointer"
                      >
                        <option value="Custom Platform Dev">Custom Platform Dev</option>
                        <option value="AI & LLM Orchestration">AI & LLM Orchestration</option>
                        <option value="Compliance Sandbox Support">Compliance Sandbox Support</option>
                        <option value="Sovereign Cross-Platform App">Sovereign Cross-Platform App</option>
                        <option value="SaaS Checkout Integration">SaaS Checkout Integration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/40 uppercase font-bold block">Encapsulated Brief Specs</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#22C55E]/40 focus:outline-none p-3.5 rounded-xl text-[13.5px] font-medium text-white transition-all text-left resize-none" 
                      placeholder="Detail your system constraints, load expectations, and database timelines securely..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase transition-all tracking-wider flex items-center justify-center gap-2 mt-4 cursor-pointer active:scale-98"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                        <span>TRANS_INDEXING Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Ingest Brief Segment</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ==========================================
   6. TECHNOLOGIES STACK ECOSYSTEM PAGE
   ========================================== */
export function CodingCircuitLogo() {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square flex items-center justify-center pointer-events-none select-none">
      {/* Inline styles for custom path and node animations */}
      <style>{`
        @keyframes circuitDash {
          0% {
            stroke-dashoffset: 400;
            opacity: 0;
          }
          30% {
            opacity: 0.65;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.65;
          }
        }
        @keyframes circuitPulseOne {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes circuitPulseTwo {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes circuitPulseThree {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes drawHex {
          0% {
            stroke-dashoffset: 500;
            fill: rgba(16, 185, 129, 0);
          }
          100% {
            stroke-dashoffset: 0;
            fill: rgba(16, 185, 129, 0.08);
          }
        }
        @keyframes drawBracket {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes scaleNode {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }
      `}</style>

      {/* Background Soft Glow to emulate the high-contrast dark visual */}
      <div className="absolute w-[240px] h-[240px] rounded-full bg-emerald-500/10 blur-[60px] animate-pulse pointer-events-none" />
      <div className="absolute w-[140px] h-[140px] rounded-full bg-emerald-500/15 blur-[40px] pointer-events-none" />

      {/* SVG Container wrapping symmetrical circuit nodes */}
      <svg
        className="w-full h-full text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Green Glow Filter */}
          <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="hexInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00df89" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00df89" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Hexagon Glow in Background */}
        <polygon 
          points="200,135 256.3,167.5 256.3,232.5 200,265 143.7,232.5 143.7,167.5"
          fill="url(#hexInnerGlow)"
        />

        {/* Radiating Circuit Lines with Draw-In Animations */}
        
        {/* --- TOP LEFT --- */}
        {/* Node 1 */}
        <path
          d="M 170 150 L 120 100 L 120 70"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.1s',
          }}
        />
        <circle
          cx="120"
          cy="60"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '120px 60px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.2s',
          }}
        />
        <circle
          cx="120"
          cy="60"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseOne 2s ease-in-out infinite',
          }}
        />

        {/* Node 2 */}
        <path
          d="M 143.7 167.5 L 105 125 L 85 115"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.3s',
          }}
        />
        <circle
          cx="75"
          cy="110"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '75px 110px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.4s',
          }}
        />
        <circle
          cx="75"
          cy="110"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseTwo 2s ease-in-out infinite',
          }}
        />

        {/* Node 3 */}
        <path
          d="M 143.7 185 L 100 185 L 75 170"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.5s',
          }}
        />
        <circle
          cx="65"
          cy="165"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '65px 165px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.6s',
          }}
        />
        <circle
          cx="65"
          cy="165"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseThree 2s ease-in-out infinite',
          }}
        />


        {/* --- TOP RIGHT --- */}
        {/* Node 4 */}
        <path
          d="M 230 150 L 280 100 L 280 70"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.2s',
          }}
        />
        <circle
          cx="280"
          cy="60"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '280px 60px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.3s',
          }}
        />
        <circle
          cx="280"
          cy="60"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseOne 2s ease-in-out infinite',
          }}
        />

        {/* Node 5 */}
        <path
          d="M 256.3 167.5 L 295 125 L 315 115"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.4s',
          }}
        />
        <circle
          cx="325"
          cy="110"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '325px 110px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.5s',
          }}
        />
        <circle
          cx="325"
          cy="110"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseTwo 2s ease-in-out infinite',
          }}
        />

        {/* Node 6 */}
        <path
          d="M 256.3 185 L 300 185 L 325 170"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.6s',
          }}
        />
        <circle
          cx="335"
          cy="165"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '335px 165px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.7s',
          }}
        />
        <circle
          cx="335"
          cy="165"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseThree 2s ease-in-out infinite',
          }}
        />


        {/* --- BOTTOM LEFT --- */}
        {/* Node 7 */}
        <path
          d="M 143.7 215 L 100 215 L 75 230"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.7s',
          }}
        />
        <circle
          cx="65"
          cy="235"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '65px 235px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.8s',
          }}
        />
        <circle
          cx="65"
          cy="235"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseTwo 2s ease-in-out infinite',
          }}
        />

        {/* Node 8 */}
        <path
          d="M 143.7 232.5 L 110 265 L 85 285"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.85s',
          }}
        />
        <circle
          cx="75"
          cy="290"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '75px 290px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.9s',
          }}
        />
        <circle
          cx="75"
          cy="290"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseThree 2s ease-in-out infinite',
          }}
        />

        {/* Node 9 */}
        <path
          d="M 170 250 L 120 300 L 120 330"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.9s',
          }}
        />
        <circle
          cx="120"
          cy="340"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '120px 340px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 2.0s',
          }}
        />
        <circle
          cx="120"
          cy="340"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseOne 2s ease-in-out infinite',
          }}
        />


        {/* --- BOTTOM RIGHT --- */}
        {/* Node 10 */}
        <path
          d="M 256.3 215 L 300 215 L 325 230"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.75s',
          }}
        />
        <circle
          cx="335"
          cy="235"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '335px 235px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.85s',
          }}
        />
        <circle
          cx="335"
          cy="235"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseTwo 2s ease-in-out infinite',
          }}
        />

        {/* Node 11 */}
        <path
          d="M 256.3 232.5 L 290 265 L 315 285"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.82s',
          }}
        />
        <circle
          cx="325"
          cy="290"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '325px 290px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.92s',
          }}
        />
        <circle
          cx="325"
          cy="290"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseThree 2s ease-in-out infinite',
          }}
        />

        {/* Node 12 */}
        <path
          d="M 230 250 L 280 300 L 280 330"
          stroke="#00df89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: '400',
            animation: 'circuitDash 1.5s ease-out forwards 0.95s',
          }}
        />
        <circle
          cx="280"
          cy="340"
          r="8"
          stroke="#00df89"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          style={{
            transformOrigin: '280px 340px',
            animation: 'scaleNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 2.05s',
          }}
        />
        <circle
          cx="280"
          cy="340"
          r="4"
          fill="#00df89"
          style={{
            animation: 'circuitPulseOne 2s ease-in-out infinite',
          }}
        />


        {/* --- MAIN CENTRAL HEXAGON LOGO --- */}
        {/* Draw the Pointy Hexagon */}
        <polygon
          points="200,135 256.3,167.5 256.3,232.5 200,265 143.7,232.5 143.7,167.5"
          stroke="#00df89"
          strokeWidth="4.5"
          strokeLinejoin="round"
          filter="url(#circuitGlow)"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: '500',
            animation: 'drawHex 2.0s ease-in-out forwards',
          }}
        />

        {/* Code Characters Inside Hexagon: [ < ] [ / ] [ > ] */}
        {/* Left Side < */}
        <path
          d="M 183 186 L 168 200 L 183 214"
          stroke="#00df89"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '100',
            strokeDashoffset: '100',
            animation: 'drawBracket 1.2s ease-out forwards 1.0s',
          }}
        />

        {/* Slash / */}
        <path
          d="M 207 180 L 193 220"
          stroke="#00df89"
          strokeWidth="4.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '100',
            strokeDashoffset: '100',
            animation: 'drawBracket 1.2s ease-out forwards 1.2s',
          }}
        />

        {/* Right Side > */}
        <path
          d="M 217 186 L 232 200 L 217 214"
          stroke="#00df89"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '100',
            strokeDashoffset: '100',
            animation: 'drawBracket 1.2s ease-out forwards 1.4s',
          }}
        />
      </svg>
    </div>
  );
}

export function TechnologiesPage({ 
  onBack, 
  onBookConsultation, 
  onViewTechDetail 
}: InternalPageProps & { onViewTechDetail?: (techId: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASES', 'AI TOOLS', 'DEVOPS'];

  const techStack = [
    { id: 'tech-react', name: 'React 19 & Next.js', category: 'FRONTEND', icon: Code, rating: '99% STABLE', desc: 'Sovereign SSR routes with pre-fetching CDN caches.' },
    { id: 'tech-react', name: 'TypeScript v5', category: 'FRONTEND', icon: Shield, rating: '100% TYPED', desc: 'rigid compilation schemas preventing frontend state anomalies.' },
    { id: 'tech-laravel', name: 'Laravel API Suites', category: 'BACKEND', icon: Layers, rating: 'SECURE MVC', desc: 'Secure middleware token checks and eloquent queries.' },
    { id: 'tech-node-js', name: 'Node.js Edge Run', category: 'BACKEND', icon: Cpu, rating: 'LOW LATENCY', desc: 'Single threaded loop structures resolving edge routes.' },
    { id: 'tech-dotnet', name: 'PostgreSQL Database', category: 'DATABASES', icon: Database, rating: 'ACID TUNED', desc: 'Strict data vaults with optimized table index constraints.' },
    { id: 'tech-python', name: 'Pinecone Vector DB', category: 'DATABASES', icon: Server, rating: 'COSINE SIM', desc: 'Index metrics holding context-rich vector embeddings.' },
    { id: 'tech-python', name: 'Gemini SDKs', category: 'AI TOOLS', icon: Bot, rating: 'PROMPT STREAM', desc: 'Automated task loops with contextual prompt routing.' },
    { id: 'tech-python', name: 'Docker Containers', category: 'DEVOPS', icon: Terminal, rating: 'ISOLATED OS', desc: 'Standardized build containment holding code files securely.' },
    { id: 'tech-splunk', name: 'Kubernetes Orch', category: 'DEVOPS', icon: Globe, rating: 'AUTOSCALE', desc: 'Multi-node server groups adapting load limits dynamically.' }
  ];

  const filteredTech = selectedCategory === 'ALL'
    ? techStack
    : techStack.filter(t => t.category === selectedCategory);

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="technologies-page-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Tiny abstract background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

      {/* Primary header back row to blend with premium feel */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3.5 py-1.5 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full select-none">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-20 relative z-10 !overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              TECHNICAL ECOSYSTEM
            </span>
            <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              Sovereign <span className="text-[#00df89]">tech stacks</span> to engineer your vision
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[550px] leading-relaxed mb-8">
              Our engineering collective enforces rigid modular software structures using thread-safe development environments. Review our verified tech profiles.
            </p>
            <button 
              onClick={() => onBookConsultation('Ecosystem Consultation Call')} 
              className="rounded-full bg-[#00df89] hover:bg-[#00f093] hover:scale-[1.02] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(0,223,137,0.30)] hover:shadow-[0_0_50px_rgba(0,223,137,0.55)] cursor-pointer text-center"
            >
              Get stack compatibility now
            </button>
          </div>

          {/* Symmetrical glowing circuit logo on the right side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none !overflow-visible z-10 mt-12 lg:mt-0">
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] relative flex items-center justify-center !overflow-visible">
              {/* Glow 1: Main Glow with responsive sizing and blurring to prevent outlines in mobile */}
              <div 
                className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] animate-pulse blur-[45px] md:blur-[80px]"
                style={{
                  background: 'radial-gradient(circle, rgba(0,223,137,0.3) 0%, rgba(0,223,137,0.1) 35%, transparent 70%)',
                }}
              />

              {/* Glow 2: Secondary Ambient Glow with responsive sizing and blurring to prevent outlines in mobile */}
              <div 
                className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] blur-[60px] md:blur-[110px]"
                style={{
                  background: 'radial-gradient(circle, rgba(0,223,137,0.15) 0%, transparent 70%)',
                }}
              />
              
              <CodingCircuitLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Tech list showcase */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10">
        {/* Category Filters */}
        <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-12 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-white text-black border border-white' 
                  : 'bg-white/[0.02] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx}
                onClick={() => onViewTechDetail && onViewTechDetail(tech.id)}
                className="bg-neutral-950/40 border border-white/5 hover:border-[#00df89]/30 px-6 py-6 rounded-2xl transition-all duration-300 shadow-2xl flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:bg-neutral-900/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 group-hover:bg-[#00df89]/10 group-hover:text-[#00df89] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-white group-hover:text-[#00df89] transition-colors">{tech.name}</h4>
                      <span className="text-[9px] font-mono tracking-wider text-[#22C55E]/70 bg-[#22C55E]/5 border border-[#22C55E]/15 px-2 py-0.5 rounded-full uppercase mt-1 inline-block">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/30 group-hover:text-[#22C55E]/70 transition-colors uppercase">
                    {tech.rating}
                  </span>
                </div>
                <p className="text-white/50 text-[12.5px] leading-relaxed mt-4">
                  {tech.desc}
                </p>
                
                {onViewTechDetail && (
                  <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-emerald-500 tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>EXPLORE ARCHITECTURE BLUEPRINT</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Clean Interactive Architecture Layout visual */}
      <section className="py-24 border-t border-white/5 bg-[#020202] mt-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono tracking-[0.2em] text-emerald-400 font-extrabold uppercase">ARCHITECTURE VISUALS</span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-2 leading-tight">Secure Multi-tenant Platform flow chart</h2>
            <p className="text-white/60 text-[13.5px] leading-relaxed mt-4">
              We design layered cloud ingress routers directing sandbox tokens to isolated application backends, driving low-latency SQL indices before synchronizing key settlement data securely.
            </p>
            <div className="mt-6 space-y-3">
              {['Compliant SOC2 token handshakes', 'Encrypted TLS 1.3 socket bridges', 'Decoupled persistent volume storage nodes'].map((check, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs text-white/70 font-mono">{check}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-white/5 bg-black/60 rounded-3xl p-6 md:p-8 font-mono text-[11px] space-y-6 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/40">// ARCHITECTURE SCHEMA 2026.05</span>
                <span className="text-[#22C55E]">TUNNEL_SECURE</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded text-white/70">
                  <span className="text-emerald-405 font-bold">[CLIENT_INGRESS]</span> &rarr; https_ssl_request (TLS_1.3)
                </div>
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded text-white/70 ml-4">
                  <span className="text-cyan-405 font-bold">[PROXY_ROUTER]</span> &rarr; Nginx Reverse Proxy (Port 3000)
                </div>
                <div className="p-2 bg-[#22C55E]/5 border border-[#22C55E]/15 rounded text-white/90 ml-8">
                  <span className="text-emerald-401 font-bold">[VORTEX_DAEMON]</span> &rarr; Authentication decrypt context &amp; token mapping
                </div>
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded text-white/70 ml-12">
                  <span className="text-purple-405 font-bold">[PLATFORM_LEADER]</span> &rarr; Thread safe read/write to ACID Tuned PG_SQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Cinematic CTA */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] py-16">
        <div className="relative bg-gradient-to-b from-[#111111]/90 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">REQUEST SECURE INQUIRY DESK</span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight">
            Want to review your product stack compatibility?
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Consult directly with SpaceOn Technical Dev leads to auditing legacy database configurations or choosing optimal edge runtime specs for cloud microservices.
          </p>
          <button 
            onClick={() => onBookConsultation('Ecosystem technical brief')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all"
          >
            Request Stack Audit
          </button>
        </div>
      </section>
    </div>
  );
}
