import React from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

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

function HeadCell() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    localStorage.setItem(property, isAsc ? "desc" : "asc");
  };

  return (
    <>
      {headCells.map((headCell) => (
        <th
          key={headCell.id}
          onClick={(e) => handleRequestSort(e, headCell.id)}
          className="icon"
        >
          {headCell.label}
          {order === "asc" && orderBy === headCell.id ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </th>
      ))}
    </>
  );
}

export default HeadCell;
