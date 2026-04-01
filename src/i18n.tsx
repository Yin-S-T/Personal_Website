import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type Locale = 'zh' | 'en';
type Dict = Record<string, string>;

const dictionaries: Record<Locale, Dict> = {
  zh: {
    brand: 'TSY // Vision Intelligence Atelier',
    navHome: '首页',
    navAbout: '关于我',
    navProjects: '项目',
    navBlog: '博客',
    navContact: '联系',
    langSwitch: 'EN',

    heroBadge: 'CV x MULTIMODAL x EMBODIED AI',
    heroTitleA: '把问题写成算法，',
    heroTitleB: '把灵感落成系统。',
    heroDesc: '这是我的个人科研主页：聚焦计算机视觉、多模态智能、具身智能与工程化实践。',
    viewProjects: '查看研究项目',
    aboutMe: '了解我',
    quickAbout: '个人简介',
    quickProjects: '项目仓库',
    quickBlog: '博客专栏',
    quickScholar: '学术入口',
    quickContact: '联系我',

    orbToggle: '拖动水晶球探索',
    orbIdle: '把足球看成优化问题：路线是搜索，节奏是建模，胜利是收敛。',

    aboutTitle: '关于我',
    aboutLead: '我是唐宋印，目前就读于华南理工大学软件学院，关注如何把模型、算法与系统工程整合为可复现、可验证的科研产出。',
    aboutInterests: '研究兴趣',
    aboutTimeline: '学术动态',
    aboutLinks: '学术与社交链接',

    projectsTitle: '研究与工程项目',
    filterAll: '全部',
    filterStudy: '学习',
    filterCreative: '创意',
    filterResearch: '研究',
    viewDetail: '查看详情',
    openRepo: '打开项目',
    close: '关闭',

    blogTitle: '研究博客',
    blogLead: '围绕模型、算法、系统与数据结构的学习笔记与研究思考。',
    blogTagAll: '全部',
    blogTagResearch: '研究笔记',
    blogTagAlgo: '算法随想',
    blogTagSystem: '系统实践',

    contactTitle: '联系我',
    contactLead: '欢迎交流论文想法、工程实现与科研合作。',

    socialDirect: '📮 直接联系',
    socialAcademic: '🔗 学术与平台',
    openLink: '打开链接',
    openDefaultMail: '默认邮件应用',

    footerText: '© {year} TSY. Built on Models, Algorithms, and Systems.',
  },
  en: {
    brand: 'TSY // Vision Intelligence Atelier',
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navBlog: 'Blog',
    navContact: 'Contact',
    langSwitch: '中文',

    heroBadge: 'CV x MULTIMODAL x EMBODIED AI',
    heroTitleA: 'Turn questions into algorithms,',
    heroTitleB: 'turn inspiration into systems.',
    heroDesc: 'This is my personal research website, focused on Computer Vision, Multimodal Intelligence, Embodied AI, and practical system building.',
    viewProjects: 'View Research Projects',
    aboutMe: 'About Me',
    quickAbout: 'Profile',
    quickProjects: 'Project Hub',
    quickBlog: 'Blog Notes',
    quickScholar: 'Scholar',
    quickContact: 'Contact',

    orbToggle: 'Drag the crystal orb to explore',
    orbIdle: 'Think of football as optimization: routes are search, rhythm is modeling, and victory is convergence.',

    aboutTitle: 'About Me',
    aboutLead: 'I am Songyin Tang, an undergraduate student at the School of Software Engineering, South China University of Technology. I focus on integrating models, algorithms, and systems engineering into reproducible and verifiable research outcomes.',
    aboutInterests: 'Research Interests',
    aboutTimeline: 'Academic Timeline',
    aboutLinks: 'Academic & Social Links',

    projectsTitle: 'Research & Engineering Projects',
    filterAll: 'All',
    filterStudy: 'Study',
    filterCreative: 'Creative',
    filterResearch: 'Research',
    viewDetail: 'View Details',
    openRepo: 'Open Project',
    close: 'Close',

    blogTitle: 'Research Blog',
    blogLead: 'Notes and reflections on models, algorithms, systems, and data structures.',
    blogTagAll: 'All',
    blogTagResearch: 'Research Notes',
    blogTagAlgo: 'Algorithm Reflections',
    blogTagSystem: 'Systems Practice',

    contactTitle: 'Contact',
    contactLead: 'Feel free to reach out for paper discussion, engineering implementation, and research collaboration.',

    socialDirect: '📮 Direct Contact',
    socialAcademic: '🔗 Academic & Platforms',
    openLink: 'Open Link',
    openDefaultMail: 'Default Mail App',

    footerText: '© {year} TSY. Built on Models, Algorithms, and Systems.',
  },
};

type I18nContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      toggleLocale: () => setLocale((prev) => (prev === 'zh' ? 'en' : 'zh')),
      t: (key: string) => dictionaries[locale][key] ?? key,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
