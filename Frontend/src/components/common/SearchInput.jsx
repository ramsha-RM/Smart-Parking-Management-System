import React from "react";
import "./common.css"
import { Search } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder = "Search by plate number" }) {
  return (
    <div className="search-input">
      <Search size={15} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
