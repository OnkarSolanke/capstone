import LogOutProtector from "protectors/LogOutProtector";
import LoginForm  from "views/auth/LoginForm";
import Search from "views/search.js";

const DefaultRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: LoginForm,
    layout: "/Default",
    protection : LogOutProtector
  },{
    path: "/search",
    name: "Index",
    icon: "nc-icon nc-bank",
    component: Search,
    layout: "/Default",
  }
];

export default DefaultRoutes;
