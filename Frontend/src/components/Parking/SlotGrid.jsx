import React from "react";
import ParkingSlot from "./ParkingSlot";
import { vehicles } from "../../data/vehicle-data.js";

export default function SlotGrid({ slots }) {
  const zone = [...new Set(slots.map((s) => s.zone))];

  return (
    <div className="slot-grid">
      {zone.map((z) => (
        <div key={z} className="slot-grid__zone">
          <h2 className="slot-grid__zone-title">{z}</h2>
          <div className="slot-grid__zone-slots">
            {slots
              .filter((s) => s.zone === z)
              .map((s) => {
                const vehicle = vehicles.find((v) => v.id === s.vehicleId);
                return <ParkingSlot key={s.id} slot={s} vehicle={vehicle} />;
              })}
          </div>
        </div>
      ))}
    </div>
  );
}