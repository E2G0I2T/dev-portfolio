"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RefreshCw } from "lucide-react";

export type LogEntry = {
  time: number;
  text: string;
  type: "info" | "success" | "error" | "warning";
};

interface ProjectCardProps {
  title: string;
  summary: string;
  specs: string[];
  tags: string[];
  videoSrc?: string;
  logs: LogEntry[];
  projectType: "android" | "react";
}

const formatLogTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `[${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}]`;
};

export default function ProjectCard({
  title,
  summary,
  specs,
  tags,
  videoSrc,
  logs,
  projectType,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<LogEntry[]>([]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const activeLogs = logs.filter((log) => log.time <= currentTime);
      setCurrentLogs(activeLogs);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentLogs]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setCurrentLogs([]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start group">
      
      {/* 1. Left Column: Phone Frame & Video Player */}
      <div className="relative mx-auto lg:mx-0 flex flex-col items-center">
        <div className="relative border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl shadow-blue-500/10 overflow-hidden ring-1 ring-slate-700/50 transition-shadow duration-500 group-hover:shadow-blue-500/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20"></div>
          <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <div className="text-slate-500 text-sm text-center px-4">
                Video not found
              </div>
            )}
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer transition-opacity hover:bg-black/30"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform duration-300">
                  <Play className="fill-white text-white ml-2" size={36} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white transition border border-slate-700"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleReplay}
            className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white transition border border-slate-700"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* 2. Right Column: Description & Live Terminal */}
      <div className="flex flex-col h-full lg:h-[600px]">
        
        {/* 설명 영역 */}
        <div className="mb-6 shrink-0">
          
          <div className="flex items-center gap-2 font-mono text-xs text-gray-500 mb-3">
            {/* ★ 수정된 부분: 에러 방지를 위해 중괄호로 감싸고 문자열 처리 */}
            <span>{"// Env:"}</span>
            
            {projectType === "android" ? (
              <span className="text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded border border-emerald-500/20 font-bold">
                ANDROID NATIVE
              </span>
            ) : (
              <span className="text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/20 font-bold">
                REACT NATIVE
              </span>
            )}
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-5 tracking-tight">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-semibold bg-slate-800 text-blue-400 rounded-full border border-blue-500/20 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 mb-4">
            <p className="text-slate-200 text-lg font-medium leading-relaxed">
              {summary}
            </p>
            <ul className="space-y-2">
              {specs.map((spec, index) => (
                <li
                  key={index}
                  className="flex items-start text-slate-400 text-sm sm:text-base leading-snug"
                >
                  <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500/60 block shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Terminal */}
        <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 shadow-inner overflow-hidden flex flex-col min-h-0">
          <div className="flex justify-between items-center px-4 py-3 bg-slate-900/50 border-b border-slate-800 shrink-0">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Output - Debug Console
            </span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 bg-slate-950/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-700"
          >
            {currentLogs.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-slate-700 italic space-y-2">
                <span>Waiting for application start...</span>
                <span className="text-xs text-slate-800">
                  Click play button to start debug session
                </span>
              </div>
            )}
            {currentLogs.map((log, index) => (
              <div
                key={index}
                className="break-all animate-in fade-in slide-in-from-left-2 duration-300 flex items-start"
              >
                <span className="text-slate-600 mr-3 select-none shrink-0 font-medium">
                  {formatLogTime(log.time)}
                </span>
                <div className="flex-1">
                  {log.type === "info" && (
                    <span className="text-blue-400 font-bold mr-2">[INFO]</span>
                  )}
                  {log.type === "success" && (
                    <span className="text-emerald-400 font-bold mr-2">
                      [OK]
                    </span>
                  )}
                  {log.type === "error" && (
                    <span className="text-red-400 font-bold mr-2">[ERR]</span>
                  )}
                  {log.type === "warning" && (
                    <span className="text-yellow-400 font-bold mr-2">
                      [WARN]
                    </span>
                  )}
                  <span className="text-slate-300">{log.text}</span>
                </div>
              </div>
            ))}
            {isPlaying && (
              <div className="text-emerald-500 animate-pulse font-bold mt-2">
                _
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}