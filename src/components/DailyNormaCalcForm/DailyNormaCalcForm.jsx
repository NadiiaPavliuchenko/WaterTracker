import { useSelector } from 'react-redux';
import { getUserGender } from '../../store/auth/authSelectors';
import { useState } from 'react';

export const DailyNormaCalcForm = () => {
  const initialGender = useSelector(getUserGender);
  const [gender, setGender] = useState(initialGender);
  const [weight, setWeight] = useState(0);
  const [activeHours, setActiveHours] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'gender':
        setGender(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'activeHours':
        setActiveHours(value);
        break;
      default:
        break;
    }
  };

  const waterNorma =
    gender === 'woman'
      ? weight * 0.03 + activeHours * 0.4
      : weight * 0.04 + activeHours * 0.6;

  return (
    <div>
      <form action="">
        <h3>Calculate your rate:</h3>

        <label>
          Gender
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
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
          <span>{waterNorma} L</span>
        </p>
      </form>
    </div>
  );
};
