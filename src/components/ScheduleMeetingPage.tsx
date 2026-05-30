import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2 } from 'lucide-react';

interface ScheduleMeetingPageProps {
  onBack: () => void;
}

export default function ScheduleMeetingPage({ onBack }: ScheduleMeetingPageProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [logoError, setLogoError] = useState(false);

  // We set up the official Calendly embed URL with explicit dark mode colors:
  // black background (000000), white text (ffffff), and SpaceOn green primary (00df89)
  const iframeSrc = "https://calendly.com/spaceon-technology/30min?" + new URLSearchParams({
    hide_landing_page_details: '0',
    hide_gdpr_banner: '1',
    background_color: '000000',
    text_color: 'ffffff',
    primary_color: '00df89', // Match SpaceOn's emerald theme perfectly
    embed_type: 'Inline'
  }).toString();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="min-h-screen bg-black text-white flex flex-col justify-start items-center px-4 py-8 sm:py-12 relative overflow-hidden font-sans"
    >
      {/* Explicit style tags to guarantee iframe background transparency and responsive sizing */}
      <style>{`
        iframe {
          background-color: #000000 !important;
          background: #000000 !important;
          border: none !important;
        }
        .calendly-container {
          min-height: 1060px;
        }
        .calendly-iframe {
          height: 1060px !important;
        }
        @media (min-width: 768px) {
          .calendly-container {
            min-height: 700px;
          }
          .calendly-iframe {
            height: 700px !important;
          }
        }
      `}</style>

      {/* Soft branding glows */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#00df89]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-[#00df89]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Minimal clean back navigation */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 p-2 rounded-full border border-white/10 hover:border-white/20 bg-neutral-900/40 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center group z-20"
        title="Go Back"
        id="back-to-suite"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Header element containing Logo */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-6 pt-4 relative z-10">
        {/* Center-aligned Logo & Branding */}
        <div className="flex flex-col items-center text-center select-none">
          {logoError ? (
            <div className="flex items-center gap-2 py-2">
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
              alt="SpaceOn Logo" 
              className="h-[36px] sm:h-[42px] md:h-[46px] w-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,223,137,0.1)]"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
      </div>

      {/* Centered Scheduler wrapper without bulky borders */}
      <div className="w-full max-w-5xl relative z-10">
        <div className="relative calendly-container flex flex-col">
          
          {/* Full Screen Loading Veil */}
          {loading && (
            <div className="absolute inset-0 bg-black z-30 flex flex-col items-center justify-center p-6">
              <div className="flex flex-col items-center gap-3 text-center max-w-xs">
                <Loader2 className="w-7 h-7 text-[#00df89] animate-spin" />
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Loading Scheduler
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Clean High Performance Pure Iframe Integration */}
          <div className="w-full flex-1 bg-black relative calendly-container">
            <iframe
              src={iframeSrc}
              width="100%"
              frameBorder="0"
              onLoad={() => setLoading(false)}
              className="w-full h-full bg-black calendly-iframe"
              style={{ minWidth: '320px', backgroundColor: '#000000', border: 'none' }}
              title="Calendly Scheduler"
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}
