import ProductCard from 'components/product/ProductCard';
import React, { useState } from 'react';
import { API_URL } from 'config';

// react-bootstrap components
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { EmojiFrownFill, Search as SearchIcon } from "react-bootstrap-icons";
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
        .then(res =>{
          var prod = [];
          console.log(res);
          if(res && res.products)
             prod = res.products;
          setProducts(prod)
        })
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
        <Row>
        <Col md={{span : 4 , offset : 4}}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"> <SearchIcon/></InputGroup.Text>

              </InputGroup.Prepend>
            <FormControl
              placeholder="Search"
              aria-describedby="basic-addon1"
              style={{
                backgroundColor : '#fff'
              }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Row>
                {
                  products.length ? 
                   products.map(product => { 
                      return <>
                        <Col lg="2" sm="6">
                          <ProductCard 
                            onClick = { (e) => handleProductBuy(product)}
                            product={product} />
                        </Col>
                      </>
                   })
                   :
                   <>
                   <Col md={12}>
                    <p className="text-center">No Result Found <EmojiFrownFill size="50" color="red"/></p> 
                   </Col>
                   </>
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
