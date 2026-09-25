import React, { useState } from "react";
import Select from "../common/Select";
import Button from "../common/Button";
import { vehicleTypes } from "../../data/vehicle-data.js";

export default function BookingForm({ onSubmit }) {
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("");
  const [when, setWhen] = useState("");

  return (
    <form
      className="booking-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ plate, type, when });
      }}
    >
      <div className="field-row">
        <label className="field">
          <span className="field__label">Number plate</span>
          <input value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase())} required />
        </label>
        <Select label="Vehicle type" value={type} onChange={setType} options={vehicleTypes} placeholder="Select a type" />
        <label className="field">
          <span className="field__label">Arrival time</span>
          <input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} required />
        </label>
      </div>
      <Button type="submit">Reserve a slot</Button>
    </form>
  );
}
