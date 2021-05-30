import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Blog - React</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/posts">All Posts</Nav.Link>
        <Nav.Link href="/my-posts">My Posts</Nav.Link>
        <Nav.Link href="/add-post">Add Post</Nav.Link>
        <Nav.Link href="/users">Users List</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
