/**
 * Calculates all Sundays between two dates and returns them in "DD/MM/YYYY" format.
 *
 * @param {string} start_at - The start date in "YYYY/MM/DD HH:mm:ss" format.
 * @param {string} end_at - The end date in "YYYY/MM/DD HH:mm:ss" format.
 * @returns {string[]} An array of strings representing all Sundays in "DD/MM/YYYY" format.
 */
export const getAllSundays = (start_at, end_at) => {
    const startDate = new Date(start_at);
    const endDate = new Date(end_at);
    const sundays = [];

    // Set the start date to the next Sunday if it is not already a Sunday
    if (startDate.getDay() !== 0) {
        startDate.setDate(startDate.getDate() + (7 - startDate.getDay()));
    }

    // Iterate through each Sunday between the start and end dates
    while (startDate <= endDate) {
        const day = String(startDate.getDate()).padStart(2, '0');
        const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = startDate.getFullYear();
        sundays.push(`${day}/${month}/${year}`);
        startDate.setDate(startDate.getDate() + 7);
    }

    return sundays;
};

/**
 * Gets all unique years within a date range and returns them as an array of strings.
 *
 * @param {string} start_at - The start date in "YYYY/MM/DD HH:mm:ss" format.
 * @param {string} end_at - The end date in "YYYY/MM/DD HH:mm:ss" format.
 * @returns {string[]} An array of strings representing all unique years within the date range.
 */
export const getYearsInRange = (start_at, end_at) => {
    const startDate = new Date(start_at);
    const endDate = new Date(end_at);
    const years = new Set();

    for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
        years.add(String(year));
    }

    return Array.from(years);
};

/**
 * Calculates the number of complete weeks in a given month and year.
 *
 * @param {number} month - The month for which to calculate weeks (1 = January, 12 = December).
 * @param {number} year - The year for which to calculate weeks.
 * @returns {number} The number of complete weeks in the month.
 */
export const getCompleteWeeksInMonth = (month, year) => {
    // Create a date object for the first day of the given month and year
    const startDate = new Date(year, month-1, 1);

    // Create a date object for the first day of the next month
    const endDate = new Date(year, month, 1);

    // Calculate the total number of days in the month
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

    // Calculate the number of complete weeks
    const completeWeeks = Math.floor(totalDays / 7);

    return completeWeeks;
};

export const getWeeksInMonth = (month, year) => {
    const weeks = [];
    let currentWeek = [];
  
    // Create a date object for the first day of the given month and year
    let currentDate = new Date(year, month, 1);
  
    // Iterate until the end of the month
    while (currentDate.getMonth() === month) {
      // Add the current date to the current week
      currentWeek.push(new Date(currentDate));
  
      // If the current date is Saturday, push the current week to weeks array and start a new week
      if (currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
  
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    // Push the last week if it has any days
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }
  
    return weeks;
  };
