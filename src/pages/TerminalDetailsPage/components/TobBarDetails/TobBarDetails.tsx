import React, { useRef, useState } from 'react';
import { terminalInfo } from '@/api/terminals';
import BranchInput from '@/shared/BranchInput/BranchInput';
import LanguagesSelector from '@/shared/LanguagesSelector/LanguagesSelector';
import BellIco from '@/shared/Icons/BellIco/BellIco';
import ExportButton from '@/shared/ExportButton/ExportButton';
import styles from './TobBarDetails.module.scss';
import Notification from '@/shared/Notification/Notification';

const TobBarDetails = () => {
  const details = terminalInfo;
  const notificationAnchorRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className={styles.TobBarDetails}>
      <div className={styles.TobBarDetails__content}>
        <p className={styles.TobBarDetails__name}>{details.name}</p>

        <BranchInput name={details.branch} className={styles.TobBarDetails__branch} />
      </div>

      <div className={styles.TobBarDetails__controls} ref={notificationAnchorRef}>
        <LanguagesSelector />

        <Notification
          className={styles.notification}
          classContent={styles.notification__content}
          anchorRef={notificationAnchorRef}
          notifications={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere fringilla ex vel vulputate. Vivamus tincidunt sed dolor tempor consequat. Proin ac sapien odio.',
          ]}
        />

        <ExportButton />
      </div>
    </div>
  );
};

export default TobBarDetails;
