import { useEffect, useRef, useState } from 'react';

import CalendarModal from '../CalendarModal/CalendarModal';
import { Day, DayCell, DayPercent } from '../Month/Month.styled';
import { isSameDay } from '../../../services/dateAndTime';

const DayComponent = ({
  calendarRef,
  day,
  month,
  year,
  dailyWaterGoal,
  consumedWaterPercentage,
  consumedTimes,
}) => {
  const date = new Date(year, month.monthNumber, day);

  const isNotFuture = new Date() >= date;
  const isToday = isSameDay(new Date(), date);

  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = () => {
    setActiveModal((prevModal) => (prevModal === day ? null : day));
  };

  return (
    <DayCell key={day}>
      <div>
        {activeModal === day && (
          <CalendarModal
            key={day}
            calendarRef={calendarRef}
            refData={ref}
            waterDay={consumedWaterPercentage}
            day={day}
            month={month.monthName}
            dailyWaterGoal={dailyWaterGoal}
            consumedWaterPercentage={consumedWaterPercentage}
            consumedTimes={consumedTimes}
          />
        )}
      </div>
      <Day
        ref={ref}
        onClick={() => toggleModal(day)}
        $isOutlineVisible={consumedWaterPercentage < 100 && isNotFuture}
        $isToday={isToday}
      >
        {day}
      </Day>
      <DayPercent>{`${consumedWaterPercentage}%`}</DayPercent>
    </DayCell>
  );
};

export default DayComponent;
