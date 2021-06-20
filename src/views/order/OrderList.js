import React from "react";
import Api from 'services/Api';

import {
  Card,
  Table,
  Container,
  Modal,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import ViewVendorDetails from "./ViewVendorDetails";
function OrderList() {

  const [showModal, setShowModal] = React.useState(false);
  const [showVendorDetailsModal, setshowVendorDetailsModal] = React.useState(false);
  const [modalCurrectRecord, setmodalCurrectRecord] = React.useState([]);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await Api().get("/order").catch(function(e){
          console.log(e);
      });
      if(res.status == 200){
          if(res.data && res.data.orders){
            setOrders(res.data.orders);
            console.log(res.data);
         } 
      }
    }
    fetchData();
  },[]);

  const orderStatus = {
    'ORDER_PUT' : {
      name : 'Order Put-Up',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('ORDER_RECEIVED',id)}>Accept This Order</Dropdown.Item>
          <Dropdown.Item className="text-danger" as="button" onClick={(e) => changeStatusTo('ORDER_CANCLE',id)}>Cancel This Order</Dropdown.Item>
        </>)
      }
    },
    'ORDER_RECEIVED': {
      name : 'Order Received',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('ENQUIRY',id)}>Enquiry</Dropdown.Item>
          <Dropdown.Item className="text-danger" as="button" onClick={(e) => changeStatusTo('ORDER_CANCLE',id)}>Cancel This Order</Dropdown.Item>
        </>)
      }
    },
    'ORDER_CANCLE' : {
      name : 'Order Cancle',
      action : function (id){
        return (<>
          {/* <Dropdown.Item className="text-success" as="button">Conform Order</Dropdown.Item> */}
          {/* <Dropdown.Item className="text-danger" as="button" onClick={(e) => changeStatusTo('ORDER_CANCLE',id)}>Cancel This Order</Dropdown.Item> */}
        </>)
      }
    },
    'ENQUIRY' : {
      name : 'Enquiry',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('ORDER_CONFORM',id)}>Conform Order</Dropdown.Item>
          <Dropdown.Item className="text-danger" as="button" onClick={(e) => changeStatusTo('ORDER_CANCLE',id)}>Cancel This Order</Dropdown.Item>
        </>)
      }
    },
    'ORDER_CONFORM' : {
      name : 'Conform Order',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('ORDER_DISPATCH',id)}>Dispatch Order</Dropdown.Item>
          <Dropdown.Item className="text-danger" as="button" onClick={(e) => changeStatusTo('ORDER_CANCLE',id)}>Cancel This Order</Dropdown.Item>
        </>)
      }
    },
    'ORDER_DISPATCH' : {
      name : 'Dispatch Order',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('DELIVERY',id)}>Dilevery</Dropdown.Item>
        </>)
      }
    },
    'DELIVERY' : {
      name : 'Dilevery',
      action : function (id){
        return (<>
          <Dropdown.Item className="text-success" as="button" onClick={(e) => changeStatusTo('PAYMENT',id)}>Payment Received</Dropdown.Item>
        </>)
      }
    },
    'PAYMENT' : {
      name : 'Payment',
      action : function (id){
        return (<>
          
        </>)
      }
    }
  }
  async function changeStatusTo(status,id) {
    console.log('Hello in change',status,id);
    const res = await Api().post("/order-change-status/" + id + "/" + status).catch(function(e){
        console.log(e);
    });
    let updatedRecord = orders.map((e) => {
      if(e.id == id){
        const updatedItem = {
          ...e,
          status : status,
        }
          return updatedItem;
      }
      return e ;
    });
    setOrders(updatedRecord);
  }
  function modalButtonClickHandle(record){
    setShowModal(true);
    setmodalCurrectRecord(record);
  };
  function viewDetailsModalButtonClickHandle(){
    setshowVendorDetailsModal(true);
  };
  function handleChangeState(record) {
    record.status = 'active';
    orders.find(e => e.id == record.id).status = 'active';
    setShowModal(false)
    console.log(orders);
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
                  <Card.Title as="h4" className="w-50">Orders</Card.Title>  
                </Col>
              </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.</th>
                      <th>Order Put By(Name)</th>
                      <th>Qty</th>
                      <th>Address</th>
                      <th>Order Status</th>
                      <th>Vendor</th>
                      <th width="150">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map((e,i) => {
                        return <>
                           <tr>
                            <td>{i + 1 }</td>
                            <td>{e.customer ? e.customer.name : ''}</td>
                            <td>{e.quantity_required}</td>
                            <td>{e.address ? e.address.address : '' }</td>
                            <td> { e.status && orderStatus[e.status] ? orderStatus[e.status].name : '' }</td>
                            <td>{ e.vendor ? e.vendor.first_name + ' ' + e.vendor.last_name : '' }</td>
                            <td>
                              <DropdownButton  variant="info" id="dropdown-item-button" title="Action">
                              { e.status && orderStatus[e.status] ? orderStatus[e.status].action(e.id) : '' }
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
            </Modal.Body>

          </Modal>
          {/* End Modal */}
          <ViewVendorDetails
          show={showVendorDetailsModal}
          record = {modalCurrectRecord}
          onHide={() => setshowVendorDetailsModal(false)}
        />
      </Container>
    </>
  );
}
export default OrderList;
