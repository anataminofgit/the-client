import {    GET_PRODUCTS_SUCCESS,
            GET_PRODUCTS_ERROR,
// when no data ???
 }  from './../messages'

const initState = {products : [],
                  currentProduct: null}


const groceriesReducer = (state = initState, action) =>{
   // console.log("groceriesReducer", state, action);
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
          console.log('GET_PRODUCTS_SUCCESS');
          return {
            ...state,
            message: 'success',
            products : action.products,
            currentProduct: null
           
          }
    
        case GET_PRODUCTS_ERROR:
          console.log('GET_PRODUCTS_ERROR');
          return {
            ...state,
            message: 'getProducts failed',
            products : null,
            currentProduct: null,
        }
        default:
          return state
        
      }
     
}

export default groceriesReducer