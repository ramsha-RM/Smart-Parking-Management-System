import React from "react";
const ITEMS = [
  { status: "available", label: "Available" },
  { status: "occupied", label: "Occupied" },
  { status: "reserved", label: "Reserved" },
];

export default function SlotStatus() {
  return (
    <div className="slot-legend">
      {ITEMS.map((item) => (
        <span key={item.status} className="slot-legend__item">
          <span className={`slot-legend__dot slot-legend__dot--${item.status}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
