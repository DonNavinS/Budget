import React, { useContext, useEffect } from 'react'
import Axios from "axios"
import { transactionContext } from '../Context/transactionContext'

const TransactionList = () => {
    const {state, addTransaction} = useContext(transactionContext)
    console.log(state);

const add = () => {
    addTransaction()
    Axios.post("http://localhost:3001/new", {
      name: "This is the new name"
    }).then((response)=>console.log(response))
}



  return (
    <div>
      <button onClick={add}>ADD</button>
      {state && state.map(item=> (
          <div key={item.ID}>{item.name}</div>
      ))}


    </div>
  )
}

export default TransactionList
