import React from "react";
import { Link } from "react-router-dom";

function UserDetails({ user }) {
  const { id, name, email, website } = user;
  return (
    <>
      <td>
        <Link to={`/users/${id}`} className="text-info">
          {name}
        </Link>
      </td>
      <td>{email}</td>
      <td>{website}</td>
    </>
  );
}

export default UserDetails;
