import React from "react";

import { parkingSlots } from "../../data/vehicle-data.js";

export default function ParkingOverview() {
  const zones = ["A", "B", "C"];

  return (
    <div className="panel overview">
      <h3>Zone occupancy</h3>
      <div className="overview__list">
        {zones.map((zone) => {
          const slots = parkingSlots.filter((s) => s.code.startsWith(zone));
          const occupied = slots.filter((s) => s.status !== "available").length;
          const pct = slots.length > 0 ? Math.round((occupied / slots.length) * 100) : 0;
          return (
            <div className="overview__row" key={zone}>
              <span className="overview__zone">Zone {zone}</span>
              <div className="overview__bar">
                <div className="overview__fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="overview__count mono">
                {occupied}/{slots.length}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
