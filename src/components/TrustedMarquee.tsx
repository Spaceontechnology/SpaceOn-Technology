import React from 'react';

export default function TrustedMarquee() {
  const companies = [
    { 
      name: 'Terraform Cloud', 
      logoUrl: 'https://api.iconify.design/simple-icons:terraform.svg?color=%23844FBA', 
      color: '#844FBA' 
    },
    { 
      name: 'Microsoft', 
      logoUrl: 'https://api.iconify.design/simple-icons:microsoft.svg?color=%2300A4EF', 
      color: '#00A4EF' 
    },
    { 
      name: 'Shopify Plus', 
      logoUrl: 'https://api.iconify.design/simple-icons:shopify.svg?color=%2396BF48', 
      color: '#96BF48' 
    },
    { 
      name: 'Stripe', 
      logoUrl: 'https://api.iconify.design/simple-icons:stripe.svg?color=%23635BFF', 
      color: '#635BFF' 
    },
    { 
      name: 'AWS Cloud', 
      logoUrl: 'https://api.iconify.design/simple-icons:amazonwebservices.svg?color=%23FF9900', 
      color: '#FF9900' 
    },
    { 
      name: 'OpenAI', 
      logoUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%23ffffff', 
      color: '#ffffff' 
    },
    { 
      name: 'Netflix Scale', 
      logoUrl: 'https://api.iconify.design/simple-icons:netflix.svg?color=%23E50914', 
      color: '#E50914' 
    },
    { 
      name: 'NVIDIA AI', 
      logoUrl: 'https://api.iconify.design/simple-icons:nvidia.svg?color=%2376B900', 
      color: '#76B900' 
    },
  ];

  // Repeat multiple times for seamless infinite scroll
  const scrollItems = [...companies, ...companies, ...companies];

  return (
    <section className="relative w-full py-16 bg-neutral-950/40 overflow-hidden border-y border-white/[0.05]" id="trusted-marquee">
      {/* Visual background lights (soft warm tone) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[60px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none" />
      
      {/* Premium automatic glossy sweep overlay */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none overflow-hidden z-20">
        <div 
          className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          style={{
            animation: 'glossy-sweep 8s cubic-bezier(0.25, 1, 0.5, 1) infinite'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-white/10" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 font-bold block">
            Validated Enterprise Integrations
          </span>
          <span className="h-[1px] w-8 bg-white/10" />
        </div>
        <h3 className="text-[14px] font-bold text-white/80 tracking-wider font-sans">
          Trusted by modern businesses &amp; global infrastructure partners
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex items-center w-full z-10">
        {/* Left absolute shadow overlay to smooth entry */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />
        {/* Right absolute shadow overlay to smooth exit */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden select-none w-full">
          {/* Infinite tape element */}
          <div className="animate-[marquee_30s_linear_infinite] flex items-center shrink-0 min-w-full gap-16 md:gap-24">
            {scrollItems.map((comp, idx) => (
              <div 
                key={`${comp.name}-${idx}`} 
                className="flex items-center gap-4 opacity-45 hover:opacity-100 transition-all duration-300 cursor-default group"
              >
                {/* Real brand vector logo container with color-coded dark hover styles */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.015] border border-white/[0.06] group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: `0 4px 12px -3px ${comp.color}15`
                  }}
                >
                  {/* Subtle colored glow behind the logo */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-md"
                    style={{ backgroundColor: comp.color }}
                  />
                  <img 
                    src={comp.logoUrl} 
                    alt={comp.name} 
                    className="w-5 h-5 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors text-[15px] font-extrabold tracking-wider font-sans whitespace-nowrap">
                  {comp.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded CSS for infinite scroll and automatic premium glossy light sweeps */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33333%); }
        }
        @keyframes glossy-sweep {
          0% { transform: translate3d(-120%, 0, 0) skewX(-30deg); opacity: 0; }
          5% { opacity: 1; }
          45% { transform: translate3d(800%, 0, 0) skewX(-30deg); opacity: 1; }
          50%, 100% { transform: translate3d(800%, 0, 0) skewX(-30deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
