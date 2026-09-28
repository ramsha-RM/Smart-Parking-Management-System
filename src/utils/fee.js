import { rates } from "../data/mockData";

export function billedHours(entryTime, at = new Date()) {
  return Math.max(1, Math.ceil((at - new Date(entryTime)) / 3600000));
}

export function calculateFee(type, entryTime, at = new Date()) {
  return billedHours(entryTime, at) * rates[type];
}
