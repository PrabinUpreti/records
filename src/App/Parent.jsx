import React from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import "./Parent.css";

export default function Parent() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mainSideBar">
        <SideBar className="parentSideBar"></SideBar>
        <Main></Main>
      </div>
    </div>
  );
}
