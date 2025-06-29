import React from 'react';
import styles from './EditIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ArrowsIco: React.FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={classNames(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
    >
      <path d="M5 0L9.33013 4.5H0.669873L5 0Z" fill="#1C222E" />
      <path d="M5 12L0.669872 7.5L9.33013 7.5L5 12Z" fill="#1C222E" />
    </svg>
  );
};

export default ArrowsIco;
