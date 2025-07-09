import React, { forwardRef, useRef, useState } from 'react';
import styles from './TerminalItem.module.scss';
import { Terminal } from '@/types/terminals';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import EditIco from '@/shared/Icons/EditIco/EditIco';
import BellIco from '@/shared/Icons/BellIco/BellIco';
import OnlineIco from '@/shared/Icons/OnlineIco/OnlineIco';
import UpdateIco from '@/shared/Icons/UpdateIco/UpdateIco';
import StatusTerminal from '@/shared/StatusTerminal/StatusTerminal';
import { formatDateTime } from '@/app/formatters';
import BranchInput from '@/shared/BranchInput/BranchInput';
import { Currency } from '@/types/currency';
import Notification from '@/shared/Notification/Notification';

type Props = {
  terminal: Terminal;
};

//Component -a terminal card with information about
// name, branch, amount of money in account and others
const TerminalItem = forwardRef<HTMLDivElement, Props>(({ terminal }, ref) => {
  const [activeCurrency, setActiveCurrency] = useState<Currency>(Currency.eur);
  const { t } = useTranslation();
  const { name, branch, amountCZK, amountEUR, updated, status } = terminal;
  const [isUpdating, setIsUpdating] = useState(false);

  // Returns the current selected currency
  const getAmaunt = (): string => {
    switch (activeCurrency) {
      case Currency.czk:
        return amountCZK.toLocaleString();
      case Currency.eur:
        return amountEUR.toLocaleString();
    }
  };

  // Formats date with ISO and returns an array where:
  // [0] - Date in format: 05.28.2025
  // [1] - time in format: 09:00:10
  const date = formatDateTime(updated);

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

  const handleNotification = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  const notificationAnchorRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref}>
      <Link to={`/terminal/${terminal.id}`} className={styles.TerminalItem}>
        <div className={styles.TerminalItem__left}>
          <p
            className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_terminal)}
          >
            {t('terminal')}
          </p>
          <p className={styles.TerminalItem__text}>{name}</p>
          <p className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_branch)}>
            {t('branch')}
          </p>
          <BranchInput name={branch} />
          <div className={styles.TerminalItem__blockAmaunt}>
            <p className={styles.TerminalItem__amaunt}>{getAmaunt()}</p>
            <div className={styles.TerminalItem__currency} onClick={(e) => e.preventDefault()}>
              <p
                className={classNames(styles.TerminalItem__currencyName, {
                  [styles.TerminalItem__currencyName_active]: activeCurrency === Currency.czk,
                })}
                onClick={(e) => handleCurrencyChange(e, Currency.czk)}
              >
                {Currency.czk}
              </p>
              <p
                className={classNames(styles.TerminalItem__currencyName, {
                  [styles.TerminalItem__currencyName_active]: activeCurrency === Currency.eur,
                })}
                onClick={(e) => handleCurrencyChange(e, Currency.eur)}
              >
                {Currency.eur}
              </p>
              <div
                className={classNames(styles.TerminalItem__currencyBtn, {
                  [styles.TerminalItem__currencyBtn_left]: activeCurrency === Currency.czk,
                })}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.TerminalItem__right}>
          <div className={styles.TerminalItem__notification} ref={notificationAnchorRef}>
            <Notification
              classContent={classNames(styles.notifications)}
              notifications={terminal.notification}
              anchorRef={notificationAnchorRef}
            />
            <StatusTerminal status={status} className={styles.TerminalItem__status} />
          </div>
          <p className={classNames(styles.TerminalItem__label, styles.TerminalItem__label_time)}>
            {t('time')}
          </p>
          <div className={styles.TerminalItem__time}>
            <p>{date[0]}</p>
            <p>{date[1]}</p>
          </div>
          <button className={styles.TerminalItem__update} onClick={handleUpdate}>
            <UpdateIco className={isUpdating ? styles.rotateAnimation : ''} />
            <p>{t('update')}</p>
          </button>
        </div>
      </Link>
    </div>
  );
});

export default TerminalItem;
