//import React from 'react';
import React, { Component } from 'react'

//import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {NavLink} from 'react-router-dom'
import SignOutLinks from './signout-links'
import SignInLinks from './signin-links'
import { connect } from 'react-redux'
//import Container from 'react-bootstrap/Container'

class AppNavbar extends Component {
render(){
  const links = this.props.auth.userUuid === "" ?<SignOutLinks></SignOutLinks> : <SignInLinks></SignInLinks>

  return(  
  <div>
    <Navbar className="mr-auto" bg="dark" variant="dark">
      <Navbar.Brand href="/">The-app</Navbar.Brand>
        <Nav >
          {links}
        </Nav>
      </Navbar>
      </div>);

}
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
} 


export default connect(mapStateToProps, null)(AppNavbar);
