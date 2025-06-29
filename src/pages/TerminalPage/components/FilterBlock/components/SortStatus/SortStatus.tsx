import React from 'react';
import styles from './SortStatus.module.scss';
import { useTranslation } from 'react-i18next';
import DropDown from './../../../../../../shared/components/DropDown/DropDown';
import classNames from 'classnames';
import OnlineIco from './../../../../../../shared/components/icons/OnlineIco/OnlineIco';
import { useAppSelector } from './../../../../../../app/hooks';
import { Order } from './../../../../../../types/orders';

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
            <div className={styles.SortStatus__status}>
              <p
                className={classNames(styles.SortStatus__status_online)}
              >
                {t('online')}
              </p>
              <OnlineIco status={true} />
            </div>
          ),
          desc: (
            <div className={styles.SortStatus__status}>
              <p
                className={classNames(styles.SortStatus__status_offline)}
              >
                {t('online')}
              </p>
              <OnlineIco status={false} />
            </div>
          ),
        }}
        onSelect={(val) => onChange(val as Order)}
      />
    </div>
  );
};

export default SortStatus;
