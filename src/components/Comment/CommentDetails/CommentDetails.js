import React from "react";

function CommentDetails({ comment }) {
  const { name, email, body } = comment;
  return (
    <div className="w-75 m-4 text-left">
      <h5>{name}</h5>
      <h6>{email}</h6>
      <p>{body}</p>
    </div>
  );
}

export default CommentDetails;
