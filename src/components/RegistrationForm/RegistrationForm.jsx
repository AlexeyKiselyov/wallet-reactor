import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { validate } from 'indicative/validator';
import { toast } from 'react-toastify';
import style from './RegistrationForm.module.css';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hook';
import { getLang } from "redux/lang/langSelector";
import { langOptionsRegister } from '../../assets/lang/langOptionsRegister';
import { getTheme } from '../../redux/theme/themeSelector';

const rules = {
  email: 'required|email',
  password: 'required|min:6|max:12|confirmed',
  password_confirmation: 'required|min:6|max:12',
  username: 'required|string|min:1|max:12',
};

const messages = {
  required: field => `${field} is required`,
  email: 'Enter valid email address',
  min: field => `The ${field} is too short`,
  max: field => `The ${field} is too long`,
  confirmed: 'Entered passwords do not match',
  'password.min': 'Password is too short',
};

function protectionLine(password) {
  const passLength = password.length;
  if (passLength >= 1 && passLength < 7) {
    return style.lowProtection;
  }
  if (passLength >= 7 && passLength < 10) {
    return style.middleProtection;
  }
  if (passLength >= 10) {
    return style.strongProtection;
  }
  return style.protection;
}

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [validationError, setValidationError] = useState({
    field: null,
    message: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAuth();
  const lang = useSelector(getLang);
  const {
    inputUsername,
    inputEmail,
    inputPass,
    inputPassConf,
    buttonReg,
    buttonLogIn,
    Error409Text,
    SuccessText,
  } = langOptionsRegister;
  const theme = useSelector(getTheme);

  const handleChange = event => {
    const { name, value } = event.target;
    setValidationError({ field: null, message: '' });

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'password_confirmation':
        return setPasswordConfirm(value);
      case 'username':
        return setName(value);
      default:
        return;
    }
  };

  const onRegisterSubmit = e => {
    e.preventDefault();
    validate(
      { email, password, password_confirmation, username },
      rules,
      messages
    )
      .then(() => {
        const registerData = { username, email, password };
        dispatch(authOperations.register(registerData)).then(response => {
          if (response.payload === 'Request failed with status code 400') {
            toast.error('Oops... Validation error!!');
            return;
          }
          if (response.payload === 'Request failed with status code 409') {
            toast.error(Error409Text[lang]);
            return;
          }
          if (response.payload.token) {
            toast.success(SuccessText[lang]);
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
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  const { message, field } = validationError;

  return (
    <div className={style.authForm}
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-form-color)"  
    }}
    >
      <div className={style.logo}>
        <Logo />
      </div>
      <form className={style.form} onSubmit={onRegisterSubmit}>
        {field && <p className={style[`${field}Error`]}>{message}</p>}
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder={inputEmail[lang]}
            name="email"
            onChange={handleChange}
            value={email}
            autoFocus
            autoComplete="off"
          ></input>
          <svg width="21" height="16" className={style.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>
        <label className={style.authLabel}>
          <input
            id="inputcheck"
            className={style.input}
            placeholder={inputPass[lang]}
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
          ></input>
          <svg width="16" height="21" className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>

        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder={inputPassConf[lang]}
            type="password"
            name="password_confirmation"
            onChange={handleChange}
            value={password_confirmation}
          ></input>
          <svg width="16" height="21" className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <div className={protectionLine(password)}></div>
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder={inputUsername[lang]}
            onChange={handleChange}
            name="username"
            value={username}
            autoComplete="off"
          ></input>
          <svg width="18" height="18" className={style.inputIcon}>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
        </label>
        <div className={style.wrapper}>
          <Button
            className="btn__primary"
            type="submit"
            text={buttonReg[lang]}
            isLoading={isLoading}
          />
          <Link to="/login" className={style.authLink}>
            <Button className="btn__secondary" type="buttom" text={buttonLogIn[lang]} />
          </Link>
        </div>
      </form>
    </div>
  );
}
