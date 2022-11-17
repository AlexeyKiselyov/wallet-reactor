//import PropTypes from 'prop-types';
import { authOperations } from 'redux/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTransaction } from 'redux/transactions/transactionsOperations';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';
import { selectBalance } from 'redux/auth/auth-selectors';
import { formatDate } from 'helpers/formatDate';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import { fetchTransactionCategories } from 'redux/transactionCategories/transactionCategoriesOperations';

import { useToggle } from '../../hook/modalAddTransaction';

import css from './ModalAddTransaction.module.scss';
import cssForm from './FormAddTransaction.module.scss';

export const ModalAddTransaction = ({ closeModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);
  const balance = useSelector(selectBalance);
  const { isShowSelect, toggleHook } = useToggle();

  // const [toggle, setToggle] = useState('');
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

  // const toggleShowSelectList = () =>
  //   setIsShowSelectList(isShowSelectList => !isShowSelectList);

  useEffect(() => {
    // show();
    // dispatch(fetchTransactionCategories());
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

  // -----------------добавление и прочее

  //----------------------------------------------------------------

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
    //console.log(transactionDate);
  };

  const resetForm = () => {
    setAmount('');
    setComment('');
  };

  const handleCheckBox = e => {
    if (isShowSelect) {
      console.log(5);
      setType('INCOME');
      setCategoryId('063f1132-ba5d-42b4-951d-44011ca46262');
      console.log(type);
      console.log(amount);
      //  hide();
    }

    if (!isShowSelect) {
      console.log(6);
      setType('EXPENSE');
      console.log(type);

      // show();
    }

    toggleHook();
  };

  // const categoriesExpense = categories.filter(
  //   category => category.type !== 'INCOME'
  // );
  //нужно и это в переменную?

  const handleClickOption = e => {
    console.log(e.currentTarget.value);
    setCategoryId(e.currentTarget.value);
    setIsShowSelectList(true);
  };
  // const handleChangeSelectInput = () => {
  //   setIsShowSelectList(true);
  // };

  let inputProps = {
    name: 'transactionDate',
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
                            // onClick={e => console.log(category.name)}
                            onClick={() => setCategoryTitle(category.name)}
                          >
                            <label className={cssForm.selectLabel}>
                              {`${category.name}`}
                              <input
                                className={cssForm.selectOptionItem}
                                name="categoryId"
                                // type="hidden"
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
                  value={amount}
                  onChange={handleChange}
                  // onChange={e => setAmount(e.target.value)}
                />
              </label>

              <div className={cssForm.dateTimeWriper}>
                {/* <label> */}
                <Datetime
                  className={cssForm.inputDate}
                  //inputProps={inputProps}
                  name="transactionDate"
                  value={valueDate}
                  onChange={onChange}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  onClose={value =>
                    setTransactionDate(formatDate(moment(value).format()))
                  }
                  closeOnSelect={true}
                  // onNavigate={a => console.log(a)}
                />
                {/* </label> */}
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
                //onChange={e => setComment(e.target.value)}
              />
              {/* <svg width="21" height="16" className={cssForm.inputIcon}>
                <use href={`${Icons}#close`} />
                {/* // href={`${Icons}#icon-email`} */}
              {/* </svg>  */}
            </label>
            {/* select my */}
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
