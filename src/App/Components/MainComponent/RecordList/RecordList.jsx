import React, { useState, useEffect, useContext } from "react";
import "./RecordList.css";
import { Link } from "react-router-dom";
import { recordContext, recordTransactionContext } from "./../../../Parent"

export default function RecordList() {
  const [databaseInfo, setDatabaseInfo] = useState("")
  let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU";

  const recordValue = useContext(recordContext)
  const recordTranValue = useContext(recordTransactionContext)



  let creditAmount = 0
  let debitAmount = 0
  let myTrans
  const [customerData, setCustomerData]= useState()
  const [transactionData, setTtansactionData]= useState()

  useEffect(() => {
    setCustomerData(recordValue.state.customer)
    setTtansactionData(recordTranValue.state.transaction)
  }, [recordValue,recordTranValue])

  return (
    <div className="main">
      {/* {console.log(customerData,transactionData)} */}
      {
        customerData ?
        customerData.map((value, index) => {
          let date = new Date(value.date.seconds * 1000)

          creditAmount = 0
          debitAmount = 0

          transactionData && transactionData.map((trn) => {
            if(value.id == trn.consumerID){
                trn.status == "cr" ? creditAmount += parseFloat(trn.amount) : debitAmount += parseFloat(trn.amount)
            }
                console.log(creditAmount,debitAmount)
              })

          return (
            <div key={index}>
            <Link className="Link" to={`/${value.id}`} key={value.id}>
              <div className="left">
                <div className="avatar">
                  {/* <img src={value.imgurl ? value.imgurl : defaultImage} alt="images" /> */}
                  {/* <img src={img[index]} alt="images" /> */}
                  <p className="avatarText">{value.name[0]}{value.name[1]}</p>

                </div>
                <div className="information">
                  <p className="name">{value.name}</p>
                  <p className="description">{value.description}</p>
                  <p className="address">{value.address}</p>
                  <p className="registeredDate">{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</p>
                  <p className="phone">{value.phone}</p>
                </div>
              </div>
              <div className="right">
                <p>Rs. {creditAmount - debitAmount} /-</p>
                {/* <Link to = {`/person/${value.id}`}>
                  <button onClick={()=>alert("dsfjdhvf")}>Edit</button>
                  <button>Delete</button>
                </Link> */}
              </div>
                </Link>
              </div>
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
