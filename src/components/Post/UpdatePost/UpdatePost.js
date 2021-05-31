import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostForm from "../PostForm/PostForm";

function UpdatePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await axios.get(`/posts/${id}`);
      if (response.data) {
        setPost(response.data);
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div>
      <h1>Update Post</h1>
      <PostForm post={post} />
    </div>
  );
}

export default UpdatePost;
