import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, HelpCircle, Bot, Sparkles, Cpu, Code, ChevronRight, Globe, Layers, Smartphone, Palette, Server, Coffee, Briefcase, GraduationCap, DollarSign, Activity, FileText, Zap, ArrowRight, Shield, Truck, ShoppingBag, Plane } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  onNavigate: (sectionId: string) => void;
  onViewServiceDetail?: (serviceId: string) => void;
  isLoading?: boolean;
}

interface DropdownItem {
  title: string;
  description: string;
  target?: string;
  serviceId?: string;
}

interface DropdownCategory {
  label: string;
  items: DropdownItem[];
}

interface AiTabContent {
  id: string;
  title: string;
  headerTitle: string;
  col1: string[];
  col2: string[];
  footerLinks: string[];
}

const aiMegaData: AiTabContent[] = [
  {
    id: 'ai-dev',
    title: 'AI Development',
    headerTitle: 'AI Development Services',
    col1: [
      'Hire AI Developers',
      'AI Development Services',
      'AI Consulting',
      'AI Integration',
      'AI Software Development',
      'LLM Development',
      'AI Chatbot Development'
    ],
    col2: [
      'Generative AI Development',
      'Machine Learning Development',
      'Retrieval Augmented Generation (RAG)',
      'Build Prompt Chaining AI',
      'Computer Vision Development',
      'AIOps & MLOps Development',
      'AI Mobile App Development'
    ],
    footerLinks: ['All AI Development Services', 'Hire AI Developers']
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    headerTitle: 'AI-Powered Enterprise Solutions',
    col1: [
      'AI Recommendation Engines',
      'Intelligent Document Processing',
      'Predictive Analytics Portals',
      'Cognitive Search Systems'
    ],
    col2: [
      'RAG Knowledge Bases',
      'AI Agents & Autopilot Tasks',
      'Anomaly Detection Engines',
      'Natural Language Interfaces'
    ],
    footerLinks: ['All AI Development Services', 'Hire AI Developers']
  },
  {
    id: 'ai-smb',
    title: 'AI for SMBs',
    headerTitle: 'Sovereign AI for Businesses & SMBs',
    col1: [
      'AI Strategy Formulation',
      'Legacy System AI Retrofitting',
      'Cost-Effective LLM Deployment'
    ],
    col2: [
      'Process Automation Sprints',
      'Secure Local Data Contexts',
      'SMB AI Readiness Audits'
    ],
    footerLinks: ['All AI Development Services', 'Hire AI Developers']
  },
  {
    id: 'ai-augmented',
    title: 'AI-Augmented Developer',
    headerTitle: 'AI-Augmented Elite Engineering',
    col1: [
      'Sovereign Developer Sourcing',
      'AI Code Copilot Orchestration',
      'Rigid Linter & Type Safety Guards'
    ],
    col2: [
      'Unit Test Generative Loops',
      'Automated Refactoring pipelines',
      'Sprint Acceleration Engineering'
    ],
    footerLinks: ['All AI Development Services', 'Hire AI Developers']
  }
];

export interface ServicesTabItem {
  title: string;
  description: string;
  serviceId?: string;
  target?: string;
}

export interface ServicesTabContent {
  id: string;
  title: string;
  items: ServicesTabItem[];
}

