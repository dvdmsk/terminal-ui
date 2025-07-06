import React from 'react';
import styles from './ArrowRightIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ArrowRightIco: React.FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={classNames(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
    >
      <path
        d="M0.289376 0.710155C0.679376 0.320155 1.31953 0.32039 1.69953 0.70039L6.28938 5.29023C6.67938 5.68023 6.67938 6.31039 6.28938 6.70039L1.69953 11.2902C1.30951 11.68 0.679285 11.6801 0.289376 11.2902C-0.100417 10.9003 -0.100312 10.2701 0.289376 9.88008L4.17024 6.00019L0.289376 2.12031C-0.100444 1.73041 -0.100286 1.10015 0.289376 0.710155Z"
        fill="#1C222E"
      />
    </svg>
  );
};

export default ArrowRightIco;
