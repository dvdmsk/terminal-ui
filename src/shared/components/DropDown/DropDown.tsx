import React, { useEffect, useRef, useState } from 'react';
import styles from './DropDown.module.scss';
import classNames from 'classnames';
import ArrowsIco from '../icons/ArrowsIco/ArrowsIco';

interface DropDownProps {
  items: Record<string, React.ReactNode>;
  onSelect: (key: string) => void;
  defaultKey?: string;
  className?: string;
}

const DropDown: React.FC<DropDownProps> = ({ items, onSelect, defaultKey, className = '' }) => {
  const keys = Object.keys(items);
  const [activeKey, setActiveKey] = useState(defaultKey ?? keys[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Ref to obtain a reference to the root Dom element of the component.
  // Used to identify clicks outside Dropdown.
  const containerRef = useRef<HTMLDivElement>(null);

  // The function-switch to change the state `ISOOPEN` (open/close the list).
  const toggleOpen = () => setIsOpen((prev) => !prev);

  // The element selection handler from the list.
  const handleSelect = (key: string) => {
    // If the key is already active, we do nothing.
    if (key === activeKey) return;

    // Update the active key.
    setActiveKey(key);

    // We call the function `ONSELECT", transmitted through the props.
    onSelect(key);

    // Close the incumbent list after choice.
    setIsOpen(false);
  };

  // Effect for click treatment outside the component (closure Dropdown when clicking from outside).
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // If the Ref exists and the click was out of the container, we close the list.
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    // We add the listener of the event `Click` to the whole document.
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const filteredKeys = keys.filter((key) => key !== activeKey && key !== 'none');

  return (
    <div className={classNames(styles.dropDown, className)} ref={containerRef}>
      <button className={styles.trigger} onClick={toggleOpen}>
        <div className={styles.content}>{items[activeKey]}</div>
        <ArrowsIco className={classNames(styles.arrow, { [styles.open]: isOpen })} />
      </button>

      {/*The List of Items. */}
      {/*Uses basic styles `list` and` list_open` if `isopen` is true. */}
      <ul className={classNames(styles.list, { [styles.list_open]: isOpen })}>
        {filteredKeys.map((key) => (
          <li key={key} className={styles.item} onClick={() => handleSelect(key)}>
            {items[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
