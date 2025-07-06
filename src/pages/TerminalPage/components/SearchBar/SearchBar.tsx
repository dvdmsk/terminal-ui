import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from './../../../../../../app/hooks';
import { setQueryBranch } from './../../../../../../features/terminal/terminalSlice';

/* Component to search for a branch
*/

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const { t } = useTranslation(); //i18n -for translation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value); 
  };

  return (
    <div className={styles.SearchBar}>
      <p className={styles.SearchBar__title}>{t('branchName')}</p>
      <input
        type="text"
        placeholder={t('search')}
        className={styles.SearchBar__btn}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};