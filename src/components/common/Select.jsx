import React from "react";
import "./common.css"
export default function Select({ label, value, onChange, options, placeholder }) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
