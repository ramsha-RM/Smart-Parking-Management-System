import React, { useState } from "react";
import EntryForm from "./entryForm";
import SlotAssignment from "./SlotAssignment";
import { parkingSlots } from "../../data/vehicle-data.js";
import "./entry.css";

export default function VehicleEntry() {
  const [checked, setChecked] = useState(false);
  const [match, setMatch] = useState(null);

  function handleCheck({ type }) {
    const slot = parkingSlots.find((s) => s.type === type && s.status === "available");
    setMatch(slot || null);
    setChecked(true);
  }

  return (
    <div className="entry-page">
      <div className="page-head">
        <div>
          <h1>Vehicle entry</h1>
          <p>Assign an incoming vehicle to the nearest open slot</p>
        </div>
      </div>

      <div className="entry-page__grid">
        <div className="panel entry-page__form">
          <h3>Vehicle details</h3>
          <EntryForm onCheck={handleCheck} />
        </div>

        <div className="panel entry-page__result">
          <h3>Slot assignment</h3>
          {checked ? (
            <SlotAssignment slot={match} onConfirm={() => setChecked(false)} />
          ) : (
            <p className="entry-page__hint">Enter a plate and vehicle type to find the nearest open slot.</p>
          )}
        </div>
      </div>
    </div>
  );
}
