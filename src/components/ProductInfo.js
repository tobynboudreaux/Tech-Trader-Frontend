import React from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default class ProductInfo extends React.Component {
    render() {
        const product = this.props.product
        return (
            <div>
                <Card>
                <h1>{product.name}</h1>
                <Card.Img variant="top" src={product.image} />
                <ListGroupItem>Likes: {product.likes.length}</ListGroupItem>
                        {product.reviews.map((rev) => (
                            <ListGroup className="list-group" key={rev.id}>
                            <ListGroupItem key={rev.id}>Rating: {rev.rating}</ListGroupItem>
                            <ListGroupItem>{rev.text}</ListGroupItem>
                            </ListGroup>
                        ))}                                            
                        <Form onSubmit={(e) => {
                            e.preventDefault(); 
                            this.props.addReview(product, e)
                        }}>
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
                    <ListGroup className="list-group-flush">
                    </ListGroup>
                    <Card.Body>
                      
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
                    <Button onClick={() => this.props.goBack(product)}>Go Back</Button> 
                    <Button variant='primary' onClick={() => this.props.deleteProduct(product)}>DELETE</Button>
                    </Card>
            </div>
        )
    }
}