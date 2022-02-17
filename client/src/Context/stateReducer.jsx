export default (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          name: action.payload.name,
          amount: action.payload.amount,
          _id: action.payload._id,
        },
      ];
    case "RETRIEVE":
      return (state = action.payload);

    case "DELETE":
      return state.filter((item) => item._id !== action.payload);

    case "UPDATE":
      const index = state.map((item) => item._id).indexOf(action.payload._id);
      const firstSegment = state.slice(0, index);
      const secondSegment = state.slice(index + 1, state.length);
      return [
        ...firstSegment,
        {
          name: action.payload.name,
          amount: action.payload.amount,
        },
        ...secondSegment,
      ];
    default:
      return state;
  }
};
