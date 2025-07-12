import React, { useState } from 'react';
import { terminalInfo } from '@/api/terminals';
import styles from './InfoPanelDetails.module.scss';
import { useTranslation } from 'react-i18next';
import UpdateIco from '@/shared/Icons/UpdateIco/UpdateIco';
import { formatDateTime } from '@/app/formatters';
import StatusTerminal from '@/shared/StatusTerminal/StatusTerminal';
import { Currency } from '@/types/currency';
import classNames from 'classnames';

const InfoPanelDetails = () => {
  const details = terminalInfo;
  const [isUpdating, setIsUpdating] = useState(false);
  const { t } = useTranslation();
  const data = formatDateTime(details.updated);
  const [activeCurrency, setActiveCurrency] = useState<Currency>(Currency.eur);

  // Returns the current selected currency
  const getAmaunt = (): string => {
    switch (activeCurrency) {
      case Currency.czk:
        return details.amountCZK.toLocaleString();
      case Currency.eur:
        return details.amountEUR.toLocaleString();
    }
  };

  const handleCurrencyChange = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    cur: Currency,
  ) => {
    e.preventDefault();
    setActiveCurrency(cur);
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsUpdating(true);

    setTimeout(() => {
      setIsUpdating(false);
    }, 600);
  };

  return (
    <div className={styles.InfoPanelDetails}>
      <div className={styles.InfoPanelDetails__left}>
        <button className={styles.InfoPanelDetails__update} onClick={handleUpdate}>
          <UpdateIco
            className={classNames(styles.InfoPanelDetails__ico, {
              [styles.rotateAnimation]: isUpdating,
            })}
          />
          {t('update')}
        </button>
        <div className={styles.InfoPanelDetails__blockTime}>
          <p className={styles.InfoPanelDetails__timeTitle}>{t('state_update_time')}</p>
          <div className={styles.InfoPanelDetails__time}>
            <p>{data[0]}</p>
            <p>{data[1]}</p>
          </div>
        </div>
        <StatusTerminal status={details.status} className={styles.InfoPanelDetails__status} />
      </div>

      <div className={styles.InfoPanelDetails__right}>
        <div className={styles.InfoPanelDetails__blockAmaunt}>
          <p className={styles.InfoPanelDetails__amount}>{getAmaunt()}</p>
          <div className={styles.InfoPanelDetails__currency} onClick={(e) => e.preventDefault()}>
            <p
              className={classNames(styles.InfoPanelDetails__currencyName, {
                [styles.InfoPanelDetails__currencyName_active]: activeCurrency === Currency.czk,
              })}
              onClick={(e) => handleCurrencyChange(e, Currency.czk)}
            >
              {Currency.czk}
            </p>
            <p
              className={classNames(styles.InfoPanelDetails__currencyName, {
                [styles.InfoPanelDetails__currencyName_active]: activeCurrency === Currency.eur,
              })}
              onClick={(e) => handleCurrencyChange(e, Currency.eur)}
            >
              {Currency.eur}
            </p>

            <div
              className={classNames(styles.InfoPanelDetails__currencyBtn, {
                [styles.InfoPanelDetails__currencyBtn_left]: activeCurrency === Currency.czk,
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanelDetails;
