import React from 'react';
import styles from './loader.module.css';
const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['lds-dual-ring']}></div>
    </div>
  );
};

export default Loader;
