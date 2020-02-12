import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import {connect } from 'react-redux'
import {signUp} from '../store/action/authActions'
import { Redirect } from 'react-router-dom'
import './signup.css'



class SignUp extends Component {
    state = {email:"",
          password:"",
          lastName: "",
          firstName:""}

    changeHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
          
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.signUp(this.state)
    }  


    render() {
      if (this.props.auth.message ==="User Created"){
        return <Redirect to='/signup' /> 

      }
      return (
        <Container>
            <Form.Group  id ="formGriFirstName">
              <Form.Label>{this.props.auth.message}</Form.Label>
            </Form.Group>
            <Form.Group  id ="formGriFirstName">
                  <Form.Label>{this.props.auth.message}</Form.Label>
            </Form.Group>
            <Form onSubmit={this.handleSubmit} >
            <Form.Group  id ="formGriFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control input ="txt" id= "firstName" value = {this.state.firstName} onChange={this.changeHandler} placeholder="First Name" autoComplete="new-password" pattern=".{1,30}" required title="1 to 30 chars"   />
                </Form.Group>
            <Form.Group  id="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control input="txt" id= "lastName" value = {this.state.lastName} onChange={this.changeHandler} placeholder="Last Name" autoComplete="new-password" pattern=".{1,30}" required title="1 to 30 chars"   />
                </Form.Group>
            <Form.Group  id="formGridEmail">
                <Form.Label>Email</Form.Label>     
                <Form.Control type="email" id= "email" value = {this.state.email} onChange={this.changeHandler} autoComplete="username" placeholder="Enter email" />
            </Form.Group>
            <Form.Group  id="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" id= "password" value = {this.state.password} onChange={this.changeHandler} placeholder="Password" autoComplete="new-password" pattern=".{6,30}" required title="6 to 30 chars"   />
            </Form.Group>
                
            <input type="submit" variant="primary" value="Submit" />                   
        </Form>
        </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (user) => dispatch(signUp(user))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)