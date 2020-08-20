import React from 'react'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'

export default class Cart extends React.Component {

    totalPrice = (total, num) => {
        return total + num
        
    }

    render() {
        let total
        const prices = this.props.products.map(prod => {return prod.price})
        prices.length > 0 ? total = prices.reduce(this.totalPrice) : total = null
        console.log(total)
        return (
            <div >
                <br></br><br></br>
                <h1>Cart Total: {total}</h1>
                <br></br><br></br>
                {this.props.products.map((prod) => (
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={prod.image} />
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
                
            </div>
        )
    }
}