import { useSelector } from 'react-redux';
import { getUserGender } from '../../store/auth/authSelectors';
import { useState } from 'react';
import {
  InputStyled,
  InputWrapper,
  LitersStyled,
  RadioInput,
  RadioInputCustom,
  RadioLabel,
  RadioStyled,
  RadioWrapper,
  RadiosWrapper,
  TextStyled,
  TextsStyled,
  TitleStyled,
} from './DailyNormaCalcFormStyled';
import { MessageOfError } from '../DailyNormaInputForm/DailyNormaInputFormStyled';
import sprite from '../../assets/sprite.svg';
import { getIsDarkTheme } from '../../store/theme/themeSelectors';

export const DailyNormaCalcForm = () => {
  const initialGender = useSelector(getUserGender);

  const [gender, setGender] = useState(initialGender);
  const [weight, setWeight] = useState('');
  const [activeHours, setActiveHours] = useState('');
  const [isLessThanWeightLimit, setIsLessThanWeightLimit] = useState(true);
  const [isLessThanActiveHoursLimit, setIsLessThanActiveHoursLimit] =
    useState(true);

  // Defines the names of the icons for the radiobuttons
  const color = useSelector(getIsDarkTheme) ? 'dark' : 'light';
  const statusWoman = gender === 'woman' ? 'active' : 'inactive';
  const iconIdWoman = `radio-${statusWoman}-${color}`;
  const statusMan = gender === 'man' ? 'active' : 'inactive';
  const iconIdMan = `radio-${statusMan}-${color}`;

  const weightLimit = 300;
  const activeHoursLimit = 12;

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
            <RadioInput
              id="woman"
              type="radio"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
              onChange={handleChange}
            />
            <RadioLabel htmlFor="woman">
              <RadioInputCustom>
                <RadioStyled>
                  <use href={`${sprite}#${iconIdWoman}`} />
                </RadioStyled>
              </RadioInputCustom>
              For woman
            </RadioLabel>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              id="man"
              type="radio"
              name="gender"
              value="man"
              checked={gender === 'man'}
              onChange={handleChange}
            />
            <RadioLabel htmlFor="man">
              <RadioInputCustom>
                <RadioStyled>
                  <use href={`${sprite}#${iconIdMan}`} />
                </RadioStyled>
              </RadioInputCustom>
              For man
            </RadioLabel>
          </RadioWrapper>
        </RadiosWrapper>

        <InputWrapper>
          Your weight in kilograms:
          <InputStyled
            className={!isLessThanWeightLimit ? 'error' : ''}
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="0"
          />
          {!isLessThanWeightLimit && (
            <MessageOfError>
              {`Weight cannot exceed ${weightLimit} kg`}
            </MessageOfError>
          )}
        </InputWrapper>

        <InputWrapper>
          The time of active participation in sports or other activities with a
          high physical. load in hours:
          <InputStyled
            className={!isLessThanActiveHoursLimit ? 'error' : ''}
            type="number"
            name="activeHours"
            value={activeHours}
            onChange={handleChange}
            placeholder="0"
          />
          {!isLessThanActiveHoursLimit && (
            <MessageOfError>
              {`Active hours cannot exceed ${activeHoursLimit} hours`}
            </MessageOfError>
          )}
        </InputWrapper>
        <TextsStyled>
          <TextStyled>
            The required amount of water in liters per day:{' '}
          </TextStyled>
          {isLessThanWeightLimit && isLessThanActiveHoursLimit && (
            <LitersStyled>{roundedWaterNorma} L</LitersStyled>
          )}
        </TextsStyled>
      </form>
    </div>
  );
};
