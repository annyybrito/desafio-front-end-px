import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import Anterior from './Assets/anterior.svg';
import Proximo from './Assets/proximo.svg';

import { Toolbar } from 'react-big-calendar';

// Defina o localizador de data para português
moment.locale('pt-br');
const localizer = momentLocalizer(moment);

// Componente de barra de ferramentas personalizado
const CustomToolbar = ({ label, onNavigate }) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}>
          Anterior
        </button>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          Próximo
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
    </div>
  );
};

const MyCalendar = ({ contractDetails }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <button
          style={{
            border: 'none',
            backgroundColor: 'white',
            marginLeft: '400px',
            marginTop: '10px',
          }}
          onClick={() =>
            setDate((prevDate) =>
              moment(prevDate).subtract(1, 'month').toDate(),
            )
          }
        >
          <img src={Anterior} alt="Ícone do Anterior" />
        </button>
        <span style={{ margin: '0 20px', fontSize: '1.2em' }}>
          {moment(date).format('MMMM YYYY')}
        </span>

        <button
          style={{
            border: 'none',
            backgroundColor: 'white',
            marginRight: '400px',
            marginTop: '10px',
          }}
          onClick={() =>
            setDate((prevDate) => moment(prevDate).add(1, 'month').toDate())
          }
        >
          <img src={Proximo} alt="Ícone do Próximo" />
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontWeight: 'bold',
        }}
      >
        <div
          style={{
            width: '780px',
            height: '400px',
            marginTop: '-340px',
            fontWeight: 'bold',
          }}
        >
          <BigCalendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            toolbar={false} // Remover a barra de ferramentas padrão
            components={{ toolbar: CustomToolbar }} // Usar o componente de barra de ferramentas personalizado
            date={date}
            onNavigate={setDate}
            contractDetails={contractDetails} // Passar os detalhes do contrato para o calendário
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
