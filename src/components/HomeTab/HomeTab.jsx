import { useSelector } from 'react-redux';
import s from './HomeTab.module.scss';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { useMedia } from 'react-use';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const categoriesList = categories.map(data => data);
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  const transactionsReverse = [...transactions];

  return (
    <>
      {isMobile && (
        <div className={s.tableWrapMob}>
          <div className={s.scrollTableMob}>
            <div className={s.scrollTableBodyMob}>
              {transactions.length !== 0 ? (
                transactionsReverse.map(el => (
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
                          {categoriesList.length &&
                            categoriesList.find(cat => cat.id === el.categoryId)
                              .name}
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
                    transactionsReverse.map(el => (
                      <tr key={el.id}>
                        <td>{el.transactionDate}</td>
                        <td>{el.type !== 'EXPENSE' ? '+' : '-'}</td>
                        <td>
                          {categoriesList.length &&
                            categoriesList.find(cat => cat.id === el.categoryId)
                              .name}
                        </td>
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
