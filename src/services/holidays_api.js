import axios from 'axios';


/**
 * Fetches all holidays for a given year from the Brasil API.
 *
 * @param {string} year - The year for which to fetch holidays. This parameter is required.
 * @returns {Promise<Object[]>} A promise that resolves to an array of holiday objects. 
 * If an error occurs, it returns an empty array.
 * @throws Will log an error to the console if the request fails.
 */
export const getAllHolidaysByYear = async (year) => {
  try {
    const response = await axios.get(
      `https://brasilapi.com.br/api/feriados/v1/${year}`,
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os feriados:', error);
    return [];
  }
};