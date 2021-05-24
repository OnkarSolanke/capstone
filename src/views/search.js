import ProductCard from 'components/product/ProductCard';
import React, { useState } from 'react';
// react-bootstrap components
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,

} from "react-bootstrap";

function Search() {
  const  products =  [{
    id : 1,
    name : 'cement',
    price : '150/kg',
    available : '251 KG',
    disc : 'Grade 4',
    img : '/images/products/cement-1.jpg',
    vendor : {
      name : 'Shree Enterprises',
    }
  },{ id : 1,
    name : 'steel',
    price : '120/kg',
    available : '251 KG',
    disc : 'Grade 4',
    img : '/images/products/steel-1.jpeg',
    vendor : {
      name : 'Shree Enterprises',
    },
  },{ id : 1,
    name : 'steel',
    price : '115/kg',
    available : '251 KG',
    disc : 'Grade 4',
    img : '/images/products/steel-2.jpeg',
    vendor : {
      name : 'Shree Enterprises',
    },
  },{ id : 1,
    name : 'cement',
    price : '450/Bag',
    available : '251 KG',
    disc : 'Grade 4',
    img : '/images/products/cement-3.jpeg',
    vendor : {
      name : 'Shree Enterprises',
    },
  },{ id : 1,
    name : 'cement',
    price : '150/kg',
    available : '251 KG',
    disc : 'Grade 4',
    img : '/images/products/cement-1.jpg',
    vendor : {
      name : 'Shree Enterprises',
    },
  }];
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={{ span: 3, offset: 5 }}>
            <Form.Control className="border rounded" type="email" border="round" />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Form>
              <h3 className="text-center"> Filter</h3>
              <Row>
                <Col sd={12}>
                <Card>
                  <Card.Header className="text-center font-weight-bold"> Cement Grade</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>      
                        <Form.Check 
                            type="checkbox"
                            label="Grade-1"
                          />  
                      </ListGroup.Item>
                    <ListGroup.Item>
                    <Form.Check 
                            type="checkbox"
                            label="Grade-2"
                          />  
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Form.Check 
                            type="checkbox"
                            label="Grade-3"
                          />  
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={10}>
            <Row>
                {
                   products.map(product => { 
                      return <>
                        <Col lg="3" sm="6">
                          <ProductCard product={product} />
                        </Col>
                      </>
                   })
                }
            </Row>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Search;
