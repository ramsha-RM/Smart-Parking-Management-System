import React, { useState } from "react";
import Select from "../common/Select";
import Button from "../common/Button";
import { vehicleTypes } from "../../data/vehicle-data.js";

export default function VehicleForm({ onSubmit }) {
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      className="vehicle-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ plate, type, notes });
      }}
    >
      <label className="field">
        <span className="field__label">Number plate</span>
        <input value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase())} placeholder="e.g. LEB-4471" required />
      </label>

      <Select label="Vehicle type" value={type} onChange={setType} options={vehicleTypes} placeholder="Select a type" />

      <label className="field">
        <span className="field__label">Notes (optional)</span>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Owner, contact, or reason" />
      </label>

      <Button type="submit">Register vehicle</Button>
    </form>
  );
}
