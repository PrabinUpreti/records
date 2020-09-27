import React, { useState } from "react";
import "./Main.css";
import { domainName } from "./../matadata";

export default function Main() {
  const customers = [
    {
      userId: 1,
      name: "Prabin Raj Upreti",
      address: "Hetauda-8, Nepal",
      date: "2077-09-20",
      phone: 9845315037,
      description: "He has taken 3 lakh money in rate 5 at jestha 8 2020",
      amount: 3000000,
      imgurl: domainName + "/src/assets/img/img.jpg",
    },
    {
      userId: 1,
      name: "Prabin Raj Upreti",
      address: "Hetauda-8, Nepal",
      date: "2077-09-20",
      phone: 9845315037,
      description: "He has taken 3 lakh money in rate 5 at jestha 8 2020",
      amount: 3000000,
      imgurl: domainName + "/src/assets/img/img2.png",
    },
    {
      userId: 1,
      name: "Prabin Raj Upreti",
      address: "Hetauda-8, Nepal",
      date: "2077-09-20",
      phone: 9845315037,
      description: "He has taken 3 lakh money in rate 5 at jestha 8 2020",
      amount: 3000000,
      imgurl: domainName + "/src/assets/img/img2.png",
    },
  ];

  const [state, setstate] = useState(customers);

  return (
    <div className="main">
      {state.map((value) => {
        return (
          <div className="recordList">
            <div className="left">
              <div className="avatar">
                <img src={value.imgurl} alt="images" />
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
              <p>Rs.{value.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
