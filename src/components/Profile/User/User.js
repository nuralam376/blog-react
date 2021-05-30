import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersPostsContext } from "../../../App";
import Posts from "../../Posts/Posts";
import UserDetails from "../UserDetails/UserDetails";

function User() {
  const [allPosts, , userId] = useContext(UsersPostsContext);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("/users");
    const userData = response.data.find((user) => user.id === userId);
    setUser(userData);
  };

  const getAllPosts = () => {
    const userPosts = allPosts.filter((post) => post.userId === userId);
    console.log("user Posts", userPosts);
    setPosts(userPosts);
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, []);

  return (
    <div>
      <UserDetails user={user} />
      <Posts posts={posts} />
    </div>
  );
}

export default User;
