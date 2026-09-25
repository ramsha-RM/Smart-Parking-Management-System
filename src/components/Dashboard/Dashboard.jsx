import React from "react";

import { SquareParking, Car, DollarSign, Gauge } from "lucide-react";
import StatCard from "./StateCard";
import ParkingOverview from "./ParkingOverview";
import RevenueCard from "./RevenueCar";
import RecentVehicles from "./RecentVehicle";
import { parkingSlots, vehicles, revenueSummary } from "../../data/vehicle-data.js";
import "./dashboard.css";

export default function Dashboard() {
  const total = parkingSlots.length;
  const available = parkingSlots.filter((s) => s.status === "available").length;
  const occupied = parkingSlots.filter((s) => s.status === "occupied").length;
  const parkedNow = vehicles.filter((v) => v.status === "parked").length;

  return (
    <div className="dashboard">
      <div className="page-head">
        <div>
          <h1>Facility overview</h1>
          <p>Wednesday, September 23 &middot; Downtown facility</p>
        </div>
      </div>

      <div className="grid-cols dashboard__stats">
        <StatCard label="Total slots" value={total} icon={SquareParking} />
        <StatCard label="Available now" value={available} sub={`${occupied} occupied`} icon={Gauge} tone="available" />
        <StatCard label="Vehicles parked" value={parkedNow} icon={Car} />
        <StatCard label="Revenue today" value={`$${revenueSummary.today}`} icon={DollarSign} tone="accent" />
      </div>

      <div className="dashboard__grid">
        <RevenueCard />
        <ParkingOverview />
      </div>

      <RecentVehicles />
    </div>
  );
}
