import { create } from "zustand";
import { persist } from "zustand/middleware";
import { vehicles, parkingSlots, bookings } from "../data/mockData";
import { calculateFee } from "../utils/fee";

const normalize = (plate) => plate.trim().toUpperCase();

const freeSlot = (s) => ({ id: s.id, code: s.code, zone: s.zone, type: s.type, status: "available" });

const useParkingStore = create(
  persist(
    (set, get) => ({
    vehicles,
    slots: parkingSlots,
    bookings,

    findNearestSlot: (type) => {
      const available = get().slots.filter((s) => s.type === type && s.status === "available");
      return [...available].sort((a, b) => a.id - b.id)[0] || null;
    },

    findSlotFor: (numberPlate, type) => {
      const plate = normalize(numberPlate);
      const booking = get().bookings.find(
        (b) => b.status === "upcoming" && b.numberPlate === plate && b.type === type
      );
      if (booking) {
        const reserved = get().slots.find((s) => s.code === booking.slotCode && s.status === "reserved");
        if (reserved) return reserved;
      }
      return get().findNearestSlot(type);
    },

    parkVehicle: ({ numberPlate, type }) => {
      const plate = normalize(numberPlate);

      const alreadyParked = get().vehicles.some((v) => v.numberPlate === plate && v.status === "parked");
      if (alreadyParked) return { success: false, message: "Vehicle already parked" };

      const slot = get().findSlotFor(plate, type);
      if (!slot) return { success: false, message: "No Slot Available" };

      const newVehicle = {
        id: Date.now(),
        numberPlate: plate,
        type,
        slotCode: slot.code,
        entryTime: new Date().toISOString(),
        status: "parked",
      };

      set((state) => ({
        vehicles: [...state.vehicles, newVehicle],
        slots: state.slots.map((s) =>
          s.id === slot.id ? { ...s, status: "occupied", vehicleId: newVehicle.id } : s
        ),
        bookings: state.bookings.map((b) =>
          b.status === "upcoming" && b.numberPlate === plate && b.slotCode === slot.code
            ? { ...b, status: "completed" }
            : b
        ),
      }));

      return { success: true, vehicle: newVehicle };
    },

    exitVehicle: (vehicleId) => {
      const vehicle = get().vehicles.find((v) => v.id === vehicleId);
      if (!vehicle) return { success: false, message: "Vehicle not found" };

      const exitTime = new Date();
      const fee = calculateFee(vehicle.type, vehicle.entryTime, exitTime);

      set((state) => ({
        vehicles: state.vehicles.map((v) =>
          v.id === vehicleId ? { ...v, status: "exited", exitTime: exitTime.toISOString(), fee } : v
        ),
        slots: state.slots.map((s) => (s.vehicleId === vehicleId ? freeSlot(s) : s)),
      }));

      return { success: true, fee };
    },

    addBooking: ({ numberPlate, type, scheduledFor }) => {
      const plate = normalize(numberPlate);

      const duplicate = get().bookings.some(
        (b) => b.status === "upcoming" && b.numberPlate === plate
      );
      if (duplicate) return { success: false, message: "This vehicle already has an upcoming booking" };

      const slot = get().findNearestSlot(type);
      if (!slot) return { success: false, message: "No Slot Available" };

      const booking = {
        id: Date.now(),
        numberPlate: plate,
        type,
        scheduledFor: new Date(scheduledFor).toISOString(),
        slotCode: slot.code,
        status: "upcoming",
      };

      set((state) => ({
        bookings: [...state.bookings, booking],
        slots: state.slots.map((s) => (s.id === slot.id ? { ...s, status: "reserved" } : s)),
      }));

      return { success: true, booking };
    },

    cancelBooking: (bookingId) => {
      const booking = get().bookings.find((b) => b.id === bookingId);
      if (!booking) return { success: false, message: "Booking not found" };
      if (booking.status !== "upcoming") return { success: false, message: "Only upcoming bookings can be cancelled" };

      set((state) => ({
        bookings: state.bookings.map((b) => (b.id === bookingId ? { ...b, status: "cancelled" } : b)),
        slots: state.slots.map((s) =>
          s.code === booking.slotCode && s.status === "reserved" ? freeSlot(s) : s
        ),
      }));

      return { success: true };
    },
    }),
    {
      name: "parking-store",
      version: 1,
      partialize: (state) => ({
        vehicles: state.vehicles,
        slots: state.slots,
        bookings: state.bookings,
      }),
    }
  )
);

export default useParkingStore;