import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, HelpCircle, Bot, Sparkles, Cpu, Code, ChevronRight, Globe, Layers, Smartphone, Palette, Server, Coffee, Briefcase, GraduationCap, DollarSign, Activity, FileText, Zap, ArrowRight, Shield } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  onNavigate: (sectionId: string) => void;
  onViewServiceDetail?: (serviceId: string) => void;
}

interface DropdownItem {
  title: string;
  description: string;
  target?: string;
  serviceId?: string;
}

interface DropdownCategory {
  label: string;
  items: DropdownItem[];
}

interface AiTabContent {
  id: string;
  title: string;
  headerTitle: string;
  col1: string[];
  col2: string[];
  footerLinks: string[];
}

const aiMegaData: AiTabContent[] = [
  {
    id: 'ai-dev',
    title: 'AI Development',
    headerTitle: 'AI Development Services',
    col1: [
      'Hire AI Developers',
      'AI Development Services',
      'AI Consulting',
      'AI Integration',
      'AI Software Development',
      'LLM Development',
      'AI Chatbot Development',
    ],
    col2: [
      'Generative AI Development',
      'Machine Learning Development',
      'Retrieval Augmented Generation (RAG)',
      'Build Prompt Chaining AI',
      'Computer Vision Development',
      'AIOps & MLOps Development',
      'AI Mobile App Development'
    ],
    footerLinks: ['All AI Development Services', 'Hire AI Developers']
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    headerTitle: 'AI-Powered Solutions',
    col1: [
      'Cognitive Agent Workflows',
      'Predictive Risk Engine',
      'Sentiment Analysis Suite',
      'Real-time OCR Systems'
    ],
    col2: [
      'Document Intelligent Processing',
      'Personalization Recommendation Engine',
      'Enterprise Robotic Automation (RPA)'
    ],
    footerLinks: ['View All AI Solutions', 'Request Custom Sandbox Case']
  },
  {
    id: 'ai-smb',
    title: 'AI for SMBs',
    headerTitle: 'AI for SMBs Services',
    col1: [
      'Low-overhead Model Tuning',
      'No-code AI Pipeline Setup',
      'Autonomous Sales Representatives'
    ],
    col2: [
      'E-commerce Smart Cataloging',
      'Customer Support Chatbots',
      'SMB Analytics & Telemetry'
    ],
    footerLinks: ['SMB Scale Guide', 'Book AI Audit']
  },
  {
    id: 'ai-augmented',
    title: 'AI-Augmented Developer',
    headerTitle: 'AI-Augmented Developer Platforms & Tooling',
    col1: [
      'Bespoke Copilot Integrations',
      'Linter Agent Scripting',
      'Autonomous Unit Test Generators'
    ],
    col2: [
      'CI/CD Telemetry AI Agents',
      'Legacy Code Modernizer',
      'Sovereign Repository Audits'
    ],
    footerLinks: ['Sovereign Dev Specs', 'Explore Core Stack']
  }
];

