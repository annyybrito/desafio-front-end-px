import React, { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
  const [dateContract, setDateContract] = useState({
    days_off: []
  });

  return (
    <CalendarContext.Provider value={{ dateContract, setDateContract }}>
      {children}
    </CalendarContext.Provider>
  );
};
