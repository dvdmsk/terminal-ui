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
            <col className={styles.col1} />
            <col className={styles.col2} />
            <col className={styles.col3} />
            <col className={styles.col4} />
            <col className={styles.col5} />
            <col className={styles.col6} />
          </colgroup>
          <thead>
            <tr>
              <td className={styles.cell1}><div className={styles.cell1_content}>{t('denomination')}</div></td>
              <td className={styles.cell2}><div className={styles.cell2_content}>{t('totalCount')}</div></td>
              <td className={styles.cell3}><div className={styles.cell3_content}>{t('totalAmount')}</div></td>
              <td className={styles.cell4}><div className={styles.cell4_content}>{t('warningCount')}</div></td>
              <td className={styles.cell5}><div className={styles.cell5_content}>{t('criticalCount')}</div></td>
              <td className={styles.cell6}><div className={styles.cell6_content}>{t('maxCount')}</div></td>
            </tr>
          </thead>
          <tbody>
            {data.map((td, ind) => (
              <tr key={ind}>
                <td>
                  <div
                    className={classNames(
                      styles.cell1_content,
                      styles.TablePaymentBoxes__denomination,
                    )}
                  >
                    {td.type === 'coin' ? <CoinIco /> : <MoneyIco />}
                    {formatAmountDecimal(td.denomination)}
                  </div>
                </td>
                <td>
                  <div className={styles.cell2_content}>{formatAmountInteger(td.totalCount)}</div>
                </td>
                <td>
                  <div className={styles.cell3_content}>{formatAmountInteger(td.totalAmount)}</div>
                </td>
                <td>
                  <div className={classNames(styles.cell4_content, styles.TablePaymentBoxes__edit)}>
                    {formatAmountInteger(td.warningCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
                <td>
                  <div className={classNames(styles.cell5_content, styles.TablePaymentBoxes__edit)}>
                    {formatAmountInteger(td.criticalCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
                <td>
                  <div className={classNames(styles.cell6_content, styles.TablePaymentBoxes__edit)}>
                    {formatAmountInteger(td.maxCount)}
                    <EditIco className={styles.TablePaymentBoxes__edit_ico} />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <div
                  className={classNames(
                    styles.cell1_content,
                    styles.TablePaymentBoxes__denomination,
                  )}
                >
                  {t('total')}
                </div>
              </td>
              <td>
                <div className={styles.cell2_content}>{formatAmountInteger(218)}</div>
              </td>
              <td>
                <div className={styles.cell3_content}>{formatAmountInteger(10000)}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePaymentBoxes;
