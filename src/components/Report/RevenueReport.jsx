import React from "react";
import useParkingStore from "../../Store/useParkingStore";
import { revenueByDay, revenueSummary } from "../../utils/revenue";

export default function RevenueReport() {
  const vehicles = useParkingStore((s) => s.vehicles);
  const days = revenueByDay(vehicles);
  const summary = revenueSummary(vehicles);
  const max = Math.max(1, ...days.map((d) => d.amount));

  return (
    <div className="panel report-card">
      <h3>Revenue breakdown</h3>
      <div className="report-card__summary">
        <div>
          <span>Today</span>
          <strong className="mono">${summary.today}</strong>
        </div>
        <div>
          <span>This week</span>
          <strong className="mono">${summary.week}</strong>
        </div>
        <div>
          <span>This month</span>
          <strong className="mono">${summary.month}</strong>
        </div>
        <div>
          <span>All time</span>
          <strong className="mono">${summary.total}</strong>
        </div>
      </div>
      <div className="report-card__bars">
        {days.map((d, i) => (
          <div className="report-card__col" key={i}>
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
