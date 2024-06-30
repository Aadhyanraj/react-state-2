import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "taske", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4 }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos(todos.map((todos)=>{
      return{
        ...todos,
        task: todos.task.toUpperCase()
      };
    }));
    
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br></br>
      <button onClick={addNewTask}>Add task</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h3>Task Todo</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <button onClick={upperCaseAll}>upperCaseAll</button>
    </div>
  );
}
