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

function Worker_Add_Edit() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [midleName,setMidleName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");

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
            <Card>
              <Card.Header>
                <Card.Title as="h4">Worker Registretion</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  {/* <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company ()</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
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
                          placeholder="Email"
                          type="email"
                          
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                          value={firstName}
                          onChange = { (e) => setFirstName(e.target.value) }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Midle Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Midle Name"
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
                          defaultValue="Andrew"
                          placeholder="Last Name"
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
                          defaultValue="Mike"
                          placeholder="Company"
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
                          defaultValue="Andrew"
                          placeholder="Midle Name"
                          type="text"
                          value={mobile}
                          onChange = { (e) => setMobile(e.target.value) }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Permanent Address</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            defaultValue=""
                            placeholder="Home Address"
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
                            defaultValue="Mike"
                            placeholder="City"
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Country"
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            placeholder="ZIP Code"
                            type="number"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                  <Card>
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
                            defaultValue=""
                            placeholder="Home Address"
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
                            defaultValue="Mike"
                            placeholder="City"
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Country"
                            type="text"
                            
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            placeholder="ZIP Code"
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
                          defaultValue=""
                          placeholder="Here can be your description"
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

export default  Worker_Add_Edit;
