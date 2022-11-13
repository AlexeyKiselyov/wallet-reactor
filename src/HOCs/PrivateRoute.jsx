import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { authSelectors } from 'redux/auth'
// ===================================================

export const PrivateRoute = ({ children }) => {
  const token = useSelector(authSelectors.selectToken);
  return token ? children : <Navigate to="/login" />;
};