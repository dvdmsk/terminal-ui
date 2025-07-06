import React from 'react';
import styles from './SortStatus.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useAppSelector } from '@/app/hooks';
import { Order } from '@/types/orders';
import DropDown from '@/shared/DropDown/DropDown';
import OnlineIco from '@/shared/Icons/OnlineIco/OnlineIco';
import StatusTerminal from '@/shared/StatusTerminal/StatusTerminal';

interface Props {
  value: string;
  onChange: (value: Order) => void;
}

// Component for sorting by status
const SortStatus:React.FC<Props> = ({ value, onChange }) => {
  const { t, i18n } = useTranslation();
  const orderStatus = useAppSelector((state) => state.terminal.orderStatus);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className={styles.SortStatus}>
      <p className={styles.SortStatus__title}>{t('statusName')}</p>

      <DropDown
        className={styles.SortStatus__order}
        items={{
          // none: (<div className={styles.SortStatus__status}> </div>),
          asc: (
            <StatusTerminal status={true} />
          ),
          desc: (
            <StatusTerminal status={false} />
          ),
        }}
        onSelect={(val) => onChange(val as Order)}
      />
    </div>
  );
};

export default SortStatus;
