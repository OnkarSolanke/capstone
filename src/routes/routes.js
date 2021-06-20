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
  }];

export default dashboardRoutes;
