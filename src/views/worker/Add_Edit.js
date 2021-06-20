import React,{useState} from "react";
import { API_URL } from 'config';
import {toast} from 'react-toastify';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
toast.configure()

function Worker_Add_Edit() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [midleName,setMidleName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [qualif,setQualif] = useState("");
  const [skill,setSkill] = useState("");

  const [adhar] = useState("");
  const [about,setAbout] = useState("");
  const [file,setFile] = useState("");


  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("India");
  const [pine,setPine] = useState("");

  const [tempAddress,setTempAddress] = useState("");
  const [tempCity,setTempCity] = useState("");
  const [tempCountry,setTempCountry] = useState("India");
  const [tempPine,setTempPine] = useState("");

  const [fileName,setFilename] = useState("Choose file");


  async function save() {
    let worker = { 
      firstName, 
      lastName,
      midleName,
      mobile,
      email,
      adhar,
      about,
      address,
      city,
      country,
      pine,
      tempAddress,
      tempCity,
      tempCountry,
      tempPine,
      qualif,
      skill
    }; 

    let formData = new FormData()
    for ( var key in worker ) {
      formData.append(key, worker[key]);
    }
  
    formData.append('file',file);
    formData.append('details',worker);
    let result = await fetch(API_URL + "/api/worker/store",{
      method : 'POST',
      body : formData,
    });

    result = await result.json();
    if(result.status && result.status == 'Error'){
      for ( var key in result.massage ) {
        toast.error(result.massage[key]);
      }
    }
  }
  function handleFileselection(event){
    var target = event.target;
    if(target.files && target.files.length > 0){

      var file = target.files[0] 
      setFile(file);
      if(file.name){
        setFilename(file.name);
      }
    }
  }
  function handleTempAddress(checked){
    if(checked){
      setTempAddress(address);
      setTempCity(city);
      setTempCountry(country);
      setTempPine(pine);
    }else{
      setTempAddress("");
      setTempCity("");
      setTempCountry("India");
      setTempPine("");
    }
  }
  return (
    <>
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Header>
              <Card.Title as="h4">Worker Registration</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
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
                {/* <Row>
                  <Col className="pl-1" md="12">
                    <select className="form-control" name="city">

                        <option selected>Select City</option>

                        <option value="1">city 1</option>

                        <option value="2">city 2</option>

                        <option value="3">city 3</option>

                    </select>
                  </Col>
                </Row> */}

                <Row>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Qualification</label>
                      <Form.Control
                        background="secondary"
                        
                        type="text"
                        value={qualif}
                        onChange = { (e) => setQualif(e.target.value) }
                      ></Form.Control>

                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Skills</label>
                      <Form.Control
                        type="text"
                        value={skill}
                        onChange = { (e) => setSkill(e.target.value) }
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                    <Col sd="12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                          Upload
                        </span>
                      </div>
                      <div className="custom-file">
                        <Form.Control
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                          accept="image/*"
                          onChange={(event) => handleFileselection(event)}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01" style={{height: '40px'}}>
                          {fileName}
                        </label>
                      </div>
                    </div>
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
                            value = {address}
                            onChange = { (e) => setAddress(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                             value = {city}
                             onChange = { (e) => setCity(e.target.value) }
                              type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            type="text"
                            value = {country}
                            onChange = { (e) => setCountry(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            type="number"
                            value = {pine}
                            onChange = { (e) => setPine(e.target.value) }
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
                        <Form.Check type="checkbox" label="Same as Permanent" onChange = {(e) => handleTempAddress(e.target.checked)} />
                      </Form.Group>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            type="text"
                            value = {tempAddress}
                            onChange = { (e) => setTempAddress(e.target.value) }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                          type="text"
                          value = {tempCity}
                          onChange = { (e) => setTempCity(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            type="text"
                            value = {tempCountry}
                            onChange = { (e) => setTempCountry(e.target.value) }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            type="number"
                            value = {tempPine}
                            onChange = { (e) => setTempPine(e.target.value) }
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
                          value = {about}
                          onChange = { (e) => setAbout(e.target.value) }
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
