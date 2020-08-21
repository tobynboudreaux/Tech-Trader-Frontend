import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import App from './containers/App'
import Cart from './containers/Cart'
import Sell from './components/Sell'
import Profile from './components/Profile'
import {Form, FormControl, Nav, Dropdown, DropdownButton, Jumbotron, Container} from 'react-bootstrap'
const url = 'http://localhost:3000/products'


export default class NavComp extends React.Component {

    state = {
        products: [],
        display: true,
        input: '',
        category: '',
        sort: '',
        cart: []
      }
    
      componentDidMount() {
        fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({ products: json }))
        fetch('http://localhost:3000/api')
        .then(resp => resp.json())
        .then(json => console.log(json))
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
            image: event.target.image.value,
            price: event.target.price.value,
            category: event.target.category.value
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
        if (!this.state.cart.includes(product)) {
          this.setState({ cart: [...this.state.cart, product] })
        }
      }

      removeFromCart = (product) => {
        const array = this.state.cart
        const index = array.indexOf(product)
        if (index > -1) {
          this.setState({ array: array.splice(index, 1) })
        }
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

      sort = event => {
        if (event.target.value === 'price') {
          this.setState({ sort: 'price' })
        } if (event.target.value === 'name') {
          this.setState({ sort: 'name' })
        } if (event.target.value === 'likes') {
          this.setState({ sort: 'likes' })
        } else {
          return null
        }
      }

      sortProd = (a, b) => {
        if (this.state.sort === 'price') {
          return a.price - b.price
        } if (this.state.sort === 'name') {
          return a.name.localeCompare(b.name)
        } if (this.state.sort === 'likes') {
          return b.likes.length - a.likes.length
        }
      }

      checkout = () => {
        this.setState({ cart: [] })
      }

    render() {
        const prod = this.state.products.filter((prod) => (
            prod.name.toLowerCase().includes(this.state.input.toLowerCase())
            ||
            prod.category.toLowerCase().includes(this.state.input.toLowerCase())
        ))
        return (
            <Router>
                <div>
                    <nav>
                    <Jumbotron fluid>
                      <Container>
                        <h1>Tech Trader</h1>
                        <p>
                          Tech for trade and trade for Tech
                        </p>
                      </Container>
                    </Jumbotron>
                    <Navbar bg="dark" variant="dark" fixed='top'>
                        <Link to='/'><Navbar.Brand>Tech Trader</Navbar.Brand></Link>
                        <Nav className='ml-auto'>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" value={this.state.input} onChange={this.search} className="mr-sm-2" />
                          
                            <DropdownButton id="dropdown-item-button" title="" navbar='true' drop='left'>
                              <Dropdown.ItemText>Welcome User</Dropdown.ItemText>
                              <Link to='/profile'>Profile</Link>
                              <br></br>
                              <Link to='/my-cart'>MyCart</Link>
                              <br></br>
                              <Link to='/sell'>Sell Something</Link>
                            </DropdownButton>
                        </Form>
                        </Nav>
                    </Navbar>
                    </nav>
                    <hr />

                    <Switch>
                        <Route exact path='/'>
                            
                            <App 
                            products={prod
                              .filter(pr => this.state.category !== '' ? pr.category === this.state.category : prod)
                              .sort((a, b) => this.sortProd(a, b))
                            } 
                            display={this.state.display} 
                            show={this.setDisplay} 
                            goBack={this.goBack} 
                            addProduct={this.addProduct} 
                            addLike={this.addLike} 
                            addReview={this.addReview} 
                            deleteProduct={this.deleteProduct} 
                            editProduct={this.editProduct} 
                            addToCart={this.addToCart}
                            filter={this.filter}
                            sort={this.sort}
                            />

                        </Route>
                        <Route path="/my-cart">
                            <Cart 
                            products={this.state.cart}
                            removeFromCart={this.removeFromCart}
                            checkout={this.checkout}
                            />
                        </Route>
                        <Route path='/profile'>
                          <Profile />
                        </Route>
                        <Route path='/sell'>
                          <Sell addProduct={this.addProduct}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}