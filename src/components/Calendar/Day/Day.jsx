import { useEffect, useRef, useState } from 'react';
import CalendarModal from '../CalendarModal/CalendarModal';
import { Day, DayCell, DayPercent } from '../Month/Month.styled';

const DayComponent = ({ calendarRef, day, consumedWaterPercentag }) => {
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
            waterData={consumedWaterPercentag}
          />
        )}
      </div>
      <Day
        ref={ref}
        onClick={() => toggleModal(day)}
        $isOutlineVisible={
          !consumedWaterPercentag || consumedWaterPercentag.percent < 100
        }
      >
        {day}
      </Day>
      <DayPercent>
        {consumedWaterPercentag
          ? `${Math.min(consumedWaterPercentag.percent, 100)}%`
          : '0%'}
      </DayPercent>
    </DayCell>
  );
};

export default DayComponent;
