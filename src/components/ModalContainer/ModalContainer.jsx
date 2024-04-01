import { ModalWrapper } from './ModalContainer.styled';

const ModalContainer = ({ children, onClose }) => {
  const handleClose = () => {
    if (onClose) onClose();
  };

  return <ModalWrapper onClick={handleClose}>{children}</ModalWrapper>;
};

export default ModalContainer;
