import ModalContainer from '../ModalContainer/ModalContainer';

import { DailyNormaInputForm } from '../DailyNormaInputForm/DailyNormaInputForm';
import { DailyNormaCalcForm } from '../DailyNormaCalcForm/DailyNormaCalcForm';
import {
  CloseOutlinedIconStyled,
  FormuleStyled,
  FormulesStyles,
  MarkStyled,
  ModalStyled,
  SpanStyled,
  StarStyled,
  TextStyled,
  TitleStyled,
  TopLineStyled,
} from './DailyNormaModal.styled';

export const DailyNormaModal = ({ isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <ModalStyled>
            <div>
              <TopLineStyled className="topline">
                <TitleStyled>My daily norm</TitleStyled>
                <CloseOutlinedIconStyled
                  className="close"
                  onClick={closeModal}
                />
              </TopLineStyled>
              <FormulesStyles>
                <FormuleStyled>
                  For woman: <SpanStyled>V=(M*0,03) + (T*0,4)</SpanStyled>
                </FormuleStyled>
                <FormuleStyled>
                  For man: <SpanStyled>V=(M*0,04) + (T*0,6)</SpanStyled>
                </FormuleStyled>
              </FormulesStyles>
              <MarkStyled>
                <TextStyled>
                  <StarStyled>*</StarStyled>V is the volume of the water norm in
                  liters per day, M is your body weight, T is the time of active
                  sports, or another type of activity commensurate in terms of
                  loads (in the absence of these, you must set 0)
                </TextStyled>
              </MarkStyled>
            </div>
            <div>
              <DailyNormaCalcForm />
            </div>

            <div>
              <DailyNormaInputForm closeModal={closeModal} />
            </div>
          </ModalStyled>
        </ModalContainer>
      )}
    </>
  );
};
