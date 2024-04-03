import ModalContainer from '../ModalContainer/ModalContainer';
const TodayListModal = ({ isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <div></div>
        </ModalContainer>
      )}
    </>
  );
};

export default TodayListModal;
