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
    {
      Header: "Date", //Header of the column
      accessor: "date" // Value accessor
    },
    {
      Header: "Description", //Header of the column
      accessor: "description" // Value accessor
    }
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
    </div>
  );
}

export default TodoList;
