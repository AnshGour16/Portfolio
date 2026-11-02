# ⚡ Classy & Interactive Engineering Portfolio

A luxury, high-performance, dark-mode portfolio engineered for modern Full-Stack & Systems Engineers. Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Interactivity

- **Interactive 60fps Star & Particle Canvas**: Subtle interactive dust and filament particle network responding dynamically to cursor position.
- **Magnetic Custom Cursor**: Smooth luminous cursor follower that tracks, scales, and pulses over interactive elements.
- **3D Tilt Cards with Dynamic Glare**: Realistic physics-based specular sheen reflecting light angles across project showcases.
- **Global Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-first fuzzy search navigation to jump sections, copy email, toggle audio, and launch tools.
- **Interactive In-Browser Shell Terminal**: Built-in CLI with commands (`neofetch`, `skills`, `projects`, `about`, `contact`, `matrix`, `clear`).
- **Web Audio Sound Effects**: Subtle, clean synthesized sound FX (mechanical clicks, micro-ticks, and harmonic success chimes) with a one-click mute toggle.
- **System Architecture Deep-Dives**: Detailed case study modals featuring benchmarks, architecture breakdowns, and tech stacks.
- **Interactive Competency Matrix**: Domain-categorized skill bars with animated progress and highlights.
- **Direct Handshake with Confetti Celebration**: Copy-to-clipboard email with instant toast, confetti particles, and interactive message dispatch form.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Native Web Audio API (zero audio file dependencies)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🎨 How to Personalize Your Details

All personal content, projects, experience, and contact information is organized in a single configuration file:
👉 **`src/data/portfolioData.ts`**

Edit this file to update:
- Your name, title, bio, and social links
- Your projects, metrics, and architecture points
- Your skill proficiencies and categories
- Your work history and milestones

---

## 🌐 Deployment

You can deploy this portfolio in seconds with zero configuration to:
- **Vercel**: Import the GitHub repository and click Deploy.
- **Netlify**: Run `npm run build` with publish directory `dist`.
- **GitHub Pages**: Build with Vite and push to the `gh-pages` branch.
