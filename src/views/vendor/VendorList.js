import React from "react";

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

  const data = [
    {
      id : 1,
      name : 'Onkar solanke',
      first_name : 'Onkar',
      middle_name : 'Kalyanrao',
      last_name : 'Solanke',
      adhar : '987654321654',
      email : 'o.solanke@gmaill.com',
      materials : 'Cement',
      mobile : '9595979549',
      about : 'Demo',
      city : 'Jalna',
      status :  'Active',
    },{
      id: 2,
      name : 'Vishal solanke',
      email : 'o.solanke@gmaill.com',
      mobile : '9595979549',
      city : 'Pune',
      status :  'In-active',
    },
  ];

  const columns = [
    {
      dataField : "id",
      text : "ID"
    },{
      dataField : "name",
      text : "Name"
    },{
      dataField : "email",
      text : "Emaail"
    },{
      dataField : "mobile",
      text : "Mobile"
    },{
      dataField : "city",
      text : "City"
    },{
      dataField : "status",
      text : "Status"
    },
  ];
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
    record.status = 'active';
    data.find(e => e.id == record.id).status = 'active';
    setShowModal(false)
    console.log(data);
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
                      data.map(e => {
                        return <>
                           <tr>
                            <td>1</td>
                            <td>{e.name}</td>
                            <td>{ e.email }</td>
                            <td> { e.mobile }</td>
                            <td>{ e.city }</td>
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
            <Row>
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
                           Onkar
                        </label>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={5}>
                        <label className="text-muted">
                            Middle Name :
                        </label>
                      </Col>

                      <Col md={7}>
                        <label >
                          Kalyanrao
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
                          Solanke
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
                            Email :
                        </label>
                      </Col>

                      <Col md={9}>
                        <label >
                            Onkar@gmail.com
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
                          9595979549
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
                            98765321021
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
                          Cement
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
                    src="/images/vendor/dummy.png"
                  />
                </Figure>
              </Col>
            </Row>
            <h4 className="text-muted">
                Adress
            </h4>
            <p>
              Sonal Nage Near railway staion
            </p>
            <Row>
              <Col md={4}>
                  <Row>
                    <Col md={5}>
                      <label className="text-muted">
                          City
                      </label>
                    </Col>
                    <Col md={6}>
                      <label>
                          Jalna
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
                          431203
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
            <Row>
              <h4 className="text-muted">
                  About
              </h4>
              <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
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
