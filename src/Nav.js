import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import App from './containers/App'
import Cart from './containers/Cart'

export default class NavComp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                    <Navbar bg="dark" variant="dark">
                        <Link to='/'><Navbar.Brand>Tech Trader</Navbar.Brand></Link>
                        <Link to='/my-cart'>Shopping Cart</Link>
                    </Navbar>
                    </nav>
                    <hr />

                    <Switch>
                        <Route exact path='/'>
                            <App />
                        </Route>
                        <Route path="/my-cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}