export default (state, action) => {
switch (action.type) {
    case "ADD":
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