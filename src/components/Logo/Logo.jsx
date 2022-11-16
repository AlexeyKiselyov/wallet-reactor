import style from './Logo.module.css';
import Icons from 'images/sprite.svg';
import { getLang } from "redux/lang/langSelector";
import { langOptionsLogo } from '../../assets/lang/langOptionsLogo';
import { useSelector } from 'react-redux';

export default function Logo() {
  const lang = useSelector(getLang);
  const { logoText } = langOptionsLogo;
  
  return (
    <span className={style.logo}>
      <svg className={style.logoIcon}>
        <use href={`${Icons}#icon-logo`} />
      </svg>
      <span className={style.logoText}>{logoText[lang]}</span>
    </span>
  );
}
