import { useSelector } from 'react-redux';
import s from './HomeTab.module.scss';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
// import { useMedia } from 'react-use';
import { useMediaQuery } from 'react-responsive';

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  console.log(transactions);
  // const isMobile = useMedia({ maxWidth: '767px' });
  // const isLaptop = useMedia({ minWidth: '768px' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {isMobile && (
        <div className={s.tableWrapMob}>
          <div className={s.scrollTableMob}>
            <div className={s.scrollTableBodyMob}>
              {transactions.length !== 0 ? (
                transactions.map(el => (
                  <table
                    className={
                      el.amount > 0 ? s.tablePositive : s.tableNegative
                    }
                    key={el.id}
                  >
                    <tbody>
                      <tr>
                        <td>Data</td>
                        <td>{el.transactionDate}</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>{el.type !== 'EXPENSE' ? '+' : '-'}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>
                          {el.type !== 'EXPENSE' ? 'Regular solary' : el.type}
                        </td>
                      </tr>
                      <tr>
                        <td>Comment</td>
                        <td>{el.comment}</td>
                      </tr>
                      <tr>
                        <td>Sum</td>
                        <td className={el.amount > 0 ? s.positive : s.negative}>
                          {el.amount}
                        </td>
                      </tr>
                      <tr>
                        <td>Balance</td>
                        <td>{el.balanceAfter}</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              ) : (
                <p>No transactions</p>
              )}
            </div>
          </div>
        </div>
      )}

      {isLaptop && (
        <div className={s.tableWrap}>
          <div className={s.scrollTable}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Comment</th>
                  <th>Sum</th>
                  <th>Balance</th>
                </tr>
              </thead>
            </table>

            <div className={s.scrollTableBody}>
              <table>
                <tbody>
                  {transactions.length ? (
                    transactions.map(el => (
                      <tr key={el.id}>
                        <td>{el.transactionDate}</td>
                        <td>{el.type !== 'EXPENSE' ? '+' : '-'}</td>
                        <td>{el.type !== 'EXPENSE' ? 'Income' : el.type}</td>
                        <td>{el.comment}</td>
                        <td className={el.amount > 0 ? s.positive : s.negative}>
                          {el.amount}
                        </td>
                        <td>{el.balanceAfter}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No transactions</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
