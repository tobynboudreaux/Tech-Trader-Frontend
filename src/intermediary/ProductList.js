import React from 'react';
import Product from '../components/Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
            show={this.props.show} />
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
                    Catagories 
                    </Col> 
                    <Col>
                    {this.renderProds()}
                    </Col>
                </Row>
            </Container>
        )
    }
}