import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { validate } from 'indicative/validator';
import { authOperations } from '../../redux/auth';
// import { toast } from 'react-toastify';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';
// import { useLogInUserMutation, setAuth, setUser, setError } from 'redux/index';
import style from './LoginForm.module.css';

// const rules = {
//   email: 'required|email',
//   password: 'required|min:6|max:16',
// };
// const messages = {
//   required: field => `${field} is required`,
//   email: 'Enter valid email address',
//   min: field => `The ${field} is too short`,
//   max: field => `The ${field} is too long`,
// };

export default function LoginForm() {
  // const [loginUser, { data, error, isLoading }] = useLogInUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [validationError, setValidationError] = useState({ field: null, message: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    // setValidationError({ field: null, message: '' });

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
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
  //     else toast.error(error.data?.message || 'Your request failed');
  //   }
  // }, [data, dispatch, error]);

  const onLoginSubmit = e => {
    e.preventDefault();
    // validate({ email, password }, rules, messages)
    //   .then(() => {
    //     loginUser({ user: { email, password } });
    const singInData = 
          {
          email,
          password
        };
      dispatch(authOperations.logIn(singInData));

    //   })
    //   .catch(errors => {
    //     setValidationError({ field: errors[0].field, message: errors[0].message });
    //   });
  };

  // const resetForm = () => {
    // setEmail('');
    // setPassword('');
  // };

  // const { message, field } = validationError;

  return (
    <div className={style.authForm}>
      <div className={style.logo}>
        <Logo />
      </div>
      <form className={style.form} onSubmit={onLoginSubmit}>
        {/* {field && <p className={s[`${field}Error`]}>{message}</p>} */}
        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder='E-mail'
            onChange={handleChange}
            name='email'
            value={email}
            autoFocus
          ></input>
          <svg width='21' height='16' className={style.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>

        <label className={style.authLabel}>
          <input
            className={style.input}
            placeholder='Password'
            onChange={handleChange}
            name='password'
            type='password'
            value={password}
          ></input>
          <svg width='16' height='21' className={style.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>

        <div className={style.wrapper}>
          <Button className='btn__primary' type='submit' text='log in' isLoading = {true} />
          <Link to='/register' className={style.authLink}>
            <Button className='btn__secondary' type='buttom' text='Register' />
          </Link>
        </div>
      </form>
    </div>
  );
}