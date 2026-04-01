import { useI18n } from '../i18n';

export function LanguageDock() {
  const { t, toggleLocale } = useI18n();

  return (
    <button className="language-dock" onClick={toggleLocale}>
      {t('langSwitch')}
    </button>
  );
}
