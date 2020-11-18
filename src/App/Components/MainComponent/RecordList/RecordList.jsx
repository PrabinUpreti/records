import React, { useState, useEffect, useContext } from "react";
import "./RecordList.css";
import { Link } from "react-router-dom";
import { recordContext } from "./../../../Parent"

export default function RecordList() {
  const [databaseInfo, setDatabaseInfo] = useState("")
  let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU";

  const recordValue = useContext(recordContext)

  let creditAmount = 0
  let debitAmount = 0
  let myTrans
  const img = ["https://lh3.googleusercontent.com/pw/ACtC-3fuX-Tc4ckD4UTqJM6fpZZ2AB3rDlEIPMQjCcLiUDJIzSGT0LtFyBG5mR5TD6rHOdkmanV__RGGxq50MjCFj2R6jNgDv2XBplhsoAGMTsBxWU4uD7iL80x-_31E2BA4IqC8XZZDEh04YbHpbRJvlJ73Dg=w552-h981-no?authuser=0", "https://www.lensnepal.com/files/profiles/sunny-singh.jpg", "https://naturehikenepal.com/wp-content/uploads/2017/05/0-02-06-7d3791a9a9513583579f8e73add9581d95eb1862bfcb5fe0a582fd5193890eb0_full.jpg", "https://lh3.googleusercontent.com/lJA6U93dWdwuMxb8RGJHKlS4aSfbIC3WjnhBRYhnmx9kW1B5A3TWK_QGoqsDg1MS0FY1mbA3dHsHyp294h4G3msLpOzkuciizQzFZMsD5QiDpEdIUcdSTKZKZkdixxs25-uJmO9TTyTtwnrGMHOrUXMqy0C9H33u6J481MJAnuJ0KWiYYVX2SAqNM3525bcTxGXLLE8amalms-5Ava_01AJ3mh2OM9cd7YpFR77lwYUmXErzBh7Rcb0P97pNO5Y_okfTVMmUGY3WPpMCTxuFFC7UuFGSkxMG8W19OJloZCXXY4n_SQqGnFXyx0IYw2OG9fy88LQf73l4WWROlxsFzZtjxple_FhvT62M1Lg294Qot2UADeM4ge-0f5DMKnMyZlipukgPPQ85lQTXY9Hi5CkcsoFzXdqOQd2f_qEOU58WuJiLZALQnPKU7y5vi_pdqfHMf3ZGAO564dCgNchndUtFwqpMAbgJLcFWdr3E1CGLqYEHKeFUT3dXteBGnZicP2ikxYfF0cYsD-LgKFcBbmA7pCMFW9FqPC5zS7EyV0gGIH9Rm2ZMjn8AfZIrWfQ83oG6yr2y9l5HZZnyoM4yGyKcd1G06zIiYX-T97NA9-HNweVJK3qd3Z6gMxIZqx-qKs27rtlNI3INQvEIkjtGmE65vcsh9Eydie6hWAVGiz627QeX1ocwHdfXbr55cM0=s981-no?authuser=0", "https://model.likenepal.com/wp-content/uploads/sites/9/2016/01/Bikram-Budhathoki.jpg", "https://lh3.googleusercontent.com/vy1e5dxuPk3pXkxtMjjHF4rI443u2KarHU3QyDg2fLmVSaZkKv8hkUAgXKEJE38mM3SHT0gALoUSuDRTBBfPoHT3ND3lUEsNfRZygAwl3xHWnZe0e48clYuRcpYoSc_M-8PVcxD3aAshp1yA-aNmIUUdACpqfpfXgI4jV5Zgd_xRbav1VLb9v_MOb5OTLZeJCcFolmhx42a76fTcq6YpHsZp-BXq4NQpkeVFE4wKzdsW52Xz7SVXa-FXrKrzih8m1AqCc3aW2QPxRI1jmTKt9z2GqlwAC3KkvUkoNeDXyaF4OgYxHyv2jjNxFWr09nyUk1kagSDoFmyx8isbRHvzSyFwU0NWCA5RtnpXUs7fVE0b8qoPY8T9bmXEi0psxlYRJiKliOTC4UpyX1zVW-rz9gIi7JjMGRv0w8L8dihyB2Ffd2kDWp4CYUNw_5s6DISchoiSi-eXU8KZ3Gol4_e3i1pe0gIRfEKwqrrWXy09qcrNeNBBlIf-KcorC8Ojctzf-t-Kf-SJEcBboqCjWtXpqck0gske5-gx35FTAsioruhKjUeCSxinGjXeLW3yJl6IQesju17cXlnQwqSIw66ReqICRrqIBrXw3u-0vDCpalNsTzHd-o_GZ6i_79mTks56r_qTBi02I1yZ9RQUbqC8178jcIYMgT4D6vVq9r6aVIfI7rfP6WnkO8tCWlL6dV0=w736-h981-no?authuser=0"
  ]

  useEffect(() => {

  }, [])

  return (
    <div className="main">
      {recordValue.state.customer ?
        recordValue.state.customer.map((value, index) => {
          let date = new Date(value.date.seconds * 1000)

          debitAmount = 0
          creditAmount = 0
          value.transaction.map((trn) => {
            trn.transactions.status == "cr" ? creditAmount += parseFloat(trn.transactions.amount) : debitAmount += parseFloat(trn.transactions.amount)
          })
          return (
            <Link className="Link" to={`/${value.customerId}`} key={value.customerId}>
              <div className="left">
                <div className="avatar">
                  {/* <img src={value.imgurl ? value.imgurl : defaultImage} alt="images" /> */}
                  <img src={img[index]} alt="images" />

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
