import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

import { selectIsModalLogoutOpen } from 'redux/selectors';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from 'components/Modal';
import ModalLogout from 'components/ModalLogout';

import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DiagramPage = lazy(() => import('pages/DiagramPage/DiagramPage'));
const CurrencyMobilePage = lazy(() => import('pages/CurrencyMobilePage/CurrencyMobilePage'));
// =========================================================================

export const App = () => {
  const dispatch = useDispatch();
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const isCurrentUserRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isCurrentUserRefreshing && (
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="diagram" element={<DiagramPage />} />
            <Route path="currency" element={<CurrencyMobilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}

      {showModalLogout && <Modal children={<ModalLogout action="logout" />} />}
      <ToastContainer autoClose={3000} theme="colored" limit={2} style={{zIndex:'100000'}}/>
    </>
  );
};
