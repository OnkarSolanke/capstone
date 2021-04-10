/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "../views/welcome/index.js";
import Add_Edit   from "views/vendor/Add_Edit";

const dashboardRoutes = [
  {
    path: "/register/vendor",
    name: "Vendor Register",
    icon: "nc-icon nc-bank",
    component: Add_Edit,
    layout: "/welcome",
  },{
    path: "/",
    name: "Index",
    icon: "nc-icon nc-bank",
    component: Index,
    layout: "/welcome",
  },
];


export default dashboardRoutes;
