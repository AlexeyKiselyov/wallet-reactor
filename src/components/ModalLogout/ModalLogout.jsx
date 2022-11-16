import style from './ModalLogout.module.css';
import { authOperations } from 'redux/auth';
import { closeModalWindow, resetError } from 'redux/index';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import { getLang } from "redux/lang/langSelector";
import { langOptionsModalLogOut } from '../../assets/lang/langOptionsModalLogOut';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelector';

function ModalLogoutAndDelete({ action }) {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const { TitleText, YesText, NoText } = langOptionsModalLogOut;
  const theme = useSelector(getTheme);

  const onLogout = () => {
    cleanState();
  };

  const cleanState = () => {
    dispatch(closeModalWindow());
    dispatch(authOperations.logOut());
    dispatch(resetError());
  };

  const onCancelLogout = e => {
    dispatch(closeModalWindow());
  };

  return (
    <div className={style.modal}
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-addForm-color)", 
    }}
    >
      <h2 className={style.title}
      style={{
        color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
      }}
      >{TitleText[lang]}</h2>
      <div className={style.wrapper}>
        {action === 'logout' && (
          <Button
            className="btn__secondary-logout"
            onClick={onLogout}
            type="button"
            text={YesText[lang]}
          />
        )}
        <Button
          className="btn__primary-logout"
          onClick={onCancelLogout}
          type="button"
          text={NoText[lang]}
        />
      </div>
    </div>
  );
}

export default ModalLogoutAndDelete;
