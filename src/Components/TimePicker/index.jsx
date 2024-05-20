import React, { useRef } from 'react';
import clock from '../Assets/clock-8.png';

const CustomHourInput = ({ value, onChange, name, label }) => {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (onChange) {
      onChange(inputValue);
    }
  };

  const onFocus = () => {
    if (inputRef.current && inputRef.current.showPicker) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <label
        style={{
          marginBottom: '5px',
          marginRight: '10px',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        name={name}
        type="time"
        onFocus={onFocus}
        value={value}
        onChange={handleChange}
        style={{
          width: '141px',
          height: '38px',
          paddingLeft: '30px',
          borderRadius: '8px',
          border: '1px solid #CED2D6',
        }}
        placeholder="HH:MM"
      />
      <img
        src={clock}
        alt="Ícone do calendário"
        style={{
          position: 'absolute',
          left: '10px',
          marginTop: '10px',
        }}
      />
    </div>
  );
};

export default CustomHourInput;
