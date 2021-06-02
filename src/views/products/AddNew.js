import React,{useState} from "react";
import { API_URL } from 'config';
import {toast} from 'react-toastify';

// react-bootstrap components
import {
    Form,
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
toast.configure()

function AddNew() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [dics,setDics] = useState("");
    const [stock,setStock] = useState(0);
    const [unit,setUnit] = useState("Unit");
    const [file,setFile] = useState("");
    const [fileName,setFilename] = useState("Choose file");


    const handleSelect=(e)=>{
      var value = e;
      setUnit(value);
    }
    async function save() {
      let product = {
        name,price,dics,stock,unit
      }

      let formData = new FormData()
      for ( var key in product ) {
        formData.append(key, product[key]);
      }
    
      formData.append('file',file);
      formData.append('details',product);
      let result = await fetch(API_URL + "/api/product",{
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
                            <Form.Control value={price}  onChange = { (e) => setPrice(e.target.value) } aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                                <InputGroup.Text>/</InputGroup.Text>
                            </InputGroup.Append>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={unit}
                                id="unit-selection"
                                onSelect={handleSelect}
                                >
                                <Dropdown.Item eventKey="Qty">Qty</Dropdown.Item>
                                <Dropdown.Item eventKey="Kg">Kg</Dropdown.Item>
                                <Dropdown.Item eventKey="Meter">Meter</Dropdown.Item>
                                <Dropdown.Item eventKey="Liter">Liter</Dropdown.Item>
                                <Dropdown.Item eventKey="Foot">Foot</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <Form.Group>
                          <label class="font-weight-bold">Availble Stock</label>
                          <Form.Control
                            type="text"
                            value={stock}
                            onChange = { (e) => setStock(e.target.value) }
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
                    <Row className="border-bottom">
                        <Col md="12">
                            <Form.Group>
                            <label class="font-weight-bold">Description</label>
                            <Form.Control
                                cols="120"
                                rows="4"
                                as="textarea"
                                type="text"
                                value={dics}  
                                onChange = { (e) => setDics(e.target.value) } 
                            ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>                 
                  <Button
                    className="btn-fill float-right"
                    type="button"
                    variant="info"
                    onClick={save}
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
