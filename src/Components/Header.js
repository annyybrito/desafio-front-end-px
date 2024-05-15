import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          style={{ position: 'absolute', top: '40px', right: '1110px' }}
        />
        <h2
          style={{
            color: '#333',
            marginRight: '520px',
            marginTop: '42px',
            fontSize: '16px',
          }}
        >
          Período de Contrato
        </h2>
      </div>
      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <div
          style={{
            width: '370px',
            backgroundColor: '#F7F8F9',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label
                style={{
                  marginBottom: '5px',
                  marginRight: '-50px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Data de Início:
              </label>
              <input
                type="date"
                style={{
                  width: '141px',
                  height: '38px',
                  marginLeft: '-5px',
                  padding: '5px',
                  borderRadius: '8px',
                  border: '1px solid #CED2D6',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  marginBottom: '5px',
                  marginRight: '10px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Horário de Início:
              </label>
              <input
                type="time"
                style={{
                  width: '141px',
                  height: '38px',
                  marginLeft: '2px',
                  padding: '5px',
                  borderRadius: '8px',
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
          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label
                style={{
                  marginBottom: '5px',
                  marginRight: '-50px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Data de Término:
              </label>
              <input
                type="date"
                style={{
                  width: '141px',
                  height: '38px',
                  padding: '5px',
                  borderRadius: '8px',
                  border: '1px solid #CED2D6',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  marginBottom: '5px',
                  marginRight: '10px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Horário de Fim:
              </label>
              <input
                type="time"
                style={{
                  width: '141px',
                  height: '38px',
                  padding: '5px',
                  borderRadius: '8px',
                  border: '1px solid #CED2D6',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '765px',
          height: '40px',
          backgroundColor: '#F7F8F9',
          padding: '20px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '100px',
            justifyContent: 'center',
            marginTop: '-15px',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="nationalHolidaysSwitch"
                style={{ width: '48px', height: '25px' }}
              />
              <label
                style={{
                  fontSize: '14px',
                  marginTop: '-2px',
                  marginLeft: '10px',
                }}
              >
                Liberar feriados nacionais
              </label>
            </div>
          </div>
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="sundaysSwitch"
                style={{ width: '48px', height: '25px' }}
              />
              <label
                style={{
                  fontSize: '14px',
                  marginTop: '-2px',
                  marginLeft: '10px',
                }}
              >
                Liberar domingos
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
