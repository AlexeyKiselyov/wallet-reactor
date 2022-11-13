import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchTransactions } from 'redux/transactions/transactionsOperations';
import { authOperations } from 'redux/auth';
import { fetchTransactionCategories } from 'redux/transactionCategories/transactionCategoriesOperations';

import { AsideBar } from 'components/Aside Bar/AsideBar';
import { Header } from 'components/Header/Header';

import { MainContainer, MainStyled } from './DashboardPage.styled';
// ================================================

export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchTransactionCategories());
  }, [dispatch]);


  return (
    <>
      <Header />
      <MainStyled>
        <MainContainer>
          <AsideBar />

          <Outlet />
        </MainContainer>
      </MainStyled>
    </>
  );
};
