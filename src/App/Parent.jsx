import React, { useReducer,useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Login from './Auth/Login';
import "./Parent.css";
import {authCheck, ProtectedRoute} from './Auth/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

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

  // const SecureRoute = ({children, ...rest})=>{
  //   let history = useHistory();
  //   let location = useLocation();  
  
  //   let data = {...rest};
  //   let d = data.location;
  //   return(
  //   <Route
  //       {...rest}
  //       render={({location}) =>
  //       auth ? (
  //           children
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: { from: location }
  //             }}
  //           />
  //         )
  //       }
  //     />);
  // }


  useEffect(()=>{
    // const db = fb.firestore()
    // const docRef = db.doc("records/peopleList")

    authCheck((data)=>{
      setConstructorHasRun(true)
    })

    
    // docRef.get().then(res=>{
    //   if(!res.exists){
    //     let isData = res.exists
    //   }
    //   else{
    //     let isData = res.exists
    //     let temp =res.data()
    //     setRecivedData(temp)
    //     console.log({recivedData,temp});
        

    //   }
    // }).catch(err=>{
    //   console.log(err);
    // });

  },[])
  //declare REDUCER


if(constructorHasRun){
  return(
    <Router>
      <Switch>
      <Route path="/login" component={Login}></Route>

      <ProtectedRoute path="/" exact>
        <mainDataContext.Provider value={{ dataState: state, dataDispatch: myDispatch }}>
          <NavBar />
          <div className="mainSideBar">
            <SideBar className="parentSideBar" />
          </div>
        </mainDataContext.Provider>
      </ProtectedRoute>

      <Route path="*"><Redirect to ="/"></Redirect>
      </Route>
      </Switch>
    </Router>
    )
  }
  else{
    return <h1>Loading....</h1>;
  }
}
