import React from 'react';

function FormInput({ label, type, name, value,onInputChange }) {
  return (
    <div className="w-full mt-6 first:mt-14">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onInputChange}
        placeholder={label}
        className="px-5 py-2.5 w-full rounded-xl bg-neutral-100"
        aria-label={label}
      />
    </div>
  );
}

export default FormInput;