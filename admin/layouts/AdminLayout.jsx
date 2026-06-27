import React from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;