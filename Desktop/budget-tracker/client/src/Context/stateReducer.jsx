export default (state, action) => {
switch (action.type) {
    case "ADD":
        const transactionNames = state.map(item=> item.name)
        const transactionAmounts = state.map(item=> item.amount)
        const transactionIDs = state.map(item=> item.ID)
        // localStorage.setItem("transaction names", transactionNames)
        // localStorage.setItem("transaction amounts", transactionNames)
        // localStorage.setItem("transaction IDs", transactionNames)
return [...state, 
{
    name: "new",
    ID: Math.floor(Math.random()*10000),
    amount: 100
}]
    default: 
    return state
}
}