import React, { useState } from 'react';

export default function InputField(props) {
  const { name, label, ...other } = props;

  const [rangeValue, setRangeValue] = useState(80000)

  return (
    <div className={`flex flex-col space-y-2`}>
      <div className="flex justify-between items-center">
        <label htmlFor={name}>{label} </label>
        <div>£{rangeValue}</div>
      </div>
      <input onChange={(e) => setRangeValue(e.target.value)} value={rangeValue} min={10000} max={300000} className="block border border-gray-400 rounded w-full" {...other}  />
    </div>
  );
}
