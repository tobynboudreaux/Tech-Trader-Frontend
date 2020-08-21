import React, {useState} from 'react'
import {Card, Button, Col, Row, Container, ListGroup, ListGroupItem, Modal} from 'react-bootstrap';

function Cart(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const totalPrice = (total, num) => {
        return total + num
    }

    let total
    const prices = props.products.map(prod => {return prod.price})
    prices.length > 0 ? total = prices.reduce(totalPrice) : total = null
    let taxes = total * .07
    taxes = Math.round(taxes * 100) / 100
    let cartTotal = total + taxes

        return (
            <div >
                <Container>
                <Row>
                    <Col>
                    <br></br><br></br>
                
                {props.products.map((prod) => (
                    <Card style={{ display: 'flex', flexDirection: 'row', width: '40rem' }}>
                    <Card.Img variant="top" style={{ objectFit: 'scale-down', height: 'auto', width: 'auto', maxHeight: 200, maxWidth: 300 }} src={prod.image} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                        {prod.description}
                        </Card.Text>
            
                        <Card.Text>
                            ${prod.price}
                        </Card.Text>
                    </Card.Body>
                    <Button variant='primary' onClick={() => props.removeFromCart(prod)}>Remove From Cart</Button>
                    <br></br><br></br>
                </Card>       
                ))}
                    </Col>
                    <Col>
                    <br></br><br></br>
                    <Card>
                    <Card.Body>
                        <Card.Text>Summary: </Card.Text>
                        <ListGroup className="list-group">
                        <ListGroupItem>Total: ${total}</ListGroupItem>
                            <ListGroupItem>Taxes: ${taxes}</ListGroupItem>
                            </ListGroup>
                            <br></br>
                        <Card.Text>Cart Total: ${cartTotal}</Card.Text>
                        <br></br><br></br>

                        
                        <Button 
                        onClick={() => {
                            handleShow();
                        }}>
                            Checkout
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Thank you for your purchase!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>The total of ${cartTotal} will be subtracted from your TechTrader
                                balance. The following items: </p> 
                                
                                {props.products.map(item1 => (
                                    <b><p>{item1.name} </p></b> ) )} 
                                    
                                    will be shipped to you! 
                                <br></br><br></br>
                                <strong>
                                We look forward to doing business with you in the future!
                                </strong>
                             </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={() => {
                                handleClose();
                                props.checkout();
                                }}>
                                Thanks!
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            </Modal.Footer>
                        </Modal>


                    </Card.Body>
                    </Card>
                 
                    </Col>
                </Row>
                </Container>
            </div>
        )
    
}

export default Cart