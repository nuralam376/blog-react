import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UsersPostsContext } from "../../../App";
import Comments from "../../Comment/Comments/Comments";

function PostDetails() {
  const { id } = useParams();
  const [allPosts] = useContext(UsersPostsContext);
  const [post, setPost] = useState({});

  const getPost = async () => {
    const post = allPosts.find((post) => post.id.toString() === id);
    setPost(post);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div>
      <h3 className="mb-4 mt-2">{post.title}</h3>
      <p>{post.body}</p>
      <Comments postId={post.id} />
    </div>
  );
}

export default PostDetails;
