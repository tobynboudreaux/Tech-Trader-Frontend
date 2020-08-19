import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from 'react-bootstrap/Form'
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
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <Button onClick={() => this.props.addLike(product)} >Like</Button>
                    <ListGroupItem>Likes: {product.likes.length}</ListGroupItem>
                        {product.reviews.map((rev) => (
                            <ListGroup className="list-group" key={rev.id}>
                            <ListGroupItem key={rev.id}>Rating: {rev.rating}</ListGroupItem>
                            <ListGroupItem>{rev.text}</ListGroupItem>
                            </ListGroup>
                        ))}                                            
                        <Form onSubmit={(e) => this.props.addReview(product, e)}>
                            <Form.Label>Text</Form.Label>
                            <Form.Control type='text' name='text'></Form.Control>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" name='rating'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <br></br>
                            <Button type='submit' variant='primary'>Rate</Button>
                        </Form>
                        
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            this.props.editProduct(product, e)}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' name='name'></Form.Control>
                            <Form.Label>Description</Form.Label> 
                            <Form.Control type='text' name='description'></Form.Control>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type='text' name='image'></Form.Control>
                            <Button type='submit' variant='primary'>Edit</Button>
                        </Form>
                    </Card.Body>
                    <Button variant='primary' onClick={() => this.props.deleteProduct(product)}>DELETE</Button>
                    <br></br><br></br>
                </Card>
            </div>
        )
    }
}