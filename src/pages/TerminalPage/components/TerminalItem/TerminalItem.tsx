import React, { useState } from 'react';
import styles from './TerminalItem.module.scss';
import { Terminal } from '../../../../types/terminals';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import OnlineIco from '../../../../shared/components/icons/OnlineIco/OnlineIco';
import UpdateIco from '../../../../shared/components/icons/UpdateIco/UpdateIco';
import EditIco from '../../../../shared/components/icons/EditIco/EditIco';


type Props = {
  terminal: Terminal;
};

enum Currency {
  czk = 'CZK',
  eur = 'EUR',
}

/**
 * Converts the date from the format "YYYYY-MM-DDTHH: MM: SS" into an array ["dd.mm.yyyy", "HH: mm: ss"].
 *
 * @param isoDateTimeString Date and time in ISO 8601 format (for example, "2025-05-27T13: 33: 26").
 * @returns An array containing a date in "dd.mm.yyyy" and time in "HH: MM: SS" format,
 * or [null, null] if the input line is invalid.
 */

function formatDateTime(isoDateTimeString: string): [string | null, string | null] {
  const date = new Date(isoDateTimeString);

  if (isNaN(date.getTime())) {
    console.error(`Invalid date string provided: ${isoDateTimeString}`);
    return [null, null];
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return [formattedDate, formattedTime];
}

//Component -a terminal card with information about 
// name, branch, amount of money in account and others
const TerminalItem: React.FC<Props> = ({ terminal }) => {
  const [activeCurrency, setActiveCurrency] = useState<Currency>(Currency.eur);
  const { t } = useTranslation();
  const { name, branch, amountCZK, amountEUR, updated, status } = terminal;

  // Returns the current selected currency
  const getAmaunt = (): number => {
    switch (activeCurrency) {
      case Currency.czk:
        return amountCZK;
      case Currency.eur:
        return amountEUR;
    }
  };

  // Formats date with ISO and returns an array where:
  // [0] - Date in format: 05.28.2025
  // [1] - time in format: 09:00:10
  const date = formatDateTime(updated);

  const handleCurrencyChange = (cur: Currency) => {
    setActiveCurrency(cur);
  };

  return (
    <div className={styles.TerminalItem}>
      <div className={styles.TerminalItem__left}>
        <p className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_terminal)}>
          {t('terminal')}
        </p>
        <p className={styles.TerminalItem__text}>{name}</p>
        <p className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_branch)}>
          {t('branch')}
        </p>
        <p className={classNames(styles.TerminalItem__text, styles.TerminalItem__text_branch)}>{branch} <EditIco /></p>

        <div className={styles.TerminalItem__blockAmaunt}>
          <p className={styles.TerminalItem__amaunt}>{getAmaunt()}</p>
          <div className={styles.TerminalItem__currency}>
            <p
              className={classNames(styles.TerminalItem__currencyName, {
                [styles.TerminalItem__currencyName_active]: activeCurrency === Currency.czk,
              })}
              onClick={() => handleCurrencyChange(Currency.czk)}
            >
              {Currency.czk}
            </p>
            <p
              className={classNames(styles.TerminalItem__currencyName, {
                [styles.TerminalItem__currencyName_active]: activeCurrency === Currency.eur,
              })}
              onClick={() => handleCurrencyChange(Currency.eur)}
            >
              {Currency.eur}
            </p>

            <div className={classNames(styles.TerminalItem__currencyBtn, {[styles.TerminalItem__currencyBtn_left]: activeCurrency === Currency.czk})}></div>
          </div>
        </div>
      </div>
      <div className={styles.TerminalItem__right}>
        <div className={styles.TerminalItem__status}>
          <p className={classNames({
            [styles.TerminalItem__status_online] : status,
            [styles.TerminalItem__status_offline] : !status,
          })}>{t('online')}</p>
          <OnlineIco status={status}/>
        </div>

        <p className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_time)}>
          {t('time')}
        </p>

        <div className={styles.TerminalItem__time}>
          <p>{date[0]}</p>
          <p>{date[1]}</p>
        </div>

        <button className={styles.TerminalItem__update}>
          <UpdateIco />

          <p>{t('update')}</p>
        </button>
      </div>
    </div>
  );
};

export default TerminalItem;
