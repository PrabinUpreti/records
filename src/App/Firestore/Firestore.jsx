// import React from 'react'
import { fs, storage } from "../Auth/Auth";
import { userDetails } from '../Auth/Auth'


export const getInitialData = () => {
    //    storage.ref().child("profile").listAll().then(res=>{
    //        console.log(res);
    //    });
    let x = new Promise((resolve, reject) => {
        let firestoreRef = fs.collection("users").doc(userDetails.uid).collection("consumer")

        firestoreRef.get().then(res => {
            resolve(res)
        }).catch(err => {
            console.log("error", err);
        })
    })
    return x
}
export const getInitialTransactionData = (id) => {
    let x = new Promise((resolve, reject) => {
        let firestoreRef = fs.collection("users").doc(userDetails.uid).collection("consumer").doc(id).collection("transaction")

        firestoreRef.get().then(res => {
            resolve(res)
        }).catch(err => {
            console.log("error", err);
        })
    })
    return x
}
export const addNewCustomer = (data) => {
    let firestoreRef = fs.collection("users").doc(userDetails.uid).collection("consumer")
    firestoreRef.add(data)

}

export const addTransaction = (param) => {
    console.log(param,userDetails.uid)
    let firestoreRef = fs.collection("users").doc(userDetails.uid).collection("transaction")
    firestoreRef.add(param)
}

export const deleteTransaction = (id) =>{
    console.log(id)
    let deleteRef = fs.collection("users").doc(userDetails.uid).collection("transaction").doc(id)
    deleteRef.delete()
}

export default function Firestore() {



    // return (
    //     <div>

    //     </div>
    // )
}
