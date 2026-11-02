import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Ansh Goyal",
  handle: "@anshgoyal",
  title: "Full-Stack Engineer & Systems Architect",
  headline: "Crafting High-Performance Systems & Elegant Interactive Experiences",
  subheadline: "Specializing in distributed web architectures, reactive real-time interfaces, and cloud-native backends with high design fidelity and sub-second latency.",
  location: "New Delhi, India / Remote",
  status: "Available for ambitious opportunities",
  email: "anshgoyal.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "#resume",
  stats: [
    { label: "Production Scale", value: "10M+", subtext: "API Requests / Day" },
    { label: "Systems Uptime", value: "99.98%", subtext: "Global SLA Metric" },
    { label: "Core Web Vitals", value: "100", subtext: "Performance Score" },
    { label: "Open Source", value: "40+", subtext: "Repos & Contributions" },
  ],
  about: {
    paragraphs: [
      "I am a software engineer obsessed with the intersection of distributed systems architecture and delightful, pixel-perfect user interaction. I don't just build software that works—I engineer scalable digital products that feel instantaneous, look striking, and stand resilient under immense load.",
      "Over the past 5+ years, I have architected high-throughput microservices, designed multi-region databases, and crafted cutting-edge web applications using React, TypeScript, Node.js, Go, and Kubernetes.",
      "When I am not profiling render cycles or tuning Redis cache invalidations, you will find me contributing to open-source developer tooling, exploring modern generative AI runtimes, or tinkering with WebGL shaders."
    ],
    coreValues: [
      {
        title: "Latency Obsessed",
        desc: "Every millisecond counts. From database query execution plans to 60 FPS UI transitions, speed is a foundational feature.",
        icon: "Zap"
      },
      {
        title: "Fault-Tolerant Architecture",
        desc: "Designing resilient distributed systems with circuit breakers, idempotent APIs, and graceful degradation.",
        icon: "ShieldCheck"
      },
      {
        title: "Craft & Detail",
        desc: "Bridge the gap between deep systems engineering and Apple-grade UI fidelity, micro-interactions, and accessibility.",
        icon: "Sparkles"
      }
    ]
  },
  projects: [
    {
      id: "hyper-cache-engine",
      title: "PulseFlow: Real-Time Stream Engine",
      tagline: "Ultra-low latency event streaming & live analytics pipeline",
      category: "Distributed Systems",
      description: "An event-driven distributed streaming system capable of ingesting, deduplicating, and aggregating over 120,000 events/sec with sub-10ms delivery to subscribed client dashboards.",
      architectureDetails: [
        "Distributed Go-based ingestion workers with Raft consensus clustering",
        "Redis cluster pub/sub paired with RocksDB local key-value state caching",
        "Zero-copy serialization with Protocol Buffers and gRPC bidirectional streaming",
        "WebSocket connection multiplexer handling 45,000+ concurrent clients with zero frame drops"
      ],
      metrics: [
        { label: "Throughput", value: "120k evt/s" },
        { label: "P99 Latency", value: "6.8ms" },
        { label: "Memory Footprint", value: "< 140MB" }
      ],
      technologies: ["Go", "TypeScript", "Redis", "gRPC", "Docker", "Prometheus", "React"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "aurora-studio-ai",
      title: "Nexus AI: Intelligent Knowledge Mesh",
      tagline: "Enterprise semantic search & multi-agent synthesis platform",
      category: "AI & APIs",
      description: "A generative AI knowledge engine that transforms terabytes of unstructured enterprise documentation into real-time vectorized retrieval graphs with citation verification.",
      architectureDetails: [
        "Hybrid search pipeline combining BM25 lexical search with Milvus dense vector embeddings",
        "Autonomous multi-agent verification loop to eliminate hallucinations before streaming",
        "React frontend with token-level optimistic rendering and interactive AST code blocks",
        "Edge-cached responses with Cloudflare Workers reducing average latency by 72%"
      ],
      metrics: [
        { label: "Accuracy", value: "98.4%" },
        { label: "Query Time", value: "240ms" },
        { label: "Docs Indexed", value: "2.5M+" }
      ],
      technologies: ["Next.js", "Python", "FastAPI", "Milvus", "PostgreSQL", "TailwindCSS"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "cloud-forge-infra",
      title: "CloudForge: Ephemeral Preview Environments",
      tagline: "Automated container orchestration on Git pull requests",
      category: "Cloud & DevOps",
      description: "A DevOps automation orchestrator that provisions isolated, full-stack Kubernetes preview environments per pull request in under 45 seconds with automatic teardown.",
      architectureDetails: [
        "Custom Kubernetes CRD controller written in Go reconciling pull request states",
        "Dynamic TLS certificate generation & route provisioning via Traefik Ingress",
        "Database branch cloning with sanitized ephemeral snapshots via AWS RDS",
        "Unified CLI tool and GitHub Actions bot commenting live preview links"
      ],
      metrics: [
        { label: "Spin-up Time", value: "38s" },
        { label: "Cloud Cost Saved", value: "42%" },
        { label: "Environments/Mo", value: "1,200+" }
      ],
      technologies: ["Kubernetes", "Go", "AWS", "Docker", "Terraform", "GitHub Actions"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "zenith-commerce",
      title: "Zenith: Headless Ultra-Fast E-Commerce",
      tagline: "Sub-50ms TTFB headless commerce with edge rendering",
      category: "Full-Stack",
      description: "A modular, blazing fast e-commerce platform built for extreme peak traffic bursts during high-volume product drops with zero inventory desynchronization.",
      architectureDetails: [
        "Optimistic UI updates with instant local cart state and background reconciliations",
        "Distributed distributed locks using Redlock algorithm preventing overselling",
        "Stripe integration with automated webhooks and asynchronous ledger accounting",
        "100/100 Google Lighthouse Core Web Vitals across all mobile viewpoints"
      ],
      metrics: [
        { label: "Lighthouse", value: "100/100" },
        { label: "Checkout Conversion", value: "+34%" },
        { label: "Peak QPS", value: "8,500" }
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Stripe", "TailwindCSS"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],
  skills: [
    {
      name: "Frontend & Interfaces",
      description: "Crafting fluid, accessible, and high-performance user interfaces.",
      skills: [
        { name: "React / Next.js", level: 96, highlight: "Server Components, App Router, Hooks" },
        { name: "TypeScript", level: 94, highlight: "Strict typing, Generics, AST manipulation" },
        { name: "Tailwind CSS", level: 95, highlight: "Custom design systems & responsive layouts" },
        { name: "Framer Motion", level: 90, highlight: "60fps micro-interactions & physics" },
        { name: "State & Data Fetching", level: 92, highlight: "Zustand, TanStack Query, Redux" }
      ]
    },
    {
      name: "Backend & Systems",
      description: "Building resilient microservices, robust APIs, and high-throughput pipelines.",
      skills: [
        { name: "Node.js & Express", level: 95, highlight: "Event loop optimization, streaming" },
        { name: "Go (Golang)", level: 86, highlight: "Concurrency, Goroutines, gRPC services" },
        { name: "Python & FastAPI", level: 88, highlight: "Async runtimes, AI pipelines, data manipulation" },
        { name: "REST & GraphQL", level: 92, highlight: "Schema federation, caching, idempotent design" },
        { name: "WebSockets & SSE", level: 90, highlight: "Bidirectional real-time state synchronization" }
      ]
    },
    {
      name: "Databases & Storage",
      description: "Designing high-scale relational, document, and in-memory data layers.",
      skills: [
        { name: "PostgreSQL", level: 92, highlight: "Indexing strategies, partitioning, complex queries" },
        { name: "Redis", level: 94, highlight: "Distributed caching, pub/sub, rate-limiting" },
        { name: "MongoDB", level: 88, highlight: "Aggregation pipelines, replica sets" },
        { name: "Vector DBs (Milvus / Pinecone)", level: 85, highlight: "Embedding indexing, semantic search" }
      ]
    },
    {
      name: "DevOps & Cloud Infrastructure",
      description: "Automating zero-downtime deployment pipelines and container clusters.",
      skills: [
        { name: "Docker & Containers", level: 92, highlight: "Multi-stage builds, minimal images" },
        { name: "Kubernetes", level: 84, highlight: "Deployments, Services, Helm charts" },
        { name: "AWS Cloud Services", level: 88, highlight: "ECS, S3, RDS, Lambda, CloudFront" },
        { name: "CI/CD & GitHub Actions", level: 90, highlight: "Automated testing, linting, releases" }
      ]
    }
  ],
  experience: [
    {
      company: "Apex Distributed Labs",
      role: "Lead Full-Stack Systems Engineer",
      period: "2023 - Present",
      location: "Remote",
      description: "Spearheaded core platform engineering, scaling mission-critical microservices and revamping the developer-facing interactive command suite.",
      highlights: [
        "Architected an event stream ingestion engine handling 10M+ events/day with 99.99% uptime",
        "Reduced frontend bundle size by 46% and achieved sub-80ms First Contentful Paint globally",
        "Mentored a team of 6 engineers on TypeScript best practices, design patterns, and observability"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "Docker"]
    },
    {
      company: "Vanguard Tech Systems",
      role: "Senior Software Engineer",
      period: "2021 - 2023",
      location: "Bengaluru, India",
      description: "Designed and implemented real-time collaboration tools, high-concurrency payment flows, and micro-frontend integrations.",
      highlights: [
        "Engineered real-time canvas sync engine using WebSockets and CRDTs with conflict-free resolution",
        "Implemented distributed rate-limiting middleware in Redis protecting endpoints from abuse",
        "Refactored legacy monolith into modular microservices with zero downtime during cutover"
      ],
      technologies: ["React", "Node.js", "GraphQL", "AWS", "Kafka", "MongoDB"]
    },
    {
      company: "Novus Digital Innovations",
      role: "Full-Stack Developer",
      period: "2019 - 2021",
      location: "New Delhi, India",
      description: "Built responsive client portals, RESTful API layers, and automated data processing jobs.",
      highlights: [
        "Developed 12+ enterprise web applications with custom design systems and robust testing suites",
        "Cut database query latencies by 60% through indexed query optimizations and query caching"
      ],
      technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Docker"]
    }
  ]
};
