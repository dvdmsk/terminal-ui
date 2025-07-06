import React, { useEffect, useRef, useState } from 'react';
import styles from './LanguagesSelector.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import CZ from '@/assets/img/CZ.png';
import ENG from '@/assets/img/ENG.png';
import SK from '@/assets/img/SK.png';
import ArrowDownIco from '../Icons/ArrowDownIco/ArrowDownIco';

const flagMap: Record<string, string> = {
  CZ,
  ENG,
  SK,
};

enum Lang {
  sk = 'SK',
  eng = 'ENG',
  cz = 'CZ',
}

const LanguagesSelector = () => {
  const [activeLang, setActiveLang] = useState<Lang>(Lang.eng);

  const { t, i18n } = useTranslation();

  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const defaultLang: Lang = localStorage.getItem('lng')?.toLowerCase() as Lang || Lang.eng.toLowerCase();

    // Setting a language only if it has not yet been installed

    if (i18n.isInitialized && i18n.language !== defaultLang) {
      i18n.changeLanguage(defaultLang).then(() => {
        setActiveLang(Lang.eng);
      });
    } else {
      setActiveLang(i18n.language.toUpperCase() as Lang);
    }

    const handleLanguageChange = (lng: string) => {
      setActiveLang(lng.toUpperCase() as Lang);
    };

    const close = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  const handleSelect = (lang: Lang) => {
    setIsActive((prev) => !prev);
    changeLanguage(lang.toLocaleLowerCase());
    setActiveLang(lang);
  };

  return (
    <div className={styles.LanguagesSelector} ref={containerRef}>
      <ul
        className={classNames(styles.LanguagesSelector__list, {
          [styles.LanguagesSelector__list_visible]: isActive,
        })}
      >
        {Object.values(Lang).map((langValue, index) => (
          <li
            key={langValue}
            className={classNames(styles.LanguagesSelector__language, {
              [styles.LanguagesSelector__language_active]: activeLang === langValue,
            })}
            onClick={() => handleSelect(langValue)}
          >
            <p className={styles.LanguagesSelector__lang}>{langValue}</p>
            <img
              className={styles.LanguagesSelector__flag}
              src={flagMap[langValue]}
              alt={langValue}
            />

            <div className={styles.LanguagesSelector__arrowWrapper}>
              {activeLang === langValue && (
                <ArrowDownIco className={styles.LanguagesSelector__arrow} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesSelector;
