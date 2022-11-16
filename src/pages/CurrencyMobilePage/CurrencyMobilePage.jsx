import { Currency } from 'components/Currency/Currency';
import { Navigate } from 'react-router-dom';
import { useMedia } from 'react-use';

const CurrencyMobilePage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  if (isMobile) return <Currency />;
  return <Navigate to="/" />;
};

export default CurrencyMobilePage;
