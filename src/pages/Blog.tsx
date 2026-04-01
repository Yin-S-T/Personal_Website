import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

type Post = {
  titleZh: string;
  titleEn: string;
  tag: '研究笔记' | '算法随想' | '系统实践';
  date: string;
  summaryZh: string;
  summaryEn: string;
};

const posts: Post[] = [
  {
    titleZh: '从 ViT 到 Mamba：视觉主干网络的取舍逻辑',
    titleEn: 'From ViT to Mamba: trade-offs of visual backbones',
    tag: '研究笔记',
    date: '2026-03-20',
    summaryZh: '对比 Transformer 与状态空间模型在长序列视觉任务中的表现、复杂度与部署代价。',
    summaryEn: 'Comparing Transformer and state-space models in long-sequence vision tasks across performance, complexity, and deployment cost.',
  },
  {
    titleZh: '多模态对齐像“翻译问题”还是“检索问题”？',
    titleEn: 'Is multimodal alignment a translation problem or retrieval problem?',
    tag: '算法随想',
    date: '2026-03-09',
    summaryZh: '从 embedding 空间的几何结构出发，讨论对齐目标函数为何影响下游泛化。',
    summaryEn: 'Using embedding geometry to discuss why alignment objectives strongly influence downstream generalization.',
  },
  {
    titleZh: '一次具身智能实验的工程复盘',
    titleEn: 'Engineering retrospective of an embodied AI experiment',
    tag: '系统实践',
    date: '2026-02-18',
    summaryZh: '记录传感器延迟、动作抖动与策略漂移的排查过程，以及最终的系统修正方案。',
    summaryEn: 'Tracking sensor latency, actuation jitter, and policy drift, plus the final system-level fixes.',
  },
];

const tags = ['全部', '研究笔记', '算法随想', '系统实践'] as const;

export function Blog() {
  const { t, locale } = useI18n();
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>('全部');

  const list = activeTag === '全部' ? posts : posts.filter((post) => post.tag === activeTag);

  const tagText: Record<(typeof tags)[number], string> = {
    全部: t('blogTagAll'),
    研究笔记: t('blogTagResearch'),
    算法随想: t('blogTagAlgo'),
    系统实践: t('blogTagSystem'),
  };

  return (
    <section className="section container">
      <h2>{t('blogTitle')}</h2>
      <p className="lead">{t('blogLead')}</p>
      
     
      {/* 
      <p className="blog-note">
        {locale === 'en'
          ? 'To add a new post later, append one item to the posts array in src/pages/Blog.tsx. Visitors will see future notes listed here.'
          : '后续新增博客时，只需在 src/pages/Blog.tsx 的 posts 数组中追加一项，访客会在这里看到新文章。'}
      </p>
    */}
      <div className="filter-row">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tagText[tag]}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {list.map((post, idx) => (
          <motion.article
            key={post.titleZh}
            className="blog-item"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="project-top">
              <span className="chip">{tagText[post.tag]}</span>
              <time>{post.date}</time>
            </div>
            <h3>{locale === 'en' ? post.titleEn : post.titleZh}</h3>
            <p>{locale === 'en' ? post.summaryEn : post.summaryZh}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
