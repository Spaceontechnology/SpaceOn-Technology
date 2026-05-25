import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Bookmark, ChevronRight } from 'lucide-react';
import { BlogPostItem } from '../types';

interface BlogSectionProps {
  onSelectArticle: (articleTitle: string) => void;
}

export default function BlogSection({ onSelectArticle }: BlogSectionProps) {
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const articles: BlogPostItem[] = [
    {
      id: 'blog-1',
      title: 'Architecting the Future of AI SaaS Platforms',
      excerpt: 'How localized model embeddings, multi-model orchestrator layers, and smart caching reduce LLM payload latency by 45%.',
      category: 'ARTIFICIAL INTELLIGENCE',
      date: 'May 18, 2026',
      author: {
        name: 'Aris Thorne',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
      },
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      readTime: '6 min read',
      slug: 'blog/future-of-saas-platforms'
    },
    {
      id: 'blog-2',
      title: 'Building Scalable Cloud Infrastructure for Tens of Millions',
      excerpt: 'A practical deep dive into global Docker swarms, declarative Istio routing networks, and eBPF network telemetry policies.',
      category: 'CLOUD & DEVOPS',
      date: 'April 22, 2026',
      author: {
        name: 'Damon Finch',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
      },
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
      readTime: '9 min read',
      slug: 'blog/cloud-native-application-development'
    },
    {
      id: 'blog-3',
      title: 'Structural Integrity: Why UI/UX Architecture is King',
      excerpt: 'Why strict Tailwind design tokenization, fluid layout physics, and emotional design triggers command premium conversion indices.',
      category: 'INTERFACE DESIGN Systems',
      date: 'March 05, 2026',
      author: {
        name: 'Celine Dubois',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'
      },
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      readTime: '5 min read',
      slug: 'blog/ai-development-services-guide'
    }
  ];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden border-b border-white/5 px-5 md:px-[60px] lg:px-[120px]" id="insights">
      {/* Visual background blurred orbits */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[500px] h-[500px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-3">
              Developer Wisdom Archive / Section 08
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Latest Insights &amp; Wisdom
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed">
              We periodically document standard operational observations, engineering research, and architecture guidelines.
            </p>
          </div>

          <button
            onClick={() => onSelectArticle('All Architecture Library')}
            className="group flex items-center gap-2 text-xs font-semibold hover:text-white/80 transition-all font-mono border border-white/10 hover:border-white/20 rounded-full px-5 py-2.5 bg-white/5 self-start"
          >
            <span>EXPLORE RESEARCH ARCHIVE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              onClick={() => onSelectArticle(art.title)}
              initial={{ 
                opacity: 0, 
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                filter: 'blur(15px)',
                scale: 0.96,
                y: 40 
              }}
              whileInView={{ 
                opacity: 1, 
                backdropFilter: 'blur(0px)',
                WebkitBackdropFilter: 'blur(0px)',
                filter: 'blur(0px)',
                scale: 1,
                y: 0 
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative bg-gradient-to-b from-[#111111] to-[#060606] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.04] hover:border-white/[0.15]"
              id={`blog-card-${art.id}`}
            >
              {/* Fine horizontal glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Upper Section */}
              <div>
                {/* Visual Cover image and floats */}
                <div className="relative h-52 w-full overflow-hidden border-b border-white/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05] group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
                  
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest uppercase bg-black/75 border border-white/10 text-white px-2.5 py-1 rounded">
                    {art.category}
                  </span>

                  {/* Bookmark float */}
                  <button
                    onClick={(e) => toggleBookmark(art.id, e)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/60 hover:bg-black/95 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    title="Bookmark research article"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked[art.id] ? 'fill-white text-white' : ''}`} />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-[11px] font-mono text-white/40">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-white/30" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-white/30" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-semibold text-white tracking-tight leading-snug group-hover:text-white/95 transition-all">
                    {art.title}
                  </h3>

                  <p className="text-[13px] text-white/55 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Lower Section: Author detail row */}
              <div className="p-6 pt-4 border-t border-white/5 mx-6 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={art.author.avatar}
                    alt={art.author.name}
                    className="w-7 h-7 rounded-full border border-white/10 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[12px] font-medium text-white/70">
                    {art.author.name}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-white/40 group-hover:text-white font-semibold transition-colors">
                  <span className="font-sans">Review Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
