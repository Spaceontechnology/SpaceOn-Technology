/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Eye, Terminal, ArrowUpRight, ArrowRight, ShieldCheck, Heart, Award, Command } from 'lucide-react';

import Navbar from './components/Navbar';
import BackgroundElements from './components/BackgroundElements';
import ConsultationModal from './components/ConsultationModal';
import PortfolioModal from './components/PortfolioModal';
import ServiceDetailPage from './components/ServiceDetailPage';
import HireAiDevelopersPage from './components/HireAiDevelopersPage';

// Imported modular components matching 12-section project grid
import TrustedMarquee from './components/TrustedMarquee';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import LiveSimulation from './components/LiveSimulation';
import FeaturedProjects from './components/FeaturedProjects';
import StatsSection from './components/StatsSection';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ScrollGlassReveal from './components/ScrollGlassReveal';

interface LogMessage {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning';
  text: string;
}

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('service');
  });
  const [initialService, setInitialService] = useState('Custom Software Development');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Real-time developer system toasting telemetry feed logs
  const [toasts, setToasts] = useState<LogMessage[]>([]);

  const addLog = (text: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    const newLog: LogMessage = {
      id: Math.random().toString(),
      timestamp: timeStr,
      type,
      text
    };
    setToasts((prev) => [newLog, ...prev].slice(0, 4));
  };

  // Initial load simulation telemetry keys
  useEffect(() => {
    addLog("Vortex Core OS synchronized securely with Cloud host.", "success");
    setTimeout(() => {
      addLog("Cryptographic keys loaded into memory cache.", "info");
    }, 1500);
    setTimeout(() => {
      addLog("SPACEON global multi-zone cluster online. Delivery desk available.", "success");
    }, 3000);
  }, []);

  // Synchronize 'service' query parameter with state to keep URLs deep-linkable
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentServiceInUrl = params.get('service');
    if (selectedServiceId !== currentServiceInUrl) {
      const url = new URL(window.location.href);
      if (selectedServiceId) {
        url.searchParams.set('service', selectedServiceId);
        addLog(`Transitioning URL routing sub-mesh state: "?service=${selectedServiceId}"`, "info");
      } else {
        url.searchParams.delete('service');
        addLog("Reverting URL routing thread to primary software suite.", "info");
      }
      window.history.pushState({ serviceId: selectedServiceId }, '', url.toString());
    }
  }, [selectedServiceId]);

  // Support standard browser history popstate interactions (back/forward keys)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const service = params.get('service');
      setSelectedServiceId(service);
      addLog(`Browser popstate handled: "${service || 'Root Suite'}"`, "warning");
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleStartProject = () => {
    addLog("Client initiated Start Project request. Initializing briefing ledger.", "info");
    setInitialService('Custom Software Development');
    setConsultationOpen(true);
  };

  const handleBookConsultation = (serviceFocus?: string) => {
    addLog(`Consultation pre-set focused on: "${serviceFocus || 'General Spec Audit'}"`, "info");
    if (serviceFocus) {
      setInitialService(serviceFocus);
    } else {
      setInitialService('Custom Software Development');
    }
    setConsultationOpen(true);
  };

  const handleViewPortfolio = () => {
    addLog("Awaiting secure connection to engineering files...", "info");
    setPortfolioOpen(true);
  };

  const handleOpenCaseStudy = (projectId: string) => {
    addLog(`Opening system blueprint documentation folder: "${projectId}"`, "success");
    setSelectedProjectId(projectId);
    setPortfolioOpen(true);
  };

  const handleViewServiceDetail = (serviceId: string) => {
    addLog(`Decoupling individual software blueprint profile: "${serviceId}"`, "success");
    setSelectedServiceId(serviceId);
  };

  // Modern routing smooth-scrolling mechanics
  const handleNavigation = (destination: string) => {
    addLog(`Direct routes triggered scroll destination: "#${destination}"`, "warning");
    
    if (selectedServiceId) {
      setSelectedServiceId(null);
    }

    if (destination === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Delay scroll action slightly so primary elements have mounted if we were on the service detail page
    setTimeout(() => {
      const element = document.getElementById(destination);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If direct element ID is not matched, treat as modal pre-selection
        handleBookConsultation(destination);
      }
    }, 120);
  };

  const handleSelectArticle = (title: string) => {
    addLog(`Redirect routing user to insights thesis: "${title}"`, "info");
    handleBookConsultation(`Insights Inquiry: ${title}`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      
      {/* Cinematic animated fluid space Background */}
      <BackgroundElements />

      {/* Main Container Layout */}
      <div className="relative z-20 min-h-screen flex flex-col justify-between">
        
        {/* Navbar */}
        <Navbar 
          onStartProject={handleStartProject}
          onNavigate={handleNavigation}
          onViewServiceDetail={handleViewServiceDetail}
        />

        {selectedServiceId ? (
          selectedServiceId === 'hire-ai-devs' ? (
            <HireAiDevelopersPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : (
            <ServiceDetailPage 
              serviceId={selectedServiceId}
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                // Scroll back down to services section cleanly
                setTimeout(() => {
                  const servicesSec = document.getElementById('services');
                  if (servicesSec) {
                    servicesSec.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);
              }}
              onBookConsultation={handleBookConsultation}
            />
          )
        ) : (
          <>
            {/* Hero Section Container */}
            <header className="w-full relative min-h-screen flex flex-col justify-center items-center px-5 pt-[180px] sm:pt-[210px] md:pt-[250px] pb-[120px] overflow-hidden" id="home">
              {/* Fullscreen looping cinematic video background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
              />
              
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none" />
              
              {/* Centered Content block */}
              <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative">
                
                {/* Animated Announcement Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8"
                  id="announcement-badge"
                >
                  <div 
                    onClick={() => handleNavigation('services')}
                    className="rounded-full bg-white/[0.08] hover:bg-white/[0.12] transition-colors duration-300 border border-white/25 px-4 py-2 flex items-center gap-2.5 backdrop-blur-md select-none group cursor-pointer"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    
                    <span className="text-[12px] sm:text-[13px] font-medium text-white/75 tracking-wider">
                      Sovereign Engineering for Global Scale &middot;&nbsp;
                      <strong className="text-white font-semibold group-hover:underline inline-flex items-center gap-1">
                        Trusted by modern startups &amp; enterprises
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-0.5 group-hover:translate-x-0.5" />
                      </strong>
                    </span>
                  </div>
                </motion.div>

                {/* Cinematic Typography display headings */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[92px] font-semibold leading-[0.95] tracking-[-0.05em] max-w-[950px] select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 text-center drop-shadow-2xl font-sans"
                  id="hero-main-title"
                >
                  Engineering Digital Experiences for the Future
                </motion.h1>

                {/* Immersive high level Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 text-[15px] sm:text-[17px] text-white/70 max-w-[700px] leading-relaxed select-none tracking-wide"
                  id="hero-subtitle"
                >
                  We build scalable websites, SaaS products, enterprise software, AI systems, and mobile applications designed for speed, innovation, and growth.
                </motion.p>

                {/* Main Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                  id="hero-cta-group"
                >
                  {/* Primary Consultation Trigger */}
                  <button
                    onClick={() => handleBookConsultation('General Digital Strategy')}
                    className="w-full sm:w-auto relative scale-100 hover:scale-[1.03] transition-all duration-300 active:scale-95 group focus:outline-none cursor-pointer text-black"
                    id="cta-book-consultation"
                  >
                    <div className="rounded-full bg-white border border-white/10 overflow-hidden px-[32px] py-[13px] flex items-center justify-center gap-2 relative">
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <Calendar className="w-4.5 h-4.5 text-black group-hover:translate-x-0.5 transition-transform duration-300" />
                      <span className="text-black text-[14px] font-semibold tracking-wide">
                        Book Consultation
                      </span>
                    </div>
                  </button>

                  {/* Secondary Case study Files */}
                  <button
                    onClick={handleViewPortfolio}
                    className="w-full sm:w-auto relative scale-100 hover:scale-[1.03] transition-all duration-300 active:scale-95 group focus:outline-none cursor-pointer text-white"
                    id="cta-view-portfolio"
                  >
                    <div className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 overflow-hidden px-[32px] py-[13px] flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300">
                      <Eye className="w-4.5 h-4.5 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white text-[14px] font-semibold tracking-wide">
                        View Portfolio
                      </span>
                    </div>
                  </button>
                </motion.div>

              </div>
            </header>

            {/* Section 3: Trusted Companies Marquee */}
            <ScrollGlassReveal>
              <TrustedMarquee />
            </ScrollGlassReveal>

            {/* Section 4: Services built for modern businesses */}
            <ScrollGlassReveal>
              <ServicesSection 
                onSelectService={handleBookConsultation} 
                onViewServiceDetail={handleViewServiceDetail}
              />
            </ScrollGlassReveal>

            {/* Section 5: Process / Timeline Section */}
            <ScrollGlassReveal>
              <ProcessSection />
            </ScrollGlassReveal>

            {/* Section 5.5: Interactive Telemetry Core Live Simulation */}
            <ScrollGlassReveal>
              <LiveSimulation onScheduleCall={() => handleBookConsultation('Simulation Strategic Call')} />
            </ScrollGlassReveal>

            {/* Section 6: Featured Projects Showcase */}
            <ScrollGlassReveal>
              <FeaturedProjects onOpenCaseStudy={handleOpenCaseStudy} />
            </ScrollGlassReveal>

            {/* Section 7: Statistical indicators */}
            <ScrollGlassReveal>
              <StatsSection />
            </ScrollGlassReveal>

            {/* Section 8: Categorized dynamic tech library */}
            <ScrollGlassReveal>
              <TechStack />
            </ScrollGlassReveal>

            {/* Section 9: Client testimonial carousel */}
            <ScrollGlassReveal>
              <Testimonials />
            </ScrollGlassReveal>

            {/* Section 10: Latest Insights blog showcase */}
            <ScrollGlassReveal>
              <BlogSection onSelectArticle={handleSelectArticle} />
            </ScrollGlassReveal>

            {/* Section 11: Call to Action Master Panel */}
            <ScrollGlassReveal>
              <CTABanner onScheduleCall={() => handleBookConsultation('Strategic Launch Call')} />
            </ScrollGlassReveal>

            {/* Section 12: Premium Footer links & brand copyrights */}
            <Footer 
              onNavigate={handleNavigation} 
              onContactEmail={() => handleBookConsultation('Support Email Inquiry')} 
            />
          </>
        )}

        {/* Floating telemetry Event ledger stream positioned on screen for premium transparency */}
        <div className="fixed bottom-6 right-6 z-40 max-w-xs hidden xl:block bg-black/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2">
            <div className="flex items-center gap-2 text-white/50">
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-[9px] font-mono tracking-wider font-bold">SYSTEM TELEMETRY LINK</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-1.5 h-[50px] overflow-hidden">
            <AnimatePresence>
              {toasts.length === 0 ? (
                <div className="text-[10px] font-mono text-white/20 py-2">
                  Awaiting system links...
                </div>
              ) : (
                toasts.slice(0, 3).map((toast) => (
                  <div key={toast.id} className="text-[9.5px] font-mono flex items-start gap-1 leading-normal">
                    <span className="text-emerald-400 font-bold">&gt;&nbsp;</span>
                    <span className="text-white/60 truncate flex-1">{toast.text}</span>
                  </div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Interactive Consultation Form Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={initialService}
      />

      {/* Interactive Portfolio Spec files Modal */}
      <PortfolioModal
        isOpen={portfolioOpen}
        onClose={() => setPortfolioOpen(false)}
        onBookConsultation={handleBookConsultation}
        defaultProjectId={selectedProjectId || undefined}
      />

    </div>
  );
}
