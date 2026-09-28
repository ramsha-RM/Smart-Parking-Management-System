import React, { useState } from "react";
import SlotStatus from "./SlotStatus";
import SlotGrid from "./SlotGrid.jsx";
import Select from "../common/Select";
import { vehicleTypes } from "../../data/mockData.js";
import useParkingStore from "../../Store/useParkingStore";
import "./parking.css";

export default function ParkingSlots() {
  const slots = useParkingStore((s) => s.slots);
  const [typeFilter, setTypeFilter] = useState("");

  const visible = typeFilter
    ? slots.filter((s) => s.type === typeFilter)
    : slots;

  const available = visible.filter((s) => s.status === "available").length;

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Parking map</h1>
          <p>{available} of {visible.length} slots free right now</p>
        </div>
        <div className="parking-page__controls">
          <Select
            value={typeFilter}
            onChange={setTypeFilter}
            options={vehicleTypes}
            placeholder="All vehicle types"
          />
          <SlotStatus />
        </div>
      </div>

      <SlotGrid slots={visible} />
    </div>
  );
}