import React from 'react';
import { Terminal, Smartphone, FileCode, Mail } from 'lucide-react';
import Link from 'next/link';
import ProjectCard, { LogEntry } from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-mono selection:bg-green-900 selection:text-green-100">
      
      {/* 1. Header: VS Code 탭 스타일 */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-1 overflow-x-auto">
          {/* Home Tab */}
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-blue-400 border-t-2 border-blue-500 text-sm min-w-fit cursor-default">
            <Terminal size={14} />
            <span>~/portfolio</span>
          </div>
          
          {/* Menu Tabs (Link 컴포넌트로 변경) */}
          <Link href="#about" className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit">
            <FileCode size={14} className="text-yellow-400" />
            <span>_about.json</span>
          </Link>
          <Link href="#projects" className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit">
            <Smartphone size={14} className="text-green-400" />
            <span>projects.tsx</span>
          </Link>
          <Link href="#contact" className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors text-sm min-w-fit">
            <Mail size={14} className="text-purple-400" />
            <span>contact.sh</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 space-y-32">
        
        {/* 2. Hero Section: 터미널 타이핑 효과 */}
        <section className="space-y-6">
          <div className="p-2 bg-slate-900 rounded-t-lg border border-slate-800 w-fit flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="border-l-2 border-slate-800 pl-6 py-2 space-y-4">
            <div className="text-green-400 text-lg sm:text-2xl">
              <span className="text-blue-400 mr-2">➜</span>
              <span className="text-purple-400 mr-2">~</span>
              whoami
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 tracking-tight">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Dev.Dotori</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              &gt; Mobile App Developer specializing in <span className="text-cyan-400">React Native</span> &amp; <span className="text-orange-400">Android</span>.
              <br/>
              &gt; Building bridges between code and user experience.
            </p>
          </div>
        </section>

        {/* 3. About Section: JSON Config 스타일 */}
        <section id="about" className="pt-10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-yellow-400">
            <span className="text-slate-600">01.</span> _about.json
          </h2>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl overflow-x-auto">
            {/* JSON 코드 블록: 특수문자 에러 방지를 위해 &quot; 사용 */}
            <pre className="text-sm sm:text-base leading-relaxed font-mono">
              <code className="block">
                <span className="text-yellow-600">{`{`}</span>
                <br />
                &nbsp;&nbsp;<span className="text-red-400">&quot;name&quot;</span>: <span className="text-green-400">&quot;Your Name&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-red-400">&quot;role&quot;</span>: <span className="text-green-400">&quot;Mobile Developer&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-red-400">&quot;skills&quot;</span>: <span className="text-yellow-600">{`{`}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&quot;core&quot;</span>: [<span className="text-green-400">&quot;React Native&quot;</span>, <span className="text-green-400">&quot;Kotlin&quot;</span>, <span className="text-green-400">&quot;TypeScript&quot;</span>],
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&quot;frameworks&quot;</span>: [<span className="text-green-400">&quot;Expo&quot;</span>, <span className="text-green-400">&quot;Next.js&quot;</span>, <span className="text-green-400">&quot;Firebase&quot;</span>],
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&quot;tools&quot;</span>: [<span className="text-green-400">&quot;Git&quot;</span>, <span className="text-green-400">&quot;Android Studio&quot;</span>, <span className="text-green-400">&quot;Figma&quot;</span>]
                <br />
                &nbsp;&nbsp;<span className="text-yellow-600">{`}`}</span>
                <br />
                <span className="text-yellow-600">{`}`}</span>
              </code>
            </pre>
          </div>
        </section>

        {/* 4. Projects Section: 실제 컴포넌트 사용 */}
        <section id="projects" className="pt-20">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-2 text-green-400">
            <span className="text-slate-600">02.</span> projects.tsx
          </h2>

          <div className="space-y-32">
            
            {/* 프로젝트 1: 일본어 학습 앱 예시 */}
            <ProjectCard
              title="JLPT 단어 학습 앱"
              description="사용자의 학습 패턴을 분석하여 취약한 단어를 반복 노출하는 알고리즘을 적용했습니다. Room DB를 활용한 로컬 데이터 캐싱으로 오프라인 모드를 지원하며, UI/UX는 Jetpack Compose로 구현하여 네이티브 성능을 극대화했습니다."
              tags={["Android", "Kotlin", "Jetpack Compose", "RoomDB"]}
              // videoSrc="/videos/demo1.mp4" (나중에 public 폴더에 영상 넣고 주석 해제하세요)
              logs={[
                { time: 0, type: 'info', text: 'Application process started (PID: 1452)' },
                { time: 1, type: 'info', text: 'Initializing Room Database...' },
                { time: 1.5, type: 'success', text: 'Database connected successfully.' },
                { time: 2.5, type: 'info', text: 'Loading vocabulary list from local storage' },
                { time: 3, type: 'success', text: 'Loaded 2,500 words in 45ms' },
                { time: 5, type: 'warning', text: 'Network unreachable. Switching to OFFLINE mode.' },
                { time: 7, type: 'info', text: 'User interaction: Quiz Started' },
              ]}
            />

            {/* 프로젝트 2: 리액트 네이티브 앱 예시 */}
            <ProjectCard
              title="Japanese Songs Playlist"
              description="YouTube Data API를 활용하여 일본 음악을 수집하고 추천하는 앱입니다. React Native와 TypeScript를 사용하여 크로스 플랫폼을 지원하며, Firebase Analytics를 연동하여 사용자 이탈률을 15% 개선했습니다."
              tags={["React Native", "TypeScript", "Redux", "Firebase"]}
              // videoSrc="/videos/demo2.mp4" 
              logs={[
                { time: 0, type: 'info', text: 'Starting Metro Bundler on port 8081...' },
                { time: 1, type: 'success', text: 'Bundle 100% loaded.' },
                { time: 2, type: 'info', text: 'Fetching video data from YouTube API...' },
                { time: 4, type: 'success', text: 'Received 50 items. Status: 200 OK' },
                { time: 5, type: 'info', text: 'Rendering PlaylistComponent...' },
                { time: 7, type: 'info', text: 'Navigation: -> DetailScreen' },
              ]}
            />

          </div>
        </section>

        {/* 5. Footer: Shell Prompt */}
        <footer id="contact" className="pb-20 pt-10">
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-400">
            <span className="text-slate-600">03.</span> contact.sh
          </h2>
          <div className="border-t-2 border-slate-800 pt-8">
            <p className="mb-4 text-lg">
              <span className="text-green-400">user@portfolio:~$</span> ./send_email.sh
            </p>
            <a href="mailto:your-email@example.com" className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors">
              Execute: Send Email
            </a>
            <p className="mt-12 text-slate-600 text-sm">
              &copy; 2025 Dev Portfolio. Process finished with exit code 0.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}