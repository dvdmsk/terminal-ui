import React, { useState } from 'react';
import styles from './FilterBlock.module.scss';
import FilterIco from './../../../../shared/components/icons/FilterIco/FilterIco';
import SortName from './components/SortName/SortName';
import { SearchBar } from './components/SearchBar/SearchBar';
import SortStatus from './components/SortStatus/SortStatus';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from './../../../../app/hooks';
import { setQueryBranch, setOrderName, setOrderStatus, setCurrentPage } from './../../../../features/terminal/terminalSlice';
import { Order } from 'src/types/orders';

// The Main Component with Search and Sorting, 
// uses Redux to Save Sorting Parameters
// Note: Filters will be applied only after pressing the "Apply" button, 
// However, saving the set parameters in the Store occurs immediately after user

const FilterBlock = () => {
  const { t } = useTranslation();
  const [branchInput, setBranchInput] = useState('');
  const [sortName, setSortName] = useState<Order>('asc'); // The starting value of the filtration parameter
  const [sortStatus, setSortStatus] = useState<Order>('asc');

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
