import { Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./Routes/PublicRoutes";
// import Swiper styles
import "swiper/css";
// import styles bundle
import "swiper/css/bundle";
import MainFooter from "./Components/MainFooter/MainFooter";
import AgentDashboard from "./Pages/Dashboard/AgentDashboard/AgentDashboard";
import agentRoute from "./Routes/AgentRoute";
import AgentDashboardIndex from "./Components/AgentDashboard/AgentDashboardIndex";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminDashboardIndex from "./Components/AdminDashboard/AdminDashboardIndex";
import adminRoutes from "./Routes/AdminRoute";

function App() {
  return (
    <div>
      <div className="w-[95vw] md:max-w-[1440px] mx-auto">
        <Navbar />
        <div>
          <Routes>
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}

            {/* -----------------------agent dashboard------------------------------- */}
            <Route path="/agent-dashboard" element={<AgentDashboard />}>
              <Route index element={<AgentDashboardIndex />}></Route>
              {agentRoute.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))}
            </Route>
            {/* -----------------------Admin dashboard------------------------------- */}
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<AdminDashboardIndex />}></Route>
              {adminRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))}
            </Route>
          </Routes>
        </div>
      </div>
      {/* react hot toast init */}
      <Toaster />
      <MainFooter />
    </div>
  );
}

export default App;
