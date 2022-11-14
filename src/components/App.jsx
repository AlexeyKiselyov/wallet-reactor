import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { DiagramPage } from 'pages/DiagramPage/DiagramPage';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { CurrencyMobilePage } from 'pages/CurrencyMobilePage/CurrencyMobilePage';
// =========================================================================

export const App = () => {
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
    </>
  );
};
