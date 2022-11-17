import { Loader } from 'components/Loader/Loader';
import { fetchCurrencyPrivat } from '../../services/fetchCurrencyPrivat';
import { useEffect, useState } from 'react';
import {
  Table,
  TableText,
  TableTitle,
  TableWrap,
  TableRow,
  TextError,
  TableError,
} from './Currency.styled';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsCurrency } from '../../assets/lang/langOptionsCurrency';
import { useSelector } from 'react-redux';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const lang = useSelector(getLang);
  const { messageText, CurrencyText, PurchaseText, SaleText } =
    langOptionsCurrency;

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
      {error && (
        <TableWrap>
          <TableError>
            <thead>
              <tr>
                <TableTitle>{CurrencyText[lang]}</TableTitle>
                <TableTitle>{PurchaseText[lang]}</TableTitle>
                <TableTitle>{SaleText[lang]}</TableTitle>
              </tr>
            </thead>
          </TableError>
          <TextError>{message}</TextError>
        </TableWrap>
      )}
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
