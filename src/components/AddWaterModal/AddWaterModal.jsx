import { useState } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { addWaterThunk } from '../../store/water/waterOperations';
import { ModalBox } from './AddWaterModal.styled';

const AddWaterModal = ({ isModalOpen, closeModal }) => {
  const [waterAmount, setWaterAmount] = useState(50);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setWaterAmount((prevAmount) => prevAmount + 50);
  };

  const handleDecrement = () => {
    if (waterAmount >= 50) {
      setWaterAmount((prevAmount) => prevAmount - 50);
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const timeZoneOffset = selectedTime.getTimezoneOffset();

    const data = {
      date: selectedTime,
      ml: waterAmount,
      timeZoneOffset,
    };

    dispatch(addWaterThunk(data));

    closeModal();
  };

  const handleChangeWaterAmount = (e) => {
    const amount = parseInt(e.target.value);
    setWaterAmount(amount);
  };
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <ModalBox>
            <div className="topline">
              <h2>Add water</h2>
              <CloseOutlinedIcon className="close" onClick={closeModal} />
            </div>

            <p>Choose of water:</p>
            <form onSubmit={handleFormSubmit}>
              <label>Amount of water:</label>
              <div className="counter">
                <button
                  className="counterBtn"
                  type="button"
                  onClick={handleDecrement}
                >
                  <RemoveIcon />
                </button>

                <div className="waterAmount">{waterAmount}ml</div>

                <button
                  className="counterBtn"
                  type="button"
                  onClick={handleIncrement}
                >
                  <AddIcon />
                </button>
              </div>

              <label>
                Recording time:
                <DatePicker
                  className="input"
                  selected={selectedTime}
                  onChange={(date) => handleTimeChange(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                />
              </label>

              <label>
                Enter the value of the water used:
                <input
                  className="input"
                  type="number"
                  value={waterAmount}
                  onChange={handleChangeWaterAmount}
                />
              </label>
              <div className="buttons">
                <span className="amount">{waterAmount}ml</span>
                <button
                  className="confirm"
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default AddWaterModal;
