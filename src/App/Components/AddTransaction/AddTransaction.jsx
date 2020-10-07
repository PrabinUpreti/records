import React, { useState, useContext } from "react";
import { CustomersTransaction } from "./../../DatabaseServices";
import { useParams } from "react-router-dom";
import { mainDataContext } from "./../../Parent";

function AddTransaction() {
  const [state, setState] = useState({});
  const updateData = useContext(mainDataContext);
  // console.log(updateData);
  let { id } = useParams();
  const [amt] = useState(CustomersTransaction);
  const newTransactionList = amt.filter((list) => {
    return list.userId === id;
  });
  // console.log(state);

  return (
    <div>
      Addtransaction i am id
      {newTransactionList.map((d) => {
        {
          Object.keys(d.transactionHistory).map((trn) => {
            // console.log(trn);

            return <h1 key={d.userId}>a</h1>;
          });
        }
      })}
      <input
        type="text"
        onChange={(e) => setState({ name: e.target.value })}
        name=""
        id=""
      />
      <button onClick={() => updateData.dataDispatch({ name: state.name })}>
        Click
      </button>
    </div>
  );
}

export default AddTransaction;
