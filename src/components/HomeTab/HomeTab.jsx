import { useDispatch, useSelector } from 'react-redux';
import s from './HomeTab.module.scss';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { useMedia } from 'react-use';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsHomeTab } from '../../assets/lang/langOptionsHomeTab';
import { getTheme } from '../../redux/theme/themeSelector';
import { BsFillTrashFill } from 'react-icons/bs';
import { deleteTransaction } from 'redux/transactions/transactionsOperations';
import { changeBalance } from 'redux/auth/auth-slice';

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const categoriesList = categories.map(data => data);
  const isMobile = useMedia('(max-width: 767px)');
  const isLaptop = useMedia('(min-width: 768px)');
  const transactionsReverse = [...transactions];
  const dispatch = useDispatch();

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
  const theme = useSelector(getTheme);

  const onDelete = (id, amount) => {
    dispatch(deleteTransaction(id));
    dispatch(changeBalance(amount));
  };

  return (
    <>
      {isMobile && (
        <div className={s.tableWrapMob}>
          <div className={s.scrollTableMob}>
            <div className={s.scrollTableBodyMob}>
              {transactions.length !== 0 ? (
                transactionsReverse
                  .reverse()
                  .sort(
                    (a, b) =>
                      new Date(b.transactionDate) - new Date(a.transactionDate)
                  )
                  .map(el => (
                    <table
                      className={
                        el.amount > 0 ? s.tablePositive : s.tableNegative
                      }
                      key={el.id}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {DataText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {el.transactionDate}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {TypeText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {el.type !== 'EXPENSE' ? '+' : '-'}
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {CategoryText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {categoriesList.length &&
                              categoriesList.find(
                                cat => cat.id === el.categoryId
                              ).name}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {CommentText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {el.comment}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {SumText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                            className={el.amount > 0 ? s.positive : s.negative}
                          >
                            {el.amount}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {BalanceText[lang]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                theme === 'light'
                                  ? ''
                                  : 'var(--dark-mood-form-color)',
                            }}
                          >
                            {el.balanceAfter}
                          </td>
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
                <p
                style={{
                  color: 
                    theme === 'light'
                      ? 'var(--title-black-color)'
                      : 'var(--text-white-color)',
                }}
                >{NoTransactionsText[lang]}</p>
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
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {DataText[lang]}
                  </th>
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {TypeText[lang]}
                  </th>
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {CategoryText[lang]}
                  </th>
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {CommentText[lang]}
                  </th>
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {SumText[lang]}
                  </th>
                  <th
                    style={{
                      backgroundColor:
                        theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                      color:
                        theme === 'light'
                          ? 'var(--title-black-color)'
                          : 'var(--text-white-color)',
                    }}
                  >
                    {BalanceText[lang]}
                  </th>
                  <th
                  style={{
                    backgroundColor:
                      theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                  }}
                  ></th>
                </tr>
              </thead>
            </table>

            <div className={s.scrollTableBody}>
              <table>
                <tbody>
                  {transactions.length ? (
                    transactionsReverse
                      .reverse()
                      .sort(
                        (a, b) =>
                          new Date(b.transactionDate) -
                          new Date(a.transactionDate)
                      )
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
                              onClick={() => onDelete(el.id, el.amount)}
                              className={s.scrollTableBtn}
                            >
                              <BsFillTrashFill style={{ fill: '#fff' }} />
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td
                      style={{
                        color:
                          theme === 'light'
                            ? 'var(--title-black-color)'
                            : 'var(--text-white-color)',
                      }}
                      >{NoTransactionsText[lang]}</td>
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
