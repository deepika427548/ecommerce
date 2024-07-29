import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function AddProducts() {
  const [validated, setValidated] = useState(false);
  const [productData, setproductData] = useState({
    productName: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      alert("product added successfully");
      setValidated(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      setproductData({ ...productData, [name]: e.target.files[0] });
    }
    setproductData({ ...productData, [name]: value });
  };

  console.log(productData);

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              controlId="validationCustom01"
              className="position-relative"
            >
              <Form.Label>ProductName:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder=""
                name="productName"
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter product name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="position-relative"
            >
              <Form.Label>Product Category:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder=""
                name="category"
              />
              <Form.Control.Feedback type="invalid" tooltip>
                please enter category
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="position-relative"
            >
              <Form.Label>Price:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder=""
                name="price"
              />
              <Form.Control.Feedback type="invalid" tooltip>
                please enter price
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="position-relative"
            >
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                onChange={handleChange}
                required
                type="text"
                placeholder=""
                name="stock"
              />
              <Form.Control.Feedback type="invalid" tooltip>
                please enter stock number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 position-relative">
              <Form.Label>Upload product Image:</Form.Label>
              <Form.Control onChange={handleChange} type="file" name="image" />
            </Form.Group>
            <Form.Control.Feedback type="invalid" tooltip>
              please enter image path
            </Form.Control.Feedback>
            <Button type="submit">Submit form</Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default AddProducts;
