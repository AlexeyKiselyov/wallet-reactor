import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

// =================================================

export const AsideBar = () => {
  return (
    <>
      <div>
        <div>
          <Navigation />
          <Balance />
        </div>
        <Currency />
      </div>
    </>
  );
};
