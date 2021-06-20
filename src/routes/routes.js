
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import VendorList from "views/vendor/VendorList";
import Underdevlopment from 'views/Underdevlopment';
import WorkerList from "views/worker/WorkerList";
import ProductList from "views/products/ProductList";
import UnitList from "views/unit/UnitList";
import OrderList from "views/order/OrderList";


const dashboardRoutes = [
  {
    path: "/underdevlopment",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Underdevlopment,
    layout: "/admin",
  },{
    path: "/vendor/list",
    name: "Vendor List ",
    icon: "nc-icon nc-notes",
    component: VendorList,
    layout: "/admin",
  },{
    path: "/worker/list",
    name: "Worker List ",
    icon: "nc-icon nc-notes",
    component: WorkerList,
    layout: "/admin",
  },{
    path: "/register/vendor",
    name: "Products",
    icon: "nc-icon nc-bank",
    component: ProductList,
    layout: "/admin",
  },{
    path: "/register/units",
    name: "Units",
    icon: "nc-icon nc-bank",
    component: UnitList,
    layout: "/admin",
  },{
    path: "/register/order",
    name: "Orders",
    icon: "nc-icon nc-bank",
    component: OrderList,
    layout: "/admin",
  }
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
