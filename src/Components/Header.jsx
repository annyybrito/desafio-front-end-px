import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import calendarIcon from './Assets/calendardays.png';
import calendarCheck from './Assets/calendar-check.png';
import clock from './Assets/clock-8.png';
import CustomHourInput from './TimePicker';
import { getAllHolidaysByYear } from '../services/holidays_api';
import { getAllSundays, getYearsInRange } from '../helpers/dateHandlers';

const Header = () => {
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const inputs = Object.fromEntries(formData);
    if (!(inputs.initialDate && inputs.initialTime)) {
      alert('Selecione uma Data Inicial e um Horário Inicial');
      return;
    }
    if (inputs.initialDate && inputs.initialTime) {
      inputs.initialDate = new Date(
        inputs.initialDate + ' ' + inputs.initialTime + ':00',
      );
    }
    if (!(inputs.finalDate && inputs.finalTime)) {
      alert('Selecione uma Data Final e um Horário Final');
      return;
    }
    if (inputs.finalDate && inputs.finalTime) {
      inputs.finalDate = new Date(
        inputs.finalDate + ' ' + inputs.finalTime + ':00',
      );
    }

    let allDaysOff = [];
    // Get Sundays in the Date rangE
    if (inputs.sundays === 'on') {
      const allSundays = getAllSundays(inputs.initialDate, inputs.finalDate);
      allDaysOff.push(allSundays);
      console.log('allSundays => ', allSundays);
    }
    // Get Years in the Date Range
    const years = getYearsInRange(inputs.initialDate, inputs.finalDate);

    // Get all Holidays in the Years in the Date range
    if (inputs.holidays === 'on') {
      const allHolidaysInYearsList = (
        await Promise.all(years.map((year) => getAllHolidaysByYear(year)))
      ).flat();
      const standarzingDates = allHolidaysInYearsList.map((holiday) => {
        const [year, month, day] = holiday.date.split('-');
        return `${day}/${month}/${year}`;
      });
      allDaysOff.push(standarzingDates);
      console.log('allHolidaysInYearsList => ', standarzingDates);
    }

    console.log('years => ', years);

    // mergin all holidays array and sundays in a single array in a Set to not repeat any Date and revert back to array.
    const notRepeatedAllDaysOff = Array.from(
      new Set(allDaysOff.flat()).values(),
    );
    const calendarData = {
      start_at: inputs.initialDate,
      end_at: inputs.finalDate,
      days_off: notRepeatedAllDaysOff,
    };
    console.log('Calendar Data:', calendarData);
  };

  const finalTime = 'finalTime';

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
              <TimePicker name="initialTime" />
              <img
                src={clock}
                alt="Ícone do calendário"
                style={{
                  position: 'absolute',
                  right: '945px',
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
              <CustomHourInput name={finalTime} />
              <img
                src={clock}
                alt="Ícone do calendário"
                style={{
                  position: 'absolute',
                  right: '570px',
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
      <button
        style={{
          width: '60px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#FF7E2E',
          color: 'white',
          marginTop: '-35px',
          cursor: 'pointer',
          marginLeft: '15px',
        }}
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </form>
  );
};

export default Header;
