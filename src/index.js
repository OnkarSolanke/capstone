import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss";

import Welcome from "./layouts/Welcome";
import Default from "./layouts/Default";
import AdminLayout from "./layouts/Admin.js";
import LogInProtector from './protectors/LogInProtector';
import Vendor from 'layouts/Vendor';


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <LogInProtector comp = {AdminLayout} />} />
      <Route path="/welcome" render={(props) => <Welcome {...props} />} />
      <Route path="/vendor" render={(props) => <Vendor {...props} />} />
      <Route path="/" render={(props) => <Default {...props} />} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
