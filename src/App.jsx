import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import ParkingSlots from "./components/Parking/ParkingSlots";
import Vehicles from "./components/Vehicles/Vehicles";
import VehicleEntry from "./components/Entry/vehicleEntry";
import VehicleExit from "./components/Exit/VehicleExit";
import Bookings from "./components/Bookings/Booking";
import Reports from "./components/Report/Report";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onToggleSidebar={() => setSidebarOpen((o) => !o)} />
      <div className="app-shell">
        <Sidebar open={sidebarOpen} />
        <main className="page-content" onClick={() => setSidebarOpen(false)}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/parking" element={<ParkingSlots />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/entry" element={<VehicleEntry />} />
            <Route path="/exit" element={<VehicleExit />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
