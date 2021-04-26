import {
  LIST_USERS,
  LIST_USER_BY_ID,
  UPDATE_USER_COUNT,
  USER_COUNT,
} from "../constants/userConstants";

export const onFetchUsers = (result) => {
  return {
    type: LIST_USERS,
    payload: result,
  };
};

export const onGetUsersCount = (result) => {
  return {
    type: USER_COUNT,
    payload: result,
  };
};

export const updateUserCount = (result) => {
  return {
    type: UPDATE_USER_COUNT,
    payload: result,
  };
};

export const getUserById = (result) => {
  return {
    type: LIST_USER_BY_ID,
    payload: result,
  };
};
