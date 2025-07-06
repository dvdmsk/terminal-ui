import React from 'react';
import OnlineIco from '../Icons/OnlineIco/OnlineIco';
import classNames from 'classnames';
import styles from './StatusTerminal.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  status: boolean;
  className?: string;
}

const StatusTerminal:React.FC<Props> = ({status, className = ''}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.StatusTerminal, className)}>
      <p className={classNames({
        [styles.StatusTerminal_offline]: !status,
        [styles.StatusTerminal_online]: status,
      })}>{t('online')}</p>
      
      <OnlineIco status={status} />
    </div>
  );
};

export default StatusTerminal;
