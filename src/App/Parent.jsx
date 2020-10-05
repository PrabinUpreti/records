import React, { useEffect, useState } from "react";
import { Customers } from "./DatabaseServices";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import "./Parent.css";

//React Router//

export default function Parent() {
  return (
    <div>
      <NavBar />
      <div className="mainSideBar">
        <SideBar className="parentSideBar" />
      </div>
    </div>
  );
}
