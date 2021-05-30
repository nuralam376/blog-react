import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Blog - React</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/posts" className="nav-link">
          All Posts
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/add-post" className="nav-link">
          Add Post
        </Link>
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
