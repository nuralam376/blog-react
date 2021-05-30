import React from "react";

function CommentDetails({ comment }) {
  const { name, email, body } = comment;
  return (
    <div>
      <h3>{name}</h3>
      <h6>{email}</h6>
      <p>{body}</p>
    </div>
  );
}

export default CommentDetails;
