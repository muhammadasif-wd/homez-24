import AddProperty from "../Components/AgentDashboard/AddProperty/AddProperty";
import EditAgent from "../Components/AgentDashboard/EditAgent/EditAgent";
import ManageProperty from "../Components/AgentDashboard/ManageProperty/ManageProperty";
import ViewAgent from "../Components/AgentDashboard/ViewAgent/ViewAgent";
import Wishlist from "../Components/AgentDashboard/Wishlist/Wishlist";

const agentRoute = [
  { path: "edit-agent", Component: EditAgent },
  { path: "view-agent", Component: ViewAgent },
  { path: "add-property", Component: AddProperty },
  { path: "manage-property", Component: ManageProperty },
  { path: "wishlist", Component: Wishlist },
];
export default agentRoute;
