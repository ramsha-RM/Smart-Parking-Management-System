import React from "react";
import Badge from "../common/Badge";
import EmptyState from "../common/EmptyState";
import { Car } from "lucide-react";

function duration(entry, exit) {
  const end = exit ? new Date(exit) : new Date();
  const ms = end - new Date(entry);
  const hrs = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  return `${hrs}h ${mins}m`;
}

export default function VehicleTable({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <EmptyState
        icon={Car}
        title="No vehicles match"
        message="Try a different plate number or clear the search."
      />
    );
  }

  return (
    <div className="panel vehicle-table">
      <table>
        <thead>
          <tr>
            <th>Plate</th>
            <th>Type</th>
            <th>Slot</th>
            <th>Entry time</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td className="mono">{v.numberPlate}</td>
              <td>{v.type}</td>
              <td className="mono">{v.slotCode}</td>
              <td>{new Date(v.entryTime).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
              <td className="mono">{duration(v.entryTime, v.exitTime)}</td>
              <td><Badge status={v.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
