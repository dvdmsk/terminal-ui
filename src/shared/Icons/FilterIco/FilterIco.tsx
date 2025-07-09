import React from 'react';
import styles from './FilterIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const FilterIco: React.FC<Props> = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      className={classNames(className, styles.FilterIco)}
    >
      <path
        d="M1.1672 0.0261683L20.5588 0C21.654 0.046949 22.371 1.20297 21.798 2.19044L15.3053 12.4515L15.2824 22.7433C15.1376 23.69 14.4215 24.1349 13.5047 23.9663C12.3757 23.7593 8.71459 22.4932 7.63234 21.9914C7.01424 21.7051 6.75536 21.3872 6.69409 20.6837C6.46278 18.0561 6.89093 15.1091 6.67877 12.4477L0.149296 2.03574C-0.29647 1.25993 0.318564 0.169324 1.1672 0.0261683ZM17.8957 2.91084H4.0846L9.44987 11.4448L9.59386 12.1436L9.60305 19.5423L12.3895 20.5398V11.8658C12.3895 11.815 12.548 11.4094 12.5909 11.3178L17.8949 2.91007L17.8957 2.91084Z"
        fill="#9EA2A5"
      />
    </svg>
  );
};

export default FilterIco;
