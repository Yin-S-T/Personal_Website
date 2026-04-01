import { SocialLinks } from '../components/SocialLinks';
import { useI18n } from '../i18n';

export function Contact() {
  const { t } = useI18n();

  return (
    <section className="section container">
      <h2>{t('contactTitle')}</h2>
      <p className="lead">{t('contactLead')}</p>
      <SocialLinks />
    </section>
  );
}
