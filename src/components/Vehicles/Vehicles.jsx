import React, { useState } from "react";
import { Plus } from "lucide-react";
import VehicleSearch from "./VehicleSearch";
import VehicleTable from "./VehicleTable";
import VehicleForm from "./VehicleForm";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { vehicles } from "../../data/vehicle-data.js";
import "./vehicle.css";

export default function Vehicles() {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = vehicles.filter((v) =>
    [v.numberPlate, v.type, v.slotCode].join(" ").toLowerCase().includes(query.toLowerCase())
  );

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
        <Modal title="Register a vehicle" onClose={() => setShowForm(false)}>
          <VehicleForm onSubmit={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}
