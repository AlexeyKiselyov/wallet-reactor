import RegistrationForm from 'components/RegistrationForm';
import style from './RegisterPage.module.css';

export default function RegistrationPage() {
 
  return (
    <div className={style.container}>
      <div className={style.heroContainer}>
        <div className={style.loginImage}></div>

        <div className={style.spanContainer}>
          <span className={style.title}>Finance App</span>
        </div>
      </div>
      <div className={style.desktopContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
}
