import React from 'react'
import {Card, Button, Col, Row, Container, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Cart extends React.Component {

    totalPrice = (total, num) => {
        return total + num
        
    }

    render() {
        let total
        const prices = this.props.products.map(prod => {return prod.price})
        prices.length > 0 ? total = prices.reduce(this.totalPrice) : total = null
        let taxes = total * .07
        taxes = Math.round(taxes * 100) / 100
        let cartTotal = total + taxes
        return (
            <div >
                <Container>
                <Row>
                    <Col>
                    <br></br><br></br>
                
                {this.props.products.map((prod) => (
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
                    <Button variant='primary' onClick={() => this.props.removeFromCart(prod)}>Remove From Cart</Button>
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
                        <Button onClick={this.props.checkout}>Checkout</Button>
                    </Card.Body>
                    </Card>
                 
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}