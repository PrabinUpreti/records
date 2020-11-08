import React, { useState, useContext, useEffect } from "react";
import { CustomersTransaction } from "../../../../DatabaseServices";
import { useParams } from "react-router-dom";
import { recordContext } from "../../../../Parent";
import "./AddTransaction.css"

function AddTransaction() {
  const [state, setState] = useState({});
  const recordValue = useContext(recordContext);
  let { id } = useParams();

  useEffect(() => {
    let newList;
    let transactionList = recordValue.state.customer.filter(d => {
      return (d.customerId == id)
    })
    setState(transactionList)
  }, [recordValue])
  let temp = 0

  return (
    <div className="transactionMain">

      {

        state.length ?
          <div>
            <div className="customerDetails">
              <div className="leftPart">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU'></img>
                <div className="customerInfo">
                  <p className="name">{state[0].name}</p>
                  <p className="address">{state[0].address}</p>
                </div>
              </div>
              <div className="rightPart">
                <button className="addBtn">+</button>
              </div>
            </div>
            <table className="transactionTable">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Last Amount</th>

                </tr>
              </thead>
              <tbody>
                {state[0].transaction.map((data, index) => {
                  let lastamount = temp
                  temp = data.transactions.amount
                  let date = new Date(data.transactions.date.seconds * 1000)
                  return (
                    <tr style={{ color: data.transactions.status === "dr" ? "red" : "green" }} key={index}>
                      <td>{index + 1}</td>
                      <td>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</td>
                      <td>{data.transactions.description.toUpperCase()}</td>
                      <td>Rs. {data.transactions.amount}</td>
                      <td>{data.transactions.status == "dr" ? "Debit" : "Credit"}</td>
                      <td>Rs. {lastamount ? lastamount - data.transactions.amount : data.transactions.amount}</td>


                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          : <p>No datas</p>
      }
      {/* <pre>{JSON.stringify(state, null, 4)}</pre> */}
    </div>
  );
}

export default AddTransaction;
