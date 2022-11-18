import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from 'indicative/validator';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';
import style from './LoginForm.module.css';
import { useAuth } from 'hook';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsLogIn } from '../../assets/lang/langOptionsLogIn';
import { getTheme } from '../../redux/theme/themeSelector';

const rules = {
  email: 'required|email',
  password: 'required|min:6|max:12',
};
const messages = {
  required: field => `${field} is required`,
  email: 'Enter valid email address',
  min: field => `The ${field} is too short`,
  max: field => `The ${field} is too long`,
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState({
    field: null,
    message: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const lang = useSelector(getLang);
  const {
    inputEmail,
    inputPass,
    buttonReg,
    buttonLogIn,
    Error403Text,
    Error404Text,
  } = langOptionsLogIn;
  const theme = useSelector(getTheme);

  const handleChange = event => {
    const { name, value } = event.target;
    setValidationError({ field: null, message: '' });

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    validate({ email, password }, rules, messages)
      .then(() => {
        const singInData = {
          email,
          password,
        };
        dispatch(authOperations.logIn(singInData)).then(response => {
          if (response.payload === 'Request failed with status code 400') {
            toast.error('Oops... Validation error!');
            return;
          }
          if (response.payload === 'Request failed with status code 403') {
            toast.error(Error403Text[lang]);
            return;
          }
          if (response.payload === 'Request failed with status code 404') {
            toast.error(Error404Text[lang]);
            return;
          }
          if (response.payload.token) {
            navigate('/', { replace: true });
            resetForm();
          }
        });
      })
      .catch(errors => {
        setValidationError({
          field: errors[0].field,
          message: errors[0].message,
        });
      });
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const { message, field } = validationError;

  return (
    <div
      className={style.authForm}
      style={{
        backgroundColor: theme === 'light' ? '' : 'var(--dark-mood-form-color)',
      }}
    >
      <div className={style.logo}>
        <Logo />
      </div>
      <form className={style.form} onSubmit={onLoginSubmit}>
        {field && <p className={style[`${field}Error`]}>{message}</p>}
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder={inputEmail[lang]}
            onChange={handleChange}
            name="email"
            value={email}
            autoFocus
          ></input>
          <svg width="21" height="16" className={style.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>

        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder={inputPass[lang]}
            onChange={handleChange}
            name="password"
            type="password"
            value={password}
          ></input>
          <svg width="16" height="21" className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>

        <div className={style.wrapper}>
          <Button
            className="btn__primary"
            type="submit"
            text={buttonLogIn[lang]}
            isLoading={isLoading}
          />
          <Link to="/register" className={style.authLink}>
            <Button
              className="btn__secondary"
              type="buttom"
              text={buttonReg[lang]}
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
