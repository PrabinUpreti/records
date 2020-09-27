import React from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";

export default function Parent() {
  return (
    <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}
