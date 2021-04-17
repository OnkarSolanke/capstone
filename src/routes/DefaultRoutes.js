import LogOutProtector from "protectors/LogOutProtector";
import LoginForm  from "views/auth/LoginForm";

const DefaultRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: LoginForm,
    layout: "/Default",
    protection : LogOutProtector
  }
];

export default DefaultRoutes;
