import React from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'

export default class Sell extends React.Component {

  

     state = {
        name: '',
        description: '',
        image: '',
        price: '',
        category: '',
    }


    populate = (e) => {
        this.setState({
            name: e.currentTarget.name.value,
            description: e.currentTarget.description.value,
            image: e.currentTarget.image.value,
            price: e.currentTarget.price.value,
            category: e.currentTarget.category.value,
        })
    }

    render() {
        return (
            <div className='text-center'>
                <div className='productCard'>
                <Card border='light' className='text-center' style={{ width: '20rem', margin: 'auto' }}>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        <Card.Img variant='top' style={{ objectFit: 'scale-down', height: 'auto', width: 'auto', maxHeight: 200, maxWidth: 300 }} src={this.state.image} />
                        <br></br><br></br>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>

                        <br></br>
                    <Button >Like</Button>
                    <Card.Text >${this.state.price}</Card.Text>
                    <Button variant='primary'>Add To Cart</Button>
                    </Card.Body>
                    
                </Card>
                <br></br><br></br>
                <Container >
                <Form onSubmit={this.props.addProduct} onChange={this.populate} >
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
            </div>
        )
    }
}