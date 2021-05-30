import React from "react";
import { Link } from "react-router-dom";

function UserDetails({ user }) {
  const { id, name, email, website } = user;

  return (
    <>
      <td>{id}</td>
      <td>
        <Link to={`/users/${id}`}>{name}</Link>
      </td>
      <td>{email}</td>
      <td>{website}</td>
    </>
  );
}

export default UserDetails;
