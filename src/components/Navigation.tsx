import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n';

export function Navigation() {
  const { t, toggleLocale } = useI18n();

  const navItems = [
    { label: t('navHome'), to: '/' },
    { label: t('navAbout'), to: '/about' },
    { label: t('navProjects'), to: '/projects' },
    { label: t('navBlog'), to: '/blog' },
    { label: t('navContact'), to: '/contact' },
  ];

  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <div className="brand">{t('brand')}</div>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="lang-btn" onClick={toggleLocale}>
            {t('langSwitch')}
          </button>
        </nav>
      </div>
    </header>
  );
}
