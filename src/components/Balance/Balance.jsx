import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth'

import styles from './Balance.module.scss';

import { getLang } from "redux/lang/langSelector";
import { langOptionsBalance } from '../../assets/lang/langOptionsBalance';

const Balance = () => {
  const balance = useSelector(authSelectors.selectBalance);
  
  const lang = useSelector(getLang);
  const { CurrentBalanceText } = langOptionsBalance;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{CurrentBalanceText[lang]}</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {balance}.00
      </p>
    </div>
  );
};

export default Balance;
