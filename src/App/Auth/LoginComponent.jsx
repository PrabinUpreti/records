import React from "react"
import "./Auth.css"
export default function LoginComponent(props) {
    // console.log(props);
    return (
        <div className="authForm">
            <div className="logInForm">
                <div className="leftContent">
                    {/* <img src={'https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932_960_720.png'} /> */}
                </div>
                <div className="rightContent">
                    <form >
                        <label htmlFor="">Name</label>
                        <input value={props.credentials.username} onChange={(event) => { props.setCredentials({ ...props.credentials, username: event.target.value }) }} type="email" name="" id="" />
                        <label htmlFor="">Password</label>
                        <input value={props.credentials.password} onChange={(event) => { props.setCredentials({ ...props.credentials, password: event.target.value }) }} type="password" name="" id="" />
                        <button className="authBtn" onClick={props.submitForm} type="submit">Submit</button>
                    </form>
                    <div className="register">
                        <p>Don't have account? <a onClick={() => props.setChooseForm("signup")}>Register</a> </p>
                        {/* <p>Forget password?<a>Recover</a> </p> */}
                    </div>
                </div>
            </div>
        </div >
    );
}