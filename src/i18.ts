import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  eng: {
    translation: {
      export: 'Export',
      terminal: 'Terminal',
      branch: 'Branch',
      time: 'State update time',
      update: 'Update',
      online: 'Online',
      apply: 'Apply',
      search: 'Search',
      terminalName: 'Terminal Name',
      branchName: 'Branch Name',
      statusName: 'Status',
    },
  },
  cz: {
    translation: {
      export: 'Export',
      terminal: 'Terminál',
      branch: 'Pobočka',
      time: 'Čas aktualizace stavu',
      update: 'Aktualizovat',
      online: 'Online',
      apply: 'Použít',
      search: 'Hledat',
      terminalName: 'Název terminálu',
      branchName: 'Název pobočky',
      statusName: 'Stav',
    },
  },

  sk: {
    translation: {
      export: 'Export',
      terminal: 'Terminál',
      branch: 'Pobočka',
      time: 'Čas aktualizácie stavu',
      update: 'Aktualizovať',
      online: 'Online',
      apply: 'Použiť',
      search: 'Hľadať',
      terminalName: 'Názov terminálu',
      branchName: 'Názov pobočky',
      statusName: 'Stav',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'eng',
  fallbackLng: 'eng',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
