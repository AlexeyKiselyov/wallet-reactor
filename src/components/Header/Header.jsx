// import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authOperations } from 'redux/auth';
// import { authSelectors } from 'redux/auth'

import {
  HeaderContainer,
  HeaderStyled,
  UserMenuWrapper,
  UserName,
  LogoExit,
  LogoutBtn,
} from './Header.styled';
// ================================================================

export const Header = () => {
  const name = useSelector(state=>state.auth.user.username);
  console.log(name);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <div>
          <Link to="/home">
            <Logo />
          </Link>
        </div>

        <UserMenuWrapper style={{ display: 'flex', alignItems: 'center' }}>
          <UserName>{name}</UserName>

          <LogoutBtn onClick={onLogout} type="button">
            <LogoExit>
              <use href={`${Icons}#icon-logout`} />
            </LogoExit>
            Exit
          </LogoutBtn>
        </UserMenuWrapper>
      </HeaderContainer>
      {/* <ModalLogout /> */}
    </HeaderStyled>
  );
};
