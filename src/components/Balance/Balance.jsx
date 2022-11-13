import React from 'react';
// import { useSelector } from 'react-redux';
// import { transactionsSelectors } from '../../../src/redux/';
// import styles from './Balance.module.scss';

const Balance = () => {
  const balance = 20000;
  // useSelector(transactionsSelectors.getBalance);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Current Balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {balance}
      </p>
    </div>
  );
};

export default Balance;
