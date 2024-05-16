import React, { useRef } from 'react';

const CustomHourInput = ({ value, onChange, name }) => {
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
    <input
      ref={inputRef}
      name={name}
      type="time"
      onFocus={onFocus} // Corrigido: onfocus para onFocus
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

export default CustomHourInput;
