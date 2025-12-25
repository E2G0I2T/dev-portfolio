'use client'; // 클라이언트 컴포넌트 선언 (Hooks 사용 필수)

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

// 로그 데이터 타입 정의
export type LogEntry = {
  time: number; // 영상의 몇 초에 나올지
  text: string; // 로그 내용
  type: 'info' | 'success' | 'error' | 'warning'; // 로그 색상 결정
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  videoSrc?: string; // 영상 경로 (public 폴더 기준)
  logs: LogEntry[]; // 실행될 로그 시나리오
}

export default function ProjectCard({ title, description, tags, videoSrc, logs }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<LogEntry[]>([]);

  // 영상 시간 업데이트 될 때마다 실행
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      // 현재 시간보다 이전에 설정된 로그들만 필터링해서 보여줌
      const activeLogs = logs.filter((log) => log.time <= currentTime);
      setCurrentLogs(activeLogs);
    }
  };

  // 로그가 추가될 때마다 스크롤을 맨 아래로 내림
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentLogs]);

  // 영상 재생/일시정지 토글
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // 영상 다시 시작
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setCurrentLogs([]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start group">
      
      {/* 1. 왼쪽: 폰 프레임 & 영상 플레이어 */}
      <div className="relative mx-auto lg:mx-0">
        {/* Phone Frame (CSS로 만든 폰 테두리) */}
        <div className="relative border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl overflow-hidden ring-1 ring-slate-700/50">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
          
          {/* Video Screen */}
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
                영상 파일이<br/>없습니다.
              </div>
            )}

            {/* Play Button Overlay (일시정지 상태일 때만 보임) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer" onClick={togglePlay}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <Play className="fill-white text-white ml-1" size={32} />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* 컨트롤 버튼들 */}
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={togglePlay} className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={handleReplay} className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* 2. 오른쪽: 프로젝트 설명 & 실시간 터미널 */}
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-slate-100 mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* Live Terminal */}
        <div className="bg-slate-950 rounded-lg border border-slate-800 shadow-inner overflow-hidden flex flex-col h-[300px]">
          {/* Terminal Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-slate-900 border-b border-slate-800">
            <span className="text-xs text-slate-500 font-mono">Output - Debug Console</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>
          </div>
          
          {/* Log Area */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {currentLogs.length === 0 && (
              <span className="text-slate-600 italic">Waiting for application start...</span>
            )}
            
            {currentLogs.map((log, index) => (
              <div key={index} className="break-all animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="opacity-50 mr-2 text-[10px]">{`[00:0${Math.floor(log.time)}]`}</span>
                {log.type === 'info' && <span className="text-blue-400 font-bold mr-2">[INFO]</span>}
                {log.type === 'success' && <span className="text-green-400 font-bold mr-2">[OK]</span>}
                {log.type === 'error' && <span className="text-red-400 font-bold mr-2">[ERR]</span>}
                {log.type === 'warning' && <span className="text-yellow-400 font-bold mr-2">[WARN]</span>}
                <span className="text-slate-300">{log.text}</span>
              </div>
            ))}
            {isPlaying && <div className="text-green-500 animate-pulse">_</div>}
          </div>
        </div>
      </div>
    </div>
  );
}