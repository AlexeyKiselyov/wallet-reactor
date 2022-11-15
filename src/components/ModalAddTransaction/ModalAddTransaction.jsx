//import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { authSelectors } from 'redux/auth';
import { addTransaction } from 'redux/transactions/transactionsOperations';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategoriesSelectors';

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
  // const balance = useSelector(authSelectors.selectBalance);
  const { isShowSelect, show, hide, toggleHook } = useToggle();

  const [toggle, setToggle] = useState('');
  const [amount, setAmount] = useState('');
  const [valueDate, onChange] = useState(new Date());
  const [transactionDate, setTransactionDate] = useState(
    moment(valueDate).format()
  );
  const [comment, setComment] = useState('');
  const [type, setType] = useState('INCOME');
  const [categoryId, setCategoryId] = useState(
    '063f1132-ba5d-42b4-951d-44011ca46262'
  );
  const [categoryTitle, setCategoryTitle] = useState('');
  const [isShowSelectList, setIsShowSelectList] = useState('false');
  const toggleShowSelectList = () =>
    setIsShowSelectList(isShowSelectList => !isShowSelectList);

  // console.log(balance);
  const total = 10;
  useEffect(() => {
    // show();
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
  }, [closeModal]);

  const closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  // -----------------добавление и прочее

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

    //если баланс = 3000

    if (isShowSelect) {
      // if (total - amount < 0)
      if (amount > total) {
        return alert('Сумма больше, чем баланс. Введите нужную сумму');
      }
      const amount1 = -amount;
      console.log(amount1);
      onAddTransaction({
        type,
        categoryId,
        amount: amount1,
        transactionDate,
        comment,
      });
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

    resetForm();
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

  const categoriesExpense = categories.filter(
    category => category.type !== 'INCOME'
  ); //нужно и это в переменную?

  const handleClickOption = e => {
    console.log(e.currentTarget.value);
    setCategoryId(e.currentTarget.value);
    setIsShowSelectList(true);
  };
  const handleChangeSelectInput = () => {
    setIsShowSelectList(true);
  };

  let inputProps = {
    name: 'transactionDate',
  };

  return (
    <>
      <div className={css.Overlay} onClick={closeByBackdrop}>
        <div className={css.Modal}>
          <h2 className={cssForm.titleForm}>Add transaction</h2>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={cssForm.wraperSwitch}>
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

            {isShowSelect && (
              <div className={cssForm.selectWraper}>
                <ul className={cssForm.selectListWraper}>
                  <input
                    className={cssForm.selectCustom}
                    name="categoryId"
                    type="button"
                    // type="hidden"
                    // onClick={handleSelectCustom}
                    onClick={
                      () => setIsShowSelectList(false)
                      //toggleShowSelectList(true)
                    }
                    value={categoryTitle}
                  />
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
                  // {if (isShowSelect) min}
                  min="0"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                  // onChange={e => setAmount(e.target.value)}
                />
              </label>
              {/* <label> */}
              <Datetime
                inputProps={inputProps}
                value={valueDate}
                onChange={onChange}
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                onClose={value => setTransactionDate(moment(value).format())}
                closeOnSelect={true}
                onNavigate={a => console.log(a)}
                className={cssForm.inputDate}
                name="transactionDate"
              />
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
            </label>
            {/* select my */}
            <div className={cssForm.btnWraper}>
              <button className={cssForm.btnAdd} type="submit">
                ADD
              </button>
              <button className={cssForm.btnCancel} type="submit">
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
