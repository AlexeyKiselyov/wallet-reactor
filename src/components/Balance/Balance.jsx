import React from 'react';
// import { useSelector } from 'react-redux';
// import { transactionsSelectors } from '../../../src/redux/';
// import styles from './Balance.module.scss';

export const Balance = () => {
  const balance = 20000;
  // useSelector(transactionsSelectors.getBalance);
  return (
    <div >
      <h2>Current Balance</h2>
      <p >
        <span >&#8372;</span>
        {balance}
      </p>
    </div>
  );
};

export default Balance;
