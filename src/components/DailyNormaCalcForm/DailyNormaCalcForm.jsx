import { useSelector } from 'react-redux';
import { getUserGender } from '../../store/auth/authSelectors';
import { useState } from 'react';
import {
  InputStyled,
  InputWrapper,
  LitersStyled,
  RadioWrapper,
  RadiosWrapper,
  TextStyled,
  TextsStyled,
  TitleStyled,
} from './DailyNormaCalcFormStyled';
import { MessageOfError } from '../DailyNormaInputForm/DailyNormaInputFormStyled';

export const DailyNormaCalcForm = () => {
  const initialGender = useSelector(getUserGender);

  const [gender, setGender] = useState(initialGender);
  const [weight, setWeight] = useState('');
  const [activeHours, setActiveHours] = useState('');
  const [isLessThanWeightLimit, setIsLessThanWeightLimit] = useState(true);
  const [isLessThanActiveHoursLimit, setIsLessThanActiveHoursLimit] =
    useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Регулярний вираз для перевірки цілого числа або числа з одним десятковим знаком
    const regex = /^(\d+([.,]\d{0,1})?)?$/;
    var formattedValue = value;
    const weightLimit = 200;
    const activeHoursLimit = 12;

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

        // Перевіряємо, чи введене значення не більше обмеження
        setIsLessThanWeightLimit(
          formattedValue === '' ||
            parseFloat(formattedValue.replace(',', '.')) <= weightLimit
        );

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

        // Перевіряємо, чи введене значення не більше обмеження
        setIsLessThanActiveHoursLimit(
          formattedValue === '' ||
            parseFloat(formattedValue.replace(',', '.')) <= activeHoursLimit
        );

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
        <TitleStyled>Calculate your rate:</TitleStyled>

        <RadiosWrapper>
          <RadioWrapper>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
              onChange={handleChange}
            />
            For woman
          </RadioWrapper>
          <RadioWrapper>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={gender === 'man'}
              onChange={handleChange}
            />
            For man
          </RadioWrapper>
        </RadiosWrapper>

        <InputWrapper>
          Your weight in kilograms:
          <InputStyled
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="0"
          />
          {!isLessThanWeightLimit && (
            <MessageOfError>
              The water rate cannot exceed 15 liters
            </MessageOfError>
          )}
        </InputWrapper>

        <InputWrapper>
          The time of active participation in sports or other activities with a
          high physical. load in hours:
          <InputStyled
            type="number"
            name="activeHours"
            value={activeHours}
            onChange={handleChange}
            placeholder="0"
          />
          {!isLessThanActiveHoursLimit && (
            <MessageOfError>
              The water rate cannot exceed 15 liters
            </MessageOfError>
          )}
        </InputWrapper>
        <TextsStyled>
          <TextStyled>
            The required amount of water in liters per day:{' '}
          </TextStyled>
          <LitersStyled>{roundedWaterNorma} L</LitersStyled>
        </TextsStyled>
      </form>
    </div>
  );
};
