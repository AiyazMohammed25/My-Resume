"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  ExternalLink,
  Download,
  Terminal,
  Code2,
  Bot,
  Coffee,
  QrCode,
  GraduationCap,
  MapPin,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

// Custom SVG Icons for GitHub & LinkedIn
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fullText =
    "> npx aiyaz-portfolio --init ... Ready! Loaded Next.js, React & MERN Stack.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "AI Assistant Platform",
      description:
        "A high-speed conversational AI web application built with Next.js App Router. Features real-time response streaming, context-aware chat threads, code syntax highlighting, and a sleek dark-mode interface powered by modern LLM APIs.",
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      github: "https://github.com/AiyazMohammed25/ai-assistant",
      liveLinks: [
        {
          label: "Live App",
          url: "https://ai-assistant-mu-tawny.vercel.app/",
          primary: true,
        },
      ],
      tags: [
        "Next.js",
        "React",
        "MongoDB",
        "Node.js",
        "Tailwind CSS",
        "Groq API",
      ],
      accent: "from-cyan-500/20 to-blue-500/5",
      border: "hover:border-cyan-500/50",
    },
    {
      title: "QR-Menu & Order System",
      description:
        "A complete digital dining solution with separate customer and admin interfaces for a seamless contactless menu viewing experience. Customers scan table QR codes to browse and order, while staff manage menus via the Admin Dashboard.",
      icon: <QrCode className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/AiyazMohammed25/QR-Menu",
      liveLinks: [
        {
          label: "Customer Menu",
          url: "https://qr-menu-seven-rho.vercel.app/",
          primary: true,
        },
        {
          label: "Admin Panel",
          url: "https://qr-menu-seven-rho.vercel.app/admin",
          primary: false,
        },
      ],
      tags: [
        "Next.js",
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
      ],
      accent: "from-purple-500/20 to-pink-500/5",
      border: "hover:border-purple-500/50",
    },
    {
      title: "Premium Cafe Template",
      description:
        "A modern, conversion-focused web platform crafted specifically for cafes and restaurants. Engineered with interactive menu filtering, smooth scroll animations, and a fast, scalable layout deployed live on Vercel.",
      icon: <Coffee className="w-6 h-6 text-amber-400" />,
      github: "https://github.com/AiyazMohammed25/premium-cafe-template",
      liveLinks: [
        {
          label: "Live Demo",
          url: "https://premium-cafe-template-ashen.vercel.app/",
          primary: true,
        },
      ],
      tags: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Responsive UI"],
      accent: "from-amber-500/20 to-orange-500/5",
      border: "hover:border-amber-500/50",
    },
  ];

  const skillGroups = [
    {
      category: "Frontend Technologies",
      skills: [
        "JavaScript (ES6+)",
        "Next.js (App Router)",
        "React.js",
        "React Native",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "SQL",
        "Python",
        "Java",
        "C++",
        "PHP",
      ],
    },
    {
      category: "Tools & Core Concepts",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Vercel",
        "CRUD Operations",
        "API Integration",
        "State Management",
        "Responsive Design",
      ],
    },
  ];

  const getBadgeColor = (tag: string) => {
    if (tag.includes("Next.js"))
      return "bg-white/10 text-white border-white/20";
    if (tag.includes("React"))
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
    if (tag.includes("MongoDB"))
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    if (tag.includes("Node") || tag.includes("Express"))
      return "bg-amber-500/10 text-amber-300 border-amber-500/30";
    return "bg-purple-500/10 text-purple-300 border-purple-500/30";
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden scroll-smooth">
      {/* Subtle Background Cyber Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Responsive Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07090e]/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight text-white shrink-0"
          >
            <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </span>
            <span>Mohammad Aiyaz</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions (Desktop + Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Icons (Visible on sm and up, and inside mobile menu on xs) */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/AiyazMohammed25"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-aiyaz-makandar"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/Moahmmad_Aiyaz_resume.pdf"
              download="Mohammad_Aiyaz_Makandar_Resume.pdf"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button (Only visible below md screen) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#07090e]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Links & Quick Contact in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between px-3">
              <span className="text-xs font-mono uppercase text-slate-500">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/AiyazMohammed25"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-aiyaz-makandar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-mono text-cyan-400 mb-6 max-w-full overflow-hidden">
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{typedText}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block shrink-0" />
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Building scalable web apps with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Next.js & MERN Stack.
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Hi, I&apos;m{" "}
            <strong className="text-slate-200">Mohammad Aiyaz Makandar</strong>,
            a Full-Stack & MERN Stack Developer based in Bengaluru. Recent BCA
            graduate passionate about developing scalable web applications,
            solving real-world problems, and crafting high-performance user
            interfaces with Next.js, React.js, Node.js, and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all"
            >
              <span>View Live Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-cyan-500/50 text-sm font-medium transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 px-2 sm:px-3 py-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bengaluru, Karnataka (Open to Roles)</span>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Deployed on Vercel</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Featured Next.js Projects
              </h2>
            </div>
            <a
              href="https://github.com/AiyazMohammed25"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
            >
              <span>View all repos on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-2xl bg-gradient-to-b ${project.accent} bg-slate-900/60 border border-slate-800/90 ${project.border} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      {project.icon}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/70 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition-colors"
                      title="View Source Code"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    {project.liveLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                          link.primary
                            ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/10"
                            : "bg-slate-950/90 hover:bg-slate-900 text-purple-300 border border-purple-500/40"
                        }`}
                      >
                        {link.primary ? (
                          <ExternalLink className="w-3.5 h-3.5" />
                        ) : (
                          <ShieldCheck className="w-3.5 h-3.5" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${getBadgeColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Tech Stack */}
        <section id="skills" className="py-16 border-t border-slate-800/60">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Resume Section */}
        <section id="education" className="py-16 border-t border-slate-800/60">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mt-1 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">
                  Education
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  V.V Sangha College, Hospet | Sri Krishnadevaraya University •
                  Graduated June 2026
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <span>CGPA: 8.01 / 10</span>
                </div>
              </div>
            </div>

            <a
              href="/Moahmmad_Aiyaz_resume.pdf"
              download="Mohammad_Aiyaz_Makandar_Resume.pdf"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shrink-0 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer
        id="contact"
        className="border-t border-slate-800/80 bg-slate-950/60 pt-16 pb-12 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Let&apos;s Work Together
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-md">
                Currently open to Full-Stack, Frontend, and MERN Stack Developer
                roles in Bengaluru and beyond. Feel free to reach out via email
                or phone!
              </p>
            </div>

            {/* Direct Contact Cards (Email & Phone) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
              <a
                href="mailto:ayazmakandar625@gmail.com"
                className="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                    ayazmakandar625@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919075062751"
                className="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Phone</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    +91 9075062751
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © 2026 Mohammad Aiyaz Makandar. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center gap-6 text-slate-400">
              <a
                href="https://github.com/AiyazMohammed25"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-aiyaz-makandar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ayazmakandar625@gmail.com"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}