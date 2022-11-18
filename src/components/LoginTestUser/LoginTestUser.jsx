import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TEST_USER } from 'variables';
import Icons from 'images/sprite.svg';
import style from './LoginTestUser.module.css';
import { toast } from 'react-toastify';
import Spinner from 'components/Spinner';
import { useAuth } from 'hook';
import { authOperations } from 'redux/auth';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsLoginTestUser } from '../../assets/lang/langOptionsLoginTestUser';
import { useSelector } from 'react-redux';

export default function LoginTestUser({ showTestMode, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const lang = useSelector(getLang);
  const { MassageFirstPartText, MassageSecondPartText, Error403Text, Error404Text } = langOptionsLoginTestUser;

  TEST_USER.password = process.env.REACT_APP_TEST_USER_PASSWORD;

  const onLogin = () => {
    dispatch(authOperations.logIn(TEST_USER)).then(response => {
      if (response.payload === 'Request failed with status code 403') {
        toast.error(Error403Text[lang]);
        return;
      }
      if (response.payload === 'Request failed with status code 404') {
        toast.error(Error404Text[lang]);
        return;
      }
      if (response.payload.token) {
        navigate('/home', { replace: true });
      }
    });
  };

  return (
    <div
      className={
        style[showTestMode ? 'modalContainer' : 'modalContainerHidden']
      }
    >
      <div className={style[isLoading ? 'wrapperLoading' : 'wrapper']}>
        <button
          type="button"
          className={style.buttonHide}
          onClick={onClose}
          aria-label="hide test user mode"
        >
          <svg className={style.icon} width="20" height="20">
            <use href={`${Icons}#icon-close-cross`}></use>
          </svg>
        </button>
        <p className={style.text}>
          {MassageFirstPartText[lang]} {'   '}
          <button className={style.button} type="button" onClick={onLogin}>
            {MassageSecondPartText[lang]}
          </button>
        </p>
      </div>
      {isLoading && <Spinner size={80} color="white" />}
    </div>
  );
}
