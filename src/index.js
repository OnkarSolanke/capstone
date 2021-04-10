import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss";

import Welcome from "./layouts/Welcome";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Switch>
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
      {/* <Route path="/" render={(props) => <Capstone {...props} />} /> */}
      <Route path="/welcome" render={(props) => <Welcome {...props} />} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
