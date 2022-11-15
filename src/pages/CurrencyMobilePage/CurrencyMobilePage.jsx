import { Currency } from 'components/Currency/Currency';
import { Navigate } from 'react-router-dom';
import { useMedia } from 'react-use';
export const CurrencyMobilePage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  if (isMobile) return <Currency />;
  return <Navigate to="/home" />;
};
