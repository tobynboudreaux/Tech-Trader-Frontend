import React from 'react'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'

export default class Cart extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map((prod) => (
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={prod.image} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                        {prod.description}
                        </Card.Text>
                    
                        <Card.Link onClick={() => this.props.show(prod)}>Card Info</Card.Link>
                        <Card.Link href="#">Go To Top</Card.Link>
                    </Card.Body>
                    <Button variant='primary' onClick={() => this.props.removeFromCart(prod)}>Remove From Cart</Button>
                    <br></br><br></br>
                </Card>                
                ))}
            </div>
        )
    }
}