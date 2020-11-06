import React, { useState, useContext, useEffect } from "react";
import { CustomersTransaction } from "../../../../DatabaseServices";
import { useParams } from "react-router-dom";
import { recordContext } from "../../../../Parent";

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

  return (
    <div>
      {

        state.length ? state[0].transaction.map((data, index) => {
          return (
            <div key={index}>
              <div>{data.transactions.status}</div>
              <div>Rs. {data.transactions.amount}</div>
              <div>Description:  {data.transactions.description}</div>

            </div>

          )
        }) : <p>No datas</p>
      }
      {/* <pre>{JSON.stringify(state, null, 4)}</pre> */}
    </div>
  );
}

export default AddTransaction;
