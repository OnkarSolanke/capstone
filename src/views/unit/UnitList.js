import React from "react";
import { API_URL } from 'config';
import Api from 'services/Api';

import {
  Card,
  Table,
  Container,
  Modal,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import AddNew from "./AddNew";

function UnitList() {

  const [showModal, setShowModal] = React.useState(false);
  const [showVendorDetailsModal, setshowVendorDetailsModal] = React.useState(false);
  const [modalCurrectRecord, setmodalCurrectRecord] = React.useState([]);
  const [unit, setUnit] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await Api().get('/unit');
      console.log(res);
      if(res.status == 200) setUnit(res.data);
    }
    fetchData();
  },[]);

  function modalButtonClickHandle(record){
    setShowModal(true);
    setmodalCurrectRecord(record);
  };
  function viewDetailsModalButtonClickHandle(){
    setshowVendorDetailsModal(true);
  };
  function handleChangeState(record) {
    record.status = 'active';
    unit.find(e => e.id == record.id).status = 'active';
    setShowModal(false)
    console.log(unit);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
              <Row>
                <Col md={6}>
                  <Card.Title as="h4" className="w-50">Units</Card.Title>  
                </Col>
                <Col md={6}>
                  <Button className="float-right"
                    onClick={() => modalButtonClickHandle()}>
                    Add new
                  </Button>
                </Col>
              </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.</th>
                      <th width="1000" >Unit</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      unit.map(e => {
                        return <>
                           <tr>
                            <td>{e.id}</td>
                            <td>{e.unit}</td>
                            <td>
                              <Button> Enable</Button>
                            </td>
                          </tr>
                        </>
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Mini Modal */}  
          <Modal
            size="l"
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header closeButton
              className="text-center">
                 <Modal.Title className="w-100 mt-0">Unit</Modal.Title>
            </Modal.Header>
            <Modal.Body className="border-top">  
              <AddNew/>         
            </Modal.Body>

          </Modal>
          {/* End Modal */}
      </Container>
    </>
  );
}
export default UnitList;
