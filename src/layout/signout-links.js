

import React from 'react';
import Nav from 'react-bootstrap/Nav'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {NavLink} from 'react-router-dom'

const SignOutLinks =() => {
return(
    <Nav>
    <Nav.Link href ="/signin">SignIn</Nav.Link>
    <Nav.Link href ="/signup">SignUp</Nav.Link>
    </Nav>
)
}
export default SignOutLinks;
