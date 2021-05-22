import React,{useState} from "react";
import { API_URL } from 'config';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Add_Edit() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [midleName,setMidleName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [adhar,setAdhar] = useState("");

  async function save() {
    let vedor = {firstName,lastName,midleName,mobile,email} ; 
    let result = await fetch(API_URL + "/api/vendor/store",{
      method : 'POST',
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body : JSON.stringify(vedor),
    });
    
    result = await result.json();
    console.log(result);
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Header>
                <Card.Title as="h4">Vendor Registration</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  {/* <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company ()</label>
                        <Form.Control
                          
                          
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          
                          
                          type="text"
                          
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          
                          type="email"
                          
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Card className="shadow p-3 mb-5 bg-white rounded">
                  <Card.Header>
                      <Card.Title as="h5">Personal Information</Card.Title>
                    </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label class="font-weight-bold">First Name</label>
                          <Form.Control
                            
                            
                            type="text"
                            value={firstName}
                            onChange = { (e) => setFirstName(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <Form.Label> Middle Name</Form.Label>
                          <Form.Control border="none"
                            type="text"
                            value={midleName}
                            onChange = { (e) => setMidleName(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Last Name</label>
                          <Form.Control
                            
                            
                            type="text"
                            value={lastName}
                            onChange = { (e) => setLastName(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            
                            
                            type="email"
                            value={email}
                            onChange = { (e) => setEmail(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Mobile</label>
                          <Form.Control
                            
                            
                            type="text"
                            value={mobile}
                            onChange = { (e) => setMobile(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>adhar</label>
                        <Form.Control
                          background="secondary"
                          
                          type="text"
                          value={adhar}
                          onChange = { (e) => setAdhar(e.target.value) }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Materials</label>
                        <Form.Control
                          
                          
                          type="text"
                          value={adhar}
                          onChange = { (e) => setAdhar(e.target.value) }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  </Card.Body>
                  </Card>
                  <Card className="shadow p-3 mb-5 bg-white rounded">
                    <Card.Header>
                      <Card.Title as="h5">Permanent Address</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            
                            
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                            
                            
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            
                            
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            
                            type="number"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                  <Card className="shadow p-3 mb-5 bg-white rounded">
                    <Card.Header>
                      <Card.Title as="h5">Temporary Address</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Same as Permanent" />
                      </Form.Group>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                            
                            
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            
                            
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            
                            type="number"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About</label>
                        <Form.Control
                          cols="80"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="button"
                    variant="info"
                    onClick = {save}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Add_Edit;
