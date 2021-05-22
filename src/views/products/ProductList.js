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
import AddNew from "./AddNew";

function ProductList() {

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
  function viewDetailsModalButtonClickHandle(){
    setshowVendorDetailsModal(true);
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
              <Row>
                <Col md={6}>
                  <Card.Title as="h4" className="w-50">Products</Card.Title>  
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
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Sr.</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Availeble</th>
                      <th>City/Area</th>
                      <th>Status</th>
                      <th>action</th>
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
                             
                              >
                               {e.status}
                              </Button>
                            </td>
                            <td>

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
            size="xl"
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header closeButton
              className="text-center">
                 <Modal.Title className="w-100 mt-0">Add New Product</Modal.Title>
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
export default ProductList;
