import React, { useState, useEffect, useContext } from "react";
import "./RecordList.css";
import { Link } from "react-router-dom";
import { recordContext } from "./../../../Parent"

export default function RecordList() {
  const [databaseInfo, setDatabaseInfo] = useState("")
  let defaultImage = "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";

  const recordValue = useContext(recordContext)

  let creditAmount = 0
  let debitAmount = 0
  let myTrans

  useEffect(() => {

  }, [])

  return (
    <div className="main">
      {recordValue.state.customer ?
        recordValue.state.customer.map(value => {
          debitAmount = 0
          creditAmount = 0
          value.transaction.map(trn => {
            trn.transactions.status == "cr" ? creditAmount += parseFloat(trn.transactions.amount) : debitAmount += parseFloat(trn.transactions.amount)
          })
          return (
            <Link to={`/${value.customerId}`} key={value.customerId}>
              <div className="left">
                <div className="avatar">
                  <img src={value.imgurl ? value.imgurl : defaultImage} alt="images" />
                </div>
                <div className="information">
                  <p className="name">{value.name}</p>
                  <p className="address">{value.address}</p>
                  {/* <p className="registeredDate">{value.date}</p> */}
                  <p className="phone">{value.phone}</p>
                  <p className="description">{value.description}</p>
                </div>
              </div>
              <div className="righ">
                <p>Rs.{debitAmount - creditAmount}</p>
              </div>
            </Link>
          )
        })
        : console.log("Nothing")}
    </div>
  );

  return (
    <div className="main">
      {console.log(recordValue)}
      {recordValue.state[0].customer.map((value) => {
        debitAmount = 0
        creditAmount = 0
        // let id = value.transactionId
        //   myTrans=transaction.filter(data=>
        //   data.transactionId === id
        // )
        // let trnH =myTrans[0].transactionHistory ? myTrans[0].transactionHistory : null
        //   trnH.map(data=>{
        //     data.status === "cr"? creditAmount += data.amount : debitAmount += data.amount
        //   })

        return (
          <Link to={`/${value.id}`} key={databaseInfo}>
            <div className="left">
              <div className="avatar">
                <img src={value.imgurl ? value.imgurl : defaultImage} alt="images" />
              </div>
              <div className="information">
                <p className="name">{value.name}</p>
                <p className="address">{value.address}</p>
                {/* <p className="registeredDate">{value.date}</p> */}
                <p className="phone">{value.phone}</p>
                <p className="description">{value.description}</p>
              </div>
            </div>
            <div className="righ">
              {/* <p>Rs.{debitAmount - creditAmount}</p> */}
            </div>
          </Link>

          // <p></p>
        );
      })}
    </div>
  );
}
