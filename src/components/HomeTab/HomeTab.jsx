import { useDispatch, useSelector } from 'react-redux';
import s from './HomeTab.module.scss';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { useMedia } from 'react-use';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsHomeTab } from '../../assets/lang/langOptionsHomeTab';
import { useEffect } from 'react';
import {
  fetchTransactions,
  deleteTransaction,
} from 'redux/transactions/transactionsOperations';
import { authOperations } from 'redux/auth';

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const categoriesList = categories.map(data => data);
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  const transactionsReverse = [...transactions];
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchTransactions());
  }, [dispatch]);
  const lang = useSelector(getLang);
  const {
    DataText,
    TypeText,
    CategoryText,
    CommentText,
    SumText,
    BalanceText,
    NoTransactionsText,
  } = langOptionsHomeTab;

  const onDelete = id => {
    dispatch(deleteTransaction(id));
    dispatch(authOperations.fetchCurrentUser());
  };

  return (
    <>
      {isMobile && (
        <div className={s.tableWrapMob}>
          <div className={s.scrollTableMob}>
            <div className={s.scrollTableBodyMob}>
              {transactions.length !== 0 ? (
                transactionsReverse
                  .sort(
                    (a, b) =>
                      new Date(b.transactionDate) - new Date(a.transactionDate)
                  )
                  .reverse()
                  .map(el => (
                    <table
                      className={
                        el.amount > 0 ? s.tablePositive : s.tableNegative
                      }
                      key={el.id}
                    >
                      <tbody>
                        <tr>
                          <td>{DataText[lang]}</td>
                          <td>{el.transactionDate}</td>
                        </tr>
                        <tr>
                          <td>{TypeText[lang]}</td>
                          <td>{el.type !== 'EXPENSE' ? '+' : '-'}</td>
                        </tr>

                        <tr>
                          <td>{CategoryText[lang]}</td>
                          <td>
                            {categoriesList.length &&
                              categoriesList.find(
                                cat => cat.id === el.categoryId
                              ).name}
                          </td>
                        </tr>
                        <tr>
                          <td>{CommentText[lang]}</td>
                          <td>{el.comment}</td>
                        </tr>
                        <tr>
                          <td>{SumText[lang]}</td>
                          <td
                            className={el.amount > 0 ? s.positive : s.negative}
                          >
                            {el.amount}
                          </td>
                        </tr>
                        <tr>
                          <td>{BalanceText[lang]}</td>
                          <td>{el.balanceAfter}</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <button
                              type="button"
                              className={s.scrollTableBtnMob}
                              onClick={() => onDelete(el.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))
              ) : (
                <p>{NoTransactionsText[lang]}</p>
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
                  <th>{DataText[lang]}</th>
                  <th>{TypeText[lang]}</th>
                  <th>{CategoryText[lang]}</th>
                  <th>{CommentText[lang]}</th>
                  <th>{SumText[lang]}</th>
                  <th>{BalanceText[lang]}</th>
                  <th></th>
                </tr>
              </thead>
            </table>

            <div className={s.scrollTableBody}>
              <table>
                <tbody>
                  {transactions.length ? (
                    transactionsReverse
                      .sort(
                        (a, b) =>
                          new Date(b.transactionDate) -
                          new Date(a.transactionDate)
                      )
                      .reverse()
                      .map(el => (
                        <tr key={el.id}>
                          <td>{el.transactionDate}</td>
                          <td>{el.type !== 'EXPENSE' ? '+' : '-'}</td>
                          <td>
                            {categoriesList.length &&
                              categoriesList.find(
                                cat => cat.id === el.categoryId
                              ).name}
                          </td>
                          <td>{el.comment}</td>
                          <td
                            className={el.amount > 0 ? s.positive : s.negative}
                          >
                            {el.amount}
                          </td>
                          <td>{el.balanceAfter}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => onDelete(el.id)}
                              className={s.scrollTableBtn}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td>{NoTransactionsText[lang]}</td>
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
