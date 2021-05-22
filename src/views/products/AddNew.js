import React,{useState} from "react";

// react-bootstrap components
import {
    Form,
  Card,
  Table,
  Container,
  Modal,
  Button,
  Row,
  Col,
  Image,
  Figure,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

function AddNew() {
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [midleName,setMidleName] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");
    const [adhar,setAdhar] = useState("");
  
  return (
    <>
     
      <Row>
          <Col md={{ span: 12, offset: 0 }}>
            <Card className="border-0">
              <Card.Body>
                <Form>
                    <Row>
                      <Col md="4">
                        <Form.Group>
                          <label class="font-weight-bold">Name</label>
                          <Form.Control
                            
                            
                            type="text"
                            value={name}
                            onChange = { (e) => setName(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md="4">
                          <label>Price</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>&#8377;</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                                <InputGroup.Text>/</InputGroup.Text>
                            </InputGroup.Append>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Unit"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item>Qty</Dropdown.Item>
                                <Dropdown.Item>Kg</Dropdown.Item>
                                <Dropdown.Item>Meter</Dropdown.Item>
                                <Dropdown.Item>Liter</Dropdown.Item>
                                <Dropdown.Item>Foot</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <Form.Group>
                          <label class="font-weight-bold">Availble Stock</label>
                          <Form.Control
                            
                            
                            type="text"
                            value={name}
                            onChange = { (e) => setName(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="border-bottom">
                        <Col md="12">
                            <Form.Group>
                            <label class="font-weight-bold">Description</label>
                            <Form.Control
                                cols="120"
                                rows="4"
                                as="textarea"
                                type="text"
                            ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>                  
                  <Button
                    className="btn-fill float-right"
                    type="button"
                    variant="info"
                  >
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  );
}

export default AddNew;
