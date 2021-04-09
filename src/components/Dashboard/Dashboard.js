import React, { useEffect, useReducer } from "react";
import reducer from "../../reducers/reducer";
import ErrorMessage from "../Shared/ErrorMessage";
import Header from "../Shared/Header";
import { onAddUser, onFetchData } from "./../../actions/dashboardActions";
import useFormValidator from "./../../utils/useFormValidator";
import validate from "./validation";

const Dashboard = () => {
  let initialFormData = {
    name: "",
    address: "",
    errors: {
      name: "",
      address: "",
    },
  };
  const [usersList, dispatch] = useReducer(reducer, []);

  const onSubmitForm = () => {
    dispatch(onAddUser(formData));
  };

  const { onHandleSubmit, onHandleChange, formData } = useFormValidator(
    initialFormData,
    onSubmitForm,
    validate
  );

  useEffect(() => {
    fetch(process.env.API_URL + "users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(onFetchData(result));
      });
    console.log(usersList);
  }, []);

  const { errors } = formData;

  return (
    <>
      <Header />
      <div className="container p-5">
        {usersList.length && (
          <>
            <div className="d-flex justify-content-between">
              <h5 className="mb-3">Recent Users</h5>
              {/* <Link to="./">View All Users</Link> */}
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add User
              </button>
            </div>
            <div className="card shadow rounded-0">
              <table className="table table-striped mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onHandleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={onHandleChange}
                  />
                  {errors.name && <ErrorMessage errorMsg={errors.name} />}
                </div>
                <div className="form-group">
                  <label htmlFor="address" className="col-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    onChange={onHandleChange}
                  />
                  {errors.address && <ErrorMessage errorMsg={errors.address} />}
                </div>
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
