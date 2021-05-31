import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import UserDetails from "../UserDetails/UserDetails";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(
    parseInt(localStorage.getItem("active")) || 2
  );

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/users");
      setAllUsers(response.data);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const getUsersPaginationData = () => {
    const response = allUsers.slice(0, active);
    setUsers(response);
  };

  const setPaginationNumber = (number) => {
    setActive(number);
    localStorage.setItem("active", number);
  };

  const renderPagination = () => {
    let items = [];
    for (let number = 2; number <= allUsers.length; number += 2) {
      items.push(
        <Pagination.Item
          onClick={() => setPaginationNumber(number)}
          className={number === active && `active`}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    getUsersPaginationData();
  }, [allUsers.length, active]);

  return (
    <div>
      <h1>Users</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Search"
                className="form-control w-50 mx-auto text-center"
                name="name"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Search"
                className="form-control w-50 mx-auto text-center"
                name="email"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Search"
                className="form-control w-50 mx-auto text-center"
                name="website"
              />
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <UserDetails key={user.id} user={user} />
            </tr>
          ))}
        </tbody>
      </Table>
      {renderPagination()}
    </div>
  );
}

export default Users;
