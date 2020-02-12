

import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  {signOut} from '../store/action/authActions'
import { connect } from 'react-redux'

import Nav from 'react-bootstrap/Nav'
/* import {NavLink} from 'react-router-dom'
const SigninLinks =(props) => {
  return(
    <nav >
      <NavLink to ="/grecories">Products</NavLink>
      <NavLink to  ="/pricing">Pricing</NavLink>
   
    <Form inline>
      <Button variant="outline-info"  onClick={props.signOut} >Logout</Button>
    </Form>
    </nav>   
  )
} */

 const SigninLinks =(props) => {
  return(
    <Nav >
      <Nav.Link href ="/grecories">Products</Nav.Link>
      <Nav.Link href  ="/pricing">Pricing</Nav.Link>
   
    <Form inline>
      <Button variant="outline-info"  onClick={props.signOut} >Logout</Button>
    </Form>
    </Nav>   
  )
}



const mapDispatchToProps = (dispatch)=> {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)(SigninLinks);
