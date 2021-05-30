import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(10);

  const getAllPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data.splice(posts.length, numberOfPosts));
  };

  useEffect(() => {
    getAllPosts();
  }, [numberOfPosts]);

  const loadMorePosts = () => {
    setNumberOfPosts(posts.length + 10);
  };

  return (
    <div>
      <h1>All Posts</h1>
      <Button variant="info" onClick={loadMorePosts}>
        Load More
      </Button>
    </div>
  );
}

export default AllPosts;
