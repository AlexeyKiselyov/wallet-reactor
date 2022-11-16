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
import { getLang } from "redux/lang/langSelector";
import { langOptionsNavigation } from '../../assets/lang/langOptionsNavigation';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelector';

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  
  const lang = useSelector(getLang);
  const { HomeText, StatisticsText } = langOptionsNavigation;
  const theme = useSelector(getTheme);

  return (
    <div>
      {isMobile && (
        <nav>
          <NavMobMenuList>
            <NavMobMenuItem>
              <Link to="/" end>
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
              <Link to="/" end>
                <NavIcon width="18" height="18">
                  <use href={`${Icons}#icon-home`} />
                </NavIcon>
                <Span
                style={{
                  color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
                }}
                >{HomeText[lang]}</Span>
              </Link>
            </NavMenuItem>

            <NavMenuItem>
              <Link to="/diagram">
                <NavIcon width="18" height="18">
                  <use href={`${Icons}#icon-statistics`} />
                </NavIcon>
                <Span
                style={{
                  color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
                }}
                >{StatisticsText[lang]}</Span>
              </Link>
            </NavMenuItem>
          </NavMenuList>
        </nav>
      )}
    </div>
  );
};
