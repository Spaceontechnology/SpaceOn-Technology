import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Cpu, Database, Globe, 
  Layers, ShieldCheck, Smartphone, Terminal, Activity, 
  HelpCircle, Calendar, Sparkles, Check, Server, Code, Code2,
  Star, ChevronDown, Send, MapPin, Clock, Phone, Mail, Building2, User, ChevronUp
} from 'lucide-react';
import ReactJSPage from './ReactJSPage';

interface TechnologyDetails {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDesc: string;
  logoSlug: string;
  color: string;
  rating: string;
  bannerFileName: string;
  specs: string[];
  capabilities: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  schemaCode: string;
}

interface TechnologyDetailPageProps {
  technologyId: string;
  onBack: () => void;
  onBookConsultation: (subject?: string) => void;
  onNavigateToTech: (techId: string) => void;
}

// Map each technology slug to rich specs, images, and content
const technologiesData: Record<string, TechnologyDetails> = {
  'tech-react': {
    id: 'tech-react',
    name: 'React',
    category: 'FRONTEND',
    tagline: 'High-Fidelity Component Architectures',
    description: 'Sovereign UI libraries designed for lightning-fast responsive updates, concurrent state-driven rendering, and seamless hydration.',
    longDesc: 'Our engineering collective builds state-of-the-art Single Page Applications (SPA) and Server-Side Rendered (SSR) frameworks using React. We implement meticulous state management, high-performance virtual DOM rehydration, and customized component trees that render at 60 FPS.',
    logoSlug: 'react',
    color: '#61DAFB',
    rating: '99% STABLE',
    bannerFileName: 'hire-react-js-banner-img.webp',
    specs: ['Concurrent Transitions', 'Custom Hydration Loops', 'Context State Splitting', 'Next.js 15 SSR Integrations'],
    capabilities: [
      { title: 'Concurrent Rendering Engines', desc: 'Optimize user input interactions by deferring expensive virtual UI re-draws cleanly.' },
      { title: 'Granular Bundle Splitting', desc: 'Ensure fast load times through automated lazy loading and custom chunk optimization.' },
      { title: 'State Engine Isolation', desc: 'Establish robust state channels using custom zustand counters or memoized context providers.' }
    ],
    faqs: [
      { q: 'How does SpaceOn optimize React load performance?', a: 'We enforce automated code-splitting, critical-path CSS rendering, next-generation image format compression, and edge caching to achieve high Lighthouse scores.' },
      { q: 'Do you support React 19 and custom server components?', a: 'Yes, we are fully aligned with the React ecosystem, leveraging Server Components and Actions to offload computational cost from client devices.' }
    ],
    schemaCode: `import React, { useTransition } from 'react';\n\nexport function AsyncPipeline() {\n  const [isPending, startTransition] = useTransition();\n  // Decoupled reactive re-rendering loop\n  return <Canvas render={isPending} />;\n}`
  },
  'tech-angular': {
    id: 'tech-angular',
    name: 'Angular',
    category: 'FRONTEND',
    tagline: 'Hierarchical Enterprise Frameworks',
    description: 'Rigid modular structural frameworks backed by strong dependency injection and native enterprise SPA compilation pipelines.',
    longDesc: 'For enterprise solutions demanding strict architecture patterns, we employ Angular to enforce type safety, declarative reactive scheduling, and scalable routing schemas. Our structures utilize RxJS streams for high-concurrency event telemetry mapping.',
    logoSlug: 'angular',
    color: '#DD0031',
    rating: '100% TYPED',
    bannerFileName: 'hire-angularjs-developers-banner-img.webp',
    specs: ['Hierarchical DI Systems', 'RxJS Stream Sockets', 'Signals State Management', 'AoT Compiler Pipelines'],
    capabilities: [
      { title: 'Strict Dependency Injection', desc: 'Enforce decoupled architectural testing borders across modular backend API communication channels.' },
      { title: 'Native Change Detection', desc: 'Configure optimized Zone.js parameters or signal trees to trigger targeted view sweeps.' },
      { title: 'Enterprise Feature Modules', desc: 'Seamlessly structure multi-module developer pipelines to prevent team delivery conflicts.' }
    ],
    faqs: [
      { q: 'Why choose Angular for enterprise portals?', a: 'Angular provides an exhaustive, batteries-included engineering methodology that guarantees consistency across extensive corporate development groups.' },
      { q: 'Do you leverage the new Angular Signals?', a: 'Yes, we rewrite change-detection trees using Angular Signals to achieve precise, zone-less surgical DOM re-draws.' }
    ],
    schemaCode: `@Component({\n  selector: 'app-engine',\n  standalone: true,\n  template: '<view [data]="signal()"></view>'\n})\nexport class Engine { signal = input.required(); }`
  },
  'tech-vue-js': {
    id: 'tech-vue-js',
    name: 'Vue.js',
    category: 'FRONTEND',
    tagline: 'Approachable Reactive Paradigms',
    description: 'Lightweight reactive layers pairing highly accessible composition syntax with deep virtual DOM re-evaluation sweeps.',
    longDesc: 'Vue.js enables us to develop highly performant frontends with high-efficiency reactivity pipelines. Using Single File Components (SFC) paired with the Composition API, we engineer customizable corporate layouts that build into highly compact assets.',
    logoSlug: 'vuedotjs',
    color: '#4FC08D',
    rating: '98% COMPACT',
    bannerFileName: 'hire-vuejs-developers-banner-img.webp',
    specs: ['Composition API Blocks', 'Pinia Multi-store state', 'Vite Ultra-fast Bundling', 'High-speed Virtual DOM'],
    capabilities: [
      { title: 'Reactive Ref Handshakes', desc: 'Implement automated, zero-overhead value subscription networks directly tracking system modifications.' },
      { title: 'Custom Directive Hooks', desc: 'Integrate browser events directly with hardware APIs through custom directives.' },
      { title: 'Adaptive Bundle Sizes', desc: 'Build incredibly light applications optimized for slow mobile internet speeds.' }
    ],
    faqs: [
      { q: 'Is Vue.js ready for massive scale platforms?', a: 'Yes. When combined with TypeScript and state managers like Pinia, Vue.js easily manages high-complexity enterprise applications.' },
      { q: 'How do you handle transition animations?', a: 'We leverage Vue\'s native Transition modules mapped with custom Tailwind classes for breathtaking routing transitions.' }
    ],
    schemaCode: `<script setup lang="ts">\nimport { ref, computed } from 'vue';\nconst state = ref(0);\nconst double = computed(() => state.value * 2);\n</script>`
  },
  'tech-python': {
    id: 'tech-python',
    name: 'Python',
    category: 'BACKEND',
    tagline: 'Sovereign Algorithmic Engines',
    description: 'Sovereign backends optimized for high-performance AI integration, robust parallel processing, and clean algorithmic data pipelines.',
    longDesc: 'Leveraging Python, we construct secure server environments designed for natural language processing, vector analysis, and machine learning pipeline execution. By integrating asynchronous microservices, we achieve low latency with colossal calculations.',
    logoSlug: 'python',
    color: '#3776AB',
    rating: 'AI ENHANCED',
    bannerFileName: 'hire-python-developers-banner-image.webp',
    specs: ['FastAPI REST Structures', 'NumPy Matrix Algebra', 'Asynchronous Asyncio Sockets', 'PyTest Rigid Asserts'],
    capabilities: [
      { title: 'AI & LLM Model Integration', desc: 'Securely mount local weight embeddings, execute prompt constraints, and stream telemetry replies.' },
      { title: 'Asynchronous Event Handlers', desc: 'Bypass CPU-bound limits through event-driven thread executor pools.' },
      { title: 'Enterprise Data Sanitization', desc: 'Validate request bodies in real time using strict Pydantic parsing schemas.' }
    ],
    faqs: [
      { q: 'Which backend framework do you recommend?', a: 'For heavy data manipulation or machine learning, we use FastAPI for its asynchronous engine. For robust admin-driven systems, we prefer Django.' },
      { q: 'How do you handle thread-blocking calculations?', a: 'We delegate long-running algorithmic computations to background task queues managed by Celery and Redis.' }
    ],
    schemaCode: `@app.get("/api/v1/predict")\nasync def compute_weights(payload: PromptSchema):\n    vector = await core_agent.embed(payload.context)\n    return {"scores": vector}`
  },
  'tech-node-js': {
    id: 'tech-node-js',
    name: 'Node.js',
    category: 'BACKEND',
    tagline: 'Asynchronous Thread-driven I/O',
    description: 'Asynchronous, single-threaded high-concurrency loops executing fast JS runtimes on servers and serverless edge servers.',
    longDesc: 'Node.js is our primary runtime for high-throughput transactional backends. Powered by Vite development setups and packaged in CJS or ESM bundles, our Node microservices handle concurrent client data transfers with minimal memory overhead.',
    logoSlug: 'nodedotjs',
    color: '#339933',
    rating: 'HEAVY CONCUR',
    bannerFileName: 'hire-nodejs-developers-banner.webp',
    specs: ['Event Loop Optimization', 'Express & Fastify Hosts', 'Native Worker Concurrency', 'Streams Allocation Buffer'],
    capabilities: [
      { title: 'Non-blocking I/O Systems', desc: 'Perfect for chat channels, telemetry monitors, and persistent transaction streams.' },
      { title: 'Robust Stream Channels', desc: 'Process massive data files incrementally without overloading container memory allocations.' },
      { title: 'Native Thread Pools', desc: 'Scale computing limits across clusters using lightweight Worker threads.' }
    ],
    faqs: [
      { q: 'How does SpaceOn handle horizontal scaling in Node?', a: 'We construct stateless containerized microservices and split requests through load balancers over dynamic cloud groups.' },
      { q: 'Is Node.js secure from runtime vulnerabilities?', a: 'We enforce active dependency tree audits and strict sandboxed input validation on all routes.' }
    ],
    schemaCode: `import http from 'http';\n\nconst server = http.createServer((req, res) => {\n  req.pipe(res); // Echo stream buffer cleanly\n});\nserver.listen(3000);`
  },
  'tech-java': {
    id: 'tech-java',
    name: 'Java',
    category: 'BACKEND',
    tagline: 'Sovereign Multi-Thread Architectures',
    description: 'Rigid object-oriented JVM virtual environments constructed for maximum security execution across enterprise thread clusters.',
    longDesc: 'Our Java collective crafts solid enterprise platforms utilizing Spring Boot core architectures. We emphasize strict type definitions, secure transactional memory allocations, and high-volume database concurrency for banking or CRM systems.',
    logoSlug: 'oracle',
    color: '#F8981D',
    rating: 'ENTERPRISE',
    bannerFileName: 'hire-java-developers-banner-image.webp',
    specs: ['Spring Boot microservices', 'JPA Persistence Sockets', 'JVM Memory Tuning', 'Thread Concurrency Locks'],
    capabilities: [
      { title: 'Enterprise Cryptography', desc: 'Implement automated, high-entropy token parsing systems and secure data sanitization rules.' },
      { title: 'ACID DBMS Integration', desc: 'Keep transactional database operations perfectly atomic and insulated from concurrency race conditions.' },
      { title: 'Reliable Garbage Collection', desc: 'Customize memory sweeps to prevent runtime latency spikes during heavy workload peaks.' }
    ],
    faqs: [
      { q: 'How do you structure Java deployments?', a: 'We package Spring Boot backends inside Docker capsules and run them on auto-healing Kubernetes nodes.' },
      { q: 'How do you handle background bulk processing?', a: 'We configure Spring Batch architectures to process immense ledger records with automated checkpoint rollbacks.' }
    ],
    schemaCode: `@RestController\n@RequestMapping("/api/ledger")\npublic class Controller {\n  @PostMapping\n  public ResponseEntity<Transaction> publish() { ... }\n}`
  },
  'tech-php': {
    id: 'tech-php',
    name: 'PHP',
    category: 'BACKEND',
    tagline: 'Accelerated Transaction Handlers',
    description: 'Dynamic server-side scripting runtimes fueling transactional frameworks, deep SQL integration pools, and template hydration.',
    longDesc: 'We develop optimized PHP microservices designed to scale up to millions of request transactions. Leveraging recent releases such as PHP 8.3 with JIT compiling, we build lightning-fast routing frameworks, robust database ORM models, and ecommerce systems.',
    logoSlug: 'php',
    color: '#777BB4',
    rating: 'BATTLE TESTED',
    bannerFileName: 'hire-php-developers-banner.webp',
    specs: ['JIT Compiler Pipelines', 'OPcache Acceleration', 'PDO Prepared Bridges', 'Safe Composer Trees'],
    capabilities: [
      { title: 'Bespoke Transaction Pipelines', desc: 'Perfect for executing payments, parsing shopping lists, and querying active stock tallies.' },
      { title: 'Secure Database Bridges', desc: 'Perform prepared statements with automated protection against injection vector attacks.' },
      { title: 'Scalable MVC Routing', desc: 'Keep application boundaries segregated into controllers, service caches, and data layouts.' }
    ],
    faqs: [
      { q: 'Is PHP fast enough for modern interactive web apps?', a: 'Absolutely. With PHP 8.3, OPcache, and memory caching, latency remains in the single-digit milliseconds.' },
      { q: 'How do you protect database operations?', a: 'We employ object-relational mapping models combined with prepared query streams to guarantee safety.' }
    ],
    schemaCode: `<?php\ndeclare(strict_types=1);\nclass TransactionBroker {\n    public function execute(string $token): void {}\n}`
  },
  'tech-dotnet': {
    id: 'tech-dotnet',
    name: '.NET',
    category: 'BACKEND',
    tagline: 'High-Frequency Enterprise Pillars',
    description: 'Enterprise-grade frameworks compiled under robust C# namespaces, offering deterministic low-latency APIs and cloud endpoints.',
    longDesc: 'Using ASP.NET Core paired with Entity Framework Core, we engineer powerful backend servers designed to securely manage critical transactions, user roles, databases, and heavy APIs for financial portals and logistics pipelines.',
    logoSlug: 'dotnet',
    color: '#512BD4',
    rating: 'HIGH SPEED',
    bannerFileName: 'hire-dot-net-developers-banner-image.webp',
    specs: ['C# REST Configurations', 'Entity Framework ORM', 'LINQ Collection Sockets', 'Kestrel Low Latency'],
    capabilities: [
      { title: 'High-Throughput Web APIs', desc: 'Construct highly performant, type-safe API gateways that resolve requests in microseconds.' },
      { title: 'Object-Relational Mapping', desc: 'Synchronize relational database states without manual SQL injection risks using Entity Framework.' },
      { title: 'Native Cross-Platform Hosts', desc: 'Launch compiled frameworks inside lightweight Linux container boxes on any cloud service.' }
    ],
    faqs: [
      { q: 'What is the performance profile of .NET Core?', a: 'ASP.NET Core ranks among the fastest web frameworks in global industry tests, easily handling millions of concurrent actions.' },
      { q: 'Do you support Microsoft SQL Server integration?', a: 'Yes, we optimize indices, write custom store procedures, and coordinate robust connection pools.' }
    ],
    schemaCode: `[ApiController]\n[Route("api/[controller]")]\npublic class TelemetryController : ControllerBase {\n    [HttpGet] public ActionResult<Status> Check() => Ok();\n}`
  },
  'tech-ios': {
    id: 'tech-ios',
    name: 'iOS',
    category: 'MOBILE',
    tagline: 'Sovereign iOS Touch Architectures',
    description: 'Fluid native iOS experiences written in Swift, taking native control of device haptics, metal rendering, and Apple Core libraries.',
    longDesc: 'Our iOS engineers craft state-of-the-art mobile applications using Swift and SwiftUI. We optimize memory constraints, write clean background synchronization routines, and hook directly into iOS hardware arrays to drive elite user experiences.',
    logoSlug: 'apple',
    color: '#ffffff',
    rating: '60 FPS NATIVE',
    bannerFileName: 'hire-ios-app-developer-banner-image.webp',
    specs: ['SwiftUI Declarative Views', 'Combine Async Streams', 'Metal GPU Paint layers', 'CoreData Local Caching'],
    capabilities: [
      { title: 'Hardware Haptic Hooks', desc: 'Engage tactile haptics to guide customers and make physical interactions feel responsive.' },
      { title: 'Offline-First Registers', desc: 'Build local data caches that synchronize flawlessly with backends once networks resume.' },
      { title: 'Elite Graphics Painting', desc: 'Utilize Metal GPU code to render smooth vector lists, shapes, and layouts at 60 FPS.' }
    ],
    faqs: [
      { q: 'Which iOS layout patterns do you use?', a: 'We prefer SwiftUI for rapid reactive interfaces, combined with Swift Package Manager for strict control over modular libraries.' },
      { q: 'Do you assist with Apple App Store submissions?', a: 'Yes. We manage TestFlight feedback loops, review guidelines, and coordinate successful app deployments.' }
    ],
    schemaCode: `import SwiftUI\n\nstruct CanvasView: View {\n    var body: some View {\n        Text("SPACEON iOS Core").font(.headline)\n    }\n}`
  },
  'tech-android': {
    id: 'tech-android',
    name: 'Android',
    category: 'MOBILE',
    tagline: 'Robust Native Android Ecosystems',
    description: 'High-performance native Android solutions built on Kotlin, optimized for memory efficiency, background services, and modular components.',
    longDesc: 'We construct secure, native Android frameworks using Kotlin. Our designs leverage declarative Jetpack Compose layout engines, Coroutine async flows, and Room internal databases to deliver robust mobile applications for logistics, banking, and field operations.',
    logoSlug: 'android',
    color: '#3DDC84',
    rating: 'KOTLIN NATIVE',
    bannerFileName: 'hire-android-app-developer-banner-image.webp',
    specs: ['Jetpack Compose Layouts', 'Kotlin Coroutine Loops', 'Room DB Data Isolation', 'Dagger Hilt DI Injectors'],
    capabilities: [
      { title: 'Concurrent COROUTINES Flow', desc: 'Enforce non-blocking file downloads and service calculations beneath the UI rendering thread.' },
      { title: 'Encrypted SharedPreferences', desc: 'Store app tokens and user validation parameters securely within localized Android sandbox keys.' },
      { title: 'Broadcasting Event Listeners', desc: 'Establish native listeners monitoring network stability, device power, and telemetry beacons.' }
    ],
    faqs: [
      { q: 'How do you handle fragmented Android screens?', a: 'We build reactive, fluid Jetpack Compose layouts that adapt automatically to distinct screen boundaries, tablets, and folding screens.' },
      { q: 'Do you integrate Google Play Services packages?', a: 'Yes. We integrate location services, push alerts, billing networks, and device authentication APIs.' }
    ],
    schemaCode: `@Composable\nfun LogDashboard(logs: StateFlow<List<LogMessage>>) {\n    LazyColumn { items(logs.value) { Text(it.text) } }\n}`
  },
  'tech-react-native': {
    id: 'tech-react-native',
    name: 'React Native',
    category: 'MOBILE',
    tagline: 'High-Frequency Cross-Platform Bridges',
    description: 'Unified cross-platform native engineering matching React paradigms with direct native UI views and hardware haptics.',
    longDesc: 'We build premium, cross-platform mobile apps using React Native and Expo. By using the Hermes execution engine combined with type-safe TypeScript layouts, we share up to 90% of the codebase across iOS and Android without losing haptic fidelity.',
    logoSlug: 'react',
    color: '#61DAFB',
    rating: 'HYBRID SPEED',
    bannerFileName: 'hire-react-js-banner-img.webp',
    specs: ['Hermes Compact Engine', 'Expo Framework Sockets', 'Reanimated Smooth Motions', 'Shared Core Codebases'],
    capabilities: [
      { title: 'Direct Native View Bridges', desc: 'Compile React virtual widgets directly into high-speed native iOS and Android components.' },
      { title: 'Custom Reanimated Motion', desc: 'Implement seamless 60 FPS interactions and animations running on UI-dedicated threads.' },
      { title: 'Fast OTA Update Pipelines', desc: 'Deploy bug patches and cosmetic styles instantly over-the-air to users without App Store lag.' }
    ],
    faqs: [
      { q: 'How does performance compare to pure Kotlin/Swift?', a: 'Thanks to the Hermes bytecode compiler, compiled apps open fast and run animations at a fluid 60 FPS.' },
      { q: 'Can you write custom native modules?', a: 'Yes, if specialized hardware integration is needed, we write Swift and Kotlin bridges to pass telemetry directly.' }
    ],
    schemaCode: `import Reanimated, { useSharedValue } from 'react-native-reanimated';\n\nexport function RippleEffect() {\n  const width = useSharedValue(100);\n  return <Reanimated.View style={{ width }} />;\n}`
  },
  'tech-flutter': {
    id: 'tech-flutter',
    name: 'Flutter',
    category: 'MOBILE',
    tagline: 'GPU-Accelerated Native Canvas',
    description: 'High-density cross-platform apps compiling directly to native ARM code with Skia/Impeller hardware canvas engines.',
    longDesc: 'Flutter allows us to develop pixel-perfect application layouts. Using the structural Dart language compiled into native ARM code, we draw design elements directly on a GPU-driven canvas with zero bridging overhead.',
    logoSlug: 'flutter',
    color: '#02569B',
    rating: 'IMPELLER GPU',
    bannerFileName: 'hire-flutter-app-developer-banner-image.webp',
    specs: ['Dart Compiled ARM logic', 'Impeller Graphic Canvases', 'BLoc Framework States', 'Native Hardware Connect'],
    capabilities: [
      { title: 'Pixel-Perfect User Interfaces', desc: 'Guarantee your visuals look identical across the oldest Android tablets and the newest iPhones.' },
      { title: 'Colossal Canvas Painting', desc: 'Render custom graphics, maps, charts, and diagrams with zero frame drops.' },
      { title: 'High-Speed State Modules', desc: 'Establish scalable and predictable event structures using BLoc patterns.' }
    ],
    faqs: [
      { q: 'What is Dart exactly?', a: 'Dart is a highly structured, strongly typed programming language that compiles to ARM and Intel native executables for optimal startup times.' },
      { q: 'How do you handle native platform access?', a: 'We leverage Flutter MethodChannels to send secure, synchronous messages to native iOS and Android hardware components.' }
    ],
    schemaCode: `import 'package:flutter/material.dart';\n\nvoid main() => runApp(MaterialApp(\n  home: Scaffold(body: Center(child: Text('SpaceOn'))),\n));`
  },
  'tech-xamarin': {
    id: 'tech-xamarin',
    name: 'Xamarin',
    category: 'MOBILE',
    tagline: 'C# Unified Native Systems',
    description: 'Native cross-platform mobile architectures compiled with .NET runtime binding and direct access to native APIs in C#.',
    longDesc: 'We construct high-durability corporate mobile systems using C# and .NET frameworks compiled to run natively on mobile devices. Xamarin enables enterprise groups to write secure database integration code that deploys across iOS and Android.',
    logoSlug: 'xamarin',
    color: '#3498DB',
    rating: 'C# UNIFIED',
    bannerFileName: 'hire-xamarin-app-developers-banner-img.webp',
    specs: ['C# Shared Class Libraries', '.NET Runtime Containers', 'Native View API Bindings', 'Azure Enterprise Sync'],
    capabilities: [
      { title: 'Full .NET Class Libraries', desc: 'Repurpose existing enterprise logic, libraries, and encryption frameworks on smartphones.' },
      { title: 'Direct Native Access APIs', desc: 'Execute device-exclusive software packages directly inside clean C# classes.' },
      { title: 'Enterprise Database Cache', desc: 'Coordinate transactional sync loops with cloud-based enterprise platforms.' }
    ],
    faqs: [
      { q: 'Is Xamarin still used for enterprise?', a: 'We actively maintain, refactor, and migrate Xamarin portfolios to recent brand-new .NET Multi-platform App UI (.NET MAUI) architectures.' },
      { q: 'How do you structure Xamarin layouts?', a: 'We construct compiled models with MVVM frameworks to segregate screen events from local database caches.' }
    ],
    schemaCode: `using Xamarin.Forms;\n\nnamespace SpaceOnApp {\n    public class Canvas : ContentPage {\n        public Canvas() { Content = new Label { Text = "SpaceOn C#" }; }\n    }\n}`
  },
  'tech-laravel': {
    id: 'tech-laravel',
    name: 'Laravel',
    category: 'FRAMEWORKS',
    tagline: 'Bespoke Architectural API Portals',
    description: 'Sovereign PHP web application frameworks providing elegant MVC, eloquent ORM, scheduled queues, and secure user routing.',
    longDesc: 'Laravel is our weapon of choice for outstanding web applications and backends. We leverage its elegant syntax to coordinate highly secure and performant API web services, payment processing pipelines, queue tasks, and real-time sockets.',
    logoSlug: 'laravel',
    color: '#FF2D20',
    rating: 'MVC REFINED',
    bannerFileName: 'hire-php-developers-banner.webp',
    specs: ['Eloquent ORM Engines', 'Redis Queued job pools', 'Artisan CLI Sockets', 'Sanctum API Firewalls'],
    capabilities: [
      { title: 'Eloquent SQL Modeling', desc: 'Write semantic, high-speed relational SQL database queries protected against injection inputs.' },
      { title: 'Asynchronous Background Jobs', desc: 'Push long email requests, report generation, and payment processing into Redis queue loops.' },
      { title: 'Security Token Guarding', desc: 'Defend public API routes using Laravel Sanctum lightweight token inspection gates.' }
    ],
    faqs: [
      { q: 'How do you scale Laravel architectures?', a: 'We separate server tasks. HTTP requests run on autoscaling web servers, while database queries rely on replica pools and caching.' },
      { q: 'Do you build headless backends with Laravel?', a: 'Yes! We commonly split Laravel into a pure JSON REST API backend paired with a React or Next.js SPA frontend.' }
    ],
    schemaCode: `Route::middleware('auth:sanctum')->group(function () {\n    Route::get('/api/v1/profile', [ProfileController::class, 'show']);\n});`
  },
  'tech-mean-stack': {
    id: 'tech-mean-stack',
    name: 'MEAN Stack',
    category: 'FRAMEWORKS',
    tagline: 'Consolidated JS Database Arrays',
    description: 'Full JavaScript architectural blueprints consolidating MongoDB, Express, Angular, and Node.js for scalable enterprise systems.',
    longDesc: 'Using the unified MEAN Stack architecture, we assemble high-efficiency platforms that manage user events, data structures, and views under a single coherent TypeScript namespace.',
    logoSlug: 'mongodb',
    color: '#47A248',
    rating: 'FULL JS SECURE',
    bannerFileName: 'hire-angularjs-developers-banner-img.webp',
    specs: ['MongoDB Flexible Documents', 'Express REST Routers', 'Angular Hierarchical UI', 'Node High Output'],
    capabilities: [
      { title: 'NoSQL Document Storage', desc: 'Optimize database schemas dynamically to accommodate rapid telemetry format changes.' },
      { title: 'Asynchronous Express Routing', desc: 'Direct internal endpoints to microservice handlers with low resource footprint.' },
      { title: 'Strict Type Compilation', desc: 'Maintain perfect schema coherence from database models down to Angular interface signals.' }
    ],
    faqs: [
      { q: 'What is the primary benefit of the MEAN stack?', a: 'By structuring MongoDB, Angular, and Node entirely in TypeScript, we accelerate delivery cycles and reduce bugs.' },
      { q: 'How do you secure node endpoints?', a: 'We inject CORS configurations, rate-limiters, helmet headers, and secure authentication tokens.' }
    ],
    schemaCode: `const router = express.Router();\nrouter.get('/metrics', async (req, res) => {\n  const data = await MongoModel.find({});\n  res.json(data);\n});`
  },
  'tech-mern-stack': {
    id: 'tech-mern-stack',
    name: 'MERN Stack',
    category: 'FRAMEWORKS',
    tagline: 'High-Frequency Multi-Tenant Engines',
    description: 'High-frequency JavaScript architectures pairing React with MongoDB, Express, and Node.js for smooth event-driven portals.',
    longDesc: 'We specialize in engineering robust client portals using the MERN Stack. By pairing React\'s dynamic rehydration capabilities with Node.js fast data pipelines, we design outstanding collaborative panels and transactional tools.',
    logoSlug: 'react',
    color: '#61DAFB',
    rating: 'DYNAMIC CHANNELS',
    bannerFileName: 'hire-react-js-banner-img.webp',
    specs: ['React Interactive Views', 'Node REST Engines', 'Mongoose DB Schema Guard', 'WebSockets live syncing'],
    capabilities: [
      { title: 'Real-time Socket Bridges', desc: 'Incorporate live synchronization channels to update user dashboards instantly.' },
      { title: 'Flexible Mongoose Schemas', desc: 'Enforce rigid document validation constraints while keeping NoSQL flexibility.' },
      { title: 'Stateless Token Sessions', desc: 'Handle massive visitor numbers smoothly over scaled servers without server dependency.' }
    ],
    faqs: [
      { q: 'Why choose MERN over other solutions?', a: 'MERN is perfect for collaborative dashboards, live analytics, and fast-growing software applications requiring rich React layouts.' },
      { q: 'How do you handle search performance on Mongo?', a: 'We apply structured compound indexes, text-search configurations, and caching strategies.' }
    ],
    schemaCode: `mongoose.connect(process.env.MONGO_URI!)\n  .then(() => logger.info("MERN cluster mapped successfully"));`
  },
  'tech-django': {
    id: 'tech-django',
    name: 'Django',
    category: 'FRAMEWORKS',
    tagline: 'Batteries-Included Security Pillars',
    description: 'Robust Python-built web frameworks built with maximum security focus, robust default administration portals, and clear object mapping.',
    longDesc: 'We construct highly secure backends using Python Django. Django contains pre-configured security defenses out of the box, shielding applications from cross-site scripting, request forgery, and SQL injection vectors.',
    logoSlug: 'django',
    color: '#092E20',
    rating: 'SECURE SHELL',
    bannerFileName: 'hire-python-developers-banner-image.webp',
    specs: ['Django Built-in ORMs', 'Pre-configured Admins', 'Authentication Systems', 'DRF REST API Packages'],
    capabilities: [
      { title: 'Pre-configured Administration', desc: 'Deploy powerful admin database management interfaces for staff right on launch day.' },
      { title: 'Strict Guard Protections', desc: 'Enforce built-in token checking to insulate servers against injection or session attempts.' },
      { title: 'Django REST Extender', desc: 'Build flexible APIs with robust input serializers and dynamic access controllers.' }
    ],
    faqs: [
      { q: 'Is Django fast enough for high traffic?', a: 'Yes. With database connection caching, optimized query loading, and microservice task systems, Django easily handles millions of views.' },
      { q: 'How do you construct APIs in Django?', a: 'We employ Django REST Framework (DRF) to map models into secure, JSON-serializing REST endpoints.' }
    ],
    schemaCode: `class UserSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = User\n        fields = ['id', 'username', 'email']`
  },
  'tech-symfony': {
    id: 'tech-symfony',
    name: 'Symfony',
    category: 'FRAMEWORKS',
    tagline: 'Highly Decoupled Software Matrices',
    description: 'Extremely modular PHP component frameworks for complex enterprise application structures requiring strict configuration controls.',
    longDesc: 'Symfony allows us to build scalable, decoupling PHP application architectures. By matching independent, highly reusable software blocks, we design long-lived platforms that adapt smoothly to scaling company goals.',
    logoSlug: 'symfony',
    color: '#000000',
    rating: 'STRICT MODULAR',
    bannerFileName: 'hire-php-developers-banner.webp',
    specs: ['Service Injection Trees', 'Twig Hydration Pipes', 'Event Dispatcher Nodes', 'Deterministic Tests'],
    capabilities: [
      { title: 'Reusable Component Bundles', desc: 'Configure standalone software bricks that can be shared across separate corporate programs.' },
      { title: 'Strict Event Despatch Loops', desc: 'Orchestrate highly decoupled plug-ins that react to central core state events cleanly.' },
      { title: 'Twig Advanced Composers', desc: 'Securely compile highly complex and fast-loading web layouts.' }
    ],
    faqs: [
      { q: 'What is the difference between Symfony and Laravel?', a: 'Symfony is highly decoupled and composed of independent modules, making it perfect for custom corporate architectures.' },
      { q: 'Do you compile REST APIs in Symfony?', a: 'Yes, we commonly leverage API Platform to design advanced, standards-compliant JSON-LD frameworks.' }
    ],
    schemaCode: `class IngressController extends AbstractController {\n    public function check(EventDispatcherInterface $dispatcher): Response {}\n}`
  },
  'tech-splunk': {
    id: 'tech-splunk',
    name: 'Splunk',
    category: 'PLATFORMS',
    tagline: 'Deep Telemetry Index Engines',
    description: 'Deep telemetry and log analytics platforms indexing security logs, metric indicators, and network system operations at major enterprise scales.',
    longDesc: 'We configure Splunk cloud deployments to aggregate, analyze, and visualize high-volume system indicators. From parsing thousands of logs per second to designing automated threat dashboards, we build elite observation centers.',
    logoSlug: 'splunk',
    color: '#F71E86',
    rating: 'OBSERVABILITY',
    bannerFileName: 'splunk-banner.webp',
    specs: ['SPL Index Orchestrating', 'SIEM Security Monitors', 'Real-time Alarm Hooks', 'Distributed Forwarders'],
    capabilities: [
      { title: 'Distributed Log Parsing', desc: 'Securely ingest unstructured files from containers, databases, and network gateways.' },
      { title: 'High-Speed Query Design', desc: 'Compose highly efficient Search Processing Language (SPL) filters to track microsecond metrics.' },
      { title: 'Automated Threat Guarding', desc: 'Hook log anomalies up to alert systems and trigger automated containment actions.' }
    ],
    faqs: [
      { q: 'How do you optimize Splunk search times?', a: 'We organize indexes cleanly, use summary indexing for historical calculations, and avoid wasteful open-ended wildcard lookups.' },
      { q: 'Can you integrate Splunk with Kubernetes?', a: 'Yes. We deploy Splunk Forwarder daemonsets inside clusters to monitor containers.' }
    ],
    schemaCode: `index="k8s_prod" sourcetype="express_api"\n| stats count by status_code\n| where status_code >= 500`
  },
  'tech-salesforce': {
    id: 'tech-salesforce',
    name: 'Salesforce',
    category: 'PLATFORMS',
    tagline: 'Sovereign CRM Business Matrices',
    description: 'Sovereign customer relationship platforms paired with custom Apex logic engines, visual workflow triggers, and secure REST integrations.',
    longDesc: 'We write secure, custom Apex extensions to supercharge Salesforce platforms. By building customized flows, Lightning Web Components (LWC), and secure API pipelines, we seamlessly synchronize your mobile and customer panels.',
    logoSlug: 'salesforce',
    color: '#00A1E0',
    rating: 'CRM EMPOWERED',
    bannerFileName: 'salesforce-implementation-services-banner.webp',
    specs: ['Apex Logic Customizing', 'LWC Frontend Assemblies', 'SOQL Dynamic Fetching', 'Secure MuleSoft Bridges'],
    capabilities: [
      { title: 'High-Performance APEX Logic', desc: 'Write database triggers and controllers optimized to stay well within platform execution limits.' },
      { title: 'Lightning Web Components', desc: 'Develop beautiful, responsive, and secure custom interfaces for corporate users.' },
      { title: 'Sovereign REST Pipelines', desc: 'Connect Salesforce securely to internal application databases using JWT handshakes.' }
    ],
    faqs: [
      { q: 'How do you handle Salesforce governor limits?', a: 'We build asynchronous Apex queueables, write bulkified database triggers, and strictly avoid running queries within recursive loops.' },
      { q: 'Do you build custom portals for external users?', a: 'Yes, we configure robust Experience Cloud sites integrated with custom frontend frameworks.' }
    ],
    schemaCode: `public with sharing class IngressTriggerHandler {\n    public static void process(List<Account> records) { ... }\n}`
  },
  'tech-apache-kafka': {
    id: 'tech-apache-kafka',
    name: 'Apache Kafka',
    category: 'PLATFORMS',
    tagline: 'Distributed Mass Event Streams',
    description: 'Distributed event streaming nodes with massive throughput, reliable log replication, and low-latency publish/subscribe topics.',
    longDesc: 'For architectures demanding massive scale and zero data loss, we configure distributed Apache Kafka clusters. We design robust message queues, stream-processing topologies, and partition strategies to maintain real-time telemetry pipelines.',
    logoSlug: 'apachekafka',
    color: '#ffffff',
    rating: 'STREAM ENGINE',
    bannerFileName: 'splunk-banner.webp',
    specs: ['Topic Partition Shards', 'Low-Loss Replica Pools', 'Schema Registry Controls', 'Low latency Stream Pipes'],
    capabilities: [
      { title: 'High-Availability Partitioning', desc: 'Distribute event processing cleanly across cluster shards to handle massive throughput spikes.' },
      { title: 'Resilient Log Replication', desc: 'Keep transactional logs replicated over independent cloud zones to protect against single-point down times.' },
      { title: 'Strict Schema Governance', desc: 'Establish Schema Registries to validate payload structures and prevent microservice decoding errors.' }
    ],
    faqs: [
      { q: 'How do you handle consumer lag in Kafka?', a: 'We monitor partition assignments, increase consumer group worker numbers, and optimize backpressure processing parameters.' },
      { q: 'What is the role of Zookeeper or KRaft?', a: 'We set up KRaft mode to coordinate cluster states without Zookeeper, reducing management overhead.' }
    ],
    schemaCode: `const consumer = kafka.consumer({ groupId: 'telemetry-group' });\nawait consumer.connect();\nawait consumer.subscribe({ topic: 'sensor-events' });`
  },
  'tech-elasticsearch': {
    id: 'tech-elasticsearch',
    name: 'Elasticsearch',
    category: 'PLATFORMS',
    tagline: 'High-Volume Analytical Search Arrays',
    description: 'Sovereign search and analytical engines optimized for full-text search, high-volume real-time logs, and geospatial indexes.',
    longDesc: 'We architect high-efficiency Elasticsearch clusters to hold, analyze, and search vast database entries in milliseconds. From full-text semantic searching on client catalogs to geo-spatial calculations, we configure robust nodes.',
    logoSlug: 'elasticsearch',
    color: '#005571',
    rating: 'ACID INDEXED',
    bannerFileName: 'splunk-banner.webp',
    specs: ['Inverted Index Engines', 'Lucene Elastic queries', 'Dynamic Shard routing', 'Kibana Analytical Boards'],
    capabilities: [
      { title: 'Inverted Search Indices', desc: 'Optimize string scanning to locate key documentation records across millions of objects instantly.' },
      { title: 'Dynamic Shard Balancing', desc: 'Distribute data shards automatically to keep search response rates constant during heavy loads.' },
      { title: 'Geospatial Spatial Querying', desc: 'Filter matching listings instantly based on real-time device coordinate vectors.' }
    ],
    faqs: [
      { q: 'How do you prevent Elasticsearch memory crashes?', a: 'We precisely tune JVM heap boundaries, configure robust garbage collection pools, and set strict circuit breaker trip levels.' },
      { q: 'Do you support search term auto-completion?', a: 'Yes, we optimize n-gram text tokenizers to deliver instantaneous autocomplete suggestions as the user types.' }
    ],
    schemaCode: `GET /catalog/_search\n{\n  "query": { "match": { "category": "engineering" } }\n}`
  },
  'tech-datadog': {
    id: 'tech-datadog',
    name: 'DataDog',
    category: 'PLATFORMS',
    tagline: 'Sovereign Observability Portals',
    description: 'Modern SaaS infrastructure visualizers consolidating microservice APMs, trace vectors, resource alerts, and log parsing streams.',
    longDesc: 'We install DataDog APM, database monitoring agents, and container daemons to collect live traces throughout full-stack applications, identifying and resolving engineering bottleneck patterns beforehand.',
    logoSlug: 'datadog',
    color: '#632CA6',
    rating: 'APM TELEMETRY',
    bannerFileName: 'splunk-banner.webp',
    specs: ['APM Trace Auto-graphs', 'Metric Ingestion Nodes', 'Synthetic Health Sweeps', 'Dynamic Alert Thresholds'],
    capabilities: [
      { title: 'Trace Trace Visualizing', desc: 'Inspect request travel times as they cross routers, API controllers, and database pools.' },
      { title: 'Dynamic Alert Thresholds', desc: 'Configure anomalies metrics checking to send notices only when deviation levels are extreme.' },
      { title: 'Automated Security Audits', desc: 'Track system call anomalies in real time to intercept host authorization breaches.' }
    ],
    faqs: [
      { q: 'How do you manage DataDog ingestion costs?', a: 'We configure smart sampling rates on tracing APIs, and aggregate log details before upload.' },
      { q: 'Can you set up alerts directly on Slack or MS Teams?', a: 'Yes, we configure webhooks to post rich, action-actionable error diagnostics directly to development workspaces.' }
    ],
    schemaCode: `import ddTrace from 'dd-trace';\nddTrace.init({ service: 'express-broker', env: 'production' });`
  }
};

