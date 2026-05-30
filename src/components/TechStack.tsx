import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TechStackProps {
  onViewTechDetail?: (techId: string) => void;
}

export default function TechStack({ onViewTechDetail }: TechStackProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'AWS Hosting'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'AWS Hosting'] as const;

  const techData = [
    { 
      name: 'React', 
      category: 'Frontend', 
      color: 'rgba(97,218,251,0.15)', 
      borderColor: 'group-hover:border-[#61DAFB]/40',
      shadowColor: 'shadow-[#61DAFB]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB'
    },
    { 
      name: 'Next.js', 
      category: 'Frontend', 
      color: 'rgba(255,255,255,0.12)', 
      borderColor: 'group-hover:border-white/40',
      shadowColor: 'shadow-white/10',
      logoUrl: 'https://api.iconify.design/simple-icons:nextdotjs.svg?color=%23ffffff'
    },
    { 
      name: 'TypeScript', 
      category: 'Frontend', 
      color: 'rgba(49,120,198,0.15)', 
      borderColor: 'group-hover:border-[#3178C6]/40',
      shadowColor: 'shadow-[#3178C6]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:typescript.svg?color=%233178C6'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Frontend', 
      color: 'rgba(6,182,212,0.15)', 
      borderColor: 'group-hover:border-[#06B6D4]/40',
      shadowColor: 'shadow-[#06B6D4]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:tailwindcss.svg?color=%2306B6D4'
    },
    { 
      name: 'Node.js', 
      category: 'Backend', 
      color: 'rgba(51,153,51,0.15)', 
      borderColor: 'group-hover:border-[#339933]/40',
      shadowColor: 'shadow-[#339933]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:nodedotjs.svg?color=%23339933'
    },
    { 
      name: 'Laravel', 
      category: 'Backend', 
      color: 'rgba(255,45,32,0.15)', 
      borderColor: 'group-hover:border-[#FF2D20]/40',
      shadowColor: 'shadow-[#FF2D20]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:laravel.svg?color=%23FF2D20'
    },
    { 
      name: 'Python', 
      category: 'Backend', 
      color: 'rgba(55,118,171,0.15)', 
      borderColor: 'group-hover:border-[#3776AB]/40',
      shadowColor: 'shadow-[#3776AB]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:python.svg?color=%233776AB'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Backend', 
      color: 'rgba(65,105,225,0.15)', 
      borderColor: 'group-hover:border-[#4169E1]/40',
      shadowColor: 'shadow-[#4169E1]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:postgresql.svg?color=%234169E1'
    },
    { 
      name: 'MongoDB', 
      category: 'Backend', 
      color: 'rgba(71,162,72,0.15)', 
      borderColor: 'group-hover:border-[#47A248]/40',
      shadowColor: 'shadow-[#47A248]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:mongodb.svg?color=%2347A248'
    },
    { 
      name: 'AWS Cloud', 
      category: 'AWS Hosting', 
      color: 'rgba(255,153,0,0.15)', 
      borderColor: 'group-hover:border-[#FF9900]/40',
      shadowColor: 'shadow-[#FF9900]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:amazonwebservices.svg?color=%23FF9900'
    },
    { 
      name: 'Docker', 
      category: 'AWS Hosting', 
      color: 'rgba(36,150,237,0.15)', 
      borderColor: 'group-hover:border-[#2496ED]/40',
      shadowColor: 'shadow-[#2496ED]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:docker.svg?color=%232496ED'
    },
    { 
      name: 'Flutter Mobile', 
      category: 'Frontend', 
      color: 'rgba(2,86,155,0.15)', 
      borderColor: 'group-hover:border-[#02569B]/40',
      shadowColor: 'shadow-[#02569B]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:flutter.svg?color=%2302569B'
    },
    { 
      name: 'React Native', 
      category: 'Frontend', 
      color: 'rgba(97,218,251,0.15)', 
      borderColor: 'group-hover:border-[#61DAFB]/40',
      shadowColor: 'shadow-[#61DAFB]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB'
    },
    { 
      name: 'Java', 
      category: 'Backend', 
      color: 'rgba(248,152,29,0.15)', 
      borderColor: 'group-hover:border-[#F8981D]/40',
      shadowColor: 'shadow-[#F8981D]/10',
      logoUrl: 'https://api.iconify.design/logos:java.svg'
    },
    { 
      name: 'PHP', 
      category: 'Backend', 
      color: 'rgba(119,123,180,0.15)', 
      borderColor: 'group-hover:border-[#777BB4]/40',
      shadowColor: 'shadow-[#777BB4]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:php.svg?color=%23777BB4'
    },
    { 
      name: 'WordPress', 
      category: 'Backend', 
      color: 'rgba(33,117,155,0.15)', 
      borderColor: 'group-hover:border-[#21759B]/40',
      shadowColor: 'shadow-[#21759B]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:wordpress.svg?color=%2321759B'
    },
    { 
      name: 'Moodle', 
      category: 'Backend', 
      color: 'rgba(247,147,30,0.15)', 
      borderColor: 'group-hover:border-[#F7931E]/40',
      shadowColor: 'shadow-[#F7931E]/10',
      logoUrl: 'https://api.iconify.design/simple-icons:moodle.svg?color=%23F7931E'
    },
  ];

  const filteredData = activeCategory === 'All' 
    ? techData 
    : techData.filter((tech) => tech.category === activeCategory);

  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden border-b border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="technologies">
      {/* Absolute decorative gradient grids */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-white/[0.012] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Title Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-3">
              Standard Technology Ledger / Section 06
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed">
              We leverage tested frameworks matching strict performance rules, ensuring that your enterprise digital platform scales fluidly.
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex flex-wrap gap-2 self-start bg-white/[0.02] border border-white/5 p-1 rounded-xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" id="technologies-grid">
          <AnimatePresence mode="popLayout">
            {filteredData.map((tech) => {
              const handleCardClick = () => {
                if (!onViewTechDetail) return;
                
                // Map tech card name to our new structured individual technology page IDs
                const mapping: Record<string, string> = {
                  'React': 'tech-react',
                  'Next.js': 'tech-react',
                  'TypeScript': 'tech-react',
                  'Tailwind CSS': 'tech-react',
                  'Node.js': 'tech-node-js',
                  'Laravel': 'tech-laravel',
                  'Python': 'tech-python',
                  'PostgreSQL': 'tech-python',
                  'MongoDB': 'tech-mern-stack',
                  'Docker': 'tech-python',
                  'Flutter Mobile': 'tech-flutter',
                  'React Native': 'tech-react-native',
                  'Java': 'tech-java',
                  'PHP': 'tech-php',
                  'WordPress': 'tech-laravel',
                  'Moodle': 'tech-laravel',
                };
                
                const mappedId = mapping[tech.name];
                if (mappedId) {
                  onViewTechDetail(mappedId);
                }
              };

              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={handleCardClick}
                  className={`relative bg-white/[0.02] border border-white/10 ${tech.borderColor} rounded-2xl p-6 backdrop-blur-md hover:bg-white/[0.04] transition-all group flex flex-col items-center justify-center h-[140px] cursor-pointer shadow-lg hover:${tech.shadowColor}`}
                  style={{ 
                    '--glow-color': tech.color 
                  } as React.CSSProperties}
                >
                {/* Custom inner ambient light on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`
                  }}
                />

                {/* Floating shine top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-[0.2px]" />

                {/* Centered beautiful logo */}
                <div className="mb-3 relative z-10 flex items-center justify-center w-12 h-12">
                  <img 
                    src={tech.logoUrl} 
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Minimal Technology Name */}
                <span className="text-xs font-mono tracking-wider text-white/70 group-hover:text-white transition-colors relative z-10 text-center uppercase font-bold">
                  {tech.name}
                </span>

                {/* Small Pill Indicator for category */}
                <span className="absolute top-2 right-2 text-[8px] font-mono tracking-wider opacity-0 group-hover:opacity-100 text-white/40 transition-opacity uppercase px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">
                  {tech.category}
                </span>
              </motion.div>
            )})}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

