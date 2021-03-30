import React from "react";
import "./SideBar.css";
import RecordList from "../MainComponent/RecordList/RecordList";
import AddPerson from "./../MainComponent/AddPerson/AddPerson";
import AddTransaction from "../MainComponent/RecordList/AddTransaction/AddTransaction";
import { ProtectedRoute } from '../../Auth/Auth';

import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route, Redirect,
  useRouteMatch
} from "react-router-dom";

export default function SideBar() {
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  return (
    <Router>
      <ul className="sidebar">
        <li>
          <NavLink style={{ color: "#1F1B1B" }} exact activeStyle={{ color: "#4961EF" }} to={url}>
            Record List
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "#1F1B1B" }} exact activeStyle={{ color: "#4961EF" }} to={`${url}person/${"add-new-customer"}`}>
            Add Person
          </NavLink>
        </li>
      </ul>

      <Switch>
        <ProtectedRoute exact path={path} >
          <RecordList />
        </ProtectedRoute>
        {/* <Route exact path={`${path}:person:id`}>
          <h1>Hello</h1>
        </Route> */}
        <ProtectedRoute path={`${path}person:id`}>
          <AddPerson />
        </ProtectedRoute>
        <ProtectedRoute exact path={`${path}:id`}>
          <AddTransaction />
        </ProtectedRoute>
        {/* {console.log(`${path}person:id`)} */}
        {/* <Route path="*"><Redirect to="/"></Redirect>
        </Route> */}
      </Switch>
    </Router>
  );
}
