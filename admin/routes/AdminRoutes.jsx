import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/AdminDashboard";
import Bookings from "../pages/AdminBookings";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/bookings" element={<Bookings />} />
    </Routes>
  );
}