import ProductCard from 'components/product/ProductCard';
import { API_URL } from 'config';
import React, { useState } from 'react';
// react-bootstrap components
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

function Material(props) {
  const [materialTitle,setMaterialTitle] = React.useState("Select Category");
  const [products, setProducts] = React.useState([]);
  const [search,setSearch] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL + "/api/material/search"+((search) ? "?key="+search : ""),{
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

  function handleSelect(value){
    setMaterialTitle(value);
    setSearch(value)
  }
  return (
    <>
    <Row>
        <Col md={{span:10,offset:2}}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Materials
            </h3>  
          </div> 
          <div className="panel-body">
            <DropdownButton 
                variant="primary"
                title={materialTitle}
                onSelect={handleSelect}
              >
              <Dropdown.Item eventKey="Cement">Cement</Dropdown.Item>
              <Dropdown.Item eventKey="Steel">Steel</Dropdown.Item>
              <Dropdown.Item eventKey="Bricks">Bricks</Dropdown.Item>
              <Dropdown.Item eventKey="RMC">RMC</Dropdown.Item>
              <Dropdown.Item eventKey="Tiles">Tiles</Dropdown.Item>
            </DropdownButton>
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
          </div>
          <div className="panel-footer">

          </div>
        </div>
        </Col>
    </Row>
    </>
  );
}

export default Material;
