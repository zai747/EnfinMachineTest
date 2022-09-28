import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListProduct() {
    const [Product, setProduct] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
     axios.get(`http://localhost:8000/product/list`).then((val) =>
    {
        console.log(val.data);
      setProduct(val.data)
      
    })
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    
    const ConfirmDelete = async (id) => {
        await axios
          .post(`http://localhost:8000/product/delete/${id}`)
          .then((res) => {
            console.log(res);
          });
          handleShow()
    };
  return (
    <div>
        {
            Product.map((item) => {
                return(
                    <div>
                    <div>

                    
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this data</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="danger" onClick={() =>  ConfirmDelete(item.ProductID)}>
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                    </div>
                    <div>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{item.ProductName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Price : {item.Price}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Product ID : {item.ProductID}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Status : {item.Status}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Expiry Date : {item.ExpiryDate.substring(0,10)}</Card.Subtitle>

                      <Link to={`edit/${item.ProductID}`}><Button >Edit</Button></Link>
                      <Button variant="danger"  onClick={() => setShow(true)}>
                        Delete
                        </Button>
                    </Card.Body>
                  </Card>
                    </div>
                     </div>
                )
            })
        }
    </div>
  )
}

export default ListProduct