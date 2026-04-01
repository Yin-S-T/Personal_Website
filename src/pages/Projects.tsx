import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../data/projects';
import { useI18n } from '../i18n';

const types = ['全部', '学习', '创意', '研究'] as const;

export function Projects() {
  const { t, locale } = useI18n();
  const [type, setType] = useState<(typeof types)[number]>('全部');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (type === '全部') return projects;
    return projects.filter((item) => item.type === type);
  }, [type]);

  const labels: Record<(typeof types)[number], string> = {
    全部: t('filterAll'),
    学习: t('filterStudy'),
    创意: t('filterCreative'),
    研究: t('filterResearch'),
  };

  return (
    <section className="section container">
      <h2>{t('projectsTitle')}</h2>
      <div className="filter-row">
        {types.map((item) => (
          <button
            key={item}
            onClick={() => setType(item)}
            className={`filter-btn ${type === item ? 'active' : ''}`}
          >
            {labels[item]}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.titleZh} project={project} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-mask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="modal-card"
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 22, opacity: 0 }}
            >
              <h3>{locale === 'en' ? selected.titleEn : selected.titleZh}</h3>
              <p>{locale === 'en' ? selected.descriptionEn : selected.descriptionZh}</p>
              <div className="tag-list">
                {selected.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a className="btn" href={selected.link} target="_blank" rel="noreferrer">
                  {t('openRepo')}
                </a>
                <button className="btn ghost" onClick={() => setSelected(null)}>
                  {t('close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
