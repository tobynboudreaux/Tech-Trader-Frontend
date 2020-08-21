import React from 'react'
import { Accordion, Card, Form, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default class ProductInfo extends React.Component {


    render() {
        const product = this.props.product
        return (
        <div className='text-center'>
            <div className='product-card'>
                <Card className='text-center' style={{ width: '70rem' }}>
                <h1>{product.name}</h1>
                <Card.Img variant="top" style={{ objectFit: 'scale-down', height: 'auto', width: 'auto', maxHeight: 200, maxWidth: 300 }} src={product.image} />
                <br></br><br></br>
                <Card.Text>{product.description}</Card.Text>
                <ListGroupItem>Likes: {product.likes.length}</ListGroupItem>
                        {product.reviews.map((rev) => (
                            <ListGroup className="list-group" key={rev.id}>
                            <ListGroupItem key={rev.id}>Rating: {rev.rating}</ListGroupItem>
                            <ListGroupItem>{rev.text}</ListGroupItem>
                            </ListGroup>
                        ))}  
                    <Accordion>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Leave a Review!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey='0'>                                          
                        <Form onSubmit={(e) => {
                            e.preventDefault(); 
                            let revi = {
                                'rating': e.target.rating.value,
                                'text': e.target.text.value
                            }
                            product.reviews.push(revi)
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
                        </Accordion.Collapse>
                    </Accordion>
                    <ListGroup className="list-group-flush">
                    </ListGroup>
                    <Accordion>
                        <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                            Edit Product Info
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>
                        
                                <Form onSubmit={(e) => {
                                    e.preventDefault()
                                    this.props.editProduct(product, e)}}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name='name' placeholder='Enter New Product Name'></Form.Control>
                                    <Form.Label>Description</Form.Label> 
                                    <Form.Control type='text' name='description' placeholder='Enter New Product Description'></Form.Control>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type='text' name='image' placeholder='Enter New Product Image Url'></Form.Control>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type='text' name='price' placeholder='Enter New Product Price'></Form.Control>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type='text' name='category' placeholder='Enter New Product Category'></Form.Control>
                                    
                                    <Button type='submit' variant='primary'>Edit</Button>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    
                    <Button onClick={() => this.props.goBack(product)}>Go Back</Button> 
                    <Button variant='primary' onClick={() => this.props.deleteProduct(product)}>DELETE</Button>
                    </Card>
            </div>
        </div>
        )
    }
}