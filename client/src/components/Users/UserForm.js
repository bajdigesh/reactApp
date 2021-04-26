import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Shared/ErrorMessage";

const UserForm = ({
  usersCount,
  onInputChange,
  errors,
  onSubmitForm,
  userData,
  fullNameRef,
  userNameRef,
  contactRef,
  emailRef,
  addressRef,
}) => {
  const gender = [
    {
      name: "gender",
      value: "male",
    },
    {
      name: "gender",
      value: "female",
    },
  ];

  // const [role, setRole] = useState(userData?.role);
  // const [userGender, setUserGender] = useState(userData?.gender);

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
              defaultValue={userData?.full_name}
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
              defaultValue={userData?.username}
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
              defaultValue={userData?.address}
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
              defaultValue={userData?.contact}
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
              defaultValue={userData?.email}
            />
            {errors.email && <ErrorMessage errorMsg={errors.email} />}
          </div>
          <div className="form-group">
            {gender.map((item, index) => {
              return (
                <div key={index} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={item.name}
                    id={item.value}
                    value={item.value}
                    onChange={onInputChange}
                    checked={userData?.gender === item.value ? true : false}
                  />
                  <label
                    className="form-check-label text-capitalize"
                    htmlFor={item.value}
                  >
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="form-group">
            <label htmlFor="roleOptions">Role</label>
            <select
              name="role"
              className="form-control"
              id="roleOptions"
              value={userData?.role}
              onChange={onInputChange}
            >
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
