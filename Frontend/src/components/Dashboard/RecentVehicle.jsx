import React from "react";

import Badge from "../common/Badge";
import { vehicles } from "../../data/vehicle-data.js";

export default function RecentVehicles() {
  const recent = [...vehicles]
    .sort((a, b) => new Date(b.entryTime) - new Date(a.entryTime))
    .slice(0, 5);

  return (
    <div className="panel recent-vehicles">
      <h3>Recent activity</h3>
      <table>
        <thead>
          <tr>
            <th>Plate</th>
            <th>Slot</th>
            <th>Entry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recent.map((v) => (
            <tr key={v.id}>
              <td className="mono">{v.numberPlate}</td>
              <td className="mono">{v.slotCode}</td>
              <td>{new Date(v.entryTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
              <td><Badge status={v.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
