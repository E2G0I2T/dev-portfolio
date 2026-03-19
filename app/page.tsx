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
  Play,
  X,
  Star,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import ProjectCard, { LogEntry } from "../components/ProjectCard";

interface ProjectData {
  id: number;
  type: "android" | "react";
  filename: string;
  title: string;
  tags: string[];
  videoSrc: string;
  summary: string;
  specs: string[];
  logs: LogEntry[];
  featured?: boolean;
}

const PROJECTS: ProjectData[] = [
  {
    id: 0,
    type: "android",
    filename: "moji_jlpt.kt",
    title: "MOJI - JLPT 단어장",
    tags: ["Android", "Kotlin", "Jetpack Compose", "SQLite", "AdMob"],
    videoSrc: "/videos/demo1.mp4",
    summary:
      "JLPT N1~N5 급수별 필수 단어를 효율적으로 암기할 수 있는 안드로이드 네이티브 앱입니다.",
    specs: [
      "외부 라이브러리 없이 Android 내장 SQLite를 직접 활용하여 최적화된 데이터 관리",
      "학습 효율 극대화를 위한 '단어/뜻 가리기(Masking)' 및 필터링 기능 구현",
      "하트 시스템이 적용된 서바이벌 방식의 퀴즈 모드로 게이미피케이션 요소 도입",
      "Google AdMob 전면 광고 연동을 통한 인앱 수익화 모델 구축",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "D/App: onCreate // 앱 실행 및 DB Helper 인스턴스 초기화",
      },
      {
        time: 0.6,
        type: "success",
        text: "I/SQLite: DB Opened // 데이터베이스 파일 로드",
      },
      {
        time: 5.8,
        type: "info",
        text: "D/SQLite: Exec SQL // 암기 상태 변경 (id=1 -> Checked)",
      },
      {
        time: 6.6,
        type: "info",
        text: "D/SQLite: Exec SQL // 암기 상태 변경 (id=2 -> Checked)",
      },
      {
        time: 7,
        type: "info",
        text: "D/SQLite: Exec SQL // 암기 상태 변경 (id=3 -> Checked)",
      },
      {
        time: 12,
        type: "info",
        text: 'D/Search: Input "의미" // 검색어 입력 감지 및 디바운싱',
      },
      {
        time: 12.5,
        type: "success",
        text: 'D/SQLite: Raw Query // "SELECT * FROM words WHERE meaning LIKE ?" 실행',
      },
      {
        time: 18,
        type: "info",
        text: "I/Filter: Select Level // 학습 난이도 변경 (N5 -> N4 테이블 로드)",
      },
      {
        time: 21,
        type: "info",
        text: "I/Filter: Select Level // 학습 난이도 변경 (N4 -> N5 테이블 로드)",
      },
      {
        time: 24.5,
        type: "info",
        text: 'I/Filter: Show "Known" // "아는 단어(Checked)" 필터링 쿼리 실행',
      },
      {
        time: 26.5,
        type: "info",
        text: 'I/Filter: Show "Unknown" // "모르는 단어(Unchecked)" 필터링 쿼리 실행',
      },
      {
        time: 29,
        type: "info",
        text: 'I/Filter: Show "All" // 필터 해제 및 전체 리스트 조회',
      },
      {
        time: 30.5,
        type: "info",
        text: "D/UI: Toggle Meaning // 암기 모드: 단어 뜻 가리기(Visibility: Gone)",
      },
      {
        time: 43.5,
        type: "info",
        text: "I/Nav: QuizFragment // 퀴즈 설정 화면으로 네비게이션 이동",
      },
      {
        time: 46,
        type: "info",
        text: "I/Game: Start Mode // N5 단어 맞추기 게임 시작 (Life: 3)",
      },
      {
        time: 49,
        type: "success",
        text: 'D/Logic: Answer Correct // Q1 정답 "年" 확인',
      },
      {
        time: 52.5,
        type: "warning",
        text: "W/Logic: Answer Wrong // Q2 오답 제출 -> 하트 감소 (Life: 2)",
      },
      {
        time: 60.5,
        type: "info",
        text: "D/Game: Next Question // 다음 문제 로드 (Mode: Word)",
      },
      {
        time: 69.5,
        type: "error",
        text: "I/Game: GameOver // 라이프 소진으로 게임 종료 트리거",
      },
      {
        time: 70.5,
        type: "info",
        text: "I/AdMob: Request Ad // 보상형/전면 광고 요청",
      },
      {
        time: 71,
        type: "success",
        text: "I/AdMob: Show Ad // 구글 애드몹 광고 오버레이 출력",
      },
      {
        time: 72.5,
        type: "info",
        text: "I/Game: Reward User // 광고 시청 보상 지급 (Life +1)",
      },
      {
        time: 74.5,
        type: "info",
        text: "I/Nav: QuizFragment // 퀴즈 메인 화면으로 복귀",
      },
      {
        time: 75.5,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
  },
  {
    id: 1,
    type: "react",
    filename: "todo_manager.tsx",
    title: "스마트 투두 & 체크리스트",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "AsyncStorage"],
    videoSrc: "/videos/demo2.mp4",
    summary:
      "체계적인 일정 관리와 체크리스트 작성을 지원하는 크로스 플랫폼 생산성 앱입니다.",
    specs: [
      "React Native 기반으로 개발하여 iOS/Android 동시 지원 및 다크 모드 UI 적용",
      "Redux Toolkit을 활용한 '할 일'과 '체크리스트' 탭의 전역 상태 관리",
      "날짜/시간 피커를 통한 상세 일정 등록 및 상태별(To-do/Done) 필터링 구현",
      "AsyncStorage를 활용한 데이터 로컬 캐싱 및 그룹형 체크리스트 기능",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "[Metro] Bundle Loaded // 앱 초기 구동 및 번들 로딩 완료",
      },
      {
        time: 4.2,
        type: "info",
        text: "[UI] Press FAB // 할 일 추가 모달 열기",
      },
      {
        time: 10,
        type: "success",
        text: "[Redux] ADD_TODO // 새로운 일정 스토어에 추가 (ID: 1)",
      },
      {
        time: 10.5,
        type: "success",
        text: "[Storage] Save Success // 로컬 저장소 동기화",
      },
      {
        time: 20,
        type: "success",
        text: "[Redux] ADD_TODO // 두 번째 일정 스토어에 추가 (ID: 2)",
      },
      {
        time: 23,
        type: "info",
        text: '[Touch] Checkbox // "Meeting" 항목 완료 처리 (Status: Done)',
      },
      {
        time: 24,
        type: "info",
        text: '[Filter] Tab: "To-do" // 미완료 일정만 보기 필터 적용',
      },
      {
        time: 25.5,
        type: "info",
        text: '[Filter] Tab: "Done" // 완료된 일정만 보기 필터 적용',
      },
      {
        time: 27,
        type: "info",
        text: '[Filter] Tab: "All" // 전체 일정 보기 필터 적용',
      },
      {
        time: 29,
        type: "info",
        text: '[UI] Edit Item // "Hotel reservation" 수정 모드 진입',
      },
      {
        time: 36.5,
        type: "success",
        text: "[Redux] UPDATE_TODO // 일정 정보 업데이트 완료",
      },
      {
        time: 39.5,
        type: "success",
        text: "[Redux] DELETE_TODO // 일정 정보 삭제 (ID: 1)",
      },
      {
        time: 40.5,
        type: "success",
        text: "[Redux] DELETE_TODO // 일정 정보 삭제 (ID: 2)",
      },
      {
        time: 41.5,
        type: "info",
        text: "[Nav] Tab: CheckList // 하단 탭 전환 (To-do -> Checklist)",
      },
      {
        time: 43.5,
        type: "info",
        text: "[UI] Press FAB // 새 체크리스트 그룹 생성 모달 열기",
      },
      {
        time: 51.5,
        type: "success",
        text: "[DB] Create List // 새 체크리스트 그룹 생성 완료",
      },
      {
        time: 53.5,
        type: "info",
        text: '[Nav] Push Detail // "Shopping list" 상세 화면 진입',
      },
      {
        time: 63.5,
        type: "info",
        text: '[List] Add Item // 체크리스트 항목 "Keyboard"',
      },
      {
        time: 69.5,
        type: "info",
        text: '[List] Add Item // 체크리스트 항목 "Ramen"',
      },
      {
        time: 75.5,
        type: "info",
        text: '[List] Add Item // 체크리스트 항목 "Brush"',
      },
      {
        time: 80,
        type: "success",
        text: '[Redux] DELETE_ITEM // 체크리스트 항목 삭제 "keyboard"',
      },
      {
        time: 80.5,
        type: "success",
        text: '[Redux] DELETE_ITEM // 체크리스트 항목 삭제 "Ramen"',
      },
      {
        time: 82.5,
        type: "info",
        text: '[UI] Edit Item // "Brush" 항목 수정 모드 진입',
      },
      {
        time: 90,
        type: "info",
        text: '[List] Update Item // "Brush" -> "Coffee cup" 내용 수정',
      },
      {
        time: 95,
        type: "info",
        text: "[UI] Edit List Name // 상단 리스트 이름 수정 모드 진입",
      },
      {
        time: 99,
        type: "success",
        text: '[DB] Rename List // 리스트 이름 변경 ("Shopping list 2")',
      },
      {
        time: 101,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
  },
  {
    id: 2,
    type: "react",
    filename: "halo_music.tsx",
    title: "Halo - 일본 음악 아카이브",
    tags: ["React Native", "Firebase", "Google Auth", "Context API"],
    videoSrc: "/videos/demo3.mp4",
    summary:
      "개인 취향을 분석하여 일본 음악을 추천하고 기록하는 아카이빙 서비스입니다.",
      featured : true,
    specs: [
      "Firebase Auth 연동으로 안전한 Google 소셜 로그인 구현",
      "Firestore 기반 평점/즐겨찾기 데이터 실시간 동기화",
      "Context API를 활용한 끊김 없는 다크 모드 테마 전환",
      "복합 필터링(별점순/랜덤) 및 실시간 검색 알고리즘 최적화",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "[App] Splash Mounted // 앱 초기 실행 및 리소스 로딩",
      },
      {
        time: 2.5,
        type: "warning",
        text: "[Auth] Check Session // 사용자 로그인 세션 확인 (null -> 로그인 필요)",
      },
      {
        time: 3.5,
        type: "success",
        text: "[Auth] Google Sign-In // 구글 소셜 로그인 요청",
      },
      {
        time: 8,
        type: "success",
        text: "[Auth] Google Sign-In // 구글 소셜 로그인 토큰 획득 성공",
      },
      {
        time: 9,
        type: "info",
        text: "[Firestore] Fetch Songs // 파이어베이스 클라우드 스토어 데이터 동기화",
      },
      {
        time: 11,
        type: "success",
        text: "[Data] Load Complete // 곡 데이터 로드 및 리스트 렌더링",
      },
      {
        time: 17,
        type: "success",
        text: "[Data] Data Update // 별점 데이터 업데이트 확인",
      },
      {
        time: 26.5,
        type: "info",
        text: '[Search] Input: "겉모습" // "겉모습" 키워드 검색',
      },
      {
        time: 26.5,
        type: "info",
        text: "[List] Filter Data // 검색 결과 리스트 필터링 (1건)",
      },
      {
        time: 35.5,
        type: "success",
        text: "[Data] Data Update // 즐겨찾기 데이터 업데이트 확인",
      },
      {
        time: 36.5,
        type: "info",
        text: "[Nav] Load Complete // 즐겨찾기 탭 이동 및 렌더링 완료",
      },
      {
        time: 40.5,
        type: "info",
        text: '[Nav] Push Detail // "겉모습" 상세 화면 이동',
      },
      {
        time: 41.5,
        type: "success",
        text: '[API] Youtube Load // "겉모습" 유튜브 영상 로드 및 재생',
      },
      {
        time: 44,
        type: "success",
        text: "[Data] Data Update // 별점 데이터 업데이트 확인",
      },
      {
        time: 50,
        type: "info",
        text: '[Filter] Mode: Rated // "별점 있음"만 모아보기 필터 활성화',
      },
      {
        time: 51,
        type: "info",
        text: '[Filter] Mode: UnRated // "별점 없음"만 모아보기 필터 활성화',
      },
      {
        time: 59,
        type: "success",
        text: '[Data] Data Update // 별점 데이터 업데이트 확인 "올 나이트 라디오"',
      },
      {
        time: 63,
        type: "info",
        text: "[Firestore] Tab: refresh // 새로고침 버튼 클릭, Firebase에서 별점 계산...",
      },
      {
        time: 66.5,
        type: "success",
        text: "[Firestore] refresh done // 별점 계산 완료",
      },
      {
        time: 66.5,
        type: "success",
        text: "[UI] UI refresh // UI 새로고침 완료, 리스트 재정렬",
      },
      {
        time: 78.5,
        type: "info",
        text: "[Nav] Load Complete // 설정 탭 이동 및 렌더링 완료",
      },
      {
        time: 78.5,
        type: "info",
        text: "[API] Check Server // 서버 연결 상태 확인",
      },
      {
        time: 83.5,
        type: "info",
        text: "[Theme] Dark -> Light // 전역 테마 컨텍스트 변경 (다크 -> 라이트 모드)",
      },
      {
        time: 90,
        type: "warning",
        text: "[Auth] Sign Out // 로그아웃 버튼 클릭 (확인 팝업)",
      },
      {
        time: 91,
        type: "info",
        text: "[Auth] Clear Session // 사용자 세션 초기화",
      },
      {
        time: 92,
        type: "success",
        text: "[Nav] Reset Stack // 네비게이션 스택 초기화 및 로그인 화면 복귀",
      },
      {
        time: 92.5,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
  },
  {
    id: 3,
    type: "android",
    filename: "my_gallag.kt",
    title: "My Gallag - 슈팅 게임",
    tags: ["Android", "Kotlin", "Canvas API", "Game Dev", "OOP"],
    videoSrc: "/videos/demo4.mp4",
    summary:
      "추억의 갤러그를 현대적인 감각으로 재해석한 안드로이드 네이티브 슈팅 게임입니다.",
    specs: [
      "Android SurfaceView와 Canvas API를 활용하여 고성능 2D 그래픽 렌더링 구현",
      "객체 지향 프로그래밍(OOP) 설계를 통해 비행체, 적, 아이템 클래스 모듈화",
      "터치 이벤트를 활용한 부드러운 기체 조작감 및 실시간 충돌 감지 로직",
      "아이템 획득 시 무기 강화(Blue Beam) 및 스테이지별 적 패턴 알고리즘 적용",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "D/GameSurface: SurfaceCreated // 게임 루프 스레드 시작",
      },
      {
        time: 2,
        type: "info",
        text: "I/Input: Select Character // 플레이어 기체 선택 (Index: 4 - Yellow)",
      },
      {
        time: 4,
        type: "success",
        text: "D/GameManager: Start Game // 레벨 1 데이터 로드 및 적 객체 초기화",
      },
      {
        time: 11,
        type: "info",
        text: "D/Spawner: Spawn Wave // 적 비행체 패턴 생성 (Formation: Grid)",
      },
      {
        time: 12,
        type: "info",
        text: "I/Player: Fire Laser // 기본 무기 발사 이벤트 감지",
      },
      {
        time: 18,
        type: "info",
        text: "D/Item: Spawn PowerUp // 강화 아이템(Lightning) 드롭",
      },
      {
        time: 19,
        type: "success",
        text: "I/Player: Item Collected // 아이템 획득 -> 무기 레벨업 (Blue Beam Mode)",
      },
      {
        time: 30,
        type: "info",
        text: "D/GameLoop: Garbage Collection // 화면 밖으로 나간 객체 메모리 해제",
      },
      {
        time: 40,
        type: "warning",
        text: "W/Enemy: Pattern Change // 적 공격 속도 1.5배 증가",
      },
      {
        time: 50,
        type: "error",
        text: "W/Collision: Player Hit // 충돌 감지! (HP: 0)",
      },
      {
        time: 54,
        type: "info",
        text: "I/UI: Show GameOver // 게임 오버 팝업 출력 (Score: 22)",
      },
      {
        time: 56,
        type: "info",
        text: "D/GameManager: Session End // 게임 종료",
      },
    ],
  },
  {
    id: 4,
    type: "android",
    filename: "droid_insight.kt",
    title: "DroidInsight - 시스템 모니터",
    tags: ["Android", "Kotlin", "TrafficStats", "UsageStats", "MPAndroidChart"],
    videoSrc: "/videos/demo5.mp4",
    summary:
      "디바이스의 하드웨어 정보, 네트워크 트래픽, 앱 사용 패턴을 심층 분석하여 시각화하는 시스템 유틸리티 앱입니다.",
      featured : true,
    specs: [
      "TrafficStats API를 활용한 실시간 네트워크 업/다운로드 속도 모니터링 및 그래프 시각화",
      "UsageStatsManager를 통해 일별 앱 사용 시간을 추적하고 상위 앱 통계 제공",
      "BroadcastReceiver를 등록하여 배터리 온도, 전압, 상태 변화를 실시간 감지",
      "커스텀 권한 처리 로직을 통해 보안 설정으로의 자연스러운 UX 유도",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "D/App: onCreate // 앱 실행 및 대시보드 초기화",
      },
      {
        time: 1,
        type: "success",
        text: "I/System: Fetch Device Info // 현재 기기 상태 로드",
      },
      {
        time: 9,
        type: "info",
        text: "I/Nav: Fragment Change // 네트워크 모니터링 탭으로 이동",
      },
      {
        time: 9.1,
        type: "info",
        text: "D/Network: Start Monitoring // TrafficStats 실시간 패킷 감지 시작",
      },
      {
        time: 17,
        type: "warning",
        text: "I/Test: Start Speed Check // 네트워크 속도 벤치마크 트리거",
      },
      {
        time: 42.5,
        type: "success",
        text: "S/Test: Result Updated // 다운로드 속도 측정 종료",
      },
      {
        time: 45,
        type: "info",
        text: "I/Nav: Fragment Change // 앱 사용 통계 탭으로 이동",
      },
      {
        time: 45.1,
        type: "error",
        text: "W/Auth: Permission Denied // '사용 정보 접근' 권한 없음 감지",
      },
      {
        time: 47.5,
        type: "info",
        text: "I/Auth: Request Intent // 시스템 설정 화면으로 리다이렉트",
      },
      {
        time: 56,
        type: "success",
        text: "S/Auth: Permission Granted // 권한 승인",
      },
      {
        time: 57,
        type: "success",
        text: "D/Usage: Load Stats // 지난 24시간 앱 사용 데이터 로드 및 차트 렌더링",
      },
      {
        time: 68,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 로드",
      },
      {
        time: 72,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 탭 변경 (Battery -> RAM usage)",
      },
      {
        time: 73,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 새로고침 (변경값 없음)",
      },
      {
        time: 75,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 탭 변경 (RAM usage -> Battery)",
      },
      {
        time: 75,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 탭 변경 (Battery -> RAM usage)",
      },
      {
        time: 76,
        type: "success",
        text: "D/Usage: Load Stats // 위젯 새로고침 (변경값 : 64 -> 66",
      },
      {
        time: 86,
        type: "success",
        text: "D/Usage: Load Stats // 기본 테마 변경 감지 : Light Theme",
      },
      {
        time: 92,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
  },
];

export default function Home() {
  const [typedCommand, setTypedCommand] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  const [contactLogs, setContactLogs] = useState<string[]>([]);
  const [isContactRunning, setIsContactRunning] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"All" | "Android" | "React">(
    "All",
  );
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  // ★ 추가 2: 필터링 로직
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Android") return project.type === "android";
    if (activeFilter === "React") return project.type === "react";
    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const normalProjects = filteredProjects.filter((p) => !p.featured);

  // ★ 추가 3: 모달 팝업 시 배경 스크롤 방지
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

  const handleContactExecute = () => {
    if (isContactRunning) return;
    setIsContactRunning(true);
    setContactLogs(["> ./send_email.sh"]);

    const emailAddress = "l62557411@gmail.com";

    const steps = [
      { text: "> Initializing mail client...", delay: 800 },
      { text: "> Resolving recipient address...", delay: 1600 },
      { text: `> Target: ${emailAddress}`, delay: 2400 },
      { text: "> Opening default mail app...", delay: 3200 },
    ];

    steps.forEach(({ text, delay }) => {
      setTimeout(() => {
        setContactLogs((prev) => [...prev, text]);
      }, delay);
    });

    setTimeout(() => {
      setIsContactRunning(false);
      window.location.href = `mailto:${emailAddress}?subject=Hello Developer&body=I saw your portfolio...`;
    }, 4000);
  };

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
              <span className="animate-pulse inline-block w-2.5 h-5 bg-green-400 ml-1 align-middle"></span>
            </div>

            <div
              className={`transition-opacity duration-1000 ${
                showResult ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 tracking-tight mt-4">
                Hello, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Lee Ji Hyung
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mt-4">
                &gt; Mobile App Developer specializing in{" "}
                <span className="whitespace-nowrap">
                  <span className="text-cyan-400">React Native</span> &amp;{" "}
                  <span className="text-orange-400">Android</span>.
                </span>
                <br />
                &gt; Building bridges between code and user experience.
              </p>
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
                <span>13</span>
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
                {["All", "Android", "React"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter as "All" | "Android" | "React")}
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

            {/* Featured Projects (주력) */}
            {featuredProjects.length > 0 && (
              <div className="mb-16">
                <h3 className="text-sm font-mono text-slate-500 mb-6 flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" /> FEATURED_PROJECTS
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
                            {project.type === "android" ? <Smartphone size={24} /> : <Layout size={24} />}
                          </div>
                          <h4 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <p className="text-slate-400 mb-6 line-clamp-2">{project.summary}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-slate-300 rounded border border-slate-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-blue-400 font-mono group-hover:translate-x-2 transition-transform">
                          자세히 보기 <ChevronRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Normal Projects (서브/바둑판) */}
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
                        <ChevronRight size={18} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white">{project.title}</h4>
                      <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-3">{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs font-mono text-slate-400">
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

            <div className="space-y-2 mb-6 min-h-[100px]">
              <div className="text-slate-300">
                <span className="text-green-400">user@portfolio:~$</span>
                {contactLogs.length > 0 ? " ./send_email.sh" : ""}
                {contactLogs.length === 0 && (
                  <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 ml-1 align-middle"></span>
                )}
              </div>

              {contactLogs.map((log, index) => (
                <div
                  key={index}
                  className="text-slate-400 animate-in fade-in slide-in-from-left-1 duration-300"
                >
                  {log.startsWith(">") ? log : `> ${log}`}
                </div>
              ))}

              {isContactRunning && (
                <div className="text-slate-300">
                  <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle"></span>
                </div>
              )}
            </div>

            {!isContactRunning && (
              <button
                onClick={handleContactExecute}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-500/30 hover:border-purple-500 rounded transition-all group"
              >
                <Play
                  size={16}
                  className="group-hover:fill-purple-300 transition-colors"
                />
                <span>Execute: Send Email</span>
              </button>
            )}

            <p className="mt-8 text-slate-600 text-xs border-t border-slate-800 pt-4">
              &copy; 2026 Dev Portfolio. Process finished with exit code 0.
            </p>
          </div>
        </footer>
      </main>
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
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
                logs={selectedProject.logs}
                projectType={selectedProject.type}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
