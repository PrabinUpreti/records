import React from "react"
import "./Auth.css"
export default function SignupComponent(props) {
    let pattern = new RegExp(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)

    return (
        <div className="authForm">
            <div className="logInForm">
                <div className="leftContent">
                    {/* <img src={'https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932_960_720.png'} /> */}
                </div>
                <div className="rightContent">
                    <form >


                        <label htmlFor="">E-mail</label>

                        <input style={{ border: !pattern.test(props.credentials.username) ? "2px solid red" : "2px solid green" }} value={props.credentials.username} onChange={(event) => { props.setCredentials({ ...props.credentials, username: event.target.value }) }} type="email" name="" id="" />


                        <label htmlFor="">Password</label>

                        <input style={{ border: props.credentials.password.length < 6 ? "2px solid red" : "2px solid green" }} value={props.credentials.password} onChange={(event) => { props.setCredentials({ ...props.credentials, password: event.target.value }) }} type="password" name="" id="" />


                        <label htmlFor="">Re-Enter Password</label>

                        <input 
                        style={{ border: props.credentials.password != props.credentials.reEnteredPassword ? "2px solid red" : "2px solid green" }} value={props.credentials.reEnteredPassword} onChange={(event) => { props.setCredentials({ ...props.credentials, reEnteredPassword: event.target.value }) }} type="password" name="" id="" />


                        <button className="authBtn" onClick={props.submitForm} type="submit">Register</button>
                    </form>
                    <div className="register">
                        <p>Already have Account? <a onClick={() => props.setChooseForm("login")}>Login</a> </p>
                        {/* <p>Forget password?<a>Recover</a> </p> */}
                    </div>
                </div>
            </div>
        </div >
    );
}