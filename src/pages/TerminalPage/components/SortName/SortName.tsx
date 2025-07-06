import React from 'react';
import styles from './SortName.module.scss';

import { useTranslation } from 'react-i18next';
import { Order } from '@/types/orders';
import DropDown from '@/shared/DropDown/DropDown';

// Component for sorting from A to I and from I to A by the name of the terminal
interface Props {
  value: string;
  onChange: (value: Order) => void;
}

const SortName:React.FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.SortName}>
      <p className={styles.SortName__title}>{t('terminalName')}</p>

      {/* We wrap the marking what we want to place in a falling 
      List and pass them through ITEMS parameter, 
      onChange -transmits the selected data to the parent component*/}
      <DropDown
        className={styles.SortName__order}
        items={{ all: <span>All</span>, asc: <span>A / Z</span>, desc: <span>Z / A</span> }}
        onSelect={(val) => onChange(val as Order)}
      />
    </div>
  );
};

export default SortName;
