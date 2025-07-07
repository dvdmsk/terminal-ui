// 1. Filtering, Sorting and Pagination

import { Terminal } from '@/types/terminals';
import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

// Selector access to terminal state
export const selectTerminalsState = (state: RootState) => state.terminal;

// Mammoized selector to obtain filtered, sorted and screwed terminal list
export const selectFilteredSortedTerminals = createSelector(
  [selectTerminalsState],
  (terminalState): Terminal[] => {
    const { terminals, orderName, orderStatus, queryBranch, currentPage, itemsPerPage } =
      terminalState;

    let result = [...terminals]; // We create a copy of the array so you do not mutat the state
    // Status Filter
    if (orderStatus !== 'all') {
      result = result.filter((t) => (orderStatus === 'asc' ? t.status : !t.status));
    }

    // Search on a branch (Branch)
    if (queryBranch.trim() !== '') {
      const query = queryBranch.toLowerCase();
      result = result.filter((t) => t.branch.toLowerCase().includes(query));
    }

    // Sorting by Terminal title (Name)
    if (orderName !== 'all') {
      result.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return orderName === 'asc' ? -1 : 1;
        if (nameA > nameB) return orderName === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Deduction of the range of items for the current page
    const start = (currentPage - 1) * itemsPerPage;

    return result.slice(start, start + itemsPerPage);
  },
);

// 2. Number of Pages
// Selector to count the total number of pages after filtration
export const selectTotalPages = (state: RootState): number => {
  const { terminals, orderStatus, queryBranch, itemsPerPage } = state.terminal;

  let filtered = [...terminals];
  if (orderStatus !== 'all') {
    filtered = filtered.filter((t) => (orderStatus === 'asc' ? t.status : !t.status));
  }

  if (queryBranch.trim() !== '') {
    const query = queryBranch.toLowerCase();
    filtered = filtered.filter((t) => t.branch.toLowerCase().includes(query));
  }

  return Math.ceil(filtered.length / itemsPerPage) || 1; // Guarantee minimum 1 page
};
