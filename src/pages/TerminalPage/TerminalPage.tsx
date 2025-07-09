import React, { useLayoutEffect, useRef } from 'react';
import styles from './TerminalPage.module.scss';

import { useTranslation } from 'react-i18next';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectFilteredSortedTerminals, selectTotalPages } from '@/app/pagination';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setCurrentPage } from '@/features/terminal/terminalSlice';
import TopBar from '@/shared/TopBar/TopBar';
import FilterBlock from './components/FilterBlock/FilterBlock';
import TerminalList from './components/TerminalList/TerminalList';
import ArrowLeftIco from '@/shared/Icons/ArrowLeftIco/ArrowLeftIco';
import ArrowRightIco from '@/shared/Icons/ArrowRightIco/ArrowRightIco';

// The main container for the entire page of the terminals.
const TerminalPage = () => {
  const { t } = useTranslation();

  // We get the total number of pages using the SelectTotalpages' selector.
  const totalPages = useSelector(selectTotalPages);

  // We get the current page from the Redux `terminal` using` UseaAppsselector`.
  const currentPage = useAppSelector((state) => state.terminal.currentPage);

  // We get the function `Dispatch` for sending Redux.
  const dispatch = useAppDispatch();

  const terminals = useSelector(selectFilteredSortedTerminals);

  const handlePagination = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const listRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const paginationRefs = useRef<HTMLDivElement | null>(null);

 useLayoutEffect(() => {
    const handleResize = () => {
      const list = listRef.current;
      const pagination = paginationRefs.current;
      const wrapper = wrapperRef.current;
      const windowHeight = window.innerHeight; 

      if (!list || !pagination || itemRefs.current.length === 0 || !wrapper) {
        return;
      }

      const computedStyle = window.getComputedStyle(list);
      const rowGap = parseFloat(computedStyle.rowGap) || 0;

      const firstItemHeight = itemRefs.current[0]?.clientHeight || 0; 
      const scrollTopOffset = list.offsetTop; 

      const itemAndGapHeight = firstItemHeight + rowGap;
      if (itemAndGapHeight === 0) {
        return;
      }

      const availableHeight = windowHeight - pagination.offsetHeight - scrollTopOffset;
      const maxCountItem = Math.floor(availableHeight / itemAndGapHeight);

      // list.style.height = `${Math.max(0, maxCountItem * itemAndGapHeight - rowGap)}px`;
      wrapper.style.maxHeight = `${(availableHeight)}px`;
      list.style.maxHeight = `${(availableHeight)}px`;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [terminals]);

  return (
    <div className={styles.TerminalPage}>
      {/* Applies styles from the module terminalpage.module.scss. */}
      {/* The upper panel component containing the language selector and the export button. */}
      <header className={styles.header}>
        <TopBar />
      </header>
      <main className={styles.TerminalPage__content}>
        {/* The component of the filter block that allows to filter terminals. */}
        <FilterBlock />

        {/* A component of the terminal list that displays filtered and sorted terminals. */}
        <div className={styles.TermnialPage__list} ref={wrapperRef}>
          <TerminalList terminals={terminals} ref={listRef} itemRefs={itemRefs} />
        </div>

        <div ref={paginationRefs}>
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
            <div className={styles.TerminalPage__buttons}>
              <button
                disabled={currentPage <= 1}
                onClick={() => handlePagination(currentPage - 1)}
                className={classNames(styles.TerminalPage__btn, styles.TerminalPage__btn_prev)}
              >
                <ArrowLeftIco /> {/* The arrow icon to the left. */}
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
        </div>
      </main>
    </div>
  );
};

export default TerminalPage;
