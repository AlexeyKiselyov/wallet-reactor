import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: var(--white-background-color);
 @media screen and (max-width: 767px) {
    position: fixed;
    z-index: 10000;
    width: 100%;
  }
  }
`;

export const HeaderContainer = styled.div`
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white-background-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  padding: 3px 12px;

  border-right: 1px solid var(--secondary-text-color);

  font-family: 'Circe';
  font-size: 18px;
  color: var(--secondary-text-color);

  @media screen and (max-width: 767px) {
    border-right: none;
    padding-right: 0px;
  }
`;

export const LogoExit = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  fill: var(--secondary-text-color);

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const LogoutBtn = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  color: var(--secondary-text-color);

  display: flex;
  align-items: stretch;
  padding: 4px 12px;

  border-color: transparent;
  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    color: #2196f3;
    background: rgba(177, 186, 196, 0.12);
  }

  @media screen and (max-width: 767px) {
    padding: 4px 8px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  gap: 12px;
  & img {
    width: 45px;
    height: 45px;

    background: url(.png);
    border-radius: 3px;
  }
`;

export const SwitchLangStyle = styled.div`
  posision
`;
