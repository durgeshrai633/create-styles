import React from "react";

function Input({ name, id, placeholder, label }) {
  return (
    <div className='input__group'>
      <label form={name}>{label}</label>
      <input
        type='text'
        className='form__input'
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
