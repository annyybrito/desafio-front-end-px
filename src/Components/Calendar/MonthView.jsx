import React, { useMemo } from 'react';

import "./styles";
import { MonthContainer, WeekContainer, WeekDays, WeekDaysContainer } from './styles';
import CalendarDay from './CalendarDay';
import { getWeeksInMonth } from '../../helpers/dateHandlers';

function MonthView({ month, year }) {
    const amountWeeks = useMemo(() => {
        return getWeeksInMonth(month, year)
    }, [month, year]);
    return (
        <MonthContainer>
            <WeekDaysContainer>
                <WeekDays>DOM</WeekDays>
                <WeekDays>SEG</WeekDays>
                <WeekDays>TER</WeekDays>
                <WeekDays>QUA</WeekDays>
                <WeekDays>QUI</WeekDays>
                <WeekDays>SEX</WeekDays>
                <WeekDays>SAB</WeekDays>
            </WeekDaysContainer>
            {
                amountWeeks.map((week, i) =>
                    <WeekRow
                    key={`${year}-${month}-${i}`}
                    weekDays={week} 
                    indexWeek={i} 
                    month={month} 
                    />
                )
            }
        </MonthContainer>
    );
}

function WeekRow({ weekDays, indexWeek, month, year }) {
    const _weekDays = useMemo(() => {
        if (weekDays.length === 7) {
            return weekDays;
        }
        if (indexWeek === 0) {
            const sparseWeek = weekDays;
            const daysLeftOnWeek = 7 - weekDays.length;
            for (let i = 0; i < daysLeftOnWeek; i++) {
                const newDate = new Date(sparseWeek[0]);
                newDate.setDate(newDate.getDate() - 1);
                sparseWeek.unshift(newDate)
            }
            return sparseWeek;
        }
        if (indexWeek !== 0) {
            const sparseWeek = weekDays;
            const daysLeftOnWeek = 7 - weekDays.length;
            for (let i = 1; i <= daysLeftOnWeek; i++) {
                const newDate = new Date(weekDays[sparseWeek.length-1]);
                newDate.setDate(newDate.getDate() + 1);
                sparseWeek.push(newDate)
            }
            return sparseWeek;
        }
    }, [weekDays, indexWeek])
    return (
        <WeekContainer>
            {
                _weekDays.map((weekDay, i) =>
                    <CalendarDay
                    key={`${year}-${month}-${indexWeek}-${i}`}
                    weekDay={weekDay}
                     month={month} 
                     />
                )
            }
        </WeekContainer>
    )
}

export default MonthView;