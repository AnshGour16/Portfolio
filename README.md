# Ansh Gour — Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-1.11.x-7952B3?logo=bootstrap&logoColor=white)](https://icons.getbootstrap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance personal portfolio engineered for **Ansh Gour** — Full Stack Developer and Computer Science Engineer. Built with a clean Obsidian design aesthetic, glassmorphism design system, 3D interactive physics cards, strict separation of concerns, and full Agent Experience (AX) compatibility.

---

## Key Highlights & Features

- **Personal Hero Showcase**: Two-column responsive hero featuring personal portrait frame, crisp typography, and concise value proposition.
- **3D Physics Tilt Cards**: Dynamic 3D card tilt (`perspective: 1200px`) with realistic specular sheen moving across the glass face based on cursor angle.
- **System Architecture Deep-Dives**: Interactive case study modals detailing engineering approaches, architecture decisions, and technology stacks.
- **Clean Competency Matrix**: Category-driven skills showcase presenting practical proficiencies cleanly without arbitrary percentage bars.
- **Experience, Education & Leadership Hub**: Tabbed milestone switcher detailing internship achievements at **ESSMEY Private Limited**, engineering education at **Chitkara University**, and leadership in the **IEEE Student Chapter**.
- **Interactive Connect Handshake**: One-click email and phone copying with instant visual feedback and celebratory particle confetti, alongside direct verified profiles.
- **Direct Email Transmission**: Web3Forms integration delivering visitor transmissions straight to personal Gmail inbox without backend overhead.
- **Agent Experience (AX) and Accessibility**: Semantic HTML5 markup, WCAG-compliant 44px+ touch targets, deterministic `data-agent-action` selectors, and Schema.org `Person` JSON-LD structured data.

---

## Featured Engineering Projects

1. **[Full-Stack Authentication & OTP Reset System](https://github.com/AnshGour16/Authentication-System)**
   - Secure production-ready auth engine with 3-step OTP recovery, direct SSL SMTP delivery, Helmet HTTP hardening, multi-tier rate limiting, and an automated 38-test TDD suite in Jest and Supertest.
   - *Stack: Node.js, Express.js, MongoDB Atlas, JWT, Bcrypt, Jest, Supertest, Tailwind CSS*

2. **[Automated Hackathon Applicant Tracking System (ATS)](https://github.com/AnshGour16/Hackathon-ATS)**
   - Intelligent judging platform powered by **Google Gemini 1.5 Pro** evaluating pitch decks and GitHub repositories with blind judging mode, automated scoring rubrics, and downloadable PDF report cards.
   - *Stack: Next.js 14, Google Gemini AI, MongoDB, NextAuth.js, GitHub API, pdf2json, jsPDF, Tailwind CSS*

3. **[API Sentinel: Distributed Monitoring & Observability Platform](https://github.com/AnshGour16/api-sentinel)**
   - Full-stack API observability system featuring autonomous scheduled probing via Redis-locked BullMQ worker queues, real-time bi-directional telemetry over WebSockets (Socket.IO), and 77 passing Vitest tests.
   - *Stack: React 19, TypeScript, Node.js, Express, PostgreSQL, Redis, BullMQ, Socket.IO, Vite, Tailwind CSS*

---

## Tech Stack & Architecture

- **Frontend Framework**: React 18 with TypeScript
- **Styling & Design System**: Tailwind CSS (Glassmorphism & Obsidian Dark Theme)
- **Iconography**: Bootstrap Icons exclusively (`react-bootstrap-icons`)
- **Animation Engine**: Framer Motion
- **Particle & Visual Systems**: HTML5 Canvas 60fps Particle Engine, Canvas Confetti
- **Build & Bundler**: Vite 5 with Hot Module Replacement (HMR)
- **Deployment Ready**: Optimized for Vercel, Netlify, and Cloudflare Pages

---

## Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnshGour16/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## Project Structure

```
Portfolio/
├── public/
│   └── ansh-photo.jpg              # High-resolution portrait photograph
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable atomic UI elements
│   │   │   ├── ProjectCard3D.tsx   # 3D tilt project card with specular glare
│   │   │   └── ProjectModal.tsx    # Architecture case study modal
│   │   ├── features/               # Feature-specific composite components
│   │   │   ├── AboutSection.tsx    # Engineering values & live IST time clock
│   │   │   ├── ContactSection.tsx  # Direct contact channels, copy triggers & form
│   │   │   ├── ExperienceSection.tsx# Experience, Education & Leadership tab switcher
│   │   │   ├── Hero.tsx            # Hero section with portrait frame & headline
│   │   │   ├── ProjectsSection.tsx # Filterable project showcase grid
│   │   │   └── SkillsSection.tsx   # Category-driven technical competencies
│   │   └── layout/                 # Shell and layout components
│   │       ├── Footer.tsx          # Clean footer with system status
│   │       └── Navbar.tsx          # Floating frosted-glass navigation bar
│   ├── hooks/                      # Decoupled custom React hooks
│   │   ├── useClipboard.ts         # Clipboard copy state & feedback
│   │   ├── useContactForm.ts       # Contact form state & blur validation
│   │   └── useCurrentTime.ts       # Live IST timezone clock hook
│   ├── services/                   # Business logic and data services
│   │   └── portfolioService.ts     # Portfolio query and filtering service
│   ├── styles/                     # Global stylesheets & design tokens
│   │   └── index.css               # Tailwind directives & glassmorphism utilities
│   ├── data/
│   │   └── portfolioData.ts        # Centralized configuration & portfolio content
│   ├── types.ts                    # TypeScript data models and interfaces
│   ├── App.tsx                     # Main application layout wrapper
│   └── main.tsx                    # React application entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Contact & Connect

- **Name**: Ansh Gour
- **Role**: Full Stack Developer
- **Email**: [anshgour759@gmail.com](mailto:anshgour759@gmail.com)
- **GitHub**: [@AnshGour16](https://github.com/AnshGour16)
- **LinkedIn**: [ansh-gour-03a941306](https://www.linkedin.com/in/ansh-gour-03a941306/)
- **Location**: Patiala, Punjab, India

---

Copyright 2026 Ansh Gour. Engineered with React, TypeScript & Tailwind CSS.
