import React from "react";
import RevenueReport from "./RevenueReport";
import ParkingReport from "./ParkingReport";
import "./report.css";

export default function Reports() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Reports</h1>
          <p>Revenue and utilization across the facility</p>
        </div>
      </div>

      <div className="reports__grid">
        <RevenueReport />
        <ParkingReport />
      </div>
    </div>
  );
}
