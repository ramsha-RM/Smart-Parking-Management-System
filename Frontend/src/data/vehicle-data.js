export const rates = {
  Car: 30,
  Motorcycle: 15,
  Truck: 50,
};

export const nav = [
  { name: "Home", path: "/" },
  { name: "Parking", path: "/parking" },
  { name: "Entry", path: "/entry" },
  { name: "Reports", path: "/reports" },
];

export const vehicleTypes = ["Car", "Motorcycle", "Truck"];

export const sidebarLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Parking", path: "/parking" },
  { name: "Vehicles", path: "/vehicles" },
  { name: "Entry", path: "/entry" },
  { name: "Exit", path: "/exit" },
  { name: "Bookings", path: "/bookings" },
  { name: "Reports", path: "/reports" },
];

export const vehicles = [
  { id: 1, numberPlate: "LEB-4471", type: "Car", slotCode: "A-03", entryTime: "2026-09-23T08:12:00", status: "parked" },
  { id: 2, numberPlate: "PNH-2210", type: "Motorcycle", slotCode: "B-01", entryTime: "2026-09-23T09:05:00", status: "parked" },
  { id: 3, numberPlate: "TRK-9081", type: "Truck", slotCode: "C-02", entryTime: "2026-09-23T07:40:00", status: "parked" },
  { id: 4, numberPlate: "KHR-0093", type: "Car", slotCode: "A-01", entryTime: "2026-09-23T10:20:00", status: "parked" },
  { id: 5, numberPlate: "ZLQ-5528", type: "Car", slotCode: "A-05", entryTime: "2026-09-22T18:02:00", exitTime: "2026-09-22T20:41:00", status: "exited", fee: 90 },
  { id: 6, numberPlate: "MTB-1147", type: "Motorcycle", slotCode: "B-02", entryTime: "2026-09-22T15:30:00", exitTime: "2026-09-22T16:10:00", status: "exited", fee: 15 },
];

export const parkingSlots = [
  { id: 1, code: "A-01", zone: "Car", type: "Car", status: "occupied", vehicleId: 4 },
  { id: 2, code: "A-02", zone: "Car", type: "Car", status: "available" },
  { id: 3, code: "A-03", zone: "Car", type: "Car", status: "occupied", vehicleId: 1 },
  { id: 4, code: "A-04", zone: "Car", type: "Car", status: "available" },
  { id: 5, code: "A-05", zone: "Car", type: "Car", status: "available" },
  { id: 6, code: "A-06", zone: "Car", type: "Car", status: "reserved" },
  { id: 7, code: "B-01", zone: "Motorcycle", type: "Motorcycle", status: "occupied", vehicleId: 2 },
  { id: 8, code: "B-02", zone: "Motorcycle", type: "Motorcycle", status: "available" },
  { id: 9, code: "B-03", zone: "Motorcycle", type: "Motorcycle", status: "available" },
  { id: 10, code: "B-04", zone: "Motorcycle", type: "Motorcycle", status: "reserved" },
  { id: 11, code: "C-01", zone: "Truck", type: "Truck", status: "available" },
  { id: 12, code: "C-02", zone: "Truck", type: "Truck", status: "occupied", vehicleId: 3 },
  { id: 13, code: "C-03", zone: "Truck", type: "Truck", status: "available" },
];

export const bookings = [
  { id: 1, numberPlate: "GHT-3302", type: "Car", scheduledFor: "2026-09-23T14:00:00", slotCode: "A-04", status: "upcoming" },
  { id: 2, numberPlate: "RQW-8814", type: "Truck", scheduledFor: "2026-09-23T16:30:00", slotCode: "C-01", status: "upcoming" },
  { id: 3, numberPlate: "DFV-2201", type: "Motorcycle", scheduledFor: "2026-09-22T09:00:00", slotCode: "B-02", status: "completed" },
  { id: 4, numberPlate: "LMP-6690", type: "Car", scheduledFor: "2026-09-22T11:00:00", slotCode: "A-02", status: "cancelled" },
];

export const revenueByDay = [
  { day: "Mon", amount: 640 },
  { day: "Tue", amount: 510 },
  { day: "Wed", amount: 720 },
  { day: "Thu", amount: 480 },
  { day: "Fri", amount: 890 },
  { day: "Sat", amount: 1120 },
  { day: "Sun", amount: 950 },
];

export const revenueSummary = {
  today: 480,
  week: 5310,
  month: 21460,
};
