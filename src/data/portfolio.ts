export const headData = {
  title: '양종선 | Portfolio',
  description: '양종선의 포트폴리오 사이트입니다.',
  lang: 'ko',
};

export const heroData = {
  name: '양종선',
  nameEn: 'Yang JongSeon',
  title: 'Frontend / Mobile Developer',
  subtitle: '단순한 문제해결을 넘어 비즈니스 성공에 직접적으로 기여합니다.',
  subtitleEn: 'Going beyond simple problem-solving to directly contribute to business success.',
  cta: 'View Projects',
};

export const aboutData = {
  bio: [
    '지난 5년간 React Native 기반 모바일 앱 개발을 중심으로, 0에서 10만 명 이상의 사용자로 성장한 서비스의 전체 주기를 경험한 프론트엔드 개발자입니다.',
    '초기 MVP 구축부터 성능 최적화, 운영 자동화까지 제품의 전 생애주기에서 문제를 정의하고 해결해 왔습니다. 기능 개발을 넘어 서비스 안정성, 운영 효율성, 사용자 경험이라는 관점에서 주도적으로 가치를 만들어 온 경험이 있습니다.',
  ],
  bioEn: [
    'A frontend developer with 5+ years focused on React Native mobile development, with hands-on experience across the full lifecycle of a service that grew from zero to 100,000+ users.',
    'From initial MVP through performance optimization and operational automation, I\'ve defined and solved problems at every stage of the product lifecycle — creating value not just through feature delivery, but through service stability, operational efficiency, and user experience.',
  ],
  skills: [
    'React Native',
    'TypeScript',
    'Next.js',
    'React',
    'Zustand',
    'React Query',
    'Node.js',
    'Tailwind CSS',
    'Claude API',
  ],
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  scope: string[];
  scopeEn?: string[];
  tags: string[];
  links?: {
    web?: string;
    app?: string;
    repo?: string;
  };
  images?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'everycharge',
    title: '모두의충전',
    subtitle: 'EV 충전 및 차량구독 플랫폼',
    subtitleEn: 'EV Charging & Vehicle Subscription Platform',
    description:
      '10만+ 사용자 규모의 EV 충전·차량구독 플랫폼으로, 초기 합류부터 정식 런칭까지 충전소 탐색·검색, 모두페이 결제(NFC·QR), 마이카·테슬라 API 연동, 대리충전 등 주요 도메인 기능을 직접 설계·개발했습니다. 이후 웹·앱으로 분리 운영되던 이벤트 페이지를 웹뷰로 통합해 관리 포인트를 줄였으며, 모바일 앱(20+ 스크린), Next.js 이벤트 웹, 어드민 대시보드(45+ 페이지)를 함께 개발했습니다.',
    descriptionEn:
      'An EV charging and vehicle subscription platform with 100,000+ users. From initial onboarding to official launch, I designed and built core domain features including charging station search, ModuPay payments (NFC/QR), MyCar and Tesla API integration, and proxy charging. Later consolidated fragmented web/app event pages into a unified WebView, and developed the mobile app (20+ screens), Next.js event web, and admin dashboard (45+ pages).',
    scope: ['모바일 앱', '웹', '어드민'],
    scopeEn: ['Mobile App', 'Web', 'Admin'],
    tags: ['React Native', 'Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'Firebase', 'Naver Maps'],
    links: {
      web: 'https://evmodu.kr',
    },
    images: [
      '/images/modu/modu_1.png',
      '/images/modu/modu_2.png',
      '/images/modu/modu_3.png',
      '/images/modu/modu_4.png',
      '/images/modu/modu_5.jpg',
      '/images/modu/modu_6.jpg',
    ],
  },
  {
    id: 'chargenow',
    title: 'BMW Charging',
    subtitle: 'BMW OEM EV 충전 앱',
    subtitleEn: 'BMW OEM EV Charging App',
    description:
      'BMW 전기차 오너를 위한 OEM 충전 네트워크 앱 리뉴얼 프로젝트입니다. 대량의 충전소 데이터를 지도에 표시할 때 발생하는 성능 저하를 해결하기 위해 한국 지도를 100m 단위 셀로 분할하는 그리드 인덱싱 로직을 직접 설계해 지도 로딩 및 스크롤 성능을 개선했습니다. 외부 협력사와의 공동 개발 환경에서 문서화되지 않은 레거시 API 예외처리 로직도 직접 설계했습니다. PNC(Plug & Charge) 계약 관리, RF 카드 관리, SQLCipher 암호화 SQLite 기반 오프라인 충전소 데이터를 구현했습니다.',
    descriptionEn:
      'An OEM charging network app renewal for BMW EV owners. To address performance degradation when rendering large volumes of charging station data on a map, I designed a grid indexing system that divides the Korean map into 100m cells, significantly improving map load and scroll performance. I also designed undocumented legacy API error-handling logic in a joint development environment with an external vendor. Implemented PnC (Plug & Charge) contract management, RF card management, and offline charging station data using SQLCipher-encrypted SQLite.',
    scope: ['모바일 앱'],
    scopeEn: ['Mobile App'],
    tags: ['React Native', 'TypeScript', 'Zustand', 'TanStack Query', 'SQLite', 'Firebase', 'Naver Maps'],
    images: [
      '/images/bmw/bmw_1.png',
      '/images/bmw/bmw_2.png',
      '/images/bmw/bmw_3.png',
      '/images/bmw/bmw_4.png',
      '/images/bmw/bmw_5.png',
      '/images/bmw/bmw_6.png',
    ],
  },
];

