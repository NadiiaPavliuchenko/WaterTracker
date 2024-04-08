import { useDispatch, useSelector } from 'react-redux';
// import { getCurrentNorm } from '../../store/water/waterSelectors';
import { editDailyNorm } from '../../store/water/waterOperations';
import { useState } from 'react';
import { InputStyled } from '../DailyNormaCalcForm/DailyNormaCalcFormStyled';
import {
  ButtonStyled,
  LabelStyled,
  MessageOfError,
} from './DailyNormaInputFormStyled';
import { fetchUserData } from '../../store/auth/authOperations';
import { getCurrentNorm } from '../../store/water/waterSelectors';

export const DailyNormaInputForm = ({ closeModal }) => {
  const dailyNorm = useSelector(getCurrentNorm);

  const dailyNormLiters = (dailyNorm / 1000).toFixed(1);

  const [dailyWaterNorm, setDailyWaterNorm] = useState('');

  const [isLessThanLimit, setIsLessThanLimit] = useState(true);
  const limit = 15;

  const handleChange = (e) => {
    const { value } = e.target;
    // Регулярний вираз для перевірки цілого числа або числа з одним десятковим знаком
    const regex = /^(\d+([.,]\d{0,1})?)?$/;
    var formattedValue = value;
    // Перевіряємо, чи є введення крапкою або комою на початку
    if (value.match(/^[.,]/)) {
      formattedValue = '0' + value;
    } else {
      // Обрізаємо нулі на початку, якщо за ними не йде крапка
      formattedValue = value.replace(/^0+([^.])/, '$1');
    }

    // Перевіряємо, чи введене значення не більше обмеження

    setIsLessThanLimit(
      formattedValue === '' ||
        parseFloat(formattedValue.replace(',', '.')) <= limit
    );

    if (regex.test(formattedValue)) {
      setDailyWaterNorm(formattedValue);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLessThanLimit || dailyWaterNorm <= 0) {
      return;
    }

    const newNorm = e.target.elements.dailyNorm.value * 1000;

    try {
      const { payload } = await dispatch(editDailyNorm(newNorm));

      if (payload.user) {
        dispatch(fetchUserData());
        closeModal();
      }
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelStyled>
        Write down how much water you will drink:
        <InputStyled
          className={!isLessThanLimit && dailyWaterNorm <= 0 ? 'error' : ''}
          type="number"
          name="dailyNorm"
          value={dailyWaterNorm}
          onChange={handleChange}
          placeholder={dailyNormLiters}
        />
        {!isLessThanLimit && (
          <MessageOfError>
            {`The water rate cannot exceed ${limit} liters`}
          </MessageOfError>
        )}
        {dailyWaterNorm < 0 && (
          <MessageOfError>{`The water rate cannot be negative`}</MessageOfError>
        )}
        {parseFloat(dailyWaterNorm) === 0 && (
          <MessageOfError>{`The water rate cannot be 0`}</MessageOfError>
        )}
      </LabelStyled>

      <ButtonStyled className="confirm" type="submit">
        Save
      </ButtonStyled>
    </form>
  );
};
