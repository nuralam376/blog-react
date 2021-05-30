import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      <h3 className="mb-4 mt-2">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
