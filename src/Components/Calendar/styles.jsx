import styled from 'styled-components';

export const MonthContainer = styled.div`
  height: 100%;
  width: 120%;
  margin-left: 40px;
  margin-top: 50px;
`;
export const WeekContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const CalendarDayContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$active ? '#FFF' : '#EFF1F2')};
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border: white;
`;
