import React from 'react';
import Product from './Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class ProductList extends React.Component {
    render() {
        return (
            <Container >
                <form onSubmit={this.props.addProduct}>
                    Name: <input type='text' name='name'></input>
                    Description: <input type='text' name='description'></input>
                    Image: <input type='text' name='image'></input>
                    Submit: <input type='submit' value='Create'></input>
                </form>
                <Row>   
                    <Col fluid>
                    Catagories 
                    </Col> 
                    <Col>
                    {this.props.products.map((product) => (
                       <Product product={product} key={product.id} addLike={this.props.addLike} addReview={this.props.addReview} deleteProduct={this.props.deleteProduct} editProduct={this.props.editProduct} />
                    ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}