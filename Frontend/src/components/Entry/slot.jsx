import React from "react";

import { SquareParking, TriangleAlert } from "lucide-react";
import EmptyState from "../common/EmptyState";
import Button from "../common/Button";

export default function Slot({ slot, onConfirm }) {
  if (!slot) {
    return (
      <EmptyState
        icon={TriangleAlert}
        title="No slot available"
        message="Every slot for this vehicle type is currently full. Try again once a spot opens up."
      />
    );
  }

  return (
    <div className="slot-assignment">
      <div className="slot-assignment__icon">
        <SquareParking size={20} />
      </div>
      <div className="slot-assignment__info">
        <span className="slot-assignment__label">Nearest available slot</span>
        <span className="slot-assignment__code mono">{slot.code}</span>
        <span className="slot-assignment__zone">Zone {slot.zone} &middot; {slot.type}</span>
      </div>
      <Button onClick={onConfirm}>Assign slot</Button>
    </div>
  );
}
