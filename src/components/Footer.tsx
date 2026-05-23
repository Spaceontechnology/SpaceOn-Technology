import React from 'react';
import { Github, Twitter, Linkedin, ShieldAlert, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onContactEmail: () => void;
}

export default function Footer({ onNavigate, onContactEmail }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505]/65 backdrop-blur-xl border-t border-white/[0.08] py-16 px-5 md:px-[60px] lg:px-[120px] relative z-20 overflow-hidden" id="footer">
      {/* Absolute faint grid pattern overlay & glassy ambient light nodes */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[150px] bg-[#61DAFB]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[180px] bg-[#06B6D4]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Upper Column rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Main wordmark description */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <img 
                src="https://patelarsh.com/SpaceOn%20Logo/Light.png" 
                alt="SPACEON" 
                className="h-[44px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
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
            <ul className="space-y-2">
              {['About Services', 'Careers Node', 'Contact Solutions'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-white text-[13px] transition-colors leading-relaxed text-left"
                  >
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
            <ul className="space-y-2">
              {['Web Software Engineering', 'Enterprise SaaS Engines', 'Sovereign Mobile Apps'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-white text-[13px] transition-colors leading-relaxed text-left"
                  >
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
            <ul className="space-y-2">
              {['Dev Research Blog', 'API Documentation', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="text-white/50 hover:text-white text-[13px] transition-colors leading-relaxed text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower footer information / socials copyrights */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:items-start gap-1.5 text-[11px] text-white/30 font-mono text-center sm:text-left">
            <span>&copy; {currentYear} SPACEON TECHNOLOGY. ALL SECURED INTELLECTUAL RIGHTS CONSERVED.</span>
            <span className="text-white/45 tracking-wider">
              GSTIN: <span className="text-white/70 select-all font-semibold">24IOGPP7106J1ZN</span> &middot; 
              UDYAM No.: <span className="text-white/70 select-all font-semibold">UDYAM-GJ-21-0024801</span> &middot; 
              ISO No.: <span className="text-white/70 select-all font-semibold">INQ/GJ-17980/3280/1024</span>
            </span>
            <span>SYSTEM CONSTRAINED UNDER STANDARD MIT LICENSES.</span>
          </div>

          {/* Social icons + scroll top button */}
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
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all pointer-events-auto"
                title="Twitter feed channel"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
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
    </footer>
  );
}
