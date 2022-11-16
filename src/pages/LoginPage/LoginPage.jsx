import LoginForm from 'components/LoginForm';
import s from './LoginPage.module.css';
import SwitchLang from 'components/SwitchLang/SwitchLang';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsApp } from '../../assets/lang/langOptionsApp';
import { useSelector } from 'react-redux';
import SwitchTheme from "components/SwitchTheme/SwitchTheme";
import { getTheme } from '../../redux/theme/themeSelector';

export default function LoginPage() {
  const lang = useSelector(getLang);
  const theme = useSelector(getTheme);
  const { AppText } = langOptionsApp;

  return (
    <div className={s.container}
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-bg-color)" 
    }}
    >
      <div className={s.heroContainer}>
        <div className={s.loginImage}></div>

        <div className={s.spanContainer}>
          <span
            className={s.title}
            style={{
              color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
            }}
          >
            {AppText[lang]}
          </span>
        </div>
      </div>
      <div className={s.desktopContainer}>
        <LoginForm />
      </div>
      <SwitchTheme />
      <SwitchLang />
    </div>
  );
}
