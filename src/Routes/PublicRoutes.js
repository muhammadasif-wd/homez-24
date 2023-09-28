import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import PropertyDetails from "../Components/Property/AllProperty/PropertyDetails/PropertyDetails";
import Property from "../Components/Property/Property";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist/Wishlist";

const PublicRoutes = [
  { path: "/", Component: Home },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/property", Component: Property },
  { path: "/login", Component: Login },
  { path: "/property/:id", Component: PropertyDetails },
  { path: "/favorite", Component: Wishlist },
];

export default PublicRoutes;
