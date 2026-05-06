export const headData = {
  title: '양종선 | Portfolio',
  description: '양종선의 포트폴리오 사이트입니다.',
  lang: 'ko',
};

export const heroData = {
  name: '양종선',
  title: 'Frontend / Mobile Developer',
  subtitle: '단순한 문제해결을 넘어 비즈니스 성공에 직접적으로 기여합니다.',
  cta: 'View Projects',
};

export const aboutData = {
  bio: [
    '지난 5년간 React Native 기반 모바일 앱 개발을 중심으로, 0에서 10만 명 이상의 사용자로 성장한 서비스의 전체 주기를 경험한 프론트엔드 개발자입니다.',
    '초기 MVP 구축부터 성능 최적화, 운영 자동화까지 제품의 전 생애주기에서 문제를 정의하고 해결해 왔습니다. 기능 개발을 넘어 서비스 안정성, 운영 효율성, 사용자 경험이라는 관점에서 주도적으로 가치를 만들어 온 경험이 있습니다.',
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
    title: '모두의충전',
    subtitle: 'EV 충전 및 차량구독 플랫폼',
    description:
      '10만+ 사용자 규모의 EV 충전·차량구독 플랫폼으로, 초기 합류부터 정식 런칭까지 충전소 탐색·검색, 모두페이 결제(NFC·QR), 마이카·테슬라 API 연동, 대리충전 등 주요 도메인 기능을 직접 설계·개발했습니다. 이후 웹·앱으로 분리 운영되던 이벤트 페이지를 웹뷰로 통합해 관리 포인트를 줄였으며, 모바일 앱(20+ 스크린), Next.js 이벤트 웹, 어드민 대시보드(45+ 페이지)를 함께 개발했습니다.',
    scope: ['모바일 앱', '웹', '어드민'],
    tags: ['React Native', 'Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'Firebase', 'Naver Maps'],
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
      'BMW 전기차 오너를 위한 OEM 충전 네트워크 앱 리뉴얼 프로젝트입니다. 대량의 충전소 데이터를 지도에 표시할 때 발생하는 성능 저하를 해결하기 위해 한국 지도를 100m 단위 셀로 분할하는 그리드 인덱싱 로직을 직접 설계해 지도 로딩 및 스크롤 성능을 개선했습니다. 외부 협력사와의 공동 개발 환경에서 문서화되지 않은 레거시 API 예외처리 로직도 직접 설계했습니다. PNC(Plug & Charge) 계약 관리, RF 카드 관리, SQLCipher 암호화 SQLite 기반 오프라인 충전소 데이터를 구현했습니다.',
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
