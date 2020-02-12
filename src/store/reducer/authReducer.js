import {SIGNUP_SUCCESS,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_ERROR }  from './../messages'

/*     */
 let initState = { isConnected : false,
  userMail: "",
  userUuid: "",
  message: "" }  

const authReducer = (state = initState, action) =>{
  console.log("authReducer", state, action);
     switch(action.type){
        case LOGIN_ERROR:
          console.log('login error');
          return {
            ...state,
            message: 'Login failed',
            isConnected : false,
            userMail: "",
            userUuid: ""
          }
    
        case LOGIN_SUCCESS:
          console.log('login success');
          return {
            ...state,
            message: '',
            isConnected : true,
            userUuid: action.token}
    
        case SIGNOUT_SUCCESS:
          console.log('signout success');
          return {
            ...state,
            message: '',
            isConnected : false,
            userMail: "",
            userUuid: ""};
    
        case SIGNUP_SUCCESS:
          console.log('signup success')
          return {
            ...state,
            isConnected : false,
            message: "User Created"
          }
    
        case SIGNUP_ERROR:
          console.log('signup error')
          return {
            ...state,
            isConnected : false,
            message: action.message
          }
    
        default:
          return state
        
      }
     
}


export default authReducer