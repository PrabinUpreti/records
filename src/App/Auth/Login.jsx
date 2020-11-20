import React from 'react'
import { useState } from 'react';
import "./Auth.css"
import { authCheck, SignUp, SignIn } from './Auth'
import LoginComponent from "./LoginComponent"
import SignupComponent from "./SignupComponent"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
    Link
} from "react-router-dom";
import { useEffect } from 'react';


export default function Login() {
    let history = useHistory();
    let location = useLocation();

    const [credentials, setCredentials] = useState({

        username: '',
        password: ''
    })
    const [signupCredentials, setSignupCredentials] = useState({
        username: '',
        password: '',
        reEnteredPassword: ''
    })
    const [chooseForm, setChooseForm] = useState('login')
    const [invalid, setinvalid] = useState()
    const [loginFormValid, setLoginFormValid] = useState(false)
    const [signUpFormValid, setSignUpFormValid] = useState(false)

    
    function validForm(){
    }
    const submitForm = (event) => {

    let pattern = new RegExp(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)
    if(pattern.test(credentials.username) && credentials.password.length >= 6){
        event.preventDefault();
            let u = credentials.username;
            let p = credentials.password;
            SignIn(u, p, (signedUP) => {
                console.log(signedUP);
            })
    }
    }
    const submitSignupForm = (e) => {

        let pattern = new RegExp(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)

        if(pattern.test(signupCredentials.username) && signupCredentials.password.length >= 6 && signupCredentials.password == signupCredentials.reEnteredPassword){

            e.preventDefault();
            let u = signupCredentials.username;
            let p = signupCredentials.password;
            console.log(signupCredentials);
            SignUp(u, p, (signedUP) => {
                console.log(signedUP);
            })
            setChooseForm("login")

        }

    }

    useEffect(() => {
        authCheck((data) => {
            if (data) {
                history.push("/");
            }
            else {
            }
            // console.log("authentication is",auth);
            // setConstructorHasRun(true)
        })
    })
    return (
        // <div className="authForm">
        //     <div className="logInForm">
        //         <div className="leftContent">
        //             {/* <img src={'https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932_960_720.png'} /> */}
        //         </div>
        //         <div className="rightContent">
        //             <form >
        //                 <label htmlFor="">Name</label>
        //                 <input value={credentials.username} onChange={(event) => { setCredentials({ ...credentials, username: event.target.value }) }} type="email" name="" id="" />
        //                 <label htmlFor="">Password</label>
        //                 <input value={credentials.password} onChange={(event) => { setCredentials({ ...credentials, password: event.target.value }) }} type="password" name="" id="" />
        //                 <button className="authBtn" onClick={submitForm} type="submit">Submit</button>
        //             </form>
        //             <div className="register">
        //                 <p>Don't have account? <Router><Link to="/signup">Register</Link> </Router> </p>
        //                 <p>Forget password?<Router><Link to="#">Recover</Link></Router> </p>
        //             </div>
        //             <Switch>
        //                 <Route path="/signup">
        //                     <Signup></Signup>
        //                 </Route>
        //             </Switch>
        //         </div>
        //     </div>
        // </div >

        chooseForm == 'login' ?
            <LoginComponent setChooseForm={setChooseForm} credentials={credentials} setCredentials={setCredentials} submitForm={submitForm}></LoginComponent> :
            <SignupComponent setChooseForm={setChooseForm} credentials={signupCredentials} setCredentials={setSignupCredentials} submitForm={submitSignupForm}></SignupComponent>

    )
}
