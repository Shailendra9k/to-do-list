import React, {useState} from 'react';
import './App.css';

function App() {
  const[inputs, setInputs] = useState(
    {
      desc: '',
      date: ''
    }
  );
  const[todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setInputs({...inputs, [event.target.name]:event.target.value});
  }
  
  const addToDo = (event) => {
    event.preventDefault();
    setTodos([ ...todos, inputs]);
    setInputs(['']);
    
    
  }
  return (
    <div className="App">
      <h1>Simple ToDoList</h1>
      <form onSubmit={addToDo}>
        <label>Description:</label>
        <input type='text' name='desc'value={inputs.desc} onChange={inputChanged} />
        <label>Date:</label>
        <input type='text' name='date' value={inputs.date} onChange={inputChanged} />
        
        <input type='submit' value='Add'/>
      </form>
      <table><tbody>
        <tr>
          <td>Date</td>
          <td>Description</td>
        </tr>
        {todos.map((inputs, index) => <tr key={index}><td>{inputs.date}</td><td>{inputs.desc}</td></tr>)}  
      </tbody></table>
    </div>
  );
}

export default App;
