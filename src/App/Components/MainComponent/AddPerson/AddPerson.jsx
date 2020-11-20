import React, { useState, useContext } from "react";
import { Customers } from "../../../DatabaseServices";
import { recordContext } from "./../../../Parent"
import "./AddPerson.css"

function Person() {
  const recordValue = useContext(recordContext)
const [isvalid,setIsvalid] = useState(true)
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
    if(state.name.length > 2 && state.address.length > 2 && state.phone > 5){
      recordValue.dispatch({ type: "add-new-customer", payload: state })
  
      setState({
        name: "",
        address: "",
        phone: "",
        description: "",
        date: ""
      });
      setIsvalid(true)

    }
    else{
      setIsvalid(false)
    }
  };

  return (
    <div className="addPerson">
      <form className="myform">
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
        <div style={{display:isvalid ? "none": "inherit"}}><p style={{margin:"2px",color:"red"}}>Please enter form correctly </p></div>
        <input className="submit" value="SUBMIT" type="submit" onClick={submitForm} />
      </form>
    </div>
  );
}

export default Person;
