import React from 'react';
import styles from './ArrowThinIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ArrowThinIco: React.FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={classNames(styles.ArrowThinIco, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
    >
      <path
        d="M5.63103 0.765514L5.37361 0.768401C4.94891 0.88559 4.74226 1.18473 4.71386 1.6208L4.8167 10.6651C4.79077 10.9425 4.48285 11.0208 4.28956 10.8375L1.52901 8.11359C0.745312 7.44996 -0.273205 8.42597 0.407411 9.24471C1.67516 10.5037 2.95655 11.7486 4.2236 13.0084C4.43776 13.2215 5.07503 13.9645 5.31489 14.0377C5.59455 14.123 5.99244 14.0777 6.20316 13.858L10.7857 9.12833C11.4404 8.3587 10.4483 7.33471 9.66459 7.99658L6.91542 10.8349C6.74496 10.9818 6.50067 10.9247 6.42392 10.7115L6.3088 1.55135C6.26861 1.12536 6.0363 0.872681 5.63103 0.765514Z"
        fill="#487868"
      />
    </svg>
  );
};

export default ArrowThinIco;
