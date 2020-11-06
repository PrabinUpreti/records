import React, { useState, useContext } from "react";
import { Customers } from "../../../DatabaseServices";
import { recordContext } from "./../../../Parent"

function Person() {
  const recordValue = useContext(recordContext)

  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    description: "",
    date: new Date()
  });
  const addItems = (event) => {
    let id = event.target.id;
    setState({ ...state, [id]: event.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    recordValue.dispatch({ type: "add-new-customer", payload: state })

    setState({
      name: "",
      address: "",
      phone: "",
      description: "",
      date: ""
    });
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="Name">Name</label>
        <input
          id="name"
          onChange={addItems}
          type="text"
          value={state.name}
          placeholder="Enter Name"
        />
        <label htmlFor="Address">Address</label>
        <input
          id="address"
          onChange={addItems}
          type="text"
          value={state.address}
          placeholder="Enter Address"
        />
        <label htmlFor="Phone">Phone</label>
        <input
          id="phone"
          onChange={addItems}
          type="phone"
          value={state.phone}
          placeholder="Enter Phone"
        />
        <label htmlFor="Description">Description</label>
        <textarea
          id="description"
          onChange={addItems}
          cols="30"
          rows="10"
          value={state.description}
        ></textarea>
        <input type="file" />
        <input value="SUBMIT" type="submit" onClick={submitForm} />
      </form>
    </>
  );
}

export default Person;
