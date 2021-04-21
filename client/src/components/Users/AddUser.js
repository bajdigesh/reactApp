import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Shared/ErrorMessage";

const AddUser = ({
  usersCount,
  onInputChange,
  errors,
  onSubmitForm,
  onGetUserListById,
  userId,
  formState,
  fullNameRef,
  userNameRef,
  contactRef,
  emailRef,
  addressRef,
  userData,
}) => {
  useEffect(() => {
    onGetUserListById(userId);
  }, []);

  console.log(userId);
  /*  const [{ full_name, username }] = useState({
    full_name: userData.full_name,
    username: userData.username,
  }); */

  return (
    <div className="container py-5 px-3">
      <div className="card rounded shadow-sm border-0 p-4">
        <div className="d-flex align-items-center mb-3">
          <Link to="/user/list" className="text-primary mr-2">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h3 className="mb-0">Add User</h3>
          <p className="mb-0 ml-auto">Total Users: {usersCount}</p>
        </div>
        <form noValidate onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input
              ref={fullNameRef}
              type="text"
              className="form-control"
              id="full-name"
              name="full_name"
              onChange={onInputChange}
              autoFocus
              value={userId ? "" : ""}
            />
            {errors.full_name && <ErrorMessage errorMsg={errors.full_name} />}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={userNameRef}
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={onInputChange}
              value={userId ? "username" : ""}
            />
            {errors.username && <ErrorMessage errorMsg={errors.username} />}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              ref={addressRef}
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={onInputChange}
            />
            {errors.address && <ErrorMessage errorMsg={errors.address} />}
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              ref={contactRef}
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              onChange={onInputChange}
            />
            {errors.contact && <ErrorMessage errorMsg={errors.contact} />}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={onInputChange}
            />
            {errors.email && <ErrorMessage errorMsg={errors.email} />}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
