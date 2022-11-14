import {
  Link,
  NavMenuItem,
  NavMenuList,
  NavMobMenuList,
  NavMobMenuItem,
  Span,
  NavIcon,
} from './Navigation.styled';
import Icons from 'images/sprite.svg';
import { useMedia } from 'react-use';

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  return (
    <div>
      {isMobile && (
        <nav>
          <NavMobMenuList>
            <NavMobMenuItem>
              <Link to="/home" end>
                <NavIcon width="38" height="38">
                  <use href={`${Icons}#icon-home`} />
                </NavIcon>
              </Link>
            </NavMobMenuItem>

            <NavMobMenuItem>
              <Link to="/diagram">
                <NavIcon width="38" height="38">
                  <use href={`${Icons}#icon-statistics`} />
                </NavIcon>
              </Link>
            </NavMobMenuItem>

            <NavMobMenuItem>
              <Link to="/currency">
                <NavIcon width="38" height="38">
                  <use href={`${Icons}#icon-currency`} />
                </NavIcon>
              </Link>
            </NavMobMenuItem>
          </NavMobMenuList>
        </nav>
      )}
      {isLaptop && (
        <nav>
          <NavMenuList>
            <NavMenuItem>
              <Link to="/home" end>
                <NavIcon width="18" height="18">
                  <use href={`${Icons}#icon-home`} />
                </NavIcon>
                <Span>Home</Span>
              </Link>
            </NavMenuItem>

            <NavMenuItem>
              <Link to="/diagram">
                <NavIcon width="18" height="18">
                  <use href={`${Icons}#icon-statistics`} />
                </NavIcon>
                <Span>Statistics</Span>
              </Link>
            </NavMenuItem>
          </NavMenuList>
        </nav>
      )}
    </div>
  );
};
