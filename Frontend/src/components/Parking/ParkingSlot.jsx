import React from "react";
export default function ParkingSlot({ slot, vehicle }) {
  return (
    <div className={`slot-tile slot-tile--${slot.status}`}>
      <span className="slot-tile__code mono">{slot.code}</span>
      <span className="slot-tile__type">{slot.type}</span>
      {vehicle && (   
        <span className="slot-tile__plate mono">{vehicle.numberPlate}</span>
      )}
    </div>
  );
}
