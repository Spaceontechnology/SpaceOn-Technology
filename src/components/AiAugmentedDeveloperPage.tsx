import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Check, X, ChevronDown, ChevronUp, Bot, Cpu, Sparkles, 
  Code, Shield, Layers, Calendar, Terminal, ArrowRight, Zap, Play,
  Globe, Database, Server, Smartphone, Monitor, AlertCircle, RefreshCw, BarChart2,
  Users, TrendingUp, Handshake, Mail, MessageSquare, Phone, Building, Briefcase
} from 'lucide-react';
import ScrollGlassReveal from './ScrollGlassReveal';

interface AiAugmentedPageProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

export default function AiAugmentedDeveloperPage({ onBack, onBookConsultation }: AiAugmentedPageProps) {
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: 'AI Augmented Developer',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        services: 'AI Augmented Developer',
        message: ''
      });
    }, 4000);
  };

  // Why dev teams are stuck data
  const stuckReasons = [
    {
      idx: '01',
      title: 'Slow Velocity',
      desc: 'Features take weeks when they should take days. Developers write boilerplate from scratch, reinvent solved problems, and spend hours on setup instead of solving real business problems.'
    },
    {
      idx: '02',
      title: 'Hidden Costs',
      desc: 'You hire 3 developers to get 1 developer\'s productive output. Meetings, context-switching, code reviews, and rework eat up most of the budget silently.'
    },
    {
      idx: '03',
      title: 'Inconsistent Quality',
      desc: 'Without AI-assisted code review and standardized toolchains, quality depends entirely on the individual developer\'s mood and experience. No two sprints are alike.'
    },
    {
      idx: '04',
      title: 'No AI Leverage',
      desc: 'Your competitors are already using AI to ship faster. If your team is not AI-augmented, you are competing in a race with one hand tied behind your back.'
    },
    {
      idx: '05',
      title: 'Context Loss',
      desc: 'Every time a developer rotates out, you lose context, momentum, and weeks of onboarding time. There is no institutional memory in traditional freelance setups.'
    },
    {
      idx: '06',
      title: 'Deadline Misses',
      desc: 'Estimates are wrong. Scope creeps. You promised the investor demo in 6 weeks and now it is 14 weeks later. Predictability is the rarest thing in software projects.'
    }
  ];

  // Results deliverables
  const deliverables = [
    {
      title: 'Deliver features faster',
      desc: 'Ship in weeks, not months — AI tooling eliminates the slow parts of every sprint.',
      icon: Zap
    },
    {
      title: 'Automate repetitive coding tasks',
      desc: 'Boilerplate, scaffolding, and setup are handled by AI so engineers focus on real problems.',
      icon: Cpu
    },
    {
      title: 'Improve code quality and reduce bugs',
      desc: 'AI pre-review on every PR catches issues before they reach your codebase.',
      icon: Shield
    },
    {
      title: 'Accelerate testing and deployment',
      desc: 'AI-generated test suites and automated pipelines mean faster, safer releases every time.',
      icon: Layers
    }
  ];

  // What you actually get
  const realOfferings = [
    {
      title: 'AI-Augmented Engineers',
      desc: 'Senior developers trained to use AI tools for faster coding, debugging, and delivery — embedded directly into your team.',
      icon: Users
    },
    {
      title: 'Faster Feature Delivery',
      desc: 'Reduce sprint cycles and ship features in weeks instead of months — with consistent velocity every sprint.',
      icon: TrendingUp
    },
    {
      title: 'AI-Driven Development Workflow',
      desc: 'We implement AI across code generation, testing, documentation, and debugging — so every part of the process moves faster.',
      icon: RefreshCw
    },
    {
      title: 'Seamless Team Integration',
      desc: 'Works with your existing team, tools, and processes. No new platforms to adopt, no workflow disruption.',
      icon: Handshake
    }
  ];

  // How we work steps
  const workflowSteps = [
    {
      step: 'STEP 1',
      title: 'Understand Your Product & Backlog',
      desc: 'We analyse your roadmap, bottlenecks, and delivery gaps to understand exactly where AI-augmented engineering will have the most impact.'
    },
    {
      step: 'STEP 2',
      title: 'Assign AI-Augmented Engineers',
      desc: 'We match senior engineers based on your tech stack, team size, and specific delivery needs — ready to join your Slack and repo within 48 hours.'
    },
    {
      step: 'STEP 3',
      title: 'Implement AI Development Workflow',
      desc: 'We integrate AI tools into development, testing, and deployment — so every part of your engineering process moves faster from day one.'
    },
    {
      step: 'STEP 4',
      title: 'Accelerate Delivery',
      desc: 'You start shipping faster from the first sprint. Consistent velocity, predictable commitments, and measurable output every cycle.'
    }
  ];

  // Expect results metrics
  const expectationStats = [
    { value: '5x', label: 'Faster feature delivery' },
    { value: '↓ 70%', label: 'Reduced development costs' },
    { value: 'Faster', label: 'Time-to-market' },
    { value: '↑ Output', label: 'Improved developer productivity' },
    { value: '90%+', label: 'Better code quality and fewer bugs' }
  ];

  // Table Comparison Rows
  const comparisonData = [
    { capability: 'Boilerplate & scaffolding', traditional: '2-4 hours manually', augmented: '10-20 minutes, automated' },
    { capability: 'Code review quality', traditional: 'Depends on reviewer', augmented: 'AI pre-review + human review' },
    { capability: 'Test coverage', traditional: 'Often skipped under pressure', augmented: 'AI-generated tests, 90%+ coverage' },
    { capability: 'Documentation', traditional: 'Manual, usually outdated', augmented: 'Auto-generated, always current' },
    { capability: 'Bug detection', traditional: 'Found in staging or production', augmented: 'Caught during development' },
    { capability: 'Sprint predictability', traditional: 'Varies widely', augmented: 'Consistent velocity per sprint' },
    { capability: 'Onboarding new engineers', traditional: '1-2 weeks of ramp-up', augmented: 'AI context tools — 2 days' },
    { capability: 'Cost per feature', traditional: 'Higher due to rework cycles', augmented: 'Lower — fewer rework cycles' }
  ];

  // FAQs
  const faqs = [
    {
      q: "What does 'AI-augmented' actually mean in practice?",
      a: "Our engineers use tools like GitHub Copilot, Cursor, and custom AI pipelines to write, test, and review code faster. AI handles boilerplate, scaffolding, and repetitive patterns — engineers focus on architecture, logic, and product decisions."
    },
    {
      q: "How is this different from a traditional offshore dev team?",
      a: "Traditional offshore teams require manual hand-holding, face severe communication hurdles, and struggle with velocity gaps. Our AI-augmented engineers leverage sophisticated code prompt tuning and contextual agents to write code 3-5x faster while aligning synchronously with your schedule."
    },
    {
      q: "How quickly can your engineers start?",
      a: "Because we maintain a warm, constantly audited registry of senior engineers trained in cognitive AI pipelines, we can match and embed senior engineers into your corporate Slack and Git branches in less than 4 days."
    },
    {
      q: "Do I need to manage the engineers day-to-day?",
      a: "No. While they work as direct team additions, our system provides an autonomous Agile layer with daily automated delivery telemetry feeds so you can track precise ticket commits and codebase performance metrics without overhead."
    },
    {
      q: "What tech stacks do your engineers work with?",
      a: "Our tech library includes modern Javascript frameworks (React, Next.js, Node), Python ML repositories (PyTorch, TensorFlow), enterprise Java, serverless cloud routing (AWS, GCP, Kubernetes), and custom vector search schemas."
    },
    {
      q: "What happens if I need to scale up or down?",
      a: "We offer maximum agile flexibility. You can add or scale down active resource personnel inside 14-day Sprint schedules to adjust to roadmap iterations quickly."
    },
    {
      q: "How do you ensure code quality?",
      a: "In addition to our rigorous manual code vetting, every pull request passes through automated continuous linting agents, strict unit test generators, and an independent senior architect review loop before deployment."
    }
  ];

  // Blogs list matching Screenshot 6
  const featuredBlogs = [
    {
      title: "Architecture of AI Medical Scribe Platforms",
      date: "May 21, 2026",
      image: "https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-augmented-developer-banner.webp"
    },
    {
      title: "Architecture Guide Designing Healthcare API Gateways for Interoperability",
      date: "May 19, 2026",
      image: "https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-augmented-developer-banner.webp"
    },
    {
      title: "How to Build SMART on FHIR Applications That Pass Every EHR Review",
      date: "May 15, 2026",
      image: "https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-augmented-developer-banner.webp"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-x-hidden font-sans pt-[84px]" id="ai-augmented-page-root">
      
      {/* SECTION 1: HERO & INTEGRATIVE ENGINE */}
      <div className="relative w-full bg-[#000000] !overflow-visible border-b border-white/5">
        
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

        {/* HERO GRID WORKFLOW */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10 !overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
                HIRE AI DEVELOPERS & ENGINEERS
              </span>
              <h1 className="text-[40px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
                Hire <span className="text-[#00df89]">vetted AI</span> <br />
                <span className="text-[#00df89]">developers</span> to <br />
                engineer your vision
              </h1>
              <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
                Whether you're looking to build smarter apps, automate decisions, or analyze large data sets, hire AI experts from us to cut development time, reduce errors, and launch AI-powered products with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onBookConsultation("Get AI talent now - AI Augmented Pipeline")}
                  className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center"
                  id="hero-augmented-get-started"
                >
                  Get AI talent now
                </button>
              </div>
            </div>

            {/* Right Column Visual: Requested high-quality image of AI-augmented Developer */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none !overflow-visible z-10 mt-12 lg:mt-0">
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
                  src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-augmented-developer-banner.webp" 
                  alt="Vetted AI Developer Graphic" 
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* STATS BAR SECTION: REDESIGNED FULL SIZE & HIGH CONTRAST */}
      <section className="bg-black py-4 relative z-10" id="ai-augmented-stats-bar-section">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <div className="py-12 px-8 sm:px-12 md:py-16 md:px-14 lg:py-20 lg:px-18 rounded-3xl bg-[#090909]/90 border border-white/5 shadow-2xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[
                { value: '5x', label: 'FASTER FEATURE DELIVERY' },
                { value: '60%', label: 'LESS TIME ON BOILERPLATE' },
                { value: '200+', label: 'PRODUCTS DELIVERED' },
                { value: '98%', label: 'CLIENT RETENTION RATE' }
              ].map((stat, sId) => (
                <div key={sId} className="flex flex-col items-start justify-center text-left">
                  <span className="text-[52px] md:text-[62px] lg:text-[76px] font-extrabold text-white leading-none tracking-tight font-sans">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-extrabold text-[#888888] tracking-widest uppercase mt-3 block leading-relaxed font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY DEV TEAMS ARE STUCK */}
      <section className="bg-black py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[46px] font-extrabold tracking-tight text-white leading-tight">
              Why most dev teams are <span className="text-emerald-400">stuck in slow motion</span>.
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed">
              Traditional offshore development is slow, unpredictable, and expensive. AI tools are changing everything — but most teams don't know how to use them correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stuckReasons.map((card, rId) => (
              <div 
                key={rId}
                className="bg-neutral-950/80 border border-white/5 rounded-2xl p-6.5 hover:border-emerald-500/20 hover:bg-neutral-900/40 transition-all duration-300 relative group"
                id={`stuck-card-${card.idx}`}
              >
                <div className="text-[28px] font-extrabold font-mono text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors mb-4 block">
                  {card.idx}
                </div>
                <h3 className="text-[17px] font-extrabold text-white tracking-wide mb-3 group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: DELIVERING RESULTS */}
      <section className="py-24 bg-[#050906]/60 border-b border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-emerald-500/2 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white">
              AI-Augmented Development <span className="text-emerald-400">That Delivers Results</span>.
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-3 max-w-[620px] mx-auto leading-relaxed">
              We embed experienced engineers who use AI-driven development workflows to make your product team faster, leaner, and more predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, dId) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={dId}
                  className="bg-neutral-950/60 border border-white/5 rounded-2xl p-6 hover:border-emerald-500/15 hover:bg-neutral-900/35 transition-all duration-300 flex flex-col items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-[15.5px] font-extrabold text-white tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT YOU ACTUALLY GET */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white leading-tight">
              What You <span className="text-emerald-400">Actually Get</span>.
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-2.5 leading-relaxed">
              Every engagement comes with a complete AI-augmented engineering system — not just developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realOfferings.map((item, oId) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={oId}
                  className="bg-[#0b0c0b] border border-white/5 hover:border-emerald-500/15 p-7 rounded-2xl transition-all duration-300 flex items-start gap-4 hover:bg-[#111311]/50 group"
                >
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/5 group-hover:bg-emerald-500/20 transition-colors">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-white/50 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW WE WORK WITH YOU */}
      <section className="py-24 bg-[#000000] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side sticky visual */}
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start py-2">
              <h2 className="text-[32px] md:text-[42px] font-extrabold leading-tight text-white mb-6">
                How We <span className="text-emerald-400">Work With You</span>.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed mb-8 max-w-[420px]">
                A simple, structured process that gets AI-augmented engineers into your team and shipping code fast.
              </p>
              
              {/* Handshake Illustration Card */}
              <div className="border border-white/5 bg-[#090b09]/80 rounded-2xl overflow-hidden shadow-2xl relative select-none group max-w-[400px]">
                <div className="absolute inset-0 bg-emerald-500/5 filter blur-[50px] pointer-events-none rounded-full" />
                <img 
                  src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/ai-augmented-developer-banner.webp" 
                  alt="Corporate Hands Shaking Partner" 
                  className="w-full h-auto object-contain p-2 mix-blend-luminosity brightness-90 group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right side steps timeline */}
            <div className="lg:col-span-7">
              <div className="space-y-10 pl-4 border-l border-white/10 md:pl-8 relative ml-4">
                {workflowSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-10">
                    
                    {/* Pulsing indicator node */}
                    <div className="absolute -left-[51px] md:-left-[67px] top-1 w-8 h-8 rounded-full bg-emerald-500 border border-emerald-400 text-neutral-950 flex items-center justify-center font-mono font-bold text-[11px] shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10">
                      {idx + 1}
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-extrabold uppercase block mb-1">
                      {step.step}
                    </span>
                    <h4 className="text-[18px] md:text-[20px] font-extrabold text-white tracking-wide leading-tight mb-2.5">
                      {step.title}
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pl-4 md:pl-12">
                <button
                  onClick={() => onBookConsultation("Book a free strategy call - AI Workflow")}
                  className="rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-extrabold px-8 py-3.5 text-[14px] tracking-wide transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)] cursor-pointer"
                >
                  Book a free strategy call
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: WHAT RESULTS YOU CAN EXPECT */}
      <section className="py-24 bg-[#030904]/40 border-b border-white/5 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white">
              What Results <span className="text-emerald-400">You Can Expect</span>.
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-3 leading-relaxed">
              Measurable outcomes from the first sprint — not promises, but patterns we see consistently across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {expectationStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-neutral-950/60 border border-white/5 hover:border-emerald-500/25 p-6.5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-neutral-900/10 transition-all duration-300 shadow-md group"
              >
                <span className="text-[28px] md:text-[34px] font-extrabold text-emerald-450 font-mono tracking-tight group-hover:scale-110 transition-all">
                  {stat.value}
                </span>
                <span className="text-[11.5px] text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-wider font-semibold font-mono mt-2 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: COMPARISON TABLE */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white leading-tight">
              Traditional dev vs. <span className="text-emerald-400">AI-Augmented dev</span>.
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-3.5 leading-relaxed">
              This is not just about writing code faster. It is about rethinking what a developer can do when AI handles the repetitive 60%.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-black/80 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-emerald-950/35 font-mono text-xs text-emerald-450 font-extrabold uppercase select-none">
                  <th className="p-4.5">Capability</th>
                  <th className="p-4.5">Traditional Developer</th>
                  <th className="p-4.5 text-emerald-400 font-bold">AI-Augmented Developer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[12.5px] leading-relaxed">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4.5 font-bold font-mono text-white/95">
                      {row.capability}
                    </td>
                    <td className="p-4.5 text-neutral-450 font-medium">
                      <span className="text-red-500/90 font-bold mr-1">&times;</span> {row.traditional}
                    </td>
                    <td className="p-4.5 text-white bg-emerald-950/15 shadow-[inset_1px_0_0_rgba(16,185,129,0.05)] font-semibold">
                      <span className="text-emerald-400 font-extrabold mr-1">&#10003;</span> {row.augmented}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white mb-12">
            Frequently asked <span className="text-emerald-400">questions</span>
          </h2>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#111111]/90 border border-white/5 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left text-white font-bold hover:text-emerald-400 transition-colors focus:outline-none cursor-pointer"
                    id={`augmented-faq-trigger-${idx}`}
                  >
                    <span className="text-[14px] md:text-[15.5px] tracking-wide pr-4 font-semibold">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      isOpen ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-white/10 text-white/40'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 md:p-6 pt-0 border-t border-white/5 text-[12.5px] md:text-[13.5px] text-white/60 leading-relaxed font-semibold">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-white/30 font-mono uppercase tracking-widest font-semibold">
              Have more questions?
            </p>
            <button
              onClick={() => onBookConsultation("In-depth AI Augmented Pipeline Inquiry")}
              className="mt-2 text-sm text-emerald-450 hover:text-white transition-colors underline font-bold"
            >
              Ask our experts &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 9: FEATURED BLOGS SECTION */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white">
              Featured <span className="text-emerald-400">blogs</span>
            </h2>
            <p className="text-white/50 text-[13.5px] md:text-[14.5px] leading-relaxed mt-3">
              Stay updated with the latest AI engineering insights and best practices from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, idx) => (
              <div 
                key={idx}
                className="bg-neutral-950/90 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-350 flex flex-col justify-between group cursor-pointer"
                onClick={() => onBookConsultation(`Inquiry for Blog: ${blog.title}`)}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-emerald-950/25">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale brightness-80 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-5.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-medium text-white/40 block mb-1.5 uppercase">
                      {blog.date}
                    </span>
                    <h4 className="text-[14.5px] font-bold text-white tracking-wide leading-snug group-hover:text-emerald-400 transition-colors">
                      {blog.title}
                    </h4>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400 group-hover:text-white transition-colors uppercase">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onBookConsultation("Interactive Blog Engine general review")}
              className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-bold font-mono text-emerald-400 hover:text-white transition-colors cursor-pointer uppercase border-b border-emerald-500/20 pb-1"
            >
              <span>View more blogs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-pulse" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 10: BOTTOM BANNER & CONTACT PORT INTAKE FORM */}
      <section className="py-24 bg-gradient-to-b from-[#000000] to-[#040d06]/60 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/3 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          
          {/* SPRINT UP CTA BOX */}
          <div className="bg-neutral-950/90 border border-emerald-500/10 rounded-3xl p-8 md:p-12 mb-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 filter blur-[60px] rounded-full pointer-events-none" />
            
            <h3 className="text-[26px] md:text-[38px] font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Ready to ship <span className="text-emerald-450">3x faster</span> starting next sprint?
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mt-4 max-w-xl mx-auto font-medium">
              Book a free 30-minute call. We'll audit your current dev process and show you exactly how AI-augmented engineering would work for your specific product and team.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onBookConsultation("Book Free Strategy Call - bottom banner")}
                className="w-full sm:w-auto rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-8 py-3.5 text-sm uppercase cursor-pointer transition-all shadow-md group border border-emerald-400/20 inline-flex items-center justify-center gap-1.5"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <p className="text-[10.5px] text-white/30 uppercase mt-4 font-mono font-bold">
              No commitment. No sales pitch. Just a real engineering conversation.
            </p>
          </div>

          {/* MASTER CONTACT FORM PANEL CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="project-contact-discuss-form">
            
            {/* Left info column */}
            <div className="lg:col-span-5 text-left">
              <h3 className="text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                Contact Us <br />
                <span className="text-emerald-400">for project discussion</span>
              </h3>
              <p className="text-[13.5px] md:text-[14.5px] text-white/60 leading-relaxed max-w-[390px] mb-10">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-[420px]">
                {[
                  { value: '14+', label: 'Years of Experience' },
                  { value: '180+', label: 'In-House Talent' },
                  { value: '750+', label: 'Project Delivered' },
                  { value: '92%', label: 'Client satisfaction rate' }
                ].map((stat, sIdx) => {
                  let Icon = Briefcase;
                  if (sIdx === 1) Icon = Users;
                  if (sIdx === 2) Icon = Cpu;
                  if (sIdx === 3) Icon = Users;
                  return (
                    <div key={sIdx} className="flex flex-col items-start gap-2.5">
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[21px] font-extrabold text-white block font-mono">
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-extrabold">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Form Card matching original layout structure */}
            <div className="lg:col-span-7 bg-white text-black p-6 sm:p-10 rounded-2xl shadow-2xl relative">
              <h4 className="text-[20px] font-extrabold text-[#111111] font-sans tracking-tight mb-2">
                Got a project in mind?
              </h4>
              <p className="text-gray-500 text-[12.5px] leading-relaxed mb-6">
                We guarantee to get back to you within a business day.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b border-gray-200 py-2.5 text-[13px] text-gray-850 placeholder-gray-300 focus:outline-none focus:border-emerald-500 transition-colors bg-transparent font-medium"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                      Your Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-b border-gray-200 py-2.5 text-[13px] text-gray-850 placeholder-gray-300 focus:outline-none focus:border-emerald-500 transition-colors bg-transparent font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-b border-gray-200 py-2.5 text-[13px] text-gray-850 placeholder-gray-300 focus:outline-none focus:border-emerald-500 transition-colors bg-transparent font-medium"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                      Your Phone
                    </label>
                    <input 
                      type="text" 
                      placeholder="+1"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-b border-gray-200 py-2.5 text-[13px] text-gray-850 placeholder-gray-300 focus:outline-none focus:border-emerald-500 transition-colors bg-transparent font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                    Services *
                  </label>
                  <select 
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    className="border-b border-gray-200 py-2.5 text-[13px] text-gray-800 bg-transparent focus:outline-none focus:border-emerald-500 transition-colors font-semibold"
                  >
                    <option value="AI Augmented Developer">AI Augmented Developer</option>
                    <option value="Custom AI Integrations">Custom AI Integrations</option>
                    <option value="LLM Fine-Tuning">LLM Fine-Tuning</option>
                    <option value="Generative AI Solutions">Generative AI Solutions</option>
                  </select>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5 font-mono">
                    How can we help? *
                  </label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-b border-gray-200 py-2 bg-transparent text-[13px] text-gray-850 placeholder-gray-300 focus:outline-none focus:border-emerald-500 transition-colors resize-none font-medium"
                  />
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full text-center rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-extrabold py-3 text-sm cursor-pointer shadow-lg uppercase"
                    id="submit-discussed-pipeline"
                  >
                    Submit
                  </button>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center gap-2.5"
                      >
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-[12px] font-semibold">
                          Success! Your AI development pipeline inquiry has been submitted in our system.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
