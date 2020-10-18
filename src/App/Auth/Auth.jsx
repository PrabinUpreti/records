import React from 'react'
import firebase from 'firebase'
// import { Customers } from "./DatabaseServices";



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
        callback(user)
    } else {
      callback(user)
    }
  })}

  export const SignUp = (email,password,callback)=>{
      
    firebase.auth().createUserWithEmailAndPassword(email,password).then(console.log("Signup Sucessufully") && callback(true)).catch(console.log("Signup Sucessufully") && callback(false))

}

export const LogOut = (callback)=>{
  firebase.auth().signOut().then(function() {
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
