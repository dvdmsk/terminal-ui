import React, { useState } from 'react';
import styles from './FilterBlock.module.scss';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/app/hooks';
import { setQueryBranch, setOrderName, setOrderStatus, setCurrentPage } from '@/features/terminal/terminalSlice';
import { Order } from '@/types/orders';
import FilterIco from '@/shared/Icons/FilterIco/FilterIco';
import SortName from '../SortName/SortName';
import { SearchBar } from '../SearchBar';
import SortStatus from '../SortStatus/SortStatus';


// The Main Component with Search and Sorting, 
// uses Redux to Save Sorting Parameters
// Note: Filters will be applied only after pressing the "Apply" button, 
// However, saving the set parameters in the Store occurs immediately after user

const FilterBlock = () => {
  const { t } = useTranslation();
  const [branchInput, setBranchInput] = useState('');
  const [sortName, setSortName] = useState<Order>('all'); // The starting value of the filtration parameter
  const [sortStatus, setSortStatus] = useState<Order>('all');

  const dispatch = useAppDispatch();

  const handleApplyFilters = () => {
    if (sortName !== undefined) {
      dispatch(setOrderName(sortName));
    }
    if (sortStatus !== undefined) {
      dispatch(setOrderStatus(sortStatus));
    }
    dispatch(setQueryBranch(branchInput));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.FilterBlock}>
      <FilterIco />

      <div className={styles.FilterBlock__controls}>
        <SortName value={sortName ?? ''} onChange={setSortName} />

        <SearchBar value={branchInput} onChange={setBranchInput} />

        <SortStatus value={sortStatus ?? ''} onChange={setSortStatus}/>
      </div>

      <button className={styles.FilterBlock__apply} onClick={handleApplyFilters}>
        {t('apply')}
      </button>
    </div>
  );
};

export default FilterBlock;
