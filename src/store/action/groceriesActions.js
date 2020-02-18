import {GET_PRODUCTS_SUCCESS,
     GET_PRODUCTS_ERROR }  from './../messages'
import axios from "axios"

export  const  getProducts =  (uuid) =>{
   return (dispatch, getState) => {
    axios.get(`http://localhost:9000/products/?token=${uuid}`).then((data)=>{
       //console.log(data);
         if (data.data.success === true){
            dispatch({ type: GET_PRODUCTS_SUCCESS, products : [...data.data.products] });
         }
         else if (data.data.success === false) {
            dispatch({ type: GET_PRODUCTS_ERROR, products : null});
         }
        }).catch((err) => {
         dispatch({ type: 'GET_PRODUCTS_ERROR', message: err});
       })
   }
}
