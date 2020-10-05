import React from "react";

function Person() {
  return (
    <>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Enter Name" />

        <label htmlFor="Address">Address</label>
        <input type="text" placeholder="Enter Address" />

        <label htmlFor="Phone">Phone</label>
        <input type="text" placeholder="Enter Phone" />

        <label htmlFor="Description">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Person;
