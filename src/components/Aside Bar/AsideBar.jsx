import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

import { AsideWrapper, AsideBorder, AsideTablet } from './AsideBar.styled';
import { useMedia } from 'react-use';
// =================================================

export const AsideBar = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');

  return (
    <AsideBorder>
      {isMobile && (
        <AsideWrapper>
          <AsideTablet>
            <Navigation />
            <Balance />
          </AsideTablet>
        </AsideWrapper>
      )}
      {isLaptop && (
        <AsideWrapper>
          <AsideTablet>
            <Navigation />
            <Balance />
          </AsideTablet>
          <Currency />
        </AsideWrapper>
      )}
    </AsideBorder>
  );
};
