import React, { useState } from 'react';
// react-bootstrap components
import {
  Card,
  Row,
  Col,
  Figure,
} from "react-bootstrap";

function ProductCard({product}) {

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  console.log(product);
  return (
    <>
        <Card 
            className="card-stats"
            className={hovered ? 'shadow bg-white rounded' : ''}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            <Card.Body className="pt-0">
                <Row>
                <Col xs="12" className="p-1">
                <Figure>
                    <Figure.Image
                        width={300}
                        height={150}
                        alt="cement"
                        src={product.img}
                    />
                    <Figure.Caption className="text-center">
                        {product.name}
                    </Figure.Caption>
                </Figure>
                </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <div className="numbers text-center">
                            <Card.Title as="h4">{product.price}</Card.Title>
                        </div>
                    </Col>
                </Row>
                <p className="card-category text-center">{product.disc}</p>
            </Card.Body>
            <Card.Footer>
                <hr></hr>
                <div className="stats">
                    <p className="font-weight-normal  text-center">
                        Vendor :  {product.vendor.name}
                    </p>
                </div>
            </Card.Footer>
        </Card>
    </>
  );
}

export default ProductCard;
