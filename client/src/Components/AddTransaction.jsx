import React, { useContext, useState } from 'react'
import { transactionContext } from '../Context/transactionContext'
import Axios from "axios"

const AddTransaction = () => {
    
    const {state, addTransaction} = useContext(transactionContext)

  const [newName, setNewName] = useState("")
  const [newAmount, setNewAmount] = useState(0)
    const add = () => {
        Axios.post("http://localhost:3001/new", {
            name: newName,
            amount: newAmount,
        }).then(response => {
            console.log(response.data);
            addTransaction(newName, newAmount, response.data)
        })
    }
  return (
    <div>
        <input type="text" placeholder='Transaction Name' onChange={(e)=>setNewName(e.target.value)}/>
        <input type="text" placeholder='Transaction Amount' onChange={(e)=>setNewAmount(e.target.value)}/>
        <button onClick={add}>ADD</button>
        <button onClick={()=> {
            console.log(state);
        }}>STATE</button>
    </div>
  )
}

export default AddTransaction
