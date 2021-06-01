import React from "react";
import { Table } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import UserDetails from "../UserDetails/UserDetails";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "website", numeric: true, disablePadding: false, label: "Website" },
];

function UserTable(props) {
  const { users } = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    localStorage.setItem(property, isAsc ? "desc" : "asc");
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    order = localStorage.getItem(orderBy) || order;

    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {headCells.map((headCell) => (
              <th
                key={headCell.id}
                onClick={(e) => handleRequestSort(e, headCell.id)}
                className="icon"
              >
                {headCell.label}
                {(order === "asc" && orderBy === headCell.id) ||
                localStorage.getItem(headCell.id) === "asc" ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stableSort(users, getComparator(order, orderBy)).map((user) => (
            <tr key={user.id}>
              <UserDetails user={user} />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UserTable;
