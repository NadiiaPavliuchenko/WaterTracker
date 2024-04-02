import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';

import useModal from '../../customHooks/useModal';
import { DailyNormaInputForm } from '../DailyNormaInputForm/DailyNormaInputForm';
import { DailyNormaCalcForm } from '../DailyNormaCalcForm/DailyNormaCalcForm';

export const DailyNormaModal = () => {
  const { isOpen, closeModal, handleKeyDown } = useModal();

  document.addEventListener('keydown', handleKeyDown);

  return (
    <>
      {isOpen && (
        <ModalContainer onClose={closeModal}>
          <div>
            <div>
              <div className="topline">
                <h2>My daily norm</h2>
                <CloseOutlinedIcon className="close" onClick={closeModal} />
              </div>
              <div>
                <p>
                  For woman: <span>V=(M*0,03) + (T*0,4)</span>
                </p>
                <p>
                  For man: <span>V=(M*0,04) + (T*0,6)</span>
                </p>
              </div>
              <div>
                <p>
                  <span>*</span>V is the volume of the water norm in liters per
                  day, M is your body weight, T is the time of active sports, or
                  another type of activity commensurate in terms of loads (in
                  the absence of these, you must set 0)
                </p>
              </div>
            </div>
            <div>
              <DailyNormaCalcForm />
            </div>

            <div>
              <DailyNormaInputForm />
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
};
