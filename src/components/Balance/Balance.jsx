import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth'

import styles from './Balance.module.scss';

const Balance = () => {
  const balance = useSelector(authSelectors.selectBalance);
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Current Balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {balance}.00
      </p>
    </div>
  );
};

export default Balance;
