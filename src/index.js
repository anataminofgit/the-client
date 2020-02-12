import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
//import initStore from "./store/reducer/initStorage"

//import rootReducer from './store/reducer/rootReducer';
import {Provider} from 'react-redux';
//import thunk from 'redux-thunk';

import {initStore} from  "./store/reducer/initStorage"

//const store = createStore(rootReducer, applyMiddleware(thunk) );
//ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store ={initStore()}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.unregister();
