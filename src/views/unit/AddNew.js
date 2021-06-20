import React,{useState} from "react";
import { API_URL } from 'config';
import {toast} from 'react-toastify';
import Api from 'services/Api';

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
    const [unit,setUnit] = useState("");


    const handleSelect=(e)=>{
      var value = e;
      setUnit(value);
    }
    async function save() {

      let result = await Api().post('/unit', {
        unit : unit
      })
      
      result = result;
      // if(result.status && result.status == 'Error'){
      //   for ( var key in result.massage ) {
      //     toast.error(result.massage[key]);
      //   }
      // }
    }

  return (
    <>
      <Row>
          <Col md={{ span: 12, offset: 0 }}>
            <Card className="border-0">
              <Card.Body>
                <Form>
                    <Row>
                      <Col md={{offset : 3 ,span : 6}}>
                        <Form.Group>
                          <label className="font-weight-bold">unit</label>
                          <Form.Control
                            type="text"
                            value={unit}
                            onChange = { (e) => setUnit(e.target.value) }
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
