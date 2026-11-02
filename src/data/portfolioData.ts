import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Ansh Gour",
  handle: "@AnshGour16",
  title: "Full-Stack Developer & Software Engineer",
  headline: "Building Modern Full-Stack Platforms with AI Capabilities & Scalable Architecture",
  subheadline: "Computer Science Engineer specializing in MERN stack, Next.js, and Google Gemini AI integrations. Experienced in production development at ESSMEY and solved 225+ LeetCode problems.",
  location: "Patiala, Punjab, India",
  status: "Open to Software Engineering & Full-Stack Roles",
  email: "anshgour759@gmail.com",
  phone: "(+91) 8847608556",
  github: "https://github.com/AnshGour16",
  linkedin: "https://linkedin.com/in/anshgour",
  resumeUrl: "#resume",
  stats: [
    { label: "LeetCode Solved", value: "225+", subtext: "DSA & Problem Solving" },
    { label: "Academic CGPA", value: "7.7", subtext: "B.E. Computer Science" },
    { label: "Production Experience", value: "Intern", subtext: "ESSMEY Private Limited" },
    { label: "Campus Leadership", value: "IEEE", subtext: "Executive Chapter Member" },
  ],
  about: {
    paragraphs: [
      "I am a Computer Science Engineering student at Chitkara University with hands-on experience in full-stack web and mobile application development. My passion lies in building functional, high-performance digital products and integrating artificial intelligence to solve practical engineering challenges.",
      "During my Full Stack Software Development internship at ESSMEY Private Limited, I developed and refined features across web and mobile platforms using React Native, REST APIs, and database services. I contributed directly to production-oriented modules, third-party integrations, and testing pipelines.",
      "With 225+ LeetCode problems solved across Data Structures & Algorithms, I maintain a strong foundation in Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Beyond development, I serve as an Executive Member of the IEEE Student Chapter and Class Representative."
    ],
    coreValues: [
      {
        title: "Strong CS Fundamentals",
        desc: "225+ LeetCode problems solved in C++ and Java with deep grasp of Trees, Graphs, DP, DBMS, and OS fundamentals.",
        icon: "Zap"
      },
      {
        title: "Full-Stack & AI Integration",
        desc: "End-to-end expertise in MERN stack and Next.js, leveraging Google Gemini API for intelligent, automated data processing.",
        icon: "ShieldCheck"
      },
      {
        title: "Collaborative Leadership",
        desc: "Active Executive Member in IEEE Student Chapter and Class Representative bridging faculty and students.",
        icon: "Sparkles"
      }
    ]
  },
  projects: [
    {
      id: "ai-hackathon-ats",
      title: "AI-Powered Hackathon Applicant Tracking System",
      tagline: "Intelligent evaluation engine analyzing pitch decks and codebases with Google Gemini AI",
      category: "AI & Full-Stack",
      description: "An AI-powered judging platform using Next.js and Google Gemini AI to evaluate pitch decks and GitHub repositories against customizable hackathon criteria with automated scorecard generation.",
      architectureDetails: [
        "Integrated Google Gemini AI for deep contextual analysis of pitch decks against customized hackathon rubrics",
        "PDF processing pipeline using pdf2json and jsPDF to extract submission text and export downloadable standardized scorecards",
        "GitHub API integration analyzing repository commit history, code structure, strengths, and missing project sections",
        "Protected admin and participant dashboards featuring blind judging, real-time leaderboards, phase-based code unlocking, and CSV exports"
      ],
      metrics: [
        { label: "AI Engine", value: "Gemini API" },
        { label: "Evaluation", value: "Automated" },
        { label: "Reports", value: "jsPDF / CSV" }
      ],
      technologies: ["Next.js", "Google Gemini API", "GitHub API", "pdf2json", "jsPDF", "Tailwind CSS", "Vercel"],
      featured: true,
      githubUrl: "https://github.com/AnshGour16",
      liveUrl: "https://github.com/AnshGour16"
    },
    {
      id: "nexus-contacts",
      title: "Nexus Contacts: Contact Management Platform",
      tagline: "Full-stack MERN platform with JWT authentication and glassmorphism interface",
      category: "MERN Stack",
      description: "A production-ready contact management platform with secure JWT authentication, bcrypt password hashing, isolated user data schemas, and real-time search functionality.",
      architectureDetails: [
        "Robust Node.js and Express backend implementing RESTful APIs with route guards and JWT authentication tokens",
        "Bcrypt password hashing and user-specific data isolation ensuring strict multi-tenant privacy",
        "Complete CRUD operations with real-time client-side search, front-end and backend validation, and password strength enforcement",
        "Responsive glassmorphism UI built with React (Vite) and Tailwind CSS, deployed on Vercel with backend on Render"
      ],
      metrics: [
        { label: "Security", value: "JWT + Bcrypt" },
        { label: "Database", value: "MongoDB" },
        { label: "Deployment", value: "Vercel & Render" }
      ],
      technologies: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Tailwind CSS", "Render", "Vercel"],
      featured: true,
      githubUrl: "https://github.com/AnshGour16",
      liveUrl: "https://github.com/AnshGour16"
    }
  ],
  skills: [
    {
      name: "Frontend & Mobile",
      description: "Building responsive, modern, and accessible client interfaces.",
      skills: [
        { name: "React (Vite)", level: 92, highlight: "Hooks, State Management, SPAs" },
        { name: "Next.js", level: 88, highlight: "App Router, SSR, Server Components" },
        { name: "Tailwind CSS", level: 94, highlight: "Glassmorphism, Responsive Design" },
        { name: "React Native", level: 82, highlight: "Cross-platform Mobile Development" },
        { name: "HTML5 & CSS3", level: 95, highlight: "Semantic markup & modern layouts" }
      ]
    },
    {
      name: "Backend & APIs",
      description: "Engineering RESTful APIs, authentication workflows, and microservices.",
      skills: [
        { name: "Node.js", level: 90, highlight: "Asynchronous runtime & Event Loop" },
        { name: "Express.js", level: 92, highlight: "REST APIs, Middleware, Route Protection" },
        { name: "Authentication (JWT & Bcrypt)", level: 92, highlight: "Secure tokens, password hashing" },
        { name: "Axios & REST APIs", level: 94, highlight: "API integration & error handling" }
      ]
    },
    {
      name: "Programming & CS Fundamentals",
      description: "Solid algorithmic problem-solving and software foundations.",
      skills: [
        { name: "Data Structures & Algorithms", level: 90, highlight: "225+ LeetCode problems solved" },
        { name: "C++", level: 88, highlight: "STL, Algorithms, Memory Management" },
        { name: "Java", level: 85, highlight: "Object-Oriented Programming (OOP)" },
        { name: "JavaScript", level: 92, highlight: "ES6+, Promises, Async/Await" },
        { name: "DBMS, OS & CN", level: 86, highlight: "Operating Systems & Networking" }
      ]
    },
    {
      name: "Databases, AI & Cloud Tools",
      description: "Database modeling, AI SDKs, and deployment platforms.",
      skills: [
        { name: "MongoDB & Mongoose", level: 90, highlight: "Schema design, CRUD, Aggregations" },
        { name: "SQL", level: 84, highlight: "Relational queries, Joins, Indexing" },
        { name: "Google Gemini API", level: 88, highlight: "LLM integration, Prompting, Analysis" },
        { name: "PDF Processing (pdf2json, jsPDF)", level: 86, highlight: "Document parsing & generation" },
        { name: "Git, GitHub & Linux", level: 90, highlight: "Version control & CLI environments" },
        { name: "Vercel & Render", level: 92, highlight: "Cloud deployment & environment configs" }
      ]
    }
  ],
  experience: [
    {
      company: "ESSMEY PRIVATE LIMITED",
      role: "Full Stack Software Development Intern",
      period: "Jun 2024 - Sep 2024",
      location: "India",
      description: "Contributed to production-level application features across web and mobile platforms with frontend and backend services.",
      highlights: [
        "Developed and improved application features across web and mobile platforms using React Native, REST APIs, backend services, and database integrations",
        "Integrated third-party services and contributed to production-oriented application features across frontend and backend components",
        "Performed software testing, debugging, technical documentation, and supported deployment-related activities"
      ],
      technologies: ["React Native", "JavaScript", "REST APIs", "Node.js", "MongoDB", "Git"]
    },
    {
      company: "Technical Development & Projects",
      role: "Software Developer & Open Source",
      period: "2024 - Present",
      location: "Patiala, India",
      description: "Focused on advanced algorithmic problem solving, MERN stack web applications, and AI integrations.",
      highlights: [
        "Solved 225+ LeetCode problems focused on data structures, algorithms, and computational problem-solving",
        "Built and deployed full-stack web applications using the MERN stack with authentication, REST APIs, databases, and responsive interfaces",
        "Integrated Google Gemini AI into web applications for automated document evaluation and intelligent data processing"
      ],
      technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Gemini API", "C++"]
    }
  ],
  education: [
    {
      degree: "B.E. Computer Science",
      institution: "Chitkara University, Punjab",
      period: "2022 - Present",
      grade: "CGPA: 7.7",
      details: "Focusing on Data Structures & Algorithms, Database Systems, Web Technologies, and Software Engineering."
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Sri Guru Tegh Bahadur Public School, Patiala",
      period: "2022",
      grade: "75.2%",
      details: "Senior secondary education with focus on Science and Mathematics."
    }
  ],
  responsibilities: [
    {
      role: "Executive Member",
      organization: "IEEE Student Chapter, Chitkara University",
      period: "2024 - Present",
      description: "Contribute to organizing technical events, workshops, and hackathons to promote student innovation."
    },
    {
      role: "Core Member",
      organization: "CSE Sports Club, Chitkara University",
      period: "2024 - Present",
      description: "Assist in organizing sports events and inter-department competitions while promoting teamwork."
    },
    {
      role: "Class Representative (CR)",
      organization: "Chitkara University",
      period: "2024 - Present",
      description: "Act as a communication bridge between faculty and students for academic updates and student coordination."
    }
  ],
  achievements: [
    "Solved 225+ LeetCode problems focused on Data Structures, Algorithms, and Problem-Solving.",
    "Represented district-level cricket team and participated in university tournaments.",
    "Awarded 'Man of the Match' in first competitive university cricket tournament."
  ]
};
