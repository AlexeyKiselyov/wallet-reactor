import { Navigate, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { DiagramPage } from 'pages/DiagramPage/DiagramPage';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal';
import ModalLogout from 'components/ModalLogout';
import { selectIsModalLogoutOpen } from 'redux/selectors';

import { CurrencyMobilePage } from 'pages/CurrencyMobilePage/CurrencyMobilePage';

// =========================================================================

export const App = () => {

  const showModalLogout = useSelector(selectIsModalLogoutOpen);

  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
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
          <Route path="home" element={<HomePage />} />
          <Route path="diagram" element={<DiagramPage />} />
          <Route path="currency" element={<CurrencyMobilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      {showModalLogout && <Modal children={<ModalLogout action='logout' />} />}
      <ToastContainer autoClose={3000} theme='colored' limit={2} />

    </>
  );
};
