import React, { useState } from "react";
import { CustomersTransaction } from "./../../DatabaseServices";
import { useParams } from "react-router-dom";

function AddTransaction({ match }) {
  let { id } = useParams();
  const [amt] = useState(CustomersTransaction);
  const newTransaction = amt.filter((list) => {
    return list.userId == id;
  });
  console.log(newTransaction);

  return (
    <div>
      Addtransaction i am id
      {newTransaction.map((d) => {
        {
          Object.keys(d.transactionHistory).map((trn) => {
            console.log(trn);

            return <h1 key={d.userId}>hello</h1>;
          });
        }
      })}
    </div>
  );
}

export default AddTransaction;
