import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { useI18n } from '../i18n';

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  const { locale, t } = useI18n();
  const typeMap: Record<Project['type'], string> = {
    学习: locale === 'en' ? 'Study' : '学习',
    创意: locale === 'en' ? 'Creative' : '创意',
    研究: locale === 'en' ? 'Research' : '研究',
  };

  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
    >
      <div className="project-top">
        <span className="chip">{typeMap[project.type]}</span>
        <h3>{locale === 'en' ? project.titleEn : project.titleZh}</h3>
      </div>
      <p>{locale === 'en' ? project.descriptionEn : project.descriptionZh}</p>
      <div className="tag-list">
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-actions">
        <button className="btn ghost" onClick={() => onOpen(project)}>
          {t('viewDetail')}
        </button>
        <a className="btn ghost" href={project.link} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </motion.article>
  );
}
