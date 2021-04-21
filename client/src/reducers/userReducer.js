import {
  LIST_USERS,
  UPDATE_USER_COUNT,
  USER_COUNT,
} from "../constants/userConstants";

const initialState = {
  usersData: [],
  count: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USERS:
      const updatedState = { ...state, usersData: action.payload };
      return updatedState;
    case USER_COUNT:
      const updatedCount = { ...state, count: action.payload };
      return updatedCount;
    case UPDATE_USER_COUNT:
      const updatedUserCount = { ...state, count: action.payload + 1 };
      return updatedUserCount;
    default:
      return state;
  }
};

export default userReducer;
