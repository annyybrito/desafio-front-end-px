import React, { useMemo } from 'react';
import moment from 'moment';

import './styles';
import { CalendarDayContainer } from './styles';

const date = {
  start_at: '2024-05-01T21:07:00.000Z',
  end_at: '2024-05-31T03:07:00.000Z',
  days_off: ['05/05/2024', '12/05/2024', '19/05/2024', '26/05/2024'],
};

function CalendarDay({ weekDay, month }) {
  const [weekDate, isMonthDay] = useMemo(() => {
    const _weekDate = new Date(weekDay);
    const _isMonthDay = _weekDate.getMonth() === month;
    return [_weekDate, _isMonthDay];
  }, [month, weekDay]);

  const isFree = useMemo(() => {
    return date.days_off.includes(moment(weekDate).format('DD/MM/YYYY'));
  }, [weekDate]);

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