// Helper functions to drive dynamic React-like screens for any technology
const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "0, 223, 137";
};

const getCaseStudies = (techId: string, techName: string, category: string) => {
  if (category === 'FRONTEND' || techId === 'tech-react-native' || techId === 'tech-flutter') {
    return [
      {
        badge: "Manufacturing , AI / ML",
        title: `Reduced production cost & waste with 100% traceability using ${techName}`,
        desc: `A startup based in Portugal partnered with SpaceOn to build an advanced waste reduction solution with ${techName} that detects defects in real-time.`,
        technologies: `${techName} , Node JS , AI`,
        industry: "Textile Manufacturing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Fintech , High Concurrency",
        title: `Real-time stock ledger broker with 60FPS tick updates via ${techName}`,
        desc: `An enterprise finance firm built their central ticker portal displaying 500+ active tickers simultaneously without hydration blocks or state delays using ${techName}.`,
        technologies: `${techName}, WebSockets, Tailwind CSS`,
        industry: "Investment Banking",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Healthcare , PWA",
        title: "Sovereign medical inventory application holding 500k assets",
        desc: `A medical network based in California modernized their field inventory sync client into an offline-tolerant application using ${techName}, reducing check-in times by 40%.`,
        technologies: `${techName}, Workbox Offline, Tailwind CSS`,
        industry: "Clinical Operations",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700"
      }
    ];
  } else if (category === 'MOBILE') {
    return [
      {
        badge: "Logistics , Geospatial Tracking",
        title: `Pixel-perfect mobile routing mapping 500+ delivery routes using ${techName}`,
        desc: `A European shipping giant built their native client using ${techName} to manage offline map coordinates, custom Geofencing layers, and instant trip logs.`,
        technologies: `${techName}, SQLite, MapKit API`,
        industry: "Logistics & Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Fitness & Wellness",
        title: `Dynamic bio-haptic sensor synchronizer tracking telemetry in ${techName}`,
        desc: `A leading health tech wearable brand built their secondary touch portal on ${techName} with 60FPS fluid sensor lines connected over Bluetooth Low Energy.`,
        technologies: `${techName}, CoreBluetooth, Canvas Graphics`,
        industry: "Digital Therapy",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Sovereign Fintech PWA",
        title: "Asset security ledger vault with biometric transaction sign-off",
        desc: `An offshore mutual fund group deployed their decentralized ledger portal utilizing secure Local Sandboxes and biometric TouchID callbacks in ${techName}.`,
        technologies: `${techName}, Biometrics API, Keychain Storage`,
        industry: "Securitized Finance",
        image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&q=80&w=700"
      }
    ];
  } else if (category === 'BACKEND' || category === 'FRAMEWORKS') {
    return [
      {
        badge: "Adtech , High Concurrency",
        title: `Distributed fast transaction broker parsing 120k records/sec using ${techName}`,
        desc: `An enterprise analytics firm substituted their bottleneck ledger with a high-throughput microservice in ${techName}, reducing overhead by 70%.`,
        technologies: `${techName}, Redis Cluster, Docker`,
        industry: "Adtech Metric Logging",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Cybersecurity , Audits",
        title: `Sovereign event logs validator with auto-healing containment`,
        desc: `An international bank leverages ${techName} to parse transactional logs and execute AI-based pattern matching to isolate authentication threats inside 200 milliseconds.`,
        technologies: `${techName}, PostgreSQL, Vector Database`,
        industry: "Securities & Compliance",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Healthcare , HIPAA Vault",
        title: `Decoupled medical records sync engine holds 1.2m clinical assets`,
        desc: `A clinical workspace based in Chicago modernized their database ingest layers using ${techName} with strict end-to-end payload sanitization and encrypted locks.`,
        technologies: `${techName}, SQL Alchemy, AES-256 Rules`,
        industry: "Clinical Operations",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700"
      }
    ];
  } else {
    // platforms
    return [
      {
        badge: "Monitoring & Observability",
        title: `Real-time cloud resource analyzer tracing 5m microservice telemetry nodes`,
        desc: `An e-retail system optimized their node clusters by integrating ${techName} index topologies and dynamic alerting vectors to capture API performance drops.`,
        technologies: `${techName}, AWS Cloud, Kubernetes`,
        industry: "E-Commerce Cloud Hosting",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Security & SIEM Auditing",
        title: `Sovereign network threat logging platform filtering 15k events/sec`,
        desc: `A global security agency configured ${techName} forwarders to index unstructured raw server packages and trigger automated defensive firewall adjustments.`,
        technologies: `${techName}, DevSecOps, VPN Bridges`,
        industry: "Defense & Cryptography",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=700"
      },
      {
        badge: "Database Indexes , Elastic Spark",
        title: "Catalogs autocomplete query parser processing search in 14ms",
        desc: `A multi-vendor logistics catalog integrated ${techName} compound indexes and Lucene queries to output instantaneous results for over 500k registered clients.`,
        technologies: `${techName}, REST API, Python Core`,
        industry: "Global Freight Dispatch",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=700"
      }
    ];
  }
};

