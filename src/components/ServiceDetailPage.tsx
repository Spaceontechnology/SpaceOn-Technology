import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  Layers, 
  Smartphone, 
  Code2, 
  Sparkles, 
  Cloud, 
  CheckCircle2, 
  Activity,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const techLogosMap: Record<string, { logoUrl: string; color: string; bgGlow: string }> = {
  'Next.js': { 
    logoUrl: 'https://cdn.simpleicons.org/nextdotjs/ffffff', 
    color: '#ffffff',
    bgGlow: 'rgba(255,255,255,0.06)'
  },
  'React': { 
    logoUrl: 'https://cdn.simpleicons.org/react/61DAFB', 
    color: '#61DAFB',
    bgGlow: 'rgba(97,218,251,0.06)'
  },
  'TypeScript': { 
    logoUrl: 'https://cdn.simpleicons.org/typescript/3178C6', 
    color: '#3178C6',
    bgGlow: 'rgba(49,120,198,0.06)'
  },
  'Tailwind CSS': { 
    logoUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', 
    color: '#06B6D4',
    bgGlow: 'rgba(6,182,212,0.06)'
  },
  'Tailwind custom tokens': { 
    logoUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', 
    color: '#06B6D4',
    bgGlow: 'rgba(6,182,212,0.06)'
  },
  'Vercel Edge': { 
    logoUrl: 'https://cdn.simpleicons.org/vercel/ffffff', 
    color: '#ffffff',
    bgGlow: 'rgba(255,255,255,0.06)'
  },
  'GraphQL': { 
    logoUrl: 'https://cdn.simpleicons.org/graphql/E10098', 
    color: '#E10098',
    bgGlow: 'rgba(225,0,152,0.06)'
  },
  'Node.js': { 
    logoUrl: 'https://cdn.simpleicons.org/nodedotjs/339933', 
    color: '#339933',
    bgGlow: 'rgba(51,153,51,0.06)'
  },
  'Laravel': { 
    logoUrl: 'https://cdn.simpleicons.org/laravel/FF2D20', 
    color: '#FF2D20',
    bgGlow: 'rgba(255,45,32,0.06)'
  },
  'Go': { 
    logoUrl: 'https://cdn.simpleicons.org/go/00ADD8', 
    color: '#00ADD8',
    bgGlow: 'rgba(0,173,216,0.06)'
  },
  'PostgreSQL': { 
    logoUrl: 'https://cdn.simpleicons.org/postgresql/4169E1', 
    color: '#4169E1',
    bgGlow: 'rgba(65,105,225,0.06)'
  },
  'Stripe API': { 
    logoUrl: 'https://cdn.simpleicons.org/stripe/635BFF', 
    color: '#635BFF',
    bgGlow: 'rgba(99,91,255,0.06)'
  },
  'Redis Cache': { 
    logoUrl: 'https://cdn.simpleicons.org/redis/DC382D', 
    color: '#DC382D',
    bgGlow: 'rgba(220,56,45,0.06)'
  },
  'React Native': { 
    logoUrl: 'https://cdn.simpleicons.org/react/61DAFB', 
    color: '#61DAFB',
    bgGlow: 'rgba(97,218,251,0.06)'
  },
  'Expo': { 
    logoUrl: 'https://cdn.simpleicons.org/expo/ffffff', 
    color: '#ffffff',
    bgGlow: 'rgba(255,255,255,0.06)'
  },
  'Flutter': { 
    logoUrl: 'https://cdn.simpleicons.org/flutter/02569B', 
    color: '#02569B',
    bgGlow: 'rgba(2,86,155,0.06)'
  },
  'SQLite': { 
    logoUrl: 'https://cdn.simpleicons.org/sqlite/003B57', 
    color: '#003B57',
    bgGlow: 'rgba(0,59,87,0.06)'
  },
  'App Store Pipelines': { 
    logoUrl: 'https://cdn.simpleicons.org/appstore/007AFF', 
    color: '#007AFF',
    bgGlow: 'rgba(0,122,255,0.06)'
  },
  'Figma Pro': { 
    logoUrl: 'https://cdn.simpleicons.org/figma/F24E1E', 
    color: '#F24E1E',
    bgGlow: 'rgba(242,78,30,0.06)'
  },
  'Adobe Suite': { 
    logoUrl: 'https://cdn.simpleicons.org/adobe/FF0000', 
    color: '#FF0000',
    bgGlow: 'rgba(255,0,0,0.06)'
  },
  'CSS Variables': { 
    logoUrl: 'https://cdn.simpleicons.org/css3/1572B6', 
    color: '#1572B6',
    bgGlow: 'rgba(21,114,182,0.06)'
  },
  'W3C Accessibility Checker': { 
    logoUrl: 'https://cdn.simpleicons.org/w3c/005A9C', 
    color: '#005A9C',
    bgGlow: 'rgba(0,90,156,0.06)'
  },
  'Gemini API': { 
    logoUrl: 'https://cdn.simpleicons.org/googlegemini/8E75C2', 
    color: '#8E75C2',
    bgGlow: 'rgba(142,117,194,0.06)'
  },
  'TypeScript SDK': { 
    logoUrl: 'https://cdn.simpleicons.org/typescript/3178C6', 
    color: '#3178C6',
    bgGlow: 'rgba(49,120,198,0.06)'
  },
  'Python AI Libraries': { 
    logoUrl: 'https://cdn.simpleicons.org/python/3776AB', 
    color: '#3776AB',
    bgGlow: 'rgba(55,118,171,0.06)'
  },
  'Qdrant Vector DB': { 
    logoUrl: 'https://cdn.simpleicons.org/qdrant/ffffff', 
    color: '#ff4c00',
    bgGlow: 'rgba(255,76,0,0.06)'
  },
  'FastAPI': { 
    logoUrl: 'https://cdn.simpleicons.org/fastapi/009688', 
    color: '#009688',
    bgGlow: 'rgba(0,150,136,0.06)'
  },
  'LangChain Framework': { 
    logoUrl: 'https://cdn.simpleicons.org/langchain/ffffff', 
    color: '#ffd100',
    bgGlow: 'rgba(255,209,0,0.06)'
  },
  'Terraform': { 
    logoUrl: 'https://cdn.simpleicons.org/terraform/844FBA', 
    color: '#844FBA',
    bgGlow: 'rgba(132,79,186,0.06)'
  },
  'Kubernetes (K8s)': { 
    logoUrl: 'https://cdn.simpleicons.org/kubernetes/326CE5', 
    color: '#326CE5',
    bgGlow: 'rgba(50,108,229,0.06)'
  },
  'Docker Engine': { 
    logoUrl: 'https://cdn.simpleicons.org/docker/2496ED', 
    color: '#2496ED',
    bgGlow: 'rgba(36,150,237,0.06)'
  },
  'GitHub Actions': { 
    logoUrl: 'https://cdn.simpleicons.org/githubactions/2088FF', 
    color: '#2088FF',
    bgGlow: 'rgba(32,136,255,0.06)'
  },
  'GCP / AWS Cloud': { 
    logoUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4', 
    color: '#4285F4',
    bgGlow: 'rgba(66,133,244,0.06)'
  },
  'Prometheus & Grafana': { 
    logoUrl: 'https://cdn.simpleicons.org/prometheus/E6522C', 
    color: '#E6522C',
    bgGlow: 'rgba(230,82,44,0.06)'
  },
  'Java': { 
    logoUrl: 'https://cdn.simpleicons.org/java/F8981D', 
    color: '#FFF200',
    bgGlow: 'rgba(248,152,29,0.08)'
  },
  'PHP': { 
    logoUrl: 'https://cdn.simpleicons.org/php/777BB4', 
    color: '#777BB4',
    bgGlow: 'rgba(119,123,180,0.06)'
  },
  'WordPress': { 
    logoUrl: 'https://cdn.simpleicons.org/wordpress/21759B', 
    color: '#21759B',
    bgGlow: 'rgba(33,117,155,0.06)'
  },
  'Moodle': { 
    logoUrl: 'https://cdn.simpleicons.org/moodle/F7931E', 
    color: '#F7931E',
    bgGlow: 'rgba(247,147,30,0.06)'
  }
};

