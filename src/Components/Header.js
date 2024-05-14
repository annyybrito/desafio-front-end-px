import React, { useState } from 'react';

const Header = ({ onChange }) => {
  const [liberarFeriados, setLiberarFeriados] = useState(false);
  const [liberarDomingos, setLiberarDomingos] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    onChange({
      startDate: newStartDate,
      startTime,
      endDate,
      endTime,
      liberarFeriados,
      liberarDomingos,
    });
  };

  const handleStartTimeChange = (event) => {
    const newStartTime = event.target.value;
    setStartTime(newStartTime);
    onChange({
      startDate,
      startTime: newStartTime,
      endDate,
      endTime,
      liberarFeriados,
      liberarDomingos,
    });
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    onChange({
      startDate,
      startTime,
      endDate: newEndDate,
      endTime,
      liberarFeriados,
      liberarDomingos,
    });
  };

  const handleEndTimeChange = (event) => {
    const newEndTime = event.target.value;
    setEndTime(newEndTime);
    onChange({
      startDate,
      startTime,
      endDate,
      endTime: newEndTime,
      liberarFeriados,
      liberarDomingos,
    });
  };

  const handleLiberarFeriadosChange = () => {
    const newLiberarFeriados = !liberarFeriados;
    setLiberarFeriados(newLiberarFeriados);
    onChange({
      startDate,
      startTime,
      endDate,
      endTime,
      liberarFeriados: newLiberarFeriados,
      liberarDomingos,
    });
  };

  const handleLiberarDomingosChange = () => {
    const newLiberarDomingos = !liberarDomingos;
    setLiberarDomingos(newLiberarDomingos);
    onChange({
      startDate,
      startTime,
      endDate,
      endTime,
      liberarFeriados,
      liberarDomingos: newLiberarDomingos,
    });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 style={{ color: '#333' }}>Período de Contrato</h2>
      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <div
          style={{
            backgroundColor: '#F7F8F9',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginBottom: '5px' }}>Data de Início:</label>
            <input
              type="date"
              style={{ padding: '5px', borderRadius: '5px' }}
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <label style={{ marginBottom: '5px' }}>Horário de Início:</label>
            <input
              type="time"
              style={{ padding: '5px', borderRadius: '5px' }}
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#F7F8F9',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginBottom: '5px' }}>Data de Término:</label>
            <input
              type="date"
              style={{ padding: '5px', borderRadius: '5px' }}
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div>
            <label style={{ marginBottom: '5px' }}>Horário de Término:</label>
            <input
              type="time"
              style={{ padding: '5px', borderRadius: '5px' }}
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </div>
        </div>
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
      >
        <div
          style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}
        >
          <label
            style={{
              marginRight: '10px',
              backgroundColor: '#F7F8F9',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            Liberar feriados nacionais:
          </label>
          <div
            className="toggle"
            style={{
              backgroundColor: '#F7F8F9',
              padding: '5px',
              borderRadius: '20px',
            }}
          >
            <input
              type="checkbox"
              checked={liberarFeriados}
              onChange={handleLiberarFeriadosChange}
            />
            <span className="slider"></span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label
            style={{
              marginRight: '10px',
              backgroundColor: '#F7F8F9',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            Liberar domingos:
          </label>
          <div
            className="toggle"
            style={{
              backgroundColor: '#F7F8F9',
              padding: '5px',
              borderRadius: '20px',
            }}
          >
            <input
              type="checkbox"
              checked={liberarDomingos}
              onChange={handleLiberarDomingosChange}
            />
            <span className="slider"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
