export const headData = {
  title: '양종선 | Portfolio',
  description: '양종선의 포트폴리오 사이트입니다.',
  lang: 'ko',
};

export const heroData = {
  name: '양종선',
  title: 'Frontend / Mobile Developer',
  subtitle: 'EV 충전 플랫폼부터 AI 도구까지, 제품을 만듭니다.',
  cta: 'View Projects',
};

export const aboutData = {
  bio: [
    '모바일과 웹 양쪽에서 제품을 만들어온 프론트엔드 개발자입니다.',
    'React Native로 앱을 개발하고, Next.js로 웹 서비스를 구축하며, 팀의 개발 효율을 높이는 도구도 직접 만듭니다.',
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
  description: string;
  scope: string[];
  tags: string[];
  links?: {
    web?: string;
    app?: string;
    repo?: string;
  };
  img?: string | null;
}

export const projectsData: Project[] = [
  {
    id: 'everycharge',
    title: 'EveryCharge',
    subtitle: 'EV 충전 구독 플랫폼',
    description:
      '전기차 충전소 탐색, 구독 상품 관리, 결제까지 지원하는 EV 플랫폼입니다. 모바일 앱, 웹 서비스, 관리자 대시보드를 함께 개발했습니다. 네이버 지도 기반 충전소 탐색, 카카오/네이버/애플 소셜 로그인, 모두페이 결제 연동, Firebase 푸시 알림 등을 구현했습니다.',
    scope: ['모바일 앱', '웹', '어드민'],
    tags: ['React Native', 'Next.js', 'TypeScript', 'Zustand', 'React Query', 'Firebase', 'Naver Maps'],
    links: {
      web: 'https://evmodu.kr',
    },
    img: null,
  },
  {
    id: 'chargenow',
    title: 'BMW ChargeNow',
    subtitle: 'BMW OEM EV 충전 앱',
    description:
      'BMW 전기차 오너를 위한 OEM 충전 관리 앱입니다. 충전소 탐색과 충전 세션 관리 기능을 제공하며, 오프라인 지원을 위해 암호화된 로컬 SQLite DB를 도입했습니다.',
    scope: ['모바일 앱'],
    tags: ['React Native', 'TypeScript', 'Zustand', 'TanStack Query', 'SQLite', 'Firebase'],
    img: null,
  },
];

export interface SideProject {
  id: string;
  title: string;
  description: string;
  coverage: {
    label: string;
    topics: string[];
  }[];
  links?: {
    repo?: string;
    web?: string;
  };
}

export const sideProjectsData: SideProject[] = [
  {
    id: 'code-conventions',
    title: 'Code Conventions',
    description:
      'React Native와 Next.js/React 프로젝트에서 팀 전체가 일관된 코드를 작성할 수 있도록 정리한 컨벤션 문서입니다. 네이밍, 컴포넌트 구조, 상태관리, API 레이어, 테스트 전략까지 실제 프로덕트 개발 경험을 기반으로 작성했습니다.',
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
    links: {
      repo: 'https://github.com/lazyflog/CodeConventions',
    },
  },
];

export const contactData = {
  cta: '함께 만들고 싶은 것이 있다면 편하게 연락주세요.',
  email: 'me@unplug.dev',
};

export const footerData = {
  networks: [
    { name: 'github', url: 'https://github.com/lazyflog' },
    { name: 'instagram', url: 'https://www.instagram.com/yang_jong_seon/' },
  ],
};
