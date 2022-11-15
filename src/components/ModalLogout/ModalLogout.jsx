import style from './ModalLogout.module.css';
import { authOperations } from 'redux/auth';
import { closeModalWindow, resetError } from 'redux/index';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';

function ModalLogoutAndDelete({ action }) {
  const dispatch = useDispatch();

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
    <div className={style.modal}>
      <h2 className={style.title}>Are you sure you want to log out ?</h2>
      <div className={style.wrapper}>
        {action === 'logout' && (
          <Button
            className="btn__secondary-logout"
            onClick={onLogout}
            type="button"
            text="Yes"
          />
        )}
        <Button
          className="btn__primary-logout"
          onClick={onCancelLogout}
          type="button"
          text="No"
        />
      </div>
    </div>
  );
}

export default ModalLogoutAndDelete;
