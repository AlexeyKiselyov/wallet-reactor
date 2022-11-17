//import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { addTransaction } from 'redux/transactions/transactionsOperations';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';
import { selectBalance } from 'redux/auth/auth-selectors';
import { changeBalance } from 'redux/auth/auth-slice';
import { formatDate } from 'helpers/formatDate';
import { useToggle } from '../../hook/modalAddTransaction';
import { getTheme } from '../../redux/theme/themeSelector';

import css from './ModalAddTransaction.module.scss';
import cssForm from './FormAddTransaction.module.scss';
import { number } from 'prop-types';

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
  const theme = useSelector(getTheme);

  useEffect(() => {
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
    const amountNegative = -amount;

    if (isShowSelect) {
      if (amount > balance) {
        return alert('Сумма больше, чем баланс. Введите нужную сумму');
      }
      onAddTransaction({
        type,
        categoryId,
        amount: amountNegative,
        transactionDate,
        comment,
      });
      dispatch(changeBalance(amount));
      resetForm();

      return;
    }

    onAddTransaction({
      type,
      categoryId,
      amount,
      transactionDate,
      comment,
    });

    dispatch(changeBalance(amountNegative));
    resetForm();
  };

  const resetForm = () => {
    setAmount('');
    setComment('');
  };

  const handleCheckBox = e => {
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
        <div className={css.Modal}
         style={{
          backgroundColor:
            theme === 'light' ? '' : 'var(--dark-mood-addForm-color)',
          color:
            theme === 'light'
              ? 'var(--title-black-color)'
              : 'var(--text-white-color)',
        }}
        >
          <h2 className={css.titleForm}>Add transaction</h2>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={css.wraperBtnSpan}>
              <span className={isShowSelect ? css.spanText : css.spanTextGreen}>
                Income
              </span>
              <div className={css.wraperSwitch}>
                <label className={css.container}>
                  <input
                    type="checkbox"
                    className={css.hiddenInput}
                    id="hidden-input"
                    name="toggle"
                    // checked
                    onClick={handleCheckBox}
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
                      name="categoryId"
                      type="text"
                      placeholder="Select a category"
                      onClick={() => setIsShowSelectList(false)}
                      value={categoryTitle}
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
                                onClick={handleClickOption}
                                onChange={handleChange}
                                value={`${category.id}`}
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
                  name="amount"
                  type="number"
                  min="0"
                  placeholder="0.00"
                  value = {amount}
                  onChange={handleChange}
                />
              </label>

              <div className={cssForm.dateTimeWriper}>
                <Datetime
                  className={cssForm.inputDate}
                  name="transactionDate"
                  value={valueDate}
                  onChange={onChange}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
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
                style={{
                  backgroundColor:
                    theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                  color:
                    theme === 'light'
                      ? 'var(--title-black-color)'
                      : 'var(--text-white-color)',
                }}
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
                type="button"
              >
                CANCEL
              </button>
              <button
                className={css.btnClose}
                onClick={closeModal}
                type="button"
              ></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
