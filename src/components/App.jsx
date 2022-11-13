import { Route, Routes } from 'react-router-dom';

import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { DiagramPage } from 'pages/DiagramPage/DiagramPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import { authOperations } from 'redux/auth';
// =========================================================================

export const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

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
