
import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import WelcomeNavbar from "../components/Navbars/WelcomeNavbar.js";

import routes from "../routes/DefaultRoutes";

function Default() {
  const [color] = React.useState("black");
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/Default") {
        console.log(prop);
        return (
          <Route
            exact
            path={prop.path}
            render={(props) =>{
              console.log(prop)
              if(prop.protection){
                return <prop.protection comp = {prop.component} />
              }else{

                return <prop.component {...props} />
              }
            } 
            }
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
      <div  style={{ background: '#e0dfdc' }}>
        {/* <Sidebar color={color} image={hasImage ? image : ""} routes={routes} /> */}
        <div className="panel panel-default" ref={mainPanel}>
          <WelcomeNavbar color={color} />
          <div className="content" style={{ paddingTop: '15vh' }}>
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Default;
