export default (state, action) => {
switch (action.type) {
    case "ADD":
return [...state, 
{
    name: action.payload.name,
    amount: action.payload.amount,
    _id: action.payload._id
}]
case "RETRIEVE":
    return state = action.payload

    case "DELETE":
    return state.filter(item => item._id !== action.payload)
    default: 
    return state
}
}