const getPricingDetails = (techId: string, name: string) => {
  if (techId === 'tech-splunk' || techId === 'tech-apache-kafka' || techId === 'tech-elasticsearch' || techId === 'tech-datadog') {
    return {
      rate: "Just $18/hour",
      total: "$2,880",
      details: ["160 Hours a month", "8 Hours/day", "5 Days/week", `Senior ${name} Architects`]
    };
  } else {
    return {
      rate: "Just $15/hour",
      total: "$2,400",
      details: ["160 Hours a month", "8 Hours/day", "5 Days/week", `Exp. ${name} Developers`]
    };
  }
};

const getServicesList = (techName: string, category: string) => {
  return [
    {
      title: `${techName} Frontend Development`,
      desc: `Create highly responsive, client-side views and seamless UI components using ${techName}. We optimize hydration loops, layout paints and event states.`
    },
    {
      title: `Custom ${techName} Web App Engineering`,
      desc: `We specialize in creating dynamic, responsive, and user-friendly web/mobile systems using ${techName}. As a premium collective, we prioritize speed.`
    },
    {
      title: `Sovereign ${techName} Consulting Services`,
      desc: `Get in-depth consulting from professional ${techName} developers at SpaceOn. From structural system blueprinting design to active performance tuning.`
    },
    {
      title: `Scalable ${techName} Enterprise Integration`,
      desc: `Deploy thread-safe, decoupled state systems and REST or GraphQL endpoints using ${techName} interfaces. We manage robust database bridges safely.`
    },
    {
      title: `Reliable ${techName} Support & Maintenance`,
      desc: `Our ${techName} support and optimization packages ensure that your core servers and mobile channels remain updated and secure with proactive sweeps.`
    },
    {
      title: `Seamless ${techName} Migration & Upgrades`,
      desc: `We facilitate fast, seamless migrations to modern ${techName} setups, ensuring your legacy data or user credentials transfer safely with zero downtime.`
    }
  ];
};

