import React, { useState } from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Modal,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Categories() {
    let labours = [
        {
            id : 1,
            name : 'Dakota Rice',
            mobile : '9889745658',
            address : 'Wagholi',
            city : 'Pune',
            rate : 1200.00,
            type : 'Head Mason',
        },
        {
            id : 2,
            name : 'Minerva Hooper',
            mobile : '9889745658',
            address : 'Pimpi',
            rate : 900.00,
            type : 'Mason',
            city : 'Pune',
        },
        {
          id : 2,
          name : 'Sage Rodriguez',
          mobile : '9889745658',
          address : 'Chonchwads',
          rate : 1000.00,
          type : 'Carpenter',
          city : 'Pune',
      },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Row>
                  <Col md="6">
                    <Card.Title as="h4">Labours</Card.Title>
                  </Col>
                  <Col md="6">
                    <DropdownButton 
                      className="float-right" 
                      variant="secondary" 
                      title="Select Category"
                    >
                      <Dropdown.Item href="#/action-1">Head Mason</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Mason</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Carpenter</Dropdown.Item>
                  </DropdownButton>
                  <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  </Col>

                </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Mobile</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Price/day</th>
                      <th className="border-0">Address</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          labours.map((labour,key) => {
                              return (
                                <tr>
                                    <td>{labour.id}</td>
                                    <td>{labour.name}</td>
                                    <td>{labour.mobile}</td>
                                    <td>{labour.type}</td>
                                    <td>{labour.rate}</td>
                                    <td>{labour.address}</td>
                                    <td>{labour.city}</td>
                                </tr>
                              );
                          })
                      }
                    </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
              <Row>
                  <Col md="6">
                    <Card.Title as="h4">Materials</Card.Title>
                  </Col>
                  <Col md="6">
                    <DropdownButton 
                      className="float-right" 
                      variant="secondary" 
                      title="Select Category"
                    >
                      <Dropdown.Item href="#/action-1">Red brick</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">OPC cement</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">TMT Steel bars</Dropdown.Item>
                  </DropdownButton>
                  </Col>

                </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Categories;
