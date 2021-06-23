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
import ProductBuyForm from 'components/product/ProductBuyForm';

function Search() {
  const [products, setProducts] = React.useState([]);
  const [currenttProduct, setCurrentProduct] = React.useState([]);
  const [productsFormModal, setProductsFormModal] = React.useState(false);
  const [search,setSearch] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL + "/api/product"+((search) ? "?key="+search : ""),{
        method : 'GET',
        data : {key : search}
      });
      res
        .json()
        .then(res => setProducts(res.products))
        .catch();
    }
    fetchData();
  },[search]);

  function handleProductBuy(product){
    setProductsFormModal(true);
    setCurrentProduct(product);
  }
  return (
    <>
      <Container fluid>

        <Row className="mt-5">
          <Col md={12}>
            <Row>
                {
                   products.map(product => { 
                      return <>
                        <Col lg="2" sm="6">
                          <ProductCard 
                            onClick = { (e) => handleProductBuy(product)}
                            product={product} />
                        </Col>
                      </>
                   })
                }
            </Row>
          </Col>
        </Row>
      <ProductBuyForm 
        showModal={productsFormModal}
        onHide={() => setProductsFormModal(false)}
        product={currenttProduct}
        />
      </Container>
    </>
  );
}

export default Search;
