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
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import AddNew from "./AddNew";

function ProductList() {

  const [showModal, setShowModal] = React.useState(false);
  const [showVendorDetailsModal, setshowVendorDetailsModal] = React.useState(false);
  const [modalCurrectRecord, setmodalCurrectRecord] = React.useState([]);

  const data = [
    {
      id : 1,
      name : 'cement',
      price : '150/kg',
      available : '251 KG',
      disc : 'Grade 4',
    }, {
      id : 2,
      name : 'Steel',
      price : '120/kg',
      available : '254 KG',
      disc : '4 % carbon',
    }, {
      id : 3,
      name : 'Bricks',
      price : '7/Qty',
      available : '6658 Qty',
      disc : '4 inch',
    }, {
      id : 4,
      name : 'RMC',
      price : '150/kg',
      available : '251 KG',
      disc : ' ',
    }, {
      id : 5,
      name : 'Tiles',
      price : '75/Qty',
      available : '251 Qty',
      disc : ' white',
    }
    
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
                <Table className="table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Availeble</th>
                      <th width="500" >Description</th>
                      <th width="150">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map(e => {
                        return <>
                           <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{ e.price }</td>
                            <td> { e.available }</td>
                            <td>{ e.disc }</td>
                            <td>
                              <DropdownButton  variant="Info" id="dropdown-item-button" title="Action">
                                <Dropdown.Item as="button">Edit</Dropdown.Item>
                                <Dropdown.Item as="button">Delete</Dropdown.Item>
                              </DropdownButton>
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
