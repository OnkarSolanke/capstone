import React, { useState } from 'react';
// react-bootstrap components
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

function Material() {

  return (
    <>
    <Row>
        <Col md={{span:10,offset:2}}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Materials
            </h3>  
          </div> 
          <div className="panel-body">
            <DropdownButton 
                variant="primary"
                title="Select Category"
              >
              <Dropdown.Item href="#/action-3">Cement</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Steel</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bricks</Dropdown.Item>
              <Dropdown.Item href="#/action-3">RMC</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tiles</Dropdown.Item>
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

export default Material;
