"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Smartphone,
  FileCode,
  Mail,
  Layers,
  Layout,
  Copy,
  Check,
  X,
  Star,
  ChevronRight,
  Github,
} from "lucide-react";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, ProjectData } from "./data/projects";

export default function Home() {
  const [typedCommand, setTypedCommand] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  const [activeFilter, setActiveFilter] = useState<
    "All" | "Android" | "React" | "Flutter"
  >("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Android") return project.type === "android";
    if (activeFilter === "React")
      return project.type === "react" || project.type === "sync";
    if (activeFilter === "Flutter") return project.type === "flutter";
    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const normalProjects = filteredProjects.filter((p) => !p.featured);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);
  const handleCopy = () => {
    const textToCopy = `
{
  "name": "Dev.Dotori",
  "role": "Mobile & Full Stack Developer",
  "skills": {
    "languages": ["Kotlin", "Java", "TypeScript", "JavaScript", "Python", "C#", "HTML/CSS"],
    "mobile": ["React Native", "Expo", "Flutter", "Android SDK"],
    "web_frontend": ["React", "Next.js", "Tailwind CSS"],
    "backend_db": ["Spring Boot", "MSSQL", "MongoDB", "SQLite"],
    "tools_infra": ["Git", "Firebase", "Docker", "Google Play Console", "Figma", "Android Studio"]
  }
}
    `.trim();
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const fullCommand = "whoami";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowResult(true), 500);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  const containerClass = "w-full max-w-[1400px] mx-auto px-6 lg:px-12";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div
          className={`${containerClass} h-14 flex items-center gap-1 overflow-x-auto scrollbar-hide`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-blue-400 border-t-2 border-blue-500 text-sm min-w-fit cursor-default">
            <Terminal size={14} />
            <span>~/portfolio</span>
          </div>

          <Link
            href="#about"
            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit"
          >
            <FileCode size={14} className="text-yellow-400" />
            <span>_about.json</span>
          </Link>
          <Link
            href="#projects"
            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit"
          >
            <Layers size={14} className="text-green-400" />
            <span>projects.tsx</span>
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit"
          >
            <Mail size={14} className="text-purple-400" />
            <span>contact.sh</span>
          </Link>
          <a
            href="https://github.com/E2G0I2T"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit"
          >
            <Github size={14} className="text-slate-400" />
            <span>github</span>
          </a>
        </div>
      </header>

      <main className="flex-1 w-full py-20 space-y-32">
        <section className={containerClass}>
          <div className="p-2 bg-slate-900 rounded-t-lg border border-slate-800 w-fit flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="border-l-2 border-slate-800 pl-6 py-2 space-y-4 min-h-[200px]">
            <div className="text-green-400 text-lg sm:text-2xl font-mono">
              <span className="text-blue-400 mr-2">➜</span>
              <span className="text-purple-400 mr-2">~</span>
              {typedCommand}
              {!showResult && (
                <span className="animate-pulse inline-block w-2.5 h-5 bg-green-400 ml-1 align-middle"></span>
              )}
            </div>

            <div
              className={`transition-opacity duration-1000 ${
                showResult ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* key-value 출력 */}
              <div className="font-mono text-sm sm:text-base space-y-1 mt-4">
                {[
                  {
                    key: "name",
                    value: "Lee Ji Hyung",
                    color: "text-green-400",
                  },
                  {
                    key: "role",
                    value: "Mobile & Full Stack Developer",
                    color: "text-cyan-400",
                  },
                  {
                    key: "based",
                    value: "Seoul, Korea",
                    color: "text-purple-400",
                  },
                  {
                    key: "status",
                    value: "Available for opportunities",
                    color: "text-yellow-400",
                  },
                  {
                    key: "contact",
                    value: "l62557411@gmail.com",
                    color: "text-slate-300",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-slate-500">&gt;</span>
                    <span className="text-slate-400 w-16 shrink-0">
                      {item.key}
                    </span>
                    <span className="text-slate-600 shrink-0">:</span>
                    <span className={item.color}>{item.value}</span>
                  </div>
                ))}

                {/* 주석 소개 문구 */}
                <div className="pt-2 text-slate-500 italic">
                  <span className="text-slate-600">{"// "}</span>
                  Pursuing both native depth and cross-platform efficiency.
                </div>

                {/* 다음 커맨드 대기 커서 */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-blue-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span className="animate-pulse inline-block w-2.5 h-5 bg-green-400 align-middle"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${containerClass} pt-10`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-400">
              <span className="text-slate-600">01.</span> _about.json
            </h2>
          </div>

          <div className="relative bg-[#1e1e1e] rounded-xl border border-[#333] shadow-2xl overflow-hidden font-mono text-sm sm:text-base group">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
              <div className="flex items-center gap-2 text-yellow-400 text-xs">
                <FileCode size={14} />
                <span>_about.json</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-2 py-1 hover:bg-[#333] rounded text-slate-400 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {isCopied ? (
                  <Check size={14} className="text-green-400" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            <div className="flex overflow-x-auto">
              <div className="flex flex-col items-end px-3 py-4 text-[#858585] select-none bg-[#1e1e1e] border-r border-[#333] min-w-[3rem]">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
              </div>

              <div className="flex-1 p-4 text-[#d4d4d4]">
                <div className="block">
                  <span className="text-yellow-400">{`{`}</span>
                </div>
                <div className="block pl-4">
                  <span className="text-sky-300">&quot;name&quot;</span>:{" "}
                  <span className="text-orange-300">
                    &quot;Lee Ji Hyung&quot;
                  </span>
                  ,
                </div>
                <div className="block pl-4">
                  <span className="text-sky-300">&quot;role&quot;</span>:{" "}
                  <span className="text-orange-300">
                    &quot;Mobile & Full Stack Developer&quot;
                  </span>
                  ,
                </div>

                <div className="block pl-4">
                  <span className="text-sky-300">&quot;skills&quot;</span>:{" "}
                  <span className="text-yellow-400">{`{`}</span>
                </div>

                <div className="block pl-8">
                  <span className="text-sky-300">&quot;languages&quot;</span>: [
                  <span className="text-orange-300">&quot;Kotlin&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;Java&quot;</span>,{" "}
                  <span className="text-orange-300">
                    &quot;TypeScript&quot;
                  </span>
                  ,{" "}
                  <span className="text-orange-300">
                    &quot;JavaScript&quot;
                  </span>
                  , <span className="text-orange-300">&quot;Python&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;C#&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;HTML/CSS&quot;</span>
                  ],
                </div>

                <div className="block pl-8">
                  <span className="text-sky-300">&quot;mobile&quot;</span>: [
                  <span className="text-orange-300">
                    &quot;React Native&quot;
                  </span>
                  , <span className="text-orange-300">&quot;Expo&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;Flutter&quot;</span>,{" "}
                  <span className="text-orange-300">
                    &quot;Android SDK&quot;
                  </span>
                  ],
                </div>

                <div className="block pl-8">
                  <span className="text-sky-300">&quot;web_frontend&quot;</span>
                  : [<span className="text-orange-300">&quot;React&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-orange-300">
                    &quot;Tailwind CSS&quot;
                  </span>
                  ],
                </div>

                <div className="block pl-8">
                  <span className="text-sky-300">&quot;backend_db&quot;</span>:
                  [
                  <span className="text-orange-300">
                    &quot;Spring Boot&quot;
                  </span>
                  , <span className="text-orange-300">&quot;MSSQL&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;MongoDB&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;SQLite&quot;</span>],
                </div>

                <div className="block pl-8">
                  <span className="text-sky-300">&quot;tools_infra&quot;</span>:
                  [<span className="text-orange-300">&quot;Git&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;Firebase&quot;</span>,{" "}
                  <span className="text-orange-300">&quot;Docker&quot;</span>,{" "}
                  <span className="text-orange-300">
                    &quot;Google Play Console&quot;
                  </span>
                  , <span className="text-orange-300">&quot;Figma&quot;</span>,{" "}
                  <span className="text-orange-300">
                    &quot;Android Studio&quot;
                  </span>
                  ]
                </div>

                <div className="block pl-4">
                  <span className="text-yellow-400">{`}`}</span>
                </div>

                <div className="block">
                  <span className="text-yellow-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 w-full relative">
          <div className={containerClass}>
            <div className="mb-12 border-b border-gray-800 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2 whitespace-nowrap">
                <span className="text-slate-600">02.</span> projects.tsx
              </h2>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {["All", "Android", "React", "Flutter"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() =>
                      setActiveFilter(filter as "All" | "Android" | "React")
                    }
                    className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all border ${
                      activeFilter === filter
                        ? "bg-blue-500/20 border-blue-500 text-blue-300"
                        : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {featuredProjects.length > 0 && (
              <div className="mb-16">
                <h3 className="text-sm font-mono text-slate-500 mb-6 flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" />{" "}
                  FEATURED_PROJECTS
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Terminal size={100} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                            {project.type === "android" ? (
                              <Smartphone size={24} />
                            ) : (
                              <Layout size={24} />
                            )}
                          </div>
                          <h4 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <p className="text-slate-400 mb-6 line-clamp-2">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 4).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-slate-300 rounded border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-blue-400 font-mono group-hover:translate-x-2 transition-transform">
                          자세히 보기{" "}
                          <ChevronRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {normalProjects.length > 0 && (
              <div>
                <h3 className="text-sm font-mono text-slate-500 mb-6 flex items-center gap-2">
                  <Layers size={16} /> OTHER_PROJECTS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {normalProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer bg-slate-900/20 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/40 hover:border-slate-600 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-slate-400 group-hover:text-green-400 transition-colors">
                          <FileCode size={24} />
                        </div>
                        <ChevronRight
                          size={18}
                          className="text-slate-600 group-hover:text-slate-400 transition-colors"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-3">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono text-slate-400"
                          >
                            #{tag.replace(/\s+/g, "")}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-slate-500 font-mono">
                No projects found.
              </div>
            )}
          </div>
        </section>

        <footer id="contact" className={`${containerClass} pb-20 pt-10`}>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-400">
            <span className="text-slate-600">03.</span> contact.sh
          </h2>

          <div className="bg-slate-900 rounded-lg border border-slate-800 p-6 shadow-lg font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs">
              <Terminal size={14} />
              <span>bash — 80x24</span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-slate-300">
                <span className="text-green-400">user@portfolio:~$</span>
                <span className="text-slate-400"> cat contact.txt</span>
              </div>
              <div className="flex items-center gap-3 pl-0 pt-1">
                <span className="text-slate-500">&gt;</span>
                <span className="text-slate-400 w-16 shrink-0">email</span>
                <span className="text-slate-600">:</span>
                <span className="text-green-400">l62557411@gmail.com</span>
                <button
                  onClick={() => {
                    const email = "l62557411@gmail.com";
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(email);
                    } else {
                      const textarea = document.createElement("textarea");
                      textarea.value = email;
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand("copy");
                      document.body.removeChild(textarea);
                    }
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="ml-2 p-1.5 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors"
                  title="Copy email"
                >
                  {isCopied ? (
                    <Check size={14} className="text-green-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3 pl-0 pt-1">
                <span className="text-slate-500">&gt;</span>
                <span className="text-slate-400 w-16 shrink-0">github</span>
                <span className="text-slate-600">:</span>

                <a
                  href="https://github.com/E2G0I2T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <Github size={14} />
                  github.com/E2G0I2T
                </a>
              </div>
            </div>
            <p className="mt-8 text-slate-600 text-xs border-t border-slate-800 pt-4">
              &copy; 2026 Dev Portfolio. Process finished with exit code 0.
            </p>
          </div>
        </footer>
      </main>
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-[1600px] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-slate-950 border border-slate-700 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 scrollbar-hide">
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 left-[calc(100%-3rem)] z-50 p-2 bg-slate-800/80 backdrop-blur rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-600"
            >
              <X size={20} />
            </button>

            <div className="p-2 sm:p-6">
              <ProjectCard
                title={selectedProject.title}
                summary={selectedProject.summary}
                specs={selectedProject.specs}
                tags={selectedProject.tags}
                videoSrc={selectedProject.videoSrc}
                webVideoSrc={selectedProject.webVideoSrc}
                logs={selectedProject.logs}
                webLogs={selectedProject.webLogs}
                projectType={selectedProject.type}
                githubUrl={selectedProject.githubUrl}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
