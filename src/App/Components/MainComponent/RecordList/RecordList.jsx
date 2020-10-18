import React, { useState } from "react";
import "./RecordList.css";
import { Customers,CustomersTransaction } from "../../../DatabaseServices";
import { Link } from "react-router-dom";

export default function RecordList() {
  const [customers] = useState(Customers);
  const [transaction] = useState(CustomersTransaction)
  let defaultImage = "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";

  let creditAmount=0
  let debitAmount=0
  let myTrans

  return (
    <div className="main">
      {customers.map((value) => {
        debitAmount = 0
        creditAmount = 0
        let id = value.transactionId
        myTrans=transaction.filter(data=>
        data.transactionId === id
      )
      let trnH =myTrans[0].transactionHistory ? myTrans[0].transactionHistory : null
        trnH.map(data=>{
          data.status === "cr"? creditAmount += data.amount : debitAmount += data.amount
        })

        return (
          <Link to={`/${value.userId}`} key={value.userId}>
            <div className="left">
              <div className="avatar">
                <img src={value.imgurl ? value.imgurl : defaultImage} alt="images" />
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
              
              <p>Rs.{debitAmount - creditAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
