import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-family: var(--font-family-secondary);
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  line-height: 1.6;
  text-decoration: none;
  padding-bottom: 12px;
  font-weight: 400;

  &.active {
    font-weight: bold;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const NavIcon = styled.svg`
  color: var(--btn-accent-color);
`;

export const NavMobMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 12px;
`;
export const NavMobMenuItem = styled.li``;
export const Span = styled.span``;
export const NavMenuList = styled.ul``;
export const NavMenuItem = styled.li``;
