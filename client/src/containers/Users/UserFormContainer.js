import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getUserById,
  onGetUsersCount,
  updateUserCount,
} from "../../actions/userActions";
import useApiHandler from "../../api/apiHandler";
import validate from "../../components/Users/validation";
import useFormValidator from "../../utils/useFormValidator";
import UserForm from "./../../components/Users/UserForm";

const UserFormContainer = (props) => {
  const { id } = props.match.params;
  const userId = id ? id : "";

  const history = useHistory();
  const fullNameRef = useRef();
  const userNameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const dispatch = useDispatch();
  const usersCount = useSelector((state) => state.count);

  const userData = useSelector((state) => state.userData[0]);

  const clearForm = () => {
    fullNameRef.current.value = "";
    userNameRef.current.value = "";
    contactRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    fullNameRef.current.focus();
  };

  const initialState = useMemo(
    () => ({
      full_name: userData ? userData.full_name : "",
      username: userData ? userData.username : "",
      contact: userData ? userData.contact : "",
      address: userData ? userData.address : "",
      email: userData ? userData.email : "",
      gender: userData ? userData.gender : "",
      role: userData ? userData.role : "",
    }),
    [userData]
  );

  //console.log(userData);

  const formSubmit = () => {
    let data = {
      full_name: formState.full_name,
      username: formState.username,
      address: formState.address,
      contact: formState.contact,
      email: formState.email,
      gender: formState.gender,
      role: formState.role,
    };
    if (userId) {
      useApiHandler(
        `http://localhost:3030/api/user/edit/${userId}`,
        "put",
        data
      )
        .then((result) => {
          console.log(result);
          history.push("/");
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
            history.push("/");
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  const onGetUserById = (userId) => {
    useApiHandler(`http://localhost:3030/api/user/${userId}`, "get")
      .then((result) => {
        dispatch(getUserById(result));
      })
      .catch((err) => {
        console.log("Get Users", err);
      });
  };

  useEffect(() => {
    onGetUserById(userId);
  }, [onGetUserById]);

  useEffect(() => {
    useApiHandler("http://localhost:3030/api/count/users", "get")
      .then((result) => {
        dispatch(onGetUsersCount(result));
      })
      .catch((err) => {
        alert(err);
      });
  }, [formSubmit]);

  const { onInputChange, onSubmitForm, errors, formState } = useFormValidator(
    initialState,
    validate,
    formSubmit,
    userId
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
        userData={userData}
      />
    </>
  );
};

export default UserFormContainer;
