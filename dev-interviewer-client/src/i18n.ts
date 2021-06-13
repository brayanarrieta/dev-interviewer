import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_EN } from './translations/en';

const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
