import React from "react";
import {
  LayoutDashboard,
  Calendar,
  Image,
  Settings,
  Wallet,
  Users,
  PhoneCall,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Bookings", icon: BookOpen, path: "/admin/bookings" },
    { name: "Calendar", icon: Calendar, path: "/admin/calendar" },
    { name: "Customers", icon: Users, path: "/admin/customers" },
    { name: "Payments", icon: Wallet, path: "/admin/payments" },
    { name: "Gallery", icon: Image, path: "/admin/gallery" },
    { name: "Enquiries", icon: PhoneCall, path: "/admin/enquiries" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <aside className="w-72 bg-white border-r">
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          Shanmuga Mahal
        </h2>
      </div>

      {menus.map((menu) => (
        <Link
          key={menu.name}
          to={menu.path}
          className="flex items-center gap-3 px-6 py-4 hover:bg-amber-50"
        >
          <menu.icon size={18} />
          {menu.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;