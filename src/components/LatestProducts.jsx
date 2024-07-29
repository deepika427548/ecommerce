import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";

const LatestProducts = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch initial data once if necessary
    // If you're adding products dynamically, you might want to remove this fetch
    fetch("./product.json")
      .then((response) => response.json())
      .then((data) => dispatch(getProduct(data.products)));
  }, [dispatch]);

  return (
    <>
      <Row className="my-3">
        <Col>
          <h1>Latest Products</h1>
        </Col>
      </Row>
      <Row>
        {products.length > 0 ? (
          products.map((item, index) => (
            <SingleProduct key={item.id} product={item} />
          ))
        ) : (
          <Col>No products available</Col>
        )}
      </Row>
    </>
  );
};

export default LatestProducts;
