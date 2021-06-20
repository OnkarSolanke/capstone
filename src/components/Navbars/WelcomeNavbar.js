
import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";

import routes from "../../routes/WelcomeRoutes";
import AuthService from "services/AuthService";
import { API_URL } from "config";

function Header({ color }) {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };
  async function handletest(){
    let result = await fetch(API_URL + "/api/test",{
      method : 'GET',
    });

    result = await result.json();
    console.log(result,'testapi')
  }
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Capstone";
  };
  return (
    <Navbar bg='dark' expand="lg" fixed="top" className="navbar-default navbar-static-top">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            bg="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block"> Search</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
            {
              !AuthService.isLogedIn() ?
                <>
                  <Nav.Item>
                    <NavDropdown class="" title="Registration" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <NavLink to="/welcome/register/vendor">
                          <span className="no-icon">As Vendor</span>
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <NavLink to="/welcome/register/worker">
                          <span className="no-icon">As Worker</span>
                        </NavLink>
                      </NavDropdown.Item>
                        
                    </NavDropdown>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="mt-2"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <NavLink to="/login">
                        <span className="no-icon">Log In</span>
                      </NavLink>
                    </Nav.Link>
                  </Nav.Item>
                </>
                :
                <>
                  <Nav.Item>
                    <Nav.Link
                      className="m-0"
                      href="javascript:void(0)"
                      onClick={(e) => e.preventDefault()}
                    >
                      <NavLink to="/logout">
                        <span className="no-icon">Log Out</span>
                      </NavLink>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
              <Nav.Link
                className="m-0"
                onClick={handletest}
              >
                <span className="no-icon">test</span>
              </Nav.Link>
            </Nav.Item>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
