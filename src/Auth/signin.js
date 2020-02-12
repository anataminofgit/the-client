import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import  {signIn} from '../store/action/authActions'
import { Redirect } from 'react-router-dom'
import './signin.css'

class SignIn extends Component {
    state = {email:"",
          password:""}

    changeHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
          
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.signIn(this.state)
        this.setState( {email:"",
                        password:""})
    }  


    render() {

      if (this.props.auth.userUuid !== ""){
          return <Redirect to='/' /> 
      }  
      return (
         <Container>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group  id ="formGriFirstName">
              <Form.Label>{this.props.auth.message}</Form.Label>
            </Form.Group>
              <Form.Group  id ="formGridEmail">
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
      signIn: (user) => dispatch(signIn(user))
    }
  }  

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
