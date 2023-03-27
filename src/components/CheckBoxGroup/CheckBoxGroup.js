import React, { useState } from 'react';
import './CheckBoxGroup.css';

function CheckboxGroup(props) {
  const { options, selectedValues, onChange } = props;

  const handleChange = (event) => {
    const { value, checked } = event.target;
    let newSelectedValues = [...selectedValues];
    if (checked) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues = newSelectedValues.filter((val) => val !== value);
    }
    onChange(newSelectedValues);
  };

  return (
    <div className="checkbox-group">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleChange}
          />
          <span className='label-text'>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;