const getStandingOutColumns = (techName: string) => {
  return [
    {
      title: "Coding standards",
      items: [
        `We use standard static analysis linter rules configured for clean ${techName} code formatting.`,
        "Our focus on reusable components and structures enhances consistency and reduces redundancy.",
        "Thorough documentation ensures easy comprehension for all engineers.",
        "Strict Git version control practices manage code changes and feature branch pull requests.",
        "Regular architectural code reviews and pair programming enhance continuous collaboration."
      ]
    },
    {
      title: "Quality control guidelines",
      items: [
        `Automated testing structures verified for ${techName} environments prevent layout refactor bugs.`,
        "Load tests, performance logs, and profiling tools assess responsiveness under scale.",
        "Modern profiling metrics analyze thread loops and memory layout properties.",
        "Rigid CI/CD triggers run lint and build tasks on active push operations.",
        "Automated sandbox checks test user interface layout responsiveness and asset loading."
      ]
    },
    {
      title: "Training for Developers",
      items: [
        `Regular technical training keeps our team aligned on the latest ${techName} feature releases.`,
        "Full access to advanced documentation repos enables secure design patterns.",
        "Mentorship programs facilitate instant knowledge transfer across our developer core.",
        "We support our developers attending international tech conventions for dynamic industry trends.",
        "Weekly group engineering demos foster collaborative knowledge mapping and peer reviews."
      ]
    }
  ];
};

