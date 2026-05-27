"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RefreshCw, Smartphone, Monitor } from "lucide-react";

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
  webVideoSrc?: string;
  logs: LogEntry[];
  webLogs?: LogEntry[];
  projectType: "android" | "react" | "sync"; // ← sync 추가
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
  webVideoSrc,
  logs,
  webLogs,
  projectType,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // sync 타입은 항상 web 모드로 시작
  const [viewMode, setViewMode] = useState<"mobile" | "web">(
    projectType === "sync" ? "web" : videoSrc ? "mobile" : "web",
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<LogEntry[]>([]);

  const hasBothVideos = Boolean(videoSrc && webVideoSrc);
  const currentVideoUrl = viewMode === "mobile" ? videoSrc : webVideoSrc ?? videoSrc;

  const targetLogs = viewMode === "web" && webLogs ? webLogs : logs;

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const activeLogs = targetLogs.filter((log) => log.time <= currentTime);
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

  const handleModeChange = (mode: "mobile" | "web") => {
    setViewMode(mode);
    setIsPlaying(false);
    setCurrentLogs([]);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // 텍스트 정보 블록
  const TextContent = (
    <div className="shrink-0 w-full animate-in fade-in duration-500">
      <div className="flex items-center gap-2 font-mono text-xs text-gray-500 mb-3">
        <span>{"// Env:"}</span>
        {projectType === "sync" ? (
          <span className="text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/20 font-bold">
            WEB + MOBILE SYNC
          </span>
        ) : viewMode === "web" ? (
          <span className="text-purple-400 bg-purple-900/20 px-2 py-1 rounded border border-purple-500/20 font-bold">
            WEB BROWSER
          </span>
        ) : projectType === "android" ? (
          <span className="text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded border border-emerald-500/20 font-bold">
            ANDROID NATIVE
          </span>
        ) : (
          <span className="text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/20 font-bold">
            REACT NATIVE
          </span>
        )}
      </div>

      <h3 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-5 tracking-tight break-keep">
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
        <p className="text-slate-200 text-lg font-medium leading-relaxed break-keep">
          {summary}
        </p>
        <ul className="space-y-2">
          {specs.map((spec, index) => (
            <li
              key={index}
              className="flex items-start text-slate-400 text-sm sm:text-base leading-snug break-keep"
            >
              <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500/60 block shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // 디버그 콘솔 블록
  const ConsoleContent = (
    <div className="w-full h-full bg-slate-950 rounded-xl border border-slate-800 shadow-inner overflow-hidden flex flex-col min-h-[400px]">
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
        className="flex-1 w-full p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 bg-slate-950/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-700"
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
                <span className="text-emerald-400 font-bold mr-2">[OK]</span>
              )}
              {log.type === "error" && (
                <span className="text-red-400 font-bold mr-2">[ERR]</span>
              )}
              {log.type === "warning" && (
                <span className="text-yellow-400 font-bold mr-2">[WARN]</span>
              )}
              <span className="text-slate-300">{log.text}</span>
            </div>
          </div>
        ))}
        {isPlaying && (
          <div className="text-emerald-500 animate-pulse font-bold mt-2">_</div>
        )}
      </div>
    </div>
  );

  // ── 웹 브라우저 프레임 (sync 타입 + web 모드 공통 사용) ────────────────
  const WebFrame = (
    <div className="w-full aspect-video relative border-gray-700 bg-gray-900 border rounded-xl shadow-2xl overflow-hidden flex flex-col">
      <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="ml-4 flex-1 flex justify-center">
          <div className="bg-slate-900/50 rounded-md h-6 w-1/2 max-w-md flex items-center px-3 text-[10px] text-slate-500 font-mono border border-slate-700/50">
            localhost:5173
          </div>
        </div>
      </div>
      <div className="flex-1 bg-black flex items-center justify-center relative">
        {currentVideoUrl ? (
          <video
            key={viewMode}
            ref={videoRef}
            src={currentVideoUrl}
            className="w-full h-full object-cover"
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className="text-slate-500 text-sm">Video not found</div>
        )}
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer hover:bg-black/30"
            onClick={togglePlay}
          >
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform">
              <Play className="fill-white text-white ml-2" size={44} />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // ── 재생 컨트롤 ────────────────────────────────────────────────────────
  const Controls = (
    <div className="flex justify-center gap-4">
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button
        onClick={handleReplay}
        className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );

  return (
    <div className="w-full">
      {/* 탭 토글 — sync 타입은 숨김 */}
      {hasBothVideos && projectType !== "sync" && (
        <div className="flex justify-center mb-10">
          <div className="flex bg-slate-900/80 backdrop-blur rounded-full p-1.5 border border-slate-700 shadow-xl">
            <button
              onClick={() => handleModeChange("mobile")}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                viewMode === "mobile"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Smartphone size={18} /> Mobile App
            </button>
            <button
              onClick={() => handleModeChange("web")}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                viewMode === "web"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Monitor size={18} /> Web Browser
            </button>
          </div>
        </div>
      )}

      {/* ── sync 타입 레이아웃 ── */}
      {projectType === "sync" ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 w-full">
            {WebFrame}
            {Controls}
            <div className="mt-4 border-t border-slate-800 pt-8">
              {TextContent}
            </div>
          </div>
          <div className="w-full h-[600px] lg:h-[calc(100vh-160px)] lg:sticky lg:top-8">
            {ConsoleContent}
          </div>
        </div>

      ) : viewMode === "mobile" ? (
        /* ── 기존 mobile 레이아웃 ── */
        <div className="w-full grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
          <div className="relative w-full mx-auto flex flex-col items-center">
            <div className="relative border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] h-[660px] w-[340px] shadow-2xl overflow-hidden ring-1 ring-slate-700/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                {currentVideoUrl ? (
                  <video
                    key="mobile"
                    ref={videoRef}
                    src={currentVideoUrl}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                  />
                ) : (
                  <div className="text-slate-500 text-sm">Video not found</div>
                )}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer hover:bg-black/30"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform">
                      <Play className="fill-white text-white ml-2" size={36} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleReplay}
                className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-full lg:min-h-[660px]">
            {TextContent}
            <div className="mt-6 flex-1 h-full min-h-[300px]">
              {ConsoleContent}
            </div>
          </div>
        </div>

      ) : (
        /* ── 기존 web 레이아웃 ── */
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-8 w-full">
            {WebFrame}
            <div className="flex justify-center gap-4 -mt-2">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleReplay}
                className="p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              >
                <RefreshCw size={20} />
              </button>
            </div>
            <div className="mt-4 border-t border-slate-800 pt-8">
              {TextContent}
            </div>
          </div>
          <div className="w-full h-[600px] lg:h-[calc(100vh-160px)] lg:sticky lg:top-8">
            {ConsoleContent}
          </div>
        </div>
      )}
    </div>
  );
}