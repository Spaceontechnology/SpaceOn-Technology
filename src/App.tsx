/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Calendar, Eye, Terminal, ArrowUpRight, ArrowRight, ShieldCheck, Heart, Award, Command } from 'lucide-react';

import Navbar from './components/Navbar';
import BackgroundElements from './components/BackgroundElements';
import ConsultationModal from './components/ConsultationModal';
import PortfolioModal from './components/PortfolioModal';
import ServiceDetailPage from './components/ServiceDetailPage';
import HireAiDevelopersPage from './components/HireAiDevelopersPage';
import AiDevelopmentServicesPage from './components/AiDevelopmentServicesPage';
import AiAugmentedDeveloperPage from './components/AiAugmentedDeveloperPage';
import RequestQuotePage from './components/RequestQuotePage';
import ProductEngineeringPage from './components/ProductEngineeringPage';
import TechnologyDetailPage from './components/TechnologyDetailPage';
import { 
  ServicesPage, AboutPage, ProjectsPage, BlogPage, ContactPage, TechnologiesPage 
} from './components/InternalPages';

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
  const [isLoading, setIsLoading] = useState(true);
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
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    addLog("Vortex Core OS synchronized securely with Cloud host.", "success");
    const t1 = setTimeout(() => {
      addLog("Cryptographic keys loaded into memory cache.", "info");
    }, 1500);
    const t2 = setTimeout(() => {
      addLog("SPACEON global multi-zone cluster online. Delivery desk available.", "success");
    }, 3000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(t1);
      clearTimeout(t2);
    };
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

  // Enterprise-grade Dynamic SEO & JSON-LD Structured Schema Injection
  useEffect(() => {
    let title = "SpaceOn Technology | Enterprise Software Development Company";
    let desc = "SpaceOn Technology builds scalable SaaS platforms, enterprise software, AI-powered systems, mobile applications, and digital transformation solutions for modern businesses worldwide.";
    let keywords = "Software Development Company, Custom Software Development, Enterprise Software Solutions, SaaS Development Company, AI Development Services, Mobile App Development Company, Web Development Company, AI Automation Solutions, Product Engineering Services, Digital Transformation Company, Software Development Company in Ahmedabad, Software Company in Gujarat, AI Development Company India, SaaS Development Company Ahmedabad, Web Development Company India";
    let canonical = "https://spaceon.in";
    const schemas: any[] = [];

    // Global Base Organization and LocalBusiness schemas that align with corporate info
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://spaceon.in/#organization",
      "name": "SpaceOn Technology",
      "url": "https://spaceon.in",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://spaceon.in/#logo",
        "url": "https://patelarsh.com/SpaceOn%20Logo/Light.png",
        "caption": "SpaceOn Technology Logo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-70691-82990",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://linkedin.com/company/spaceon-technology"
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://spaceon.in/#localbusiness",
      "name": "SpaceOn Technology",
      "logo": "https://patelarsh.com/SpaceOn%20Logo/Light.png",
      "url": "https://spaceon.in",
      "telephone": "+917069182990",
      "email": "contact@spaceon.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Patel's House, 868, near Aksa Mosque, Kesharpura",
        "addressLocality": "Sabarkantha",
        "addressRegion": "Gujarat",
        "postalCode": "383230",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.6",
        "longitude": "73.0"
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://spaceon.in/#website",
      "url": "https://spaceon.in",
      "name": "SpaceOn Technology",
      "publisher": {
        "@id": "https://spaceon.in/#organization"
      }
    };

    // Always append the global trust signals
    schemas.push(orgSchema, localSchema, websiteSchema);

    if (!selectedServiceId) {
      // Home Page
      title = "SpaceOn Technology | Enterprise Software Development Company";
      desc = "SpaceOn Technology builds scalable SaaS platforms, enterprise software, AI-powered systems, mobile applications, and digital transformation solutions for modern businesses worldwide.";
      keywords = "Software Development Company, Custom Software Development, Enterprise Software Solutions, SaaS Development Company, AI Development Services, Mobile App Development Company, Web Development Company, AI Automation Solutions, Product Engineering Services, Digital Transformation Company, Software Development Company in Ahmedabad, Software Company in Gujarat, AI Development Company India, SaaS Development Company Ahmedabad, Web Development Company India";
      canonical = "https://spaceon.in";
    } else if (selectedServiceId === 'ai-automation') {
      title = "AI Development Services | SpaceOn Technology";
      desc = "Build intelligent AI-powered applications with SpaceOn Technology. We provide AI automation, machine learning, NLP, computer vision, and enterprise AI development solutions.";
      keywords = "AI Development Services, AI Application Development, Machine Learning, Natural Language Processing, Computer Vision, AI Automation Solutions, AI Development Company India";
      canonical = "https://spaceon.in/services/ai-development";

      // Add AI FAQ list schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What AI engineering capabilities do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide end-to-end AI Development Services including custom large language model (LLM) fine-tuning, retrieval-augmented generation (RAG) platforms, predictive analytics engines, NLP models, and computer vision integration."
            }
          },
          {
            "@type": "Question",
            "name": "How does SpaceOn Technology protect training files and corporate security?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We run private model instances with role-based cryptographic credential gating, VPC security borders, and zero model data retention agreements to prevent data leaks."
            }
          }
        ]
      }, {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Development Services",
        "provider": { "@id": "https://spaceon.in/#organization" },
        "serviceType": "Artificial Intelligence Engineering",
        "description": "Custom LLM integrations, retrieval-augmented generation pipelines, and agentic process automation."
      });
    } else if (selectedServiceId === 'saas-dev') {
      title = "SaaS Development Company | SpaceOn Technology";
      desc = "SpaceOn Technology develops scalable SaaS platforms with modern cloud architecture, enterprise-grade security, and exceptional user experience.";
      keywords = "SaaS Development Company, SaaS Platforms, Cloud Native Software, Custom SaaS platforms, Multi-tenant software architecture";
      canonical = "https://spaceon.in/services/saas-development";

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SaaS Platform Engineering",
        "provider": { "@id": "https://spaceon.in/#organization" },
        "serviceType": "Software-as-a-Service Product Development",
        "description": "Decoupled cloud-native multi-tenant platform design, metered billing APIs, and hyper-scalable architectures."
      });
    } else if (selectedServiceId === 'web-dev') {
      title = "Web Development Company | SpaceOn Technology";
      desc = "SpaceOn Technology is a leading web software development company, creating highly responsive web applications, portals, and cloud solutions optimized for speed & SEO.";
      keywords = "Web Development Company, Web Application Development, React web development, NextJS, Node.js development, Web development India";
      canonical = "https://spaceon.in/services/web-development";

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Infrastructure Coding",
        "provider": { "@id": "https://spaceon.in/#organization" },
        "serviceType": "Enterprise-grade Custom Web Applications",
        "description": "Fast-rendering responsive React portfolios, state management setups, and API proxies with high-density security."
      });
    } else if (selectedServiceId === 'mobile-app') {
      title = "Mobile App Development Company | SpaceOn Technology";
      desc = "Build next-generation mobile applications for iOS and Android with SpaceOn Technology. We develop high-performance cross-platform and native mobile apps.";
      keywords = "Mobile App Development Company, iOS App Development, Android Developers, React Native, Flutter, mobile software, App development company India";
      canonical = "https://spaceon.in/services/mobile-app-development";

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile Application Development",
        "provider": { "@id": "https://spaceon.in/#organization" },
        "serviceType": "Native & Cross-Platform Mobile Applications",
        "description": "High frame-rate native compilation using Swift/Kotlin or unified frameworks like React Native and Flutter."
      });
    } else if (selectedServiceId === 'product-eng') {
      title = "Product Engineering Services | SpaceOn Technology";
      desc = "Accelerate innovation with our comprehensive product engineering services. From architectural design to continuous cloud support, we scale core products securely.";
      keywords = "Product Engineering Services, Software engineering company, product lifecycle development, MVP development, software design";
      canonical = "https://spaceon.in/services/product-engineering";
    } else if (selectedServiceId === 'ai-augmented-dev') {
      title = "AI Augmented Developer Solutions | SpaceOn Technology";
      desc = "Leverage next-generation AI-aligned engineers with high-density code synthesis pipelines, designed to optimize quality benchmarks and product turnaround times.";
      keywords = "AI Augmented Developers, AI developer alignment, speed engineering, high performance development teams";
      canonical = "https://spaceon.in/services/ai-augmented-developer";
    } else if (selectedServiceId === 'hire-ai-devs') {
      title = "Hire Certified AI & Web Developers | SpaceOn Technology";
      desc = "Hire pre-vetted, top-tier AI developers, machine learning experts, and custom software engineers from SpaceOn Technology to accelerate your development roadmap.";
      keywords = "Hire AI Developers, Dedicated AI Engineers, Outsource software developers India, hire machine learning developers";
      canonical = "https://spaceon.in/services/hire-ai-developers";
    } else if (selectedServiceId === 'request-quote') {
      title = "Request a Quote | SpaceOn Technology";
      desc = "Get a precise engineering estimate and consultation for your custom software development, mobile application, SaaS platform, or AI project.";
      keywords = "Request Software Quote, Custom software cost estimation, Hire developers quote";
      canonical = "https://spaceon.in/contact";
    } else if (selectedServiceId === 'about') {
      title = "About SpaceOn Technology | Enterprise Software Engineering";
      desc = "Learn about SpaceOn Technology, a premium enterprise software engineering and digital transformation company enabling modern businesses to scale.";
      keywords = "SpaceOn Technology, Software development team, About SpaceOn, Enterprise consulting";
      canonical = "https://spaceon.in/about";
    } else if (selectedServiceId === 'contact') {
      title = "Contact Our Engineering Desk | SpaceOn Technology";
      desc = "Connect directly with the SpaceOn Technology engineering team. Get secure voice support and architectural blueprint consultations for your enterprise.";
      keywords = "Contact SpaceOn Technology, SpaceOn Email, Office Phone India, Kesharpura software company";
      canonical = "https://spaceon.in/contact";
    } else if (selectedServiceId === 'projects-page') {
      title = "Sovereign Case Studies & Software Portfolio | SpaceOn Technology";
      desc = "Explore our portfolio of scalable SaaS architectures, AI defect detection pipelines, enterprise software, and cloud-native solutions.";
      keywords = "Case Studies, Software Project Portfolio, SaaS platforms built, AI systems examples";
      canonical = "https://spaceon.in/projects";
      
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spaceon.in/" },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://spaceon.in/projects" }
        ]
      });
    } else if (selectedServiceId === 'blog-page') {
      title = "Engineering Insights, AI & Cloud Blog | SpaceOn Technology";
      desc = "Stay updated with the latest trends in software engineering, AI automation systems, SaaS platform design, and secure cloud infrastructure architectures.";
      keywords = "Software Engineering Blog, Cloud Infrastructure Guide, AI SaaS platform architecture, UIUX Design trends";
      canonical = "https://spaceon.in/blog";

      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spaceon.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://spaceon.in/blog" }
        ]
      }, {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "SpaceOn Engineering wisdom Archive",
        "description": "Technological insights and software development strategies."
      });
    } else if (selectedServiceId === 'technologies-page') {
      title = "Modern Tech Stack & Software Capabilities | SpaceOn Technology";
      desc = "Explore our enterprise technology stack including React, Node.js, Next.js, FastAPI, Python, Kubernetes, and secure cloud system capabilities.";
      keywords = "Enterprise Tech Stack, React developers, Python FastAPI, Cloud Kubernetes architecture";
      canonical = "https://spaceon.in/technologies";
    } else if (selectedServiceId.startsWith('tech-')) {
      const formattedTech = selectedServiceId.replace('tech-', '').toUpperCase();
      title = `${formattedTech} Company & Certified Developers | SpaceOn Technology`;
      desc = `Accelerate your product delivery with certified ${formattedTech} developers from SpaceOn Technology. Clean coding guidelines, optimized performance, and SLA backing.`;
      keywords = `${formattedTech} Development Company, ${formattedTech} Software Developers, Certified ${formattedTech} programmers`;
      canonical = `https://spaceon.in/technologies/${selectedServiceId.replace('tech-', '')}`;
    }

    // Apply document state updates directly to the real viewport DOM
    document.title = title;

    // Helper function to manage metadata tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', desc);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', desc, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);

    // Canonical link management
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Standard high-density JSON-LD Script Injection
    // First, purge existing dynamic schemas
    const oldScripts = document.querySelectorAll('script[data-seo="spaceon"]');
    oldScripts.forEach(el => el.remove());

    // Inject all current structured schemas into the header
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'spaceon');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [selectedServiceId]);

  const handleStartProject = () => {
    addLog("Client initiated Request Quote form routing sequence.", "success");
    setInitialService('Custom Software Development');
    setSelectedServiceId('request-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const dest = destination.toLowerCase();
    addLog(`Direct routes triggered scroll destination: "#${destination}"`, "warning");

    if (dest === 'home') {
      setSelectedServiceId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Check if destination is any of the premium internal pages
    if (dest.includes('about')) {
      setSelectedServiceId('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dest.includes('contact')) {
      setSelectedServiceId('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dest.includes('portfolio') || dest.includes('projects')) {
      setSelectedServiceId('projects-page');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dest.includes('insight') || dest.includes('blog')) {
      setSelectedServiceId('blog-page');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dest.includes('tech')) {
      setSelectedServiceId('technologies-page');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dest === 'services') {
      setSelectedServiceId('services-page');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('web software') || dest === 'web-dev') {
      setSelectedServiceId('web-dev');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('saas') || dest === 'saas-dev') {
      setSelectedServiceId('saas-dev');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('mobile app') || dest === 'mobile-app') {
      setSelectedServiceId('mobile-app');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('design system') || dest.includes('ux') || dest === 'ui-ux') {
      setSelectedServiceId('ui-ux');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('product engineering') || dest === 'product-eng') {
      setSelectedServiceId('product-eng');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('ai orchestration') || dest.includes('ai development') || dest.includes('ai service') || dest.includes('llm') || dest === 'ai-automation' || dest === 'ai-dev') {
      setSelectedServiceId('ai-automation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('augmented') || dest === 'ai-augmented-dev') {
      setSelectedServiceId('ai-augmented-dev');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('hire ai') || dest === 'hire-ai-devs') {
      setSelectedServiceId('hire-ai-devs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (dest.includes('devops') || dest.includes('kubernetes') || dest === 'cloud-devops') {
      setSelectedServiceId('cloud-devops');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (selectedServiceId) {
      setSelectedServiceId(null);
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
    <LayoutGroup>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
        
        {/* Premium Cinematic Entry Loader */}
        <AnimatePresence mode="popLayout">
          {isLoading && (
            <motion.div
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Ambient emerald blur/glow effect in the center */}
              <div className="absolute w-[450px] h-[450px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center px-6 select-none"
              >
              <div className="flex flex-col items-center gap-6">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src="https://patelarsh.com/SpaceOn%20Logo/Light.png"
                  alt="SPACEON"
                  className="h-[50px] sm:h-[65px] md:h-[80px] w-auto object-contain"
                  referrerPolicy="no-referrer"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                
                {/* Minimalist spinner alongside logo */}
                <div className="flex items-center gap-2 mt-2">
                  <Command className="w-4 h-4 text-emerald-400 animate-spin" />
                  <span className="text-xs font-mono tracking-widest text-[#00df89]">LOADING SYSTEMS</span>
                </div>
              </div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mt-6 max-w-xs">
                Sovereign Engineering
              </p>
              
              {/* Ultra smooth glowing horizontal progress track */}
              <div className="w-32 h-[1px] bg-white/10 mt-6 relative overflow-hidden rounded-full font-sans">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="absolute w-1/2 h-full bg-emerald-400 shadow-[0_0_8px_#10b981]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cinematic animated fluid space Background */}
      <BackgroundElements />

      {/* Main Container Layout */}
      <div className="relative z-20 min-h-screen flex flex-col justify-between">
        
        {/* Navbar */}
        <Navbar 
          onStartProject={handleStartProject}
          onNavigate={handleNavigation}
          onViewServiceDetail={handleViewServiceDetail}
          isLoading={isLoading}
        />

         {selectedServiceId ? (
          selectedServiceId === 'request-quote' ? (
            <RequestQuotePage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              initialService={initialService}
            />
          ) : selectedServiceId === 'product-eng' ? (
            <ProductEngineeringPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'ai-augmented-dev' ? (
            <AiAugmentedDeveloperPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'hire-ai-devs' ? (
            <HireAiDevelopersPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'ai-automation' ? (
            <AiDevelopmentServicesPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'about' ? (
            <AboutPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'contact' ? (
            <ContactPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'projects-page' ? (
            <ProjectsPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'blog-page' ? (
            <BlogPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
            />
          ) : selectedServiceId === 'technologies-page' ? (
            <TechnologiesPage 
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
              onViewTechDetail={handleViewServiceDetail}
            />
          ) : selectedServiceId.startsWith('tech-') ? (
            <TechnologyDetailPage 
              technologyId={selectedServiceId}
              onBack={() => {
                addLog("Restoring main software suite layout.", "info");
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookConsultation={handleBookConsultation}
              onNavigateToTech={(techId) => {
                addLog(`Transitioning technology sub-mesh to: "${techId}"`, "info");
                setSelectedServiceId(techId);
              }}
            />
          ) : selectedServiceId === 'services-page' ? (
            <ServicesPage 
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
                  Enterprise Software Development Company
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
                    <div className="rounded-full bg-emerald-500 hover:bg-emerald-400 border border-emerald-500/10 overflow-hidden px-[32px] py-[13px] flex items-center justify-center gap-2 relative shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                      <Calendar className="w-4.5 h-4.5 text-black group-hover:translate-x-0.5 transition-transform duration-300" />
                      <span className="text-black text-[14px] font-bold tracking-wide">
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
                    <div className="rounded-full border border-white/20 hover:border-white/40 bg-zinc-950/40 hover:bg-white/5 overflow-hidden px-[32px] py-[13px] flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300">
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
              <TechStack onViewTechDetail={handleViewServiceDetail} />
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
          </>
        )}

        <Footer 
          onNavigate={handleNavigation} 
          onContactEmail={() => handleBookConsultation('Support Email Inquiry')} 
        />

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
    </LayoutGroup>
  );
}
