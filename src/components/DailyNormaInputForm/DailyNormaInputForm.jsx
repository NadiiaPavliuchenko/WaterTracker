import { useDispatch } from 'react-redux';
// import { getCurrentNorm } from '../../store/water/waterSelectors';
import { editDailyNorm } from '../../store/water/waterOperations';
import { useState } from 'react';

export const DailyNormaInputForm = ({ closeModal }) => {
  // const dailyNorm = useSelector(getCurrentNorm);
  const dailyNorm = 30000;
  const dailyNormLiters = (dailyNorm / 1000).toFixed(1);

  const [dailyWaterNorm, setDailyWaterNorm] = useState('');

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

    if (regex.test(formattedValue)) {
      setDailyWaterNorm(formattedValue);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNorm = e.target.elements.dailyNorm.value * 1000;

    try {
      const { payload } = await dispatch(editDailyNorm(newNorm));

      if (payload.user) {
        closeModal();
      }
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write down how much water you will drink:
        <input
          type="number"
          name="dailyNorm"
          value={dailyWaterNorm}
          onChange={handleChange}
          placeholder={dailyNormLiters}
        />
      </label>

      <button className="confirm" type="submit">
        Save
      </button>
    </form>
  );
};
