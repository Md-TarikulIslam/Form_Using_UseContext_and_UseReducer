export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      console.log(action.id);
      return state.filter((title) => title.id !== action.id);
    default:
      return state;
  }
};
