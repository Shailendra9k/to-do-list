import React, { useState } from "react";
import "./App.css";
// import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Simple TodoList</header>
//       <TodoList />
//     </div>
//   );
// }
// export default App;
function App() {
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

  const handleDelete = index => {
    const filtered = todos.filter((todo, i) => i !== index);
    setTodos(filtered);
  };

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

      <Todo todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
