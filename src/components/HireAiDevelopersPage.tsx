import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Check, ChevronDown, ChevronUp, Bot, Cpu, Sparkles, 
  Code, Shield, Layers, Calendar, Terminal, ArrowRight, Zap, Play,
  Globe, Database, Server, Smartphone, Monitor, AlertCircle, RefreshCw, BarChart2,
  ClipboardCheck, PenTool, Bug, CloudUpload
} from 'lucide-react';
import ScrollGlassReveal from './ScrollGlassReveal';

interface HireAiPageProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

export default function HireAiDevelopersPage({ onBack, onBookConsultation }: HireAiPageProps) {
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scrolling progressive step timeline active index state
  const [activeStep, setActiveStep] = useState<number>(0);

  // Tech stack structure
  const techStackData = [
    { 
      category: 'Data Storage', 
      items: [
        { name: 'MySQL', icon: Database, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }, 
        { name: 'AWS S3', icon: Server, logo: 'https://cdn.simpleicons.org/amazons3/FF9900' }
      ] 
    },
    { 
      category: 'Data Processing', 
      items: [
        { name: 'Kafka', icon: Cpu, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' }
      ] 
    },
    { 
      category: 'Machine Learning Framework', 
      items: [
        { name: 'AWS TensorFlow', icon: Code, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' }, 
        { name: 'AWS PyTorch', icon: Sparkles, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' }
      ] 
    },
    { 
      category: 'Natural Language Processing', 
      items: [
        { name: 'Amazon Comprehend', icon: Bot, logo: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' }
      ] 
    },
    { 
      category: 'Model Serving', 
      items: [
        { name: 'Amazon SageMaker', icon: Layers, logo: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' }
      ] 
    },
    { 
      category: 'LLM', 
      items: [
        { name: 'OpenAI', icon: Zap, logo: 'https://cdn.simpleicons.org/openai/white' }
      ] 
    },
    { 
      category: 'APIS', 
      items: [
        { name: 'Python', icon: Code, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ] 
    },
    { 
      category: 'Monitoring', 
      items: [
        { name: 'Prometheus', icon: BarChart2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' }, 
        { name: 'Grafana', icon: Monitor, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' }
      ] 
    },
    { 
      category: 'CI/CD', 
      items: [
        { name: 'GitHub', icon: Globe, logo: 'https://cdn.simpleicons.org/github/white' }, 
        { name: 'Bitbucket', icon: Shield, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' }, 
        { name: 'AWS', icon: Server, logo: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' }
      ] 
    },
    { 
      category: 'Containerization', 
      items: [
        { name: 'Docker', icon: Layers, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }, 
        { name: 'Kubernetes', icon: Cpu, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
      ] 
    },
    { 
      category: 'Microservice', 
      items: [
        { name: 'Flask', icon: Code, logo: 'https://cdn.simpleicons.org/flask/white' }
      ] 
    }
  ];

  // Highlights / Outperform Matrix
  const outperformData = [
    {
      criteria: 'Expertise',
      spaceOn: 'Pre-vetted in ML, NLP, CV, MLOps & GenAI',
      inhouse: 'Varies; frequent upskilling needed',
      freelancers: 'Generalists; limited deep AI knowledge'
    },
    {
      criteria: 'Scalability',
      spaceOn: 'Scale instantly—no hiring delays',
      inhouse: 'Slow scaling due to hiring cycles',
      freelancers: 'Limited by individual capacity'
    },
    {
      criteria: 'Hiring Speed',
      spaceOn: 'Onboard in 48 hours',
      inhouse: '4-8 weeks',
      freelancers: '1-2 weeks with risk'
    },
    {
      criteria: 'Delivery Speed',
      spaceOn: 'Fast prototyping & CI/CD',
      inhouse: 'Slower due to process overhead',
      freelancers: 'Inconsistent; depends on availability'
    },
    {
      criteria: 'Reliability',
      spaceOn: 'Dedicated, managed AI teams',
      inhouse: 'Reliable but costly and less AI-focused',
      freelancers: 'Unpredictable commitment'
    },
    {
      criteria: 'Tool Access',
      spaceOn: 'Access to enterprise AI tools',
      inhouse: 'Needs internal purchase/setup',
      freelancers: 'Mostly open-source or personal tools'
    },
    {
      criteria: 'Cost Efficiency',
      spaceOn: 'Up to 40% savings vs local hires',
      inhouse: 'High fixed costs',
      freelancers: 'Cheaper, but inconsistent quality'
    },
    {
      criteria: 'Security',
      spaceOn: 'Strict NDAs, secure environments, AI compliance',
      inhouse: 'Controlled but may lack AI-specific safeguards',
      freelancers: 'High IP & data risks'
    }
  ];

  // Why us cards (India who deliver AI right / general outsource benefits)
  const deliveryBenefits = [
    {
      title: 'Quick hiring process',
      desc: 'Interview and hire vetted AI experts within 48 hours. Browse portfolios tailored to ML, NLP, or computer vision skills.'
    },
    {
      title: 'Cost savings',
      desc: 'Cut up to 40% on engineering costs while gaining access to world-class AI talent.'
    },
    {
      title: 'Fast AI delivery',
      desc: 'Our engineers utilise pretrained models, transfer learning, and optimization tools to accelerate AI delivery.'
    },
    {
      title: 'Time-zone flexibility',
      desc: 'Hire AI talent across global zones. Enjoy seamless sync-ups regardless of your location.'
    },
    {
      title: 'Daily progress reports',
      desc: 'Get clear, structured reports on model training, validation, testing, and deployment updates.'
    },
    {
      title: 'Simple contracts',
      desc: 'Transparent agreements built for clarity and trust, just like our AI development approach.'
    },
    {
      title: 'Access to top talent pool',
      desc: '180+ pre-screened AI specialists, including TensorFlow experts, vision scientists, and MLOps engineers.'
    },
    {
      title: 'Easy replacement',
      desc: 'Switch resources fast with minimal delay. Your AI project momentum stays uninterrupted.'
    }
  ];

  // Steps
  const steps = [
    {
      step: 'STEP 1',
      title: 'Requirement analysis',
      desc: 'Gathering and analyzing your project requirements to understand your goals and objectives.',
      icon: ClipboardCheck
    },
    {
      step: 'STEP 2',
      title: 'Wireframing & design',
      desc: 'Creating detailed wireframes and designing the user interface, focusing on user experience and functionality.',
      icon: PenTool
    },
    {
      step: 'STEP 3',
      title: 'Programming & development',
      desc: 'Developing applications using AI best practices, coding standards, and efficient algorithms.',
      icon: Code
    },
    {
      step: 'STEP 4',
      title: 'Testing & debugging',
      desc: 'Rigorously testing and debugging the AI application to identify any issues to meet quality standards and functions smoothly before deployment.',
      icon: Bug
    },
    {
      step: 'STEP 5',
      title: 'Deployment & maintenance',
      desc: 'Deploying applications in the production environment and offering ongoing maintenance and support.',
      icon: CloudUpload
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'How do I hire remote AI developers with SpaceOn Technology?',
      a: 'Share your needs, and we\'ll match you with pre-vetted AI developers ready to join your team fast and hassle-free.'
    },
    {
      q: 'What AI skills do your developers have?',
      a: 'Our developers possess world-class expertise ranging from Custom Large Language Models (LLMs), Computer Vision, Sentiment Analytics, Prompt Engineering, MLOps orchestration, Vector databases, to predictive reinforcement learning.'
    },
    {
      q: 'Can your AI developer for hire work with our in-house team?',
      a: 'Absolutely. We offer flexible integration parameters for collaborative developer alignment, fitting directly into your Git branches, Slack channels, and Agile sprints.'
    },
    {
      q: 'How quickly can we onboard?',
      a: 'We can arrange developer interviews and complete onboarding setup inside 48 hours for immediate project injection.'
    },
    {
      q: 'What hiring models do you offer?',
      a: 'We offer full staff augmentation, dedicated multi-engineer agile teams, and fixed-scope software project outsourcing options.'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-x-hidden font-sans pt-[84px]">
      
      {/* Hero Banner Container with custom background webp banner image */}
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
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO SOVEREIGN SUITE</span>
          </button>

          <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/80 uppercase px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            PRE-VETTED TALENT &middot; ONLINE
          </span>
        </div>

        {/* SECTION 1: HERO CONTAINER (Seamless & Clean Layout matching original design) */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-24 relative z-10 !overflow-visible">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-emerald-400 font-extrabold uppercase mb-4">
                HIRE AI DEVELOPERS & ENGINEERS
              </span>
              <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                Hire <span className="text-emerald-400">vetted AI developers</span> to engineer your vision
              </h1>
              <p className="text-[14px] md:text-[16px] text-white/70 max-w-[550px] leading-relaxed mb-8">
                Whether you're looking to build smarter apps, automate decisions, or analyze large data sets, hire AI experts from us to cut development time, reduce errors, and launch AI-powered products with confidence.
              </p>
              <button
                onClick={() => onBookConsultation("Hire AI Talent Pipeline Request")}
                className="rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-extrabold px-10 py-4 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] cursor-pointer"
              >
                Get AI talent now
              </button>
            </div>

            {/* High resolution original AI Developers Banner asset on right-side */}
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
                  alt="Intellectual AI Node Core Graphic" 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* SECTION 2: AWARDS & ACCOLADES */}
      <section className="bg-[#0A0A0A] text-white py-20 border-y border-white/5 relative overflow-hidden">
        {/* Glow node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] text-center relative z-10">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white animate-fade-in">
            <span className="text-emerald-400">Awards & accolades</span> we’re proud of
          </h2>
          <p className="text-white/60 text-[14px] md:text-[15px] max-w-[650px] mx-auto mt-3 leading-relaxed">
            See how we've helped businesses grow with our innovative app solutions crafted by our expert mobile developers.
          </p>
 
          {/* Elegant light grid listing the exact key brands from screen model */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            
            {[
              { 
                name: 'Clutch', 
                desc: 'Top AI Developers',
                logoUrl: 'https://s3-us-west-1.amazonaws.com/upload.comparably.com/949487/companies/949487/logo_1659447060103.jpg',
                isRound: true
              },
              { name: 'siliconindia', desc: 'Global Brand Partner' },
              { 
                name: 'GoodFirms', 
                desc: 'Highest Rated agency',
                logoUrl: 'https://images.g2crowd.com/uploads/product/image/18db0bd428eb8a49504c41e748e50b35/goodfirms.png'
              },
              { name: 'appfutura', desc: 'Certified Tech Force' },
              { name: 'EXTRACT', desc: 'Audited Delivery Hub' },
              { name: 'Forbes', desc: 'Featured Innovation' },
              { 
                name: 'Clutch Badge', 
                desc: 'Continuous Excellence',
                logoUrl: 'https://s3-us-west-1.amazonaws.com/upload.comparably.com/949487/companies/949487/logo_1659447060103.jpg',
                isRound: true
              },
              { 
                name: 'Clutch Medal', 
                desc: 'Elite Staffing 2026',
                logoUrl: 'https://s3-us-west-1.amazonaws.com/upload.comparably.com/949487/companies/949487/logo_1659447060103.jpg',
                isRound: true
              },
              { 
                name: 'GoodFirms Medal', 
                desc: 'Verified Top Firm',
                logoUrl: 'https://images.g2crowd.com/uploads/product/image/18db0bd428eb8a49504c41e748e50b35/goodfirms.png'
              },
              { name: 'TOP APP CREATORS', desc: 'Sovereign Solutions' }
            ].map((award, index) => (
              <div 
                key={index} 
                className="bg-[#111111] border border-white/5 rounded-xl p-5 hover:bg-neutral-900/95 hover:border-emerald-500/20 transition-all duration-300 flex flex-col items-center justify-center shadow-md select-none group min-h-[140px]"
              >
                {award.logoUrl ? (
                  <div className={`w-9 h-9 mb-2.5 bg-white flex items-center justify-center p-1 border border-white/10 ${award.isRound ? 'rounded-full' : 'rounded-lg'} overflow-hidden shrink-0`}>
                    <img 
                      src={award.logoUrl} 
                      alt={award.name} 
                      className={`w-full h-full ${award.isRound ? 'object-cover' : 'object-contain'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : null}
                <span className="text-[14px] md:text-[15px] font-extrabold tracking-tight text-white font-mono group-hover:text-emerald-450 transition-colors text-center">
                  {award.name}
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1.5 font-semibold text-center leading-normal group-hover:text-white/70 transition-colors">
                  {award.desc}
                </span>
              </div>
            ))}
 
          </div>
        </div>
      </section>

      {/* SECTION 3: TECH STACK EXPERTISE GRID */}
      <section className="bg-[#000000] py-24 border-b border-white/5 relative">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[150px] bg-emerald-500/2 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white">
            Our <span className="text-emerald-400">advanced AI tech stack</span> expertise
          </h2>
          <p className="text-white/50 text-[14px] md:text-[15px] max-w-[650px] mt-3 leading-relaxed mb-12">
            From deep learning to generative AI, you can hire AI & ML developers from us fluent in the technologies that shape tomorrow.
          </p>

          {/* Table-like row layout matching Screenshot 3 exactly */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/40">
            {techStackData.map((row, idx) => (
              <div 
                key={row.category}
                className={`flex flex-col md:flex-row md:items-center border-b border-white/5 last:border-b-0 p-5 md:p-6 transition-colors hover:bg-white/[0.02] ${
                  idx % 2 === 0 ? 'bg-black/20' : ''
                }`}
              >
                <div className="w-full md:w-[280px] lg:w-[320px] pb-3 md:pb-0 font-bold text-[14px] md:text-[15px] tracking-wide text-white/90 font-mono">
                  {row.category}
                </div>
                
                <div className="flex-1 flex flex-wrap gap-2.5">
                  {row.items.map((item, idy) => {
                    const ItemIcon = item.icon;
                    return (
                      <span 
                        key={idy}
                        className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-full py-1.5 px-4.5 text-[12.5px] font-semibold tracking-wide text-white/80 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_15px_rgba(16,185,129,0.15)] group"
                      >
                        {item.logo ? (
                          <img 
                            src={item.logo} 
                            alt={`${item.name} logo`}
                            className="w-4 h-4 object-contain filter group-hover:scale-110 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <ItemIcon className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                        <span>{item.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HIRE AI DEVELOPERS WHO DELIVER AI RIGHT */}
      <section className="py-24 border-b border-white/5 bg-[#080808]/40 relative">
        <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[150px] bg-emerald-500/1.5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h2 className="text-[32px] md:text-[42px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              Hire AI developers India <span className="text-emerald-400">who deliver AI right</span>
            </h2>
            <p className="text-[13.5px] md:text-[14.5px] text-white/60 leading-relaxed max-w-[340px]">
              Hire AI app developers who aren’t just coders but engineers who can solve your toughest automation challenges with their expertise.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliveryBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900/60 border border-white/5 hover:border-emerald-500/25 p-6 rounded-2xl hover:bg-neutral-900/90 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-4 border border-emerald-500/10">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h4 className="text-[15px] font-extrabold text-white group-hover:text-emerald-400 transition-colors tracking-wide mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[12.5px] text-white/50 group-hover:text-white/75 transition-colors leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: 5 STEPS TIMELINE */}
      <section className="py-24 bg-[#000000] border-b border-white/5 relative overflow-hidden">
        {/* Subtle decorative brand green glow node */}
        <div className="absolute top-[15%] left-[20%] w-[550px] h-[180px] bg-emerald-500/3 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start py-2">
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-tight text-white mb-6">
              Hire Artificial Intelligence <span className="text-emerald-400">developers & engineers</span> in just 5 steps
            </h2>
            <p className="text-[14px] text-white/60 leading-relaxed mb-8 max-w-[420px]">
              From requirement gathering to onboarding, hire dedicated AI developers from us to get quick and seamless hiring.
            </p>
          </div>

          <div className="lg:col-span-7 relative">
            
            <div className="space-y-12">
              {steps.map((item, idx) => {
                const StepIcon = item.icon;
                const isLast = idx === steps.length - 1;
                const isActive = activeStep >= idx;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0.2, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35, margin: "-10% 0px" }}
                    onViewportEnter={() => {
                      setActiveStep(current => Math.max(current, idx));
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative group pl-16 min-h-[140px]"
                  >
                    
                    {/* Responsive Line Connector */}
                    {!isLast ? (
                      // Middle step connector: base background + green filled progressive line
                      <div className="absolute left-[23px] top-[48px] bottom-[-48px] w-[2px] bg-white/[0.08] pointer-events-none">
                        <motion.div 
                          className="w-full bg-emerald-500 origin-top shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                          initial={{ height: "0%" }}
                          animate={{ height: activeStep > idx ? "100%" : "0%" }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    ) : (
                      // Last step connector: goes from bottom of Step 5 icon (top-[48px]) to the vertical center of the CTA button (bottom-[24px])
                      <div className="absolute left-[23px] top-[48px] bottom-[24px] w-[41px] pointer-events-none">
                        {/* Gray background line */}
                        <div className="absolute inset-0 border-l-2 border-b-2 border-dashed border-white/10 rounded-bl-2xl" />
                        {/* Active neon green line */}
                        <motion.div 
                          className="absolute inset-0 border-l-2 border-b-2 border-dashed border-emerald-500 rounded-bl-2xl shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeStep >= 4 ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}

                    {/* Visual node: solid vibrant green circle with a white icon */}
                    <div 
                      className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                        isActive 
                          ? "bg-emerald-500 text-neutral-950 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.6)] scale-110" 
                          : "bg-neutral-950 text-emerald-500/30 border border-white/5 shadow-none"
                      }`}
                    >
                      {StepIcon ? <StepIcon className="w-5 h-5 stroke-[2.25]" /> : null}
                    </div>

                    <span 
                      className={`text-[10px] font-mono tracking-widest block mb-1.5 uppercase transition-colors duration-500 ${
                        isActive ? "text-emerald-400 font-extrabold" : "text-white/20"
                      }`}
                    >
                      {item.step}
                    </span>
                    
                    <h4 
                      className={`text-[18px] md:text-[20px] font-extrabold tracking-wide leading-tight transition-all duration-500 ${
                        isActive ? "text-emerald-400 scale-[1.01] origin-left" : "text-white/30"
                      }`}
                    >
                      {item.title}
                    </h4>
                    
                    <p 
                      className={`text-[13.5px] md:text-[14.5px] tracking-normal mt-2 leading-relaxed max-w-[580px] transition-colors duration-500 ${
                        isActive ? "text-white/70" : "text-white/20"
                      }`}
                    >
                      {item.desc}
                    </p>

                    {isLast && (
                      <div className="mt-8 mb-0 flex">
                        <button
                          onClick={() => onBookConsultation("Seamless 5 Step Onboarding request")}
                          className="rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-extrabold px-8 py-3.5 text-[14px] tracking-wide transition-all shadow-[0_4px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.55)] cursor-pointer uppercase"
                        >
                          HIRE AI DEVELOPERS NOW
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: FLEXIBLE ENGAGEMENT MODELS */}
      <section className="py-24 border-b border-white/5 bg-[#000000] relative">
        <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[150px] bg-emerald-500/2 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] text-center relative z-10">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white animate-fade-in">
            Flexible <span className="text-emerald-400">models for scalable</span> AI projects
          </h2>
          <p className="text-white/50 text-[14px] md:text-[15px] max-w-[650px] mx-auto mt-3 leading-relaxed mb-12">
            Choose what works best- staff augmentation, dedicated teams, or full-scale outsourcing. Have a quick insight & choose what suits your needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Model 1: Staff Augmentation */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#080808] hover:border-emerald-500/10 transition-all duration-300 flex flex-col justify-between shadow-2xl">
              <div className="bg-emerald-500/5 border-b border-white/5 py-4 text-center text-[11px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase">
                Staff Augmentation
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                <div>
                  <p className="text-[12.5px] text-white/65 leading-relaxed text-left">
                    Tap into our pool of AI developers to fill immediate skill gaps. Whether it's training large datasets or integrating NLP modules, our engineers blend seamlessly with your in-house teams.
                  </p>
                  
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {['Fast onboarding', 'You stay in control', 'Flexible scale'].map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-left">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-[12.5px] text-white/90 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Model 2: Dedicated Teams */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#080808] hover:border-emerald-500/10 transition-all duration-300 flex flex-col justify-between shadow-2xl">
              <div className="bg-emerald-500/10 border-b border-white/5 py-4 text-center text-[11px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase">
                Dedicated Teams
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                <div>
                  <p className="text-[12.5px] text-white/65 leading-relaxed text-left">
                    Build a focused AI squad with domain-specific knowledge, from predictive analytics to generative AI. Our teams act as an extension of your company, fully aligned with your goals.
                  </p>
                  
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {['Strategic alignment', 'Consistent delivery', 'Ideal for growth'].map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-left">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-[12.5px] text-white/90 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Model 3: Software Outsourcing */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#080808] hover:border-emerald-500/10 transition-all duration-300 flex flex-col justify-between shadow-2xl">
              <div className="bg-emerald-500/5 border-b border-white/5 py-4 text-center text-[11px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase">
                Software Outsourcing
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                <div>
                  <p className="text-[12.5px] text-white/65 leading-relaxed text-left">
                    Let SpaceOn Technology handle the end-to-end AI development lifecycle. From model selection to production deployment and monitoring, we manage everything so you can focus on outcomes.
                  </p>
                  
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {['Complete ownership', 'Outcome-driven', 'Proven delivery'].map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-left">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-[12.5px] text-white/90 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10">
            <button
              onClick={() => onBookConsultation("Scalable engagement model selection")}
              className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-bold font-mono text-emerald-400 hover:text-white transition-colors cursor-pointer uppercase"
            >
              <span>Hire now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: MATRIX TABLE OUTPERFORM RESULTS */}
      <section className="py-24 border-b border-white/5 bg-[#000000]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight text-white text-center">
            Why our Artificial intelligence developers <span className="text-emerald-400">outperform</span> the rest?
          </h2>
          <p className="text-white/50 text-[13.5px] md:text-[14.5px] max-w-[650px] mx-auto mt-3 leading-relaxed text-center mb-12">
            We offer reliability and scalable AI expertise that’s hard to find in isolated freelance or in-house setups. Still, here’s an unbiased look at all the options you can consider.
          </p>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-black/80 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-white/10 bg-emerald-950/30 font-mono text-xs text-emerald-400 font-extrabold uppercase select-none">
                  <th className="p-4 md:p-5">Criteria</th>
                  <th className="p-4 md:p-5">SpaceOn Technology AI developers</th>
                  <th className="p-4 md:p-5">In-house teams</th>
                  <th className="p-4 md:p-5">Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[12.5px] leading-relaxed">
                {outperformData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-bold font-mono text-white/95">
                      {row.criteria}
                    </td>
                    <td className="p-4 md:p-5 text-emerald-400 font-bold bg-emerald-950/20 shadow-[inset_1px_0_0_rgba(16,185,129,0.05)]">
                      {row.spaceOn}
                    </td>
                    <td className="p-4 md:p-5 text-white/60">
                      {row.inhouse}
                    </td>
                    <td className="p-4 md:p-5 text-white/45">
                      {row.freelancers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRANSPARENT COST SHEET CARD */}
      <section className="py-20 bg-[#000000] border-b border-white/5 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/50 pointer-events-none" />
        <div className="max-w-5xl w-full mx-5 md:mx-[60px] lg:mx-[100px] relative z-10">
          <div className="bg-[#080808]/95 border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 filter blur-[60px] rounded-full pointer-events-none" />

            <div className="flex-1 text-left">
              <h2 className="text-[26px] md:text-[36px] font-extrabold tracking-tight leading-tight text-white">
                Transparent <span className="text-emerald-400">AI development costs</span> with no hidden surprises
              </h2>
              <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed mt-3 max-w-[480px]">
                Get a fully-signed NDA, top code security, easy exit policy, and simple transparent pricing with senior developers.
              </p>
            </div>

            <div className="w-full lg:w-auto bg-neutral-950/90 border border-white/5 rounded-xl p-6 md:p-8 min-w-[280px] md:min-w-[340px] text-left">
              <span className="text-[11px] font-mono tracking-wider text-emerald-400 font-extrabold block">
                MONTHLY PLAN
              </span>
              <p className="text-[12.5px] text-white/50 font-medium mt-1">
                Just $15/hour
              </p>

              <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-[12px] text-white/70">
                <div className="flex items-center justify-between font-medium">
                  <span>Capacity</span>
                  <span className="font-mono text-emerald-400">160 Hours / Month</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Frequency</span>
                  <span className="font-mono text-emerald-400">8 Hours / Day</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Schedule</span>
                  <span className="font-mono text-emerald-400">5 Days / Week</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Talent Tier</span>
                  <span className="font-mono text-emerald-400">Exp. AI Developers</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="text-[11px] font-mono text-white/40 uppercase">Starting at</span>
                <span className="text-[28px] font-extrabold text-white font-mono">$2400<span className="text-xs text-white/40 font-sans font-normal lowercase">/mo</span></span>
              </div>
              <p className="text-[9.5px] text-white/30 text-right mt-1 font-mono uppercase">
                billed monthly
              </p>

              <button
                onClick={() => onBookConsultation("Start AI Free Trial Booking - $15/hour model")}
                className="w-full mt-6 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-black font-extrabold py-3 text-xs tracking-wider uppercase transition-all"
              >
                Start free trial
              </button>
              <p className="text-[10px] text-white/40 text-center mt-2 font-mono">
                14 days risk-free trial
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: ACCORDION FAQs */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
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
                  >
                    <span className="text-[14px] md:text-[15.5px] tracking-wide pr-4">
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
                        <div className="p-5 md:p-6 pt-0 border-t border-white/5 text-[12.5px] md:text-[13.5px] text-white/60 leading-relaxed font-medium">
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
            <p className="text-xs text-white/30 font-mono uppercase tracking-widest">
              Have more questions?
            </p>
            <button
              onClick={() => onBookConsultation("Custom Engineering Audit request")}
              className="mt-2 text-sm text-emerald-400 hover:text-white transition-colors underline font-bold"
            >
              Ask our experts &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
