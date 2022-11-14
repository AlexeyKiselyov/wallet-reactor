// import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authSelectors } from 'redux/auth'

import {
  HeaderContainer,
  HeaderStyled,
  UserMenuWrapper,
  UserName,
  LogoExit,
  LogoutBtn,
} from './Header.styled';

import { openModalLogout } from 'redux/index';

// ================================================================

export const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUser);
  
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

          <LogoutBtn onClick={() => dispatch(openModalLogout())} type="button">
            <LogoExit>
              <use href={`${Icons}#icon-logout`} />
            </LogoExit>
            Exit
          </LogoutBtn>
        </UserMenuWrapper>
      </HeaderContainer>
    </HeaderStyled>
  );
};
