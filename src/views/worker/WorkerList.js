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
} from "react-bootstrap";

function WorkerList() {

  const [showModal, setShowModal] = React.useState(false);
  const [modalCurrectRecord, setmodalCurrectRecord] = React.useState([]);

  const data = [
    {
      id : 1,
      name : 'Onkar solanke',
      email : 'o.solanke@gmaill.com',
      mobile : '9595979549',
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
                <Card.Title as="h4">All Registered Workers</Card.Title>
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
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map(e => {
                        return <>
                           <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{ e.email }</td>
                            <td> { e.mobile }</td>
                            <td>{ e.city }</td>
                            <td>
                              <Button
                                className="btn-fill btn-wd"
                                variant = { e.status == 'Active' ? 'success' : 'info' }
                                onClick={() => modalButtonClickHandle(e)}
                              >
                               {e.status}
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
        {/* Mini Modal */}  
          <Modal
            className="modal-mini modal-primary"
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

export default WorkerList;
