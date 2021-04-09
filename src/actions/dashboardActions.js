import { ADD_USER, FETCH_DATA } from "./../constant";

export const onFetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const onAddUser = (data) => {
  console.log(data);
  return {
    type: ADD_USER,
    payload: data,
  };
};
