import { academicLinks, directContacts } from '../data/socialLinks';
import { useI18n } from '../i18n';

function mailShortcuts(email: string) {
  const encoded = encodeURIComponent(email);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&to=${encoded}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encoded}`,
  };
}

function ContactCard({
  label,
  value,
  href,
  hint,
  openLink,
  openDefaultMail,
}: {
  label: string;
  value: string;
  href?: string;
  hint: string;
  openLink: string;
  openDefaultMail: string;
}) {
  const shortcuts = href?.startsWith('mailto:') ? mailShortcuts(value) : null;

  return (
    <article className="social-card">
      <span className="social-title">{label}</span>
      <span className="social-value">{value}</span>
      <span className="social-hint">{hint}</span>

      {href && !shortcuts && (
        <a className="inline-link" href={href} target="_blank" rel="noreferrer">
          {openLink}
        </a>
      )}

      {shortcuts && (
        <div className="mail-buttons">
          <a className="inline-link" href={href}>{openDefaultMail}</a>
          <a className="inline-link" href={shortcuts.gmail} target="_blank" rel="noreferrer">Gmail</a>
          <a className="inline-link" href={shortcuts.outlook} target="_blank" rel="noreferrer">Outlook</a>
        </div>
      )}
    </article>
  );
}

export function SocialLinks() {
  const { locale, t } = useI18n();

  const direct = directContacts.map((item) => ({
    ...item,
    label: locale === 'en' ? (item.label === '学术邮箱' ? 'Academic Email' : 'Personal Email') : item.label,
    hint: locale === 'en'
      ? (item.hint === '科研合作、论文交流' ? 'Research collaboration, paper discussion' : 'General contact, idea exchange')
      : item.hint,
  }));

  const academic = academicLinks.map((item) => ({
    ...item,
    hint: locale === 'en'
      ? (item.hint === '开源项目与代码仓库'
        ? 'Open-source projects and repositories'
        : item.hint === '审稿与学术讨论'
          ? 'Reviewing and academic discussion'
          : 'Publications and citations')
      : item.hint,
  }));

  return (
    <div className="social-groups">
      <section>
        <h4 className="group-title">{t('socialDirect')}</h4>
        <div className="social-grid">
          {direct.map((item) => (
            <ContactCard key={item.label} {...item} openLink={t('openLink')} openDefaultMail={t('openDefaultMail')} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="group-title">{t('socialAcademic')}</h4>
        <div className="social-grid">
          {academic.map((item) => (
            <ContactCard key={item.label} {...item} openLink={t('openLink')} openDefaultMail={t('openDefaultMail')} />
          ))}
        </div>
      </section>
    </div>
  );
}
