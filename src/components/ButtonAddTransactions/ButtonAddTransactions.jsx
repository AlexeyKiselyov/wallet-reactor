import css from './ButtonAddTransactions.module.scss';
export const ButtonAddTransactions = ({ onModalOpen }) => {
  return (
    <>
      <button
        className={css.btnAddTransaction}
        onClick={onModalOpen}
        type="button"
      ></button>
    </>
  );
};
