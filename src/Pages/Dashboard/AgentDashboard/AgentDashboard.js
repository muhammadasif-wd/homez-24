import React from "react";
import { Link, Outlet } from "react-router-dom";
import AgentDashboardSidebar from "../../../Components/AgentDashboard/AgentDashboardSidebar/AgentDashboardSidebar";

const AgentDashboard = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 py-10">
      <div className="lg:col-span-3 md:col-span-4">
        <AgentDashboardSidebar />
      </div>
      <div className="lg:col-span-9 md:col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AgentDashboard;
