import React from 'react';
import styles from './ExportButton.module.scss';
import ExportIco from '../Icons/ExportIco/ExportIco';
import { useTranslation } from 'react-i18next';
import { exportTerminalsToXLSX } from '@/utils/exportUtils';

interface Props {
  data?: any; 
  name?: string;
}

const ExportButton: React.FC<Props> = ({ data = [], name='test' }) => {
  // We get a function `t` (translate) from Huku` USETRANSLATION 'to translate text
  const { t } = useTranslation();

  // Function `Loadterminals'
  // Called when click on the export button.
  // It uses the `Exportoxlsx`` to download current terminals
  // In a file called 'terminals_report.xlsx'.
  const loadTerminals = () => {
    exportTerminalsToXLSX(data, name);
  };

  return (
    <button className={styles.ExportButton} onClick={loadTerminals}>
      <ExportIco /> {t('export')}
    </button>
  );
};

export default ExportButton;
