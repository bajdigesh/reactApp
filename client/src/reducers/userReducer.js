import {
  LIST_USERS,
  LIST_USER_BY_ID,
  UPDATE_USER_COUNT,
  USER_COUNT,
} from "../constants/userConstants";

const initialState = {
  userData: [],
  usersData: [],
  count: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USER_BY_ID:
      const listUserById = { ...state, userData: action.payload };
      return listUserById;
    case LIST_USERS:
      const updatedState = {
        ...state,
        usersData: action.payload,
        userData: [],
      };
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
