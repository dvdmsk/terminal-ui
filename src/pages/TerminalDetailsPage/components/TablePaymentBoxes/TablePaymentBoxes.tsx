import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './TablePaymentBoxes.module.scss';
import { TerminalInfo } from '@/types/terminals';
import { formatAmountDecimal, formatAmountInteger } from '@/app/formatters';
import CoinIco from '@/shared/Icons/CoinIco/CoinIco';
import MoneyIco from '@/shared/Icons/MoneyIco/MoneyIco';
import ArrowThinIco from '@/shared/Icons/ArrowThinIco/ArrowThinIco';
import EditIco from '@/shared/Icons/EditIco/EditIco';

type Props = {
  data: TerminalInfo['coinRecycler'];
  className?: string;
};

const TablePaymentBoxes: React.FC<Props> = ({ data, className = '' }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.TablePaymentBoxes}>
      <div
        className={classNames(styles.TablePaymentBoxes__toggle, {
          [styles.TablePaymentBoxes__toggle_active]: isActive,
        })}
        onClick={handleToggle}
      >
        <p>{t('coinRecycler')}</p>
        <ArrowThinIco className={classNames(styles.arrow, { [styles.arrow_active]: isActive })} />
      </div>
      <div
        className={classNames(styles.TablePaymentBoxes__table, {
          [styles.TablePaymentBoxes__table_active]: isActive,
        })}
      >
        <table className={classNames(styles.TablePaymentBoxes, className)}>
          <colgroup>
            <col style={{ width: '94px' }} />
            <col style={{ width: '58px' }} />
            <col style={{ width: '74px' }} />
            <col style={{ width: '86px' }} />
            <col style={{ width: '112px' }} />
            <col style={{ width: '106px' }} />
          </colgroup>
          <thead>
            <tr>
              <td>{t('denomination')}</td>
              <td>{t('totalCount')}</td>
              <td>{t('totalAmount')}</td>
              <td>{t('warningCount')}</td>
              <td>{t('criticalCount')}</td>
              <td>{t('maxCount')}</td>
            </tr>
          </thead>
          <tbody>
            {data.map((td, ind) => (
              <tr key={ind}>
                <td>
                  <div className={styles.TablePaymentBoxes__denomination}>
                    {td.type === 'coin' ? <CoinIco /> : <MoneyIco />}
                    {formatAmountDecimal(td.denomination)}
                  </div>
                </td>
                <td>{formatAmountInteger(td.totalCount)}</td>
                <td>{formatAmountInteger(td.totalAmount)}</td>
                <td>
                  <div className={styles.TablePaymentBoxes__edit}>
                    {formatAmountInteger(td.warningCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
                <td>
                  <div className={styles.TablePaymentBoxes__edit}>
                    {formatAmountInteger(td.criticalCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
                <td>
                  <div className={styles.TablePaymentBoxes__edit}>
                    {formatAmountInteger(td.maxCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>{t('total')}</td>
              <td>{formatAmountInteger(218)}</td>
              <td>{formatAmountInteger(10000)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePaymentBoxes;
