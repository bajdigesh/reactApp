import { ADD_USER, FETCH_DATA } from "../constant";

const reducer = (state, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
