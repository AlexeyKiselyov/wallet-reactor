import styled from 'styled-components';

export const HeaderStyled = styled.header``;

export const HeaderContainer = styled.div`
  padding: 20px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white-background-color);

  @include mq(mob) {
    width: 480px;
  }
  @include mq(tab) {
    width: 728px;
    padding: 0 32px;
  }
  @include mq(desk) {
    width: 1366px;
    padding: 0 16px;
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
`;

export const LogoExit = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  fill: var(--secondary-text-color);
`;

export const LogoutBtn = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  color: var(--secondary-text-color);

  display: flex;
  align-items: center;
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
`;
