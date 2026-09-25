import React from "react";

import { revenueByDay, revenueSummary } from "../../data/vehicle-data.js";

export default function RevenueCard() {
  const max = Math.max(...revenueByDay.map((d) => d.amount));

  return (
    <div className="panel revenue-card">
      <div className="revenue-card__head">
        <h3>Revenue this week</h3>
        <span className="mono revenue-card__total">${revenueSummary.week}</span>
      </div>
      <div className="revenue-card__bars">
        {revenueByDay.map((d) => (
          <div className="revenue-card__col" key={d.day}>
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

