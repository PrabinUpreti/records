import React, { useState } from "react";
import "./RecordList.css";
import { Customers } from "./../../DatabaseServices";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function RecordList() {
  const [state] = useState(Customers);

  return (
    <div className="main">
      {state.map((value) => {
        console.log(state);
        return (
          <Link
            className="Linked"
            to={`/${value.userId}`}
            key={value.userId}
            className="recordList"
          >
            <div className="left">
              <div className="avatar">
                <img src={value.imgurl} alt="images" />
              </div>
              <div className="information">
                <p className="name">{value.name}</p>
                <p className="address">{value.address}</p>
                <p className="registeredDate">{value.date}</p>
                <p className="phone">{value.phone}</p>
                <p className="description">{value.description}</p>
              </div>
            </div>
            <div className="righ">
              <p>Rs.{value.amount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
