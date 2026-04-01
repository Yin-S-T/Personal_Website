export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  hint: string;
};

export const directContacts: ContactItem[] = [
  {
    label: '学术邮箱',
    value: '202330552821@mail.scut.edu.cn',
    href: 'mailto:202330552821@mail.scut.edu.cn',
    hint: '科研合作、论文交流',
  },
  {
    label: '个人邮箱',
    value: 'tangsongyin@gmail.com',
    href: 'mailto:tangsongyin@gmail.com',
    hint: '综合联系、创意沟通',
  },
];

export const academicLinks: ContactItem[] = [
  {
    label: 'GitHub',
    value: 'github.com/Yin-S-T',
    href: 'https://github.com/Yin-S-T',
    hint: '开源项目与代码仓库',
  },
  {
    label: 'OpenReview',
    value: 'Songyin Tang Profile',
    href: 'https://openreview.net/profile?id=%7ESongyin_Tang1',
    hint: '审稿与学术讨论',
  },
  {
    label: 'Google Scholar',
    value: 'Q4J_DpoAAAAJ',
    href: 'https://scholar.google.com/citations?user=Q4J_DpoAAAAJ&hl=en',
    hint: '论文与引用',
  },
];
