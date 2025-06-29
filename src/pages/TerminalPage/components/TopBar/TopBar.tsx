import React from 'react'
import styles from './TopBar.module.scss';
import LanguagesSelector from './components/LanguagesSelector/LanguagesSelector';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../app/hooks';
import ExportIco from '../../../../shared/components/icons/ExportIco/ExportIco';
import { exportToXLSX } from '../../../../utils/exportUtils';

// The main container for the upper panel.
const TopBar = () => {
  // We get a function `t` (translate) from Huku` USETRANSLATION 'to translate text
  const { t } = useTranslation();
  const terminals = useAppSelector(state => state.terminal.terminals);


  // Function `Loadterminals'
  // Called when click on the export button.
  // It uses the `Exportoxlsx`` to download current terminals
  // In a file called 'terminals_report.xlsx'.
  const loadTerminals = () => {
    exportToXLSX(terminals, 'terminals_report');
  };

  return (
    <div className={styles.TopBar}>

      <div className={styles.TopBar__container}>
        <LanguagesSelector />

        <button className={styles.TopBar__export} onClick={loadTerminals}><ExportIco /> {t('export')}</button>
      </div>
    </div>
  )
}

export default TopBar
