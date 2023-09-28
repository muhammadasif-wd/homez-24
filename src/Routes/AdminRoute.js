import AdminDashboardAccount from "../Components/AdminDashboard/AdminDashboardAccount/AdminDashboardAccount";
import EditAccount from "../Components/AdminDashboard/AdminDashboardAccount/EditAccount/EditAccount";
import AdminDashboardAddPackages from "../Components/AdminDashboard/AdminDashboardAddPackages/AdminDashboardAddPackages";
import AdminDashboardEditPackages from "../Components/AdminDashboard/AdminDashboardEditPackages/AdminDashboardEditPackages";
import AdminDashboardFrontend from "../Components/AdminDashboard/AdminDashboardFrontend/AdminDashboardFrontend";
import AdminDashboardPackages from "../Components/AdminDashboard/AdminDashboardPackages/AdminDashboardPackages";
import AdminDashboardProperties from "../Components/AdminDashboard/AdminDashboardProperties/AdminDashboardProperties";

const adminRoutes = [
  { path: "properties", Component: AdminDashboardProperties },
  { path: "frontend-edit", Component: AdminDashboardFrontend },
  { path: "accounts", Component: AdminDashboardAccount },
  { path: "edit-account/:id", Component: EditAccount },
  { path: "packages", Component: AdminDashboardPackages },
  { path: "add-packages", Component: AdminDashboardAddPackages },
  { path: "edit-package/:id", Component: AdminDashboardEditPackages },
];
export default adminRoutes;
