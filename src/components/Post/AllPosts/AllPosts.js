import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Posts from "../Posts/Posts";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(10);

  const getAllPosts = async () => {
    const response = await axios.get("/posts");
    setPosts(response.data.splice(0, numberOfPosts)); // Load the 10 posts only from the last posts length
  };

  useEffect(() => {
    getAllPosts();
  }, [numberOfPosts]);

  const loadMorePosts = () => {
    setNumberOfPosts(posts.length + 10);
  };

  return (
    <div>
      <Posts posts={posts} />
      <Button variant="info" className="mt-2" onClick={loadMorePosts}>
        Load More
      </Button>
    </div>
  );
}

export default AllPosts;
