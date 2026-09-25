import React from "react";
import Badge from "../common/Badge";
import EmptyState from "../common/EmptyState";
import { CalendarClock } from "lucide-react";

export default function BookingTable({ bookings }) {
  if (bookings.length === 0) {
    return (
      <EmptyState
        icon={CalendarClock}
        title="No bookings yet"
        message="Reservations made ahead of arrival will show up here."
      />
    );
  }

  return (
    <div className="panel booking-table">
      <table>
        <thead>
          <tr>
            <th>Plate</th>
            <th>Type</th>
            <th>Slot</th>
            <th>Scheduled for</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td className="mono">{b.numberPlate}</td>
              <td>{b.type}</td>
              <td className="mono">{b.slotCode}</td>
              <td>{new Date(b.scheduledFor).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
              <td><Badge status={b.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
