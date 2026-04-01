import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { InteractiveOrb } from '../components/InteractiveOrb';
import { PetLabPanel } from '../components/PetLabPanel';
import { useI18n } from '../i18n';

export function Home() {
  const { t } = useI18n();

  return (
    <section className="hero section container">
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('heroBadge')}
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        {t('heroTitleA')}
        <br />
        {t('heroTitleB')}
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
        {t('heroDesc')}
      </motion.p>

      <div className="hero-layout">
        <div>
          <PetLabPanel />
          <div className="hero-actions">
            <Link className="btn" to="/projects">
              {t('viewProjects')}
            </Link>
            <Link className="btn ghost" to="/about">
              {t('aboutMe')}
            </Link>
          </div>
        </div>

        <InteractiveOrb />
      </div>

      <div className="quick-grid">
        <Link to="/about" className="quick-card">{t('quickAbout')}</Link>
        <Link to="/projects" className="quick-card">{t('quickProjects')}</Link>
        <Link to="/blog" className="quick-card">{t('quickBlog')}</Link>
        <a href="https://scholar.google.com" className="quick-card" target="_blank" rel="noreferrer">{t('quickScholar')}</a>
        <Link to="/contact" className="quick-card">{t('quickContact')}</Link>
      </div>
    </section>
  );
}
