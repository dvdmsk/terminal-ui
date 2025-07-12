import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import styles from './TerminalList.module.scss';
import { useAppSelector } from '@/app/hooks';
import TerminalItem from '../TerminalItem/TerminalItem';
import { RootState } from '@/app/store';
import { Terminal } from '@/types/terminals';
import { useSelector } from 'react-redux';
import { selectFilteredSortedTerminals, selectTotalPages } from '@/app/pagination';

type Props = {
  terminals: Terminal[];
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};
// The main container for the terminal list.
const TerminalList = forwardRef<HTMLDivElement, Props>(({ terminals, itemRefs }, ref) => {
  // We use the SelectfilteredSortedterminals' selector
  // To obtain a filtered and sorted list of terminals from Redux.
  // This selector already contains the logging of filtration by search
  // and sorting by name or status.

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={styles.TerminalList} ref={ref}>
      {terminals.map((terminal, index) => (
        <TerminalItem
          terminal={terminal}
          key={terminal.id}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
});

export default TerminalList;
