import React from "react";
import { Link, useHistory } from "react-router-dom";

const UsersList = ({ usersData, usersCount, deleteRecord }) => {
  const history = useHistory();

  const onEditUser = (userId) => {
    history.push(`/user/edit/${userId}`);
  };

  return (
    <div className='container py-5 px-3'>
      <div className='card rounded shadow-sm border-0 p-4'>
        {usersData && (
          <>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>{usersCount} Users</h3>
              <Link to='/user/add' className='text-primary font-weight-medium'>
                <i className='fas fa-plus'></i> Add User
              </Link>
            </div>
            {usersCount > 0 ? (
              <table className='table table-borderless table-sm table-striped table-hover'>
                <thead className='thead-dark'>
                  <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user, index) => (
                    <tr key={index}>
                      <td>{user.full_name}</td>
                      <td>{user.username}</td>
                      <td>{user.address}</td>
                      <td>{user.contact}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className='btn text-primary mr-2'
                          onClick={() => onEditUser(user._id)}
                        >
                          <i className='fas fa-pencil'></i>
                        </button>
                        <button
                          className='btn text-danger'
                          onClick={() => deleteRecord(user._id)}
                        >
                          <i className='fas fa-times'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className='alert alert-danger'>No recordsFound</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UsersList;
