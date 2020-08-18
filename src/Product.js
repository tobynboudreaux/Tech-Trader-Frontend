import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

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
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <button onClick={() => this.props.addLike(product)} >Like</button>
                    <ListGroupItem>Likes: {product.likes.length}</ListGroupItem>
                        {product.reviews.map((rev) => (
                            <ListGroup className="list-group" key={rev.id}>
                            <ListGroupItem key={rev.id}>Rating: {rev.rating}</ListGroupItem>
                            <ListGroupItem>{rev.text}</ListGroupItem>
                            </ListGroup>
                        ))}                                            
                        <form onSubmit={(e) => this.props.addReview(product, e)}>
                            Text: <input type='text' name='text'></input>
                            Rating: <input type='number' name='rating'></input>
                            Submit: <input type='submit' value='Create'></input>
                        </form>
                        
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            this.props.editProduct(product, e)}}>
                            Name: <input type='text' name='name'></input>
                            Description: <input type='text' name='description'></input>
                            Image: <input type='text' name='image'></input>
                            Submit: <input type='submit' value='Submit'></input>
                        </form>
                    </Card.Body>
                    <button onClick={() => this.props.deleteProduct(product)}>DELETE</button>
                </Card>
            </div>
        )
    }
}