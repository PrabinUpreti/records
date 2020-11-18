import React from 'react'
import { useState } from 'react';
import "./Auth.css"
import { authCheck, SignUp, SignIn } from './Auth'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react';


export default function Login() {
    let history = useHistory();
    let location = useLocation();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const submitForm = (event) => {
        event.preventDefault();
        let u = credentials.username;
        let p = credentials.password;
        SignIn(u, p, (signedUP) => {
            console.log(signedUP);
        })
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
        <div className="authForm">
            <div className="logInForm">
                <div className="leftContent">
                    {/* <img src={'https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932_960_720.png'} /> */}
                </div>
                <div className="rightContent">
                    <form >
                        <label htmlFor="">Name</label>
                        <input value={credentials.username} onChange={(event) => { setCredentials({ ...credentials, username: event.target.value }) }} type="email" name="" id="" />
                        <label htmlFor="">Password</label>
                        <input value={credentials.password} onChange={(event) => { setCredentials({ ...credentials, password: event.target.value }) }} type="password" name="" id="" />
                        <button className="authBtn" onClick={submitForm} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
