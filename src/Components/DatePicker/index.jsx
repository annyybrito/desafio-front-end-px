import React, { useRef } from 'react';
import './styles.css';

function DatePicker({ props }) {
  const inputRef = useRef(null);

  const onFocus = () => {
    if (inputRef.current && inputRef.current.showPicker) {
      inputRef.current.showPicker();
    }
  };

  return (
    <input
      ref={inputRef}
      name="initialDate"
      type="date"
      className="form-control custom-datepicker"
      onFocus={onFocus}
      {...props}
    />
  );
}

export default DatePicker;
