import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Blog - React</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">All Posts</Nav.Link>
        <Nav.Link href="#features">My Posts</Nav.Link>
        <Nav.Link href="#features">Add Post</Nav.Link>
        <Nav.Link href="#features">Users List</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
