import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";

function AddNewProducts() {
  const [validated, setValidated] = useState(false);
  const [productData, setProductData] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Creating a new product object to store in Redux state
      const newProduct = {
        id: productData.id,
        name: productData.name,
        category: productData.category,
        price: parseFloat(productData.price), // Ensure price is a number
        stock: parseInt(productData.stock), // Ensure stock is a number
        image: productData.image, // Note: This will be a File object
      };

      dispatch(addProduct(newProduct)); // Dispatching the action to Redux store

      // Resetting the form
      setProductData({
        id: null,
        name: "",
        category: "",
        price: "",
        stock: "",
        image: null,
      });
      alert("Product added successfully");
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setProductData({ ...productData, [name]: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              controlId="validationCustom01"
              className="position-relative mb-3"
            >
              <Form.Label>ID:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="number"
                placeholder="Enter product id"
                name="id"
                value={productData.id}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter product id
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="validationCustom01"
              className="position-relative mb-3"
            >
              <Form.Label>Product Name:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter product name"
                name="name"
                value={productData.name}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter product name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="validationCustom02"
              className="position-relative mb-3"
            >
              <Form.Label>Product Category:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter category"
                name="category"
                value={productData.category}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter category.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="validationCustom03"
              className="position-relative mb-3"
            >
              <Form.Label>Price:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter price"
                name="price"
                value={productData.price}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter price.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="validationCustom04"
              className="position-relative mb-3"
            >
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter stock number"
                name="stock"
                value={productData.stock}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter stock number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3 position-relative">
              <Form.Label>Upload Product Image:</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="file"
                name="image"
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please upload a product image.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddNewProducts;
