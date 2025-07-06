import React, { useState } from 'react';
import styles from './SideBarDetails.module.scss';
import WindowIco from '@/shared/Icons/WindowIco/WindowIco';
import classNames from 'classnames';
import ArrowLeftIco from '@/shared/Icons/ArrowLeftIco/ArrowLeftIco';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const states: number[] = Array.from({ length: 8 }, (_, i) => i + 1);

const SideBarDetails = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <aside className={styles.SideBarDetails}>
      <div className={styles.SideBarDetails__content}>
        <ul className={styles.SideBarDetails__list}>
          {states.map((state) => (
            <li
              className={classNames(styles.SideBarDetails__item, {
                [styles.SideBarDetails__item_active]: state === activeTab,
              })}
              key={state}
              onClick={() => setActiveTab(state)}
            >
              <WindowIco />

              <p className={styles.SideBarDetails__text}>{t('cash_state')}</p>
            </li>
          ))}
        </ul>

        <button className={styles.SideBarDetails__back} onClick={() => navigate(-1)}>
          <ArrowLeftIco className={styles.SideBarDetails__arrow} />

          <p>{t('backBtn')}</p>
        </button>
      </div>
    </aside>
  );
};

export default SideBarDetails;
