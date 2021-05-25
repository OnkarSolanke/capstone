import React, { useState } from 'react';
// react-bootstrap components
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

function Service() {

  return (
    <>
    <Row>
        <Col md={{span:10,offset:2}}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Local Services
            </h3>  
          </div> 
          <div className="panel-body">
            <DropdownButton 
                variant="primary"
                title="Select Category"
              >
              <Dropdown.Item href="#/action-3">Electrician</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Plumber</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Painter</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Surveyor</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Draughtsman civil</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Mason</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tile installers</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="panel-footer">

          </div>
        </div>
        </Col>
    </Row>
    </>
  );
}

export default Service;
