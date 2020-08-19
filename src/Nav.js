import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import App from './containers/App'
import Cart from './containers/Cart'
import {Form, FormControl, Button, Nav} from 'react-bootstrap'
const url = 'http://localhost:3000/products'


export default class NavComp extends React.Component {

    state = {
        products: [],
        display: true,
        input: '',
        category: '',
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
        .then(resp => resp.json)
        .then(rev => product.reviews.push(rev))
      }
    
      addToCart = (product) => {
        const prods = this.state.products.map((prod) => {
          const newProd = {...prod}
          if(newProd.id === product.id) {
            newProd.added = true
          }
          return newProd
        })
        return this.setState({ products: prods })
      }

      removeFromCart = (product) => {
        const prods = this.state.products.map((prod) => {
          const newProd = {...prod}
          if(newProd.id === product.id) {
            newProd.added = false
          }
          return newProd
        })
        return this.setState({ products: prods })
      }
    
      setDisplay = (product) => {
        this.setState({
          display: false
        })
        product.show = true
      }
    
      goBack = (product) => {
        this.setState({ 
          display: true
        })
        product.show = false
      }

      search = event => {
          this.setState({ input: event.target.value })
      }

      filter = event => {
          this.setState({ category: event.target.value })
      }

    render() {
        const prod = this.state.products.filter((prod) => (
            prod.name.toLowerCase().includes(this.state.input.toLowerCase())
        ))
        return (
            <Router>
                <div>
                    <nav>
                    <Navbar bg="dark" variant="dark" fixed='top'>
                        <Link to='/'><Navbar.Brand>Tech Trader</Navbar.Brand></Link>
                        <Link to='/my-cart'>Shopping Cart</Link>
                        <Nav className='ml-auto'>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" value={this.state.input} onChange={this.search} className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Nav>
                    </Navbar>
                    </nav>
                    <hr />

                    <Switch>
                        <Route exact path='/'>
                            
                            <App 
                            products={prod.filter(pr => this.state.category !== '' ? pr.category === this.state.category : prod)} 
                            display={this.state.display} 
                            show={this.setDisplay} 
                            goBack={this.goBack} 
                            addProduct={this.addProduct} 
                            addLike={this.addLike} 
                            addReview={this.addReview} 
                            deleteProduct={this.deleteProduct} 
                            editProduct={this.editProduct} 
                            addToCart={this.addToCart}
                             />

                        </Route>
                        <Route path="/my-cart">
                            <Cart 
                            products={this.state.products.filter(prod => prod.added)}
                            removeFromCart={this.removeFromCart}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}