import React from "react";
import SearchInput from "../common/SearchInput";

export default function VehicleSearch({ value, onChange }) {
  return (
    <SearchInput value={value} onChange={onChange} placeholder="Search plate, type or slot" />
  );
}
