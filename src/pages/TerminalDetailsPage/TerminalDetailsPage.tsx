import React from 'react';
import styles from './TerminalDetailsPage.module.scss';
import { terminalInfo } from '@/api/terminals';
import SideBarDetails from './components/SideBarDetails/SideBarDetails';
import TobBarDetails from './components/TobBarDetails/TobBarDetails';
import InfoPanelDetails from './components/InfoPanelDetails/InfoPanelDetails';
import { useTranslation } from 'react-i18next';
import TablePayment from './components/TablePayment/TablePayment';
import TablePaymentBoxes from './components/TablePaymentBoxes/TablePaymentBoxes';

//Page with detailed information about the terminal
const TerminalDetailsPage = () => {
  const { name, status, branch, updated, amountCZK, amountEUR, stateOfMeans, coinRecycler } =
    terminalInfo;
  const { t } = useTranslation();

  return (
    <div className={styles.TerminalDetailsPage}>
      <SideBarDetails />

      <main className={styles.TerminalDetailsPage__main}>
        <TobBarDetails />

        <InfoPanelDetails />

        <h3 className={styles.TerminalDetailsPage__title}>{t('stateOfMeansOfPayment')}</h3>
      
        <TablePayment data={stateOfMeans} />

        <h3 className={styles.TerminalDetailsPage__title}>{t('stateOfMeansOfPaymentInBoxes')}</h3>

        <div className={styles.TerminalDetailsPage__state}>
          <div>
            <TablePaymentBoxes data={coinRecycler}/>
            <TablePaymentBoxes data={coinRecycler}/>
          </div>
          <div>
            <TablePaymentBoxes data={coinRecycler}/>
            <TablePaymentBoxes data={coinRecycler}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminalDetailsPage;
