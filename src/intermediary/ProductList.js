import React from 'react';
import Product from '../components/Product'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import ProductInfo from '../components/ProductInfo';

export default class ProductList extends React.Component {

    renderProds = () => {
    return this.props.products.map((prod) => 
        this.props.display ?
        (
            <Product 
            product={prod} 
            key={prod.id} 
            addLike={this.props.addLike} 
            addReview={this.props.addReview} 
            deleteProduct={this.props.deleteProduct} 
            editProduct={this.props.editProduct} 
            addToCart={this.props.addToCart}
            show={this.props.show}
             />
         ) : (
             prod.show === true ? (
                 <ProductInfo 
                  product={prod}
                  key={prod.id}
                  addLike={this.props.addLike} 
                  addReview={this.props.addReview} 
                  deleteProduct={this.props.deleteProduct} 
                  editProduct={this.props.editProduct} 
                  addToCart={this.props.addToCart}
                  goBack={this.props.goBack}>
                 </ProductInfo>
             ) : null
         )    
        )
    }

    render() {
        return (
            <Container >
                <Form onSubmit={this.props.addProduct}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Enter Product Name'></Form.Control>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' name='description' placeholder='Enter Product Description'></Form.Control>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='text' name='image' placeholder='Enter Product Image URL'></Form.Control>
                    <br></br>
                    <Button type='submit' variant="primary">Create</Button>
                </Form>
                <Row>   
                    <Col fluid>
                <Card>                    <Form.Label>Filter by Category</Form.Label>
                    <Form.Control as="select" onChange={this.props.filter}>
                    <option></option>
                    <option>pc</option>
                    <option>mobile device</option>
                    </Form.Control>
                    <Form.Check type='checkbox' label='Sort By Price' value='price' onChange={this.props.sort}>
                    </Form.Check>
                    <Form.Check type='checkbox' label='Sort By Name' value='name' onChange={this.props.sort}>
                    </Form.Check>
                </Card>
                    </Col> 
                    <Col>
                    {this.renderProds()}
                    </Col>
                </Row>
            </Container>
        )
    }
}