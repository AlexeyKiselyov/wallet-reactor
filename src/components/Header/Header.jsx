// import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
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
          <Logo />
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
