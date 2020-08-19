import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'

export default class Product extends React.Component {
    render() {
        const product =  this.props.product
        return (
            
            <div className='productCard'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                    
                        <Card.Link onClick={() => this.props.show(product)}>Card Info</Card.Link>
                        <Card.Link href="#">Go To Top</Card.Link>
                        <br></br><br></br>
                    <Button onClick={() => this.props.addLike(product)} >Like</Button>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant='primary' onClick={() => this.props.addToCart(product)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
                <br></br><br></br>
            </div>
        )
    }
}