import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Comments from "../../Comment/Comments/Comments";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [userId] = useContext(UserContext);

  const getPost = async () => {
    const response = await axios.get(`/posts/${id}`);
    setPost(response.data);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  const deletePost = async () => {
    if (post.userId !== userId) {
      alert("You cannot delete the post");
      return;
    }
    try {
      const response = await axios.delete(`/posts/${post.id}`);
      if (response.status === 200) {
        alert("Post deleted successfully");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h3 className="m-4 text-left">
        {post.title}
        {post.userId === userId && (
          <>
            <Button variant="success" className="ml-3">
              Update
            </Button>
            <Button variant="danger" className="ml-3" onClick={deletePost}>
              Delete
            </Button>
          </>
        )}
      </h3>
      <p className="m-4 text-left">{post.body}</p>
      <hr />
      <Comments postId={post.id} />
    </div>
  );
}

export default PostDetails;
