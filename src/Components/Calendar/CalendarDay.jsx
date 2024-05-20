import React, { useMemo } from 'react';
import moment from 'moment';

import './styles';
import { CalendarDayContainer } from './styles';
import { useCalendarContext } from '../../providers/CalendarProvider';

function CalendarDay({ weekDay, month }) {
  const { dateContract } = useCalendarContext();

  console.log('dateContract:', dateContract);

  const [weekDate, isMonthDay] = useMemo(() => {
    const _weekDate = new Date(weekDay);
    const _isMonthDay = _weekDate.getMonth() === month;
    return [_weekDate, _isMonthDay];
  }, [month, weekDay]);

  const isFree = useMemo(() => {
    return dateContract.days_off.includes(
      moment(weekDate).format('DD/MM/YYYY'),
    );
  }, [dateContract.days_off, weekDate]);

  return (
    <CalendarDayContainer $active={isMonthDay}>
      {isFree && (
        <button
          style={{
            background: 'green',
            borderRadius: '10px',
            border: 'none',
            width: '40px',
            height: '5px',
            marginTop: '30px',
          }}
        ></button>
      )}
      <p>{weekDate.getDate()}</p>
    </CalendarDayContainer>
  );
}

export default CalendarDay;
