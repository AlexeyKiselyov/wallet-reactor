import RegistrationForm from 'components/RegistrationForm';
import LoginTestUser from 'components/LoginTestUser';
import React, { useState, useEffect } from 'react';
import style from './RegisterPage.module.css';
import SwitchLang from "components/SwitchLang/SwitchLang";
import { getLang } from "redux/lang/langSelector";
import { langOptionsApp } from '../../assets/lang/langOptionsApp';
import { useSelector } from 'react-redux';
import SwitchTheme from "components/SwitchTheme/SwitchTheme";
import { getTheme } from '../../redux/theme/themeSelector';

export default function RegistrationPage() {
  const [showTestMode, setShowTestMode] = useState(false);
  const lang = useSelector(getLang);
  const { AppText } = langOptionsApp;
  const theme = useSelector(getTheme);
  
  useEffect(() => {
    const onComponentMount = setTimeout(() => setShowTestMode(true), 1000);

    return () => clearTimeout(onComponentMount);
  }, []);
  
  return (
    <div className={style.container}
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-bg-color)" 
    }}
    >
      <div className={style.heroContainer}>
        <div className={style.loginImage}></div>

        <div className={style.spanContainer}
        style={{
          color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
        }}
        >
          <span className={style.title}>{AppText[lang]}</span>
        </div>
      </div>
      <div className={style.desktopContainer}>
        <RegistrationForm />
      </div>
      <LoginTestUser showTestMode={showTestMode} onClose={() => setShowTestMode(false)} />
      <SwitchTheme />
      <SwitchLang />    
    </div>
  );
}
