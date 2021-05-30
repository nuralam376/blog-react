import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return <Link to={`/posts/${post.id}`}>{post.title}</Link>;
}

export default Post;
