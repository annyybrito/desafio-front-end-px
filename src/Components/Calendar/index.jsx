import React, { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import Anterior from '../Assets/anterior.svg';
import Proximo from '../Assets/proximo.svg';
import MonthView from './MonthView';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const MyCalendar = ({ contractDetails }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 780,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <button
            style={{
              border: 'none',
              backgroundColor: 'white',
              marginTop: '-10px',
            }}
            onClick={() =>
              setDate((prevDate) =>
                moment(prevDate).subtract(1, 'month').toDate(),
              )
            }
          >
            <img src={Anterior} alt="Ícone do Anterior" />
          </button>
          <span
            style={{ margin: '0 20px', fontSize: '1.2em', fontWeight: 'bold' }}
          >
            {moment(date)
              .format('MMMM [de] YYYY')
              .replace(/^\w/, (c) => c.toUpperCase())}
          </span>

          <button
            style={{
              border: 'none',
              backgroundColor: 'white',
              marginTop: '-10px',
            }}
            onClick={() =>
              setDate((prevDate) => moment(prevDate).add(1, 'month').toDate())
            }
          >
            <img src={Proximo} alt="Ícone do Próximo" />
          </button>
        </div>
      </div>
      <div
        style={{
          width: '780px',
          height: '370px',
          margin: 'auto',
        }}
      >
        <MonthView month={date.getMonth()} year={date.getFullYear()} />
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div
            className="form-check form-switch"
            style={{ marginLeft: '450px', marginTop: '-50px' }}
          >
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: '#FF7E2E',
                border: 'none',
                width: '50px',
                marginLeft: '200px',
              }}
            ></button>
            <label
              className="form-check-label"
              style={{
                marginLeft: '20px',
                fontWeight: 'bold',
                marginTop: '130px',
              }}
            >
              Períodos de serviço
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-check form-switch" style={{ marginTop: '80px' }}>
            <button
              className="btn btn-secondary"
              style={{
                backgroundColor: '#2E9A3E',
                width: '50px',
                borderRadius: '100px',
                border: 'none',
              }}
            ></button>
            <label
              className="form-check-label"
              style={{ marginLeft: '10px', fontWeight: 'bold' }}
            >
              Períodos Livres
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
