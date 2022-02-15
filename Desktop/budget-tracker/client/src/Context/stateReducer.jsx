export default (state, action) => {
switch (action.type) {
    case "ADD":
return [...state, 
{
    name: "new",
    ID: 10,
    amount: 100
}]
    default: 
    return state
}
}