import React from 'react';
import ProductList from '../intermediary/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export default class App extends React.Component {

  render() {
  return (
    <div className="App">
      <ProductList 
      products={this.props.products} 
      display={this.props.display} 
      show={this.props.show} 
      goBack={this.props.goBack} 
      addProduct={this.props.addProduct} 
      addLike={this.props.addLike} 
      addReview={this.props.addReview} 
      deleteProduct={this.props.deleteProduct} 
      editProduct={this.props.editProduct} 
      addToCart={this.props.addToCart}
      filter={this.props.filter} 
      sort={this.props.sort} />
    </div>
  );
  }
}