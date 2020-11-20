import React, { useState, useContext, useEffect } from "react";
import { CustomersTransaction } from "../../../../DatabaseServices";
import { useParams } from "react-router-dom";
import { recordContext,recordTransactionContext } from "../../../../Parent";
import "./AddTransaction.css"
import { addTransaction } from "./../../../../Firestore/Firestore"



function AddTransaction() {
  const [state, setState] = useState();
  const [profile, setprofile] = useState();

  const [showAddTransaction, setShowAddTransaction] = useState(false)
  const [inputData, setInputData] = useState({ date: '', description: '', amount: '', status: '' })
  const recordValue = useContext(recordContext);
  const recordTranValue = useContext(recordTransactionContext)

  let { id } = useParams();

  function enterTransactionData() {
    let tranData ={      
      amount:parseFloat(inputData.amount),
      consumerID:id,
      createdAt:new Date(),
      date:new Date(),
      description:inputData.description,
      status:inputData.status,
      updatedAT:new Date()
    }

    recordTranValue.dispatch({ type: "update-transaction", payload: tranData })
    setInputData({ date: '', description: '', amount: '', status: '' })
    setShowAddTransaction(false)
  }

  useEffect(() => {
    let transactionList=[]
    recordTranValue.state.transaction.map(d => {
      if(d.consumerID == id){
        transactionList = [...transactionList,d]
      }
    })
    
    setState(transactionList)
      recordValue.state.customer.map(a=>{
        if(a.id == id){
          setprofile(a)
        }
    })
    console.log(transactionList);
  }, [recordValue,recordTranValue])
  let lastamount = 0

  return (
    <div className="transactionMain">


      {

        state ?
          <div>
            <div className="customerDetails">
              <div className="leftPart">
                <div className="textAvatar">
                  <p>{profile.name[0]}{profile.name[1]}</p>
                </div>
                {/* <img src='https://lh3.googleusercontent.com/pw/ACtC-3fuX-Tc4ckD4UTqJM6fpZZ2AB3rDlEIPMQjCcLiUDJIzSGT0LtFyBG5mR5TD6rHOdkmanV__RGGxq50MjCFj2R6jNgDv2XBplhsoAGMTsBxWU4uD7iL80x-_31E2BA4IqC8XZZDEh04YbHpbRJvlJ73Dg=w552-h981-no?authuser=0'></img> */}
                <div className="customerInfo">
                  <p className="name">{profile.name}</p>
                  <p className="address">{profile.address}</p>
                </div>
              </div>
              <div className="rightPart">
                <button onClick={() => setShowAddTransaction(!showAddTransaction)} className="addBtn">{showAddTransaction ? "-" : "+"}</button>
              </div>
            </div>
            <table className="transactionTable">
              {showAddTransaction ?
                <thead>
                  <tr>
                    <th>#</th>
                    <th >
                      <input value={inputData.date} onChange={(e) => { setInputData({ ...inputData, date: e.target.value }) }} type="date" placeholder="Date" />
                    </th>
                    <th>
                      <input value={inputData.description} onChange={(e) => { setInputData({ ...inputData, description: e.target.value }) }} type="text" placeholder="Description" />
                    </th>
                    <th>
                      <input value={inputData.amount} onChange={(e) => { setInputData({ ...inputData, amount: e.target.value }) }} type="text" placeholder="Amount" />
                    </th>
                    <th>
                      <select value={inputData.status} onChange={(e) => { setInputData({ ...inputData, status: e.target.value == "debit" ? "dr" : "cr" }) }}  >
                        <option value="10">Debit/Credit</option>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>

                      </select>
                    </th>
                    <th>
                      <button style={{
                        padding: "15px",
                        width: "100%",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                        onClick={enterTransactionData}>Submit</button>


                    </th>
                  </tr>
                </thead>
                : null}

              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Last Amount</th>
                  {/* <th>Action</th> */}

                </tr>
              </thead>
              <tbody>
                {state.map((data, index) => {
                  lastamount ? data.status == "dr" ? lastamount = lastamount - parseFloat(data.amount) : lastamount = lastamount + parseFloat(data.amount) : data.status == "dr" ? lastamount = -parseFloat(data.amount) : lastamount = parseFloat(data.amount)
                  let date = new Date(data.date.seconds * 1000)
                  return (
                    <tr style={{ color: data.status === "dr" ? "red" : "green" }} key={index}>
                      <td>{index + 1}</td>
                      <td>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</td>
                      <td>{data.description.toUpperCase()}</td>
                      <td>Rs. {data.amount} /-</td>
                      <td>{data.status == "dr" ? "Debit" : "Credit"}</td>
                      <td> Rs. {lastamount} /-</td>


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
