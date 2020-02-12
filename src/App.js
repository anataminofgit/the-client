import React from 'react';
import './App.css';
import { BrowserRouter, Switch , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "../src/layout/AppNavbar"
import SignIn from './Auth/signin'
import SignUp from './Auth/signup'
import Groceries from './groceries/groceries'


function App() {


  return (
        <BrowserRouter>
        <div className="App">
        < AppNavbar></AppNavbar>
          <Switch>
            <Route path="/signup" component= {SignUp}/>
            <Route path="/signin" component= {SignIn}/>
            <Route path="/grecories" component= {Groceries}/>
          </Switch>
        </div>
      </BrowserRouter>
      );
  }

export default App;
