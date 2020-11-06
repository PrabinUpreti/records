import React, { useState, useContext } from "react";
import { CustomersTransaction } from "../../../../DatabaseServices";
import { useParams } from "react-router-dom";
import { recordContext } from "../../../../Parent";

function AddTransaction() {
  const [state, setState] = useState({});
  const updateData = useContext(recordContext);
  // console.log(updateData);
  let { id } = useParams();
  const [amt] = useState(CustomersTransaction);
  const newTransactionList = amt.filter((list) => {
    return list.transactionId == id;
  });
  let tempdata = newTransactionList[0].transactionHistory 

  return (
    <div>
      {tempdata.map((d,index)=>{
        return <h1 key={index}>{d.date} {d.decription} Rs.{d.amount} /- {d.status}</h1>
          
      })
      
    }
      {/* <input
        type="text"
        onChange={(e) => setState({ name: e.target.value })}
        name=""
        id=""
      />
      <button onClick={() => updateData.dataDispatch({ name: state.name })}>
        Click
      </button> */}
    </div>
  );
}

export default AddTransaction;
