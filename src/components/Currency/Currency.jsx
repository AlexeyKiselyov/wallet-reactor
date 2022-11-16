import { Loader } from 'components/Loader/Loader';
import { fetchCurrencyPrivat } from '../../services/fetchCurrencyPrivat';
import { useEffect, useState } from 'react';
import {
  Table,
  TableText,
  TableTitle,
  TableWrap,
  TableRow,
} from './Currency.styled';
import { getLang } from "redux/lang/langSelector";
import { langOptionsCurrency } from '../../assets/lang/langOptionsCurrency';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelector';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const lang = useSelector(getLang);
  const { messageText, CurrencyText, PurchaseText, SaleText } = langOptionsCurrency;
  const theme = useSelector(getTheme);
  
  useEffect(() => {
    async function getCurrency() {
      try {
        setIsLoading(true);
        const data = await fetchCurrencyPrivat();
        setCurrency(data);
        if (data.length === 0) {
          throw new Error();
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCurrency();
  }, []);

  const message = messageText[lang];

  return (
    <>
      {isLoading && <Loader />}
      {error && <p
      style={{
        color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
      }}
      >{message}</p>}
      {currency && (
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <TableTitle>{CurrencyText[lang]}</TableTitle>
                <TableTitle>{PurchaseText[lang]}</TableTitle>
                <TableTitle>{SaleText[lang]}</TableTitle>
              </tr>
            </thead>
            <tbody>
              {currency.map(({ ccy, buy, sale }) => {
                const buyCurrency = Number(buy).toFixed(2);
                const saleCurrency = Number(sale).toFixed(2);
                return (
                  <TableRow key={ccy}>
                    <TableText>{ccy}</TableText>
                    <TableText>{buyCurrency}</TableText>
                    <TableText>{saleCurrency}</TableText>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableWrap>
      )}
    </>
  );
};