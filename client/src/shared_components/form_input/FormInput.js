import React from 'react'
import './form_input.css'
const FormInput = ({ id, onChange, value, required, label, type }) => {
  return (
    <div className={`form-input-container`}>
      <input
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className='form-input'
        type={type}
      />
      <span
        className={` form-input-label ${value && value !== '' ? 'valid' : ''}`}
      >
        {label}
      </span>
    </div>
  )
}

export default FormInput
