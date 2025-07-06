import React from 'react';
import styles from './ArrowDownIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ArrowDownIco: React.FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={classNames(styles.ArrowDownIco, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M9.39355 1.16619L9.32397 1.32575C7.90301 2.79806 6.44509 4.24758 4.97878 5.67526C4.73211 5.82283 4.48137 5.7614 4.28461 5.56896C2.88429 4.1396 1.42349 2.76159 0.0591574 1.30152C-0.0569763 1.06661 0.00756931 0.868652 0.166413 0.679574C0.400361 0.401476 0.730527 0.0909853 1.10844 0.325413L4.70428 3.89798L8.26869 0.344129C8.52831 0.174967 8.75026 0.234953 8.97197 0.423071C9.13873 0.56488 9.31845 0.758276 9.39355 0.96463V1.16643V1.16619Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowDownIco;
