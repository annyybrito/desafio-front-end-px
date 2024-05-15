import React from 'react';
import calendarIcon from './Assets/calendardays.png';

const Header = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={calendarIcon}
          alt="Ícone do calendário"
          style={{ position: 'absolute', top: '50px', right: '1140px' }}
        />
        <h2 style={{ color: '#333', marginRight: '500px', marginTop: '35px' }}>
          Período de Contrato
        </h2>
      </div>
      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <div
          style={{
            width: '338px',
            backgroundColor: '#F7F8F9',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px', marginRight: '-50px' }}>
                Data de Início:
              </label>
              <input
                type="date"
                style={{
                  marginLeft: '-5px',
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #CED2D6',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  marginBottom: '5px',
                  marginRight: '10px',
                }}
              >
                Horário de Início:
              </label>
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
          style={{
            width: '370px',
            backgroundColor: '#F7F8F9',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', gap: '2px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px', marginRight: '-50px' }}>
                Data de Término:
              </label>
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
              <label style={{ marginBottom: '5px', marginRight: '10px' }}>
                Horário de Término:
              </label>
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
        <div style={{ display: 'flex', gap: '90' }}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
            />
            <label style={{ marginBottom: '5px' }}>
              Liberar feriados nacionais
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              style={{
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #CED2D6',
              }}
            />
            <label style={{ marginBottom: '5px' }}>Liberar domingos</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
