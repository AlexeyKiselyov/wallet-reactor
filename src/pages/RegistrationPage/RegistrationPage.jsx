import RegistrationForm from 'components/RegistrationForm';
import LoginTestUser from 'components/LoginTestUser';
import React, { useState, useEffect } from 'react';
import style from './RegisterPage.module.css';

export default function RegistrationPage() {
  const [showTestMode, setShowTestMode] = useState(false);
 
  useEffect(() => {
    const onComponentMount = setTimeout(() => setShowTestMode(true), 5000);

    return () => clearTimeout(onComponentMount);
  }, []);
  
  return (
    <div className={style.container}>
      <div className={style.heroContainer}>
        <div className={style.loginImage}></div>

        <div className={style.spanContainer}>
          <span className={style.title}>Finance App</span>
        </div>
      </div>
      <div className={style.desktopContainer}>
        <RegistrationForm />
      </div>
      <LoginTestUser showTestMode={showTestMode} onClose={() => setShowTestMode(false)} />
    </div>
  );
}
