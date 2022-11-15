import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchTransactions } from 'redux/transactions/transactionsOperations';
import { fetchTransactionCategories } from 'redux/transactionCategories/transactionCategoriesOperations';

import { AsideBar } from 'components/Aside Bar/AsideBar';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

import { MainContainer, MainStyled } from './DashboardPage.styled';
import { selectIsLoading } from 'redux/transactions/transactionsSelectors';
// ================================================

export const DashboardPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </MainStyled>

      {isLoading && <Loader />}
    </>
  );
};