export default function TechnologyDetailPage({ 
  technologyId, 
  onBack, 
  onBookConsultation,
  onNavigateToTech 
}: TechnologyDetailPageProps) {
  if (technologyId === 'tech-react') {
    return <ReactJSPage onBack={onBack} onBookConsultation={onBookConsultation} />;
  }

  // Retrieve target data or fallback to React as default if ID doesn't match
  const tech = technologiesData[technologyId] || technologiesData['tech-react'];

  // Construct primary banner path
  const primaryBannerUrl = `https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/${tech.bannerFileName}`;
  const [imgSrc, setImgSrc] = useState(primaryBannerUrl);

  // Sync state if technologyId changes
  useEffect(() => {
    setImgSrc(`https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/${tech.bannerFileName}`);
  }, [technologyId, tech.bannerFileName]);

  const handleImageError = () => {
    // Gracefully fallback to the core hire-ai-developers-banner if specific file doesn't exist on server
    setImgSrc("https://patelarsh.com/SpaceOn%20Logo/Resourses%20Website/hire-ai-developers-banner.webp");
  };

  // Find related technologies in the same category to provide standard switching tabs
  const relatedTechs = Object.values(technologiesData).filter(
    t => t.category === tech.category && t.id !== tech.id
  );

  // States
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [clutchError, setClutchError] = useState(false);
  const [goodfirmsError, setGoodfirmsError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: `${tech.name} Development`,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync pricing
  const pricing = getPricingDetails(tech.id, tech.name);

  // Sync Case studies
  const caseStudies = getCaseStudies(tech.id, tech.name, tech.category);

  // Sync standard questions to reach 7 high-density FAQ elements
  const baseFaqs = [
    { q: `How much does it cost to develop a ${tech.name} solution?`, a: `The development cost varies based on structural complexity, scope of capabilities, and specifications. We provide a transparent breakdown and detailed estimate after evaluating your goals.` },
    { q: "Will my custom data, logs, and codes remain confidential?", a: "Definitely. We sign legally binding mutual NDA agreements at the start. Your code transfers cleanly, and the private sandbox data is highly secured." },
    { q: "Who retains source ownership of the completed application?", a: "Upon completion of milestone deliveries and settlement of client dues, we assign full 100% intellectual property (IP) and source-code ownership to you." },
    { q: "Can we start from existing Figma layouts or prior incomplete backends?", a: "Yes, our senior engineers routinely step into underway development structures, execute thorough audits of active states, and complete the missing files cleanly." }
  ];
  const faqItems = [...tech.faqs, ...baseFaqs].slice(0, 7);

  // Form Submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: `${tech.name} Development`,
        message: ''
      });
    }, 4000);
  };

  const services = getServicesList(tech.name, tech.category);
  const standingColumns = getStandingOutColumns(tech.name);

  const rgbColor = hexToRgb(tech.color);

  return (
    <div className="w-full relative bg-[#000000] text-[#f3f4f6]" id="tech-detail-root">
      
      {/* SECTION 1: DYNAMIC HERO HEADER */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden text-left bg-[#000000]">
        {/* Dynamic Glowing Accent Background Orb - using radial-gradient to prevent hard circles on mobile Safari/Chrome */}
        <div 
          className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[650px] sm:h-[500px] lg:w-[850px] lg:h-[650px] rounded-full blur-[35px] sm:blur-[90px] lg:blur-[140px] opacity-40 sm:opacity-25 lg:opacity-15 select-none pointer-events-none -translate-y-12 transition-all duration-700"
          style={{ 
            background: `radial-gradient(circle, rgba(${rgbColor}, 0.35) 0%, rgba(${rgbColor}, 0.12) 35%, transparent 70%)` 
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10 w-full">
          {/* Back handle & Category tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono tracking-wider text-white/60 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO SOVEREIGN SUITE</span>
            </button>

            <span className="text-[10px] font-mono tracking-[0.2em] text-[#00df89] uppercase px-3.5 py-1.5 bg-[#00df89]/10 border border-[#00df89]/20 rounded-full select-none">
              PRE-VETTED TALENT &middot; ONLINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Title Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
              <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#00df89] font-extrabold uppercase mb-4 block">
                HIRE {tech.name.toUpperCase()} DEVELOPERS &amp; ENGINEERS
              </span>

              <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                Hire <span className="text-[#00df89]">vetted {tech.name} developers</span> to engineer your vision
              </h1>

              <p className="text-[14px] md:text-[16px] text-white/70 max-w-[550px] leading-relaxed mb-6">
                {tech.longDesc || tech.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 pb-8 w-full">
                {tech.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-emerald-500/10 border border-emerald-500/20 text-[#00df89] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-white/80 font-mono tracking-wide">{spec}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onBookConsultation(`Hire ${tech.name} Talent Pipeline Request`)}
                className="rounded-full bg-[#00df89] hover:bg-[#00f093] hover:scale-[1.02] active:scale-95 text-black font-extrabold px-10 py-4.5 text-[14px] tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(0,223,137,0.30)] hover:shadow-[0_0_50px_rgba(0,223,137,0.55)] cursor-pointer text-center"
              >
                Get {tech.name} talent now
              </button>
            </div>

            {/* Graphic dynamic canvas orbiting on the right - Showing user's custom high fidelity webp banners */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none !overflow-visible z-10 mt-12 lg:mt-0">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] relative flex items-center justify-center !overflow-visible">
                {/* Glow 1: Main Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
                <div 
                  className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] animate-pulse blur-[45px] md:blur-[80px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,223,137,0.3) 0%, rgba(0,223,137,0.1) 35%, transparent 70%)',
                  }}
                />

                {/* Glow 2: Secondary Ambient Glow with consistent green color, responsive sizes & blurring to avoid circles in mobile */}
                <div 
                  className="absolute rounded-full pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] blur-[60px] md:blur-[110px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,223,137,0.15) 0%, transparent 70%)',
                  }}
                />
                
                <img 
                  src={imgSrc} 
                  alt={`${tech.name} Core Graphic`} 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out hover:scale-105"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST ELEMENTS */}
      <section className="border-y border-white/10 bg-[#04060b] py-10 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#00df89] uppercase block mb-1">
                EXCELLENCE AS STANDARD
              </span>
              <h3 className="text-[17px] font-bold text-white leading-tight">
                Peer reviewed tech stacks &amp; certifications
              </h3>
            </div>

            {/* Clutch widget style */}
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-white/15 px-6 py-4.5 rounded-2xl transition-all">
              <div className="w-11 h-11 bg-white flex items-center justify-center rounded-xl p-0.5 border border-white/15 overflow-hidden shrink-0 select-none">
                {!clutchError ? (
                  <img 
                    src="https://s3-us-west-1.amazonaws.com/upload.comparably.com/949487/companies/949487/logo_1659447060103.jpg" 
                    alt="Clutch" 
                    className="w-full h-full object-cover rounded-full" 
                    referrerPolicy="no-referrer"
                    onError={() => setClutchError(true)}
                  />
                ) : (
                  <span className="text-xs font-black text-neutral-800 uppercase font-sans">C</span>
                )}
              </div>
              <div className="text-left font-sans">
                <span className="text-[18px] font-black text-white block leading-tight">4.9 / 5.0 Rating</span>
                <span className="text-[11px] text-gray-400 tracking-wide mt-0.5 inline-block">120+ Clutch Client Reviews</span>
              </div>
            </div>

            {/* GoodFirms widget style */}
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-white/15 px-6 py-4.5 rounded-2xl transition-all">
              <div className="w-11 h-11 bg-white flex items-center justify-center rounded-xl p-1 border border-white/15 overflow-hidden shrink-0 select-none">
                {!goodfirmsError ? (
                  <img 
                    src="https://images.g2crowd.com/uploads/product/image/18db0bd428eb8a49504c41e748e50b35/goodfirms.png" 
                    alt="GoodFirms" 
                    className="w-full h-full object-contain" 
                    referrerPolicy="no-referrer"
                    onError={() => setGoodfirmsError(true)}
                  />
                ) : (
                  <span className="text-xs font-black text-neutral-800 uppercase font-sans">GF</span>
                )}
              </div>
              <div className="text-left font-sans">
                <span className="text-[18px] font-black text-white block leading-tight">98% Success Ratio</span>
                <span className="text-[11px] text-gray-400 tracking-wide mt-0.5 inline-block">Verified GoodFirms Deliveries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES LISTGRID */}
      <section className="py-24 relative z-10 text-left" id="services-guidelines">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
              WHAT WE SHIP
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight">
              Our {tech.name} development services at affordable pricing
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed max-w-[620px]">
              We handle end-to-end development following strict modular architectures, clean state models, and scalable endpoint architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#090b11] border border-white/5 hover:border-white/15 p-8 rounded-[24px] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:text-[#00df89] group-hover:bg-[#00df89]/5 group-hover:border-[#00df89]/20 transition-all duration-300">
                    <Code className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-white mb-3 group-hover:text-[#00df89] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-2.5 text-xs font-bold font-mono text-[#00df89] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>INITIATE CODE REVIEW</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: CASE STUDY ACCENTED SLIDER */}
      <section className="bg-[#030509] py-24 border-t border-white/15 text-left relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="max-w-2xl mb-14 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
              PRODUCTION RECORDS
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight">
              Our {tech.name} Case Studies
            </h2>
          </div>

          {/* Core Case Study Frame */}
          <div className="bg-[#0c0f16] border border-white/10 rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Image Frame Left */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-square bg-black rounded-2xl border border-white/10 overflow-hidden leading-[0]">
                <img 
                  src={caseStudies[activeCaseIdx].image} 
                  alt={caseStudies[activeCaseIdx].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-[#00df89] uppercase">
                    {caseStudies[activeCaseIdx].industry}
                  </span>
                </div>
              </div>

              {/* Data Content Right */}
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="inline-block bg-[#00df89]/10 text-[#00df89] text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-md border border-[#00df89]/20">
                  {caseStudies[activeCaseIdx].badge}
                </span>

                <h3 className="text-[20px] sm:text-[26px] font-extrabold text-white leading-snug">
                  {caseStudies[activeCaseIdx].title}
                </h3>

                <p className="text-gray-400 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                  {caseStudies[activeCaseIdx].desc}
                </p>

                <div className="border-t border-white/10 pt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500">TECHNOLOGY CORE:</span>
                    <span className="text-white font-bold">{caseStudies[activeCaseIdx].technologies}</span>
                  </div>
                </div>

                {/* Left/Right controls and slide state indicator dots */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    {caseStudies.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveCaseIdx(dotIdx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeCaseIdx === dotIdx ? "bg-[#00df89] w-6" : "bg-white/20"}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setActiveCaseIdx(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)}
                      className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-[#00df89]/10 border border-white/15 hover:border-[#00df89]/30 flex items-center justify-center text-white hover:text-[#00df89] cursor-pointer transition-all duration-300"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveCaseIdx(prev => prev === caseStudies.length - 1 ? 0 : prev + 1)}
                      className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-[#00df89]/10 border border-white/15 hover:border-[#00df89]/30 flex items-center justify-center text-white hover:text-[#00df89] cursor-pointer transition-all duration-300"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-emerald-950/20 via-[#060810] to-neutral-950 text-left relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="bg-[#0b0c13] border border-white/10 rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl">
            
            {/* Left Column */}
            <div className="max-w-xl text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                LET'S CONVENE
              </span>
              <h2 className="text-[26px] sm:text-[34px] font-black text-white leading-tight">
                Connect with our senior certified {tech.name} engineers immediately
              </h2>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Take advantage of a free structural code audit session where we evaluate performance indicators and state stores with pre-vetted specialists.
              </p>
            </div>

            {/* Right Button */}
            <div className="shrink-0">
              <a 
                href="#contact-form-block"
                className="rounded-full bg-[#00df89] hover:bg-[#00c576] text-black font-black px-10 py-4.5 text-[14px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(0,223,137,0.3)] hover:shadow-[0_6px_36px_rgba(0,223,137,0.55)] cursor-pointer inline-block text-center"
              >
                Request Free Audit
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: STANDING OUT (CODING STANDARDS, QUALITY CONTROL) */}
      <section className="py-24 border-t border-white/10 text-left relative z-10 bg-[#060810]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
              STANDARDS WE COMPLY WITH
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight">
              Providing top Quality {tech.name} Engineering services
            </h2>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-[580px]">
              We strictly enforce high architectural compliance to manage safe, long-lived codebases for critical client systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {standingColumns.map((col, idx) => (
              <div 
                key={idx}
                className="bg-[#0b0c13] border border-white/5 rounded-3xl p-8 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6 text-left">
                    <span className="text-[10px] font-mono font-black tracking-widest text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded">
                      0{idx + 1}
                    </span>
                    <h3 className="text-[17px] font-bold text-white uppercase tracking-tight font-mono text-left">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-4 text-left">
                    {col.items.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex gap-3 text-left">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00df89] mt-2 shrink-0 animate-pulse" />
                        <span className="text-gray-400 text-[13px] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: COOPERATIVE ENGAGEMENT / MONTHLY PLANS */}
      <section className="py-24 border-t border-white/10 bg-[#04060b] relative z-10 text-left">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Title Block Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3 text-left">
                COOPERATIVE ENGAGEMENT
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight text-left">
                Cooperative engagement models &amp; monthly rates
              </h2>
              <p className="text-gray-400 text-[14.5px] leading-relaxed max-w-[540px] text-left">
                Hire world-class certified {tech.name} engineers on flat, fully predictable billing schemas. No long-term lock-ins. Immediate handovers.
              </p>
              
              <div className="pt-4 space-y-3 text-left">
                {['Direct Slack channel synchronization', 'Standard 8-hour daily progress log summaries', 'Clean source code transfers'].map((checkItem) => (
                  <div key={checkItem} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                    <span className="text-[13.5px] text-gray-300 font-medium">{checkItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Frame Right */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[450px] bg-[#0c0f16] border border-[#00df89]/20 rounded-3xl p-8 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 bg-[#00df89]/10 text-[#00df89] text-[9px] font-mono tracking-widest uppercase font-black px-4 py-2 rounded-bl-xl rounded-tr-2xl border-l border-b border-[#00df89]/20">
                  POPULAR ENGAGEMENT
                </div>

                <div className="border-b border-white/10 pb-6">
                  <span className="text-xs font-mono text-emerald-400 uppercase font-black tracking-widest block mb-2">
                    MONTHLY BILLING RATE
                  </span>
                  <h3 className="text-white text-[32px] sm:text-[38px] font-black leading-none inline-block">
                    {pricing.rate}
                  </h3>
                  <span className="text-xs text-gray-400 font-sans block mt-1">
                    Billed monthly (Starting from <span className="text-white font-bold">{pricing.total} / month</span>)
                  </span>
                </div>

                <ul className="py-6 space-y-4 text-left">
                  {pricing.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-400/10 rounded-full flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-sans text-gray-300 font-semibold">{detail}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact-form-block"
                  className="w-full rounded-2xl bg-[#00df89] hover:bg-[#00c576] font-black text-black text-center text-xs tracking-wider uppercase py-4.5 transition-all cursor-pointer block"
                >
                  Book Consultation Call
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: COOPERATIVE DEVELOPMENT PROCESS */}
      <section className="py-24 border-t border-white/15 bg-[#060810] text-left relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
            
            {/* Left sticky column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                PROJECT PIPELINE
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight">
                Our dynamic <br /><span className="text-[#00df89]">{tech.name} development</span> process
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-[340px]">
                We match high-tech standards with systematic phase gates to launch your workspace products flawlessly.
              </p>
            </div>

            {/* Right vertical timeline */}
            <div className="lg:col-span-8 relative">
              
              {/* Vertical timeline containing list of steps */}
              <div className="relative">
                {/* Vertical path - passes perfectly through the horizontal center of every circle */}
                <div className="absolute left-[15px] sm:left-[19px] top-4 sm:top-[22px] bottom-4 sm:bottom-[22px] w-[2px] bg-gradient-to-b from-[#00df89] via-emerald-800 to-transparent" />

                <div className="space-y-12">
                  {[
                    {
                      step: "Step 1",
                      title: `${tech.name} consultation & planning`,
                      desc: `Engage in discussion to outline system demands, document active tech models, and map the scope of core database modules.`
                    },
                    {
                      step: "Step 2",
                      title: "Project proposal & design",
                      desc: "Present full structural component specifications sheets with transparent billing and modular phase delivery roadmaps."
                    },
                    {
                      step: "Step 3",
                      title: "Development & integration",
                      desc: `Develop clean TypeScript modules with highly parameterized state stores, isolated microservice containers and clean ${tech.name} architectures.`
                    },
                    {
                      step: "Step 4",
                      title: "Quality assurance & review",
                      desc: "Conduct thorough automated component review and load profiling actions to guarantee flawless 60FPS interfaces."
                    },
                    {
                      step: "Step 5",
                      title: "Deployment & post-launch support",
                      desc: "Launch compiled binaries or servers safely in production container systems and provide continuous support packages."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-12 sm:pl-16 text-left group">
                      {/* Glowing timeline node icon */}
                      <div className="absolute left-0 top-0.5 sm:top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#04060b] border-2 border-[#00df89] shadow-[0_0_15px_rgba(0,223,137,0.4)] flex items-center justify-center text-[#00df89] z-10 transition-transform group-hover:scale-110">
                        <div className="w-2 h-2 rounded-full bg-[#00df89] animate-pulse" style={{ backgroundColor: tech.color }} />
                      </div>

                      <div className="pt-0.5 sm:pt-2">
                        <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#00df89] uppercase block mb-1">
                          {item.step}
                        </span>
                        <h3 className="text-[17px] sm:text-[19px] font-bold text-white mb-2 leading-snug group-hover:text-[#00df89] transition-colors" style={{ color: tech.color }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-[13.5px] leading-relaxed max-w-[620px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bot timeline buttons - Aligns perfectly with step text content */}
              <div className="mt-14 pl-12 sm:pl-16 text-left">
                <a 
                  href="#contact-form-block"
                  className="rounded-full bg-[#00df89] hover:bg-[#00c576] font-black px-9 py-4 text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,223,137,0.25)] hover:shadow-[0_6px_30px_rgba(0,223,137,0.5)] cursor-pointer text-black inline-flex items-center gap-2"
                >
                  <span>Schedule a call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: WHY CHOOSE SPACEON TECHNOLOGY (6 CARDS BENTO GRID) */}
      <section className="py-24 border-t border-white/10 bg-[#04060b] relative z-10 text-left">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
              YOUR PREFERRED SQUAD
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-tight">
              Why choose SpaceOn for top-tier {tech.name} development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vast domain expertise",
                desc: `Our engineers have designed and integrated dozens of scalable ${tech.name} workspaces resolving dynamic state limits.`
              },
              {
                title: "Complete source code ownership",
                desc: "We hand over full IP, 100% compiled sources and dynamic git logs cleanly upon milestone sign-offs."
              },
              {
                title: "Timely delivery and sync",
                desc: "We prioritize predictable sprint milestones and publish detailed updates transparently with client side channels."
              },
              {
                title: "Transparent 8-hour logs",
                desc: "We track progress systematically, delivering clear daily work reviews detailing active completed files."
              },
              {
                title: "Cost-effective solutions",
                desc: "We engineer flexible client billing models mapped perfectly to active workspace usage schemas."
              },
              {
                title: "Dedicated elite talent pool",
                desc: "Direct access to pre-vetted senior certified programmers with deep experience in enterprise systems."
              }
            ].map((reason, idx) => (
              <div 
                key={idx}
                className="bg-[#0b0c13] border border-white/5 hover:border-white/10 p-8 rounded-[24px] shadow-xl transition-all hover:-translate-y-1 relative"
              >
                <div className="flex items-center gap-3.5 mb-5 text-left">
                  <span className="text-[11px] font-mono font-black text-[#00df89] bg-[#00df89]/5 border border-[#00df89]/15 px-2.5 py-1 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-white tracking-wide text-left font-sans">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-[13px] leading-relaxed text-left">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: FAQ ACCORDION COLLAPSIBLES */}
      <section className="bg-[#060810] py-24 border-t border-white/10 text-center relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          
          {/* Centered Headers */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[11px] font-mono font-extrabold tracking-widest text-[#00df89] uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-black text-white leading-tight mb-4">
              Frequently Asked <span className="text-[#00df89]">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
              Have questions about development, compliance, or engagement schemas? Find answers here.
            </p>
          </div>

          {/* Accordion List - Centered Max Width */}
          <div className="space-y-4 max-w-[940px] mx-auto text-left">
            {faqItems.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b0c13] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-[14px] sm:text-base font-bold text-white select-none leading-snug">
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                      isOpen ? 'border-emerald-500/40 bg-emerald-500/10 text-[#00df89]' : 'border-white/10 text-white/40'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="border-t border-white/5 bg-[#08090f]"
                      >
                        <div className="px-6 py-5.5 text-gray-400 text-[13px] sm:text-[13.5px] leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 11: CONTACT US FOR PROJECT DISCUSSION */}
      <section className="bg-[#030509] py-24 border-t border-white/10 text-left" id="contact-form-block">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Stats Left */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00df89] uppercase block mb-3">
                LET'S CONVENE
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-black text-white leading-[1.1] mb-4">
                Contact Us <br /><span className="text-[#00df89]">for project discussion</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-[420px] mb-12 leading-relaxed">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>

              {/* Grid lists */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  { value: "14+", label: "Years of Experience" },
                  { value: "180+", label: "In-House Talent" },
                  { value: "750+", label: "Project Delivered" },
                  { value: "92%", label: "Client satisfaction rate" }
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-4 text-left">
                    <span className="text-[26px] sm:text-[32px] font-black text-white block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 tracking-wide font-medium mt-1 inline-block font-sans">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[550px] bg-[#0c0f16] border border-white/10 text-gray-100 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                <div className="mb-6 border-b border-white/10 pb-4 text-left">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white">
                    Got a project in mind?
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    We guarantee to get back to you within a business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    id="submit-success-block"
                  >
                    <div className="w-16 h-16 bg-[#00df89]/10 rounded-full flex items-center justify-center text-[#00df89] mx-auto mb-4 border border-[#00df89]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Thank you!</h4>
                    <p className="text-xs text-gray-400 mt-1 max-w-[320px] mx-auto text-center leading-relaxed">
                      Your query regarding {formData.service} has been successfully logged. Our sales representatives will reach out within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-400 uppercase block mb-1">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Your Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="e.g. +91 99999 99999"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full pl-9 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                        Services *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#11141e] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none appearance-none transition-all cursor-pointer"
                      >
                        <option value={`${tech.name} Development`}>{tech.name} Development</option>
                        <option value={`${tech.name} Integration Audit`}>{tech.name} Integration Audit</option>
                        <option value={`Sovereign ${tech.name} Engineering`}>Sovereign {tech.name} Engineering</option>
                        <option value="Advanced Micro-Consultation">Advanced Micro-Consultation</option>
                        <option value="Custom Support Package">Custom Support Package</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block mb-1">
                        How can we help? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Message *"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-[#00df89] text-[13px] text-white rounded-xl outline-none transition-all placeholder:text-gray-500 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button 
                      type="submit"
                      className="w-full rounded-2xl bg-[#00df89] hover:bg-[#00c576] font-black text-black py-4.5 text-[14px] transition-all cursor-pointer text-center block"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
