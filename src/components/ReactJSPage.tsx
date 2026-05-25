import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Cpu, Database, Globe, 
  Layers, Shield, Smartphone, Terminal, HelpCircle, Calendar, 
  Sparkles, Check, Server, Code, Star, ChevronDown, Send, 
  MapPin, Clock, Phone, Mail, Building2, User, ChevronUp 
} from 'lucide-react';

interface ReactJSPageProps {
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
}

export default function ReactJSPage({ onBack, onBookConsultation }: ReactJSPageProps) {
  // Case study slider state
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  
  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'React Frontend Development',
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
        service: 'React Frontend Development',
        message: ''
      });
    }, 4000);
  };

  const caseStudies = [
    {
      badge: "Manufacturing , AI / ML",
      title: "Reduced production cost & waste with 100% traceability for the textile industry",
      desc: "A startup based in Portugal, partnered with SpaceOn Technology to build an advanced textile waste reduction solution that detects defects in real-time and reduces waste & production costs.",
      technologies: "React JS , Node JS , AI",
      industry: "Textile Manufacturing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700"
    },
    {
      badge: "Fintech , High Concurrency",
      title: "Real-time stock ledger broker with 60FPS tick updates",
      desc: "An enterprise finance firm built their central ticker portal displaying 500+ active tickers simultaneously without hydration blocks or state delays.",
      technologies: "React 19, Tailwind CSS, WebSockets",
      industry: "Investment Banking",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=700"
    },
    {
      badge: "Healthcare , PWA",
      title: "Sovereign medical inventory application holding 500k assets",
      desc: "A medical network based in California modernized their field inventory sync client into an offline-tolerant PWA reducing check-in times by 40%.",
      technologies: "React, Workbox Offline, Tailwind CSS",
      industry: "Clinical Operations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700"
    }
  ];

  const standingOutColumns = [
    {
      title: "Coding standards",
      items: [
        "We use ESLint and Prettier for a uniform, clean coding style.",
        "Our focus on reusable components enhances consistency and reduces redundancy.",
        "Thorough documentation ensures easy comprehension for all developers.",
        "Strict Git version control practices manage code changes effectively.",
        "Regular code reviews and pair programming enhance collaboration and issue detection."
      ]
    },
    {
      title: "Quality control guidelines",
      items: [
        "Automated testing with Jest and React Testing Library ensures component functionality.",
        "Load and stress testing assess performance under heavy user traffic.",
        "Tools like Lighthouse and WebPageTest identify areas for optimization.",
        "CI/CD pipelines run tests and performance checks on every code change.",
        "User experience testing for performance and responsiveness improvements."
      ]
    },
    {
      title: "Training for Developers",
      items: [
        "Regular workshops keep our team updated on ReactJS features and best practices.",
        "Access to online resources enables continuous skill enhancement.",
        "Mentorship programs facilitate knowledge sharing between experienced and newer developers.",
        "We promote attendance at industry conferences for networking and learning.",
        "Internal knowledge-sharing sessions encourage collaboration and new insights."
      ]
    }
  ];

  const faqItems = [
    {
      q: "How much does it cost to develop a ReactJS solution?",
      a: "The cost varies based on project complexity, features, and team expertise. We provide a detailed estimate after assessing your specific requirements. You can also check our engagement models for further details on hiring developers."
    },
    {
      q: "Will my data and information remain secure & confidential?",
      a: "Absolutely. We enforce strict NDA agreements and follow standard security practices to ensure your information stays confidential and secure."
    },
    {
      q: "Can you share who owns the code?",
      a: "Yes, once all milestones are resolved and dues cleared, we hand over full 100% source-code ownership to you."
    },
    {
      q: "What type of solutions is ReactJS useful for?",
      a: "ReactJS is ideal for fast Single Page Applications, SaaS dashboards, PWAs, streaming platforms, and highly collaborative web engines."
    },
    {
      q: "What are the benefits of outsourcing ReactJS web development?",
      a: "Outsourcing grants access to pre-vetted world-class talent, lowers overall developmental costs, speeds up delivery times, and provides robust post-launch support."
    },
    {
      q: "Can you help me complete my incomplete web/app development project?",
      a: "Yes, our engineering team specializes in taking over ongoing projects, auditing state stores, fixing existing bugs, and completing features cleanly."
    },
    {
      q: "If I already have designs ready, can you work with those?",
      a: "Yes, we can build custom tailored React components from your Figma, Adobe XD, or other design layouts exactly."
    }
  ];

  return (
    <div className="w-full relative bg-[#000000] text-[#f3f4f6]" id="reactjs-page-root">
      
      {/* SECTION 1: HERO CONTAINER (Dark Green Cinematic Theme) */}
      <section className="relative overflow-hidden pt-28 pb-20 bg-[#000000]" id="hero-sec">
        {/* Modern dark green gradient background spot for premium contrast */}
        <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full filter blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
        </div>

        {/* Tiny abstract background grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d11_1px,transparent_1px),linear-gradient(to_bottom,#0c1d11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10" />

        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10 !overflow-visible">
          
          {/* Back Row */}
          <div className="flex items-center justify-between relative z-10 pb-12">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO SOVEREIGN SUITE</span>
            </button>

            <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3.5 py-1.5 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full select-none">
              PRE-VETTED TALENT &middot; ONLINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
            {/* Hero Left Info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
                HIRE REACTJS DEVELOPERS &amp; ENGINEERS
              </span>
              
              <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                Hire <span className="text-[#00df89]">vetted React developers</span> to engineer your vision
              </h1>
              
              <p className="text-[14px] md:text-[16px] text-white/70 max-w-[550px] leading-relaxed mb-8">
                SpaceOn Technology is a leading React development company that helps you build both simple and complex web apps – SPAs, PWAs &amp; more with fast rendering performance. Our pre-vetted React JS developers follow the best coding standards to deliver efficient and future-ready solutions.
              </p>
              
              <button 
                onClick={() => onBookConsultation("Hire React Developers")} 
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] hover:scale-[1.02] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(0,223,137,0.30)] hover:shadow-[0_0_50px_rgba(0,223,137,0.55)] cursor-pointer text-center"
              >
                Get React talent now
              </button>
            </div>

            {/* Hero Right Widget - Pulsing orbs with high fidelity banner */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none !overflow-visible z-10 mt-12 lg:mt-0">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] relative flex items-center justify-center !overflow-visible">
                {/* Glow 1: Main Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
                <div 
                  className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] animate-pulse blur-[45px] md:blur-[80px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,223,137,0.3) 0%, rgba(0,223,137,0.1) 35%, transparent 70%)',
                  }}
                />

                {/* Glow 2: Secondary Ambient Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
                <div 
                  className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] blur-[60px] md:blur-[110px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,223,137,0.15) 0%, transparent 70%)',
                  }}
                />
                
                <img 
                  src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/hire-react-js-banner-img.webp" 
                  alt="ReactJS Core Graphic" 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/hire-ai-developers-banner.webp";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: RATINGS AND WIDGETS (Sleek Dark Glass Background with star reviews) */}
      <section className="bg-[#04060b] text-white py-14 border-y border-white/5" id="ratings-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Title block */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-white leading-snug">
                Join millions of innovative businesses worldwide and experience the SpaceOn Technology advantage.
              </h2>
            </div>

            {/* Widgets column with Clutch & Goodfirms in deep-glass styling */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {/* Clutch Block */}
              <div className="flex items-center gap-3.5 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-white/15 overflow-hidden p-0.5 shrink-0 select-none">
                  <img 
                    src="https://s3-us-west-1.amazonaws.com/upload.comparably.com/949487/companies/949487/logo_1659447060103.jpg" 
                    alt="Clutch" 
                    className="w-full h-full object-cover rounded-full" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-black text-white">4.8</span>
                    <div className="flex text-emerald-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-[#00df89]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 font-mono tracking-wider block mt-0.5">
                    Based on 32 Clutch reviews
                  </span>
                </div>
              </div>

              {/* Goodfirms Block */}
              <div className="flex items-center gap-3.5 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-emerald-500/30 transition-all duration-300 max-w-[280px]">
                <div className="w-9 h-9 bg-white flex items-center justify-center rounded-lg border border-white/15 overflow-hidden p-1 shrink-0 select-none">
                  <img 
                    src="https://images.g2crowd.com/uploads/product/image/18db0bd428eb8a49504c41e748e50b35/goodfirms.png" 
                    alt="GoodFirms" 
                    className="w-full h-full object-contain" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold text-white leading-tight">GoodFirms</h4>
                  <div className="flex text-amber-400 text-[10px] mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-300 block mt-1 font-medium font-sans">
                    Rating 4.82 | 22 Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES LIST (Continuous Dark Glass with deep density grid) */}
      <section className="bg-[#060810] text-gray-100 py-24" id="services-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sticky/Interactive Left block with CTA */}
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start text-left">
              <span className="text-[11px] font-bold font-mono tracking-[0.25em] text-[#00df89] uppercase block mb-3">
                SOVEREIGN CAPABILITIES
              </span>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-black text-white leading-[1.1] mb-6">
                Our React JS development services at <span className="text-[#00df89]">affordable pricing</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed max-w-lg mb-8">
                Power up your project goals with high-quality React development at competitive rates. You can hire React JS developers from us to receive outstanding front-end development services without compromising on quality. Explore our wide range of React development services designed to meet all your modern demands.
              </p>
              <button 
                onClick={() => onBookConsultation("Discuss React Project")}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#00df89] hover:bg-[#00df89] hover:text-[#060810] text-white font-extrabold px-9 py-4 text-[13px] uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Let's discuss your project
              </button>
            </div>

            {/* Scrolling Right listing high density descriptions */}
            <div className="lg:col-span-7 space-y-5">
              {[
                {
                  title: "React JS frontend development service",
                  id: "srv-1",
                  desc: "Create highly responsive, innovative, and affordable ReactJS front-end development solutions with SpaceOn Technology, as a popular ReactJS development company, our custom front-end solutions are personalized to suit your business of every size of the project."
                },
                {
                  title: "React JS web development service",
                  id: "srv-2",
                  desc: "We specialize in creating dynamic, responsive, and user-friendly web development with ReactJS. As a leading ReactJS web development company we give a major priority to quality and innovation that helps you stand out in today's competitive market."
                },
                {
                  title: "React JS SPA development services",
                  id: "srv-3",
                  desc: "Build fast, seamless, and interactive Single Page Applications (SPAs) with lightweight state loops. We create SPA architectures that maximize render speed and engagement."
                },
                {
                  title: "Custom ReactJS App development",
                  id: "srv-4",
                  desc: "Our ReactJS App development services are designed to deliver personalized solutions that perfectly align with your project goals. Connect with our ReactJS programmers who ensure high-quality and premium features."
                },
                {
                  title: "React JS consulting services",
                  id: "srv-5",
                  desc: "Get in-depth consulting from professional ReactJS developers of SpaceOn Technology. Aimed at solving all technical challenges of the app development starting from architecture blueprint design, we advise you on the best practices."
                },
                {
                  title: "React PWA development services",
                  id: "srv-6",
                  desc: "Power up your business to create Progressive Web Applications (PWAs) that combine the best of web and mobile apps. We use React to build fast and offline-capable PWAs."
                },
                {
                  title: "ReactJS Support & Maintenance",
                  id: "srv-7",
                  desc: "Our ReactJS support & maintenance services ensure your applications remain updated, secure, and running smoothly. We offer proactive bug fixes, speed tuning, and standard compliance checks."
                },
                {
                  title: "ReactJS Migration Services",
                  id: "srv-8",
                  desc: "We facilitate seamless migration to the React framework, ensuring that codebases are adapted safely without breaking data integrity or SEO indexes."
                },
                {
                  title: "ReactJS Plugin Development Services",
                  id: "srv-9",
                  desc: "Extend the capabilities of your web apps with custom lightweight plugins designed for specific business needs to maximize capability."
                }
              ].map((srv, idx) => (
                <div 
                  key={srv.id}
                  className="group bg-white/[0.02] border border-white/5 hover:border-[#00df89]/30 p-6 sm:p-8 rounded-2xl transition-all hover:bg-white/[0.04] hover:shadow-[0_10px_35px_rgba(0,223,137,0.05)] text-left"
                >
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-xs font-bold text-[#00df89] mt-1">
                      [0{idx + 1}]
                    </span>
                    <div>
                      <h3 className="text-[17px] font-bold text-white group-hover:text-[#00df89] transition-colors mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-[13.5px] text-gray-400 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CASE STUDY CAROUSEL */}
      <section className="bg-[#04060b] py-24 text-white border-t border-white/5" id="case-study-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          {/* Header */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase bg-[#00df89]/10 px-3 py-1 rounded-full inline-block mb-3">
              CLIENT CASE WORK
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-black text-white tracking-tight leading-tight mb-4">
              Case study: <span className="text-gray-400">Explore our exceptional work with React Js</span>
            </h2>
            <p className="text-[14.5px] text-gray-400 leading-relaxed">
              Explore how SpaceOn Technology as a Reactjs development company in India has built innovative solutions for our valuable clients.
            </p>
          </div>

          {/* Active Case Card Container */}
          <div className="bg-white/[0.02] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl" id="case-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Text column - Left */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00df89] tracking-wider block mb-4 uppercase">
                      {caseStudies[activeCaseIdx].badge}
                    </span>
                    
                    <h3 className="text-[21px] sm:text-[26px] font-bold text-white leading-snug mb-6">
                      {caseStudies[activeCaseIdx].title}
                    </h3>
                    
                    <p className="text-[14px] text-gray-400 leading-relaxed mb-8">
                      {caseStudies[activeCaseIdx].desc}
                    </p>

                    <div className="space-y-3.5 border-t border-white/10 pt-6">
                      <div className="flex gap-2.5 items-start">
                        <span className="text-xs font-semibold text-gray-400 font-mono tracking-wide mt-0.5">Core Technology:</span>
                        <span className="text-xs font-mono text-[#00df89] font-bold bg-[#00df89]/10 border border-[#00df89]/20 px-2 py-0.5 rounded">
                          {caseStudies[activeCaseIdx].technologies}
                        </span>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <span className="text-xs font-semibold text-gray-400 font-mono tracking-wide">Industry:</span>
                        <span className="text-xs text-white font-bold">
                          {caseStudies[activeCaseIdx].industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button 
                      onClick={() => onBookConsultation(`Case Study: ${caseStudies[activeCaseIdx].title}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#00df89] hover:text-white font-mono group cursor-pointer"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Cover Monitor mockup - Right */}
                <div className="lg:col-span-6 bg-[#030508] p-6 lg:p-10 flex items-center justify-center relative min-h-[300px] border-l border-white/5">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[340px]">
                    <img 
                      src={caseStudies[activeCaseIdx].image} 
                      alt="Mockup Screen" 
                      className="w-full h-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/60 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation and dots */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeCaseIdx === idx ? 'w-8 bg-[#00df89]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  id={`case-dot-${idx}`}
                />
              ))}
            </div>

            {/* Arrow controllers */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveCaseIdx(prev => (prev - 1 + caseStudies.length) % caseStudies.length)}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl cursor-pointer transition-colors"
                id="case-prev"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setActiveCaseIdx(prev => (prev + 1) % caseStudies.length)}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl cursor-pointer transition-colors"
                id="case-next"
              >
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CTA BANNER (Deep Dark Forest Matrix green overlay) */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#02140d] to-[#040806]" id="cta-banner-sec">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 text-center relative z-10">
          <h2 className="text-[26px] sm:text-[38px] md:text-[44px] tracking-tight font-black text-white leading-tight mb-4">
            Get access to certified <span className="text-[#00df89]">React JS developers</span> now
          </h2>
          <p className="text-[#9ca3af] text-[14px] sm:text-[15.5px] max-w-[690px] mx-auto leading-relaxed mb-8">
            Our proven track record in React JS development ensures your project is in capable hands. Hire ReactJS developers from SpaceOn Technology & boost your chances of success.
          </p>
          <button 
            onClick={() => onBookConsultation("Hire Certified React Developers")}
            className="rounded-full bg-[#00df89] hover:bg-[#00c576] font-extrabold text-[#060810] px-11 py-5 text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_25px_rgba(0,223,137,0.3)] hover:shadow-[0_6px_35px_rgba(0,223,137,0.55)] cursor-pointer"
          >
            Hire React developers now
          </button>
        </div>
      </section>

      {/* SECTION 6: STANDING OUT STANDARD (Sleek dark panel grids with glowing headers) */}
      <section className="bg-[#060810] text-gray-100 py-24 text-left border-t border-white/5" id="standards-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          {/* Header */}
          <div className="mb-14 text-center max-w-4xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase bg-[#00df89]/10 px-3 py-1 rounded-full inline-block mb-3">
              QUALITY CONTROL PIPELINES
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-black text-white tracking-tight mb-5">
              Why we stand out? Our proven <span className="text-[#00df89]">guidelines & coding standards</span>
            </h2>
            <p className="text-[14px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
              At SpaceOn Technology, our approach makes sure that every project meets the highest quality benchmarks in terms of coding standards, development process, quality control & training. By adhering to best practices and continuously refining our processes, we deliver top React JS solutions that not only meet but exceed client expectations. Here's a glimpse of our in-depth refinery.
            </p>
          </div>

          {/* Grid columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
            {standingOutColumns.map((col, idx) => (
              <div 
                key={col.title}
                className="border border-white/10 rounded-3xl overflow-hidden flex flex-col bg-white/[0.02] shadow-2xl hover:border-[#00df89]/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Header in deep emerald dark block */}
                <div className="bg-[#091f15] border-b border-[#00df89]/20 p-5 text-[#00df89] font-bold text-[14px] tracking-wider text-center uppercase">
                  {col.title}
                </div>
                
                {/* Items and Ticks */}
                <div className="p-6 sm:p-8 flex-1 space-y-4">
                  {col.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full border border-[#00df89]/30 text-[#00df89] bg-[#00df89]/5 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,223,137,0.1)]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-gray-300 text-[13px] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link */}
          <div className="text-center">
            <a 
              href="#contact-form-block"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#00df89] hover:text-white transition-colors"
            >
              <span>Start Building Your Team</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: APP DEVELOPMENT PROCESS (Dark Green/Slate Timeline) */}
      <section className="bg-[#04060b] py-24 border-t border-white/5 overflow-hidden text-left" id="process-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left informational block */}
            <div className="lg:col-span-4 lg:sticky lg:top-[120px] self-start" id="process-info-block">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                STRATEGIC ROADMAP
              </span>
              <h2 className="text-[28px] sm:text-[38px] font-black text-white leading-[1.1] mb-6">
                Our ReactJS app <span className="text-[#00df89]">development process</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                As a professional ReactJS development company in India, we have a highly skilled team to develop custom solutions and well-established methodologies.
              </p>
            </div>

            {/* Right vertical timeline */}
            <div className="lg:col-span-8 relative">
              
              {/* Vertical timeline containing list of steps */}
              <div className="relative">
                {/* Vertical path - passes perfectly through the horizontal center of every circle */}
                <div className="absolute left-[15px] sm:left-[19px] top-4 sm:top-[22px] bottom-4 sm:bottom-[22px] w-[2px] bg-gradient-to-b from-[#00df89] via-emerald-800 to-transparent" />

                <div className="space-y-12">
                  {[
                    {
                      step: "Step 1",
                      title: "React JS consultation & planning",
                      desc: "Engage in discussions to understand your project goals and conduct a thorough analysis of your needs and target audience."
                    },
                    {
                      step: "Step 2",
                      title: "Project proposal & design",
                      desc: "Present a detailed project proposal outlining scope, timeline, and costs, followed by collaborative UI/UX design creation."
                    },
                    {
                      step: "Step 3",
                      title: "Development & integration",
                      desc: "Develop the application using reusable React components and integrate essential features based on your specifications."
                    },
                    {
                      step: "Step 4",
                      title: "Quality assurance & review",
                      desc: "Conduct thorough testing to ensure functionality and quality, followed by a review session to gather your feedback and make necessary adjustments."
                    },
                    {
                      step: "Step 5",
                      title: "Deployment & post-launch support",
                      desc: "Deploy the application to the production environment and provide ongoing maintenance and support cleanly."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-12 sm:pl-16 text-left group">
                      {/* Glowing timeline node icon */}
                      <div className="absolute left-0 top-0.5 sm:top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#04060b] border-2 border-[#00df89] shadow-[0_0_15px_rgba(0,223,137,0.4)] flex items-center justify-center text-[#00df89] z-10 transition-transform group-hover:scale-110">
                        <div className="w-2 h-2 rounded-full bg-[#00df89] animate-pulse" />
                      </div>

                      <div className="pt-0.5 sm:pt-2">
                        <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#00df89] uppercase block mb-1">
                          {item.step}
                        </span>
                        <h3 className="text-[17px] sm:text-[19px] font-bold text-white mb-2 leading-snug group-hover:text-[#00df89] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-[13.5px] leading-relaxed max-w-[620px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bot timeline buttons - Aligns perfectly with step text content */}
              <div className="mt-14 pl-12 sm:pl-16 text-left">
                <button 
                  onClick={() => onBookConsultation("Schedule Consultation Call")}
                  className="rounded-full bg-[#00df89] hover:bg-[#00c576] font-black px-9 py-4 text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,223,137,0.25)] hover:shadow-[0_6px_30px_rgba(0,223,137,0.5)] cursor-pointer text-black inline-flex items-center gap-2"
                >
                  <span>Schedule a call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: RATES / PRICING */}
      <section className="bg-[#060810] text-[#f3f4f6] py-24 text-left border-y border-white/5" id="pricing-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Rates Left */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                COOPERATIVE ENGAGEMENT
              </span>
              <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-white leading-[1.1] mb-6">
                Hire React JS development team at <span className="text-[#00df89]">cost-friendly rates</span>
              </h2>
              <p className="text-gray-400 text-[14.5px] leading-relaxed mb-8">
                Get a fully-signed NDA, top code security, easy exit policy, and simple transparent pricing with senior developers.
              </p>
            </div>

            {/* Rates Card - Right */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[500px] bg-white/[0.03] border border-white/10 shadow-3xl rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00df89]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start border-b border-white/10 pb-5 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">Monthly Plan</h3>
                    <p className="text-xs text-gray-400 mt-1 font-mono">Pre-vetted senior experts</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-[#00df89] block">Just $15/hour</span>
                  </div>
                </div>

                {/* Rates properties checklist */}
                <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                  {["160 Hours a month", "8 Hours/day", "5 Days/week", "Exp. React JS Developers"].map((check) => (
                    <div key={check} className="flex gap-2.5 items-center">
                      <div className="w-4 h-4 rounded-full bg-[#00df89]/10 text-[#00df89] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-gray-300 font-semibold">{check}</span>
                    </div>
                  ))}
                </div>

                {/* Total price billing */}
                <div className="border-t border-white/10 pt-5 mb-6 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block font-mono">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-[32px] font-black text-[#00df89]">$2,400</span>
                    <span className="text-sm font-bold text-gray-400 font-mono">/ month</span>
                  </div>
                  <span className="text-[11px] text-gray-400 block mt-1">Billed monthly with zero hidden fees</span>
                </div>

                {/* Rates button actions */}
                <div className="space-y-3.5">
                  <button 
                    onClick={() => onBookConsultation("React JS Free Trial Sign Up")}
                    className="w-full rounded-2xl bg-[#00df89] hover:bg-[#00c576] font-extrabold text-black py-4.5 text-[14px] transition-all cursor-pointer text-center block"
                  >
                    Start free trial
                  </button>
                  <span className="text-[11px] text-gray-400 block text-center font-mono">
                    14 days risk-free trial
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: CHOOSE US STANDARD (Dark grid section with cards) */}
      <section className="bg-[#04060b] py-24 text-left border-b border-white/5" id="excellence-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          {/* Header */}
          <div className="mb-14 text-center max-w-4xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase bg-[#00df89]/10 px-3 py-1 rounded-full inline-block mb-3">
              OUTSOURCING ADVANTAGES
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-black text-white mb-5 leading-tight">
              Choose us for top-tier <span className="text-[#00df89]">React JS development services</span>
            </h2>
            <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
              As a leading React development outsourcing company, we are a one-stop shop for all your digital demands. Our Reactjs developers are highly skilled in delivering scalable and advanced ReactJS app solutions to power up your business. Here are a few more reasons that make us a perfect partner for React development.
            </p>
          </div>

          {/* Grid layout containing 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="excellence-grid">
            {[
              {
                title: "Vast domain expertise",
                desc: "With years of experience in ReactJS development across diverse industries, we possess in-depth knowledge gained from thorough market analysis and an understanding of target audiences."
              },
              {
                title: "Complete source code ownership",
                desc: "Enjoy 100% ownership of your source code upon project delivery and the settlement of all dues, ensuring your intellectual property rights are fully protected."
              },
              {
                title: "Timely delivery",
                desc: "We respect your time and are committed to delivering projects on schedule, aligning closely with your specific business objectives and requirements."
              },
              {
                title: "Transparent daily project reports",
                desc: "Receive comprehensive 8-hour daily project reports that ensure transparency in our progress. Our flexible exit policy allows you to engage in the development process without any constraints."
              },
              {
                title: "Cost-effective solutions",
                desc: "We pride ourselves on offering a perfect blend of cost-efficient ReactJS development services without compromising quality, delivering exceptional value to our clients."
              },
              {
                title: "Dedicated talent pool",
                desc: "As a leading React development company, we provide access to a top-tier talent pool, fostering enhanced collaboration and accelerated results for your projects."
              }
            ].map((cell, idx) => (
              <div 
                key={cell.title} 
                className="bg-white/5 border border-white/10 hover:border-[#00df89]/30 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#00df89]/10 border border-[#00df89]/20 text-[#00df89] rounded-xl flex items-center justify-center mb-5 shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-3 group-hover:text-[#00df89] transition-colors leading-snug">
                    {cell.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                    {cell.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: FAQ LIST */}
      <section className="bg-[#060810] text-[#f3f4f6] py-24 text-left" id="faq-sec">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase bg-[#00df89]/10 px-3 py-1 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-black text-white leading-snug mb-4">
              Frequently asked <span className="text-[#00df89]">questions</span>
            </h2>
          </div>

          {/* Accordion checklist */}
          <div className="w-full max-w-[900px] mx-auto space-y-4">
            {faqItems.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.02] border border-white/10 hover:border-[#00df89]/20 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-white font-sans leading-snug group-hover:text-[#00df89]">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#00df89] transition-transform duration-300 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="pb-6 px-6 sm:px-8 text-[13.5px] text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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

      {/* SECTION 11: CONTACT US FOR PROJECT DISCUSSION */}
      <section className="bg-[#030509] py-24 border-t border-white/10 text-left" id="contact-form-block">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Stats Left */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                LET'S CONVENE
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-[1.1] mb-4">
                Contact Us <br /><span className="text-[#00df89]">for project discussion</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-[420px] mb-12 leading-relaxed">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>

              {/* Grid lists */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  { value: "14+", label: "Years of Experience" },
                  { value: "180+", label: "In-House Talent" },
                  { value: "750+", label: "Project Delivered" },
                  { value: "92%", label: "Client satisfaction rate" }
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-4 text-left">
                    <span className="text-[26px] sm:text-[32px] font-black text-white block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 tracking-wide font-medium mt-1 inline-block font-sans">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[550px] bg-[#0c0f16] border border-white/10 text-gray-100 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                <div className="mb-6 border-b border-white/10 pb-4 text-left">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white">
                    Got a project in mind?
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    We guarantee to get back to you within a business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    id="submit-success-block"
                  >
                    <div className="w-16 h-16 bg-[#00df89]/10 rounded-full flex items-center justify-center text-[#00df89] mx-auto mb-4 border border-[#00df89]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Thank you!</h4>
                    <p className="text-xs text-gray-400 mt-1 max-w-[320px] mx-auto text-center leading-relaxed">
                      Your query regarding {formData.service} has been successfully logged. Our sales representatives will reach out within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-400 uppercase block mb-1">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Your Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="e.g. +91 99999 99999"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                        Services *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#11141e] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none appearance-none transition-all cursor-pointer"
                      >
                        <option value="React Frontend Development">React Frontend Development</option>
                        <option value="React Web App Engineering">React Web App Engineering</option>
                        <option value="SPA / PWA Integration">SPA / PWA Integration</option>
                        <option value="Advanced Micro-Consultation">Advanced Micro-Consultation</option>
                        <option value="Custom Support Package">Custom Support Package</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                        How can we help? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Message *"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button 
                      type="submit"
                      className="w-full rounded-2xl bg-[#00df89] hover:bg-[#00c576] font-black text-black py-4.5 text-[14px] transition-all cursor-pointer text-center block"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
