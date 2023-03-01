import React from 'react';

export default function InputField(props) {
  const { name, label, ...other } = props;

  return (
    <div className={`flex flex-col space-y-2 `}>
      <label htmlFor={name}>{label}</label>
      <input className="block border-none p-0 w-1/2" {...other}  />
    </div>
  );
}
