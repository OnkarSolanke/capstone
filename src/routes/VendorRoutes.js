import { CardChecklist } from "react-bootstrap-icons";

import OrderList from "views/order/OrderList";
import ProductList from "views/products/ProductList";


const dashboardRoutes = [
  {
    path: "/register/vendor",
    name: "Products",
    icon: "nc-icon nc-bank",
    component: ProductList,
    layout: "/vendor",
  },{
    path: "/register/order",
    name: "Orders",
    icon: "nc-icon nc-bank",
    iconComp : CardChecklist,
    component: OrderList,
    layout: "/vendor",
  }
];


export default dashboardRoutes;
