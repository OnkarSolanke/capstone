import React from "react";
import { API_URL } from 'config';

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Modal,
  Button,
  Row,
  Col,
  Image,
  Figure,
} from "react-bootstrap";

function VendorList() {

  const [showModal, setShowModal] = React.useState(false);
  const [showVendorDetailsModal, setshowVendorDetailsModal] = React.useState(false);
  const [modalCurrectRecord, setmodalCurrectRecord] = React.useState([]);
  const [vendors, setVendors] = React.useState([]);
  const [hasError, setErrors] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL + "/api/vendor",{
        method : 'GET',
      });
      res
        .json()
        .then(res => setVendors(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  },[]);

  function modalButtonClickHandle(record){
    console.log(record);
    setShowModal(true);
    setmodalCurrectRecord(record);
  };
  function viewDetailsModalButtonClickHandle(record){
    console.log(record);
    setshowVendorDetailsModal(true);
    setmodalCurrectRecord(record);
  };
  function handleChangeState(record) {
    record.status = 'Active';
    vendors.find(e => e.id == record.id).status = 'Active';
    setShowModal(false)
    console.log(vendors);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All Registered Vendors</Card.Title>
                <p className="card-category">
                    
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Mobile</th>
                      <th className="border-0">City/Area</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      vendors.map(e => {
                        console.log(e);
                        return <>
                           <tr>
                            <td>{e.id}</td>
                            <td>{e.first_name + ' ' + e.last_name}</td>
                            <td>{ e.email }</td>
                            <td> { e.mobile }</td>
                            <td>{ e.address[0].city }</td>
                            <td>
                              <Button
                                className="btn-fill "
                                variant = { e.status == 'Active' ? 'success' : 'info' }
                                onClick={() => modalButtonClickHandle(e)}
                              >
                               {e.status}
                              </Button>
                            </td>
                            <td>
                              <Button
                                    className="btn-fill  ml-2"
                                    variant = 'primary'
                                    onClick={() => viewDetailsModalButtonClickHandle(e)}
                                  >
                                  View Details
                              </Button>
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
        <ViewVendorDetails
          show={showVendorDetailsModal}
          record = {modalCurrectRecord}
          onHide={() => setshowVendorDetailsModal(false)}
        />
        {/* Mini Modal */}  
          <Modal
            className=" modal-primary"
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header className="justify-content-center">
             
            </Modal.Header>
            <Modal.Body className="text-center">
              <p>Are your sure do you want to change status of {modalCurrectRecord.name}?</p>
            </Modal.Body>
            <div className="modal-footer">
              <Button
                className="btn-simple"
                type="button"
                variant="danger"
                onClick={() => setShowModal(false)}
              >
                Back
              </Button>
              <Button
                className="btn-simple"
                type="button"
                variant="info"
                onClick={() => handleChangeState(modalCurrectRecord)}
              >
                change
              </Button>
            </div>
          </Modal>
          {/* End Modal */}
      </Container>
    </>
  );
}

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
export default VendorList;
