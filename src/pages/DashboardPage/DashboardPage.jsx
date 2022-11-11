import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <ModalLogout />
      <Navigation />
      <Balance />
      <Currency />

      <Outlet />
    </>
  );
};
