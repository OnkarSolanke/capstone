import ProductCard from 'components/product/ProductCard';
import React, { useState } from 'react';
import { API_URL } from 'config';

// react-bootstrap components
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Tabs,
  Tab,

} from "react-bootstrap";
import Labour from './categories/Labours';
import Material from './categories/Materials';
import Service from './categories/Services';

function Search() {
  const [products, setProducts] = React.useState([]);
  const [search,setSearch] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL + "/api/product"+((search) ? "?key="+search : ""),{
        method : 'GET',
        data : {key : search}
      });
      res
        .json()
        .then(res => setProducts(res))
        .catch();
    }
    fetchData();
  },[search]);

  function handleSelectChnage(value){
    setSearch(value);
  }
  const  data =  [{
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
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" variant="pills">
        <Tab eventKey="home" title="Labours">
          <Labour onSelectChnage={handleSelectChnage}/>
        </Tab>
        <Tab eventKey="profile" title="Materials">
          <Material onSelectChnage={handleSelectChnage} products = {products}/>
        </Tab>
        <Tab eventKey="services" title="Services">
          <Service/>
        </Tab>
        <Tab eventKey="search" title="Search All">
        <Row>
          <Col md={{ span: 3, offset: 5 }}>
            <Form.Control className="border rounded" type="email" border="round" />
          </Col>
        </Row>
        <Row className="mt-5">
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
        </Tab>
      </Tabs>
      </Container>
    </>
  );
}

export default Search;
