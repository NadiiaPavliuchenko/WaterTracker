import { useState } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBox } from './TodayListModal.styled';
import { getDrinks } from '../../store/water/waterSelectors';
import { editDrinkThunk } from '../../store/water/waterOperations';

const TodayListModal = ({ isModalOpen, closeModal }) => {
  const [waterAmount, setWaterAmount] = useState(50);
  const [selectedTime, setSelectedTime] = useState('');
  const { id, ml, time } = useSelector(getDrinks);

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
    const data = {
      time: selectedTime,
      ml: waterAmount,
    };
    console.log(data);

    dispatch(editDrinkThunk({ id, data }));
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
              <h2>Edit the entered amount of water</h2>
              <CloseOutlinedIcon className="close" onClick={closeModal} />
            </div>
            {/* TODO вставить данные существующей записи */}
            <span className="amount">{ml}ml</span>
            {time}
            <p>Correct entered data:</p>
            <form onSubmit={handleFormSubmit}>
              <label>
                Amount of water:
                <div className="counter">
                  <button
                    className="counterBtn"
                    type="button"
                    onClick={handleIncrement}
                  >
                    <AddIcon />
                  </button>
                  <span className="waterAmount">{waterAmount}ml</span>
                  <button
                    className="counterBtn"
                    type="button"
                    onClick={handleDecrement}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </label>

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

export default TodayListModal;
