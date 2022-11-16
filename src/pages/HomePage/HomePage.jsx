import {  useState } from 'react';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HomeTab />
      <ButtonAddTransactions onModalOpen={openModal} />
      {isModalOpen && <ModalAddTransaction closeModal={closeModal} />}
    </>
  );
};
export default HomePage;
