import React from "react";
import Button from "../common/Button";
import EmptyState from "../common/EmptyState";
import { SearchX } from "lucide-react";
import { rates } from "../../data/mockData.js";
import { billedHours } from "../../utils/fee";

export default function FeeSummary({ vehicle, onComplete }) {
  if (vehicle === undefined) {
    return (
      <p className="exit-page__hint">Search a plate number to calculate its parking fee.</p>
    );
  }

  if (vehicle === null) {
    return (
      <EmptyState
        icon={SearchX}
        title="No matching vehicle"
        message="Check the plate number and try again."
      />
    );
  }

  const hours = billedHours(vehicle.entryTime);
  const rate = rates[vehicle.type];
  const fee = hours * rate;

  return (
    <div className="fee-summary">
      <div className="fee-summary__row">
        <span>Plate</span>
        <span className="mono">{vehicle.numberPlate}</span>
      </div>
      <div className="fee-summary__row">
        <span>Slot</span>
        <span className="mono">{vehicle.slotCode}</span>
      </div>
      <div className="fee-summary__row">
        <span>Entry time</span>
        <span>{new Date(vehicle.entryTime).toLocaleString([], { hour: "2-digit", minute: "2-digit", month: "short", day: "numeric" })}</span>
      </div>
      <div className="fee-summary__row">
        <span>Duration</span>
        <span className="mono">{hours}h billed</span>
      </div>
      <div className="fee-summary__row">
        <span>Rate</span>
        <span className="mono">${rate}/hr &middot; {vehicle.type}</span>
      </div>
      <div className="fee-summary__row fee-summary__row--total">
        <span>Total due</span>
        <span className="mono">${fee}</span>
      </div>
      <Button onClick={onComplete}>Complete exit</Button>
    </div>
  );
}
