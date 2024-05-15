import React from 'react';
import calendarIcon from './Assets/calendardays.png';

const Header = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src={calendarIcon}
        alt="Ícone do calendário"
        style={{ marginRight: '596px' }}
      />
      <h2 style={{ color: '#333', marginRight: '270px' }}>
        Período de Contrato
      </h2>
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
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
            />
          </div>
          <div>
            <label style={{ marginBottom: '5px' }}>Horário de Início:</label>
            <input
              type="time"
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
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
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
            />
          </div>
          <div>
            <label style={{ marginBottom: '5px' }}>Horário de Término:</label>
            <input
              type="time"
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
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
            <input type="checkbox" />
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
            <input type="checkbox" />
            <span className="slider"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
