import React from "react";

import useParkingStore from "../../Store/useParkingStore";
import { revenueByDay, revenueSummary } from "../../utils/revenue";

export default function RevenueCard() {
  const vehicles = useParkingStore((s) => s.vehicles);
  const days = revenueByDay(vehicles);
  const summary = revenueSummary(vehicles);
  const max = Math.max(1, ...days.map((d) => d.amount));

  return (
    <div className="panel revenue-card">
      <div className="revenue-card__head">
        <h3>Revenue this week</h3>
        <span className="mono revenue-card__total">${summary.week}</span>
      </div>
      <div className="revenue-card__bars">
        {days.map((d, i) => (
          <div className="revenue-card__col" key={i}>
            <div
              className="revenue-card__bar"
              style={{ height: `${(d.amount / max) * 100}%` }}
              title={`$${d.amount}`}
            />
            <span>{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