const dropdownData: Record<string, DropdownCategory> = {
  ai: {
    label: 'AI',
    items: [
      { 
        title: 'AI & LLM Orchestration', 
        description: 'Advanced agent pipelines and local vector embeddings.',
        serviceId: 'ai-automation'
      },
      { 
        title: 'Cognitive Agent Systems', 
        description: 'Autonomous computer-use script loops scaling businesses.',
        target: 'services'
      },
      { 
        title: 'Vector Search & RAG DBs', 
        description: 'Retrieval systems with semantic mapping mechanics.',
        target: 'services'
      },
      {
        title: 'Hire AI Developers',
        description: 'Vetted AI engineers ready for dynamic development scaffolding.',
        serviceId: 'hire-ai-devs'
      }
    ]
  },
  services: {
    label: 'Services',
    items: [
      { 
        title: 'Web Software Engineering', 
        description: 'Edge-runtime rendered next-gen SPA/SSR applications.',
        serviceId: 'web-dev'
      },
      { 
        title: 'Enterprise SaaS Engines', 
        description: 'Multitenant payment vaults & deep billing systems.',
        serviceId: 'saas-dev'
      },
      { 
        title: 'Sovereign Mobile Apps', 
        description: 'React Native & Flutter high FPS cross-platform platforms.',
        serviceId: 'mobile-app'
      },
      { 
        title: 'Premium UX Design Systems', 
        description: 'Highly emotional, bespoke, motion-guided interfaces.',
        serviceId: 'ui-ux'
      },
      { 
        title: 'Cloud & Kubernetes DevOps', 
        description: 'Autoscaling Kubernetes clusters & Prometheus telemetry.',
        serviceId: 'cloud-devops'
      }
    ]
  },
  technologies: {
    label: 'Technologies',
    items: [
      { 
        title: 'Java Ecosystem Platforms', 
        description: 'Secure, multi-thread enterprise JVM engines.',
        target: 'technologies'
      },
      { 
        title: 'React Native Blueprint', 
        description: 'Native haptic response & device API integrations.',
        target: 'technologies'
      },
      { 
        title: 'PHP & WordPress Commerce', 
        description: 'Optimized transaction panels & managed blogging.',
        target: 'technologies'
      },
      { 
        title: 'Moodle LMS Frameworks', 
        description: 'Custom university learning management & corporate training.',
        target: 'technologies'
      }
    ]
  },
  industries: {
    label: 'Industries',
    items: [
      { 
        title: 'Corporate E-Learning', 
        description: 'Integrated digital learning modules & progress dashboards.',
        target: 'technologies'
      },
      { 
        title: 'Financial Portals', 
        description: 'PCI-DSS compliant routes & transaction ledger networks.',
        target: 'services'
      },
      { 
        title: 'Logistics Pipelines', 
        description: 'Real-time asset telemetry tracking & cloud inventory.',
        target: 'services'
      },
      { 
        title: 'Audited Healthcare Tech', 
        description: 'Secure data vaults strictly compliant with global regulations.',
        target: 'services'
      }
    ]
  },
  resources: {
    label: 'Resources',
    items: [
      { 
        title: 'Verified Project Showcase', 
        description: 'Continuous validation check for active systems.',
        target: 'projects'
      },
      { 
        title: 'Engineering Chronicles', 
        description: 'Architecture theses & technical study insights.',
        target: 'insights'
      },
      { 
        title: 'Interactive Live Sandbox', 
        description: 'Playground to test and check network latency nodes.',
        target: 'services'
      }
    ]
  }
};

