import React from 'react';
import LoginForm from 'components/LoginForm';
import MyStyle from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={MyStyle.container}>
      <div className={MyStyle.heroContainer}>
        <div className={MyStyle.loginImage}></div>

        <div className={MyStyle.spanContainer}>
          <span className={MyStyle.title}>Finance App</span>
        </div>
      </div>
      <div className={MyStyle.desktopContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
