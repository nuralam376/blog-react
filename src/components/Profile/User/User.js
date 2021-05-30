import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UsersPostsContext } from "../../../App";
import Posts from "../../Post/Posts/Posts";
import UserDetails from "../UserDetails/UserDetails";

function User() {
  const [allPosts, , userId] = useContext(UsersPostsContext);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const getAllUsers = async () => {
    const response = await axios.get("/users");
    const userData = response.data.find((user) => user.id.toString() === id);
    setUser(userData);
  };

  const getAllPosts = () => {
    const userPosts = allPosts.filter((post) => post.userId.toString() === id);
    setPosts(userPosts);
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <UserDetails user={user} />
          </tr>
        </tbody>
      </Table>
      <Posts posts={posts} />
    </>
  );
}

export default User;
