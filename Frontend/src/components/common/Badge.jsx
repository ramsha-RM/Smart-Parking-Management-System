import React from "react";
import "./common.css"
const STYLES = {
  available: { label: "Available", color: "var(--available)", bg: "var(--available-soft)" },
  occupied: { label: "Occupied", color: "var(--occupied)", bg: "var(--occupied-soft)" },
  reserved: { label: "Reserved", color: "var(--reserved)", bg: "var(--reserved-soft)" },
  parked: { label: "Parked", color: "var(--available)", bg: "var(--available-soft)" },
  exited: { label: "Exited", color: "var(--text-muted)", bg: "var(--panel-alt)" },
  upcoming: { label: "Upcoming", color: "var(--reserved)", bg: "var(--reserved-soft)" },
  completed: { label: "Completed", color: "var(--available)", bg: "var(--available-soft)" },
  cancelled: { label: "Cancelled", color: "var(--occupied)", bg: "var(--occupied-soft)" },
};

export default function Badge({ status, children }) {
  const style = STYLES[status] || { label: children, color: "var(--text-muted)", bg: "var(--panel-alt)" };
  return (
    <span
      className="badge"
      style={{ color: style.color, background: style.bg }}
    >
      {children || style.label}
    </span>
  );
}
