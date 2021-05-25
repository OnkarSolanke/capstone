import React, { useState } from 'react';
// react-bootstrap components
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

function Labour() {

  return (
    <>
    <Row>
        <Col md={{span:10,offset:2}}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Labours
            </h3>  
          </div> 
          <div className="panel-body">
            <DropdownButton 
                variant="primary"
                title="Select Category"
              >
                <Dropdown.Item href="#/action-1">Head Mason</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mason</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Carpenter</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Male Mazdoor</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Female Mazdoor</Dropdown.Item>

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

export default Labour;
