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
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import WelcomeNavbar from "../components/Navbars/WelcomeNavbar.js";
// import Footer from "components/Footer/Footer";

import routes from "../routes/WelcomeRoutes";

// import sidebarImage from "assets/img/sidebar-3.jpg";

function Welcome() {
  console.log('hel0')
//   const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
      console.log(routes);
    return routes.map((prop, key) => {
      if (prop.layout === "/welcome") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    } 
  }, [location]);
  return (
    <>
      <div style={{ background: '#e0dfdc'}}>
        {/* <Sidebar color={color} image={hasImage ? image : ""} routes={routes} /> */}
        <div className="panel panel-default" ref={mainPanel}>
          <WelcomeNavbar color={color} />
          <div className="content" style={{ paddingTop: '15vh'}}>
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
