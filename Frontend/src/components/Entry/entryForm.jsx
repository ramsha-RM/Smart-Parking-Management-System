import React, { useState } from "react";

import Select from "../common/Select";
import Button from "../common/Button";
import { vehicleTypes } from "../../data/vehicle-data.js";

export default function EntryForm({ onCheck }) {
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("");

  return (
    <form
      className="entry-form"
      onSubmit={(e) => {
        e.preventDefault();
        onCheck?.({ plate, type });
      }}
    >
      <label className="field">
        <span className="field__label">Number plate</span>
        <input value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase())} placeholder="e.g. LEB-4471" required />
      </label>

      <Select label="Vehicle type" value={type} onChange={setType} options={vehicleTypes} placeholder="Select a type" />

      <Button type="submit" disabled={!plate || !type}>Find a slot</Button>
    </form>
  );
}
