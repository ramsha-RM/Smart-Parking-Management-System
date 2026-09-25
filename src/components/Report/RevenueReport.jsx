import React from "react";
import { revenueByDay, revenueSummary } from "../../data/vehicle-data.js";

export default function RevenueReport() {
  const max = Math.max(...revenueByDay.map((d) => d.amount));

  return (
    <div className="panel report-card">
      <h3>Revenue breakdown</h3>
      <div className="report-card__summary">
        <div>
          <span>Today</span>
          <strong className="mono">${revenueSummary.today}</strong>
        </div>
        <div>
          <span>This week</span>
          <strong className="mono">${revenueSummary.week}</strong>
        </div>
        <div>
          <span>This month</span>
          <strong className="mono">${revenueSummary.month}</strong>
        </div>
      </div>
      <div className="report-card__bars">
        {revenueByDay.map((d) => (
          <div className="report-card__col" key={d.day}>
            <span className="mono">${d.amount}</span>
            <div
              className="report-card__bar"
              style={{ height: `${(d.amount / max) * 100}%` }}
            />
            <span>{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
