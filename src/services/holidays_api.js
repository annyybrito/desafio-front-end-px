import axios from 'axios';
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
