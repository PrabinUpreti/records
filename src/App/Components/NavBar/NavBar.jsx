import React, { useState, useEffect, useContext } from "react";
import "./NavBar.css";
import { recordContext } from "./../../Parent"


import { LogOut } from './../../Auth/Auth'

import {
  useHistory,
} from "react-router-dom";



export default function NavBar() {
  const recordValue = useContext(recordContext)


  let history = useHistory()
  // const UpdateTransaction = () => {
  //   console.log(CustomersTransaction, didUpdate);
  //   CustomersTransaction.push({
  //     transactionId: 4,
  //     transactionHistory: [
  //       {
  //         decription: "Update",
  //         status: "dr",
  //         date: "2077-09-20",
  //         amount: 100,
  //       },
  //       {
  //         decription: "I took money",
  //         status: "dr",
  //         date: "2077-09-20",
  //         amount: 200,
  //       },
  //     ]
  //   })
  //   setDebit(0)
  //   setCredit(0)
  //   setdidUpdate(!didUpdate)

  // }

  const [debit, setDebit] = useState(0)
  const [credit, setCredit] = useState(0)
  const [didUpdate, setdidUpdate] = useState(false)

  useEffect(() => {
    setDebit(0)
    setCredit(0)
    if (recordValue.state.customer) {
      recordValue.state.customer.map(data => {
        let temp = data.transaction
        temp.map(d => {
          console.log(d);
          d.transactions.status == "dr" ? setDebit(prev => prev + parseFloat(d.transactions.amount)) : setCredit(prev => prev + parseFloat(d.transactions.amount))
        })
        // console.log(debit,credit);

      })
    }
  }, [recordValue])
  console.log(debit, credit)
  return (
    <div className="nav">
      {/* <input type="button" value="ADD Transaction" onClick={UpdateTransaction}/> */}
      <div className="navContent">
        <h1>Records</h1>
        <h2 className="revinue">Rs. {debit - credit}  </h2>
        <input className="btn" type="button" value="Log out" onClick={() => {
          LogOut((info) => {
            console.log(info);
            history.push("/login")
          })

        }} />
      </div>
    </div>
  );
}
