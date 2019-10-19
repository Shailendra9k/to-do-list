import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Date", //Header of the column
    accessor: "date" // Value accessor
  },
  {
    Header: "Description", //Header of the column
    accessor: "description" // Value accessor
  },
  {
    id: "button",
    sortable: false,
    filterable: false,
    width: 100,
    accessor: "todos",
    Cell: ({ index }) => (
      <button
        className="btn btn-danger sm"
        onClick={props => {
          props.onDelete(index);
        }}
      >
        Delete
      </button>
    )
  }
];
function Todo(props) {
  return (
    <div>
      <ReactTable
        todos={props.todos}
        columns={columns}
        sortable={true}
        defaultPageSize={10}
      />
    </div>
  );
}
export default Todo;
