
import { API_URL } from "config";
import React from "react";

import {
  Container,
  Modal,
  Button,
  Row,
  Col,
  Figure,
} from "react-bootstrap";
function ViewVendorDetails(props) {
  var record = props.record
  return (
    <Modal
      {...props}
      size="xl"
    >
      <Modal.Header closeButton className="text-center">
        <Modal.Title className=" w-100">
          Vendor Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Container>
            <Row className=" border-bottom">
              <Col md={10}>
                <Row>
                  <Col md={4}>
                    <Row>
                      <Col md={5}>
                        <label className="text-muted">
                            First Name :
                        </label>
                      </Col>

                      <Col md={7}>
                        <label >
                          {record.first_name}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={6}>
                        <label className="text-muted">
                            Middle Name :
                        </label>
                      </Col>

                      <Col md={6}>
                        <label >
                        {record.midle_name}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={5}>
                        <label className="text-muted">
                            Last Name :
                        </label>
                      </Col>

                      <Col md={7}>
                        <label >
                        {record.last_name}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col md={6}>
                    <Row>
                      <Col md={3}>
                        <label className="text-muted">
                            Email :
                        </label>
                      </Col>

                      <Col md={9}>
                        <label >
                        {record.email}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={4}>
                        <label className="text-muted">
                           Mobile :
                        </label>
                      </Col>

                      <Col md={7}>
                        <label >
                        {record.mobile}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={3}>
                        <label className="text-muted">
                            Adhar No:
                        </label>
                      </Col>

                      <Col md={9}>
                        <label >
                        {record.adhar_no}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={4}>
                        <label className="text-muted">
                           Material :
                        </label>
                      </Col>

                      <Col md={7}>
                        <label >
                        {record.material}
                        </label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={2}>
              <Figure>
                  <Figure.Image
                    width={200}
                    height={220}
                    alt="Vendor Imgage"
                    src={ (record.avtar) ?  API_URL + '/storage/avatars/vendors/' + record.avtar : '/images/vendor/dummy.png'}
                  />
                </Figure>
              </Col>
            </Row>
            {
              
              (record.address) ? record.address.map( (a) => {
                  return <>
                      <h4 className="text-muted text-uppercase">
                           {a.type} Address
                        </h4>
                        <p className="font-weight-bold pl-3">
                          {a.address}
                        </p>
                        <Row className="pl-3 border-bottom">
                          <Col md={4}>
                              <Row>
                                <Col md={5}>
                                  <label className="text-muted">
                                      City
                                  </label>
                                </Col>
                                <Col md={6}>
                                  <label>
                                    {a.City}
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={4}>
                              <Row>
                                <Col md={5}>
                                  <label className="text-muted">
                                      Pin
                                  </label>
                                </Col>
                                <Col md={6}>
                                  <label>
                                    {a.pine}
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={4}>
                              <Row>
                                <Col md={5}>
                                  <label className="text-muted">
                                      State
                                  </label>
                                </Col>
                                <Col md={6}>
                                  <label>
                                      Maharashtra
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                        </Row>
                  </>
                }) : ''
            }
            
            <Row>
              <Col md='12'>
                <h4 className="text-muted">
                    About
                </h4>
              </Col>
              <Col md="12">
                <p >
                    {record.about}
                </p>
              </Col>
            </Row>
          </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewVendorDetails;