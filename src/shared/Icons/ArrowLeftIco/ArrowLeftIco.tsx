import React from 'react';
import styles from './ArrowLeftIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ArrowLeftIco: React.FC<Props> = ({ className = '' }) => {
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
        d="M6.71062 11.2898C6.32062 11.6798 5.68047 11.6796 5.30047 11.2996L0.710624 6.70977C0.320624 6.31977 0.320624 5.68961 0.710624 5.29961L5.30047 0.709766C5.69049 0.320039 6.32071 0.319858 6.71062 0.709766C7.10042 1.09968 7.10031 1.72994 6.71062 2.11992L2.82976 5.99981L6.71062 9.87969C7.10044 10.2696 7.10029 10.8998 6.71062 11.2898Z"
        fill="#9EA2A5"
      />
    </svg>
  );
};

export default ArrowLeftIco;
