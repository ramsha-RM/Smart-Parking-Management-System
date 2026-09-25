import React, { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import BookingTable from "./Bookingtable";
import BookingForm from "./BookingForm";
import { bookings } from "../../data/vehicle-data.js";
import "./booking.css";

export default function Bookings() {
  const [showForm, setShowForm] = useState(false);
  const upcoming = bookings.filter((b) => b.status === "upcoming").length;

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Bookings</h1>
          <p>{upcoming} reservations scheduled ahead of arrival</p>
        </div>
        <Button icon={Plus} onClick={() => setShowForm(true)}>New booking</Button>
      </div>

      <BookingTable bookings={bookings} />

      {showForm && (
        <Modal title="Reserve a slot" onClose={() => setShowForm(false)}>
          <BookingForm onSubmit={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}
