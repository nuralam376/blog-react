import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentDetails from "../CommentDetails";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  const getPostComments = async () => {
    const response = await axios.get("/comments");

    const getPostComments = response.data.filter(
      (comment) => comment.postId === postId
    );
    setComments(getPostComments);
  };

  useEffect(() => {
    getPostComments();
  }, [postId]);

  console.log(comments);

  return (
    <div>
      <h1>Comments</h1>
      {comments.length &&
        comments.map((comment) => (
          <CommentDetails key={comment.id} comment={comment} />
        ))}
    </div>
  );
}

export default Comments;
