import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

import { AsideWrapper } from './AsideBar.styled';
import { useMedia } from 'react-use';
// =================================================

export const AsideBar = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  return (
    <>
      {isMobile && (
        <AsideWrapper>
          <div>
            <Navigation />
            <Balance />
          </div>
        </AsideWrapper>
      )}
      {isLaptop && (
        <AsideWrapper>
          <div>
            <Navigation />
            <Balance />
          </div>
          <Currency />
        </AsideWrapper>
      )}
    </>
  );
};
