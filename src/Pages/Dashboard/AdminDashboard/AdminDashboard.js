import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardSidebar from "../../../Components/AdminDashboard/AdminDashboardSidebar/AdminDashboardSidebar";

const AdminDashboard = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 py-10">
      <div className="lg:col-span-3 md:col-span-4">
        <AdminDashboardSidebar />
      </div>
      <div className="lg:col-span-9 md:col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
