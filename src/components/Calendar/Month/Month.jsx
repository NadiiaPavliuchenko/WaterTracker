import { useState, useRef, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMonthInfoThunk } from '../../../store/water/waterOperations';
import { getCurrentMonth } from '../../../store/water/waterSelectors';

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

export const Calendar = (dailyNormaState) => {
  // аргумент "dailyNormaState" принимаем информацию о дневной норме потребления воды;
  const [currentDate, setCurrentDate] = useState(new Date()); // текущая дата + функция состояния; currentDate = текущая дата;
  const [isLoading] = useState(); // состояние загрузки;
  const dispatch = useDispatch();
  const ref = useRef(null);
  const waterForMonth = useSelector(getCurrentMonth);
  // const isLoading = useSelector(selectorIsLoadingMonth);

  useEffect(() => {
    const month = `${
      currentDate.getMonth() + 1
    } - ${currentDate.getFullYear()}`;

    dispatch(getCurrentMonthInfoThunk(month));
  }, [dispatch, currentDate, dailyNormaState]);

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

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();
    return Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const waterPercentage = waterForMonth?.find(
        (item) =>
          item.dayOfMonth && Number(item.dayOfMonth.split(',')[0]) === day
      );

      return (
        <DayComponent
          key={day}
          calendarRef={ref}
          day={day}
          //TODO: вставить процентаж
          waterPercentage={waterPercentage}
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