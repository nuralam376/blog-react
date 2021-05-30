import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Post from "../Post/Post";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(10);

  const getAllPosts = async () => {
    const response = await axios.get("/posts");
    setPosts(response.data.splice(posts.length, numberOfPosts)); // Load the 10 posts only from the last posts length
  };

  useEffect(() => {
    getAllPosts();
  }, [numberOfPosts]);

  const loadMorePosts = () => {
    setNumberOfPosts(posts.length + 10);
  };

  return (
    <div>
      <h1 className="mb-5 mt-2">All Posts</h1>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md="4" className="p-5">
              <Post post={post} />
            </Col>
          ))}
        </Row>
      </Container>

      <Button variant="info" className="mt-2" onClick={loadMorePosts}>
        Load More
      </Button>
    </div>
  );
}

export default AllPosts;
