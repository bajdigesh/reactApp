import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onFetchUsers,
  onGetUsersCount,
  updateUserCount
} from "../../actions/userActions";
import useApiHandler from "../../api/apiHandler";
import validate from "../../components/Users/validation";
import useFormValidator from "../../utils/useFormValidator";
import UserForm from "./../../components/Users/UserForm";

const UserFormContainer = (props) => {
  const fullNameRef = useRef();
  const userNameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const dispatch = useDispatch();
  const usersCount = useSelector((state) => state.count);
  const [selectedUserData, setSelectedUserData] = useState({});
  // const userData = useSelector((state) => state.usersData);

  const clearForm = () => {
    fullNameRef.current.value = "";
    userNameRef.current.value = "";
    contactRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    fullNameRef.current.focus();
  };

  const { id } = props.match.params;
  const userId = id ? id : "";

  const initialState = {
    full_name: "",
    username: "",
    address: "",
    contact: "",
    email: "",
  };

  const formSubmit = () => {
    let data = {
      full_name: formState.full_name,
      username: formState.username,
      address: formState.address,
      contact: formState.contact,
      email: formState.email,
    };
    if (userId) {
      useApiHandler(
        `http://localhost:3030/api/user/edit/${userId}`,
        "put",
        data
      )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } else {
      useApiHandler("http://localhost:3030/api/user/add", "post", data)
        .then((result) => {
          if (result) {
            clearForm();
            dispatch(updateUserCount(usersCount));
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  useEffect(() => {
    useApiHandler("http://localhost:3030/api/count/users", "get")
      .then((result) => {
        dispatch(onGetUsersCount(result));
      })
      .catch((err) => {
        alert(err);
      });
  }, [formSubmit]);

  const onGetUserById = (userId) => {
    useApiHandler(`http://localhost:3030/api/user/${userId}`, "get")
      .then((result) => {
        setSelectedUserData(result[0]);
        dispatch(onFetchUsers(result));
      })
      .catch((err) => {
        console.log("Get Users", err);
      });
  };

  useEffect(() => {
    onGetUserById(userId);
  }, [userId]);

  const { onInputChange, onSubmitForm, errors, formState } = useFormValidator(
    initialState,
    validate,
    formSubmit
  );

  return (
    <>
      <UserForm
        usersCount={usersCount}
        onInputChange={onInputChange}
        errors={errors}
        onSubmitForm={onSubmitForm}
        userId={userId}
        formState={formState}
        fullNameRef={fullNameRef}
        userNameRef={userNameRef}
        contactRef={contactRef}
        emailRef={emailRef}
        addressRef={addressRef}
        selectedUserData={selectedUserData}
      />
    </>
  );
};

export default UserFormContainer;
