import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();
  const text = t('footerText').replace('{year}', String(new Date().getFullYear()));

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{text}</p>
      </div>
    </footer>
  );
}
