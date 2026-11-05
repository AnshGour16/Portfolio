# ✨ Ansh Gour — Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, classy personal portfolio engineered for **Ansh Gour** — Full Stack Developer and Computer Science Engineer. Built with an **Obsidian Luxury** aesthetic, glassmorphism design language, 60fps canvas particles, and 3D interactive elements.

---

## 🌟 Key Highlights & Features

- **Personal Hero Showcase**: Two-column responsive hero featuring personal portrait frame, availability status badge, and clear value proposition.
- **60 FPS Interactive Particle Canvas**: Custom WebGL/HTML5 canvas with responsive celestial dust and particle filaments reacting smoothly to pointer movement.
- **Magnetic Custom Cursor**: Smooth luminous dual-ring follower with cyan glow that dynamically tracks and scales over clickable triggers.
- **3D Physics Tilt Cards**: Dynamic 3D card tilt (`perspective: 1200px`) with realistic specular sheen moving across the glass face based on cursor angle.
- **System Architecture Deep-Dives**: Interactive case study modals detailing engineering approaches, architecture decisions, and technology stacks.
- **Clean Competency Matrix**: Category-driven skills showcase without arbitrary percentages, presenting practical proficiencies cleanly.
- **Experience, Education & Leadership Hub**: Tabbed milestone switcher detailing internship achievements at **ESSMEY Private Limited**, engineering education at **Chitkara University**, and leadership in the **IEEE Student Chapter**.
- **Interactive Connect Handshake**: One-click email copy with instant visual feedback and celebratory particle confetti, alongside direct verified profiles.

---

## 🚀 Featured Engineering Projects

1. **[Full-Stack Authentication & OTP Reset System](https://github.com/AnshGour16/Authentication-System)**
   - Secure production-ready auth engine with 3-step OTP recovery, direct SSL SMTP delivery, Helmet HTTP hardening, multi-tier rate limiting, and an automated 38-test TDD suite in Jest & Supertest.
   - *Stack: Node.js, Express.js, MongoDB Atlas, JWT, Bcrypt, Jest, Supertest, Tailwind CSS*

2. **[Automated Hackathon Applicant Tracking System (ATS)](https://github.com/AnshGour16/Hackathon-ATS)**
   - Intelligent judging platform powered by **Google Gemini 1.5 Pro** evaluating pitch decks and GitHub repositories with blind judging mode, automated scoring rubrics, and downloadable PDF report cards.
   - *Stack: Next.js 14, Google Gemini AI, MongoDB, NextAuth.js, GitHub API, pdf2json, jsPDF, Tailwind CSS*

3. **[API Sentinel: Distributed Monitoring & Observability Platform](https://github.com/AnshGour16/api-sentinel)**
   - Full-stack API observability system featuring autonomous scheduled probing via Redis-locked BullMQ worker queues, real-time bi-directional telemetry over WebSockets (Socket.IO), and 77 passing Vitest tests.
   - *Stack: React 19, TypeScript, Node.js, Express, PostgreSQL, Redis, BullMQ, Socket.IO, Vite, Tailwind CSS*

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **Effects & Canvas**: HTML5 Canvas 60fps Particle Engine, Canvas Confetti
- **Build & Bundler**: Vite 5 with Hot Module Replacement (HMR)
- **Deployment Ready**: Optimized for Vercel, Netlify, and Cloudflare Pages

---

## 💻 Local Development Setup

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

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── ansh-photo.jpg              # High-resolution portrait photograph
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Engineering values & live IST time clock
│   │   ├── BackgroundCanvas.tsx    # Interactive 60fps particle canvas
│   │   ├── ContactSection.tsx      # Direct contact channels, copy email & confetti
│   │   ├── CustomCursor.tsx        # Magnetic cursor follower
│   │   ├── ExperienceSection.tsx   # Experience, Education & Leadership tab switcher
│   │   ├── Footer.tsx              # Clean footer with system status
│   │   ├── Hero.tsx                # Hero section with photo frame & headline
│   │   ├── Navbar.tsx              # Floating frosted-glass navigation bar
│   │   ├── ProjectCard3D.tsx       # 3D tilt project card with specular glare
│   │   ├── ProjectModal.tsx        # Architecture case study modal
│   │   ├── ProjectsSection.tsx     # Filterable project showcase grid
│   │   └── SkillsSection.tsx       # Category-driven technical competencies
│   ├── data/
│   │   └── portfolioData.ts        # Centralized configuration & portfolio content
│   ├── types.ts                    # TypeScript data models and interfaces
│   ├── utils/
│   │   └── sound.ts                # Audio engine configuration
│   ├── App.tsx                     # Main application layout wrapper
│   ├── index.css                   # Tailwind base directives & glassmorphism utilities
│   └── main.tsx                    # React application entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📬 Contact & Connect

- **Name**: Ansh Gour
- **Role**: Full Stack Developer
- **Email**: [anshgour759@gmail.com](mailto:anshgour759@gmail.com)
- **GitHub**: [@AnshGour16](https://github.com/AnshGour16)
- **LinkedIn**: [ansh-gour-03a941306](https://www.linkedin.com/in/ansh-gour-03a941306/)
- **Location**: Patiala, Punjab, India

---

© 2026 Ansh Gour. Engineered with React, TypeScript & Tailwind CSS.
