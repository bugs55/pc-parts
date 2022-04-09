import React from "react";

export default function Input({ name, type, label, value, handleChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
