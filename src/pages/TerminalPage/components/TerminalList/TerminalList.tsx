import React from 'react'
import styles from './TerminalList.module.scss';
import { useAppSelector } from '../../../../app/hooks';
import TerminalItem from '../TerminalItem/TerminalItem';
import { RootState } from 'src/app/store';
import { Terminal } from 'src/types/terminals';
import { useSelector } from 'react-redux';
import { selectFilteredSortedTerminals, selectTotalPages } from './../../../../app/pagination';



// The main container for the terminal list.
const TerminalList = () => {
  
  // We use the SelectfilteredSortedterminals' selector
  // To obtain a filtered and sorted list of terminals from Redux.
  // This selector already contains the logging of filtration by search
  // and sorting by name or status.
  const terminals = useSelector(selectFilteredSortedTerminals);
  
  return (
    <div className={styles.TerminalList}>
      {terminals.map((terminal, index) => (
        <TerminalItem terminal={terminal} key={index}/>
      ))}
    </div>
  )
}

export default TerminalList
