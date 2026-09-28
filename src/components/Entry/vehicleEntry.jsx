import React, { useState } from "react";
import EntryForm from "./entryForm";
import SlotAssignment from "./SlotAssignment";
import useParkingStore from "../../Store/useParkingStore";
import "./entry.css";

export default function VehicleEntry() {
  const findSlotFor = useParkingStore((s) => s.findSlotFor);
  const parkVehicle = useParkingStore((s) => s.parkVehicle);

  const [pending, setPending] = useState(null);
  const [message, setMessage] = useState("");

  function handleCheck({ plate, type }) {
    setMessage("");
    setPending({ plate, type, slot: findSlotFor(plate, type) });
  }

  function handleConfirm() {
    const result = parkVehicle({ numberPlate: pending.plate, type: pending.type });
    setMessage(
      result.success
        ? `${result.vehicle.numberPlate} parked at slot ${result.vehicle.slotCode}`
        : result.message
    );
    setPending(null);
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
          {pending ? (
            <SlotAssignment slot={pending.slot} onConfirm={handleConfirm} />
          ) : (
            <p className="entry-page__hint">
              {message || "Enter a plate and vehicle type to find the nearest open slot."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
