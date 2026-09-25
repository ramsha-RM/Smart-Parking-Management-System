import React, { useState } from "react";
import SlotStatus from "./SlotStatus";
import SlotGrid from "./SlotGrid.jsx";
import Select from "../common/Select";
import { parkingSlots, vehicleTypes } from "../../data/vehicle-data.js";
import "./parking.css";

export default function ParkingSlots() {
  const [typeFilter, setTypeFilter] = useState("");

  const visible = typeFilter
    ? parkingSlots.filter((s) => s.type === typeFilter)
    : parkingSlots;

  const available = visible.filter((s) => s.status === "available").length;

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Parking map</h1>
          <p>{available} of {parkingSlots.length} slots free right now</p>
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
