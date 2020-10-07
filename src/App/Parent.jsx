import React, { useReducer } from "react";
import { Customers } from "./DatabaseServices";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import "./Parent.css";

//React Router//
export const mainDataContext = React.createContext();

//declare reducer function

function reducer(currentState, action) {
  return { ...currentState, name: action.name };
}

//component function
export default function Parent() {
  //declare REDUCER

  const [state, myDispatch] = useReducer(reducer, { name: "Hello", roll: 23 });

  return (
    <mainDataContext.Provider
      value={{ dataState: state, dataDispatch: myDispatch }}
    >
      <NavBar />
      <div className="mainSideBar">
        <div>{state.name}</div>
        <SideBar className="parentSideBar" />
      </div>
    </mainDataContext.Provider>
  );
}
