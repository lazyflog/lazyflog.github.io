import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '양종선 | PortFolio', // e.g: 'Name | Developer'
  lang: 'kor', // e.g: en, es, fr, jp
  description: '양종선의 포트폴리오 사이트입니다.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://unplug.dev', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'ReactNative를 활용한 날씨앱',
    info:
      '대학교에 들어와서 처음으로 해보았던 개발 프로젝트입니다. ReactNative와 친근해지기 위해 시작했던 프로젝트이기에 초반에 많이 해매였습니다.',
    info2: 'ReactNative, Expo, WeatherAPI 사용',
    url: 'https://expo.io/@unplug/projects/MayWeather',
    repo: 'https://github.com/lazyflog/MayWeather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'ReactNative를 활용한 자기소개 앱',
    info:
      '자기소개서를 자유양식으로 만들어보라는 과제가 있었는데, 그 때 마침 ReactNative에 재미를 느끼고있어서 한번 만들어봤습니다.',
    info2: 'ReactNative, Expo 사용',
    url: 'https://expo.io/@unplug/projects/Intro',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'ReactNative를 활용한 식당추천 앱',
    info:
      '캡스톤 디자인이라는 과목 때 했었던 프로젝트입니다. 어느정도 친근해진 ReactNative와 FireBase를 접목할 수 없을까 생각하다가 만들기로 마음먹었고, 평소 학교 주변에 먹을만한 식당이 뭐가있는지 일일히 찾는게 힘들다는 팀원들의 말에서 아이디어를 받았습니다.',
    info2: 'ReactNative, Expo, Firebase 사용',
    url: 'https://github.com/lazyflog/FineDining',
    repo: 'https://github.com/lazyflog/FineDining', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'me@unplug.dev | yug030585@gmail.com | yug0305@naver.com',
  btn: '보내기',
  email: 'me@unplug.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/seon0305',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/yang_jong_seon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lazyflog/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
