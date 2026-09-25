import React from "react";
import "./common.css"
export default function Loading({ label = "Loading" }) {
  return (
    <div className="loading">
      <span className="loading__dot" />
      <span className="loading__dot" />
      <span className="loading__dot" />
      <span className="loading__label">{label}</span>
    </div>
  );
}
