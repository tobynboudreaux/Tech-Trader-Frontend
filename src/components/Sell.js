import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'

export default class Sell extends React.Component {
    render() {
        return (
            <div>
                <br></br><br></br>
                <Container >
                <Form onSubmit={this.props.addProduct}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Enter Product Name'></Form.Control>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' name='description' placeholder='Enter Product Description'></Form.Control>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='text' name='image' placeholder='Enter Product Image URL'></Form.Control>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='text' name='price' placeholder='Enter Product Price'></Form.Control>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' name='category' placeholder='Enter Product Category'></Form.Control>
                    
                    <br></br>
                    <Button type='submit' variant="primary">Create</Button>
                </Form>
                </Container>
            </div>
        )
    }
}