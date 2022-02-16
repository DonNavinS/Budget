import React, { useContext, useEffect, useState } from 'react'
import Axios from "axios"
import { transactionContext } from '../Context/transactionContext'

const TransactionList = () => {
    const {state, retrieveTransactions} = useContext(transactionContext)

useEffect(()=> {
Axios.get("http://localhost:3001/retrieve").then((response)=> {
retrieveTransactions(response.data)
})
}, [])
  return (
    <div className='flex flex-col'>
 
      {state && state.map(item=> (
        <div key={item._id} className='flex justify-center'>
          <div >{item.name}</div>
          <div >{item.amount}</div>
        </div>
      ))}


    </div>
  )
}

export default TransactionList
