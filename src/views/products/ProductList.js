import React from "react";
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

function ProductList() {

  const [showModal, setShowModal] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [units, setUnites] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await Api().get("/product");
      if(res.status == 200){
         if(res.data){
            setUnites(res.data.units)
            setProducts(res.data.products);
         } 
      }
    }
    fetchData();
  },[]);

  function modalButtonClickHandle(record){
    setShowModal(true);
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
                      products.map(e => {
                        return <>
                           <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{ e.price  + (e.unit ?  '/' + e.unit : '') }</td>
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
              <AddNew units={units}/>         
            </Modal.Body>

          </Modal>
          {/* End Modal */}
      </Container>
    </>
  );
}
export default ProductList;
