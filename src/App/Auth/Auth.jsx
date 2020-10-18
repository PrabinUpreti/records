import React from 'react'
import firebase from 'firebase'
// import { Customers } from "./DatabaseServices";
import {useHistory,useLocation,Route,Redirect} from 'react-router-dom';

export let userDetails = {};

export const ProtectedRoute =({children, ...rest})=>{
    let history = useHistory();
    let location = useLocation();  
    console.log("from auth "+userDetails.authStatus);
  
    let data = {...rest};
    let d = data.location;
    return(
    <Route
        {...rest}
        render={({location}) =>
        userDetails.authStatus ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />);
  }



const firebaseConfig = {
    apiKey: "AIzaSyBN_cVg8NTIu9oh65X6rH0Dj9RJ_XnkRJo",
    authDomain: "record-9b7d0.firebaseapp.com",
    databaseURL: "https://record-9b7d0.firebaseio.com",
    projectId: "record-9b7d0",
    storageBucket: "record-9b7d0.appspot.com",
    messagingSenderId: "312446697721",
    appId: "1:312446697721:web:fc681708ea25e336eaa228",
    measurementId: "G-Q6X0F0EGXZ"
  };

  export const fb = firebase.initializeApp(firebaseConfig);

  export const authCheck = (callback)=>{firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      userDetails = {...user,authStatus:true}
        callback(user)
    } else {
      userDetails = {...user,authStatus:false}
      callback(user)
    }
  })}

  export const SignUp = (email,password,callback)=>{
      
    firebase.auth().createUserWithEmailAndPassword(email,password).then(console.log("Signup Sucessufully") && callback(true)).catch(console.log("Signup Sucessufully") && callback(false))

}

export const LogOut = (callback)=>{
  firebase.auth().signOut().then(function() {
    userDetails = {...userDetails,authStatus:false}
    callback("Sign-out successful.")
  }).catch(function(error) {    callback(error)

  });
}

export const SignIn = (email,password,callback) =>{firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
 
  callback(error.message)
});
}



// export default function myAuth() {
//     return (
//         <div>
            
//         </div>
//     )
// }
