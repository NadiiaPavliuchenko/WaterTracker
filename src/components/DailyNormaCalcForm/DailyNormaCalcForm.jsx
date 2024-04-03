import { useSelector } from 'react-redux';
import { getUserGender } from '../../store/auth/authSelectors';
import { useState } from 'react';

export const DailyNormaCalcForm = () => {
  const initialGender = useSelector(getUserGender);

  const [gender, setGender] = useState(initialGender);
  const [weight, setWeight] = useState('');
  const [activeHours, setActiveHours] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Регулярний вираз для перевірки цілого числа або числа з одним десятковим знаком
    const regex = /^(\d+([.,]\d{0,1})?)?$/;
    var formattedValue = value;

    switch (name) {
      case 'gender':
        setGender(value);
        break;

      case 'weight':
        // Перевіряємо, чи є введення крапкою або комою на початку
        if (value.match(/^[.,]/)) {
          formattedValue = '0' + value;
        } else {
          // Обрізаємо нулі на початку, якщо за ними не йде крапка
          formattedValue = value.replace(/^0+([^.])/, '$1');
        }

        if (regex.test(formattedValue)) {
          setWeight(formattedValue);
        }
        break;

      case 'activeHours':
        // Перевіряємо, чи є введення крапкою або комою на початку
        if (value.match(/^[.,]/)) {
          formattedValue = '0' + value;
        } else {
          // Обрізаємо нулі на початку, якщо за ними не йде крапка
          formattedValue = value.replace(/^0+([^.])/, '$1');
        }

        if (regex.test(formattedValue)) {
          setActiveHours(formattedValue);
        }
        break;

      default:
        break;
    }
  };

  const waterNorma =
    gender === 'woman'
      ? weight * 0.03 + activeHours * 0.4
      : weight * 0.04 + activeHours * 0.6;

  const roundedWaterNorma = Math.round(waterNorma * 10) / 10;

  return (
    <div>
      <form action="">
        <h3>Calculate your rate:</h3>

        <label>
          Gender
          <label>
            For woman
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
              onChange={handleChange}
            />
          </label>
          <label>
            For man
            <input
              type="radio"
              name="gender"
              value="man"
              checked={gender === 'man'}
              onChange={handleChange}
            />
          </label>
        </label>

        <label htmlFor="">
          Your weight in kilograms:
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="">
          The time of active participation in sports or other activities with a
          high physical. load in hours:
          <input
            type="number"
            name="activeHours"
            value={activeHours}
            onChange={handleChange}
          />
        </label>
        <p>
          The required amount of water in liters per day:{' '}
          <span>{roundedWaterNorma} L</span>
        </p>
      </form>
    </div>
  );
};
