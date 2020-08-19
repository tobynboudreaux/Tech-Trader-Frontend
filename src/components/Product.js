import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'

export default class Product extends React.Component {
    render() {
        const product =  this.props.product
        return (
            
            <div className='productCard'>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                    
                        <Card.Link onClick={() => this.props.show(product)}>Card Info</Card.Link>
                        <Card.Link href="#">Go To Top</Card.Link>
                    </Card.Body>
                    <Button onClick={() => this.props.addLike(product)} >Like</Button>
                    <Button variant='primary' onClick={() => this.props.addToCart(product)}>Add To Cart</Button>
                    <br></br><br></br>
                </Card>
            </div>
        )
    }
}