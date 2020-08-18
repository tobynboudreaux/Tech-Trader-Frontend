import React from 'react';
import './App.css';
import ProductList from './ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
const url = 'http://localhost:3000/products'

export default class App extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({ products: json }))
  }

  addProduct(event) {
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: event.target.name.value,
        description: event.target.description.value,
        image: event.target.image.value
      })
    })
  }

  deleteProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE"
    })
  }

  editProduct(product, event) {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: event.target.name.value,
        description: event.target.description.value,
        image: event.target.image.value
      })
    })
  }

  addLike(product) {
    fetch(`http://localhost:3000/likes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        product_id: product.id
      })
   })
  }

  addReview(product, event) {
    fetch(`http://localhost:3000/reviews`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        text: event.target.text.value,
        rating: event.target.rating.value,
        product_id: product.id
      })
    })
  }

  render() {
  return (
    <div className="App">
      <ProductList products={this.state.products} addProduct={this.addProduct} addLike={this.addLike} addReview={this.addReview} deleteProduct={this.deleteProduct} editProduct={this.editProduct}/>
    </div>
  );
  }
}