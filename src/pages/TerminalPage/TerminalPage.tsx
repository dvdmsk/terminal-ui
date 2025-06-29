import React from 'react';
import styles from './TerminalPage.module.scss';
import TopBar from './components/TopBar/TopBar';
import TerminalList from './components/TerminalList/TerminalList';
import FilterBlock from './components/FilterBlock/FilterBlock';
import { useTranslation } from 'react-i18next';
import ArrowLeftIco from './../../shared/components/icons/ArrowLeftIco/ArrowLeftIco';
import ArrowRightIco from './../../shared/components/icons/ArrowRightIco/ArrowRightIco';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectTotalPages } from './../../app/pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentPage } from './../../features/terminal/terminalSlice';

// The main container for the entire page of the terminals.
const TerminalPage = () => {
  const { t } = useTranslation();

  // We get the total number of pages using the SelectTotalpages' selector.
  const totalPages = useSelector(selectTotalPages);

  // We get the current page from the Redux `terminal` using` UseaAppsselector`.
  const currentPage = useAppSelector((state) => state.terminal.currentPage);

  // We get the function `Dispatch` for sending Redux.
  const dispatch = useAppDispatch();

  const handlePagination = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    // Applies styles from the module terminalpage.module.scss.
    <div className={styles.TerminalPage}>
      {/* The upper panel component containing the language selector and the export button. */}
      <TopBar />

      {/* The component of the filter block that allows to filter terminals. */}
      <FilterBlock />

      {/* A component of the terminal list that displays filtered and sorted terminals. */}
      <TerminalList />

      {/* Horizontal line-separator. */}
      <hr className={styles.TerminalPage__hr} />

      {/* Container for PAGINATION ITEMS. */}
      <div className={styles.TerminalPage__pagination}>
        {/* A text block that displays the current page and the total number of pages. */}
        <p className={styles.TerminalPage__paginationText}>
          {currentPage} {t('of')} {totalPages} {/* Example: "1 of 5" */}
        </p>

        {/* The Previous Page button. */}
        {/* Deactivated (`disabled`) if the current page <= 1. */}
        {/* When clicking, causes `Handlepagination 'to switch to the previous page. */}
        {/* Applies basic and specific styles for a push button. */}
        <button
          disabled={currentPage <= 1}
          onClick={() => handlePagination(currentPage - 1)}
          className={classNames(styles.TerminalPage__btn, styles.TerminalPage__btn_prev)}
        >
          <ArrowLeftIco /> {/* Іконка стрілки вліво. */}
        </button>

        {/*"Next Page" button. */}
        {/*Deactivated (`disabled`) if the current page> = the total number of pages. */}
        {/*When clicking causes `Handlepagination 'to switch to the next page. */}
        {/*Uses basic and specific styles for the Pagination button. */}
        <button
          disabled={currentPage >= totalPages}
          onClick={() => handlePagination(currentPage + 1)}
          className={classNames(styles.TerminalPage__btn, styles.TerminalPage__btn_next)}
        >
          <ArrowRightIco /> {/* The arrow icon to the right. */}
        </button>
      </div>
    </div>
  );
};

export default TerminalPage;
