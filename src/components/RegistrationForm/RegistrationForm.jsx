import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { setAuth, setUser, setError } from 'redux/auth/index';
// import { validate } from 'indicative/validator';
// import { toast } from 'react-toastify';
import style from './RegistrationForm.module.css';
import { authOperations } from '../../redux/auth';

// const rules = {
  // email: 'required|email',
  // password: 'required|min:6|max:16|confirmed',
  // password_confirmation: 'required|min:6|max:16',
  // name: 'required|string|min:1|max:12',
// };

// const messages = {
  // required: field => `${field} is required`,
  // email: 'Enter valid email address',
  // min: field => `The ${field} is too short`,
  // max: field => `The ${field} is too long`,
  // confirmed: 'Entered passwords do not match',
  // 'password.min': 'Password is too short',
// };

// function protectionLine(password) {
  // const passLength = password.length;
  // if (passLength >= 1 && passLength < 7) {
  //   return style.lowProtection;
  // }
  // if (passLength >= 7 && passLength < 10) {
  //   return style.middleProtection;
  // }
  // if (passLength >= 10) {
  //   return style.strongProtection;
  // }
  // return style.protection;
// }

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  // const [password_confirmation, setPasswordConfirm] = useState('');
  // const [validationError, setValidationError] = useState({ field: null, message: '' });
  // const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    // setValidationError({ field: null, message: '' });

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'password_confirmation':
        return ""
        // setPasswordConfirm(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setAuth({ token: data.token }));
  //     dispatch(setUser(data.user));
  //     resetForm();
  //   } else if (error) {
  //     if (error.status >= 500 || error.status === 'FETCH_ERROR') dispatch(setError(500));
  //     toast.error(error.data?.message || 'your request failed');
  //   }
  // }, [data, dispatch, error]);

  const onRegisterSubmit = e => {
    e.preventDefault();
    // validate({ email, password, password_confirmation, name }, rules, messages)
      // .then(() => {

        const registerData = 
          {username,
          email,
          password
        };
        // console.log(registerData);
        // const user = { "username": name, "email": email, "password": password };
        // createUser({ user });
        dispatch(authOperations.register(registerData));
  
      // })
      // .catch(errors => {
        // setValidationError({ field: errors[0].field, message: errors[0].message });
      // });
  };

  // const resetForm = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   // setPasswordConfirm('');
  // };

  // const { message, field } = validationError;

  return (
    <div className={style.authForm}>
      <div className={style.logo}>
        <Logo />
      </div>
      <form className={style.form} onSubmit={onRegisterSubmit}>
        {/* {field && <p className={style[`${field}Error`]}>{message}</p>} */}
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder='E-mail'
            name='email'
            onChange={handleChange}
            value={email}
            autoFocus
            autoComplete='off'
          ></input>
          <svg width='21' height='16' className={style.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>
        <label className={style.authLabel}>
          <input
            id='inputcheck'
            className={style.input}
            placeholder='Password'
            name='password'
            type='password'
            onChange={handleChange}
            value={password}
          ></input>
          <svg width='16' height='21' className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>

        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder='Confirm password'
            type='password'
            name='password_confirmation'
            onChange={handleChange}
            // value={password_confirmation}
          ></input>
          <svg width='16' height='21' className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        {/* <div className={protectionLine(password)}></div> */}
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder='Your name'
            onChange={handleChange}
            name='name'
            value={username}
            autoComplete='off'
          ></input>
          <svg width='18' height='18' className={style.inputIcon}>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
        </label>
        <div className={style.wrapper}>
          <Button className='btn__primary' type='submit' text='register' isLoading={true} />
          <Link to='/login' className={style.authLink}>
            <Button className='btn__secondary' type='buttom' text='log in' />
          </Link>
        </div>
      </form>
    </div>
  );
}
