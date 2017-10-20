import 'materialize-css/dist/css/materialize.min.css';
import './app.css';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './home';
import Signup from './signup';
import Nav from './nav';
import Signin from './signin';
import { connect } from 'react-redux';
import { jwtSignin } from '../actions';


class App extends Component {

    componentWillMount() {
        if(localStorage.token) {
            this.props.jwtSignin()
        }
    }

    render() {
        return (
            <div className='container'>
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/signin' component={Signin}/>
        </div>
        )
    }
};

export default withRouter(connect(null, { jwtSignin })(App));
