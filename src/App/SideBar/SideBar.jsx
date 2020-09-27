import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <button>
        <p>Records</p>
      </button>
      <button>
        <p>Add transaction</p>
      </button>
      <button>
        <p>Add Customer</p>
      </button>
    </div>
  );
}
