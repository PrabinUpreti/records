import React from "react";
import "./SideBar.css";
import RecordList from "../Components/RecordList/RecordList";
import Person from "../Components/Person/Person";
import AddTransaction from "../Components/AddTransaction/AddTransaction";

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
        <Route path="/person" exact component={Person} />
        <Route path={`/:id`} component={AddTransaction} />
      </Switch>
    </Router>
  );
}
