import React, { useEffect, useRef, useState } from 'react';
import styles from './Notification.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
  classContent?: string;
  notifications?: string[];
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Notification: React.FC<Props> = ({
  classContent = '',
  notifications = [],
  className = '',
  onClick = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsActive((prev) => !prev);
  };
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    // We get all subsidiaries (message)
    const messages = container.querySelectorAll(`.${styles.Notification__message}`);

    // If there are no messages -we zero the height
    if (messages.length === 0) {
      container.style.maxHeight = '0px';
      return;
    }

    // Determine the full height of 1 or 2 messages
    const height1 = messages[0].getBoundingClientRect().height;
    const height2 = messages[1]?.getBoundingClientRect().height || 0;

    const totalHeight = height1 + height2;

    // If more than 2 -limit the height
    if (messages.length > 2) {
      container.style.maxHeight = `${totalHeight}px`;
      container.style.overflowY = 'auto';
    } else {
      // Show completely (all messages)
      container.style.maxHeight = 'none';
      container.style.overflowY = 'visible';
    }
  }, [notifications, isActive]);

  return (
    <div className={classNames(styles.Notification, className)} onClick={handleClick} ref={ref}>
      <div className={styles.Notification__bell}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="33"
          viewBox="0 0 37 33"
          fill="none"
        >
          <path
            d="M17.827 4.02319C21.7737 3.72639 25.418 6.30536 26.4678 10.2452C26.9889 12.2002 26.6823 14.2623 26.7805 16.2689L29.4339 21.4134C29.669 22.0219 29.2488 22.6609 28.6206 22.7033H8.3495C7.64607 22.6387 7.33852 21.9621 7.58297 21.313L10.1897 16.2689C10.2761 14.1094 9.96671 11.9174 10.6309 9.83214C11.6442 6.65331 14.5809 4.26738 17.827 4.02319ZM26.9618 20.7682C26.9043 20.565 26.7935 20.3604 26.6987 20.1721C26.1953 19.1751 25.5722 18.1568 25.1118 17.1497C24.9866 16.8756 24.9174 16.7496 24.8945 16.4321C24.6856 13.5476 25.4946 11.2292 23.6872 8.65414C21.1562 5.04869 15.941 5.02312 13.3507 8.57499C11.5404 11.0565 12.1948 13.8676 12.0639 16.7665L10.0088 20.7686H26.9623L26.9618 20.7682Z"
            fill="#1C222E"
          />
          <path
            d="M14.4721 23.7225C15.3219 23.5729 15.4798 24.3344 15.901 24.8513C17.1728 26.412 19.5228 26.535 20.9227 25.0762C21.3186 24.6635 21.557 23.8533 22.1183 23.7321C22.912 23.5613 23.4719 24.305 23.1788 25.0747C22.4576 26.9718 20.0047 28.1536 18.1113 28.0233C16.5446 27.9152 14.2978 26.605 13.7893 24.9989C13.6205 24.4662 13.9131 23.8205 14.4721 23.722V23.7225Z"
            fill="#1C222E"
          />
        </svg>
        {notifications.length !== 0 && <div className={styles.circle}></div>}
      </div>

      {notifications.length !== 0 && (
        <div
          ref={contentRef}
          className={classNames(
            styles.Notification__content,
            {
              [styles.Notification__content_active]: isActive,
            },
            classContent,
          )}
        >
          {notifications.map((notification, ind) => (
            <p key={ind} className={styles.Notification__message}>
              {notification}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
