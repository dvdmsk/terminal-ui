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
  // const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // console.log(refs.current[0]?.clientHeight);
    // console.log(ref.current?.clientWidth);
    // console.log(windowHeight);
    // const list = ref.current;
    // if (!list) return;
    // const windowHeight = window.innerHeight;
    // const computedStyle = window.getComputedStyle(list);
    // const rowGap = computedStyle.rowGap;
    // const itemHeight = refs.current[0]?.clientHeight;
    // const topY = list.scrollTop + list.offsetTop;
    // console.log(topY);
    // const maxHeight =
  }, []);
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
