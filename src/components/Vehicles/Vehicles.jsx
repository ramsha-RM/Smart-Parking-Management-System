import React, { useState } from "react";
import { Plus } from "lucide-react";
import VehicleSearch from "./VehicleSearch";
import VehicleTable from "./VehicleTable";
import VehicleForm from "./VehicleForm";
import Button from "../common/Button";
import Modal from "../common/Modal";
import useParkingStore from "../../Store/useParkingStore";
import "./vehicle.css";

export default function Vehicles() {
  const vehicles = useParkingStore((s) => s.vehicles);
  const parkVehicle = useParkingStore((s) => s.parkVehicle);

  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const filtered = vehicles.filter((v) =>
    [v.numberPlate, v.type, v.slotCode, v.status].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  const handleRegister = ({ plate, type }) => {
    const result = parkVehicle({ numberPlate: plate, type });
    if (!result.success) {
      setError(result.message);
      return;
    }
    setError("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Vehicles</h1>
          <p>{vehicles.length} vehicles on record</p>
        </div>
        <Button icon={Plus} onClick={() => setShowForm(true)}>Register vehicle</Button>
      </div>

      <div className="vehicles__search">
        <VehicleSearch value={query} onChange={setQuery} />
      </div>

      <VehicleTable vehicles={filtered} />

      {showForm && (
        <Modal title="Register a vehicle" onClose={() => { setShowForm(false); setError(""); }}>
          <VehicleForm onSubmit={handleRegister} />
          {error && <p className="form-error">{error}</p>}
        </Modal>
      )}
    </div>
  );
}