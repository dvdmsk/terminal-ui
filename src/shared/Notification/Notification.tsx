import React, { useEffect, useRef, useState } from 'react';
import styles from './Notification.module.scss';
import classNames from 'classnames';
import NotificationPortal from '../Portals/NotificationPortal';
import BellIco from '../Icons/BellIco/BellIco';

type Props = {
  className?: string;
  classContent?: string;
  notifications?: string[];
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  anchorRef?: React.RefObject<HTMLElement | null>;
};

const Notification: React.FC<Props> = ({
  classContent = '',
  notifications = [],
  className = '',
  onClick = () => {},
  anchorRef = null,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsActive((prev) => !prev);
  };
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);

  const [anchorCoords, setAnchorCoords] = useState({ top: 0, left: 0, width: 0 });
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (isActive && contentRef.current) {
      const width = contentRef.current.offsetWidth;
      setContentWidth(width);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && anchorRef?.current && bellRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const bell = bellRef.current.getBoundingClientRect();
      setAnchorCoords({
        top: bell.top + bell.height,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isActive, anchorRef]);

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
      <div className={styles.Notification__bell} ref={bellRef}>
        <BellIco />
        {notifications.length !== 0 && <div className={styles.circle}></div>}
      </div>

      {notifications.length !== 0 && isActive && (
        <NotificationPortal>
          <div
            ref={contentRef}
            className={classNames(
              styles.Notification__content,
              styles.Notification__content_active,
              classContent,
            )}
            style={{
              position: 'absolute',
              top: anchorCoords.top + 4,
              left: anchorCoords.left + anchorCoords.width - contentWidth,
            }}
          >
            {notifications.map((notification, ind) => (
              <p key={ind} className={styles.Notification__message}>
                {notification}
              </p>
            ))}
          </div>
        </NotificationPortal>
      )}
    </div>
  );
};

export default Notification;
