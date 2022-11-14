import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

import { AsideWrapper } from './AsideBar.styled';
// =================================================

export const AsideBar = () => {
  return (
    <>
      <AsideWrapper>
        <div>
          <Navigation />
          <Balance />
        </div>
        <Currency />
      </AsideWrapper>
    </>
  );
};