export interface SideProject {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  coverage: {
    label: string;
    topics: string[];
  }[];
  coverageEn?: {
    label: string;
    topics: string[];
  }[];
  highlights?: {
    name: string;
    description: string;
  }[];
  links?: {
    repo?: string;
    web?: string;
  };
}

export const sideProjectsData: SideProject[] = [
  {
    id: 'gamdom-clone',
    title: '게임 플랫폼 UI 클론',
    titleEn: 'Game Platform UI Clone',
    descriptionEn:
      'A clone implementation of an overseas gaming platform\'s UI/UX built with a Next.js 15 + React 19 stack. Focused on building interactive components from scratch without external component libraries, along with a multi-locale routing system and a gaming-specific design system.',
    description:
      '해외 게임 플랫폼의 UI/UX를 Next.js 15 + React 19 스택으로 클론 구현한 프로젝트입니다. 외부 컴포넌트 라이브러리 없이 직접 구현한 인터랙티브 컴포넌트들을 중심으로, 다국어 라우팅과 게이밍 특화 디자인 시스템 구축에 집중했습니다.',
    coverage: [
      {
        label: 'Tech Stack',
        topics: [
          'Next.js 15 App Router + React 19',
          'TypeScript + Tailwind CSS 4',
          'Zustand + TanStack Query',
          'next-intl 다국어(ko/en) locale 라우팅',
          'Turbopack 개발 빌드',
        ],
      },
      {
        label: 'Design System',
        topics: [
          'CSS 변수 자동 생성 스크립트 (colors.ts → CSS vars)',
          '게이밍 네온 테마 + 다크 최적화',
          '시맨틱 컬러 토큰 체계',
          'IcoMoon 커스텀 아이콘 시스템',
          '반응형 브레이크포인트 설계',
        ],
      },
    ],
    coverageEn: [
      {
        label: 'Tech Stack',
        topics: [
          'Next.js 15 App Router + React 19',
          'TypeScript + Tailwind CSS 4',
          'Zustand + TanStack Query',
          'next-intl multi-locale (ko/en) routing',
          'Turbopack dev build',
        ],
      },
      {
        label: 'Design System',
        topics: [
          'Auto CSS variable generation script (colors.ts → CSS vars)',
          'Gaming neon theme + dark-optimized',
          'Semantic color token system',
          'IcoMoon custom icon system',
          'Responsive breakpoint design',
        ],
      },
    ],
    highlights: [
      {
        name: 'TabSelector',
        description:
          '선택 탭에 슬라이딩 배경이 따라오는 탭바. 라이브러리 없이 offsetLeft/offsetWidth로 직접 위치 계산. default / neon 두 가지 variant 지원.',
      },
      {
        name: 'BottomSheetModal',
        description:
          'Context + Portal 기반 Compound Component. Trigger · Overlay · Content · Header 등 Radix UI 방식의 API를 직접 구현. 애니메이션 완료 후 unmount 처리.',
      },
      {
        name: 'SlideSelector',
        description:
          '수평 스크롤 카테고리 바. 양끝 도달 여부에 따라 그라디언트 페이드 + 화살표 버튼 조건부 표시. 모바일에서 스크롤 다운 시 자동 hide.',
      },
    ],
  },
  {
    id: 'hanpet-auto-poster',
    title: '반려동물 커뮤니티 게시글 자동 포스팅 봇',
    titleEn: 'Pet Community Auto-Posting Bot',
    description:
      '반려동물 커뮤니티 한펫(hanpet.co.kr)에 자연스러운 게시글을 자동으로 생성·업로드하는 봇입니다. 96개의 페르소나 프로필(나이·지역·직업·반려동물·말투)을 기반으로 Claude API가 맥락에 맞는 글을 생성하며, 자유게시판·앨범·펫상식 3개 게시판에 하루 9개씩 자동 포스팅합니다. 트렌드 수집부터 이미지 선택·업로드까지 전 과정을 자동화했습니다.',
    descriptionEn:
      'A bot that automatically generates and uploads natural-sounding posts to the pet community Hanpet (hanpet.co.kr). Claude API generates contextually appropriate content based on 96 persona profiles (age, region, job, pet, tone), auto-posting 9 times a day across 3 boards: General, Album, and Pet Tips. The entire pipeline — from trend collection to image selection and upload — is fully automated.',
    coverage: [
      {
        label: 'Claude API',
        topics: [
          '페르소나·게시판 맥락 기반 글 생성',
          'web_search로 오늘의 트렌드 수집',
          '게시글 내용 기반 최적 이미지 선택',
          '히스토리 기반 주제 중복 방지',
        ],
      },
      {
        label: '자동화 파이프라인',
        topics: [
          'Unsplash API 이미지 후보 수집',
          '96개 페르소나 히스토리 관리',
          '게시판별 포스팅 전략 분리',
          '한펫 API 연동 자동 업로드',
        ],
      },
    ],
    coverageEn: [
      {
        label: 'Claude API',
        topics: [
          'Post generation based on persona & board context',
          'Trend collection via web_search',
          'Optimal image selection based on post content',
          'History-based topic deduplication',
        ],
      },
      {
        label: 'Automation Pipeline',
        topics: [
          'Unsplash API image candidate collection',
          '96 persona history management',
          'Per-board posting strategy',
          'Hanpet API integration for auto-upload',
        ],
      },
    ],
  },
  {
    id: 'code-conventions',
    title: 'Code Conventions',
    description:
      'React Native와 Next.js/React 프로젝트에서 팀 전체가 일관된 코드를 작성할 수 있도록 정리한 컨벤션 문서입니다. 네이밍, 컴포넌트 구조, 상태관리, API 레이어, 테스트 전략까지 실제 프로덕트 개발 경험을 기반으로 작성했습니다.',
    descriptionEn:
      'A convention guide for writing consistent code across React Native and Next.js/React projects. Covers naming, component structure, state management, API layer design, and testing strategy — all drawn from real production development experience.',
    coverage: [
      {
        label: 'React Native',
        topics: ['네이밍 규칙', '컴포넌트 구조', 'TypeScript 원칙', 'API 레이어 설계', '상태관리 (Zustand + React Query)', '스타일 시스템', '테스트 전략 (Jest / RNTL / MSW / Maestro)', 'Anti-patterns'],
      },
      {
        label: 'Next.js / React',
        topics: ['Server / Client Component', 'App Router 네비게이션', 'API 레이어 설계', '상태관리 (Zustand + React Query)', '스타일 시스템 (Tailwind / styled-components)', '에러 핸들링', 'TypeScript 원칙', 'Commit 컨벤션'],
      },
    ],
    coverageEn: [
      {
        label: 'React Native',
        topics: ['Naming conventions', 'Component structure', 'TypeScript principles', 'API layer design', 'State management (Zustand + React Query)', 'Style system', 'Test strategy (Jest / RNTL / MSW / Maestro)', 'Anti-patterns'],
      },
      {
        label: 'Next.js / React',
        topics: ['Server / Client Component', 'App Router navigation', 'API layer design', 'State management (Zustand + React Query)', 'Style system (Tailwind / styled-components)', 'Error handling', 'TypeScript principles', 'Commit conventions'],
      },
    ],
    links: {
      repo: 'https://github.com/lazyflog/CodeConventions',
    },
  },
];

export const contactData = {
  cta: '함께 만들고 싶은 것이 있다면 편하게 연락주세요.',
  ctaEn: "If you have something you'd like to build together, feel free to reach out.",
  email: 'me@unplug.dev',
};

export const footerData = {
  networks: [
    { name: 'github', url: 'https://github.com/lazyflog' },
    { name: 'instagram', url: 'https://www.instagram.com/yang_jong_seon/' },
  ],
};
