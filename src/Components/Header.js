import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'; // Importe o CSS do react-datepicker
import DatePicker from 'react-datepicker'; // Importe o componente DatePicker do react-datepicker
import calendarIcon from './Assets/calendardays.png';
import calendarCheck from './Assets/calendar-check.png';
import clock from './Assets/clock-8.png';

/* Indicador das horas, inputs de hora de inicio e hora de termino */
const CustomHourInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      style={{
        width: '141px',
        height: '38px',
        paddingLeft: '10px',
        borderRadius: '8px',
        border: '1px solid #CED2D6',
      }}
      placeholder="HH:MM" // Placeholder para indicar o formato esperado
    />
  );
};

/* Define data de inicio e termino */
const Header = () => {
  // Defina os estados para as datas de início e término
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    /*ícone de calendario e h2 do header*/
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={calendarIcon}
          style={{
            marginLeft: '50px',
            marginTop: '30px',
          }}
        />
        <h2
          style={{
            color: '#333',
            marginRight: '580px',
            marginTop: '40px',
            fontSize: '20px',
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
            <div style={{ marginBottom: '10px', position: 'relative' }}>
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
              {/* Substitua o input com o DatePicker */}
              <div
                style={{
                  textAlign: 'left',
                  marginLeft: '15px',
                  width: '141px',
                }}
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control custom-datepicker" // Adicione a classe personalizada junto com a classe do Bootstrap
                  calendarClassName="custom-calendar" // Adicione uma classe personalizada para o calendário
                  placeholderText="YY/MM/YYYY" // Define o texto pré-preenchido
                />
              </div>

              <img
                src={calendarCheck}
                alt="Ícone do calendário"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '12px',
                  width: '20px',
                  height: '20px',
                  marginRight: '120px',
                  marginTop: '25px',
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
              {/* Substitua o input com o componente de entrada de hora personalizado */}
              <CustomHourInput value={startTime} onChange={setStartTime} />
              <img
                src={clock}
                alt="Ícone do calendário"
                style={{
                  position: 'absolute',
                  right: '950px',
                  marginTop: '10px',
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
            <div style={{ marginBottom: '10px', position: 'relative' }}>
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
              <div tyle={{ position: 'relative' }}>
                {/* Substitua o input com o DatePicker */}
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control custom-datepicker" // Adicione a classe personalizada junto com a classe do Bootstrap
                  placeholderText="dd/MM/YYYY"
                />
                <img
                  src={calendarCheck}
                  alt="Ícone do calendário"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                    zIndex: 2,
                    marginRight: '105px',
                    marginTop: '14px',
                  }}
                />
              </div>
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
              {/* Substitua o input com o componente de entrada de hora personalizado */}
              <CustomHourInput value={endTime} onChange={setEndTime} />
              <img
                src={clock}
                alt="Ícone do calendário"
                style={{
                  position: 'absolute',
                  right: '560px',
                  marginTop: '10px',
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
