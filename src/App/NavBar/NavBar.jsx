import React, { useState,useEffect } from "react";
import "./NavBar.css";
import { CustomersTransaction } from "./../DatabaseServices";



export default function NavBar() {

  const [debit,setDebit] = useState(0)
  const [credit,setCredit] = useState(0)

  useEffect(()=>{
    CustomersTransaction.map(data=>{
      let temp = data.transactionHistory
      temp.map(d=>{
        d.status == "dr" ? setDebit(prev=>prev+d.amount) : setCredit(prev=>prev+d.amount)
        console.log(d.amount);
      })
      // console.log(debit,credit);

    })
  }, [CustomersTransaction])
  return (
    <div className="nav">
      <div className="navContent">
        <h1>Records</h1>
        <h2 className="revinue">Rs. {debit - credit}  </h2>
      </div>
    </div>
  );
}
