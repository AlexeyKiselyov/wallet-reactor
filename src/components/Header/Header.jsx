// import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';

import { authSelectors } from 'redux/auth';

import {
  HeaderContainer,
  HeaderStyled,
  UserMenuWrapper,
  UserName,
  LogoExit,
  LogoutBtn,
  Avatar
} from './Header.styled';

import { openModalLogout } from 'redux/index';

import { getLang } from 'redux/lang/langSelector';
import { langOptionsExit } from '../../assets/lang/langOptionsExit';
import SwitchLangHeader from 'components/SwitchLangHeader/SwitchLangHeader';
import { randomAvatar } from '../../utils/randomAvatar';
import SwitchTheme from "components/SwitchTheme/SwitchTheme";
import { getTheme } from '../../redux/theme/themeSelector';

// ================================================================

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUser);

  const lang = useSelector(getLang);
  const { ExitText } = langOptionsExit;
  const theme = useSelector(getTheme);

  return (
    <HeaderStyled
    style={{
      backgroundColor: theme === "light" ? "" : "var(--dark-mood-bg-color)" 
    }}
    >
      <HeaderContainer
      style={{
        backgroundColor: theme === "light" ? "" : "var(--dark-mood-bg-color)" 
      }}
      >
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <UserMenuWrapper style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar><img src={randomAvatar} alt="Avatar"/></Avatar>
          <UserName>
            {name}
          </UserName>

          <LogoutBtn onClick={() => dispatch(openModalLogout())} type="button">
            <LogoExit>
              <use href={`${Icons}#icon-logout`} />
            </LogoExit>
            {!isMobile && ExitText[lang]}
          </LogoutBtn>
          <SwitchLangHeader />
        </UserMenuWrapper>
      </HeaderContainer> 
      <SwitchTheme />
    </HeaderStyled>
  );
};