const servicesMegaData: ServicesTabContent[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    items: [
      {
        title: 'Web development',
        description: 'Deliver scalable web experiences that convert.',
        serviceId: 'web-dev'
      },
      {
        title: 'MVP Development',
        description: 'Ship usable products before competitors.',
        serviceId: 'saas-dev'
      },
      {
        title: 'SaaS Development',
        description: 'Turn ideas into recurring-revenue platforms.',
        serviceId: 'saas-dev'
      },
      {
        title: 'Software Integration',
        description: 'Unify systems for uninterrupted workflows.',
        serviceId: 'web-dev'
      },
      {
        title: 'Legacy Modernization',
        description: 'Revive old systems with modern agility.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Software Outsourcing',
        description: 'Extend your tech capacity on demand.',
        serviceId: 'hire-ai-devs'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    items: [
      {
        title: 'Infrastructure as Code',
        description: 'Automate delivery pipelines with Terraform & Ansible.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Kubernetes Orchestration',
        description: 'High-availability container management setups.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Continuous Monitoring',
        description: 'Real-time Prometheus & Grafana visual telemetry panels.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Cloud Security Audits',
        description: 'Hardened perimeter configurations for total safety.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Frictionless deployment scripts boosting developer speed.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Serverless Deployments',
        description: 'Autoscaling compute running only when requested.',
        serviceId: 'cloud-devops'
      }
    ]
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Computing',
    items: [
      {
        title: 'AWS Serverless',
        description: 'Build zero-overhead scalable computing with AWS Lambda.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Database Migration',
        description: 'Smooth zero-downtime database upgrades to AWS RDS.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Cost Optimization',
        description: 'Drastically reduce cloud spend through active audits.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Hybrid Cloud Sync',
        description: 'Unify on-premises and AWS cloud infrastructure securely.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'EKS Kubernetes Assemblies',
        description: 'Production EKS blueprints scaled for enterprise loads.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'IAM Policy Hardening',
        description: 'Fine-grained IAM structures guaranteeing boundary safety.',
        serviceId: 'cloud-devops'
      }
    ]
  },
  {
    id: 'dedicated-devs',
    title: 'Hire Dedicated Developers',
    items: [
      {
        title: 'Hire React Engineers',
        description: 'Scale front-ends with expert high-fidelity specialists.',
        serviceId: 'hire-ai-devs'
      },
      {
        title: 'Hire Backend Experts',
        description: 'Robust API, serverless, and system architecture design.',
        serviceId: 'hire-ai-devs'
      },
      {
        title: 'Dedicated QA Teams',
        description: 'Rigorous automation and manual penetration testing.',
        serviceId: 'hire-ai-devs'
      },
      {
        title: 'Full stack Squads',
        description: 'Cross-functional delivery-ready teams aligned to goals.',
        serviceId: 'hire-ai-devs'
      },
      {
        title: 'Hire UI/UX Architects',
        description: 'Bespoke high-fidelity Figma and interactive prototypes.',
        serviceId: 'ui-ux'
      },
      {
        title: 'Mobile App Developers',
        description: 'Flutter and React Native builders for iOS and Android.',
        serviceId: 'mobile-app'
      }
    ]
  },
  {
    id: 'product-eng',
    title: 'Product Engineering',
    items: [
      {
        title: 'Bespoke UX Strategy',
        description: 'Highly polished user research and cinematic wireframing.',
        serviceId: 'ui-ux'
      },
      {
        title: 'Refined UI Systems',
        description: 'Production-ready, interactive custom styled libraries.',
        serviceId: 'ui-ux'
      },
      {
        title: 'Agile Scrum Delivery',
        description: 'Rapid iterative sprint cycles focused on concrete outcomes.',
        serviceId: 'web-dev'
      },
      {
        title: 'Technology Auditing',
        description: 'Deep codebase inspections for performance Bottlenecks.',
        serviceId: 'web-dev'
      },
      {
        title: 'SaaS Platform Tuning',
        description: 'Optimization steps scaling throughput and response speed.',
        serviceId: 'saas-dev'
      },
      {
        title: 'API Gateway Design',
        description: 'Structured endpoints with elegant rate-limiting security.',
        serviceId: 'saas-dev'
      }
    ]
  }
];

export interface IndustryColumn {
  title: string;
  items: string[];
}

export interface IndustryCard {
  title: string;
  description: string;
  serviceId?: string;
}

export interface IndustriesTabContent {
  id: string;
  title: string;
  iconName: 'Activity' | 'DollarSign' | 'Truck' | 'ShoppingBag' | 'Cpu' | 'Plane';
  layoutType: 'columns' | 'cards';
  columns?: IndustryColumn[];
  cards?: IndustryCard[];
}

const industriesMegaData: IndustriesTabContent[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    iconName: 'Activity',
    layoutType: 'columns',
    columns: [
      {
        title: 'Core Healthcare Platforms',
        items: [
          'Custom Healthcare Software Development',
          'EHR Development',
          'EMR Development',
          'Healthcare CRM',
          'Patient Engagement Systems',
          'Electronic Data Capture'
        ]
      },
      {
        title: 'Care Delivery & Monitoring',
        items: [
          'Telemedicine',
          'Remote Patient Monitoring (RPM)',
          'Chronic Care Management (CCM)'
        ]
      },
      {
        title: 'Healthcare AI',
        items: [
          'AI Medical Scribe',
          'AI Chatbots',
          'AI Coding',
          'AI Prior Auth'
        ]
      },
      {
        title: 'Revenue Optimization Systems',
        items: [
          'Revenue Cycle Management (RCM)',
          'AI Medical Coding',
          'Prior Authorization Automation'
        ]
      },
      {
        title: 'Interoperability',
        items: [
          'FHIR / SMART on FHIR',
          'EHR Integration',
          'Labs / eRx Integrations'
        ]
      }
    ]
  },
  {
    id: 'fintech',
    title: 'Fintech',
    iconName: 'DollarSign',
    layoutType: 'cards',
    cards: [
      {
        title: 'Software Development',
        description: 'Solution powering secure financial innovation.',
        serviceId: 'saas-dev'
      },
      {
        title: 'Application Development',
        description: 'Custom fintech apps accelerating digital finance.',
        serviceId: 'saas-dev'
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics',
    iconName: 'Truck',
    layoutType: 'cards',
    cards: [
      {
        title: 'Software Development',
        description: 'Optimize supply chain efficiency with ease.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Application Development',
        description: 'Custom logistics apps streamlining operations.',
        serviceId: 'web-dev'
      },
      {
        title: 'Delivery Management Software',
        description: 'Real-time visibility for seamless deliveries.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Warehouse Management Software',
        description: 'Bring smart automation for warehouse accuracy.',
        serviceId: 'cloud-devops'
      }
    ]
  },
  {
    id: 'retail',
    title: 'Retail',
    iconName: 'ShoppingBag',
    layoutType: 'cards',
    cards: [
      {
        title: 'e-Commerce Platforms',
        description: 'Seamless checkout experiences, head-less commerce storefronts, and conversion engines.',
        serviceId: 'web-dev'
      },
      {
        title: 'Inventory Systems & Sync',
        description: 'Real-time multi-location inventory reconciliation and warehouse pipeline logistics.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Point of Sale integrations',
        description: 'Elegant custom cloud-based POS integrations scaling client transactions smoothly.',
        serviceId: 'saas-dev'
      }
    ]
  },
  {
    id: 'iot',
    title: 'IoT',
    iconName: 'Cpu',
    layoutType: 'cards',
    cards: [
      {
        title: 'IoT Edge software',
        description: 'Industrial-grade sensor logging, broker orchestration, and low latency telemetry.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Smart Analytics Hub',
        description: 'Aggregating thousands of parallel data streams in elegant real-time charts.',
        serviceId: 'web-dev'
      },
      {
        title: 'Microcontroller AI',
        description: 'Bespoke tinyML logic running directly on lightweight local nodes.',
        serviceId: 'ai-automation'
      }
    ]
  },
  {
    id: 'aviation',
    title: 'Aviation',
    iconName: 'Plane',
    layoutType: 'cards',
    cards: [
      {
        title: 'Crew Scheduling Engines',
        description: 'High-availability constraint-backed algorithms assigning cockpit rosters.',
        serviceId: 'saas-dev'
      },
      {
        title: 'Weight & Balance Logistics',
        description: 'Precision physical safety calculators for complex cargo distribution.',
        serviceId: 'cloud-devops'
      },
      {
        title: 'Booking & API Bridges',
        description: 'Sovereign transactional flight inventory systems and search integrations.',
        serviceId: 'web-dev'
      }
    ]
  }
];

const dropdownData: Record<string, DropdownCategory> = {
  ai: {
    label: 'AI',
    items: [
      { 
        title: 'AI Development Services', 
        description: 'Advanced agent pipelines, machine learning models, and custom GenAI.',
        serviceId: 'ai-automation'
      },
      { 
        title: 'Cognitive Agent Systems', 
        description: 'Autonomous computer-use script loops scaling businesses.',
        target: 'services'
      },
      { 
        title: 'Vector Search & RAG DBs', 
        description: 'Retrieval systems with semantic mapping mechanics.',
        target: 'services'
      },
      {
        title: 'Hire AI Developers',
        description: 'Vetted AI engineers ready for dynamic development scaffolding.',
        serviceId: 'hire-ai-devs'
      }
    ]
  },
  services: {
    label: 'Services',
    items: [
      { 
        title: 'Web Software Engineering', 
        description: 'Edge-runtime rendered next-gen SPA/SSR applications.',
        serviceId: 'web-dev'
      },
      { 
        title: 'Enterprise SaaS Engines', 
        description: 'Multitenant payment vaults & deep billing systems.',
        serviceId: 'saas-dev'
      },
      { 
        title: 'Sovereign Mobile Apps', 
        description: 'React Native & Flutter high FPS cross-platform platforms.',
        serviceId: 'mobile-app'
      },
      { 
        title: 'Premium UX Design Systems', 
        description: 'Highly emotional, bespoke, motion-guided interfaces.',
        serviceId: 'ui-ux'
      },
      { 
        title: 'Cloud & Kubernetes DevOps', 
        description: 'Autoscaling Kubernetes clusters & Prometheus telemetry.',
        serviceId: 'cloud-devops'
      }
    ]
  },
  technologies: {
    label: 'Technologies',
    items: [
      { 
        title: 'Java Ecosystem Platforms', 
        description: 'Secure, multi-thread enterprise JVM engines.',
        target: 'technologies'
      },
      { 
        title: 'React Native Blueprint', 
        description: 'Native haptic response & device API integrations.',
        target: 'technologies'
      },
      { 
        title: 'PHP & WordPress Commerce', 
        description: 'Optimized transaction panels & managed blogging.',
        target: 'technologies'
      },
      { 
        title: 'Moodle LMS Frameworks', 
        description: 'Custom university learning management & corporate training.',
        target: 'technologies'
      }
    ]
  },
  industries: {
    label: 'Industries',
    items: [
      { 
        title: 'Corporate E-Learning', 
        description: 'Integrated digital learning modules & progress dashboards.',
        target: 'technologies'
      },
      { 
        title: 'Financial Portals', 
        description: 'PCI-DSS compliant routes & transaction ledger networks.',
        target: 'services'
      },
      { 
        title: 'Logistics Pipelines', 
        description: 'Real-time asset telemetry tracking & cloud inventory.',
        target: 'services'
      },
      { 
        title: 'Audited Healthcare Tech', 
        description: 'Secure data vaults strictly compliant with global regulations.',
        target: 'services'
      }
    ]
  },
  resources: {
    label: 'Resources',
    items: [
      { 
        title: 'Verified Project Showcase', 
        description: 'Continuous validation check for active systems.',
        target: 'projects'
      },
      { 
        title: 'Engineering Chronicles', 
        description: 'Architecture theses & technical study insights.',
        target: 'insights'
      },
      { 
        title: 'Interactive Live Sandbox', 
        description: 'Playground to test and check network latency nodes.',
        target: 'services'
      }
    ]
  }
};

// Nested groups for mobile navigation (matching desktop layout Hierarchy)
const mobileNavGroups: Record<string, { label: string; subGroups: { id: string; name: string; items: { name: string; serviceId?: string; target?: string }[] }[] }> = {
  ai: {
    label: "AI",
    subGroups: [
      {
        id: "ai-dev",
        name: "AI Development",
        items: [
          { name: "Hire AI Developers", serviceId: "hire-ai-devs" },
          { name: "AI Development Services", serviceId: "ai-automation" },
          { name: "AI Consulting", serviceId: "ai-automation" },
          { name: "AI Integration", serviceId: "ai-automation" },
          { name: "AI Software Development", serviceId: "ai-automation" },
          { name: "LLM Development", serviceId: "ai-automation" },
          { name: "AI Chatbot Development", serviceId: "ai-automation" },
          { name: "Generative AI Development", serviceId: "ai-automation" },
          { name: "Machine Learning Development", serviceId: "ai-automation" },
          { name: "Retrieval Augmented Generation (RAG)", serviceId: "ai-automation" },
          { name: "Build Prompt Chaining AI", serviceId: "ai-automation" },
          { name: "Computer Vision Development", serviceId: "ai-automation" },
          { name: "AIOps & MLOps Development", serviceId: "ai-automation" },
          { name: "AI Mobile App Development", serviceId: "ai-automation" }
        ]
      },
      {
        id: "ai-solutions",
        name: "AI-Powered Solutions",
        items: [
          { name: "AI Recommendation Engines", serviceId: "ai-automation" },
          { name: "Intelligent Document Processing", serviceId: "ai-automation" },
          { name: "Predictive Analytics Portals", serviceId: "ai-automation" },
          { name: "Cognitive Search Systems", serviceId: "ai-automation" },
          { name: "RAG Knowledge Bases", serviceId: "ai-automation" },
          { name: "AI Agents & Autopilot Tasks", serviceId: "ai-automation" },
          { name: "Anomaly Detection Engines", serviceId: "ai-automation" },
          { name: "Natural Language Interfaces", serviceId: "ai-automation" }
        ]
      },
      {
        id: "ai-smb",
        name: "AI for SMBs",
        items: [
          { name: "AI Strategy Formulation", serviceId: "ai-automation" },
          { name: "Legacy System AI Retrofitting", serviceId: "ai-automation" },
          { name: "Cost-Effective LLM Deployment", serviceId: "ai-automation" },
          { name: "Process Automation Sprints", serviceId: "ai-automation" },
          { name: "Secure Local Data Contexts", serviceId: "ai-automation" },
          { name: "SMB AI Readiness Audits", serviceId: "ai-automation" }
        ]
      },
      {
        id: "ai-augmented",
        name: "AI-Augmented Developer",
        items: [
          { name: "Sovereign Developer Sourcing", serviceId: "ai-augmented-dev" },
          { name: "AI Code Copilot Orchestration", serviceId: "ai-augmented-dev" },
          { name: "Rigid Linter & Type Safety Guards", serviceId: "ai-augmented-dev" },
          { name: "Unit Test Generative Loops", serviceId: "ai-augmented-dev" },
          { name: "Automated Refactoring pipelines", serviceId: "ai-augmented-dev" },
          { name: "Sprint Acceleration Engineering", serviceId: "ai-augmented-dev" }
        ]
      }
    ]
  },
  services: {
    label: "Services",
    subGroups: [
      {
        id: "software-dev",
        name: "Software Development",
        items: [
          { name: "Web development", serviceId: "web-dev" },
          { name: "MVP Development", serviceId: "saas-dev" },
          { name: "SaaS Development", serviceId: "saas-dev" },
          { name: "Software Integration", serviceId: "web-dev" },
          { name: "Legacy Modernization", serviceId: "cloud-devops" },
          { name: "Software Outsourcing", serviceId: "hire-ai-devs" }
        ]
      },
      {
        id: "cloud-devops",
        name: "Cloud & DevOps",
        items: [
          { name: "Infrastructure as Code", serviceId: "cloud-devops" },
          { name: "Kubernetes Orchestration", serviceId: "cloud-devops" },
          { name: "Continuous Monitoring", serviceId: "cloud-devops" },
          { name: "Cloud Security Audits", serviceId: "cloud-devops" },
          { name: "CI/CD Pipelines", serviceId: "cloud-devops" },
          { name: "Serverless Deployments", serviceId: "cloud-devops" }
        ]
      },
      {
        id: "aws-cloud",
        name: "AWS Cloud Computing",
        items: [
          { name: "AWS Serverless", serviceId: "cloud-devops" },
          { name: "Database Migration", serviceId: "cloud-devops" },
          { name: "Cost Optimization", serviceId: "cloud-devops" },
          { name: "Hybrid Cloud Sync", serviceId: "cloud-devops" },
          { name: "EKS Kubernetes Assemblies", serviceId: "cloud-devops" },
          { name: "IAM Policy Hardening", serviceId: "cloud-devops" }
        ]
      },
      {
        id: "dedicated-devs",
        name: "Hire Dedicated Developers",
        items: [
          { name: "Hire React Engineers", serviceId: "hire-ai-devs" },
          { name: "Hire Backend Experts", serviceId: "hire-ai-devs" },
          { name: "Dedicated QA Teams", serviceId: "hire-ai-devs" },
          { name: "Full stack Squads", serviceId: "hire-ai-devs" },
          { name: "Hire UI/UX Architects", serviceId: "ui-ux" },
          { name: "Mobile App Developers", serviceId: "mobile-app" }
        ]
      },
      {
        id: "product-eng",
        name: "Product Engineering",
        items: [
          { name: "Bespoke UX Strategy", serviceId: "ui-ux" },
          { name: "Refined UI Systems", serviceId: "ui-ux" },
          { name: "Agile Scrum Delivery", serviceId: "web-dev" },
          { name: "Technology Auditing", serviceId: "web-dev" },
          { name: "SaaS Platform Tuning", serviceId: "saas-dev" },
          { name: "API Gateway Design", serviceId: "saas-dev" }
        ]
      }
    ]
  },
  technologies: {
    label: "Technologies",
    subGroups: [
      {
        id: "tech-frontend",
        name: "Frontend",
        items: [
          { name: "React", serviceId: "tech-react" },
          { name: "Angular", serviceId: "tech-angular" },
          { name: "Vue.js", serviceId: "tech-vue-js" }
        ]
      },
      {
        id: "tech-backend",
        name: "Backend",
        items: [
          { name: "Python", serviceId: "tech-python" },
          { name: "Node.js", serviceId: "tech-node-js" },
          { name: "Java", serviceId: "tech-java" },
          { name: "PHP", serviceId: "tech-php" },
          { name: ".NET", serviceId: "tech-dotnet" }
        ]
      },
      {
        id: "tech-mobile",
        name: "Mobile",
        items: [
          { name: "iOS", serviceId: "tech-ios" },
          { name: "Android", serviceId: "tech-android" },
          { name: "React Native", serviceId: "tech-react-native" },
          { name: "Flutter", serviceId: "tech-flutter" },
          { name: "Xamarin", serviceId: "tech-xamarin" }
        ]
      },
      {
        id: "tech-frameworks",
        name: "Frameworks",
        items: [
          { name: "Laravel", serviceId: "tech-laravel" },
          { name: "MEAN Stack", serviceId: "tech-mean-stack" },
          { name: "MERN Stack", serviceId: "tech-mern-stack" },
          { name: "Django", serviceId: "tech-django" },
          { name: "Symfony", serviceId: "tech-symfony" }
        ]
      },
      {
        id: "tech-platform",
        name: "Platform",
        items: [
          { name: "Splunk", serviceId: "tech-splunk" },
          { name: "Salesforce", serviceId: "tech-salesforce" },
          { name: "Apache Kafka", serviceId: "tech-apache-kafka" },
          { name: "Elasticsearch", serviceId: "tech-elasticsearch" },
          { name: "DataDog", serviceId: "tech-datadog" }
        ]
      }
    ]
  },
  industries: {
    label: "Industries",
    subGroups: [
      {
        id: "ind-hlth",
        name: "Healthcare Solutions",
        items: [
          { name: "Healthcare Software & EHR/EMR", serviceId: "web-dev" },
          { name: "Care Delivery & Telemedicine", serviceId: "web-dev" },
          { name: "Healthcare AI & Scribes", serviceId: "ai-automation" },
          { name: "Revenue Cycle & RCM Solutions", serviceId: "saas-dev" },
          { name: "FHIR & Interoperability", serviceId: "cloud-devops" }
        ]
      },
      {
        id: "ind-fntch",
        name: "Fintech Platforms",
        items: [
          { name: "Secure Payment Ledger Systems", serviceId: "saas-dev" },
          { name: "Custom Digital Finance Apps", serviceId: "saas-dev" }
        ]
      },
      {
        id: "ind-lgst",
        name: "Logistics & Supply Chain",
        items: [
          { name: "Supply Chain & Tracking Pipelines", serviceId: "cloud-devops" },
          { name: "Custom Logistics Software", serviceId: "web-dev" },
          { name: "Delivery Management Platforms", serviceId: "cloud-devops" },
          { name: "Smart Warehouse Automation", serviceId: "cloud-devops" }
        ]
      },
      {
        id: "ind-othr-inds",
        name: "Retail, IoT & Aviation",
        items: [
          { name: "Omnichannel e-Commerce Engines", serviceId: "web-dev" },
          { name: "Smart IoT Telemetry Hubs", serviceId: "cloud-devops" },
          { name: "Aviation Scheduling & Booking", serviceId: "saas-dev" }
        ]
      }
    ]
  },
  resources: {
    label: "Resources",
    subGroups: [
      {
        id: "res-general",
        name: "Resources",
        items: [
          { name: "Blog", target: "insights" },
          { name: "Case Study", target: "projects" },
          { name: "Process", target: "services" }
        ]
      },
      {
        id: "res-learn",
        name: "Learn",
        items: [
          { name: "Careers", target: "services" },
          { name: "Our Clients", target: "projects" },
          { name: "Testimonials", target: "services" }
        ]
      },
      {
        id: "res-company",
        name: "Company",
        items: [
          { name: "Our Story", target: "home" },
          { name: "Life @ SpaceOn", target: "home" },
          { name: "Engagement Model", target: "services" }
        ]
      }
    ]
  }
};

export default function Navbar({ onStartProject, onNavigate, onViewServiceDetail, isLoading }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedRoots, setExpandedRoots] = useState<Record<string, boolean>>({});
  const [expandedSubgroups, setExpandedSubgroups] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeAiTab, setActiveAiTab] = useState('ai-dev');
  const [activeServicesTab, setActiveServicesTab] = useState('software-dev');
  const [activeIndustriesTab, setActiveIndustriesTab] = useState('healthcare');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setExpandedRoots({});
      setExpandedSubgroups({});
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[84px] z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px]">
      {/* Cinematic glassmorphic background layer */}
      <div 
        className="absolute inset-0 -z-20 border-b"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled ? 'blur(24px) saturate(120%)' : 'blur(0px) saturate(100%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(120%)' : 'blur(0px) saturate(100%)',
          borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
          opacity: isScrolled ? 1 : 0.85,
          transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Subtle top gradient overlay to maximize contrast */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black/50 to-transparent pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Official Logo aligned perfectly */}
        <div 
          onClick={() => {
            onNavigate('home');
            setActiveDropdown(null);
          }} 
          className="flex items-center cursor-pointer select-none mr-4 lg:mr-8 xl:mr-16 min-h-[34px] sm:min-h-[38px] md:min-h-[42px] lg:min-h-[46px] min-w-[120px]"
          id="logo-brand"
          style={{
            filter: isScrolled 
              ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.15))' 
              : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.02))',
            transition: 'filter 500ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {!isLoading && (
            logoError ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00df89] to-emerald-500 flex items-center justify-center text-black font-black text-sm tracking-tight shadow-[0_0_15px_rgba(0,223,137,0.3)] font-sans">
                  S
                </div>
                <span className="text-white text-lg font-black font-sans leading-none tracking-wider group-hover:text-[#00df89] transition-colors">
                  SPACE<span className="text-[#00df89]">ON</span>
                </span>
              </div>
            ) : (
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src="https://patelarsh.com/SpaceOn%20Logo/Light.png" 
                alt="SPACEON" 
                className="h-[34px] sm:h-[38px] md:h-[42px] lg:h-[46px] w-auto object-contain hover:opacity-95 transition-all duration-300 transform active:scale-98"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )
          )}
        </div>

        {/* Center Section: Centered Navigation links with premium interactive drop-down cards */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 h-full" id="desktop-nav">
          {Object.entries(dropdownData).map(([key, category]) => {
            const isDropdownActive = activeDropdown === key;
            
            if (key === 'ai') {
              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer group ${
                      isDropdownActive ? 'text-[#00df89]' : 'text-white/90 hover:text-[#00df89]'
                    }`}
                    id="nav-tab-ai"
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    
                    {/* Real-time beautiful green Down Chevron matching screenshot model */}
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110 text-[#00df89]' : 'rotate-0 text-emerald-500'
                      }`} 
                    />
                  </button>

                  {/* HIGH LEGIBILITY EXQUISITE MEGA-DROPDOWN AS REQUESTED BY USER */}
                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full -left-[80px] xl:-left-[240px] mt-1 w-[800px] xl:w-[940px] bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl z-50 flex flex-col text-neutral-900"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="flex min-h-[380px]">
                          {/* LEFT TABS SIDEBAR */}
                          <div className="w-[270px] bg-neutral-50/95 border-r border-neutral-100 p-4.5 flex flex-col gap-2 select-none">
                            {aiMegaData.map((tab) => {
                              const isActive = activeAiTab === tab.id;
                              
                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => {
                                    if (tab.id === 'ai-augmented') {
                                      if (onViewServiceDetail) {
                                        onViewServiceDetail('ai-augmented-dev');
                                      }
                                      setActiveDropdown(null);
                                    } else {
                                      setActiveAiTab(tab.id);
                                    }
                                  }}
                                  onMouseEnter={() => {
                                    if (tab.id !== 'ai-augmented') {
                                      setActiveAiTab(tab.id);
                                    }
                                  }}
                                  className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 text-left ${
                                    isActive
                                      ? 'bg-emerald-50 text-emerald-950 border border-emerald-500/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.7)]' 
                                      : 'border border-transparent hover:bg-neutral-100/70 text-neutral-600 hover:text-neutral-900'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-1 rounded-full flex items-center justify-center transition-all ${
                                      isActive ? 'bg-emerald-500 text-white scale-110 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'bg-neutral-200 text-neutral-400'
                                    }`}>
                                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                                    </div>
                                    <span className="text-[13.5px] font-bold tracking-wide">
                                      {tab.title}
                                    </span>
                                  </div>
                                  
                                  {tab.id === 'ai-augmented' ? (
                                    <span className="text-[8px] font-mono tracking-widest text-emerald-700 border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase font-extrabold">
                                      PAGE
                                    </span>
                                  ) : isActive ? (
                                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>

                          {/* RIGHT LINKS GRID */}
                          <div className="flex-1 p-7 flex flex-col justify-between bg-white">
                            <div>
                              {(() => {
                                const currentTab = aiMegaData.find(t => t.id === activeAiTab) || aiMegaData[0];

                                return (
                                  <>
                                    {/* Sub-Header matching screenshot styling */}
                                    <div className="flex items-center gap-2.5 mb-5 border-b border-neutral-100 pb-3">
                                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      </div>
                                      <h3 className="text-[14px] font-extrabold text-neutral-900 tracking-wide uppercase font-sans">
                                        {currentTab.headerTitle}
                                      </h3>
                                    </div>

                                    {/* Links Split Columns */}
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                                      <div className="flex flex-col gap-2.5">
                                        {currentTab.col1.map((link) => (
                                          <button
                                            key={link}
                                            type="button"
                                            onClick={() => {
                                              if (link === 'Hire AI Developers' && onViewServiceDetail) {
                                                onViewServiceDetail('hire-ai-devs');
                                              } else if (link === 'AI-Augmented Developer' && onViewServiceDetail) {
                                                onViewServiceDetail('ai-augmented-dev');
                                              } else if (onViewServiceDetail) {
                                                onViewServiceDetail('ai-automation');
                                              } else {
                                                onStartProject();
                                              }
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-neutral-700 hover:text-emerald-500 text-[13.5px] font-bold transition-colors tracking-wide hover:translate-x-0.5 transform duration-150 cursor-pointer"
                                          >
                                            {link}
                                          </button>
                                        ))}
                                      </div>
                                      <div className="flex flex-col gap-2.5">
                                        {currentTab.col2.map((link) => (
                                          <button
                                            key={link}
                                            type="button"
                                            onClick={() => {
                                              if (link === 'Hire AI Developers' && onViewServiceDetail) {
                                                onViewServiceDetail('hire-ai-devs');
                                              } else if (link === 'AI-Augmented Developer' && onViewServiceDetail) {
                                                onViewServiceDetail('ai-augmented-dev');
                                              } else if (onViewServiceDetail) {
                                                onViewServiceDetail('ai-automation');
                                              } else {
                                                onStartProject();
                                              }
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-neutral-500 hover:text-emerald-500 text-[13px] font-bold transition-colors tracking-wide hover:translate-x-0.5 transform duration-150 cursor-pointer"
                                          >
                                            {link}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            {/* Custom Action footer bar: "All AI Development Services | Hire AI Developers" */}
                            {(() => {
                              const currentTab = aiMegaData.find(t => t.id === activeAiTab) || aiMegaData[0];
                              return (
                                <div className="border-t border-neutral-100 pt-3.5 mt-6 flex items-center gap-1.5 text-[11px] font-sans font-extrabold uppercase tracking-wider text-neutral-400">
                                  {currentTab.footerLinks.map((flink, fidx) => (
                                    <React.Fragment key={flink}>
                                      {fidx > 0 && <span className="mx-2 text-neutral-200">|</span>}
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (flink === 'Hire AI Developers' && onViewServiceDetail) {
                                            onViewServiceDetail('hire-ai-devs');
                                          } else if (onViewServiceDetail) {
                                            onViewServiceDetail('ai-automation');
                                          } else {
                                            onStartProject();
                                          }
                                          setActiveDropdown(null);
                                        }}
                                        className="hover:text-emerald-500 transition-colors cursor-pointer"
                                      >
                                        {flink}
                                      </button>
                                    </React.Fragment>
                                  ))}
                                </div>
                              );
                            })()}
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (key === 'services') {
              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer group ${
                      isDropdownActive ? 'text-[#00df89]' : 'text-white/90 hover:text-[#00df89]'
                    }`}
                    id="nav-tab-services"
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110 text-[#00df89]' : 'rotate-0 text-emerald-500'
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full -left-[80px] xl:-left-[180px] mt-1 w-[800px] xl:w-[940px] bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl z-50 flex flex-col text-neutral-900"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="flex min-h-[380px]">
                          {/* LEFT TABS SIDEBAR */}
                          <div className="w-[270px] bg-neutral-50/95 border-r border-neutral-100 p-4.5 flex flex-col justify-between select-none">
                            <div className="flex flex-col gap-2">
                              {servicesMegaData.map((tab) => {
                                // For Product Engineering, it's a direct page link and never active in the sub-menu layout
                                const isProductEng = tab.id === 'product-eng';
                                const isActive = activeServicesTab === tab.id;
                                
                                return (
                                  <button
                                    key={tab.id}
                                    type="button"
                                    onMouseEnter={() => {
                                      if (!isProductEng) {
                                        setActiveServicesTab(tab.id);
                                      }
                                    }}
                                    onClick={() => {
                                      if (isProductEng) {
                                        if (onViewServiceDetail) {
                                          onViewServiceDetail('product-eng');
                                        }
                                        setActiveDropdown(null);
                                      } else {
                                        setActiveServicesTab(tab.id);
                                      }
                                    }}
                                    className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                                      isActive
                                        ? 'bg-emerald-50 text-emerald-950 border border-emerald-500/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.7)]' 
                                        : 'border border-transparent hover:bg-neutral-100/70 text-neutral-600 hover:text-neutral-900'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`p-1 rounded-full flex items-center justify-center transition-all ${
                                        isActive ? 'bg-emerald-500 text-white scale-110 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'bg-neutral-200 text-neutral-400'
                                      }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                                      </div>
                                      <span className="text-[13.5px] font-bold tracking-wide">
                                        {tab.title}
                                      </span>
                                    </div>
                                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />}
                                  </button>
                                );
                              })}
                            </div>

                            {/* "Work with SpaceOn" button at bottom of sidebar */}
                            <button
                              type="button"
                              onClick={() => {
                                onStartProject();
                                setActiveDropdown(null);
                              }}
                              className="w-full mt-4 p-3 rounded-xl border border-dashed border-neutral-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-neutral-500 hover:text-emerald-700 font-bold text-[12.5px] text-center transition-all tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Work with SpaceOn</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* RIGHT LINKS GRID */}
                          <div className="flex-1 p-7 flex flex-col justify-between bg-white">
                            <div>
                              {(() => {
                                const currentTab = servicesMegaData.find(t => t.id === activeServicesTab) || servicesMegaData[0];

                                if (activeServicesTab === 'cloud-devops') {
                                  return (
                                    <div className="grid grid-cols-2 gap-8 h-full">
                                      <div>
                                        <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-2">
                                          <Server className="w-4 h-4 text-emerald-500 shrink-0" />
                                          <h3 className="text-[14px] font-extrabold text-neutral-800 tracking-wide uppercase font-sans">
                                            Cloud Services
                                          </h3>
                                        </div>
                                        <div className="flex flex-col gap-3.5">
                                          {[
                                            'Cloud Consulting Services',
                                            'Cloud Native Development',
                                            'Cloud Migration Services',
                                            'Cloud Managed Services'
                                          ].map((link) => (
                                            <button
                                              key={link}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                            >
                                              {link}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div>
                                        <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-2">
                                          <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                                          <h3 className="text-[14px] font-extrabold text-neutral-800 tracking-wide uppercase font-sans">
                                            DevOps Solutions
                                          </h3>
                                        </div>
                                        <div className="flex flex-col gap-3.5">
                                          {[
                                            'DevOps Consulting Services',
                                            'DevOps CI/CD Services',
                                            'DevOps Automation Services',
                                            'DevOps Serverless Architecture',
                                            'DevOps Microservices'
                                          ].map((link) => (
                                            <button
                                              key={link}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                            >
                                              {link}
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }

                                if (activeServicesTab === 'aws-cloud') {
                                  return (
                                    <div className="flex flex-col gap-5 h-full">
                                      <div>
                                        <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-2">
                                          <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
                                          <h3 className="text-[14px] font-extrabold text-neutral-800 tracking-wide uppercase font-sans">
                                            AWS Cloud Consulting Services
                                          </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
                                          <div className="flex flex-col gap-3.5">
                                            {[
                                              'Cloud Architecture Design',
                                              'Cloud Migration Planning',
                                              'Cloud Security Assessment',
                                              'Cloud Platform Assessment'
                                            ].map((link) => (
                                              <button
                                                key={link}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                              >
                                                {link}
                                              </button>
                                            ))}
                                          </div>
                                          <div className="flex flex-col gap-3.5">
                                            {[
                                              'CI/CD Pipeline Automation',
                                              'Serverless Architecture Solutions',
                                              'Microservices Architecture Consulting'
                                            ].map((link) => (
                                              <button
                                                key={link}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                              >
                                                {link}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>

                                      <div className="border-t border-neutral-100 pt-4.5">
                                        <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-2">
                                          <Server className="w-4 h-4 text-emerald-500 shrink-0" />
                                          <h3 className="text-[14px] font-extrabold text-neutral-800 tracking-wide uppercase font-sans">
                                            AWS Managed Services
                                          </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                          >
                                            Cloud Monitoring & Maintenance
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                              setActiveDropdown(null);
                                            }}
                                            className="text-left text-neutral-600 hover:text-emerald-500 text-[13.5px] font-bold transition-all duration-150 hover:translate-x-0.5 tracking-wide cursor-pointer"
                                          >
                                            Cloud Audit & Optimization
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }

                                if (activeServicesTab === 'dedicated-devs') {
                                  return (
                                    <div className="flex flex-col gap-5 h-full max-h-[320px] overflow-y-auto pr-1">
                                      <div>
                                        <h4 className="text-[11.5px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-1.5 mb-3 select-none">
                                          Frontend
                                        </h4>
                                        <div className="grid grid-cols-3 gap-y-2.5 gap-x-4">
                                          {['React', 'Angular', 'Vue.js'].map((tech) => (
                                            <button
                                              key={tech}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('hire-ai-devs');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-700 hover:text-emerald-500 text-[13.5px] font-bold transition-colors tracking-wide cursor-pointer"
                                            >
                                              {tech}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-[11.5px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-1.5 mb-3 select-none">
                                          Backend
                                        </h4>
                                        <div className="grid grid-cols-3 gap-y-2.5 gap-x-4">
                                          {['Python', 'PHP', '.NET', 'Node.js', 'Java'].map((tech) => (
                                            <button
                                              key={tech}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('hire-ai-devs');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-700 hover:text-emerald-500 text-[13.5px] font-bold transition-colors tracking-wide cursor-pointer"
                                            >
                                              {tech}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-[11.5px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-1.5 mb-3 select-none">
                                          Mobile
                                        </h4>
                                        <div className="grid grid-cols-3 gap-y-2.5 gap-x-4">
                                          {['iOS', 'Flutter', 'Xamarin', 'Android', 'React Native'].map((tech) => (
                                            <button
                                              key={tech}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('mobile-app');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-700 hover:text-emerald-500 text-[13.5px] font-bold transition-colors tracking-wide cursor-pointer"
                                            >
                                              {tech}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-[11.5px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-1.5 mb-3 select-none">
                                          Frameworks
                                        </h4>
                                        <div className="grid grid-cols-3 gap-y-2.5 gap-x-4">
                                          {['Laravel', 'Django', 'Symfony', 'MEAN Stack', 'MERN Stack'].map((tech) => (
                                            <button
                                              key={tech}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('hire-ai-devs');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-700 hover:text-emerald-500 text-[13.5px] font-bold transition-colors tracking-wide cursor-pointer"
                                            >
                                              {tech}
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }

                                // Default/fallback layout for software-dev and product-eng
                                return (
                                  <>
                                    <div className="flex items-center gap-2.5 mb-5 border-b border-neutral-100 pb-3">
                                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      </div>
                                      <h3 className="text-[14px] font-extrabold text-neutral-900 tracking-wide uppercase font-sans">
                                        {currentTab.title} Services
                                      </h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      {currentTab.items.map((item) => {
                                        let ItemIcon = Code;
                                        if (item.title.toLowerCase().includes('web')) ItemIcon = Globe;
                                        else if (item.title.toLowerCase().includes('mvp') || item.title.toLowerCase().includes('scrum') || item.title.toLowerCase().includes('agile')) ItemIcon = Zap;
                                        else if (item.title.toLowerCase().includes('saas') || item.title.toLowerCase().includes('platform')) ItemIcon = Layers;
                                        else if (item.title.toLowerCase().includes('integration') || item.title.toLowerCase().includes('hybrid')) ItemIcon = Server;
                                        else if (item.title.toLowerCase().includes('legacy') || item.title.toLowerCase().includes('modernization') || item.title.toLowerCase().includes('infrastructure')) ItemIcon = Cpu;
                                        else if (item.title.toLowerCase().includes('outsourcing') || item.title.toLowerCase().includes('hire') || item.title.toLowerCase().includes('qa')) ItemIcon = Briefcase;
                                        else if (item.title.toLowerCase().includes('react') || item.title.toLowerCase().includes('design') || item.title.toLowerCase().includes('ux')) ItemIcon = Palette;

                                        return (
                                          <button
                                            key={item.title}
                                            type="button"
                                            onClick={() => {
                                              if (item.serviceId && onViewServiceDetail) {
                                                onViewServiceDetail(item.serviceId);
                                              } else {
                                                onStartProject();
                                              }
                                              setActiveDropdown(null);
                                            }}
                                            className="p-3 text-left rounded-xl hover:bg-neutral-50/80 border border-transparent hover:border-neutral-100 transition-all duration-200 flex items-start gap-3 group/item cursor-pointer"
                                          >
                                            <div className="p-2 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-200 mt-0.5">
                                              <ItemIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <h4 className="text-[13.5px] font-bold text-neutral-800 group-hover/item:text-emerald-600 transition-colors tracking-wide">
                                                {item.title}
                                              </h4>
                                              <p className="text-[11px] text-neutral-500 mt-1 leading-normal tracking-wide group-hover/item:text-neutral-600 transition-colors">
                                                {item.description}
                                              </p>
                                            </div>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            {/* "Read More ->" link bottom right */}
                            <div className="border-t border-neutral-100 pt-3.5 mt-6 flex justify-end">
                              {activeServicesTab === 'aws-cloud' ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                    setActiveDropdown(null);
                                  }}
                                  className="flex items-center gap-1.5 text-[12px] font-bold text-neutral-600 hover:text-emerald-600 transition-all cursor-pointer group/readmore"
                                >
                                  <span>Our AWS Process & Expertise</span>
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/readmore:translate-x-1" />
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    let destId = 'web-dev';
                                    if (activeServicesTab === 'cloud-devops') destId = 'cloud-devops';
                                    else if (activeServicesTab === 'dedicated-devs') destId = 'hire-ai-devs';
                                    else if (activeServicesTab === 'product-eng') destId = 'ui-ux';
                                    if (onViewServiceDetail) onViewServiceDetail(destId);
                                    setActiveDropdown(null);
                                  }}
                                  className="flex items-center gap-1.5 text-[12px] font-bold text-neutral-600 hover:text-emerald-600 transition-all cursor-pointer group/readmore"
                                >
                                  <span>Read More</span>
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/readmore:translate-x-1" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Custom mega rendering for other categories
            if (key === 'technologies') {
              const columns = [
                {
                  title: 'Frontend',
                  icon: Globe,
                  items: [
                    { name: 'React', id: 'tech-react' },
                    { name: 'Angular', id: 'tech-angular' },
                    { name: 'Vue.js', id: 'tech-vue-js' }
                  ]
                },
                {
                  title: 'Backend',
                  icon: Server,
                  items: [
                    { name: 'Python', id: 'tech-python' },
                    { name: 'Node.js', id: 'tech-node-js' },
                    { name: 'Java', id: 'tech-java' },
                    { name: 'PHP', id: 'tech-php' },
                    { name: '.NET', id: 'tech-dotnet' }
                  ]
                },
                {
                  title: 'Mobile',
                  icon: Smartphone,
                  items: [
                    { name: 'iOS', id: 'tech-ios' },
                    { name: 'Android', id: 'tech-android' },
                    { name: 'React Native', id: 'tech-react-native' },
                    { name: 'Flutter', id: 'tech-flutter' },
                    { name: 'Xamarin', id: 'tech-xamarin' }
                  ]
                },
                {
                  title: 'Frameworks',
                  icon: Code,
                  items: [
                    { name: 'Laravel', id: 'tech-laravel' },
                    { name: 'MEAN Stack', id: 'tech-mean-stack' },
                    { name: 'MERN Stack', id: 'tech-mern-stack' },
                    { name: 'Django', id: 'tech-django' },
                    { name: 'Symfony', id: 'tech-symfony' }
                  ]
                },
                {
                  title: 'Platform',
                  icon: Cpu,
                  items: [
                    { name: 'Splunk', id: 'tech-splunk' },
                    { name: 'Salesforce', id: 'tech-salesforce' },
                    { name: 'Apache Kafka', id: 'tech-apache-kafka' },
                    { name: 'Elasticsearch', id: 'tech-elasticsearch' },
                    { name: 'DataDog', id: 'tech-datadog' }
                  ]
                }
              ];

              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer group ${
                      isDropdownActive ? 'text-[#00df89]' : 'text-white/90 hover:text-[#00df89]'
                    }`}
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110 text-[#00df89]' : 'rotate-0 text-emerald-500'
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[880px] xl:w-[980px] bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.22)] z-50 flex flex-col text-neutral-900"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="grid grid-cols-5 gap-6 p-7.5 bg-white">
                          {columns.map((col) => {
                            const ColIcon = col.icon;
                            return (
                              <div key={col.title} className="flex flex-col gap-3.5">
                                <h4 className="text-[12px] font-extrabold text-neutral-800 uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                  <ColIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span>{col.title}</span>
                                </h4>
                                <div className="flex flex-col gap-3">
                                  {col.items.map((item) => (
                                    <button
                                      key={item.name}
                                      type="button"
                                      onClick={() => {
                                        if (onViewServiceDetail) {
                                          onViewServiceDetail(item.id);
                                        } else {
                                          onStartProject();
                                        }
                                        setActiveDropdown(null);
                                      }}
                                      className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13.5px] tracking-wide hover:translate-x-1 hover:scale-101 transform duration-200 cursor-pointer origin-left"
                                    >
                                      {item.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="bg-neutral-50/80 border-t border-neutral-100 px-7.5 py-4 flex items-center justify-between text-[11px] font-sans font-extrabold uppercase tracking-wider text-neutral-400">
                          <button
                            type="button"
                            onClick={() => {
                              if (onViewServiceDetail) onViewServiceDetail('hire-ai-devs');
                              setActiveDropdown(null);
                            }}
                            className="text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer flex items-center gap-1 font-extrabold"
                          >
                            <span>Why Outsource to SpaceOn?</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-neutral-200">|</span>
                          <button
                            type="button"
                            onClick={() => {
                              onStartProject();
                              setActiveDropdown(null);
                            }}
                            className="hover:text-emerald-500 transition-colors cursor-pointer"
                          >
                            Guide to Hiring an Elite Engineering Team Today
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (key === 'resources') {
              const columns = [
                {
                  title: 'Resources',
                  icon: FileText,
                  items: [
                    { name: 'Blog', target: 'insights' },
                    { name: 'Case Study', target: 'projects' },
                    { name: 'Process', target: 'services' }
                  ]
                },
                {
                  title: 'Learn',
                  icon: GraduationCap,
                  items: [
                    { name: 'Careers', target: 'services' },
                    { name: 'Our Clients', target: 'projects' },
                    { name: 'Testimonials', target: 'services' }
                  ]
                },
                {
                  title: 'Company',
                  icon: Layers,
                  items: [
                    { name: 'Our Story', target: 'home' },
                    { name: 'Life @ SpaceOn', target: 'home' },
                    { name: 'Engagement Model', target: 'services' }
                  ]
                }
              ];

              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer group ${
                      isDropdownActive ? 'text-[#00df89]' : 'text-white/90 hover:text-[#00df89]'
                    }`}
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110 text-[#00df89]' : 'rotate-0 text-emerald-500'
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full -right-[40px] xl:-right-[120px] mt-1 w-[820px] xl:w-[940px] bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.22)] z-50 flex flex-col text-neutral-900"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="grid grid-cols-12 gap-7 p-7.5 bg-white">
                          {/* Left menu links cols */}
                          <div className="col-span-8 grid grid-cols-3 gap-6">
                            {columns.map((col) => {
                              const ColIcon = col.icon;
                              return (
                                <div key={col.title} className="flex flex-col gap-3.5">
                                  <h4 className="text-[12px] font-extrabold text-neutral-800 uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                    <ColIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                    <span>{col.title}</span>
                                  </h4>
                                  <div className="flex flex-col gap-3">
                                    {col.items.map((item) => (
                                      <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => {
                                          onNavigate(item.target);
                                          setActiveDropdown(null);
                                        }}
                                        className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13.5px] tracking-wide hover:translate-x-1 hover:scale-101 transform duration-200 cursor-pointer origin-left"
                                      >
                                        {item.name}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Case study card matching the SpaceOn Technology screenshot exactly */}
                          <div className="col-span-4 h-full">
                            <div 
                              onClick={() => {
                                if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                setActiveDropdown(null);
                              }}
                              className="group/card-feature bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between h-[180px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-[12px] font-extrabold text-white/50 tracking-widest font-mono uppercase bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                  aws
                                </div>
                                <Layers className="w-5 h-5 text-emerald-400 group-hover/card-feature:animate-pulse" />
                              </div>

                              <div className="my-2 select-none">
                                <span className="text-[8.5px] font-mono tracking-widest font-extrabold text-emerald-400 uppercase">
                                  FINTECH, AWS / CLOUD
                                </span>
                                <h4 className="text-[13.5px] font-bold text-white leading-normal mt-1 group-hover/card-feature:text-emerald-400 transition-colors tracking-tight">
                                  Optimized high-traffic payments with AWS serverless meshes.
                                </h4>
                              </div>

                              <div className="flex items-center justify-between text-[10px] font-sans font-extrabold uppercase tracking-wider text-neutral-300 border-t border-white/5 pt-2.5">
                                <span className="flex items-center gap-1 text-emerald-400">
                                  READ CASE STUDY
                                  <ArrowRight className="w-3 h-3 group-hover/card-feature:translate-x-0.5 transform duration-200" />
                                </span>
                                <span className="text-[9px] font-mono font-bold text-white/20">
                                  spaceon
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-neutral-50/80 border-t border-neutral-100 px-7.5 py-4 flex items-center text-[11px] font-sans font-extrabold uppercase tracking-wider text-neutral-400">
                          <button
                            type="button"
                            onClick={() => {
                              onStartProject();
                              setActiveDropdown(null);
                            }}
                            className="text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer flex items-center gap-1 font-extrabold"
                          >
                            <span>Work with SpaceOn Engineering Crews</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (key === 'industries') {
              const renderIndustryIcon = (iconName: string, className?: string) => {
                switch (iconName) {
                  case 'Activity': return <Activity className={className || "w-4 h-4"} />;
                  case 'DollarSign': return <DollarSign className={className || "w-4 h-4"} />;
                  case 'Truck': return <Truck className={className || "w-4 h-4"} />;
                  case 'ShoppingBag': return <ShoppingBag className={className || "w-4 h-4"} />;
                  case 'Cpu': return <Cpu className={className || "w-4 h-4"} />;
                  case 'Plane': return <Plane className={className || "w-4 h-4"} />;
                  default: return <Briefcase className={className || "w-4 h-4"} />;
                }
              };

              return (
                <div
                  key={key}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer group ${
                      isDropdownActive ? 'text-[#00df89]' : 'text-white/90 hover:text-[#00df89]'
                    }`}
                    id="nav-tab-industries"
                  >
                    <span className="relative">
                      {category.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownActive ? 'rotate-180 scale-110 text-[#00df89]' : 'rotate-0 text-emerald-500'
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full -right-[160px] xl:-right-[300px] mt-1 w-[820px] xl:w-[960px] bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl z-50 flex flex-col text-neutral-900"
                      >
                        {/* Interactive safety bridge */}
                        <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />

                        <div className="flex min-h-[380px]">
                          {/* LEFT TABS SIDEBAR */}
                          <div className="w-[260px] bg-neutral-50/95 border-r border-neutral-100 p-4 flex flex-col gap-1.5 select-none shrink-0 text-neutral-900">
                            {industriesMegaData.map((tab) => {
                              const isActive = activeIndustriesTab === tab.id;
                              
                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => setActiveIndustriesTab(tab.id)}
                                  onMouseEnter={() => setActiveIndustriesTab(tab.id)}
                                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left ${
                                    isActive
                                      ? 'bg-emerald-50 text-emerald-950 border border-emerald-500/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.7)]' 
                                      : 'border border-transparent hover:bg-neutral-100/70 text-neutral-600 hover:text-neutral-900'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-xl flex items-center justify-center transition-all ${
                                      isActive ? 'bg-emerald-500 text-white scale-105 shadow-[0_4px_10px_rgba(16,185,129,0.25)]' : 'bg-neutral-100 text-neutral-400'
                                    }`}>
                                      {renderIndustryIcon(tab.iconName, "w-4 h-4")}
                                    </div>
                                    <span className="text-[14px] font-bold tracking-wide">
                                      {tab.title}
                                    </span>
                                  </div>
                                  
                                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                                </button>
                              );
                            })}

                            <button
                              type="button"
                              onClick={() => {
                                onStartProject();
                                setActiveDropdown(null);
                              }}
                              className="w-full mt-auto p-3 rounded-xl border border-dashed border-neutral-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-neutral-500 hover:text-emerald-700 font-bold text-[12.5px] text-center transition-all tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Partner with spaceon</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* RIGHT LINKS GRID / PANEL CONTENT */}
                          <div className="flex-1 p-7 flex flex-col justify-between bg-white overflow-hidden text-neutral-900">
                            <div className="h-full">
                              {(() => {
                                const tab = industriesMegaData.find(t => t.id === activeIndustriesTab) || industriesMegaData[0];

                                if (tab.id === 'healthcare') {
                                  return (
                                    <div className="grid grid-cols-3 gap-5 h-full text-neutral-900">
                                      {/* Column 1: Core Healthcare Platforms */}
                                      <div className="flex flex-col gap-3.5 border-r border-neutral-100/60 pr-3.5">
                                        <h4 className="text-[12px] font-extrabold text-[#111111] uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                          <Layers className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                          <span>Core Platforms</span>
                                        </h4>
                                        <div className="flex flex-col gap-2.5">
                                          {[
                                            'Custom Healthcare Software Development',
                                            'EHR Development',
                                            'EMR Development',
                                            'Healthcare CRM',
                                            'Patient Engagement Systems',
                                            'Electronic Data Capture'
                                          ].map((item) => (
                                            <button
                                              key={item}
                                              type="button"
                                              onClick={() => {
                                                if (onViewServiceDetail) onViewServiceDetail('web-dev');
                                                setActiveDropdown(null);
                                              }}
                                              className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13px] tracking-wide hover:translate-x-1 duration-150 cursor-pointer"
                                            >
                                              {item}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Column 2: Care Delivery & Healthcare AI */}
                                      <div className="flex flex-col gap-6 border-r border-neutral-100/60 pr-3.5">
                                        {/* Care Delivery */}
                                        <div className="flex flex-col gap-3.5">
                                          <h4 className="text-[12px] font-extrabold text-[#111111] uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                            <Activity className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Care Delivery</span>
                                          </h4>
                                          <div className="flex flex-col gap-2.5">
                                            {[
                                              'Telemedicine',
                                              'Remote Patient Monitoring (RPM)',
                                              'Chronic Care Management (CCM)'
                                            ].map((item) => (
                                              <button
                                                key={item}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('web-dev');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13px] tracking-wide hover:translate-x-1 duration-150 cursor-pointer"
                                              >
                                                {item}
                                              </button>
                                            ))}
                                          </div>
                                        </div>

                                        {/* Healthcare AI */}
                                        <div className="flex flex-col gap-3.5">
                                          <h4 className="text-[12px] font-extrabold text-[#111111] uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Healthcare AI</span>
                                          </h4>
                                          <div className="flex flex-col gap-2.5">
                                            {[
                                              'AI Medical Scribe',
                                              'AI Chatbots',
                                              'AI Coding',
                                              'AI Prior Auth'
                                            ].map((item) => (
                                              <button
                                                key={item}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('ai-automation');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13px] tracking-wide hover:translate-x-1 duration-150 cursor-pointer"
                                              >
                                                {item}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>

                                      {/* Column 3: Revenue & Interoperability */}
                                      <div className="flex flex-col gap-6">
                                        {/* Revenue */}
                                        <div className="flex flex-col gap-3.5">
                                          <h4 className="text-[12px] font-extrabold text-[#111111] uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                            <DollarSign className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Revenue Optimization</span>
                                          </h4>
                                          <div className="flex flex-col gap-2.5">
                                            {[
                                              'Revenue Cycle Management (RCM)',
                                              'AI Medical Coding',
                                              'Prior Authorization Automation'
                                            ].map((item) => (
                                              <button
                                                key={item}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('saas-dev');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13px] tracking-wide hover:translate-x-1 duration-150 cursor-pointer"
                                              >
                                                {item}
                                              </button>
                                            ))}
                                          </div>
                                        </div>

                                        {/* Interoperability */}
                                        <div className="flex flex-col gap-3.5">
                                          <h4 className="text-[12px] font-extrabold text-[#111111] uppercase tracking-wider font-sans select-none pb-2 border-b border-neutral-100 flex items-center gap-2">
                                            <Cpu className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Interoperability</span>
                                          </h4>
                                          <div className="flex flex-col gap-2.5">
                                            {[
                                              'FHIR / SMART on FHIR',
                                              'EHR Integration',
                                              'Labs / eRx Integrations'
                                            ].map((item) => (
                                              <button
                                                key={item}
                                                type="button"
                                                onClick={() => {
                                                  if (onViewServiceDetail) onViewServiceDetail('cloud-devops');
                                                  setActiveDropdown(null);
                                                }}
                                                className="text-left text-neutral-600 hover:text-emerald-500 font-bold text-[13px] tracking-wide hover:translate-x-1 duration-150 cursor-pointer"
                                              >
                                                {item}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }

                                // Layout for card based sections (Fintech, Logistics, Retail, IoT, Aviation)
                                return (
                                  <div className="flex flex-col h-full bg-white">
                                    <div className="flex items-center gap-2.5 mb-5 border-b border-neutral-100 pb-3">
                                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                        {renderIndustryIcon(tab.iconName, "w-4 h-4")}
                                      </div>
                                      <h3 className="text-[14px] font-extrabold text-neutral-900 tracking-wide uppercase font-sans">
                                        {tab.title} Software & Solutions
                                      </h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      {tab.cards?.map((card) => (
                                        <button
                                          key={card.title}
                                          type="button"
                                          onClick={() => {
                                            if (card.serviceId && onViewServiceDetail) {
                                              onViewServiceDetail(card.serviceId);
                                            } else {
                                              onStartProject();
                                            }
                                            setActiveDropdown(null);
                                          }}
                                          className="p-3.5 text-left rounded-xl hover:bg-neutral-50/80 border border-neutral-100 hover:border-emerald-500/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 flex items-start gap-4 group/item cursor-pointer"
                                        >
                                          <div className="p-2 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-200 mt-0.5 shrink-0 flex items-center justify-center w-8.5 h-8.5">
                                            {renderIndustryIcon(tab.iconName, "w-4 h-4")}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h4 className="text-[13.5px] font-bold text-neutral-800 group-hover/item:text-emerald-600 transition-colors tracking-wide">
                                              {card.title}
                                            </h4>
                                            <p className="text-[11.5px] text-neutral-500 mt-1 leading-relaxed tracking-wide group-hover/item:text-neutral-600 transition-colors">
                                              {card.description}
                                            </p>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>

                            <div className="border-t border-neutral-100 pt-3.5 mt-6 flex justify-between items-center text-[11px] font-sans font-extrabold uppercase tracking-wider text-neutral-400 select-none">
                              <button
                                type="button"
                                onClick={() => {
                                  if (onViewServiceDetail) onViewServiceDetail('hire-ai-devs');
                                  setActiveDropdown(null);
                                }}
                                className="text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer flex items-center gap-1 font-extrabold"
                              >
                                <span>Why Choose spaceon Industries Group?</span>
                                <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return null;
          })}
        </nav>

        {/* Right Section: Request Quote button matching exactly with the user design request */}
        <div className="flex items-center gap-5">
          <button
            onClick={onStartProject}
            className="hidden sm:inline-block rounded-full border border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold px-7 py-2.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.03] active:scale-98 cursor-pointer text-center"
            id="start-project-btn"
          >
            Request Quote
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 z-55 cursor-pointer border ${
              mobileMenuOpen 
                ? 'bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200' 
                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
            id="mobile-hamburger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 animate-pulse" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer - Flat Clean Accordion matching the screenshot exactly */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-[380px] bg-white border-l border-neutral-200 z-40 p-6 pt-24 shadow-2xl flex flex-col justify-between overflow-y-auto text-neutral-900"
          >
            <div className="flex flex-col gap-2 mt-2">
              {/* Brand Logo inside Mobile Drawer in high contrast */}
              <div className="flex items-center gap-3.5 pb-5 mb-3 border-b border-neutral-100 select-none">
                <div 
                  onClick={() => {
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00df89] to-emerald-500 flex items-center justify-center text-black font-black text-sm tracking-tight shadow-md">
                    S
                  </div>
                  <span className="text-neutral-900 text-lg font-black font-sans leading-none tracking-wider">
                    SPACE<span className="text-emerald-500">ON</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                {[
                  { label: "AI", key: "ai" },
                  { label: "Services", key: "services" },
                  { label: "Technologies", key: "technologies" },
                  { label: "Industries", key: "industries" },
                  { label: "Resources", key: "resources" }
                ].map((item) => {
                  const isRootExpanded = !!expandedRoots[item.key];

                  return (
                    <div key={item.label} className="flex flex-col border-b border-neutral-100 last:border-0">
                      <button
                        type="button"
                        onClick={() => {
                          setExpandedRoots(prev => ({
                            ...prev,
                            [item.key]: !prev[item.key]
                          }));
                        }}
                        className="w-full py-5 px-3 flex items-center justify-between text-neutral-800 hover:text-emerald-500 font-medium text-[18px] text-left transition-colors cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-emerald-500 transition-transform duration-300 shrink-0 ${
                            isRootExpanded ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isRootExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden bg-neutral-50/70 rounded-lg mb-3 shadow-inner"
                          >
                            <div className="py-4 px-4 flex flex-col gap-4 border-l-2 border-emerald-500/30">
                              {mobileNavGroups[item.key]?.subGroups.map((subGroup) => (
                                <div key={subGroup.id} className="flex flex-col gap-1.5">
                                  <div className="text-[11px] font-mono tracking-wider text-emerald-600 uppercase font-bold mb-1.5 pl-1">
                                    {subGroup.name}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    {subGroup.items.map((finalLink) => (
                                      <button
                                        key={finalLink.name}
                                        type="button"
                                        onClick={() => {
                                          if (finalLink.serviceId && onViewServiceDetail) {
                                            onViewServiceDetail(finalLink.serviceId);
                                          } else if (finalLink.target) {
                                            onNavigate(finalLink.target);
                                          } else {
                                            onStartProject();
                                          }
                                          setMobileMenuOpen(false);
                                        }}
                                        className="w-full py-2 px-3 text-left text-neutral-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-all text-[13.5px] font-medium flex items-center justify-between group/link cursor-pointer"
                                      >
                                        <span>{finalLink.name}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-[#00df89] transition-all duration-200 shrink-0" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 pb-2">
              <button
                type="button"
                onClick={() => {
                  onStartProject();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center rounded-full border border-emerald-500 bg-emerald-50/25 hover:bg-emerald-100/40 text-emerald-600 py-3.5 text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
