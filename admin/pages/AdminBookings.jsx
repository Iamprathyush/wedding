import React from "react";
import AdminLayout from "../layouts/AdminLayout";

const Bookings = () => {
  return (
    <AdminLayout>
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-bold">
            Bookings
          </h1>

          <button className="bg-amber-500 text-white px-5 py-2 rounded-xl">
            Add Booking
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Prabhu</td>
              <td>Wedding</td>
              <td>Aug 12</td>
              <td>Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Bookings;