import { CalendarModalStyles } from './CalendarModal.styled';

const CalendarModal = ({
  day,
  month,
  dailyWaterGoal,
  consumedWaterPercentage,
  consumedTimes,
}) => {
  const dayOfMonth = `${day}, ${month}`;

  return (
    <CalendarModalStyles>
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
          {dailyWaterGoal ? dailyWaterGoal / 1000 : 0} L
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
    </CalendarModalStyles>
  );
};

export default CalendarModal;
