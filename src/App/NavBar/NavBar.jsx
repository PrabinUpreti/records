import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const initialState = 35466;
  const [state] = useState(initialState);
  return (
    <div className="nav">
      <div className="navContent">
        <h1>Records</h1>
        <h2 className="revinue">Rs. {state}</h2>
      </div>
    </div>
  );
}
