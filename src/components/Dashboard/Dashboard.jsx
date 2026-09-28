import React from "react";
import { SquareParking, Car, DollarSign, Gauge } from "lucide-react";
import StatCard from "./StateCard";
import ParkingOverview from "./ParkingOverview";
import RevenueCard from "./RevenueCar";
import RecentVehicles from "./RecentVehicle";
import useParkingStore from "../../Store/useParkingStore";
import { revenueSummary } from "../../utils/revenue";
import "../common/common.css"
import "./dashboard.css";

export default function Dashboard() {
  const slots = useParkingStore((s) => s.slots);
  const vehicles = useParkingStore((s) => s.vehicles);

  const total = slots.length;
  const available = slots.filter((s) => s.status === "available").length;
  const occupied = slots.filter((s) => s.status === "occupied").length;
  const parkedNow = vehicles.filter((v) => v.status === "parked").length;
  const revenue = revenueSummary(vehicles);

  const dateText = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dashboard">
      <div className="page-head">
        <div>
          <h1>Facility overview</h1>
          <p>{dateText} &middot; Downtown facility</p>
        </div>
      </div>

      <div className="grid-cols dashboard__stats">
        <StatCard label="Total slots" value={total} icon={SquareParking} />
        <StatCard label="Available now" value={available} sub={`${occupied} occupied`} icon={Gauge} tone="available" />
        <StatCard label="Vehicles parked" value={parkedNow} icon={Car} />
        <StatCard label="Total revenue" value={`$${revenue.total}`} sub={`$${revenue.today} today`} icon={DollarSign} tone="accent" />
      </div>

      <div className="dashboard__grid">
        <RevenueCard />
        <ParkingOverview />
      </div>

      <RecentVehicles />
    </div>
  );
}
