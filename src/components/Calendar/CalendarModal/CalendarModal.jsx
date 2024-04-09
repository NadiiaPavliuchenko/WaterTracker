import { CalendarModalStyles } from './CalendarModal.styled';

const CalendarModal = ({
  calendarRef,
  refData,
  // waterData = {},
  day,
  month,

  dailyWaterGoal,
  consumedWaterPercentage,
  consumedTimes,
}) => {
  const dayOfMonth = `${day}, ${month}`;

  // const { dayOfMonth, waterRate, percent, numberRecords } = waterData;

  //  Здесь получаем значение "left" для текущего элемента и контейнера с помощью метода "getBoundingClientRect()".
  // Вычисляем "delta", которая определяет положение модального окна относительно контейнера.

  const currentRef = refData?.current.getBoundingClientRect().left;
  const containerRef = calendarRef?.current.getBoundingClientRect().left;

  let position = true;

  // Вычисляем разницу между позицией текущего элемента и контейнера.
  // Если разница "delta" между текущим элементом и контейнером меньше 250 пикселей, переменная position устанавливается в "false".

  const delta = currentRef - containerRef;
  if (delta < 250) {
    position = false;
  }

  // Проверяем наличие данных в "waterData". Если есть данные, отображается информация о потреблении воды за день,
  // в противном случае отображается сообщение о том, что записей за этот день нет.
  return (
    <CalendarModalStyles $delta={position} $deltaNum={delta}>
      <>
        <h3 style={{ fontSize: '16px', lineHeight: 'calc(20 / 16)' }}>
          {dayOfMonth}
        </h3>
        <p style={{ fontSize: '16px', lineHeight: 'calc(20 / 16)' }}>
          Daily norma:{' '}
          <span
            style={{
              fontSize: '18px',
              lineHeight: 'calc(24 / 18)',
              fontWeight: '600',
            }}
          >
            {dailyWaterGoal / 1000} L
          </span>
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 'calc(20 / 16)',
          }}
        >
          Fulfillment of the daily norm:{' '}
          <span
            style={{
              fontSize: '18px',
              lineHeight: 'calc(24 / 18)',
              fontWeight: '600',
            }}
          >
            {consumedWaterPercentage}%
          </span>
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 'calc(20 / 16)',
          }}
        >
          How many servings of water:{' '}
          <span
            style={{
              fontSize: '18px',
              lineHeight: 'calc(24 / 18)',
              fontWeight: '600',
            }}
          >
            {consumedTimes}
          </span>
        </p>
      </>
    </CalendarModalStyles>
  );
};

export default CalendarModal;
