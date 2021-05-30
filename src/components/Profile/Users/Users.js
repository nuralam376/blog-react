import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UserDetails from "../UserDetails/UserDetails";

function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  });
  return (
    <div>
      <h1>Users</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <UserDetails user={user} />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
