import React from "react";

export default function StatCard({ label, value, sub, icon: Icon, tone = "default" }) {
  return (
    <div className={`stat-card stat-card--${tone}`}>
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        {Icon && <Icon size={16} />}
      </div>
      <div className="stat-card__value mono">{value}</div>
      {sub && <div className="stat-card__sub">{sub}</div>}
    </div>
  );
}
