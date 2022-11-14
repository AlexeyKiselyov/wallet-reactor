import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TEST_USER } from 'variables';
import Icons from 'images/sprite.svg';
import style from './LoginTestUser.module.css';
import { toast } from 'react-toastify';
import Spinner from 'components/Spinner';
import { useAuth } from 'hook';
import { authOperations } from 'redux/auth';

export default function LoginTestUser({ showTestMode, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const onLogin = () => {
    dispatch(authOperations.logIn(TEST_USER)).then(response => {
      if (response.payload === 'Request failed with status code 403') {
        toast.error('Oops... Password is incorrect!');
        return;
      }
      if (response.payload === 'Request failed with status code 404') {
        toast.error('Oops... User with such email not found!');
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
          Before creating your personal account you can {'   '}
          <button className={style.button} type="button" onClick={onLogin}>
            run demo version
          </button>
        </p>
      </div>
      {isLoading && <Spinner size={80} color="white" />}
    </div>
  );
}
