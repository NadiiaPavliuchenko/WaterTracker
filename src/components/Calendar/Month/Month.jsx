import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMonthInfoThunk } from '../../../store/water/waterOperations';
import { ThreeDots } from 'react-loader-spinner';
import {
  getCurrentDay,
  getCurrentMonth,
  getIsDayDataLoading,
} from '../../../store/water/waterSelectors';
import sprite from '../../../assets/sprite.svg';

import DayComponent from '../Day/Day';

import {
  ArrowButton,
  ArrowLeftButton,
  CalendarContainer,
  DaysContainer,
  MonthNav,
  MonthControl,
  Month,
  MonthTitle,
  StyledSvg,
} from './Month.styled';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // текущая дата + функция состояния; currentDate = текущая дата;

  const dispatch = useDispatch();
  const ref = useRef(null);
  const currentDay = useSelector(getCurrentDay);

  const waterForMonth = useSelector(getCurrentMonth);

  const isLoading = useSelector(getIsDayDataLoading);

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

    const dateRange = {
      startDate,
      endDate,
    };

    // Вызываем thunk, передавая в него начальную и конечную дату месяца
    dispatch(getCurrentMonthInfoThunk(dateRange));
  }, [dispatch, currentDate, currentDay]);

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
      if (!waterForMonth) {
        return;
      }

      const day = index + 1;

      const currentDay = waterForMonth.find(
        ({ entryDate }) => day === new Date(entryDate).getDate()
      );

      const consumedWaterPercentage = currentDay
        ? currentDay.consumedWaterPercentage
        : 0;

      const dailyNorma = currentDay ? currentDay.dailyWaterGoal : 0;

      const intakesNumber = currentDay ? currentDay.consumedTimes : 0;

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
            color="#5082F2"
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
          <ArrowLeftButton
            aria-label="Previous month"
            onClick={handlePrevMonth}
          >
            <StyledSvg className="uploadIcon" width="16px" height="16px">
              <use xlinkHref={`${sprite}#arrow-left`} />
            </StyledSvg>
          </ArrowLeftButton>

          <Month>
            {`${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}, ${currentDate.getFullYear()}`}
          </Month>
          <ArrowButton
            aria-label="Next month"
            onClick={handleNextMonth}
            disabled={isCurrentMonth()}
            hidden={isCurrentMonth()}
          >
            <StyledSvg className="uploadIcon" width="16px" height="16px">
              <use xlinkHref={`${sprite}#arrow-right`} />
            </StyledSvg>
          </ArrowButton>
        </MonthControl>
      </MonthNav>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};
