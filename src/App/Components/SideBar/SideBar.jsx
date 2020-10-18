import React from "react";
import "./SideBar.css";
import RecordList from "../MainComponent/RecordList/RecordList";
import AddPerson from "./../MainComponent/AddPerson/AddPerson";
import AddTransaction from "../MainComponent/RecordList/AddTransaction/AddTransaction";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function SideBar() {
  return (
    <Router>
      <ul className="sidebar">
        <li>
          <NavLink exact activeStyle={{ color: "red" }} to="/">
            Record List
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "red" }} to="/person">
            Add Person
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={RecordList} />
        <Route path="/person" exact component={AddPerson} />
        <Route path={`/:id`} component={AddTransaction} />
      </Switch>
    </Router>
  );
}
