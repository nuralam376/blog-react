import React from "react";
import { ChatLeftDotsFill, Mailbox, Person } from "react-bootstrap-icons";

function CommentDetails({ comment }) {
  const { name, email, body } = comment;
  return (
    <div className="w-75 m-4 text-left">
      <h5>
        <Person />
        {name}
      </h5>
      <h6>
        <Mailbox />
        {email}
      </h6>
      <p>
        <ChatLeftDotsFill /> {body}
      </p>
    </div>
  );
}

export default CommentDetails;
