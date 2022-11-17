//import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import { authOperations } from 'redux/auth';
import { addTransaction } from 'redux/transactions/transactionsOperations';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';
import { fetchTransactionCategories } from 'redux/transactionCategories/transactionCategoriesOperations';
import { selectBalance } from 'redux/auth/auth-selectors';
import { useToggle } from '../../hook/modalAddTransaction';
import { formatDate } from '../../helpers/formatDate';

import css from './ModalAddTransaction.module.scss';
import cssForm from './FormAddTransaction.module.scss';

export const ModalAddTransaction = ({ closeModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);
  const balance = useSelector(selectBalance);
  const { isShowSelect, toggleHook } = useToggle();

  const [amount, setAmount] = useState('');
  const [valueDate, onChange] = useState(new Date());
  const [transactionDate, setTransactionDate] = useState(
    formatDate(moment(valueDate).format())
  );
  const [comment, setComment] = useState('');
  const [type, setType] = useState('INCOME');
  const [categoryId, setCategoryId] = useState(
    '063f1132-ba5d-42b4-951d-44011ca46262'
  );
  const [categoryTitle, setCategoryTitle] = useState('');
  const [isShowSelectList, setIsShowSelectList] = useState('false');
  //const [toggle, setToggle] = useState('true');

  useEffect(() => {
    dispatch(fetchTransactionCategories());
    const closeByEscape = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [closeModal, dispatch]);

  const closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const onAddTransaction = transaction => {
    dispatch(addTransaction({ ...transaction }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      // case 'toggle':
      //   setToggle(value);
      //   break;
      case 'amount':
        setAmount(value);
        break;
      case 'transactionDate':
        setTransactionDate(value);
        break;
      case 'comment':
        setComment(value);
        break;
      case 'categoryId':
        setCategoryId(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isShowSelect) {
      if (amount > balance) {
        return alert('Сумма больше, чем баланс. Введите нужную сумму');
      }

      const amountNegative = -amount;

      onAddTransaction({
        type,
        categoryId,
        amount: amountNegative,
        transactionDate,
        comment,
      });
      resetForm();
      dispatch(authOperations.fetchCurrentUser());
      return;
    }

    onAddTransaction({
      type,
      categoryId,
      amount,
      transactionDate,
      comment,
    });
    dispatch(authOperations.fetchCurrentUser());

    resetForm();
  };

  const resetForm = () => {
    setAmount('');
    setComment('');
  };

  const handleCheckBox = () => {
    if (isShowSelect) {
      setType('INCOME');
      setCategoryId('063f1132-ba5d-42b4-951d-44011ca46262');
    }

    if (!isShowSelect) {
      setType('EXPENSE');
    }
    toggleHook();
  };

  const handleClickOption = e => {
    console.log(e.currentTarget.value);
    setCategoryId(e.currentTarget.value);
    setIsShowSelectList(true);
  };

  return (
    <>
      <div className={css.Overlay} onClick={closeByBackdrop}>
        <div className={css.Modal}>
          <h2 className={css.titleForm}>Add transaction</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={css.wraperBtnSpan}>
              <span className={isShowSelect ? css.spanText : css.spanTextGreen}>
                Income
              </span>
              <div className={css.wraperSwitch}>
                <label className={css.container}>
                  <input
                    className={css.hiddenInput}
                    type="checkbox"
                    name="toggle"
                    id="hidden-input"
                    onChange={handleCheckBox}
                    // checked
                  />
                  <span className={css.thumbContainer}>
                    <span className={css.thumb}></span>
                  </span>
                  <span className={css.track}></span>
                </label>
              </div>
              <span
                className={!isShowSelect ? css.spanText : css.spanTextActive}
              >
                Expense
              </span>
            </div>

            {isShowSelect && (
              <div className={cssForm.selectWraper}>
                <ul className={cssForm.selectListWraper}>
                  <label>
                    <input
                      className={cssForm.selectCustom}
                      type="text"
                      name="categoryId"
                      placeholder="Select a category"
                      value={categoryTitle}
                      onClick={() => setIsShowSelectList(false)}
                    />
                  </label>
                  {!isShowSelectList && (
                    <div className={cssForm.optionCustomWriper}>
                      {categories
                        .filter(category => category.type !== 'INCOME')
                        .map(category => (
                          <li
                            key={`${category.id}`}
                            onClick={() => setCategoryTitle(category.name)}
                          >
                            <label className={cssForm.selectLabel}>
                              {`${category.name}`}
                              <input
                                className={cssForm.selectOptionItem}
                                name="categoryId"
                                value={`${category.id}`}
                                onChange={handleChange}
                                onClick={handleClickOption}
                              />
                            </label>
                          </li>
                        ))}
                    </div>
                  )}
                </ul>
              </div>
            )}

            <div className={cssForm.wraperAmountDate}>
              <label>
                <input
                  className={cssForm.inputAmount}
                  type="number"
                  name="amount"
                  min="0"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                />
              </label>

              <div className={cssForm.dateTimeWriper}>
                <Datetime
                  className={cssForm.inputDate}
                  name="transactionDate"
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  value={valueDate}
                  onChange={onChange}
                  onClose={value =>
                    setTransactionDate(formatDate(moment(value).format()))
                  }
                  closeOnSelect={true}
                />
              </div>
            </div>

            <label className={cssForm.commentLabel}>
              <input
                className={cssForm.inputComment}
                type="text"
                name="comment"
                placeholder="Comment"
                value={comment}
                onChange={handleChange}
              />
            </label>
            <div className={cssForm.btnWraper}>
              <button
                className={cssForm.btnAdd}
                onClick={handleSubmit}
                type="submit"
              >
                ADD
              </button>
              <button
                className={cssForm.btnCancel}
                onClick={closeModal}
                type="submit"
              >
                CANCEL
              </button>
              <button
                className={css.btnClose}
                onClick={closeModal}
                type="submit"
              ></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
