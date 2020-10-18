import React, { useReducer,useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Login from './AuthForm/Login';
import "./Parent.css";
import {authCheck,fb} from './AuthForm/myAuth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { render } from "@testing-library/react";

//React Router//
export const mainDataContext = React.createContext();

//declare reducer function

function reducer(currentState, action) {
  return { ...currentState, name: action.name };
}

//component function



export default function Parent() {
  
  const [auth,setauth] = useState(false)  
  const [constructorHasRun, setConstructorHasRun] = useState(false)
  const [recivedData, setRecivedData] = useState();
  const [state, myDispatch] = useReducer(reducer, { name: "Hello", roll: 23 });

  const SecureRoute = ({children, ...rest})=>{
    let history = useHistory();
    let location = useLocation();  
  
    let data = {...rest};
    let d = data.location;
    return(
    <Route
        {...rest}
        render={({location}) =>
        auth ? (
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


  useEffect(()=>{
    const db = fb.firestore()

    const docRef = db.doc("records/peopleList")

    authCheck((data)=>{
      if (data){
        setauth(true)
      }
      else{
        setauth(false)  
      }
      console.log("authentication is",auth);
      setConstructorHasRun(true)
    })

    
    docRef.get().then(res=>{
      if(!res.exists){
        let isData = res.exists
      }
      else{
        let isData = res.exists
        let temp =res.data()
        setRecivedData(temp)
        console.log({recivedData,temp});
        

      }
    }).catch(err=>{
      console.log(err);
    });

  },[])
  //declare REDUCER


if(constructorHasRun){
  return(
    <Router>
      <Switch>
      <Route path="/login" component={Login}></Route>

      <SecureRoute path="/" exact auth={auth} >
        <mainDataContext.Provider
          value={{ dataState: state, dataDispatch: myDispatch }}>
          <NavBar />
          <div className="mainSideBar">
            {/* <div>{state.name}</div> */}
            <SideBar className="parentSideBar" />
          </div>
        </mainDataContext.Provider>
      </SecureRoute>

      <Route path="*"> 
      <Redirect to ="/"></Redirect>
      </Route>
      </Switch>
    </Router>
    )
  }
  else{
    return <h1>Loading....</h1>;
  }
}
