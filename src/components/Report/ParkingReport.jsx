import React from "react";
import { vehicleTypes } from "../../data/mockData.js";
import useParkingStore from "../../Store/useParkingStore";

export default function ParkingReport() {
  const parkingSlots = useParkingStore((s) => s.slots);

  return (
    <div className="parking-report">
      <div className="report-card">
        {vehicleTypes.map((type) => {
          const slots = parkingSlots.filter((slot) => slot.type === type);
          const occupied = slots.filter((slot) => slot.status === "occupied");
          const available = slots.filter((slot) => slot.status === "available");

          return (
            <div key={type} className="report-card__section">
              <h3>{type}</h3>
              <p>Occupied: {occupied.length}</p>
              <p>Available: {available.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
