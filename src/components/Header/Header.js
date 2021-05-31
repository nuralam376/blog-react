import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

function Header() {
  const [userId] = useContext(UserContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="text-white">
        Blog - React
      </Link>
      <Nav className="ml-auto">
        <Link to="/posts" className="nav-link">
          All Posts
        </Link>
        <Link to={`/users/${userId}`} className="nav-link">
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
