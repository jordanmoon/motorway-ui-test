import React from 'react';

export default function InputField(props) {
  const { name, label, ...other } = props;

  return (
    <div className={`flex flex-col space-y-2`}>
      <label htmlFor={name}>{label}</label>
      <input className="block border px-2.5 py-1.5 border-gray-400 rounded w-full" {...other}  />
    </div>
  );
}
