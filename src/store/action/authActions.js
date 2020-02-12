import {sendSignUp, sendSignIn} from '../../Messages/auth'
import {SIGNUP_SUCCESS,
   LOGIN_SUCCESS,
   SIGNOUT_SUCCESS,
   SIGNUP_ERROR,
   LOGIN_ERROR }  from './../messages'

export const signUp = (newUser) =>{
   return (dispatch, getState) => {
//      console.log ("dispatch - signUp")

      sendSignUp(newUser).then((data, err) =>{
         if (data.success === true){
            dispatch({ type: SIGNUP_SUCCESS,message : "user created" });
         }
         else if (data.success === false) {
            dispatch({ type: SIGNUP_ERROR, message :data.message});
         }
       }).catch((err) => {
         dispatch({ type: 'SIGNUP_ERROR', message: err});
       })
   }
}
export const signIn = (user) =>{
    //  console.log ("signUp",user);
      return (dispatch, getState) => {
    //     console.log ("dispatch - signUp")
   
         sendSignIn(user).then((data, err) =>{
            if (data.success === true){
               dispatch({ type: LOGIN_SUCCESS,message : "user logedIn", token: data.token });
            }
            else if (data.success === false) {
               dispatch({ type: LOGIN_ERROR, message :data.message});
            }
          }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, message: err});
          })
      }
   
}

export const signOut = () =>{
  // console.log(SIGNOUT_SUCCESS)
   return (dispatch, getState) => {
      dispatch({ type: SIGNOUT_SUCCESS, message: "logout"})
      }
}