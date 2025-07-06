import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './TablePayment.module.scss';
import { TerminalInfo } from '@/types/terminals';
import { formatAmountDecimal, formatAmountInteger } from '@/app/formatters';
import CoinIco from '@/shared/Icons/CoinIco/CoinIco';
import MoneyIco from '@/shared/Icons/MoneyIco/MoneyIco';

type Props = {
  data: TerminalInfo['stateOfMeans'];
  className?: string;
};

const TablePayment:React.FC<Props> = ({data, className = ''}) => {
  const { t } = useTranslation();
  

  return (
    <table className={classNames(styles.TablePayment, className)}>
      <thead>
        <tr>
          <td>{t('denomination')}</td>
          <td>{t('totalCount')}</td>
          <td>{t('totalAmount')}</td>
          <td>{t('countToBePaid')}</td>
          <td>{t('amountToBePaid')}</td>
        </tr>
      </thead>
      <tbody>
          {data.map((td, ind) => (
            <tr key={ind}>
              <td><div className={styles.TablePayment__denomination}>{td.type === 'coin' ? <CoinIco /> : <MoneyIco />}{formatAmountDecimal(td.denomination)}</div></td>
              <td>{formatAmountInteger(td.totalCount)}</td>
              <td>{formatAmountInteger(td.totalAmount)}</td>
              <td>{formatAmountInteger(td.countToBePaid)}</td>
              <td>{formatAmountInteger(td.amountToBePaid)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TablePayment;
