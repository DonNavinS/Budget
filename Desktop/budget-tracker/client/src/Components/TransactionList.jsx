import React, { useContext, useEffect } from 'react'
import { transactionContext } from '../Context/transactionContext'

const TransactionList = () => {
    const {state, addTransaction} = useContext(transactionContext)
    console.log(state);

const add = () => {
    addTransaction()
}


const storage = () => {
    const names = localStorage.getItem("transaction names")
console.log(names);
}

useEffect(()=> {
    localStorage.setItem("transaction names", state)
}, [add])
  return (
    <div>
      <button onClick={add}>ADD</button>
      {state && state.map(item=> (
          <div key={item.ID}>{item.name}</div>
      ))}


      <button onClick={storage}>STORAGE</button>
    </div>
  )
}

export default TransactionList
