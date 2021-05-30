import React from "react";

function UserDetails({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <p>{user.website}</p>
    </div>
  );
}

export default UserDetails;
