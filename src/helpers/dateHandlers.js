export const getAllSundays = (start_at, end_at) => {
  const startDate = new Date(start_at);
  const endDate = new Date(end_at);
  const sundays = [];

  if (startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() + (7 - startDate.getDay()));
  }

  while (startDate <= endDate) {
    const day = String(startDate.getDate()).padStart(2, '0');
    const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = startDate.getFullYear();
    sundays.push(`${day}/${month}/${year}`);
    startDate.setDate(startDate.getDate() + 7);
  }

  return sundays;
};

export const getYearsInRange = (start_at, end_at) => {
  const startDate = new Date(start_at);
  const endDate = new Date(end_at);
  const years = new Set();

  for (
    let year = startDate.getFullYear();
    year <= endDate.getFullYear();
    year++
  ) {
    years.add(String(year));
  }

  return Array.from(years);
};

export const getCompleteWeeksInMonth = (month, year) => {
  const startDate = new Date(year, month - 1, 1);

  const endDate = new Date(year, month, 1);

  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

  const completeWeeks = Math.floor(totalDays / 7);

  return completeWeeks;
};

export const getWeeksInMonth = (month, year) => {
  const weeks = [];
  let currentWeek = [];

  let currentDate = new Date(year, month, 1);

  while (currentDate.getMonth() === month) {
    currentWeek.push(new Date(currentDate));

    if (currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};

export const filterDatesInRange = (dates, startDate, endDate) => {
  const filteredDates = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  for (const date of dates) {
    const currentDate = new Date(date.split('/').reverse().join('-'));
    if (currentDate >= start && currentDate <= end) {
      filteredDates.push(date);
    }
  }

  return filteredDates;
};
