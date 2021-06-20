
import Dashboard from "views/Dashboard.js";
import Categories from "views/Categories.js";
import UserProfile from "views/UserProfile.js";
import Order from "views/Order";
 
const dashboardRoutes = [
  {
    path: "/welcome",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/capstone",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "nc-icon nc-chart-pie-35",
    component: Categories,
    layout: "/capstone",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/capstone",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-cart-simple",
    component: Order,
    layout: "/capstone",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: " nc-icon nc-settings-gear-64",
    component: Dashboard,
    layout: "/capstone",
  },
];


export default dashboardRoutes;
