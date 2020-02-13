import authReducer from './authReducer'
import groceriesReducer from './groceriesReducer'
import {combineReducers} from 'redux'

const rootReducer =  combineReducers({
    auth :authReducer,
    groceries: groceriesReducer
})

export default rootReducer