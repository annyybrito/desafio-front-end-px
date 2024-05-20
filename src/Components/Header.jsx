import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import calendarIcon from './Assets/calendardays.png';
import calendarCheck from './Assets/calendar-check.png';
import { getAllHolidaysByYear } from '../services/holidays_api';
import {
  filterDatesInRange,
  getAllSundays,
  getYearsInRange,
} from '../helpers/dateHandlers';
import { useCalendarContext } from '../providers/CalendarProvider';

const Header = () => {
  const { setDateContract } = useCalendarContext();
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const inputs = Object.fromEntries(formData);
    console.log('Form Data:', formData);
    console.log('Inputs:', inputs);

    if (!inputs.initialDate || !inputs.initialTime) {
      alert('Selecione uma Data Inicial e um Horário Inicial');
      return;
    }

    if (!inputs.finalDate || !inputs.finalTime) {
      alert('Selecione uma Data Final e um Horário Final');
      return;
    }

    let allDaysOff = [];
    if (inputs.sundays !== 'on') {
      const allSundays = getAllSundays(inputs.initialDate, inputs.finalDate);
      allDaysOff.push(allSundays);
    }
    const years = getYearsInRange(inputs.initialDate, inputs.finalDate);

    if (inputs.holidays !== 'on') {
      const allHolidaysInYearsList = (
        await Promise.all(years.map((year) => getAllHolidaysByYear(year)))
      ).flat();
      const standarzingDates = allHolidaysInYearsList.map((holiday) => {
        const [year, month, day] = holiday.date.split('-');
        return `${day}/${month}/${year}`;
      });
      allDaysOff.push(standarzingDates);
    }

    const notRepeatedAllDaysOff = Array.from(
      new Set(allDaysOff.flat()).values(),
    );
    const calendarData = {
      start_at: inputs.initialDate,
      end_at: inputs.finalDate,
      days_off: filterDatesInRange(
        notRepeatedAllDaysOff,
        inputs.initialDate,
        inputs.finalDate,
      ),
    };
    setDateContract(calendarData);
  };

  return (
    <form
      ref={formRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={calendarIcon}
          style={{ marginLeft: '50px', marginTop: '30px' }}
          alt="calendar icon"
        />
        <h2
          style={{
            color: '#333',
            marginRight: '580px',
            marginTop: '40px',
            fontSize: '20px',
            fontWeight: 'bold',
            marginLeft: '5px',
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
              <div
                style={{
                  textAlign: 'left',
                  marginLeft: '15px',
                  width: '141px',
                }}
              >
                <DatePicker name="initialDate" />
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
                  marginRight: '105px',
                  marginTop: '25px',
                }}
              />
            </div>
            <TimePicker label="Horário de Início" name="initialTime" />
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
              <div style={{ position: 'relative' }}>
                <DatePicker name="finalDate" />
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
                    marginTop: '1px',
                  }}
                />
              </div>
            </div>
            <TimePicker label="Horário de Fim" name="finalDate" />
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
            marginRight: '20px',
          }}
        >
          <div style={{ marginBottom: '10px', marginRight: '10px' }}>
            <div className="form-check form-switch">
              <input
                name="holidays"
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
                name="sundays"
                className="form-check-input"
                type="checkbox"
                id="sundaysSwitch"
                style={{ width: '48px', height: '25px' }}
              />
              <label
                style={{
                  fontSize: '14px',
                  marginTop: '-10px',
                  marginLeft: '10px',
                }}
              >
                Liberar domingos
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: 780,
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'end',
          margin: '1rem 0px 2rem 0px',
          padding: '0px 1rem',
        }}
      >
        <button
          style={{
            width: '80px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#FF7E2E',
            color: 'white',
            cursor: 'pointer',
            padding: '4px 1rem',
          }}
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Header;
