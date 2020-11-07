import React, { useReducer, useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Login from './Auth/Login';
import "./Parent.css";
import { authCheck, ProtectedRoute } from './Auth/Auth';

import { getInitialData, getInitialTransactionData, addNewCustomer } from './Firestore/Firestore'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { database } from "firebase";

export const recordContext = React.createContext();
export const ACTION = {
  INIT: 'init',
  INITTRANSISTOR: "init-trans",
  ADDNEWCUSTOMER: "add-new-customer"

}

function reducer(currentState, action) {
  switch (action.type) {
    case ACTION.INIT:
      return { ...currentState, customer: action.payload }
    case ACTION.INITTRANSISTOR:
      return { ...currentState }
    case ACTION.ADDNEWCUSTOMER:
      addNewCustomer(action.payload)
    // console.log(action.payload);
    default:
      return currentState;
  }
}

//component function



export default function Parent() {

  // const [auth,setauth] = useState(false)
  const [constructorHasRun, setConstructorHasRun] = useState(false)
  // const [recivedData, setRecivedData] = useState();


  //OPEN---SINGLE SOURCE OF TRUTH
  const [state, dispatch] = useReducer(reducer, []);
  const [dataList, setDataList] = useState([])




  function fetchData() {

    // -----------------------------------------------PRACTICS--------------------------------------------//
    let x = new Promise((resolve, reject) => {
      getInitialData().then(d => {
        let temp = []
        // console.clear()
        d.docs.forEach(obj => {
          temp = [
            ...temp,
            {
              customerId: obj.id,
              data: obj.data()
            }]
        })
        resolve(temp);
      })
    })

    return x
  }
  async function fetchTransactionData(dat) {
    let temp2 = []
    for (const d of dat) {
      let id = d.customerId
      await getInitialTransactionData(id).then(res => {
        let t = []
        res.docs.forEach(r => {
          t = [...t, {
            transactionId: r.id,
            transactions: r.data()
          }]

        })
        temp2 = [...temp2, {
          customerId: id, ...d.data, transaction: t
        }]
      })
      console.log(temp2);
    }
    return temp2
  }


  // -----------------------------------------------PRACTICS--------------------------------------------//


  // let transaction = []
  // let dataL = []
  // getInitialData().then(d => {
  //   if (!d.empty) {
  //     d.docs.forEach(obj => {
  //       let a = obj.data()
  //       let b2 = obj.id


  //       getInitialTransactionData(b2)
  //         .then(d2 => {
  //           d2.docs.forEach(obj2 => {
  //             let a2 = obj.data()

  //             transaction = [...transaction, {
  //               transactionId: obj2.id,
  //               transactionList: {
  //                 amount: a2.amount,
  //                 date: a2.date,
  //                 description: a2.description,
  //                 status: a2.status
  //               }
  //             }]
  //             dataL = [...dataL, {
  //               consumerId: b2,
  //               consumer: {
  //                 name: a.name,
  //                 address: a.address,
  //                 date: a.date,
  //                 description: a.description,
  //                 phone: a.phone,
  //                 transaction: transaction
  //               }
  //             }]

  //           })
  //           transaction = []
  //           setDataList(dataL)

  //           console.log(dataL);

  //         })

  //       // let b = {...a,id:obj.id}
  //       // let c = {...b,transaction:[b2]}
  //     })
  //   }
  //   else {
  //   }
  //   dispatch({ type: ACTION.INIT, payload: dataList })
  // })



  // const SecureRoute = ({children, ...rest})=>{
  //   let history = useHistory();
  //   let location = useLocation();  

  //   let data = {...rest};
  //   let d = data.location;
  //   return(
  //   <Route
  //       {...rest}
  //       render={({location}) =>
  //       auth ? (
  //           children
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: { from: location }
  //             }}
  //           />
  //         )
  //       }
  //     />);
  // }

  // const retrievedData = (callback) => {

  // }


  useEffect(() => {

    authCheck((data) => {
      if (data) {
        fetchData().then(a =>
          // console.log(a)
          fetchTransactionData(a).then(ob => {
            dispatch({ type: ACTION.INIT, payload: ob })
            setDataList(ob)
            console.dir(ob)
          })
        )
      }
      setConstructorHasRun(true)
    })


    // docRef.get().then(res=>{
    //   if(!res.exists){
    //     let isData = res.exists
    //   }
    //   else{
    //     let isData = res.exists
    //     let temp =res.data()
    //     setRecivedData(temp)
    //     console.log({recivedData,temp});


    //   }
    // }).catch(err=>{
    //   console.log(err);
    // });

  }, [])
  //declare REDUCER





  if (constructorHasRun) {
    console.log(state);
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>

            <ProtectedRoute path="/" exact>
              <recordContext.Provider value={{ state: state, dispatch: dispatch }}>
                <NavBar />
                <div className="mainSideBar">
                  <SideBar className="parentSideBar" />
                </div>
              </recordContext.Provider>
            </ProtectedRoute>

            <Route path="*"><Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </Router>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      </>
    )
  }
  else {
    return <h1>Loading....</h1>;
  }
}
