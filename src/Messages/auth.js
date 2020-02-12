import axios from 'axios'


export const sendSignUp = function(newUser){
  const {email, password, firstName, lastName} = newUser;
  return new Promise((resolve, reject) =>{
    axios.post('http://localhost:9000/users', {email, password, firstName, lastName}).then((res) => {
      console.log("POST http://localhost:9000/users", res);
      return resolve({success :true, 
                        status: 201,
                        message: "User Created",
                        } );
       }).catch((err) => {
            if (err.response) {
              console.log("AXIOS ERROR: ", err.response);
              return resolve({success :false, 
                            status: err.response.status,
                            message: err.response.data.message})
            }
            else
              return reject(err)
            })
  })
}
export const sendSignIn = function(newUser){
  const {email, password} = newUser;
  return new Promise((resolve, reject) =>{
    axios.post('http://localhost:9000/authenticate', {email, password}).then((res) => {
      console.log("POST http://localhost:9000/authenticate", res);
      return resolve({success :true, 
                        status: 200,
                        message: "User Created",
                        token : res.data.token,
                        } );
       }).catch((err) => {
            if (err.response) {
              console.log("AXIOS ERROR: ", err.response);
              return resolve({success :false, 
                            status: err.response.status,
                            message: err.response.data.message})
            }
            else
              return reject(err)
            })
  })
}