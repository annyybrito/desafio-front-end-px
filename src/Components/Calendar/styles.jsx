import styled from 'styled-components';

export const MonthContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;
export const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const WeekDaysContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const WeekDays = styled.p`
  width: calc(100% / 7);
  background-color: #eff1f2;
  text-align: center;
`;
export const CalendarDayContainer = styled.div`
  width: calc(100% / 7);
  height: 80px;
  background-color: ${(props) => (props.$active ? '#FFF' : '#EFF1F2')};
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border: white;
`;