const TechLogoElement = ({ tech }: { tech: string; key?: string }) => {
  const [loadError, setLoadError] = useState(false);
  const info = techLogosMap[tech] || {
    logoUrl: `https://cdn.simpleicons.org/${tech.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/ffffff`,
    color: '#ffffff',
    bgGlow: 'rgba(255,255,255,0.05)'
  };

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="flex items-center gap-3.5 px-4.5 py-3.5 bg-white/[0.015] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-all duration-300 rounded-2xl cursor-default group"
      style={{
        boxShadow: `0 4px 20px -10px ${info.color}15`
      }}
    >
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] group-hover:border-white/15 transition-all relative overflow-hidden shrink-0"
        style={{ backgroundColor: info.bgGlow }}
      >
        {/* Glow behind logo */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-0 group-hover:opacity-20 transition-opacity blur-md"
          style={{ backgroundColor: info.color }}
        />
        
        {!loadError ? (
          <img 
            src={info.logoUrl} 
            alt={tech} 
            className="w-5.5 h-5.5 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
            referrerPolicy="no-referrer"
            onError={() => setLoadError(true)}
          />
        ) : (
          <span className="text-xs font-mono font-bold text-white/40 uppercase">
            {tech.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <div className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
          {tech}
        </div>
        <div className="text-[10px] font-mono text-white/30 tracking-wider uppercase mt-0.5">
          Verified Core
        </div>
      </div>
    </motion.div>
  );
};

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
  onBookConsultation: (serviceFocus: string) => void;
}

export default function ServiceDetailPage({ serviceId, onBack, onBookConsultation }: ServiceDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'estimator'>('overview');
  
  // Interactive estimator state
  const [scaleFactor, setScaleFactor] = useState<number>(3); // 1-5 scale
  const [frequencyFactor, setFrequencyFactor] = useState<number>(2); // 1-3 level
  const [addSLA, setAddSLA] = useState<boolean>(false);

  // Scroll to top on load and reset states
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveTab('overview');
    if (serviceId === 'cloud-devops' || serviceId === 'saas-dev') {
      setScaleFactor(4);
    } else {
      setScaleFactor(3);
    }
    setFrequencyFactor(2);
    setAddSLA(false);
  }, [serviceId]);

  // Complete specs and diagrams data for each individual service
  const serviceDetailsMap: Record<string, {
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    icon: any;
    accentGlow: string;
    bannerImage: string;
    architectureTitle: string;
    architectureSteps: string[];
    deepTechOverview: string;
    keyDeliverables: { name: string; desc: string; detail: string }[];
    techStack: string[];
    costEstimatorLabels: {
      scaleName: string;
      scaleDesc: string[];
      freqName: string;
      freqDesc: string[];
      baseEstimate: number;
      unitName: string;
    };
  }> = {
    'web-dev': {
      title: 'Web Software Engineering',
      subtitle: 'HIGH PERFORMANCE PORTALS / SPECTRE-01',
      tagline: 'High-speed, SEO-optimized incremental architectures serving globally distributed static caches.',
      description: 'We construct bleeding-edge web infrastructures built to maximize user session retention, support complex localized translation grids, and satisfy intensive Core Web Vitals targets under heavy traffic loads.',
      icon: Globe,
      accentGlow: 'from-emerald-500/10 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'Edge Hydration & Static Generation Pipelines',
      architectureSteps: [
        'Global Edge Routing: Pre-renders high traffic routes instantly on Vercel or AWS CloudFront edge servers.',
        'Incremental static regeneration (ISR): Live rebuilds outdated static cache blocks quietly on demand.',
        'Hydrated Component Core: Re-evaluates client state with lightweight React bundles preventing layout shifts.',
        'Telemetry feedback log: Hooks standard browser navigation patterns to measure real-time Lighthouse scores.'
      ],
      deepTechOverview: 'The application employs modern Jamstack paradigms rendering responsive Tailwind viewports first. Next.js App router handles incremental layout state tree parsing, leading to instantaneous initial loads.',
      keyDeliverables: [
        { name: 'Ultra-low Core Web Vitals', desc: 'Guaranteed 95+ lighthouse scores with sub-second LCP times.', detail: 'LCP < 800ms / FID < 50ms' },
        { name: 'Headless Content Integration', desc: 'Unified API connections with Sanity, Contentful, or Strapi panels.', detail: 'GraphQL & Webhook triggers' },
        { name: 'SEO & Hydration Schemas', desc: 'Structured JSON-LD schema generation with dynamic open graph rendering.', detail: 'Auto RDF schema generation' }
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'GraphQL'],
      costEstimatorLabels: {
        scaleName: 'Estimated Page/View Volume',
        scaleDesc: ['1-5 Core views (Landing/About)', '5-15 Advanced dynamic layouts', '15-50 Full scale directory layers', '50-200 Enterprise resource meshes', '200+ Ultra high volume nodes'],
        freqName: 'Content Update Frequency',
        freqDesc: ['Static / Set and forget', 'Frequent (Weekly editorial changes)', 'Real-time database updates'],
        baseEstimate: 4500,
        unitName: 'Active Client Pages'
      }
    },
    'saas-dev': {
      title: 'Enterprise SaaS Engines',
      subtitle: 'MULTI-TENANT SOLID ARCHITECTURE / SAAS-90',
      tagline: 'Database-partitioned multi-tenancy pipelines with real-time subscription ledger management.',
      description: 'We build enterprise grade SaaS engines that scale horizontally. Seamlessly manage subscription hierarchies, access security, customized seat billing, telemetry logging, and secure client tenant spaces within a reliable centralized cloud ecosystem.',
      icon: Layers,
      accentGlow: 'from-emerald-500/20 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'Secure Segmented Tenant Data Isolation Network',
      architectureSteps: [
        'RBAC Router: Validates verified login metadata utilizing encrypted JWT tokens.',
        'Logical Database Shard Strategy: Prevents tenant cross-leakage through standard strict UUID query boundaries.',
        'Stripe billing relay: Dispatches transactional usage counts dynamically for volume-based overages.',
        'Real-time WebSocket Push: Coordinates system notifications and collaborative edits across instances.'
      ],
      deepTechOverview: 'Includes high-performing backend engines running in isolated threads, communicating through standardized gRPC microservices and secured behind Cloudflare zero-trust network boundaries.',
      keyDeliverables: [
        { name: 'Robust RBAC & Identity Integration', desc: 'Secure SAML, OAuth, and magic links with customizable security constraints.', detail: 'JWT / SHA-256 tokens' },
        { name: 'Complex Subscription Ledgers', desc: 'Stripe, Chargebee, and Paddle integrations support variable usage metering.', detail: 'Prorations & Volume plans' },
        { name: 'Comprehensive Event Log Traces', desc: 'A complete audit log history recording admin modifications for compliance.', detail: 'SOC2 Compliant storage' }
      ],
      techStack: ['Node.js', 'Laravel', 'Go', 'PostgreSQL', 'Stripe API', 'Redis Cache'],
      costEstimatorLabels: {
        scaleName: 'Target Active Tenant Capacity',
        scaleDesc: ['Up to 100 Tenants (Prototyping)', '100 - 1,000 Active Tenants (Launch)', '1,000 - 10,000 Scale-up Level', '10,000 - 100,000 High Volume Scale', '100,000+ Distributed Global Tenants'],
        freqName: 'Security Isolation Depth',
        freqDesc: ['Shared DB with Logical UUID bounds', 'Dynamic multi-schema dedicated tables', 'Isolated Private Dedicated DB clusters'],
        baseEstimate: 12000,
        unitName: 'Tenants Scale Factor'
      }
    },
    'mobile-app': {
      title: 'Sovereign Mobile Apps',
      subtitle: 'CROSS-PLATFORM NATIVE ENGINES / MOBILE-45',
      tagline: 'High-fidelity mobile experiences leveraging robust react-native or native cross-engine runtimes.',
      description: 'We construct beautiful, high-performing native iOS and Android apps. Features include integrated haptic layout loops, offline local database synchronization, geo-sensors, biometric authentications, and smooth 120Hz system frame transitions.',
      icon: Smartphone,
      accentGlow: 'from-emerald-500/10 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'Hermes Engine UI Thread & Bi-directional Sync',
      architectureSteps: [
        'Hermes Bytecode Execution: Accelerates startup performance times across older and modern devices.',
        'Biometric Auth Check: Directly hooks hardware sensors to confirm TouchID / FaceID access key tokens.',
        'Local Room SQLite caching: Persists application views offline and queues transactional payloads.',
        'App Store deployment: Streamlines automated test distribution with specialized Fastlane loops.'
      ],
      deepTechOverview: 'Designed using high performance state management solutions with minimum bridge communication. Codebase maintains a shared architecture block reducing delivery times while securing native operational execution speeds.',
      keyDeliverables: [
        { name: '120Hz Fluid Interfaces', desc: 'Animated layouts written with native layout threads for zero lagging rendering.', detail: 'Native Reanimated Cores' },
        { name: 'Resilient Offline State Layer', desc: 'Complete state caching matching user edits; synchronizes to servers once internet resumes.', detail: 'SQLite & WatermelonDB' },
        { name: 'Integrated Direct Sensors', desc: 'Secure APIs connecting Bluetooth, GPS tracking, and NFC readers.', detail: 'Native Device Bridge' }
      ],
      techStack: ['React Native', 'Expo', 'Flutter', 'SQLite', 'TypeScript', 'App Store Pipelines'],
      costEstimatorLabels: {
        scaleName: 'Target OS & Device Scope',
        scaleDesc: ['iOS only (Clean swift-like view)', 'Android only (Material UI configuration)', 'iOS & Android Unified Platforms', 'iOS + Android + Tablet responsive layers', 'Total Multi-device suite with Wearable support'],
        freqName: 'Offline DB & Sensor Density',
        freqDesc: ['Light online-only models', 'Medium (Offline syncing databases)', 'Heavy (Continuous background location & IoT)'],
        baseEstimate: 8500,
        unitName: 'Device Integration Cores'
      }
    },
    'ui-ux': {
      title: 'Premium UX Design Systems',
      subtitle: 'INTERACTIVE BRAND TOKENS / POLISHED-77',
      tagline: 'Immersive screen designs backed by clear design standards, structured templates, and customized variables.',
      description: 'We translate your company vision into fully realized digital interactive worlds. Combining clean typographic scales, eye-safe high-contrast dark visual tones, bespoke layout structures, and delicate responsive hover effects to create emotional customer connections.',
      icon: Code2,
      accentGlow: 'from-emerald-500/10 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1541462608141-2f58c6e40263?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'Figma to Code Layout Physics Workflow',
      architectureSteps: [
        'Component Tokenization: Maps fonts, spacing ratios, and colors into JSON design templates.',
        'Fluid Bento Grid Layouts: Organizes informational hierarchies cleanly across web and mobile views.',
        'Interactive Hover Micro-motions: Enhances visual rhythm and guides mouse actions with ease.',
        'Contrast & Accessibility Checks: Reviews colors against strict WCAG Triple-A grading requirements.'
      ],
      deepTechOverview: 'We establish modular pattern files designed to ensure consistent interfaces as product scales, guaranteeing developers have access to a clean and robust visual token blueprint.',
      keyDeliverables: [
        { name: 'Complete Figma UI Kit Files', desc: 'Perfect components with comprehensive states, sizing rules, and variants.', detail: 'Full Auto-Layout models' },
        { name: 'Interactive Interactive Prototypes', desc: 'High-fidelity preview screens showing real animations and clickable user journeys.', detail: '100% interactive flow wireframes' },
        { name: 'Tokenized Variable Packages', desc: 'Tailwind configs and css variables generated to link design to code folders seamlessly.', detail: 'Tailwind theme JSON files' }
      ],
      techStack: ['Figma Pro', 'Tailwind custom tokens', 'Adobe Suite', 'CSS Variables', 'W3C Accessibility Checker'],
      costEstimatorLabels: {
        scaleName: 'Design Scope (Target Screens)',
        scaleDesc: ['Up to 5 Key high-fidelity views', '5 - 15 Detail screens (Core MVP flow)', '15 - 35 Complex views with Design System', '35 - 80 Enterprise platform design patterns', '80+ Full application and corporate brand suite'],
        freqName: 'Animation Complexity Level',
        freqDesc: ['Clean & Simple flat transitions', 'Polished hover states & responsive effects', 'Highly immersive interactive 3D elements & physics'],
        baseEstimate: 3000,
        unitName: 'Interface Visual Layouts'
      }
    },
    'ai-automation': {
      title: 'AI & LLM Orchestration',
      subtitle: 'COGNITIVE COMPUTER AGENTS / GEMINI-X',
      tagline: 'Retrieval-Augmented Generation models combining semantic queries with automated task controllers.',
      description: 'We orchestrate smart technologies directly into your business databases. By configuring system workflows, training specialized task prompts, implementing local vector stores, and setting up automated task agents, we turn complex data structures into smart, actionable workflows.',
      icon: Sparkles,
      accentGlow: 'from-emerald-500/20 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'Vector Search Embeddings & RAG Process Flow',
      architectureSteps: [
        'Data Ingestion Parser: Splits unstructured PDFs, tables, or database logs into manageable sections.',
        'Vector Embedding Model: Converts text segments into high-density mathematical vector matrices.',
        'Semantic Database Inquiry: Retrieves highly relevant context tags using quick cosine similarity search rules.',
        'Structured Model Synthesis: Guides Gemini or customized LLMs to produce reliable, data-backed reports.'
      ],
      deepTechOverview: 'Features strict, server-side-only API routes protecting enterprise access codes from browser inspection, backed by secure, lazy-initialized client code blocks following professional security guidelines.',
      keyDeliverables: [
        { name: 'Zero-hallucination RAG engines', desc: 'Intelligent search systems that only reply using specified company manuals.', detail: 'Qdrant / Pinecone integrations' },
        { name: 'Automated Agent Workflows', desc: 'Autonomous background systems capable of processing emails, invoices, and support logs.', detail: 'LangChain & Prompt templates' },
        { name: 'Custom prompt fine-tuning', desc: 'Carefully formatted prompts that enforce specified system tones and exact JSON response files.', detail: 'Robust validation steps' }
      ],
      techStack: ['Gemini API', 'TypeScript SDK', 'Python AI Libraries', 'Qdrant Vector DB', 'FastAPI', 'LangChain Framework'],
      costEstimatorLabels: {
        scaleName: 'Embeddings Index Scale',
        scaleDesc: ['Small (Up to 1,000 document records)', 'Standard Enterprise (1,000 - 10,000 files)', 'High capacity (10,000 - 100,000 complex database rows)', 'Massive repository index (100,000 - 1M database nodes)', 'Million scale system data clusters'],
        freqName: 'Task Automation Complexity',
        freqDesc: ['Dynamic text lookup & semantic QA', 'Multi-agent decision logic with workflow loops', 'Autonomous agents with API integrations and tool usage'],
        baseEstimate: 7500,
        unitName: 'Analytical Neural Vectors'
      }
    },
    'cloud-devops': {
      title: 'Cloud & Kubernetes DevOps',
      subtitle: 'AUTO-SCALE INFRASTRUCTURE / DEV-SEC-OPS',
      tagline: 'A highly secure, auto-scaling Kubernetes setup running container workflows with absolute consistency.',
      description: 'We design reliable, secure, and cost-effective cloud setups. By creating IaC files, setting up automated CI/CD codes, configuring secure virtual networks, and implementing continuous performance tracking, we keep your databases running smoothly around the clock.',
      icon: Cloud,
      accentGlow: 'from-emerald-500/10 to-transparent',
      bannerImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2000&auto=format&fit=crop',
      architectureTitle: 'IaC Automation & Zero-Downtime Deployment Flow',
      architectureSteps: [
        'Terraform Virtual VPC Configuration: Declares private subnets, security gates, and database pathways.',
        'Automated CI/CD Workflows: Automatically builds, lints, tests, and packs Docker containers.',
        'Kubernetes Container Deployment: Controls clean rolling updates with no server service downtime.',
        'Continuous Health Inspections: Gathers deep log data and triggers automations if container resources spike.'
      ],
      deepTechOverview: 'Ensures optimal loading. We configure smart limits, preventing memory spike issues while maintaining minimal deployment costs across Google Cloud and Amazon Web Services.',
      keyDeliverables: [
        { name: 'Infrastructure as Code (IaC) Files', desc: 'Comprehensive, structured Terraform scripts that can easily reproduce your entire setup in seconds.', detail: 'Terraform AWS / GCP files' },
        { name: 'Seamless CI/CD Pipelines', desc: 'Fully automated workflows that verify, secure, test, and release code changes instantly on git commit.', detail: 'GitHub Actions config files' },
        { name: 'Deep Performance Dashboards', desc: 'Detailed Prometheus and Grafana tracking systems displaying active hardware traffic nodes.', detail: 'Prometheus & eBPF Telemetry setup' }
      ],
      techStack: ['Terraform', 'Kubernetes (K8s)', 'Docker Engine', 'GitHub Actions', 'GCP / AWS Cloud', 'Prometheus & Grafana'],
      costEstimatorLabels: {
        scaleName: 'Target Service Cluster Scope',
        scaleDesc: ['Single instance (Simple web serving Docker node)', 'Multi-instance scalable cluster (API + Worker Nodes)', 'Multi-environment setup (Dev, Staging, Master clusters)', 'High-availability global setups across multiple regions', 'Global edge networks with geo-routing policies'],
        freqName: 'Enterprise Compliance Tier',
        freqDesc: ['Standard secure firewall rules', 'High-security setups (Encrypted files, private API gates)', 'Regulated Compliance tiers (SOC2, HIPAA validation models)'],
        baseEstimate: 9500,
        unitName: 'Active Cloud Nodes'
      }
    }
  };

  const activeService = serviceDetailsMap[serviceId];
  if (!activeService) return null;

  const ServiceIcon = activeService.icon;

  const calculateTotalCost = () => {
    let multiplier = 1;
    if (scaleFactor === 1) multiplier = 0.85;
    if (scaleFactor === 3) multiplier = 1.15;
    if (scaleFactor === 4) multiplier = 1.35;
    if (scaleFactor === 5) multiplier = 1.65;
    
    let freqMultiplier = 1;
    if (frequencyFactor === 1) freqMultiplier = 0.9;
    if (frequencyFactor === 3) multiplier = 1.25;

    let slaCost = addSLA ? 1800 : 0;

    return Math.round((activeService.costEstimatorLabels.baseEstimate * multiplier * freqMultiplier) + slaCost);
  };

  return (
    <div className="w-full relative bg-[#000000] min-h-screen text-white pt-[84px]" id="service-detail-root">
      
      {/* Modern dark green gradient background spot for premium contrast */}
      <div className="absolute inset-0 w-full h-full -z-20 select-none pointer-events-none bg-[#000000]">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full filter blur-[130px] animate-pulse`} />
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
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SOVEREIGN SUITE</span>
        </button>

        <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/80 uppercase px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          PRE-VETTED TALENT &middot; ONLINE
        </span>
      </div>

      {/* Hero Section Grid layout matching the AI Hire page layout */}
      <section className="relative w-full z-10 !overflow-visible">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] pt-12 pb-20 relative z-10 !overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !overflow-visible">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
                {activeService.subtitle}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
                Engineered <span className="text-[#00df89]">{activeService.title}</span> <br />
                for global scale
              </h1>
              <p className="text-[14px] sm:text-[15.5px] text-white/60 max-w-[580px] leading-relaxed mb-8">
                {activeService.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onBookConsultation(activeService.title)}
                  className="rounded-full bg-[#00df89] hover:bg-[#00f093] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,223,137,0.3)] hover:shadow-[0_0_40px_rgba(0,223,137,0.55)] cursor-pointer text-center"
                >
                  Book Consultation
                </button>
                <button
                  onClick={onBack}
                  className="rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white px-8 py-4.5 text-[13px] font-bold uppercase transition-all duration-300 text-center"
                >
                  Return to Suite
                </button>
              </div>
            </div>

            {/* Right Column Illustration */}
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
                  src={activeService.bannerImage} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover relative z-10 filter drop-shadow-[0_0_35px_rgba(16,185,129,0.35)] rounded-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

        {/* Content of specifications below matching the bounds */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
          
          {/* Glass in-page sub navigation */}
          <div className="border-b border-white/[0.08] flex gap-8 text-xs font-mono tracking-widest uppercase mb-12 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('overview')}
            className={`pb-4 relative font-medium transition-colors focus:outline-none ${
              activeTab === 'overview' ? 'text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {activeTab === 'overview' && (
              <motion.div layoutId="activePageUnderline" className="absolute bottom-0 inset-x-0 h-[2px] bg-white z-20" />
            )}
            01 // SPECIFICATIONS OVERVIEW
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-4 relative font-medium transition-colors focus:outline-none ${
              activeTab === 'architecture' ? 'text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {activeTab === 'architecture' && (
              <motion.div layoutId="activePageUnderline" className="absolute bottom-0 inset-x-0 h-[2px] bg-white z-20" />
            )}
            02 // BLUEPRINT ARCHITECTURE
          </button>

          <button
            onClick={() => setActiveTab('estimator')}
            className={`pb-4 relative font-medium transition-colors focus:outline-none ${
              activeTab === 'estimator' ? 'text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {activeTab === 'estimator' && (
              <motion.div layoutId="activePageUnderline" className="absolute bottom-0 inset-x-0 h-[2px] bg-white z-20" />
            )}
            03 // ESTIMATION LEDGER
          </button>
        </div>

        {/* Tab specific full page contents */}
        <div className="relative z-10">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Detailed specification intro */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono tracking-widest text-white/30 uppercase">
                  Service Objective Specification
                </h3>
                <p className="text-white/80 text-[16px] sm:text-[18px] leading-relaxed max-w-5xl">
                  {activeService.description}
                </p>
              </div>

              {/* Deliverables Matrix */}
              <div className="space-y-6">
                <h3 className="text-xs font-mono tracking-widest text-white/30 uppercase">
                  Engineering Deliverables Matrix
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeService.keyDeliverables.map((deliv, index) => (
                    <div 
                      key={index} 
                      className="bg-white/[0.015] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 relative group"
                    >
                      {/* Accent glow corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.01] rounded-tr-2xl group-hover:bg-white/[0.03] transition-colors duration-300" />
                      
                      <div className="flex items-center gap-2.5 mb-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                        <h4 className="text-[15px] font-semibold tracking-tight">{deliv.name}</h4>
                      </div>
                      
                      <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed mb-6">
                        {deliv.desc}
                      </p>
                      
                      <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/40 uppercase">
                        <span>Spec standard:</span>
                        <span className="text-white/80 font-bold tracking-wider">{deliv.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies utilized block */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-mono tracking-widest text-white/30 uppercase">
                  Sovereign Tech stack coverage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activeService.techStack.map((tech) => (
                    <TechLogoElement key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Architecture Blueprint flow progress */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                    Operational Blueprint
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight mt-1">
                    {activeService.architectureTitle}
                  </h3>
                </div>

                <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {activeService.architectureSteps.map((step, idx) => {
                    const [label, desc] = step.split(': ');
                    return (
                      <div key={idx} className="relative group">
                        {/* Bullet node */}
                        <div className="absolute left-[-22px] top-1.5 w-3 h-3 rounded-full border border-white/30 bg-black group-hover:border-white group-hover:scale-125 transition-all duration-300" />
                        
                        <span className="text-[11px] font-mono text-white/30 block mb-0.5 uppercase tracking-wider">
                          STAGE 0{idx + 1} // COMPONENT PIPELINE
                        </span>
                        
                        <h4 className="text-[15px] font-semibold text-white group-hover:text-white transition-colors">
                          {label}
                        </h4>
                        
                        <p className="text-[13px] text-white/50 leading-relaxed mt-1">
                          {desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Technical diagnostics panel */}
              <div className="lg:col-span-5 bg-white/[0.015] border border-white/[0.06] rounded-2xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                  <Activity className="w-5 h-5 text-white/60 animate-pulse" />
                  <h4 className="text-[13px] font-mono tracking-widest text-white/40 uppercase">Architecture Telemetry</h4>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-white/30">RUNTIME FRAMEWORK:</span>
                    <span className="text-white/80 font-bold">{activeService.techStack[0] || 'VORTEX CORE'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">EXECUTION TIER:</span>
                    <span className="text-emerald-400 font-bold">OPTIMIZED EDGE / COLD-START ZERO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">ISOLATION SECURE:</span>
                    <span className="text-white/80 font-bold">AES-256 CONSTRAINTS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">MONITORING HARNESS:</span>
                    <span className="text-white/80 font-bold">PROMETHEUS ACTIVE</span>
                  </div>
                </div>

                <p className="text-[13px] text-white/50 leading-relaxed pt-4 border-t border-white/[0.06]">
                  {activeService.deepTechOverview}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'estimator' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                  Spec Configurator
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mt-1">
                  Dynamic Scope & Cost Calculator Ledger
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed mt-1 max-w-3xl">
                  Adjust standard parameters, sizing limits, and engineering coverage tags below to compute real-time project estimate schedules.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left side parameters sliders */}
                <div className="lg:col-span-7 space-y-8 bg-white/[0.01] border border-white/[0.06] p-8 rounded-2xl">
                  {/* Slider 1 */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/50 uppercase tracking-widest">{activeService.costEstimatorLabels.scaleName}:</span>
                      <span className="text-white font-bold uppercase">{activeService.costEstimatorLabels.scaleDesc[scaleFactor - 1]?.split(' (')[0] || ''}</span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={scaleFactor}
                      onChange={(e) => setScaleFactor(Number(e.target.value))}
                      className="w-full accent-white cursor-pointer bg-white/10 rounded-lg h-1"
                    />
                    
                    <p className="text-[12px] font-mono text-white/40 leading-relaxed">
                      {activeService.costEstimatorLabels.scaleDesc[scaleFactor - 1]}
                    </p>
                  </div>

                  {/* Frequency Level */}
                  <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                    <label className="text-xs font-mono text-white/50 block uppercase tracking-widest">
                      {activeService.costEstimatorLabels.freqName}:
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          onClick={() => setFrequencyFactor(num)}
                          className={`p-3 rounded-xl border text-[11px] font-mono uppercase tracking-wider transition-all focus:outline-none ${
                            frequencyFactor === num
                              ? 'bg-white text-black border-white font-bold'
                              : 'bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.04]'
                          }`}
                        >
                          Stage 0{num}
                        </button>
                      ))}
                    </div>

                    <p className="text-[12px] font-mono text-white/40 leading-relaxed">
                      {activeService.costEstimatorLabels.freqDesc[frequencyFactor - 1]}
                    </p>
                  </div>

                  {/* Switch trigger SLA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-white/50 block uppercase tracking-wide">
                        Premium Dedicated Engineering SLA
                      </span>
                      <span className="text-xs text-white/40 block">
                        Guarantees 4-hour high response coverage keys.
                      </span>
                    </div>

                    <button
                      onClick={() => setAddSLA(!addSLA)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors focus:outline-none ${
                        addSLA ? 'bg-white' : 'bg-white/10'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-black transition-transform ${
                        addSLA ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Right Cost calculation ledger totals */}
                <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block">Estimated cost ledger</span>
                    <h4 className="text-white text-md font-semibold font-mono">Scope Financial Ledger Projection</h4>
                  </div>

                  <div className="pt-2">
                    <span className="text-[44px] font-semibold text-white tracking-tight font-sans">
                      ${calculateTotalCost().toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-white/40 ml-2 uppercase tracking-widest">Est. Build</span>
                  </div>

                  <div className="space-y-3.5 text-xs font-mono pt-6 border-t border-white/[0.06]">
                    <div className="flex justify-between text-white/40">
                      <span>Base Spec rate:</span>
                      <span className="text-white/80">${activeService.costEstimatorLabels.baseEstimate.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-white/40">
                      <span>Complexity multiplier:</span>
                      <span className="text-white/80">x{(scaleFactor * 0.2 + 0.6).toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between text-white/40">
                      <span>Frequency load scale:</span>
                      <span className="text-white/80">x{frequencyFactor === 1 ? '0.9' : frequencyFactor === 2 ? '1.0' : '1.25'}</span>
                    </div>
                    {addSLA && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Dedicated SLA:</span>
                        <span>+$1,800</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] text-[11px] text-white/45 leading-relaxed font-mono uppercase">
                    <span>*All estimations are calculated against standard agile frameworks; customized milestones are finalized with our engineering board during consultation.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

        {/* Security / Delivery confirmation band at bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 pb-[120px]">
          <div className="flex items-center gap-2.5 text-xs text-white/45 uppercase font-mono tracking-widest">
            <ShieldCheck className="w-4.5 h-4.5 text-white/[0.55]" />
            <span>Sovereign Security &amp; Delivery Assured &middot; SPACEON 2026</span>
          </div>

          <button
            onClick={() => onBookConsultation(activeService.title)}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white hover:bg-neutral-100 text-black text-xs font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Schedule Strategic Call for this Spec
          </button>
        </div>

      </div>
    );
  }
