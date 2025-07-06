import React from 'react';
import styles from './TopBar.module.scss';
import { useAppSelector } from '@/app/hooks';
import LanguagesSelector from '../LanguagesSelector/LanguagesSelector';
import ExportIco from '../Icons/ExportIco/ExportIco';
import ExportButton from '../ExportButton/ExportButton';

// The main container for the upper panel.
const TopBar = () => {
  const terminals = useAppSelector((state) => state.terminal.terminals);

  return (
    <div className={styles.TopBar}>
      <div className={styles.TopBar__container}>
        <LanguagesSelector />

        <ExportButton data={terminals} name='terminal_report'/>
      </div>
    </div>
  );
};

export default TopBar;
