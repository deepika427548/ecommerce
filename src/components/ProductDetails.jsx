import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.products.data);
  const { id } = useParams();

  const getProductDetails = async () => {
    // const res = await axios.get("/product.json");
    // const products = res.data.products;
    const currentProd = products.find((prod) => prod.id === Number(id));
    setProduct(currentProd);
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          {/* {product &&
            product.image && ( // Conditional rendering for the image
              <img src={product.image} alt="" style={{ width: "100%" }} />
            )} */}
          <img src={product?.image} alt="" style={{ width: "100%" }} />
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <h2>{product?.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{product?.brand}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Pice:{product?.price}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{product?.description}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
