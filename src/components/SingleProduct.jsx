import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <Col md={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link
            className="btn btn-primary"
            to={`/product/${product.id}`}
            variant="primary"
          >
            View Product
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProduct;
