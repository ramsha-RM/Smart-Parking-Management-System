import React, { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import BookingTable from "./Bookingtable";
import BookingForm from "./BookingForm";
import useParkingStore from "../../Store/useParkingStore";
import "./booking.css";

export default function Bookings() {
  const bookings = useParkingStore((s) => s.bookings);
  const addBooking = useParkingStore((s) => s.addBooking);
  const cancelBooking = useParkingStore((s) => s.cancelBooking);

  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const visible = bookings.filter((b) => b.status !== "cancelled");
  const upcoming = visible.filter((b) => b.status === "upcoming").length;

  const handleSubmit = ({ plate, type, when }) => {
    const result = addBooking({ numberPlate: plate, type, scheduledFor: when });
    if (!result.success) {
      setError(result.message);
      return;
    }
    setError("");
    setShowForm(false);
  };

  const handleClose = () => {
    setShowForm(false);
    setError("");
  };

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Bookings</h1>
          <p>{upcoming} reservations scheduled ahead of arrival</p>
        </div>
        <Button icon={Plus} onClick={() => setShowForm(true)}>New booking</Button>
      </div>

      <BookingTable bookings={visible} onCancel={cancelBooking} />

      {showForm && (
        <Modal title="Reserve a slot" onClose={handleClose}>
          <BookingForm onSubmit={handleSubmit} />
          {error && <p className="form-error">{error}</p>}
        </Modal>
      )}
    </div>
  );
}