export default function Navbar({ onStartProject, onNavigate, onViewServiceDetail }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeAiTab, setActiveAiTab] = useState('ai-dev');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (item: DropdownItem) => {
    if (item.serviceId && onViewServiceDetail) {
      onViewServiceDetail(item.serviceId);
    } else if (item.target) {
      onNavigate(item.target);
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileCategory = (catKey: string) => {
    if (expandedMobileCategory === catKey) {
      setExpandedMobileCategory(null);
    } else {
      setExpandedMobileCategory(catKey);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[84px] z-50 flex items-center justify-between px-5 md:px-[60px] lg:px-[100px]">
      {/* Cinematic glassmorphic background layer */}
      <div 
        className="absolute inset-0 -z-20 border-b"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled ? 'blur(24px) saturate(120%)' : 'blur(0px) saturate(100%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(120%)' : 'blur(0px) saturate(100%)',
          borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
          opacity: isScrolled ? 1 : 0.85,
          transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Subtle top gradient overlay to maximize contrast */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black/50 to-transparent pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Official Logo aligned perfectly */}
        <div 
          onClick={() => {
            onNavigate('home');
            setActiveDropdown(null);
          }} 
          className="flex items-center cursor-pointer select-none mr-8 lg:mr-16"
          id="logo-brand"
          style={{
            filter: isScrolled 
              ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.15))' 
              : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.02))',
            transition: 'filter 500ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src="https://patelarsh.com/SpaceOn%20Logo/Light.png" 
            alt="SPACEON" 
            className="h-[42px] md:h-[46px] w-auto object-contain hover:opacity-95 transition-all duration-300 transform active:scale-98"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Section: Centered Navigation links with premium interactive drop-down cards */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 h-full" id="desktop-nav">
          {Object.entries(dropdownData).map(([key, category]) => {
            const isDropdownActive = activeDropdown === key;
            
            if (key === 'ai') {
              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-white/90 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 hover:text-white focus:outline-none cursor-pointer group"
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    
                    {/* Real-time beautiful green Down Chevron matching screenshot model */}
                    <ChevronDown 
                      className={`w-3.5 h-3.5 text-emerald-500 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110' : 'rotate-0'
                      }`} 
                    />
                  </button>

                  {/* HIGH LEGIBILITY EXQUISITE MEGA-DROPDOWN AS REQUESTED BY USER */}
                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full -left-[140px] lg:-left-[240px] mt-1 w-[800px] lg:w-[880px] bg-neutral-950/98 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-3xl z-50 flex flex-col"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="flex min-h-[360px]">
                          {/* LEFT TABS SIDEBAR */}
                          <div className="w-[250px] bg-[#070707]/90 border-r border-white/5 p-4 flex flex-col gap-2">
                            {aiMegaData.map((tab) => {
                              const isActive = activeAiTab === tab.id;
                              
                              let IconComponent = Bot;
                              if (tab.id === 'ai-solutions') IconComponent = Sparkles;
                              if (tab.id === 'ai-smb') IconComponent = Cpu;
                              if (tab.id === 'ai-augmented') IconComponent = Code;

                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => setActiveAiTab(tab.id)}
                                  onMouseEnter={() => setActiveAiTab(tab.id)}
                                  className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 text-left ${
                                    isActive 
                                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                                      : 'border border-transparent hover:bg-white/[0.03] text-white/60 hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-lg transition-colors ${
                                      isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/40'
                                    }`}>
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <span className="text-[14px] font-bold tracking-wide">
                                      {tab.title}
                                    </span>
                                  </div>
                                  
                                  {isActive && (
                                    <ChevronRight className="w-4 h-4 text-emerald-400" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* RIGHT LINKS GRID */}
                          <div className="flex-1 p-7 flex flex-col justify-between bg-black/40">
                            <div>
                              {(() => {
                                const currentTab = aiMegaData.find(t => t.id === activeAiTab) || aiMegaData[0];
                                let HeadingIcon = Bot;
                                if (currentTab.id === 'ai-solutions') HeadingIcon = Sparkles;
                                if (currentTab.id === 'ai-smb') HeadingIcon = Cpu;
                                if (currentTab.id === 'ai-augmented') HeadingIcon = Code;

                                return (
                                  <>
                                    {/* Sub-Header matching screenshot styling */}
                                    <div className="flex items-center gap-2.5 mb-6 border-b border-white/5 pb-4">
                                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                                        <HeadingIcon className="w-4 h-4" />
                                      </div>
                                      <h3 className="text-[15px] font-extrabold text-white tracking-wide uppercase font-mono">
                                        {currentTab.headerTitle}
                                      </h3>
                                    </div>

                                    {/* Links Split Columns */}
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                                      <div className="flex flex-col gap-2">
                                        {currentTab.col1.map((link) => (
                                          <button
                                            key={link}
                                            type="button"
                                            onClick={() => {
                                              if (link === 'Hire AI Developers' && onViewServiceDetail) {
                                                onViewServiceDetail('hire-ai-devs');
                                              } else {
                                                onStartProject();
                                              }
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-white/70 hover:text-emerald-400 text-[13.5px] font-semibold transition-all duration-200 tracking-wide hover:translate-x-1"
                                          >
                                            {link}
                                          </button>
                                        ))}
                                      </div>
                                      <div className="flex flex-col gap-2">
                                        {currentTab.col2.map((link) => (
                                          <button
                                            key={link}
                                            type="button"
                                            onClick={() => {
                                              if (link === 'Hire AI Developers' && onViewServiceDetail) {
                                                onViewServiceDetail('hire-ai-devs');
                                              } else {
                                                onStartProject();
                                              }
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-white/70 hover:text-emerald-400 text-[13.5px] font-semibold transition-all duration-200 tracking-wide hover:translate-x-1"
                                          >
                                            {link}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            {/* Custom Action footer bar: "All AI Development Services | Hire AI Developers" */}
                            {(() => {
                              const currentTab = aiMegaData.find(t => t.id === activeAiTab) || aiMegaData[0];
                              return (
                                <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/40">
                                  {currentTab.footerLinks.map((flink, fidx) => (
                                    <React.Fragment key={flink}>
                                      {fidx > 0 && <span className="mx-2 text-white/10">|</span>}
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (flink === 'Hire AI Developers' && onViewServiceDetail) {
                                            onViewServiceDetail('hire-ai-devs');
                                          } else {
                                            onStartProject();
                                          }
                                          setActiveDropdown(null);
                                        }}
                                        className="hover:text-emerald-400 transition-colors cursor-pointer font-extrabold"
                                      >
                                        {flink}
                                      </button>
                                    </React.Fragment>
                                  ))}
                                </div>
                              );
                            })()}
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Custom mega rendering for other categories
            let widthClass = "w-[650px]";
            let leftTitle = "";
            let leftDesc = "";
            let leftBadge = "";
            let LeftIcon = Code;
            
            if (key === 'services') {
              widthClass = "w-[690px]";
              leftTitle = "SYSTEMS WORKSHOP";
              leftDesc = "High-velocity client workflows built on top tier runtime safety models.";
              leftBadge = "PRODUCTION READY";
              LeftIcon = Layers;
            } else if (key === 'technologies') {
              widthClass = "w-[670px]";
              leftTitle = "RUNTIME CODES";
              leftDesc = "Engineered for thread safety and low latency computing nodes.";
              leftBadge = "STACK 2026";
              LeftIcon = Cpu;
            } else if (key === 'industries') {
              widthClass = "w-[670px]";
              leftTitle = "REGULATORY SHEETS";
              leftDesc = "Secure data routes satisfying global PCI-DSS and SOC2 auditing.";
              leftBadge = "COMPLIANCE CHECK";
              LeftIcon = Shield;
            } else if (key === 'resources') {
              widthClass = "w-[640px]";
              leftTitle = "CHRONICLE HUB";
              leftDesc = "Original research parameters, runtime benchmark audits, and telemetry boards.";
              leftBadge = "OPEN RESOURCE";
              LeftIcon = FileText;
            }

            // We can match item icons
            const getItemIcon = (titleStr: string) => {
              const lower = titleStr.toLowerCase();
              if (lower.includes('web') || lower.includes('wordpress')) return Globe;
              if (lower.includes('saas') || lower.includes('portal')) return Layers;
              if (lower.includes('mobile') || lower.includes('react native')) return Smartphone;
              if (lower.includes('design') || lower.includes('ux')) return Palette;
              if (lower.includes('cloud') || lower.includes('kubernetes') || lower.includes('logistics')) return Server;
              if (lower.includes('java')) return Coffee;
              if (lower.includes('learning') || lower.includes('moodle') || lower.includes('e-learning')) return GraduationCap;
              if (lower.includes('financial')) return DollarSign;
              if (lower.includes('healthcare') || lower.includes('sandbox')) return Activity;
              if (lower.includes('chronicles') || lower.includes('showcase')) return FileText;
              return Code;
            };

            const getItemBadge = (titleStr: string) => {
              const lower = titleStr.toLowerCase();
              if (lower.includes('saas')) return 'PCI COMP';
              if (lower.includes('healthcare')) return 'HIPAA';
              if (lower.includes('financial')) return 'LEDGER';
              if (lower.includes('sandbox')) return 'LATENCY';
              if (lower.includes('web')) return 'SSR EDGE';
              if (lower.includes('moodle') || lower.includes('learning')) return 'SCORM';
              if (lower.includes('java')) return 'LTS 21';
              return null;
            };

            return (
              <div
                key={key}
                className="relative py-6"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-white/90 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 hover:text-white focus:outline-none cursor-pointer group"
                >
                  <span className="relative">
                    {category.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                  
                  {/* Real-time beautiful green Down Chevron matching screenshot model */}
                  <ChevronDown 
                    className={`w-3.5 h-3.5 text-emerald-500 transition-transform duration-300 ${
                      isDropdownActive ? 'rotate-180 scale-110' : 'rotate-0'
                    }`} 
                  />
                </button>

                {/* Exquisite custom drop-down card layout panel */}
                <AnimatePresence>
                  {isDropdownActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute top-full -left-[140px] mt-1 ${widthClass} bg-neutral-950/98 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-3xl z-50 flex`}
                    >
                      <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />
                      
                      {/* Left Highlight sidebar */}
                      <div className="w-[210px] bg-[#070707]/90 border-r border-white/5 p-5 flex flex-col justify-between select-none">
                        <div>
                          <span className="text-[9px] font-mono tracking-[0.15em] text-emerald-400 font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase">
                            {leftBadge}
                          </span>
                          <div className="mt-4 flex items-center gap-2 text-white">
                            <LeftIcon className="w-4 h-4 text-emerald-400" />
                            <h4 className="text-[12px] font-extrabold uppercase tracking-wider font-mono">
                              {leftTitle}
                            </h4>
                          </div>
                          <p className="text-[11.5px] text-white/50 leading-relaxed mt-2.5 tracking-wide">
                            {leftDesc}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={onStartProject}
                          className="mt-6 flex items-center gap-1.5 text-[11.5px] font-mono font-bold text-emerald-400 hover:text-white transition-colors text-left"
                        >
                          <span>System specs</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5" />
                        </button>
                      </div>

                      {/* Right Sub-item list */}
                      <div className="flex-1 p-5 grid grid-cols-2 gap-2.5 bg-black/40">
                        {category.items.map((item) => {
                          const ItemIcon = getItemIcon(item.title);
                          const badge = getItemBadge(item.title);
                          const isSandbox = item.title.toLowerCase().includes('sandbox');

                          return (
                            <div
                              key={item.title}
                              onClick={() => handleItemClick(item)}
                              className="p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all duration-300 cursor-pointer group/item flex items-start gap-3"
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 text-white/50 group-hover/item:bg-emerald-500/10 group-hover/item:text-emerald-400 transition-all mt-0.5">
                                <ItemIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <h4 className="text-[13.5px] font-bold text-white group-hover/item:text-emerald-400 transition-colors tracking-wide">
                                    {item.title}
                                  </h4>
                                  
                                  {/* Pulse dot for Live Sandbox */}
                                  {isSandbox && (
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                  )}

                                  {badge && (
                                    <span className="text-[8px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 uppercase tracking-widest scale-90 origin-left">
                                      {badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-white/40 tracking-wide mt-1 leading-normal group-hover/item:text-white/60 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Section: Request Quote button matching exactly with the user design request */}
        <div className="flex items-center gap-5">
          <button
            onClick={onStartProject}
            className="hidden sm:inline-block rounded-full border border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold px-7 py-2.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.03] active:scale-98 cursor-pointer text-center"
            id="start-project-btn"
          >
            Request Quote
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-white/10 z-50 cursor-pointer"
            aria-label="Toggle navigation menu"
            id="mobile-hamburger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 animate-pulse" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer with nested accordion controls representing full touch responsiveness */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full sm:w-[350px] bg-black/98 border-l border-white/10 z-40 p-6 pt-24 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase border-b border-white/5 pb-2">
                Enterprise Navigation Modules
              </p>
              
              <div className="flex flex-col gap-2">
                {Object.entries(dropdownData).map(([key, category]) => {
                  const isExpanded = expandedMobileCategory === key;
                  return (
                    <div key={key} className="border-b border-white/5 pb-2">
                      <button
                        onClick={() => toggleMobileCategory(key)}
                        className="w-full py-3 flex items-center justify-between text-white font-bold text-[16px] text-left hover:text-emerald-400 transition-colors focus:outline-none cursor-pointer"
                      >
                        <span>{category.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>

                      {/* Accordion expansion items */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-3 flex flex-col gap-2"
                          >
                            {category.items.map((subItem) => (
                              <button
                                key={subItem.title}
                                onClick={() => handleItemClick(subItem)}
                                className="w-full py-2 text-left text-white/60 hover:text-white transition-colors text-[13.5px] font-semibold flex flex-col gap-0.5"
                              >
                                <span className="text-emerald-400 font-bold">{subItem.title}</span>
                                <span className="text-[11px] text-white/40 font-medium leading-relaxed">{subItem.description}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <button
                onClick={() => {
                  onStartProject();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center rounded-full border border-emerald-500 bg-emerald-500/15 text-emerald-400 py-3 text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all cursor-pointer"
              >
                Request Quote
              </button>
              <p className="text-[10px] text-white/20 text-center font-mono uppercase tracking-[0.1em]">
                SPACEON DIGITAL CO &middot; SOVEREIGN SYSTEM MESH
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
