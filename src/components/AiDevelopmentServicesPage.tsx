import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, ChevronRight, Bot, Cpu, Brain, Database, BarChart2,
  Workflow, Check, Star, Plus, Minus, Calendar, Terminal, Shield, Sparkles,
  Layers, Settings, Users, Phone, Mail, Globe, Code, FileText, CheckCircle2,
  Activity, Zap, Eye, RefreshCw, Send, Lock, ChevronDown, Award
} from 'lucide-react';
import ScrollGlassReveal from './ScrollGlassReveal';

function TechLogo({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const [loadError, setLoadError] = useState(false);
  const n = name.toLowerCase();

  // Map names to Simple Icons slug and brand color
  let slug = '';
  let color = 'ffffff';
  
  if (n.includes('python')) { slug = 'python'; color = '3776AB'; }
  else if (n.includes('tensorflow')) { slug = 'tensorflow'; color = 'FF6F00'; }
  else if (n.includes('openai') || n.includes('gpt')) { slug = 'openai'; color = 'ffffff'; }
  else if (n.includes('langchain')) { slug = 'langchain'; color = '10B981'; }
  else if (n.includes('pytorch')) { slug = 'pytorch'; color = 'EE4C2C'; }
  else if (n.includes('node')) { slug = 'nodedotjs'; color = '339933'; }
  else if (n.includes('aws') || n.includes('amazon')) { slug = 'amazonwebservices'; color = 'FF9900'; }
  else if (n.includes('docker')) { slug = 'docker'; color = '2496ED'; }
  else if (n.includes('pinecone')) { slug = 'pinecone'; color = '10B981'; }
  else if (n.includes('postgresql') || n.includes('postgres')) { slug = 'postgresql'; color = '4169E1'; }
  else if (n.includes('laravel')) { slug = 'laravel'; color = 'FF2D20'; }
  else if (n.includes('kubernetes')) { slug = 'kubernetes'; color = '326CE5'; }
  else if (n.includes('gemini')) { slug = 'googlegemini'; color = '8AB4F8'; }
  else if (n.includes('typescript')) { slug = 'typescript'; color = '3178C6'; }
  else if (n.includes('react') || n.includes('next')) { slug = 'react'; color = '61DAFB'; }
  else if (n.includes('database') || n.includes('vector')) { slug = 'databricks'; color = 'FF3621'; }

  if (slug && !loadError) {
    return (
      <img 
        src={`https://api.iconify.design/simple-icons:${slug}.svg?color=%23${color}`}
        alt={name}
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
        onError={() => setLoadError(true)}
      />
    );
  }

  // Fallback to simpler code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

interface AiDevelopmentServicesPageProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

export default function AiDevelopmentServicesPage({ onBack, onBookConsultation }: AiDevelopmentServicesPageProps) {
  // Navigation states & interactive selectors
  const [activeTab, setActiveTab] = useState<'all' | 'infrastructure' | 'models' | 'pipelines'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [chatbotMessages, setChatbotMessages] = useState<Array<{ sender: 'user' | 'agent', text: string }>>([
    { sender: 'user', text: 'How do you optimize prompt chains for agent systems?' },
    { sender: 'agent', text: 'We map structured output schemas using Pydantic, combine them with local cache pools, and run deterministic verification passes.' }
  ]);
  const [newMsg, setNewMsg] = useState('');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto-scroll testimonials timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Demo interactive chat action
  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    const userMessage = { sender: 'user' as const, text: newMsg };
    setChatbotMessages(prev => [...prev, userMessage]);
    setNewMsg('');

    setTimeout(() => {
      const responseText = newMsg.toLowerCase().includes('database') || newMsg.toLowerCase().includes('sql')
        ? "We integrate Pinecone and pgvector with strict connection pool scaling to support edge inference under 15ms."
        : "Optimal model alignment utilizes low-rank adaptation (LoRA) keeping parameter modification bounded and secure.";
      setChatbotMessages(prev => [...prev, { sender: 'agent' as const, text: responseText }]);
    }, 1200);
  };

  const industries = [
    { title: 'Healthcare', icon: Activity, desc: 'HIPAA-compliant document parsing and neural classification models mapping diagnostic codes safely.' },
    { title: 'Fintech', icon: Shield, desc: 'Real-time transactional ledger fraud scanners, high-frequency settlement pipelines, and automated PCI vaults.' },
    { title: 'Logistics', icon: Workflow, desc: 'Dynamic visual fleet item optimization indices routing deliveries safely through cellular signal blind spots.' },
    { title: 'E-Commerce', icon: Globe, desc: 'Predictive cohort matching, natural conversational assistance, and edge SSR dynamic product engines.' },
    { title: 'Real Estate', icon: Layers, desc: 'Autonomous localized price trajectory modeling using multi-variable regression datasets.' },
    { title: 'Education', icon: Award, desc: 'Adaptive learning system modules providing bespoke progress timelines matching core curricula.' },
    { title: 'Manufacturing', icon: Settings, desc: 'Visual anomaly telemetry nodes inspecting material parameters on assembly conveyor runs.' },
    { title: 'SaaS Platforms', icon: Cpu, desc: 'Multi-tenant API keys integration schemas, automated billing gateways, and contextual prompt managers.' }
  ];

  const workflowSteps = [
    { num: '01', title: 'Discovery & Analysis', desc: 'Detailed scoping of your legacy database schema structure, computational load projections, and regulatory constraints.' },
    { num: '02', title: 'Data Pipeline Design', desc: 'Establishing secure sanitization routines, local ETL schemas, and high-velocity embedding vector storage.' },
    { num: '03', title: 'AI Model Selection & Design', desc: 'Configuring model weights selection: from lightweight local mistral fine-tunes to Google Gemini API routing architectures.' },
    { num: '04', title: 'Development & Training', desc: 'Constructing deterministic prompt chain pipelines, training adapters via LoRA patterns, and strict static model tests.' },
    { num: '05', title: 'Testing & Optimization', desc: 'Benchmarking operational latencies under production concurrency thresholds to protect your execution speeds.' },
    { num: '06', title: 'Controlled Deployment', desc: 'Rolling out code changes incrementally via zero-downtime micro-clusters backed by instant environment triggers.' },
    { num: '07', title: 'Continuous Refinement', desc: 'Tracking runtime data shifts, active token cost budgets, and tuning vector storage parameters over time.' }
  ];

  const techStack = [
    { name: 'Python', category: 'infrastructure', icon: Code, desc: 'Enterprise model architecture orchestration core.' },
    { name: 'TensorFlow', category: 'models', icon: Brain, desc: 'Deep neural graph optimization structures.' },
    { name: 'OpenAI APIs', category: 'models', icon: Bot, desc: 'Global context API models and GPT nodes.' },
    { name: 'LangChain', category: 'pipelines', icon: Workflow, desc: 'Sophisticated cognitive chain execution loop.' },
    { name: 'PyTorch', category: 'models', icon: Cpu, desc: 'Highly efficient model fine-tuning arrays.' },
    { name: 'Node.js', category: 'infrastructure', icon: Zap, desc: 'Accelerated low-latency server middleware.' },
    { name: 'AWS', category: 'infrastructure', icon: Globe, desc: 'Secure cloud VPC cluster nodes and storage.' },
    { name: 'Docker', category: 'infrastructure', icon: Terminal, desc: 'Decoupled, pristine secure sandbox containers.' },
    { name: 'Pinecone', category: 'pipelines', icon: Settings, desc: 'High-speed cloud native vector databases.' },
    { name: 'PostgreSQL', category: 'pipelines', icon: Database, desc: 'Relational ACID structured transactional models.' },
    { name: 'Vector Databases', category: 'pipelines', icon: Layers, desc: 'Hierarchical Navigable Small World (HNSW) indexing.' },
    { name: 'React', category: 'infrastructure', icon: Sparkles, desc: 'Premium responsive stateful interactive layout.' }
  ];

  const caseStudies = [
    {
      title: 'AI Customer Support Platform',
      industry: 'ENTERPRISE RETRIEVAL',
      challenge: 'Automating high-volume support queries involving internal manual PDFs while preventing model hallucinations.',
      solution: 'Implemented a localized semantic chunking RAG pipeline that enforces strict source-document citations.',
      tech: ['Google Gemini API', 'Pinecone Vector DB', 'React', 'FastAPI'],
      results: '92% of common support inquiries resolved autonomously with user satisfaction rating matching human benchmarks.',
      badge: '92% AUTONOMY'
    },
    {
      title: 'Intelligent Resume Screening System',
      industry: 'HUMAN RESOURCES OPTIMIZATION',
      challenge: 'Sifting through 15,000 corporate job application documents weekly without triggering historical demographic bias.',
      solution: 'Crafted structured output parsers that strip demographic keys and match candidate skill graphs against job specs.',
      tech: ['LangChain', 'OpenAI GPT-4o', 'TypeScript', 'Docker'],
      results: '84% reduction in screening overhead, accelerating average hiring cycle timelines from 21 days down to 4 days.',
      badge: '4x VELOCITY'
    },
    {
      title: 'AI Analytics Dashboard',
      industry: 'FINANCIAL DATA SYSTEMS',
      challenge: 'Enabling business finance coordinators to queries transactional ledgers with natural natural language prompts.',
      solution: 'Configured a secure SQL-agent schema combining sandboxed script layers to prevent direct database leaks.',
      tech: ['pgvector', 'PyTorch', 'Next.js', 'PostgreSQL'],
      results: 'Finance managers derived accurate risk charts instantly, reducing reliance on manual query requests by 88%.',
      badge: '88% EFFICIENCY'
    },
    {
      title: 'Smart Recommendation Engine',
      industry: 'GLOBAL MARKETS SECURE',
      challenge: 'Scaling catalog suggestions for 40,000 items during flashing product drops with high transactional loads.',
      solution: 'Established a localized collaborative filtering array served through global edge redis caching.',
      tech: ['TensorFlow', 'Serverless Redis', 'FastAPI', 'NodeJS'],
      results: 'Delivered suggestions in 12ms average with average basket order value growing 24% over continuous test drops.',
      badge: '+24% REVENUE'
    }
  ];

  const testimonials = [
    {
      quote: "SpaceOn Technology transformed our core billing operations with intelligent automation and scalable AI systems. Their architectural discipline and refusal to use unvalidated mock logs are truly refreshing.",
      author: "Dr. Eleanor Vance",
      role: "VP of Engineering, Apex Ledger Systems",
      company: "APEX CORP"
    },
    {
      quote: "They integrated custom semantic RAG indices directly into our legacy HIPAA-compliant storage layer. Their performance results are highly reproducible and completely verifiable.",
      author: "Marcus Brody",
      role: "Chief Technology Officer, Lifespan Health",
      company: "LIFESPAN MED"
    },
    {
      quote: "The visual fleet routing scheduler they built utilizes edge ML inference that works flawlessly during remote offline blackouts. SpaceOn writes production code that is highly robust.",
      author: "Samantha K. Reed",
      role: "Director of Product, Logistics Network One",
      company: "LOGISTICS ONE"
    }
  ];

  const faqs = [
    {
      q: "What AI services does SpaceOn Technology provide?",
      a: "We design and develop custom machine learning systems, automated semantic data extraction models, generative draft pipelines, localized vector embedding engines, computer vision classifiers, and autonomous conversational agents."
    },
    {
      q: "How long does AI development take?",
      a: "A typical production-grade implementation starts with a 2-week discovery/blueprint sprint, followed by 4-to-8 week iterative build sprints. Complexity like proprietary model training loops dictates absolute delivery timelines."
    },
    {
      q: "Which industries benefit from AI solutions?",
      a: "Enterprise SaaS, healthcare systems requiring HIPAA isolation, financial companies looking for low-latency fraud scanning, e-commerce stores wanting personalized search layouts, and core logistics operations."
    },
    {
      q: "Do you build custom AI models?",
      a: "Yes. We fine-tune existing premium open-source models using customized LoRA adapters and custom context datasets, additionally compiling structured prompt orchestrations on standard cloud infrastructure."
    },
    {
      q: "Can AI integrate with existing legacy software?",
      a: "Absolutely. We specialize in non-disruptive integration schemas, constructing safe microservice APIs that communicate smoothly with SQL, Oracle, AWS, or on-premise transactional layers."
    }
  ];

  const filteredTech = activeTab === 'all' 
    ? techStack 
    : techStack.filter(t => t.category === activeTab);

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px]" id="ai-dev-services-root">
      
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

        <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/80 uppercase px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Section Container */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10 select-none !overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
              AI DEVELOPMENT SERVICES
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Smart <span className="text-[#00df89]">AI solutions</span> <br />
              engineered for growth
            </h1>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
              Empower your business to overcome complex challenges with our AI development services. 
              We specialize in deep learning, NLP, computer vision, and predictive analytics to build custom models and large language systems that address your unique needs.
            </p>
            
            {/* CTA Interaction matching the image */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onBookConsultation('AI Development Services Project Association')}
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center"
              >
                Transform with AI now
              </button>
              <button
                onClick={onBack}
                className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
              >
                Return to Suite
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Premium AI Development Services WebP Banner */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0 select-none !overflow-visible z-10">
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] relative flex items-center justify-center !overflow-visible">
              {/* Glow 1: Main Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
              <div 
                className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] blur-[45px] md:blur-[80px]"
                style={{
                  background: 'radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(34,197,94,0.15) 35%, transparent 70%)',
                }}
              />

              {/* Glow 2: Secondary Ambient Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
              <div 
                className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] blur-[60px] md:blur-[110px]"
                style={{
                  background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)',
                }}
              />
              
              <img 
                src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-development-services-banner.webp" 
                alt="SpaceOn AI Development Services" 
                className="w-full h-full object-contain select-none relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI SOLUTIONS SECTION */}
      <ScrollGlassReveal>
        <section className="bg-gradient-to-b from-transparent to-[#050505]/60 py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              REVOLUTIONARY CORE ENGINES
            </span>
            <h2 className="text-[30px] md:text-[42px] font-bold text-white tracking-tight mt-3">
              AI Solutions Built for Modern Businesses
            </h2>
            <p className="text-white/50 text-sm md:text-md mt-4 font-light">
              We engineer mathematically verifiable AI workflows, context-aware prompt modules, and high-performance neural layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Chatbot Development',
                desc: 'Build intelligent conversational AI systems for automated customer support, seamless CRM integrations, and advanced dynamic engagement tools.',
                icon: Bot,
                badge: 'AGENT CORE'
              },
              {
                title: 'Machine Learning Solutions',
                desc: 'Create scalable predictive indices, custom deep-learning models, and data-driven computational pathways for smarter enterprise logistics.',
                icon: Cpu,
                badge: 'NEURAL WEIGHTS'
              },
              {
                title: 'Generative AI Applications',
                desc: 'Develop AI-powered content automation pipelines, autonomous contextual prompt managers, and complex multi-token workflow generation frameworks.',
                icon: Sparkles,
                badge: 'LLM CHAINS'
              },
              {
                title: 'Natural Language Processing',
                desc: 'Build comprehensive NLP engines for structured document parsing, HIPAA audit anonymization, language translations, and real-time text audits.',
                icon: Brain,
                badge: 'PARSER CORE'
              },
              {
                title: 'Computer Vision Solutions',
                desc: 'Create AI-powered visual analysis networks, automated assembly inspection nodes, object classification cameras, and depth analytics engines.',
                icon: Eye,
                badge: 'VISION TELEMETRY'
              },
              {
                title: 'AI Process Automation',
                desc: 'Automate repetitive back-office operations using autonomous computer-use agents, crawler scrapers, and cron trigger pipelines.',
                icon: Workflow,
                badge: 'DETERMINISTIC SCRIPTS'
              }
            ].map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={i}
                  className="bg-neutral-950/40 border border-white/5 hover:border-emerald-500/25 p-7 rounded-[24px] hover:translate-y-[-4px] transition-all duration-300 shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-emerald-450 font-bold bg-emerald-500/5 px-2.5 py-1 border border-emerald-500/15 rounded-full uppercase">
                        {sol.badge}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-3 group-hover:text-emerald-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/5 mt-6">
                    <button 
                      onClick={() => onBookConsultation(`AI Solution Service: ${sol.title}`)}
                      className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Inquire module architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 3: AI CAPABILITIES SECTION */}
      <ScrollGlassReveal>
        <section className="py-24 bg-black border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Split Left Area: Sticky Visual Display */}
            <div className="lg:col-span-5 relative space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
                ENTERPRISE SPECIFICATIONS
              </span>
              <h2 className="text-[28px] md:text-[38px] font-bold text-white">
                Low Latency AI Capabilities
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                We craft enterprise computational platforms that remain aligned with rigorous system security directives. We present actual data structures over simulated telemetry logs.
              </p>

              {/* Toggle selection buttons to simulate visual change */}
              <div className="space-y-3 pt-4">
                {[
                  { label: 'Intelligent Automation Systems', desc: 'Secure local prompt loop containers controlling API triggers.' },
                  { label: 'Predictive Deep Learning Analytics', desc: 'Scalable neural model weights predicting inventory requirements.' },
                  { label: 'Automatic Prompt Chunk Retrieval', desc: 'Local pgvector search index pipelines matching text under 14ms.' }
                ].map((cap, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCapability(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-mono ${
                      activeCapability === idx 
                        ? 'bg-[#22C55E]/5 border-[#22C55E]/20 text-white' 
                        : 'bg-[#050505] border-white/5 text-white/50 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{cap.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeCapability === idx ? 'rotate-90 text-emerald-400' : ''}`} />
                    </div>
                    {activeCapability === idx && (
                      <p className="text-white/50 text-[11px] leading-relaxed mt-2 normal-case font-sans">
                        {cap.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Right Area: Large Enterprise Visual Cards */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-neutral-950/80 border border-white/5 rounded-3xl p-8 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl rounded-full" />
                  
                  {activeCapability === 0 && (
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
                        <Workflow className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Intelligent Automation Orchestrator</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        SpaceOn Technology patterns secure, autonomous logic nodes that continuously analyze input structures and execute micro-functions:
                      </p>
                      <ul className="space-y-3 font-mono text-xs text-white/70">
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Strict JSON validation loops parsing email routing hooks</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Containerized security boundaries mapping background tasks</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Thread-safe context queues caching OpenAI API state cycles</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeCapability === 1 && (
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-[#38bdf8] rounded-2xl flex items-center justify-center">
                        <BarChart2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Predictive Neural Engine Array</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Designed around custom data pipelines, we establish powerful regression structures that calculate market demands and logistical parameters:
                      </p>
                      <ul className="space-y-3 font-mono text-xs text-white/70">
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Multi-factor linear forecast models optimizing fleet routes</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Confidence interval modeling mapping potential customer churns</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Accelerated CUDA matrix calculations handling telemetry nodes</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeCapability === 2 && (
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-purple-400 rounded-2xl flex items-center justify-center">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Semantic Prompt Chunk Retrieval (RAG)</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        By designing fast index tables for pgvector repositories, we provide deep-context retrieval search capabilities that isolate and extract document elements in real time:
                      </p>
                      <ul className="space-y-3 font-mono text-xs text-white/70">
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Metadata filters locking context search to specific client IDs</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Hierarchical Navigable Small World (HNSW) lookup optimization</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Adaptive re-ranking arrays optimizing API input prompts size</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                    <span className="text-white/40">// SPEC REVISION 2026.05</span>
                    <button 
                      onClick={() => onBookConsultation('AI Capabilities Blueprint Technical Dialog')}
                      className="text-emerald-400 hover:text-white font-bold transition-colors cursor-pointer text-left"
                    >
                      Request structural architecture chart &rarr;
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 4: INDUSTRIES WE SERVE */}
      <ScrollGlassReveal>
        <section className="py-24 bg-[#020202] relative">
        <div className="absolute top-[20%] left-1/2 w-[350px] h-[150px] bg-emerald-500/1 blur-[110px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          
          <div className="text-center md:text-left mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              SECTOR ALIGNMENT
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-3 leading-tight">
              AI Solutions Supporting Global Sectors
            </h2>
            <p className="text-white/50 text-[14px] md:text-[15px] mt-2 max-w-xl">
              We compile highly stable digital interfaces and background script arrays customized for specific industry operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i} 
                  className="bg-neutral-950/50 border border-white/5 hover:border-emerald-500/20 p-6 rounded-2xl shadow-xl hover:translate-y-[-2px] transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle hover background highlight glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h4 className="text-[15px] font-bold text-white tracking-wide mb-2 group-hover:text-emerald-300 transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-white/50 text-[12.5px] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 5: AI DEVELOPMENT WORKFLOW */}
      <ScrollGlassReveal>
        <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              OPERATIONAL PHASES
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-3">
              Deterministic AI Implementation Pathway
            </h2>
          </div>

          {/* Connected timeline container */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 relative z-10">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? 'bg-[#080808] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                    : 'bg-neutral-950/40 border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  <span className={`text-[32px] font-bold font-mono block ${
                    activeWorkflowStep === idx ? 'text-emerald-400' : 'text-white/10'
                  }`}>
                    {step.num}
                  </span>
                  <h4 className="text-[14.5px] font-bold text-white mt-1 uppercase tracking-wide">
                    {step.title}
                  </h4>
                </div>
                <p className="text-white/50 text-[12px] leading-relaxed mt-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 6: TECHNOLOGIES & AI STACK */}
      <ScrollGlassReveal>
        <section className="py-24 bg-[#020202] border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
                ENGINEERING MATRIX
              </span>
              <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-3">
                Our Cutting Edge Technical Ecosystem
              </h2>
            </div>

            {/* Tab switch mechanism */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'ALL DEPLOYED' },
                { id: 'models', label: 'AI MODELS' },
                { id: 'pipelines', label: 'DATA & RAG' },
                { id: 'infrastructure', label: 'INFRASTRUCTURE' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest font-extrabold transition-all cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                      : 'bg-white/[0.02] border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Floating Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredTech.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 1.03,
                      y: -4,
                      borderColor: 'rgba(16, 185, 129, 0.35)',
                      backgroundColor: 'rgba(23, 23, 23, 0.85)',
                      boxShadow: '0 20px 45px rgba(16, 185, 129, 0.12)'
                    }
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                  className="bg-neutral-950/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/[0.01] blur-xl rounded-full" />
                  <div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          variants={{
                            hover: {
                              scale: 1.15,
                              rotate: 5,
                              backgroundColor: 'rgba(16, 185, 129, 0.15)',
                              borderColor: 'rgba(16, 185, 129, 0.4)'
                            }
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white"
                        >
                          <TechLogo name={tech.name} className="w-4 h-4" />
                        </motion.div>
                        <span className="text-white text-[13px] font-bold tracking-wide group-hover:text-emerald-300 transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono text-white/30 uppercase">{tech.category}</span>
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 7: AI BENEFITS SECTION */}
      <ScrollGlassReveal>
        <section className="py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
                BUSINESS IMPACT
              </span>
              <h2 className="text-[30px] md:text-[44px] font-bold text-white leading-tight">
                Why Businesses Choose <span className="text-emerald-400">SpaceOn AI Solutions</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We focus on strict deterministic outcomes. No simulated analytics, no unvalidated external dependencies. Just high-velocity execution tailored for global platforms.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => onBookConsultation('AI Solution Business Case Analysis')}
                  className="px-6 py-3 rounded-full border border-emerald-500/50 hover:bg-emerald-500 hover:text-black transition-all text-xs font-mono font-bold uppercase cursor-pointer"
                >
                  Request Case Calculation
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Faster Operations', metric: '4.8x acceleration', desc: 'Eliminate transactional friction bottlenecks using serverless edge caches.' },
                { title: 'Reduced Manual Process', metric: '94% automated', desc: 'Reroute data validation routines through micro-parsing containers.' },
                { title: 'Better Customer Response', metric: '14ms latency', desc: 'Provide immediate chatbot replies using semantic RAG retrieval nodes.' },
                { title: 'Data-driven Decisions', metric: '98.6% confidence', desc: 'Establish accurate forecasting variables over high-density database indices.' }
              ].map((ben, i) => (
                <div key={i} className="p-6 bg-[#080808] border border-white/5 rounded-2xl flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 block uppercase font-bold">
                      // {ben.title.toUpperCase()}
                    </span>
                    <span className="text-2xl font-mono font-bold text-white block mt-2">
                      {ben.metric}
                    </span>
                  </div>
                  <p className="text-white/40 text-[12px] leading-relaxed mt-4">
                    {ben.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 8: CASE STUDIES PREVIEW */}
      <ScrollGlassReveal>
        <section className="py-24 bg-[#020202] border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              PRODUCTION RESULTS
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-3">
              Audited AI Case Blueprints
            </h2>
            <p className="text-white/50 text-xs md:text-sm mt-3 font-light">
              Review specific operational improvements realized across real enterprise software integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div 
                key={i}
                className="bg-neutral-950/40 border border-white/5 hover:border-emerald-500/15 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/[0.015] blur-2xl rounded-full" />
                
                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 block tracking-widest uppercase font-bold">
                        {cs.industry}
                      </span>
                      <h4 className="text-xl font-bold font-sans text-white mt-1">
                        {cs.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#38bdf8] bg-[#38bdf8]/5 px-3 py-1 border border-[#38bdf8]/15 rounded-full uppercase">
                      {cs.badge}
                    </span>
                  </div>

                  <div className="space-y-4 text-[13px] leading-relaxed mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-white/30 tracking-wider block uppercase">// CORE CHALLENGE</span>
                      <p className="text-white/70 mt-1">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 tracking-wider block uppercase">// DELIVERED SOLUTION</span>
                      <p className="text-white/70 mt-1">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.map((t, idx) => (
                      <span key={idx} className="bg-white/5 text-white/60 px-2 py-0.5 rounded text-[9px] tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => onBookConsultation(`Case Study Sandbox Request: ${cs.title}`)}
                    className="text-emerald-400 hover:text-white font-bold transition-colors text-left flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>Request sandbox specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 9: TESTIMONIALS SECTION */}
      <ScrollGlassReveal>
        <section className="py-24 bg-black overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase">
              CLIENT TESTIMONY
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white mt-3">
              Vouched by Engineering Leaders
            </h2>
          </div>

          {/* Testimonial slider */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-neutral-950/80 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute top-4 right-8 text-[90px] font-serif text-emerald-500/5 leading-none select-none pointer-events-none font-bold">
                  “
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-500/25" />
                  ))}
                </div>

                <p className="text-white/80 text-[14.5px] md:text-[18px] leading-relaxed italic">
                  &ldquo;{testimonials[currentTestimonialIndex].quote}&rdquo;
                </p>

                <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="text-white font-bold block text-[13px]">
                      {testimonials[currentTestimonialIndex].author}
                    </span>
                    <span className="text-white/40 block mt-0.5">
                      {testimonials[currentTestimonialIndex].role}
                    </span>
                  </div>
                  <span className="bg-emerald-500/10 border border-emerald-500/20 text-[#22C55E] px-3.5 py-1 rounded text-[10px] items-center shrink-0 uppercase tracking-[0.1em] font-extrabold">
                    {testimonials[currentTestimonialIndex].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination markers */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    currentTestimonialIndex === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 10: FAQ SECTION */}
      <ScrollGlassReveal>
        <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <span className="text-[11.5px] font-mono text-emerald-400 tracking-[0.25em] font-extrabold uppercase block mb-3">FAQ</span>
            <h2 className="text-[28px] md:text-[38px] font-extrabold text-white">Inquiries Regarding AI Delivery</h2>
            <p className="text-white/50 text-sm mt-4 font-light leading-relaxed">
              Have specific questions about compliance, modeling, or database token costs? Review our compiled answers here or contact help desks instantly.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-white/5 bg-black rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between text-white font-bold text-[14.5px] md:text-[16px] focus:outline-none focus:bg-white/[0.01] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-emerald-400 shrink-0" /> : <Plus className="w-4 h-4 text-emerald-450 shrink-0" />}
                  </button>
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-[13px] text-white/50 leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      </ScrollGlassReveal>

      {/* SECTION 11: CINEMATIC CTA BANNER */}
      <ScrollGlassReveal>
        <section className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] py-16">
        <div className="relative bg-gradient-to-b from-[#111111]/90 to-black border border-white/10 rounded-[32px] p-8 md:p-14 text-center overflow-hidden flex flex-col items-center">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[150px] bg-emerald-500/3 blur-[100px] rounded-full pointer-events-none" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-extrabold uppercase mb-4">
            INITIATE INTELLECTUAL PLATFORMANCE
          </span>
          <h2 className="text-[28px] md:text-[44px] tracking-tight font-extrabold max-w-2xl mb-4 leading-tight font-sans">
            Ready to Build AI-Powered Solutions?
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed mb-8">
            Partner with SpaceOn Technology to create intelligent systems that scale seamlessly with your global business operations.
          </p>
          <button 
            onClick={() => onBookConsultation('AI Development Service Journey Launch')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] text-black rounded-full font-bold text-xs tracking-wider uppercase transition-all hover:scale-[1.02] cursor-pointer"
          >
            Start Your AI Journey
          </button>
        </div>
      </section>
      </ScrollGlassReveal>

    </div>
  );
}
