import React from "react";
import AdminDashboardSummary from "./AdminDashboardSummary/AdminDashboardSummary";
import AdminDashboardSummaryChart from "./AdminDashboardSummary/AdminDashboardSummaryChart";
import RecentPost from "./AdminDashboardSummary/RecentPost/RecentPost";

const AdminDashboardIndex = () => {
  return (
    <div className="p-5">
      <AdminDashboardSummary />
      <AdminDashboardSummaryChart />
      <RecentPost />
    </div>
  );
};

export default AdminDashboardIndex;
