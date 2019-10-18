import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

function TodoList() {
  const [descState, setDesckstate] = useState({
    desc: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    setDesckstate({ ...descState, [event.target.name]: event.target.value });
  };

  const addToDo = event => {
    event.preventDefault();
    setTodos([...todos, descState]);
    setDesckstate([""]);
  };

  // const handleDelete = index => {
  //   const filtered = todos.filter((todo, i) => i !== index);
  //   setTodos(filtered);
  // };

  const columns = [
    { Header: "Date", accessor: " date" },
    { Header: "Description", accessor: "description" }
  ];

  return (
    <div className="App">
      <form onSubmit={addToDo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          value={descState.desc}
          onChange={inputChanged}
        />
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={descState.date}
          onChange={inputChanged}
        />

        <input type="submit" value="Add" />
      </form>
      <ReactTable
        todos={todos}
        columns={columns}
        sortable={true}
        defaultPageSize={10}
      />
    </div>
  );
}

export default TodoList;
