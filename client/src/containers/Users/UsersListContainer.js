import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchUsers, onGetUsersCount } from "../../actions/userActions";
import useApiHandler from "../../api/apiHandler";
import UsersList from "../../components/Users/UsersList";

const UsersListContainer = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData);
  const usersCount = useSelector((state) => state.count);

  const deleteRecord = (id) => {
    useApiHandler(`http://localhost:3030/api/user/delete/${id}`, "delete")
      .then((resp) => {
        //console.log(resp);
        onGetUserList();
        onGetUserCount();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onGetUserList = () => {
    useApiHandler("http://localhost:3030/api/users", "get")
      .then((result) => {
        dispatch(onFetchUsers(result));
      })
      .catch((err) => {
        console.log("Get Users", err);
      });
  };

  const onGetUserCount = () => {
    useApiHandler("http://localhost:3030/api/count/users", "get")
      .then((result) => {
        dispatch(onGetUsersCount(result));
      })
      .catch((err) => {
        alert("Users Count", err);
      });
  };

  useEffect(() => {
    onGetUserCount();
  }, []);

  useEffect(() => {
    onGetUserList();
  }, []);

  return (
    <>
      <UsersList
        usersData={usersData}
        usersCount={usersCount}
        deleteRecord={deleteRecord}
      />
    </>
  );
};

export default UsersListContainer;
