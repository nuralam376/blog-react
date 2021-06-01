import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import UserTable from "../UserTable/UserTable";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(
    parseInt(localStorage.getItem("active")) || 2
  );

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/users");
      setAllUsers(response.data);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const getUsersPaginationData = () => {
    const response = allUsers.slice(0, active);
    setUsers(response);
  };

  const setPaginationNumber = (number) => {
    setActive(number);
    localStorage.setItem("active", number);
  };

  const renderPagination = () => {
    let items = [];
    for (let number = 2; number <= allUsers.length; number += 2) {
      items.push(
        <Pagination.Item
          onClick={() => setPaginationNumber(number)}
          className={number === active && `active`}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    getUsersPaginationData();
  }, [allUsers.length, active]);

  useEffect(() => {
    const searchText = localStorage.getItem("search");
    if (searchText) {
      const user = getSearchResult(searchText);
      setUsers(user);
    }
  }, [allUsers.length]);

  const getSearchResult = (searchText) => {
    const user = allUsers
      .filter((user) => {
        let searchItem;
        if (searchText === "") {
          searchItem = "";
        }
        if (user.name.toLowerCase().includes(searchText.toLowerCase())) {
          searchItem = user;
        }
        if (user.email.toLowerCase().includes(searchText.toLowerCase())) {
          searchItem = user;
        }
        if (user.website.toLowerCase().includes(searchText.toLowerCase())) {
          searchItem = user;
        }
        return searchItem;
      })
      .slice(0, active);
    return user;
  };

  const searchUser = (searchText) => {
    const user = getSearchResult(searchText);
    localStorage.setItem("search", searchText);
    setUsers(user);
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        placeholder="Search"
        className="form-control w-25 mx-auto text-center mb-3"
        name="name"
        onChange={(event) => searchUser(event.target.value)}
        defaultValue={localStorage.getItem("search")}
      />
      <UserTable users={users} />
      {renderPagination()}
    </div>
  );
}

export default Users;
