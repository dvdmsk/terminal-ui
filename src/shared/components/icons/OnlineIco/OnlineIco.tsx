import React from 'react';
import styles from './OnlineIco.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
  status?: boolean;
};

const OnlineIco: React.FC<Props> = ({ className = '', status = true }) => {
  return (
    <svg className={classNames(className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10.0001" cy="10" r="3.78571" stroke="#32D199" className={classNames({
        [styles.OnlineIco__online] : status,
        [styles.OnlineIco__offline] : !status
      })}/>
      <circle opacity="0.5" cx="9.99979" cy="9.99997" r="6.64286" stroke="#32D199" className={classNames({
        [styles.OnlineIco__online] : status,
        [styles.OnlineIco__offline] : !status
      })}/>
      <circle opacity="0.2" cx="10" cy="10" r="9.5" stroke="#32D199" className={classNames({
        [styles.OnlineIco__online] : status,
        [styles.OnlineIco__offline] : !status
      })}/>
    </svg>
  );
};

export default OnlineIco;
