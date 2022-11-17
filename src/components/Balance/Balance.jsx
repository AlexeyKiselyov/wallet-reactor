import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth'

import styles from './Balance.module.scss';

import { getLang } from "redux/lang/langSelector";
import { langOptionsBalance } from '../../assets/lang/langOptionsBalance';
import { getTheme } from '../../redux/theme/themeSelector';

const Balance = () => {
  const balance = useSelector(authSelectors.selectBalance);
  
  const lang = useSelector(getLang);
  const { CurrentBalanceText } = langOptionsBalance;
  const theme = useSelector(getTheme);
  
  return (
    <div className={styles.wrapper}
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-form-color)"  
    }}
    >
      <h2 className={styles.title}>{CurrentBalanceText[lang]}</h2>
      <p className={styles.text}
      style={{
        color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
      }}
      >
        <span className={styles.currency}
        >&#8372;</span>
        {balance ? Math.ceil((balance) * 100) / 100 : '0.00'}
       
      </p>
    </div>
  );
};

export default Balance;
