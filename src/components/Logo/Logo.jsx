import style from './Logo.module.css';
import Icons from 'images/sprite.svg';
import { getLang } from "redux/lang/langSelector";
import { langOptionsLogo } from '../../assets/lang/langOptionsLogo';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelector';

export default function Logo() {
  const lang = useSelector(getLang);
  const { logoText } = langOptionsLogo;
  const theme = useSelector(getTheme);
  
  return (
    <span className={style.logo}>
      <svg className={style.logoIcon}>
        <use href={`${Icons}#icon-logo`} />
      </svg>
      <span className={style.logoText}
      style={{
        color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
      }}
      >{logoText[lang]}</span>
    </span>
  );
}
