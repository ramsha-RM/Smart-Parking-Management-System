const sameDay = (a, b) => a.toDateString() === b.toDateString();

const exitedVehicles = (vehicles) => vehicles.filter((v) => v.status === "exited" && v.exitTime);

export function revenueSummary(vehicles, now = new Date()) {
  const weekStart = new Date(now);
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - 6);

  const totals = { today: 0, week: 0, month: 0, total: 0 };

  exitedVehicles(vehicles).forEach((v) => {
    const fee = v.fee || 0;
    const exitedAt = new Date(v.exitTime);
    totals.total += fee;
    if (sameDay(exitedAt, now)) totals.today += fee;
    if (exitedAt >= weekStart && exitedAt <= now) totals.week += fee;
    if (exitedAt.getMonth() === now.getMonth() && exitedAt.getFullYear() === now.getFullYear()) {
      totals.month += fee;
    }
  });

  return totals;
}

export function revenueByDay(vehicles, now = new Date()) {
  const exited = exitedVehicles(vehicles);

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(now);
    day.setDate(now.getDate() - (6 - i));
    const amount = exited
      .filter((v) => sameDay(new Date(v.exitTime), day))
      .reduce((sum, v) => sum + (v.fee || 0), 0);
    return { day: day.toLocaleDateString("en-US", { weekday: "short" }), amount };
  });
}
