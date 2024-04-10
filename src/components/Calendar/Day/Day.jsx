import { useState, useEffect, useRef } from 'react';
import { Popover } from 'react-tiny-popover';
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

  const [popoverVisible, setPopoverVisible] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setPopoverVisible((prevState) => !prevState);
  };

  return (
    <DayCell key={day}>
      <div ref={ref}>
        <Popover
          isOpen={popoverVisible}
          positions={['top', 'center']}
          reposition={true}
          content={
            <CalendarModal
              calendarRef={calendarRef}
              refData={ref}
              waterDay={consumedWaterPercentage}
              day={day}
              month={month.monthName}
              dailyWaterGoal={dailyWaterGoal}
              consumedWaterPercentage={consumedWaterPercentage}
              consumedTimes={consumedTimes}
            />
          }
          onClickOutside={handleClickOutside}
        >
          <Day
            onClick={togglePopover}
            $isOutlineVisible={consumedWaterPercentage < 100 && isNotFuture}
            $isToday={isToday}
          >
            {day}
          </Day>
        </Popover>
      </div>
      <DayPercent>{`${consumedWaterPercentage}%`}</DayPercent>
    </DayCell>
  );
};

export default DayComponent;
