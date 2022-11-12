import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchTransactions } from 'redux/transactions/transactionsOperations';

export const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
