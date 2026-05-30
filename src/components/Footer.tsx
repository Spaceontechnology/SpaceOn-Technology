import React, { useState } from 'react';
import { Github, Twitter, Linkedin, ShieldAlert, ArrowUp, Send, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onContactEmail: () => void;
}

export default function Footer({ onNavigate, onContactEmail }: FooterProps) {
  const [logoError, setLogoError] = useState(false);
  const [msmeError, setMsmeError] = useState(false);
  const [isoError, setIsoError] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505]/65 backdrop-blur-xl border-t border-white/[0.08] py-16 px-5 md:px-[60px] lg:px-[120px] relative z-20 overflow-hidden" id="footer">
      {/* Absolute faint grid pattern overlay & glassy ambient light nodes */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[150px] bg-[#22C55E]/3 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[180px] bg-[#22C55E]/3 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Upper Column rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-12">
          
          {/* Main wordmark description */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 space-y-5">
            <div className="flex items-center">
              {logoError ? (
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00df89] to-emerald-500 flex items-center justify-center text-black font-black text-base tracking-tight shadow-[0_0_15px_rgba(0,223,137,0.3)]">
                    S
                  </div>
                  <span className="text-white text-xl font-black font-sans leading-none tracking-wider">
                    SPACE<span className="text-[#00df89]">ON</span>
                  </span>
                </div>
              ) : (
                <img 
                  src="https://patelarsh.com/SpaceOn%20Logo/Light.png" 
                  alt="SPACEON" 
                  className="h-[44px] w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <p className="text-white/50 text-[13.5px] leading-relaxed max-w-sm">
              An elite digital engineering firm building robust software engines, scalable SaaS structures, custom AI nodes, and elegant product user interfaces for international clients.
            </p>

            <div className="flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-300">
              <span className="text-xs font-mono">SUPPORT DESK EMAIL:</span>
              <button 
                onClick={onContactEmail}
                className="text-xs font-mono text-white font-semibold underline hover:no-underline select-all cursor-pointer"
              >
                contact@spaceon.in
              </button>
            </div>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-white/30 uppercase">
              Company
            </h4>
            <ul className="space-y-2.5">
              {['About Services', 'Careers Node', 'Contact Solutions'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-[#00df89] text-[13px] transition-all duration-300 leading-relaxed text-left flex items-center group/link"
                  >
                    <span className="w-0 group-hover/link:w-1.5 h-[1.5px] bg-[#00df89] mr-0 group-hover/link:mr-2 rounded transition-all duration-300 opacity-0 group-hover/link:opacity-100" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-white/30 uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {['Web Software Engineering', 'Enterprise SaaS Engines', 'Sovereign Mobile Apps'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-[#00df89] text-[13px] transition-all duration-300 leading-relaxed text-left flex items-center group/link"
                  >
                    <span className="w-0 group-hover/link:w-1.5 h-[1.5px] bg-[#00df89] mr-0 group-hover/link:mr-2 rounded transition-all duration-300 opacity-0 group-hover/link:opacity-100" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-white/30 uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {['Dev Research Blog', 'API Documentation', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-[#00df89] text-[13px] transition-all duration-300 leading-relaxed text-left flex items-center group/link"
                  >
                    <span className="w-0 group-hover/link:w-1.5 h-[1.5px] bg-[#00df89] mr-0 group-hover/link:mr-2 rounded transition-all duration-300 opacity-0 group-hover/link:opacity-100" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower footer information / socials copyrights */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3.5 text-xs text-white/70 font-mono tracking-wide text-left max-w-2xl">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">
              &copy; 2026 SpaceOn Technology. All Secured Intellectual Rights Reserved.
            </span>
            
            <div className="flex flex-wrap items-center gap-3 text-white/60 text-[11.5px]">
              <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                <span className="text-[#00df89] font-extrabold sm:inline">GSTIN:</span> 
                <span className="text-white select-all font-medium">24IOGPP7106J1ZN</span>
              </span>
              
              <div className="flex items-center gap-2 bg-white/5 pl-2.5 pr-2.5 py-1 rounded border border-white/10">
                <span className="text-[#00df89] font-extrabold sm:inline">UDYAM:</span>
                <span className="text-white select-all font-medium">UDYAM-GJ-21-0024801</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 pl-2.5 pr-2.5 py-1 rounded border border-white/10">
                <span className="text-[#00df89] font-extrabold sm:inline">ISO:</span>
                <span className="text-white select-all font-medium">INQ/GJ-17980/3280/1024</span>
              </div>
            </div>
            
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              SYSTEM CONSTRAINED UNDER STANDARD MIT LICENSES.
            </span>
          </div>

          {/* Social icons + dynamic authentic certification logos */}
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            {/* Real Certification Logos above the Social Links for Enterprise Genuineness */}
            <div className="flex items-center gap-7 flex-wrap justify-start md:justify-end pb-3">
              <div className="flex items-center justify-center h-16 sm:h-20 select-none bg-transparent">
                {msmeError ? (
                  <div className="h-16 sm:h-20 px-4 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-center items-center font-mono">
                    <span className="text-[10px] text-[#00df89] font-bold">GOVT. OF INDIA</span>
                    <span className="text-xs text-white font-extrabold tracking-wide">MSME CERTIFIED</span>
                  </div>
                ) : (
                  <img 
                    src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/msme-logo.png" 
                    alt="Government of India MSME Logo" 
                    className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 hover:scale-[1.05] will-change-transform"
                    style={{ imageRendering: 'auto' }}
                    referrerPolicy="no-referrer"
                    onError={() => setMsmeError(true)}
                  />
                )}
              </div>
              <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
              <div className="flex items-center justify-center h-16 sm:h-20 select-none bg-transparent">
                {isoError ? (
                  <div className="h-16 sm:h-20 px-4 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-center items-center font-mono">
                    <span className="text-[10px] text-[#00df89] font-bold">ISO 9001:2015</span>
                    <span className="text-xs text-white font-extrabold tracking-wide">QUALITY ASSURED</span>
                  </div>
                ) : (
                  <img 
                    src="https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/iso.svg" 
                    alt="ISO Certified 9001:2015" 
                    className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 hover:scale-[1.05] will-change-transform filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.08)]"
                    style={{ imageRendering: 'auto' }}
                    referrerPolicy="no-referrer"
                    onError={() => setIsoError(true)}
                  />
                )}
              </div>
            </div>

            {/* Social links & scroll top */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all pointer-events-auto"
                  title="GitHub Core Repository"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.instagram.com/spaceon.technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all pointer-events-auto"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/spaceon-technology"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all pointer-events-auto"
                  title="LinkedIn Enterprise Hub"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all focus:outline-none"
                title="Return to topmost node"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
