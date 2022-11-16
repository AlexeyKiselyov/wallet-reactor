import LoginForm from 'components/LoginForm';
import MyStyle from './LoginPage.module.css';
import SwitchLang from "components/SwitchLang/SwitchLang";
import { getLang } from "redux/lang/langSelector";
import { langOptionsApp } from '../../assets/lang/langOptionsApp';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const lang = useSelector(getLang);
  const { AppText } = langOptionsApp;

  return (
    <div className={MyStyle.container}>
      <div className={MyStyle.heroContainer}>
        <div className={MyStyle.loginImage}></div>

        <div className={MyStyle.spanContainer}>
          <span className={MyStyle.title}>{AppText[lang]}</span>
        </div>
      </div>
      <div className={MyStyle.desktopContainer}>
        <LoginForm /> 
      </div> 
      <SwitchLang />
    </div>
  );
}
