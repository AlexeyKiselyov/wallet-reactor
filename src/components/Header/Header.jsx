// import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { Link } from 'react-router-dom';
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
  const onLogout = () => {};
  return (
    <HeaderStyled>
      <HeaderContainer>
        <div>
          <Link to='/home'>
            <Logo />
          </Link>
        </div>

        <UserMenuWrapper style={{ display: 'flex' }}>
          <UserName>
            Name
            {/* {name}! */}
          </UserName>

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
