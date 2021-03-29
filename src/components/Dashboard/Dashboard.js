import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";

const Dashboard = () => {
  const API_URL = "http://localhost:8086/users";
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(API_URL, {
      headers: {
        "Content-Type": "application-json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsersList(data);
      });
  };
  return (
    <>
      <Header />
      <div className='container p-5'>
        {usersList.length && (
          <>
            <h5 className='mb-3'>Recent Users</h5>
            <div className='card shadow rounded-0'>
              <table className='table table-striped mb-0'>
                <thead className='thead-dark'>
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
    </>
  );
};

export default Dashboard;
