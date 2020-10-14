import React, { useState,useEffect } from "react";
import "./NavBar.css";
import { CustomersTransaction } from "./../DatabaseServices";



export default function NavBar() {
  const UpdateTransaction =()=>{
    console.log(CustomersTransaction,didUpdate);
    CustomersTransaction.push({
      transactionId: 4,
      transactionHistory: [
        {
          decription: "Update",
          status: "dr",
          date: "2077-09-20",
          amount: 100,
        },
        {
          decription: "I took money",
          status: "dr",
          date: "2077-09-20",
          amount: 200,
        },
      ]
  })
  setDebit(0)
  setCredit(0)
  setdidUpdate(!didUpdate)

}

  const [debit,setDebit] = useState(0)
  const [credit,setCredit] = useState(0)
  const [didUpdate,setdidUpdate] = useState(false)

  useEffect(()=>{
    CustomersTransaction.map(data=>{
      let temp = data.transactionHistory
      temp.map(d=>{
        d.status == "dr" ? setDebit(prev=>prev+d.amount) : setCredit(prev=>prev+d.amount)
        console.log(d.amount);
      })
      // console.log(debit,credit);

    })
  },[didUpdate])
  return (
    <div className="nav">
      <input type="button" value="ADD Transaction" onClick={UpdateTransaction}/>
      <div className="navContent">
        <h1>Records</h1>
        <h2 className="revinue">Rs. {debit - credit}  </h2>
      </div>
    </div>
  );
}
