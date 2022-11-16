import RegistrationForm from 'components/RegistrationForm';
import LoginTestUser from 'components/LoginTestUser';
import React, { useState, useEffect } from 'react';
import style from './RegisterPage.module.css';
import SwitchLang from "components/SwitchLang/SwitchLang";
import { getLang } from "redux/lang/langSelector";
import { langOptionsApp } from '../../assets/lang/langOptionsApp';
import { useSelector } from 'react-redux';

export default function RegistrationPage() {
  const [showTestMode, setShowTestMode] = useState(false);
  const lang = useSelector(getLang);
  const { AppText } = langOptionsApp;
  
  useEffect(() => {
    const onComponentMount = setTimeout(() => setShowTestMode(true), 1000);

    return () => clearTimeout(onComponentMount);
  }, []);
  
  return (
    <div className={style.container}>
      <div className={style.heroContainer}>
        <div className={style.loginImage}></div>

        <div className={style.spanContainer}>
          <span className={style.title}>{AppText[lang]}</span>
        </div>
      </div>
      <div className={style.desktopContainer}>
        <RegistrationForm />
      </div>
      <LoginTestUser showTestMode={showTestMode} onClose={() => setShowTestMode(false)} />
      <SwitchLang />    
    </div>
  );
}
