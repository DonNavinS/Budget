import React, { useContext } from 'react'
import { transactionContext } from '../Context/transactionContext'

const TransactionList = () => {
    const {state, addTransaction} = useContext(transactionContext)
    console.log(state);

const add = () => {
    addTransaction()
}
  return (
    <div>
      <button onClick={add}>ADD</button>
      {state && state.map(item => (
          <div>{item.name}</div>
      ))}
    </div>
  )
}

export default TransactionList
