import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../../Comment/Comments/Comments";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async () => {
    const response = await axios.get(`/posts/${id}`);
    setPost(response.data);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div>
      <h3 className="m-4 text-left">{post.title}</h3>
      <p className="m-4 text-left">{post.body}</p>
      <hr />
      <Comments postId={post.id} />
    </div>
  );
}

export default PostDetails;
