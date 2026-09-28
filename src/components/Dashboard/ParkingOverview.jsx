import React from "react";

import useParkingStore from "../../Store/useParkingStore";

export default function ParkingOverview() {
  const allSlots = useParkingStore((s) => s.slots);
  const zones = [...new Set(allSlots.map((s) => s.zone))];

  return (
    <div className="panel overview">
      <h3>Zone occupancy</h3>
      <div className="overview__list">
        {zones.map((zone) => {
          const slots = allSlots.filter((s) => s.zone === zone);
          const occupied = slots.filter((s) => s.status !== "available").length;
          const pct = Math.round((occupied / slots.length) * 100);
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
