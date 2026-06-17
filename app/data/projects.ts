import type { LogEntry } from "../../components/ProjectCard";

export interface ProjectData {
  id: number;
  type: "android" | "react" | "sync" | "flutter";
  filename: string;
  title: string;
  tags: string[];
  videoSrc: string;
  webVideoSrc?: string;
  summary: string;
  specs: string[];
  logs: LogEntry[];
  webLogs?: LogEntry[];
  featured?: boolean;
  githubUrl?: string | { label: string; url: string }[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 0,
    type: "android",
    filename: "moji_jlpt.kt",
    title: "MOJI - JLPT 단어장",
    githubUrl: "https://github.com/E2G0I2T/JLPT",
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
    githubUrl: "https://github.com/E2G0I2T/my-todo-app",
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
    githubUrl: "https://github.com/E2G0I2T/Halo",
    tags: ["React Native", "Firebase", "Google Auth", "Context API"],
    videoSrc: "/videos/demo3.mp4",
    summary:
      "개인 취향을 분석하여 일본 음악을 추천하고 기록하는 아카이빙 서비스입니다.",
    featured: true,
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
    githubUrl: "https://github.com/E2G0I2T/gallag-game",
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
    githubUrl: "https://github.com/E2G0I2T/DroidInsight",
    tags: ["Android", "Kotlin", "TrafficStats", "UsageStats", "MPAndroidChart"],
    videoSrc: "/videos/demo5.mp4",
    summary:
      "디바이스의 하드웨어 정보, 네트워크 트래픽, 앱 사용 패턴을 심층 분석하여 시각화하는 시스템 유틸리티 앱입니다.",
    featured: true,
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
  {
    id: 5,
    type: "react",
    filename: "StageMap.tsx",
    title: "StageMap - 종합 공연 큐레이션",
    githubUrl: "https://github.com/E2G0I2T/ShowMap",
    tags: ["React Native", "TypeScript", "React Native Web", "Cross-Platform"],
    videoSrc: "/videos/demo6.mp4",
    webVideoSrc: "/videos/demo7.mp4",
    summary:
      "단일 코드베이스(React Native)로 모바일 앱과 데스크탑 웹 브라우저 환경을 동시에 완벽하게 지원하는 크로스 플랫폼 종합 공연 큐레이션 서비스입니다.",
    featured: true,
    specs: [
      "React Native Web을 도입하여 하나의 코드로 모바일(Android/iOS)과 웹(Web) 환경을 동시 타겟팅하는 효율적인 프론트엔드 아키텍처 설계",
      "플랫폼별 화면 비율(세로/가로)과 조작 방식(Touch vs Mouse Event)의 차이를 감지하여 자연스럽게 대응하는 동적 반응형 UI/UX 구현",
      "공연 데이터 API를 연동하고 장르, 지역, 날짜 등 다중 조건이 결합된 복합 필터링 및 검색 알고리즘 최적화",
      "구동 환경(Web/Mobile)에 따라 외부 지도 API(Google Maps/iFrame) 및 예매처 라우팅 방식을 분기 처리하여 끊김 없는 사용자 경험 제공",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "I/App: Fetch List // 초기 공연 데이터 목록 로드 완료",
      },
      {
        time: 8.2,
        type: "info",
        text: "D/Filter: Apply // 장르 필터 적용 (전체 -> 뮤지컬)",
      },
      {
        time: 12.2,
        type: "info",
        text: "D/Filter: Apply // 지역 필터 적용 (전체 -> 서울)",
      },
      {
        time: 17.2,
        type: "info",
        text: "D/Sort: Change // 정렬 기준 변경 (날짜 오름차순 -> 내림차순)",
      },
      {
        time: 20,
        type: "info",
        text: "D/UI: DatePicker // 공연 기간 설정 모달 오픈",
      },
      {
        time: 26,
        type: "success",
        text: "I/Filter: Set Range // 기간 필터 적용 완료 (03.20 ~ 03.27)",
      },
      {
        time: 33.7,
        type: "info",
        text: 'D/Search: Input // 검색어 입력 감지: "라스트"',
      },
      {
        time: 34,
        type: "success",
        text: "S/Search: Result // 검색 및 필터링 결과 업데이트 (1건)",
      },
      {
        time: 38,
        type: "info",
        text: "I/Nav: Push Detail // '더 라스트맨' 상세 정보 화면 진입",
      },
      {
        time: 40,
        type: "success",
        text: "D/Map: Load Marker // 공연장 위치(링크더스페이스) 구글 맵 마커 로드",
      },
      {
        time: 46,
        type: "info",
        text: "I/UI: BottomSheet // 예매처 선택 바텀시트 호출",
      },
      {
        time: 48,
        type: "warning",
        text: "W/Intent: Open Browser // 외부 예매처 웹사이트 호출 (YES24)",
      },
      {
        time: 60,
        type: "info",
        text: "I/Nav: Pop Back // 앱 상세 화면으로 복귀",
      },
      {
        time: 63,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
    webLogs: [
      {
        time: 0,
        type: "info",
        text: "I/Web: Fetch List // (Web) 초기 공연 데이터 목록 로드 완료",
      },
      {
        time: 3.5,
        type: "info",
        text: "D/Filter: Dropdown // 장르 드롭다운 선택 (전체 -> 뮤지컬)",
      },
      {
        time: 6.4,
        type: "info",
        text: "D/Filter: Dropdown // 지역 드롭다운 선택 (전체 -> 서울)",
      },
      {
        time: 10,
        type: "info",
        text: "D/Sort: Dropdown // 정렬 기준 변경 (날짜 오름차순 -> 내림차순)",
      },
      {
        time: 12,
        type: "info",
        text: "D/UI: DatePicker // (Web) 공연 기간 설정 팝업 마우스 오버 및 오픈",
      },
      {
        time: 18.5,
        type: "success",
        text: "I/Filter: Set Range // 기간 필터 적용 완료 (03.21 ~ 03.23)",
      },
      {
        time: 23,
        type: "info",
        text: "D/Search: KeyDown // 검색창 포커스 및 검색어 입력 대기",
      },
      {
        time: 25,
        type: "success",
        text: "S/Search: Result // 검색 및 필터링 결과 업데이트 (1건 렌더링)",
      },
      {
        time: 26.5,
        type: "info",
        text: "I/Nav: Link Click // '오! 캐롤' 리스트 아이템 클릭 -> 상세 정보 페이지 이동",
      },
      {
        time: 29,
        type: "success",
        text: "D/Map: iFrame Load // 공연장 위치 구글 맵 웹 컴포넌트 로드",
      },
      {
        time: 32,
        type: "info",
        text: "I/UI: Modal // 하단 예매처 선택 모달창 호출",
      },
      {
        time: 35,
        type: "warning",
        text: "W/Route: New Tab // 외부 예매처 웹사이트(인터파크 티켓) 새 탭으로 열기",
      },
      {
        time: 40,
        type: "info",
        text: "I/Nav: Tab Focus // 기존 앱 탭으로 브라우저 포커스 복귀",
      },
      {
        time: 43,
        type: "info",
        text: "I/Web: Session End // --- 웹 디버그 세션 종료 ---",
      },
    ],
  },
  {
    id: 6,
    type: "sync",
    filename: "syncflow.tsx",
    title: "SyncFlow - 실시간 칸반 보드",
    githubUrl: [
      { label: "Web (React)", url: "https://github.com/E2G0I2T/syncflow-web" },
      { label: "App (RN)", url: "https://github.com/E2G0I2T/syncflowapp" },
      { label: "API (Spring)", url: "https://github.com/E2G0I2T/syncflow-api" },
      {
        label: "Socket (Express)",
        url: "https://github.com/E2G0I2T/syncflow-realtime",
      },
    ],
    tags: [
      "React Native",
      "React",
      "Vite",
      "Spring Boot",
      "Socket.io",
      "TypeScript",
      "Zustand",
      "JWT",
    ],
    videoSrc: "/videos/demo8.mp4",
    summary:
      "React Native(모바일)와 React Vite(웹)를 Socket.io로 실시간 동기화하는 MSA 구조의 칸반 보드 앱입니다. 한 플랫폼의 카드 변경이 다른 플랫폼에 즉시 반영됩니다.",
    featured: true,
    specs: [
      "Spring Boot REST API + Express Socket.io 서버의 MSA 구조로 REST와 실시간 통신 역할 분리",
      "카드 이동 시 낙관적 업데이트(Optimistic Update)를 적용해 소켓 응답 전에 UI를 먼저 반영, 빠른 사용자 경험 제공",
      "JWT Bearer Token 인증과 Zustand 전역 상태로 웹/앱 동일한 인증 흐름 구현",
      "드래그앤드롭(@dnd-kit/웹, react-native-reanimated/앱), 카드 상세(Tiptap 리치에디터), 댓글 실시간 동기화 등 완성도 높은 협업 기능 구현",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "[Web] App Start // 웹 클라이언트 초기 렌더링",
      },
      {
        time: 3,
        type: "info",
        text: "[Web/Auth] Signup // 회원가입 폼 입력 (name: tester)",
      },
      {
        time: 8,
        type: "success",
        text: "[Web/Auth] POST /api/auth/signup // JWT 발급 성공",
      },
      {
        time: 12,
        type: "info",
        text: "[Web/Auth] Login // 로그인 완료, localStorage 토큰 저장",
      },
      {
        time: 18,
        type: "info",
        text: "[Web/Board] POST /api/boards // 보드 생성 (테스트 보드 프로젝트 123)",
      },
      {
        time: 25,
        type: "success",
        text: "[Web/Board] Load // 칸반 보드 진입, 기본 컬럼 4개 생성 확인",
      },
      {
        time: 33,
        type: "info",
        text: "[Web/Card] POST /api/boards/:id/cards // 카드 추가 (UI 디자인 제작)",
      },
      {
        time: 40,
        type: "info",
        text: "[Web/Card] POST /api/boards/:id/cards // 카드 추가 (프로젝트 코드 리뷰)",
      },
      {
        time: 47,
        type: "info",
        text: "[Web/Card] POST /api/boards/:id/cards // 카드 추가 (PrivacyPolicy 작성)",
      },
      {
        time: 55,
        type: "info",
        text: "[Web/Socket] join_board // Socket.io 보드 룸 입장",
      },
      {
        time: 58,
        type: "info",
        text: "[Web/Card] Drag & Drop // 카드 드래그 이동 (할 일 → 진행 중)",
      },
      {
        time: 62,
        type: "success",
        text: "[Web/Socket] move_card emit // 카드 이동 이벤트 발송",
      },
      {
        time: 65,
        type: "info",
        text: "[Web/Card] Dropdown // 드롭다운 메뉴 열기 → 상태 변경",
      },
      {
        time: 70,
        type: "success",
        text: "[Web/Card] PATCH /api/cards/:id/move // 카드 이동 API 호출 성공",
      },
      {
        time: 75,
        type: "info",
        text: "[Web/Card] Delete // 카드 삭제 확인 팝업 → 삭제 완료",
      },
      {
        time: 82,
        type: "info",
        text: "[Web/Card] Modal Open // 카드 상세 모달 진입 (PrivacyPolicy 작성)",
      },
      {
        time: 88,
        type: "info",
        text: "[Web/Card] Detail // 담당자(담당자 1), 시작일(05/26), 마감일(05/28) 입력",
      },
      {
        time: 95,
        type: "info",
        text: "[Web/Card] Label // 카테고리 라벨 '개발' 선택",
      },
      {
        time: 100,
        type: "info",
        text: "[Web/Card] RichEditor // Tiptap 에디터 상세 내용 입력",
      },
      {
        time: 107,
        type: "info",
        text: "[Web/Card] Comment // 댓글 '댓글입니다' 등록",
      },
      {
        time: 112,
        type: "success",
        text: "[Web/Socket] comment_added // 댓글 실시간 브로드캐스트",
      },
      {
        time: 118,
        type: "success",
        text: "[Web/Card] PUT /api/cards/:id // 카드 저장 완료",
      },
      {
        time: 123,
        type: "info",
        text: "[Web/Card] Drag & Drop // 카드 드래그 이동 (할 일 → 진행 중)",
      },
      {
        time: 130,
        type: "success",
        text: "[Web/Socket] move_card emit // 이동 이벤트 발송 성공",
      },
      {
        time: 137,
        type: "info",
        text: "[Web/Search] 🔍 // 검색창 열기, 키워드 검색",
      },
      {
        time: 143,
        type: "success",
        text: "[Web/Search] Filter // 검색 결과 필터링 완료",
      },

      { time: 150, type: "info", text: "[App] Launch // React Native 앱 실행" },
      {
        time: 155,
        type: "info",
        text: "[App/Auth] Login // 앱 로그인, AsyncStorage 토큰 저장",
      },
      {
        time: 161,
        type: "success",
        text: "[App/Board] Sync // 웹에서 생성한 보드 목록 동기화 확인",
      },
      {
        time: 165,
        type: "info",
        text: "[App/Board] Enter // 보드 진입, 웹 변경사항 반영 확인",
      },
      {
        time: 169,
        type: "success",
        text: "[App/Socket] join_board // Socket.io 같은 보드 룸 입장",
      },
      {
        time: 173,
        type: "info",
        text: "[App/Card] LongPress Drag // 카드 롱프레스 드래그 이동",
      },
      {
        time: 178,
        type: "success",
        text: "[App/Socket] move_card emit // 이동 이벤트 발송",
      },
      {
        time: 183,
        type: "success",
        text: "[Web/Socket] card_moved // 웹에서 실시간 카드 이동 반영",
      },
      {
        time: 188,
        type: "info",
        text: "[App/Card] Dropdown // 드롭다운 상태 변경 메뉴 사용",
      },
      {
        time: 193,
        type: "info",
        text: "[App/Card] Delete // 카드 삭제 Alert 확인 → 삭제",
      },
      {
        time: 198,
        type: "success",
        text: "[App/Card] DELETE /api/cards/:id // 삭제 API 성공",
      },
      {
        time: 203,
        type: "info",
        text: "[App/Card] Modal // 카드 상세 모달 진입",
      },
      {
        time: 210,
        type: "info",
        text: "[App/Card] RichEditor // pell-rich-editor 상세 내용 확인",
      },
      {
        time: 215,
        type: "info",
        text: "[App/Card] Comment // 댓글 목록 확인 및 댓글 등록",
      },
      {
        time: 220,
        type: "success",
        text: "[App/Socket] comment_added // 댓글 실시간 동기화",
      },
      {
        time: 225,
        type: "info",
        text: "[App/Search] 🔍 // 검색창 열기, 키워드 입력",
      },
      {
        time: 230,
        type: "success",
        text: "[App/Search] Filter // 검색 결과 필터링 완료",
      },
      {
        time: 235,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
  },
  {
    id: 7,
    type: "flutter",
    filename: "bookora.dart",
    title: "Bookora - 도서 쇼핑 플랫폼",
    githubUrl: "https://github.com/E2G0I2T/bookora",
    tags: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Supabase",
      "Firebase Hosting",
      "Kakao API",
      "GoRouter",
    ],
    videoSrc: "/videos/demo_m.mp4",
    webVideoSrc: "/videos/demo_p.mp4",
    summary:
      "Flutter 단일 코드베이스로 Android와 Web을 동시 지원하는 크로스플랫폼 도서 쇼핑 앱입니다. 카카오 도서/주소 API, Supabase Auth·DB, Firebase Hosting 배포까지 완성된 풀스택 커머스 프로젝트입니다.",
    featured: true,
    specs: [
      "Flutter 단일 코드베이스로 Android/Web 동시 구현, GoRouter ShellRoute 기반 반응형 레이아웃 자동 전환 (모바일: 하단 5탭, 웹: 상단 네비게이션)",
      "Riverpod NotifierProvider 패턴으로 장바구니·찜·주문 전역 상태 관리, 검색 디바운스(500ms) 최적화 및 스켈레톤 UI 적용",
      "Supabase Auth 이메일 로그인/회원가입 + PostgreSQL Row Level Security로 사용자별 주문·찜 목록 서버 동기화, GoRouter Auth 가드로 비인가 접근 차단",
      "카카오 도서 검색 API·우편번호 API(WebView), 마이페이지 카드번호·전화번호 포매터, 배송 요청사항·결제 수단 설정, 주문 시 배송·결제 정보 확인 다이얼로그 등 커머스 완성도 구현",
    ],
    logs: [
      {
        time: 0,
        type: "info",
        text: "[App] Launch // Flutter 앱 실행, Supabase 초기화",
      },
      {
        time: 1,
        type: "warning",
        text: "[Auth] Check Session // 로그인 세션 → 회원가입 페이지 표시",
      },
      {
        time: 12.5,
        type: "success",
        text: "[Auth] SignUp // 회원가입 완료 → 홈 화면으로 이동",
      },
      {
        time: 15.5,
        type: "success",
        text: "[API] Kakao Books // 데이터 로드 완료",
      },
      {
        time: 18.3,
        type: "info",
        text: "[Auth] SignOut // 로그아웃 → 로그인 페이지 이동",
      },
      {
        time: 23,
        type: "info",
        text: "[Auth] Validation // 잘못된 이메일 형식 입력 → 유효성 오류 표시",
      },
      {
        time: 28,
        type: "info",
        text: "[Auth] Validation // 등록되지 않은 이메일 또는 비밀번호 → 오류 메시지 표시",
      },
      {
        time: 40.5,
        type: "success",
        text: "[Auth] SignIn // 로그인 완료 → 홈 화면 진입",
      },
      {
        time: 43.5,
        type: "success",
        text: "[API] Kakao Books // 데이터 로드 완료",
      },
      {
        time: 47,
        type: "info",
        text: "[UI] add to wishlist // 찜 목록에 도서 추가",
      },
      {
        time: 51.4,
        type: "info",
        text: "[UI] Category // '소설' 탭 클릭 → 소설 도서 목록 로드",
      },
      {
        time: 55,
        type: "info",
        text: "[UI] Category // '경제/경영' 탭 클릭 → 경제/경영 도서 로드",
      },
      {
        time: 63,
        type: "info",
        text: '[Search] Input // 검색어 "정의" 입력',
      },
      {
        time: 63.2,
        type: "success",
        text: '[Search] Result // "정의" 검색 결과 로드 완료',
      },
      {
        time: 74.5,
        type: "info",
        text: "[Nav] Book Detail // '정의란 무엇인가' 도서 상세 페이지 진입",
      },
      {
        time: 83.3,
        type: "info",
        text: "[Riverpod] CartNotifier // 장바구니 담기 버튼 클릭",
      },
      {
        time: 83.33,
        type: "success",
        text: "[Riverpod] CartNotifier // 장바구니 추가 (총 1권)",
      },
      {
        time: 86.3,
        type: "info",
        text: "[UI] Direct Order // 바로 구매 버튼 클릭 → 주문 확인 다이얼로그",
      },
      {
        time: 86.5,
        type: "warning",
        text: "[UI] Order Dialog // 배송 정보 미입력 → 주문하기 버튼 비활성화 안내",
      },
      {
        time: 88,
        type: "info",
        text: "[UI] Order Dialog // 취소 → 다이얼로그 닫기",
      },
      {
        time: 91,
        type: "info",
        text: "[Nav] Wishlist // 하단 찜 탭 이동 → 찜 목록 (2권) 표시",
      },
      {
        time: 92,
        type: "info",
        text: "[UI] Wishlist Delete All // 전체 삭제 버튼 클릭 → 확인 다이얼로그",
      },
      {
        time: 93,
        type: "success",
        text: "[Riverpod] WishlistNotifier // 찜 목록 전체 삭제 완료",
      },
      {
        time: 94,
        type: "info",
        text: "[Nav] MyPage // 하단 마이페이지 탭 이동",
      },
      {
        time: 105,
        type: "info",
        text: "[UI] MyPage Phone // 전화번호 입력 → 자동 포매터 적용 (010-0000-0000)",
      },
      {
        time: 112,
        type: "info",
        text: "[WebView] Kakao Postcode // 주소 검색 버튼 클릭 → WebView 로드",
      },
      {
        time: 113.5,
        type: "success",
        text: "[WebView] Kakao Postcode // 카카오 주소 검색 API 로드 완료",
      },
      {
        time: 128,
        type: "success",
        text: "[WebView] Address Selected // 주소 선택 → Flutter로 전달",
      },
      {
        time: 138.3,
        type: "info",
        text: "[UI] Delivery Request // 배송 요청사항 드롭다운 → '기타' 선택, 직접 입력 박스 표시",
      },
      {
        time: 151,
        type: "info",
        text: "[UI] Card Number // 카드번호 입력 → 자동 포매터 (2020-2020-2020-2020)",
      },
      {
        time: 155,
        type: "info",
        text: "[UI] Card Expiry // 유효기간 입력 → 자동 포매터 (02/28)",
      },
      {
        time: 161,
        type: "success",
        text: "[MyPage] Save // 마이페이지 저장 완료 (스낵바 표시)",
      },
      {
        time: 177.3,
        type: "warning",
        text: "[Validation] Error // 입력 오류 다이얼로그: 카드번호·유효기간 형식 오류",
      },
      {
        time: 178.5,
        type: "info",
        text: "[UI] Fix // 수정하기 버튼 → 다이얼로그 닫기",
      },
      {
        time: 183.5,
        type: "warning",
        text: "[Validation] Error // 입력 오류 다이얼로그: 전화번호·카드번호·유효기간 형식 오류",
      },
      {
        time: 184.3,
        type: "info",
        text: "[UI] Fix // 수정하기 버튼 → 다이얼로그 닫기",
      },
      {
        time: 190,
        type: "success",
        text: "[MyPage] Save // 마이페이지 저장 완료 (스낵바 표시)",
      },
      {
        time: 196,
        type: "info",
        text: "[Nav] Book Detail // '백 년의 질문, 베스트셀러 필사노트' 도서 상세 진입",
      },
      {
        time: 199.2,
        type: "info",
        text: "[UI] Order // 주문하기 버튼 클릭",
      },
      {
        time: 202,
        type: "info",
        text: "[Nav] OrderHistory // 주문 내역 탭 이동",
      },
      {
        time: 202.1,
        type: "success",
        text: "[UI] OrderHistory // 주문번호·날짜·도서목록·배송정보·결제수단 표시",
      },
      {
        time: 204,
        type: "info",
        text: "[Riverpod] CartNotifier // 장바구니 담기 → 총 2권",
      },
      {
        time: 206,
        type: "info",
        text: "[Nav] Cart // 장바구니 탭 이동",
      },
      {
        time: 208,
        type: "info",
        text: "[UI] Order // 주문하기 버튼 클릭 → 주문 확인 다이얼로그",
      },
      {
        time: 208.2,
        type: "info",
        text: "[UI] Order Dialog // 배송·결제 정보 표시 (Lee·010-0000-0000, 경기 성남시 분당구, 신용카드)",
      },
      {
        time: 210,
        type: "success",
        text: "[Riverpod] OrderNotifier // 주문 완료 → 장바구니 초기화",
      },
      {
        time: 211,
        type: "info",
        text: "[Nav] OrderHistory // 주문 내역 탭 이동",
      },
      {
        time: 211.1,
        type: "success",
        text: "[UI] OrderHistory // 주문번호·날짜·도서목록·배송정보·결제수단 표시",
      },
      {
        time: 216,
        type: "info",
        text: "[Auth] SignOut // 로그아웃 → 로그인 페이지로 복귀",
      },
      {
        time: 218,
        type: "info",
        text: "I/App: Session End // --- 영상 종료 ---",
      },
    ],
    webLogs: [
      {
        time: 0,
        type: "info",
        text: "[Web] Launch // Flutter Web 실행 (Firebase Hosting)",
      },
      {
        time: 0,
        type: "warning",
        text: "[Auth] Check Session // 회원가입 페이지 표시",
      },
      {
        time: 8,
        type: "warning",
        text: "[Auth] Check Account // 이미 가입된 계정 → 에러 메시지 표시",
      },
      {
        time: 11.5,
        type: "success",
        text: "[Auth] SignIn // 로그인 완료 → 홈 화면 진입",
      },
      {
        time: 12,
        type: "success",
        text: "[API] Kakao Books // 베스트셀러 데이터 로드, 반응형 웹 레이아웃 렌더링",
      },
      {
        time: 14.8,
        type: "info",
        text: "[Auth] SignOut // 로그아웃 → 로그인 페이지 이동",
      },
      {
        time: 29.5,
        type: "info",
        text: "[Auth] Validation // 등록되지 않은 이메일 또는 비밀번호 → 오류 메시지 표시",
      },
      {
        time: 32.7,
        type: "success",
        text: "[Auth] SignIn // 로그인 완료 → 홈 화면 진입",
      },
      {
        time: 42,
        type: "info",
        text: "[UI] Category // '소설' 탭 클릭 → 소설 도서 목록 로드",
      },
      {
        time: 44,
        type: "info",
        text: "[UI] Category // '경제/경영' 탭 클릭 → 경제/경영 도서 로드",
      },
      {
        time: 51.3,
        type: "info",
        text: "[Search] Input // 검색어 입력",
      },
      {
        time: 51.5,
        type: "success",
        text: "[Search] Result // 검색 결과 로드 완료",
      },
      {
        time: 54.3,
        type: "info",
        text: "[Nav] Book Detail // 도서 상세 페이지 진입",
      },
      { time: 58.5, type: "info", text: "[UI] Wishlist // 찜 버튼 클릭" },
      {
        time: 60,
        type: "info",
        text: "[Riverpod] CartNotifier // 장바구니 담기",
      },
      {
        time: 62.5,
        type: "info",
        text: "[UI] Direct Order // 바로 구매 버튼 클릭 → 주문 확인 다이얼로그",
      },
      {
        time: 62.5,
        type: "warning",
        text: "[UI] Order Dialog // 배송 정보 미입력 → 주문하기 버튼 비활성화 안내",
      },
      {
        time: 65,
        type: "info",
        text: "[UI] Order Dialog // 취소 → 다이얼로그 닫기",
      },
      { time: 68, type: "info", text: "[UI] Wishlist // 찜 버튼 클릭" },
      { time: 72, type: "info", text: "[UI] Wishlist // 찜 버튼 클릭" },
      {
        time: 76,
        type: "info",
        text: "[Nav] Wishlist // 찜 목록 탭 이동 → 찜 목록 표시",
      },
      {
        time: 90.5,
        type: "info",
        text: "[Nav] MyPage // 상단 마이페이지 탭 이동",
      },
      {
        time: 101.5,
        type: "warning",
        text: "[Validation] Error // 입력 오류 다이얼로그: 전화번호·카드번호·유효기간 형식 오류",
      },
      {
        time: 102.5,
        type: "info",
        text: "[UI] Fix // 수정하기 버튼 → 다이얼로그 닫기",
      },
      {
        time: 110,
        type: "info",
        text: "[UI] Address // 웹 환경 직접 주소 입력",
      },
      {
        time: 125.5,
        type: "success",
        text: "[MyPage] Save // 마이페이지 저장 완료",
      },
      {
        time: 129.5,
        type: "info",
        text: "[Nav] Book Detail // '백 년의 질문, 베스트셀러 필사노트' 도서 상세 진입",
      },
      {
        time: 133,
        type: "info",
        text: "[UI] Order // 주문하기 버튼 클릭",
      },
      {
        time: 138,
        type: "info",
        text: "[Nav] Cart // 장바구니 탭 이동",
      },
      {
        time: 138.5,
        type: "info",
        text: "[UI] Order // 주문하기 버튼 클릭 → 주문 확인 다이얼로그",
      },
      {
        time: 138.5,
        type: "info",
        text: "[UI] Order Dialog // 배송·결제 정보 표시",
      },
      {
        time: 139.5,
        type: "success",
        text: "[Riverpod] OrderNotifier // 주문 완료 → 장바구니 초기화",
      },
      {
        time: 140,
        type: "info",
        text: "[Nav] OrderHistory // 주문 내역 탭 이동",
      },
      {
        time: 140.1,
        type: "success",
        text: "[UI] OrderHistory // 주문번호·날짜·도서목록·배송정보·결제수단 표시",
      },
      {
        time: 146.6,
        type: "info",
        text: "[Auth] Logout // 상단 로그아웃 버튼 클릭",
      },
      {
        time: 146.7,
        type: "success",
        text: "[Auth] SignOut // 세션 초기화 → 로그인 페이지 복귀",
      },
      {
        time: 149,
        type: "info",
        text: "I/Web: Session End // --- 웹 세션 종료 ---",
      },
    ],
  },
];