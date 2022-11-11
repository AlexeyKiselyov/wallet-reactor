import { Route, Routes } from 'react-router-dom';

import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { DiagramPage } from 'pages/DiagramPage/DiagramPage';
// =========================================================================

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />}>
          <Route path="home" element={<HomePage />} />
          <Route path="diagram" element={<DiagramPage />} />
        </Route>
      </Routes>
    </>
  );
};
