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

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCurrency() {
      try {
        const data = await fetchCurrencyPrivat();
        setCurrency(data);
        setIsLoading(true);
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

  const message = 'Sorry, we don’t have any information about currency';

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{message}</p>}
      {currency && (
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <TableTitle>Currency</TableTitle>
                <TableTitle>Purchase</TableTitle>
                <TableTitle>Sale</TableTitle>
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
