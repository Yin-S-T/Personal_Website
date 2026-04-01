import { SocialLinks } from '../components/SocialLinks';
import { useI18n } from '../i18n';

const interestsZh = ['Computer Vision', 'Multimodal Large Models',  'Embodied AI'];
const interestsEn = ['Computer Vision', 'Multimodal Large Models',  'Embodied AI'];

const timelineZh = [
  '2023 - 入学华南理工大学软件学院，成为软件工程本科生',
  '2024 - 系统学习机器学习与深度学习算法基础',
  '2025 - 开始研究多模态大模型，并进入华南理工大学软件学院实验室实习',
  '2026 - 以共一作者发布首篇多模态视觉定位论文《Show Me the Answer: Visual Grounding on Dashboards》',
];

const timelineEn = [
  '2023 - Enrolled in the School of Software Engineering at South China University of Technology as an undergraduate student',
  '2024 - Started systematic study of machine learning and deep learning fundamentals',
  '2025 - Began research on multimodal large models and joined a lab internship in SCUT School of Software Engineering',
  '2026 - Co-first-authored first multimodal visual grounding paper: "Show Me the Answer: Visual Grounding on Dashboards"',
];

export function About() {
  const { t, locale } = useI18n();
  const interests = locale === 'en' ? interestsEn : interestsZh;
  const timeline = locale === 'en' ? timelineEn : timelineZh;

  return (
    <section className="section container">
      <h2>{t('aboutTitle')}</h2>
      <p className="lead">{t('aboutLead')}</p>
      <h3>{t('aboutInterests')}</h3>
      <div className="tag-list">
        {interests.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      <h3>{t('aboutTimeline')}</h3>
      <ul className="timeline">
        {timeline.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>{t('aboutLinks')}</h3>
      <SocialLinks />
    </section>
  );
}
