import ProductList from "views/products/ProductList";


const dashboardRoutes = [
  {
    path: "/register/vendor",
    name: "Products",
    icon: "nc-icon nc-bank",
    component: ProductList,
    layout: "/vendor",
  }
];


export default dashboardRoutes;
