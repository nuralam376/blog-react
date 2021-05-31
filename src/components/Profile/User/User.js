import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import Posts from "../../Post/Posts/Posts";
import UserDetails from "../UserDetails/UserDetails";

function User() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const getUser = async () => {
    const response = await axios.get(`/users/${id}`);
    setUser(response.data);
  };

  const getUserPosts = async () => {
    const response = await axios.get(`/users/${id}/posts`);
    setPosts(response.data);
  };

  useEffect(() => {
    getUser();
    getUserPosts();
  }, [id]);

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
