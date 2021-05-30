import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "../Post/Post";

function Posts({ posts }) {
  return (
    <Container>
      <h1 className="mb-5 mt-2">Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md="4" className="p-5">
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Posts;
