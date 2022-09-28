import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function AddProduct() {
  const [input, setinput] = useState({
    ProductName: "",
    ProductID: "",
    ExpiryDate: "",
    Price: "",
    Status: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setinput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = async () => {
      await axios
        .post(`http://localhost:8000/product/add`, {
          input: input,
        })
        .then((res) => {
          console.log(res);
        });
  };
  return (
    <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" name='ProductName' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product id</Form.Label>
        <Form.Control type="text" placeholder="Enter Product ID" name='ProductID' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expiry  Date</Form.Label>
        <Form.Control type="date"  name='ExpiryDate' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" name='Price' onChange={handleChange} />
      </Form.Group>
      <Form.Select aria-label="Default select example" name='Status'onChange={handleChange}>
    <option>Select Status</option>
    <option value="InStock">In-Stock</option>
    <option value="OutOfStock">Out of Stock</option>
  </Form.Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddProduct