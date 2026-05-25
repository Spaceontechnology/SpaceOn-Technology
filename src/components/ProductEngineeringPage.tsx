import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Check, ChevronDown, ChevronUp, Star, HelpCircle,
  Cpu, Sparkles, Code, Shield, Layers, Calendar, Terminal, Zap, Play,
  Globe, Database, Server, Smartphone, Monitor, AlertCircle, RefreshCw, BarChart2,
  PenTool, Heart, Award, Users, FileCheck, CheckCircle2, ChevronRight, MessageSquare,
  Minus, Plus
} from 'lucide-react';

interface ProductEngineeringProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.6
    }
  }
};

export default function ProductEngineeringPage({ onBack, onBookConsultation }: ProductEngineeringProps) {
  // Frequently Asked Questions state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Product Engineering',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'Product Engineering',
        message: ''
      });
    }, 4000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-discussion-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqData = [
    {
      q: "Do you involve the clients while developing any software?",
      a: "We follow Agile methodology for product development in which the client is completely involved at each and every stage of the development process. We send regular updates to the clients and collect their feedback to ensure that they get exactly what they want."
    },
    {
      q: "How much time and money does it cost to build a product?",
      a: "The architecture timeline and costing are proportional to the functional complexity, tech stack, and scope size. We design lean agile sprints which deliver working prototypes in 2-4 weeks, ensuring transparent milestone payments."
    },
    {
      q: "Do you protect intellectual property?",
      a: "Absolutely. We enforce rigorous NDAs and complete IP assignment contracts before any workspace engineer writes a single line of code. All blueprints, database setups, and assets belong entirely to you."
    },
    {
      q: "Can you help me upgrade legacy products?",
      a: "Yes. Our engineering squads are highly skilled in Legacy Modernization. We specialize in refactoring monolithic engines into lightweight containerized microservices, upgrading frameworks, and optimizing runtime performance."
    },
    {
      q: "Do you apply design thinking in product engineering?",
      a: "Yes. We operate on a human-centered design framework. By researching specific target personas, mapping user journeys, testing rapid prototypes, and gathering fast user loops, we align technology with user utility."
    }
  ];

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px] overflow-hidden" id="product-eng-page-root">
      
      {/* Hero Banner Container */}
      <div className="relative w-full bg-[#000000] !overflow-visible border-b border-light/5">
        
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
            id="product-eng-back-btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME PAGE</span>
          </button>

          <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/80 uppercase px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            PRODUCT ENGINEERING SUITE
          </span>
        </div>

        {/* SECTION 1: HERO CONTAINER */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10 font-sans !overflow-visible">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase mb-4">
                PRODUCT ENGINEERING SERVICES
              </span>
              <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                End-to-end innovative <span className="text-emerald-400">digital solutions</span>
              </h1>
              <p className="text-[14px] md:text-[16px] text-white/70 max-w-[550px] leading-relaxed mb-8 font-sans">
                We transform and automate your business processes with Product Engineering solutions, resulting in enhanced productivity. SpaceOn Technology has over 12 years of experience building simple to complex software for clients worldwide.
              </p>
              <button
                onClick={scrollToContact}
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(0,223,137,0.3)] hover:shadow-[0_0_50px_rgba(0,223,137,0.5)] cursor-pointer"
              >
                Talk to Us
              </button>
            </div>

            {/* High-fidelity original circuit hex node graphic right-side banner */}
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
                  src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/hire-ai-developers-banner.webp" 
                  alt="Product Engineering Core Graphic" 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Main flow page content wrapper */}
      <div className="max-w-[1440px] mx-auto relative z-10 px-5 md:px-[60px] lg:px-[120px]">

        {/* ================= SECTION 2: NEXT GEN SOLUTIONS ================= */}
        <section className="py-16 md:py-20 border-b border-neutral-900/60">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5 text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Next-Gen <span className="text-[#00df89]">Product Engineering Solutions</span>
              </h2>
            </div>
            
            <div className="md:col-span-7 border-l-2 border-[#00df89]/20 pl-6 md:pl-10 text-left py-1">
              <p className="text-[14px] sm:text-[15.5px] text-white/70 leading-relaxed font-sans mb-4">
                With 14+ years of experience in product engineering services, we are confident that we can cater to diverse business requirements. We help small to large-scale businesses with custom product engineering solutions.
              </p>
              <p className="text-[14px] sm:text-[15.5px] text-white/70 leading-relaxed font-sans">
                We are known for delivering market-leading products with the best services.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE COMPASS / SERVICES ================= */}
        <section className="py-16 md:py-24 text-left border-b border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#00df89] font-semibold uppercase mb-3 block">
              PRODUCT ENGINEERING SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Our suite of Product Engineering <span className="text-[#00df89]">services</span>
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-white/50 leading-relaxed">
              With years of experience, we have gained great expertise in engineering software products that match your exact business requirements.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Card 1: Product Strategy */}
            <motion.div 
              variants={cardVariants}
              className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 hover:border-[#00df89]/30 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,223,137,0.05)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#00df89]/10 flex items-center justify-center text-[#00df89] border border-[#00df89]/25 mb-6">
                <Sparkles className="w-6 h-6 animate-[pulse_3s_infinite]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Product strategy</h3>
              <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
                A vague, unreliable, and thoughtless product strategy will result in your product failure. To make your "why you" strong for your clients over your competitors and lead to a successful product build and launch, we start with a strategic innovation that includes in-depth:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Concept briefing</span>
                </li>
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Market research</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Product Design */}
            <motion.div 
              variants={cardVariants}
              className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 hover:border-[#00df89]/30 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,223,137,0.05)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#00df89]/10 flex items-center justify-center text-[#00df89] border border-[#00df89]/25 mb-6">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Product design</h3>
              <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
                Your product design determines the reputation, failure, and success. We give special treatment to your product following the standard 5-step design process from the beginning to the final stage and create a design tailored to your product needs which your customers will love.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Scope-to-technical feasibility</span>
                </li>
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>UI Design & Prototyping</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Product Development */}
            <motion.div 
              variants={cardVariants}
              className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 hover:border-[#00df89]/30 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,223,137,0.05)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#00df89]/10 flex items-center justify-center text-[#00df89] border border-[#00df89]/25 mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Product development</h3>
              <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
                Great products succeed because they solve real problems. From making a strong strategy to building the most user-friendly design, our expert product engineers apply the system approach based on your project needs to make a product that accelerates your business efficiency and helps you outperform.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Resource and skills allocation</span>
                </li>
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Implementation roadmap</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 4: Product Delivery */}
            <motion.div 
              variants={cardVariants}
              className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 hover:border-[#00df89]/30 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,223,137,0.05)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#00df89]/10 flex items-center justify-center text-[#00df89] border border-[#00df89]/25 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Product delivery</h3>
              <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
                You need product delivery - fast, flawless, and at less cost. You deserve it. We apply the CI/CD method that involves automation, and short cycle software creation to accelerate the release and enable the development teams to cut costs and deliver you the product you expected.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Build release automation</span>
                </li>
                <li className="flex items-center gap-2.5 text-[13px] font-mono text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
                  <span>Quality delivery solution</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SECTION 4: PROGRESS TIME-BOARD/NODE FLOW ================= */}
        <section className="py-16 md:py-28 border-b border-neutral-900/60 text-center relative">
          
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#00df89] font-bold uppercase mb-3 block">
              OUR DEPLOYMENT LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
              We follow a <span className="text-[#00df89]">predefined process</span> for offering product engineering solutions
            </h2>
            <p className="text-[13.5px] text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
              Our systematic approach guarantees structured, step-by-step progress from business concept auditing down to continuous post-delivery evolution of complex systems.
            </p>
          </div>

          {/* Vertical / Alternating Chronological Interactive Timeline */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Center Vertical Track Line (drawn only on screens large enough, otherwise moved to far-left) */}
            <div className="absolute left-10 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00df89]/80 via-[#015837]/45 to-neutral-800/20" />

            <div className="space-y-12 md:space-y-16">
              {[
                { 
                  num: '01', 
                  tag: 'DISCOVERY',
                  title: 'Ideation and Conceptualization', 
                  desc: 'Detailed business requirement audits into structural feature backlogs. We map strategic goals, identify target personas, and construct key user stories to clear project unknowns.',
                  icon: <Sparkles className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '02', 
                  tag: 'BLUEPRINT',
                  title: 'Architecture and Prototyping', 
                  desc: 'Mapping system API entities, interface layouts, and rapid flow mockups. We draft functional flowcharts and technical wireframes to define robust component structures.',
                  icon: <Layers className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '03', 
                  tag: 'IMPLEMENTATION',
                  title: 'Design and Development', 
                  desc: 'Crafting responsive user pages and scalable back-ends in parallel sprints. Engineered under highly modular React frontends paired with optimized containerized microservices.',
                  icon: <Code className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '04', 
                  tag: 'VALIDATION',
                  title: 'QA and Testing', 
                  desc: 'Rigorous manual and automated testing loops covering all test matrices. End-to-end user journey checks, security unit safety scripts, and runtime speed benchmark assessments.',
                  icon: <CheckCircle2 className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '05', 
                  tag: 'PIPELINE',
                  title: 'Product Delivery', 
                  desc: 'Efficient production hosting backed by high-availability pipelines. Automated CI/CD build scripts trigger deployment routines into secure, autoscaling hybrid clouds.',
                  icon: <Globe className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '06', 
                  tag: 'OPTIMIZATION',
                  title: 'Product Support', 
                  desc: 'Immediate hotfix responses and user interactions monitoring. Collecting live user loops and interaction metrics to rapidly clear telemetry bottlenecks.',
                  icon: <MessageSquare className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '07', 
                  tag: 'REFACTORING',
                  title: 'Product Maintenance', 
                  desc: 'System configuration health reviews, security patches, and dependencies bumps. Upgrading legacy layers to sustain high compatibility scores.',
                  icon: <RefreshCw className="w-5 h-5 text-[#00df89]" />
                },
                { 
                  num: '08', 
                  tag: 'EVOLUTION',
                  title: 'Iterate Backlogs', 
                  desc: 'Repeat above lifecycle loop coverage mapping incremental features. Product backlogs adapt dynamically as system performance metrics spark fresh improvement proposals.',
                  icon: <Play className="w-5 h-5 text-[#00df89]" />
                }
              ].map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={step.num}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node Glow Dot / Badge */}
                    <motion.div 
                      initial={{ scale: 0.4, opacity: 0 }}
                      whileInView={{ 
                        scale: 1, 
                        opacity: 1,
                      }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 12,
                        delay: 0.05
                      }}
                      className="absolute left-10 md:left-1/2 -translate-x-1/2 top-4 w-10 h-10 flex items-center justify-center z-20"
                    >
                      {/* Pulse Ring Indicator */}
                      <span className="absolute inline-flex h-10 w-10 rounded-full bg-[#00df89]/20 animate-ping opacity-75" />
                      
                      {/* Perfect circular glow effect element (safe from browser boxShadow scaling bugs) */}
                      <motion.div 
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full bg-emerald-500/40 filter blur-[8px] pointer-events-none z-10"
                      />
                      
                      {/* Inner Glowing Core Dot */}
                      <div className="w-9 h-9 rounded-full bg-black border-2 border-[#00df89] flex items-center justify-center text-[11px] font-mono font-bold text-[#00df89] relative z-20 shadow-[0_0_12px_rgba(0,223,137,0.4)]">
                        {step.num}
                      </div>
                    </motion.div>

                    {/* Timeline Card Content Block */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -45 : 45, y: 15, scale: 0.94 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0, 
                        y: 0, 
                        scale: 1,
                      }}
                      viewport={{ once: true, margin: "-140px" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 75, 
                        damping: 15,
                        delay: 0.15
                      }}
                      className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                        isEven ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16 md:text-left'
                      } text-left`}
                    >
                      <div className="group bg-neutral-950/90 border border-[#00df89]/25 md:border-neutral-900 md:hover:border-[#00df89]/40 rounded-2xl p-6.5 shadow-[0_8px_32px_rgba(0,223,137,0.06)] md:shadow-none md:hover:shadow-[0_10px_45px_rgba(0,223,137,0.12)] md:bg-neutral-950/70 md:hover:bg-neutral-950 transition-all duration-300 relative overflow-hidden">
                        
                        {/* Interactive dynamic slide accent line */}
                        <div className={`absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00df89] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isEven ? 'md:right-0 md:left-auto left-0' : 'left-0'
                        }`} />

                        {/* Card Header */}
                        <div className={`flex items-center gap-3.5 mb-3.5 ${
                          isEven ? 'md:flex-row-reverse' : 'flex-row'
                        }`}>
                          <div className="w-9 h-9 rounded-lg bg-[#00df89]/10 border border-[#00df89]/20 flex items-center justify-center shrink-0">
                            {step.icon}
                          </div>
                          <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'}`}>
                            <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase font-bold">
                              {step.tag}
                            </span>
                            <h4 className="text-[16px] font-extrabold text-white font-mono tracking-wide mt-0.5">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Card Body */}
                        <p className={`text-[13px] text-white/50 leading-relaxed font-sans ${
                          isEven ? 'md:ml-auto md:max-w-[440px]' : 'md:mr-auto md:max-w-[440px]'
                        }`}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* Empty block to support alignment column offsets on large screens */}
                    <div className="hidden md:block w-1/2" />

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= SECTION 5: STATS BAR & WHY CHOOSE US ================= */}
        <section className="py-16 md:py-24 border-b border-neutral-900/60 text-left">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Why choose SpaceOn Technology for <span className="text-[#00df89]">Product engineering</span> services?
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-white/50 leading-relaxed">
              We are a preferred choice of several clients for product engineering services. Some of the top reasons to choose us are:
            </p>
          </div>

          {/* Stats Bar Component mapped horizontally */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 bg-neutral-950/60 border border-neutral-955 rounded-2xl p-6 md:p-8 mb-16 text-center">
            {[
              { val: '14+', label: 'Years of experience' },
              { val: '180+', label: 'Skilled talent' },
              { val: '750+', label: 'Project delivered' },
              { val: '92%', label: 'Client satisfaction rate' },
              { val: '40+', label: 'Clients in countries' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center p-2.5">
                <span className="text-2xl md:text-3xl font-extrabold text-[#00df89] tracking-tight block mb-1 font-mono">
                  {stat.val}
                </span>
                <span className="text-[11.5px] text-white/60 font-sans uppercase tracking-wider leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 6 Key Attributes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Innovative Approach',
                desc: 'Our team follows an innovative and forward-thinking approach for product engineering services and helps you get future-ready solutions that assist you in achieving the maximum ROI.'
              },
              {
                title: 'Experienced Team',
                desc: 'We are backed up with an experienced team of software engineers who think out of the box and come up with unique product engineering services.'
              },
              {
                title: 'Agile Methodology',
                desc: 'As we apply Agile methodologies for the projects, it fosters collaboration, flexibility and faster delivery of software products.'
              },
              {
                title: 'Transparency',
                desc: 'We maintain complete transparency with our clients and keep them informed about the progress of their project at each and every stage of development.'
              },
              {
                title: 'Scalability',
                desc: 'At SpaceOn Technology, we always keep scalability and future-proofing in our mind while building any product.'
              },
              {
                title: 'Continuous Support',
                desc: 'Our team offers exceptional support and maintenance even after the software is delivered. This ensures smooth functioning of the software at all times.'
              }
            ].map((item) => (
              <div 
                key={item.title}
                className="bg-neutral-950/40 border border-neutral-900/85 p-6.5 rounded-xl hover:border-[#00df89]/20 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="w-2 h-2 rounded-full bg-[#00df89]" />
                  <h4 className="text-[15.5px] font-extrabold text-white uppercase tracking-wide">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="mt-14 text-center">
            <button
              onClick={scrollToContact}
              className="outline-none items-center gap-2 rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer inline-flex justify-center"
            >
              <span>Build a reliable digital product</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </section>

        {/* ================= SECTION 6: INDUSTRIES WE CATER TO ================= */}
        <section className="py-16 md:py-24 border-b border-neutral-900/60 text-left">
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-3">
              Industries <span className="text-[#00df89]">we cater to</span>
            </h2>
            <p className="text-[14px] text-white/50">
              We deliver product engineering solutions to multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
            {/* Finance */}
            <div className="bg-neutral-950/70 border border-neutral-900 hover:border-[#00df89]/30 rounded-xl p-7 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#00df89]/10 border border-[#00df89]/20 flex items-center justify-center text-[#00df89] mb-5">
                <Database className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Finance</h3>
              <p className="text-[13px] text-white/50 leading-relaxed font-sans">
                Mobile wallet apps, FinTech SaaS platform, Neobank apps, and other financial app development.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-neutral-950/70 border border-neutral-900 hover:border-[#00df89]/30 rounded-xl p-7 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#00df89]/10 border border-[#00df89]/20 flex items-center justify-center text-[#00df89] mb-5">
                <Heart className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Healthcare</h3>
              <p className="text-[13px] text-white/50 leading-relaxed font-sans">
                Telemedicine app, Healthcare SaaS platform, mHealth apps, & other healthcare software development.
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-neutral-950/70 border border-neutral-900 hover:border-[#00df89]/30 rounded-xl p-7 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#00df89]/10 border border-[#00df89]/20 flex items-center justify-center text-[#00df89] mb-5">
                <Server className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Logistics</h3>
              <p className="text-[13px] text-white/50 leading-relaxed font-sans">
                Fleet management system, Warehouse management system, Yard management system and other logistics software development.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FAQS ================= */}
        <section className="py-16 md:py-24 border-b border-neutral-900/60 text-left">
          <div className="max-w-2xl mx-auto mb-14 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Frequently asked <span className="text-[#00df89]">questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={item.q}
                  className="bg-neutral-950/75 border border-neutral-900 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-neutral-900/40 transition-colors focus:outline-none"
                  >
                    <span className="text-[14.5px] font-bold text-white tracking-wide pr-5 leading-snug">
                      {item.q}
                    </span>
                    <div className={`p-1 rounded-full border border-neutral-800 flex items-center justify-center transition-all ${
                      isOpen ? 'bg-[#00df89]/10 border-[#00df89]/20 text-[#00df89]' : 'text-neutral-500'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                        <div className="px-6 pb-6 text-[13.5px] text-white/60 leading-relaxed border-t border-neutral-900/60 pt-4 font-sans">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center flex items-center justify-center gap-2">
            <span className="text-[13.5px] text-white/50">Have more questions?</span>
            <button 
              onClick={scrollToContact}
              className="text-[#00df89] hover:underline hover:text-[#00f093] text-[13.5px] font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Ask our experts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ================= SECTION 8: CONTACT US FOR PROJECT DISCUSSION ================= */}
        <section className="py-16 md:py-24" id="contact-discussion-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left Stats Indicator Column */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#00df89] font-semibold uppercase mb-3 block">
                CONTACT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                Contact Us <br />
                <span className="text-[#00df89]">for project discussion</span>
              </h2>
              <p className="text-[13.5px] text-white/50 leading-relaxed mb-10 max-w-sm">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>

              {/* Highlight Stats Blocks */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '14+', label: 'Years of Experience' },
                  { value: '180+', label: 'In-House Talent' },
                  { value: '750+', label: 'Project Delivered' },
                  { value: '92%', label: 'Client satisfaction rate' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-neutral-950/60 border border-neutral-900/40 p-4.5 rounded-xl text-left">
                    <span className="text-xl font-bold text-[#00df89] font-mono tracking-tight block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-2xl p-6.5 md:p-9.5 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-bold text-white mb-2">
                  Got a project in mind?
                </h3>
                <p className="text-[13px] text-white/50 mb-7 leading-relaxed border-b border-neutral-900 pb-5">
                  We guarantee to get back to you within a business day.
                </p>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-14 text-center"
                    >
                      <div className="w-14 h-14 bg-[#00df89]/10 text-[#00df89] border border-[#00df89]/20 rounded-full flex items-center justify-center mx-auto mb-4 scale-110">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                      <p className="text-[13px] text-white/50 max-w-sm mx-auto mt-2 leading-relaxed font-sans">
                        Thank you for reaching out {formData.name || 'friend'}. One of our senior architects will connect page routing channels on <span className="text-white/80 underline">{formData.email}</span> within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                            Your Name *
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name *"
                            className="bg-neutral-950 border-b border-neutral-800 text-white placeholder-white/30 text-[13.5px] py-2 px-1 focus:border-[#00df89] focus:outline-none transition-all tracking-wide"
                          />
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                            Your Email *
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address *"
                            className="bg-neutral-950 border-b border-neutral-800 text-white placeholder-white/30 text-[13.5px] py-2 px-1 focus:border-[#00df89] focus:outline-none transition-all tracking-wide"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                            Company Name
                          </label>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            className="bg-neutral-950 border-b border-neutral-800 text-white placeholder-white/30 text-[13.5px] py-2 px-1 focus:border-[#00df89] focus:outline-none transition-all tracking-wide"
                          />
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                            Your Phone
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 99999 99999"
                            className="bg-neutral-950 border-b border-neutral-800 text-white placeholder-white/30 text-[13.5px] py-2 px-1 focus:border-[#00df89] focus:outline-none transition-all tracking-wide"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col text-left">
                        <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                          Services *
                        </label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="bg-neutral-950 border-b border-neutral-800 text-white text-[13.5px] py-2 px-1 focus:border-[#00df89] focus:outline-none transition-all tracking-wide cursor-pointer"
                        >
                          <option value="Product Engineering">Product Engineering</option>
                          <option value="Software Development">Software Development</option>
                          <option value="Cloud & DevOps">Cloud & DevOps</option>
                          <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
                        </select>
                      </div>

                      <div className="flex flex-col text-left">
                        <label className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 font-semibold">
                          How can we help? *
                        </label>
                        <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Message *"
                          className="bg-neutral-950 border border-neutral-800 text-white placeholder-white/30 text-[13.5px] py-3 px-4 rounded-xl focus:border-[#00df89] focus:outline-none transition-all tracking-wide resize-none"
                        />
                      </div>

                      <div className="pt-2 text-right">
                        <button
                          type="submit"
                          className="w-full sm:w-auto outline-none rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-11 py-4 text-[13.5px] tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(0,223,137,0.2)] hover:shadow-[0_0_30px_rgba(0,223,137,0.45)] cursor-pointer text-center inline-flex items-center justify-center gap-2"
                        >
                          <span>Submit</span>
                          <CheckCircle2 className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
