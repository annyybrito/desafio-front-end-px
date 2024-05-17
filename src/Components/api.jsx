import axios from 'axios';

export const getHolidays = async () => {
  try {
    const response = await axios.get(
      ' https://brasilapi.com.br/api/feriados/v1/2024',
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os feriados:', error);
    return [];
  }
};
