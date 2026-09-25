import React, { useState } from "react";
import ExitForm from "./ExitForm";
import FeeSummary from "./Fee";
import { vehicles } from "../../data/vehicle-data.js";
import "./exit.css";

export default function VehicleExit() {
  const [found, setFound] = useState(undefined);

  function handleFind(plate) {
    const match = vehicles.find(
      (v) => v.status === "parked" && v.numberPlate.toLowerCase() === plate.toLowerCase()
    );
    setFound(match || null);
  }

  return (
    <div className="exit-page">
      <div className="page-head">
        <div>
          <h1>Vehicle exit</h1>
          <p>Look up a parked vehicle to close out its session</p>
        </div>
      </div>

      <div className="exit-page__grid">
        <div className="panel exit-page__form">
          <h3>Find vehicle</h3>
          <ExitForm onFind={handleFind} />
        </div>

        <div className="panel exit-page__result">
          <h3>Fee summary</h3>
          <FeeSummary vehicle={found} onComplete={() => setFound(undefined)} />
        </div>
      </div>
    </div>
  );
}
