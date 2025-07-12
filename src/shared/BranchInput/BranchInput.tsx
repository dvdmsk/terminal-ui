import React from 'react';
import styles from './BranchInput.module.scss';
import EditIco from '../Icons/EditIco/EditIco';
import classNames from 'classnames';

type Props = {
  name: string;
  className?: string;
};
const BranchInput: React.FC<Props> = ({ name, className = '' }) => {
  return (
    <div className={classNames(styles.BranchInput, styles.BranchInput_branch, className)}>
      <p>{name}</p> 
      <div>
        <EditIco />
      </div>
    </div>
  );
};

export default BranchInput;
