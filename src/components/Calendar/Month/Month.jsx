import { useState, useRef, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMonthInfoThunk } from '../../../store/water/waterOperations';
import {
  getCurrentMonth,
  getCurrentNorm,
  getCurrentPercentage,
  getIsDayDataLoading,
} from '../../../store/water/waterSelectors';

import DayComponent from '../Day/Day';

import {
  ArrowButton,
  CalendarContainer,
  DaysContainer,
  MonthNav,
  MonthControl,
  Month,
  MonthTitle,
} from './Month.styled';

import { ThreeDots } from 'react-loader-spinner';
import { baseTheme } from '../theme';

export const Calendar = () => {
  // аргумент "dailyNormaState" принимаем информацию о дневной норме потребления воды;
  const [currentDate, setCurrentDate] = useState(new Date()); // текущая дата + функция состояния; currentDate = текущая дата;

  // const [isLoading] = useState(); // состояние загрузки;
  const dispatch = useDispatch();
  const ref = useRef(null);
  // const consumedWaterPercentage = useSelector(getCurrentPercentage);
  const todayPercentage = useSelector(getCurrentPercentage);

  const waterForMonth = useSelector(getCurrentMonth);

  const isLoading = useSelector(getIsDayDataLoading);

  // useEffect(() => {
  //   const month = `${
  //     currentDate.getMonth() + 1
  //   } - ${currentDate.getFullYear()}`;

  //   dispatch(getCurrentMonthInfoThunk(month));
  // }, [dispatch, currentDate, dailyNormaState]);

  // ===============================================================

  // const currentDate = useSelector((state) => state.currentDate); // Предположим, что есть стейт currentDate
  // const dailyNormaState = useSelector((state) => state.dailyNormaState); // Предположим, что есть стейт dailyNormaState

  // ============================================================================

  useEffect(() => {
    // Получаем первый и последний день текущего месяца

    const timeZoneOffset = currentDate.getTimezoneOffset();

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    firstDayOfMonth.setMinutes(firstDayOfMonth.getMinutes() - timeZoneOffset);

    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    lastDayOfMonth.setMinutes(lastDayOfMonth.getMinutes() - timeZoneOffset);

    // Формируем строку для запроса, содержащую начальную и конечную дату месяца
    const startDate = firstDayOfMonth.toISOString().split('T')[0];

    const endDate = lastDayOfMonth.toISOString().split('T')[0];

    // const dateRange = `${startDate} , ${endDate}`;
    const dateRange = {
      startDate,
      endDate,
    };

    // Вызываем thunk, передавая в него начальную и конечную дату месяца
    dispatch(getCurrentMonthInfoThunk(dateRange));
    console.log(dateRange);
  }, [dispatch, currentDate, todayPercentage]);

  // =========================================================================

  const handleNextMonth = () => {
    // вызове функции handleNextMonth() текущая дата обновляется на первый день следующего месяца;
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonthDate); // устанавливаем новую дату "nextMonthDate" в качестве текущей даты;
  };

  const handlePrevMonth = () => {
    //  переход на предыдущий месяц
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonthDate);
  };

  const isCurrentMonth = () => {
    // функция возвращает булево значение, показывающее, является ли текущий месяц тем же самым месяцем, что и у текущей даты.
    // Сравниваем месяц и год текущей даты с месяцем и годом текущей даты в нашем компоненте currentDate.
    // Если они совпадают, функция возвращает true, иначе - false.
    const today = new Date();
    return (
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate(); // Определяем по getDaysInMonth количества дней в текущем месяце, через текущий год, месяц и день месяца из объекта "Date".
  };

  const getMonth = () => {
    const monthNumber = new Date(currentDate).getMonth();
    const monthName = new Date(currentDate).toLocaleString('en-US', {
      month: 'long',
    });
    return { monthNumber, monthName };
  };

  const getYear = () => {
    return new Date(currentDate).getFullYear();
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();

    const month = getMonth();

    const year = getYear();

    return Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;

      const consumedWaterPercentage =
        waterForMonth && waterForMonth[index]
          ? waterForMonth[index]?.consumedWaterPercentage
          : 0;

      const dailyNorma =
        waterForMonth && waterForMonth[index]
          ? waterForMonth[index].dailyWaterGoal
          : 0;

      const intakesNumber =
        waterForMonth && waterForMonth[index]
          ? waterForMonth[index].consumedTimes
          : 0;

      // const renderDays = () => {
      //   const daysInMonth = getDaysInMonth();
      //   const renderedDays = [];

      //   for (let i = 1; i <= daysInMonth; i++) {
      //     const consumedWaterPercentage = waterForMonth && waterForMonth[i - 1]?.consumedWaterPercentage;
      //     renderedDays.push({ day: i, consumedWaterPercentage });
      //   }
      //   return renderedDays;

      // }

      return (
        <DayComponent
          key={day}
          day={day}
          month={month}
          year={year}
          dailyWaterGoal={dailyNorma}
          consumedWaterPercentage={consumedWaterPercentage}
          consumedTimes={intakesNumber}
        />
      );
    });
  };

  return (
    <CalendarContainer className="calendar" ref={ref}>
      <MonthNav>
        <MonthTitle>Month</MonthTitle>
        {isLoading && (
          <ThreeDots
            height="60"
            width="60"
            radius="9"
            color={baseTheme.colors.blue}
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              height: '30px',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <MonthControl>
          <ArrowButton aria-label="Previous month" onClick={handlePrevMonth}>
            <ArrowBackIosIcon sx={{ color: baseTheme.colors.blue }} />
          </ArrowButton>

          <Month>
            {`${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}, ${currentDate.getFullYear()}`}
          </Month>
          <ArrowButton
            aria-label="Next month"
            onClick={handleNextMonth}
            disabled={isCurrentMonth()}
          >
            <ArrowForwardIosIcon sx={{ color: baseTheme.colors.blue }} />
          </ArrowButton>
        </MonthControl>
      </MonthNav>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};
